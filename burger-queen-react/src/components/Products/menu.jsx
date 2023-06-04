import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import "./menu.css"

const Menu = () => {
  const [data, setData] = useState([]);
  const [productType, setProductType] = useState('breakfast');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');

    const ListProducts = () => {
      axios.get('http://localhost:8080/products', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error(error);
          setError('Error al obtener los datos');
          setIsLoading(false);
        });
    };

    ListProducts();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filterData = data.filter(product => product.type === productType);

  const handleProductSelection = (item) => {
    const index = selectedProducts.findIndex(product => product.id === item.id);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, item]);
    } else {
      const updatedProducts = [...selectedProducts];
      updatedProducts.splice(index, 1);
      setSelectedProducts(updatedProducts);
    }
  };
  const clearOrderContainer = () => {
    setSelectedProducts([]);
  };


  return (
    <div>
      <div>
        <img src={logo} alt="Logo" />
        <button className='btnBreakfast' onClick={() => { clearOrderContainer(); setProductType('Desayuno')}}>Desayuno</button>
        <button className='btnDinner' onClick={() => {clearOrderContainer(); setProductType('Almuerzo')}}>Almuerzo/Cena</button>
        {filterData.map(item => (
          <div key={item.id}>
            <button className='btnItem' onClick={() => handleProductSelection(item)}>
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              {/* <img src={item.image} alt={item.name} /> */}
              
              <p>Tipo: {item.type}</p>
            </button>
          </div>
        ))}
        <div className='orderContainer'>
          <h1>Orden</h1>
          {selectedProducts.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <p>Tipo: {product.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;







