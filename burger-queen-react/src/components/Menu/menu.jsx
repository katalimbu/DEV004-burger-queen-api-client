import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import "./menu.css";
import moment from 'moment'; 
import RouteDeny from "../error/error";
import NavBarWaiter from '../Users/NavBarWaiter';
// componente menu: 
const Menu = () => {
  // se guarda el estado que va a cambiar durante la ejecución del componente.
  // mediante el hook useSatate 
  const [products, setProducts] = useState([]);
  const [productType, setProductType] = useState('breakfast');
  const [clientName, setClientName] = useState('Escribe nombre del cliente');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedOrderItems, setSelectedOrderItems] = useState([]);
  const [finalOrderPrice, setFinalOrderPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // los EFFECTS se manejan con useEffect => se colocan operaciones secundarias.
  // despues de renderizar los componentes se ejecuta el callback useEffect.
  // hooks, elevación de estado. 
  // lograr hacer componentes hijos que utilicen props. 
  useEffect(() => {
    const totalPrice = selectedOrderItems.reduce((total, product) => {
      return total + product.price * product.qty;
    }, 0);
    setFinalOrderPrice(totalPrice);
  }, [selectedOrderItems]); // arreglo de dependencias opcional

  const accessToken = localStorage.getItem('token');
// axios: es posible no repetir header. 
  const listProducts = () => {
    axios.get('http://localhost:8080/products', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        console.log('esto es response.data', response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Error al obtener los datos');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    listProducts();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  let role = localStorage.getItem('userRole')
  if(role === "chef"){
    return <RouteDeny />
  }

  const filterProducts = products.filter(product => product.type === productType);

  const ProductSelection = (item) => {
    const index = selectedProducts.findIndex(product => product.id === item.id);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, item]);
      setSelectedOrderItems([...selectedOrderItems, { ...item, qty: 1 }]);
    }
  };

  const clearOrderContainer = () => {
    setSelectedProducts([]);
    setSelectedOrderItems([]);
  };

  const addItemToOrder = (productId) => {
    const updatedOrderItems = selectedOrderItems.map(item => {
      if (item.id === productId) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setSelectedOrderItems(updatedOrderItems);
    setSelectedProducts(updatedOrderItems);
  };

  const saveClientName = () => {
    alert('Tomaremos la orden para' + ' ' + clientName);
  };

  const changeClientName = event => {
    const newNameClient = event.target.value;
    setClientName(newNameClient);
  };

  const eraseItemToOrder = (productId) => {
    const updatedOrderItems = selectedOrderItems.map(item => {
      if (item.id !== productId) {
        return item;
      }
      if (item.qty === 0) {
        return { ...item };
      }
      return { ...item, qty: item.qty - 1 };
    }).filter(item => item.qty !== 0);

    setSelectedOrderItems(updatedOrderItems);
    setSelectedProducts(updatedOrderItems);
  };

  const OrderReadyToKitchen = () => {
    const accessToken = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const formattedDateTime = moment().format('YYYY-MM-DD HH:mm');

    const orderData = {
      userId: userId,
      client: clientName,
      products: selectedOrderItems.map(item => ({
        qty: item.qty,
        product: {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          type: item.type,
          dateEntry: item.dateEntry
        }
      })),
      status: "pending",
      dataEntry: formattedDateTime,
    };

    if (clientName === '' || selectedOrderItems.length === 0) {
      alert('Por favor, agrega productos a la órden antes de enviar a cocina.');
      return;
    }
    axios.post('http://localhost:8080/orders', orderData, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
        
    })
      .then(response => {
        alert('Tu orden ha sido enviada a cocina exitosamente');
        console.log('esto es lo que se envia a api', response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Error al obtener los datos');
        setIsLoading(false);
      });
  };

// despues de h1 tiene que ir h2 ... marcadores de contenido, no solo por el estilo.
// html semantico 
  return (
   <>
  <NavBarWaiter/>
   <div className='containerGeneral'>
       <h1 className='greeting'>Hola mesero!! elige tu menu:</h1>
     <nav className='nav'>
      <img className='logoImg' src={logo} alt="Logo" />
      <div className='containerBtnType'>
        <button className='btnBreakfast' onClick={() => { clearOrderContainer(); setProductType('Desayuno') }}>Desayuno</button>
        <button className='btnDinner' onClick={() => { clearOrderContainer(); setProductType('Almuerzo') }}>Almuerzo/Cena</button>
      </div>
      </nav>
     <div className='menuAndOrderContainer'>
          <div className='containerItems'>
            <h2 className='titleContainer'>Menú disponible:</h2>
            {filterProducts.map(item => (
              <div key={item.id}>
                <button className='btnItem' onClick={() => ProductSelection(item)}>
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.price}</p>
                  <p>Tipo: {item.type}</p>
                </button>
              </div>
            ))}
          </div>
        <div className='orderContainer'>
          <h3 className='titleContainer'>Tu órden aqui:</h3>
          <input  onChange={changeClientName} className='clientName' placeholder='nombre del cliente' name="myInput" value={clientName} />
          <button  className='saveClientName' onClick={saveClientName}>Guardar Cliente</button>
          {selectedOrderItems.map(product => (
            <div key={product.id} className='orderedProduct'>
              <h4>{product.name}</h4>
              <p>Cantidad: {product.qty}</p>
              <p>Precio: ${product.price}</p>
              <p>Tipo: {product.type}</p>
              <ion-icon name="add-circle-outline" className='btnAddItem' onClick={() => addItemToOrder(product.id)}></ion-icon>
              <ion-icon name="trash-outline" className='eraseItem' onClick={() => eraseItemToOrder(product.id)}></ion-icon>
            </div>
          ))}
          <label>
            <input className='finalOrderPrice' placeholder='Total: $' name="totalPrice" value={finalOrderPrice} readOnly />
          </label>
        </div>
      </div>
      <button className='btnSend' onClick={OrderReadyToKitchen}>Enviar Órden a cocina</button>
    </div>
    </>
  );
};

export default Menu;
