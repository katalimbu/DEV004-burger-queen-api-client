// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import logo from '../../assets/logo.png';
// import "./menu.css"

// const Menu = () => {
//   const [products, setProducts] = useState([]);
//   const [productType, setProductType] = useState('breakfast');
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedOrderItems, setSelectedOrderItems] = useState([]);
//   const [postOrderToKitchen, setPostOrderToKitchen] = useState([])
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const accessToken = localStorage.getItem('token');

//     const ListProducts = () => {
//       axios.get('http://localhost:8080/products', {
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       })
//         .then(response => {
//           setProducts(response.products);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error(error);
//           setError('Error al obtener los datos');
//           setIsLoading(false);
//         });
//     };

//     ListProducts();
//   }, []);

//   if (isLoading) {
//     return <div>Cargando...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   const filterProducts = products.filter(product => product.type === productType);

//   const processProductSelection = (item) => {
//     const index = selectedProducts.findIndex(product => product.id === item.id);
//     if (index === -1) {
//       setSelectedProducts([...selectedProducts, item]);
//       setSelectedOrderItems([...selectedOrderItems, { ...item, qty: 1 }]);
//     } else {
//       const updatedProducts = [...selectedProducts];
//       updatedProducts.splice(index, 1);
//       setSelectedProducts(updatedProducts);
//       const updatedOrderItems = [...selectedOrderItems];
//       updatedOrderItems.splice(index, 1);
//       setSelectedOrderItems(updatedOrderItems);
//     }
//   };

//   const clearOrderContainer = () => {
//     setSelectedProducts([]);
//     setSelectedOrderItems([]);
//   };

//   const addItemToOrder = (productId) => {
//     const updatedOrderItems = selectedOrderItems.map(item => {
//       if (item.id === productId) {
//         return { ...item, qty: item.qty + 1 };
//       }
//       return item;
//     });
//     setSelectedOrderItems(updatedOrderItems);
//   };

//   const eraseItemToOrder = (productId) => {
//     const updatedOrderItems = selectedOrderItems.map (item => {
//       if (item.id === productId) {
//         return {...item, qty: item.qty -1};
//       }
//       return item;
//     });
//     setSelectedOrderItems(updatedOrderItems);
//   }

//   const OrderReadyToKitchen = () => {
//     const accessToken = localStorage.getItem('token');
    
//     axios.post('http://localhost:8080/orders', selectedOrderItems, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     })
//       .then(response => {
//         setPostOrderToKitchen(response.PostOrderToKitchen)
//         console.log(response.products);
//         setIsLoading(false);
        
//       })
//       .catch(error => {
//         console.error(error);
//         setError('Error al obtener los datos');
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <img src={logo} alt="Logo" />
//         <button className='btnBreakfast' onClick={() => { clearOrderContainer(); setProductType('Desayuno')}}>Desayuno</button>
//         <button className='btnDinner' onClick={() => {clearOrderContainer(); setProductType('Almuerzo')}}>Almuerzo/Cena</button>
//         {filterProducts.map(item => (
//           <div key={item.id}>
//             <button className='btnItem' onClick={() => processProductSelection(item)}>
//               <h3>{item.name}</h3>
//               <p>Precio: ${item.price}</p>
//               <p>Tipo: {item.type}</p>
//             </button>
//           </div>
//         ))}
//         <div className='orderContainer'>
//           <h1>Orden</h1>
//           {selectedOrderItems.map(product => (
//             <div key={product.id}>
//               <h3>{product.name}</h3>
//               <p>Cantidad: {product.qty}</p>
//               <p>Precio: ${product.price}</p>
//               <p>Tipo: {product.type}</p>
//               <button className='btnAddItem' onClick={() => addItemToOrder(product.id)}>
//                 <ion-icon name="add-circle-outline"></ion-icon>
//               </button>
//               <button className='eraseItem' onClick={() => eraseItemToOrder(product.id)}>
//                 <ion-icon name="trash-outline"></ion-icon>
//               </button>
//             </div>
//           ))}
//           <button onClick={OrderReadyToKitchen}>Enviar Órden a cocina</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import "./menu.css"

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [productType, setProductType] = useState('breakfast');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedOrderItems, setSelectedOrderItems] = useState([]);
  const [postOrderToKitchen, setPostOrderToKitchen] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');

    const listProducts = () => {
      axios.get('http://localhost:8080/products', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => {
          setProducts(response.data); // Corrección: response.data en lugar de response.products
          setIsLoading(false);
        })
        .catch(error => {
          console.error(error);
          setError('Error al obtener los datos');
          setIsLoading(false);
        });
    };

    listProducts();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filterProducts = products.filter(product => product.type === productType);

  const processProductSelection = (item) => {
    const index = selectedProducts.findIndex(product => product.id === item.id);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, item]);
      setSelectedOrderItems([...selectedOrderItems, { ...item, qty: 1 }]);
    } else {
      const updatedProducts = [...selectedProducts];
      updatedProducts.splice(index, 1);
      setSelectedProducts(updatedProducts);
      const updatedOrderItems = [...selectedOrderItems];
      updatedOrderItems.splice(index, 1);
      setSelectedOrderItems(updatedOrderItems);
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
  };

  const eraseItemToOrder = (productId) => {
    const updatedOrderItems = selectedOrderItems.map(item => {
      if (item.id === productId) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setSelectedOrderItems(updatedOrderItems);
  };

  const OrderReadyToKitchen = () => {
    const accessToken = localStorage.getItem('token');

    axios.post('http://localhost:8080/orders', selectedOrderItems, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        setPostOrderToKitchen(response.data); // Corrección: response.data en lugar de response.PostOrderToKitchen
        console.log(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Error al obtener los datos');
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div>
        <img src={logo} alt="Logo" />
        <button className='btnBreakfast' onClick={() => { clearOrderContainer(); setProductType('Desayuno') }}>Desayuno</button>
        <button className='btnDinner' onClick={() => { clearOrderContainer(); setProductType('Almuerzo') }}>Almuerzo/Cena</button>
        {filterProducts.map(item => (
          <div key={item.id}>
            <button className='btnItem' onClick={() => processProductSelection(item)}>
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Tipo: {item.type}</p>
            </button>
          </div>
        ))}
        <div className='orderContainer'>
          <h1>Orden</h1>
          {selectedOrderItems.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Cantidad: {product.qty}</p>
              <p>Precio: ${product.price}</p>
              <p>Tipo: {product.type}</p>
              <button className='btnAddItem' onClick={() => addItemToOrder(product.id)}>
                <ion-icon name="add-circle-outline"></ion-icon>
              </button>
              <button className='eraseItem' onClick={() => eraseItemToOrder(product.id)}>
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
          ))}
          <button onClick={OrderReadyToKitchen}>Enviar Órden a cocina</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
