import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
// import './waiter.css'; 

function Waiter() {
  // estado para almacenar la lista de pedidos
  const [arrayOrders, setArrayOrders] = useState([]);
  // estado para rastrear si los datos se están cargando
  const [isLoading, setIsLoading] = useState(true);
  // estado para rastrear si hay algún error
  const [error, setError] = useState(null);

  useEffect(() => { // se ejecuta cuando se monta el componente
    const accessToken = localStorage.getItem('token');
//  Se pasa un token de autorización en el encabezado de la solicitud
    axios.get('http://localhost:8080/orders', { // para obtener la lista de pedidos
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {//  Si la solicitud es exitosa, se actualiza el estado 
        setArrayOrders(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Error al obtener los datos');
        setIsLoading(false); // isLoading en false para indicar que la carga ha finalizado.
      });
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
//  se ejecuta cuando se hace clic en el botón "Listo" para entregar un pedido
  const handleButtonClick = (orderId) => { 
    const accessToken = localStorage.getItem('token');
// para actualizar el estado del pedido 
    axios.patch(`http://localhost:8080/orders/${orderId}`, {
      status: "delivered", 
    }, {
      headers: {
        // 'Content-Type': 'multipart/form-data',// por defecto sin esto, es un json
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        // Mensaje de éxito al entregar el pedido
        alert('El pedido ha sido entregado con éxito', response);
        // Encontrar el índice del pedido entregado
        const deliveredOrderIndex = arrayOrders.findIndex(order => order.id === orderId);
        // Esta línea verifica si se encontró el índice del pedido entregado
        if (deliveredOrderIndex !== -1) { 
 // Si el valor de deliveredOrderIndex no es -1, significa que se encontró el pedido en arrayOrders y se puede actualizar
          const updatedOrders = [...arrayOrders];
// operador de propagación (...). Esto es para evitar la mutación directa del estado.
          updatedOrders.splice(deliveredOrderIndex, 1);
// indica que se debe eliminar un solo elemento en esa posición.
          setArrayOrders(updatedOrders);
          // nueva lista de pedidos actualizada, excluyendo el pedido entregado
        }
        console.log(response);
      })
      .catch(error => {
        console.error(error);
        setError('Error al entregar el pedido');
        // Mensaje de error al entregar el pedido
        alert('Hubo un error al entregar el pedido. Por favor, inténtalo nuevamente.');
      });
  };
// se filtran los pedidos en arrayOrders para obtener solo aquellos con estado "pending"
  const filterOrder = arrayOrders.filter(order => order.status === "delivering");

  return (
    <div className='container'>
      <div>
      <img className='logoImg' src={logo} alt="Logo" />
      </div>
      <h1 className='title'>Estado del Pedido</h1>
      <div className='kitchenForm'>
        {filterOrder.map(order => (
          <div className='orderbox' key={order.id}>
            <h2>{order.id}</h2>
            {order.products.map(item => (
              <div  key={item.product.id}>
                <p>cantidad: {item.qty}</p>
                <p>nombre: {item.product.name}</p>
                <p>status: {order.status}</p>
              </div>
            ))}
            <button className='kitchenBtn' onClick={() => handleButtonClick(order.id)}>Listo</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Waiter;

