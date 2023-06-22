import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import './kitchen.css'; 
import moment from 'moment'; 
import RouteDeny from "../error/error";
import NavBarKitchen from '../Users/navBarKitchen';


function ListOrders() {// esto es un componente (los function algo)
  // estado para almacenar la lista de pedidos
  const [arrayOrders, setArrayOrders] = useState([]);
  // estado para rastrear si los datos se están cargando
  const [isLoading, setIsLoading] = useState(true);
  // estado para rastrear si hay algún error
  const [error, setError] = useState(null);

  const getOrders = () =>{
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
        console.log('estoy en then')
      })
   
      .catch(error => {
        console.error(error);
        setError('Error al obtener los datos');
        setIsLoading(false); // isLoading en false para indicar que la carga ha finalizado.
        console.log('estoy en catch')
      });
  };
  useEffect(() => {
    getOrders();
    // lo uso para actualizar la diferencia de tiempo entre que se hace la peticion get y el timpo actua
    const interval = setInterval(() => {// se usa para actualizar algo cada x seg
      getOrders();
    }, 30000);// se actualiza cada 30 seg
// esto se ejecuta cuando el compmnente se desmonta, entocnes asi cuando se sale, el intervalo se limpia y no se sigue ejecutando
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  let role = localStorage.getItem('userRole')
  if(role === "waiter"){
    return <RouteDeny />
  }
  
//  se ejecuta cuando se hace clic en el botón "Listo" para entregar un pedido
  const handleButtonClick = (orderId) => { 
    const accessToken = localStorage.getItem('token');
// para actualizar el estado del pedido 
    axios.patch(`http://localhost:8080/orders/${orderId}`, {
      status: "delivering", // cambiar a delivering para la vista del mesero.
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
  const filterOrder = arrayOrders.filter(order => order.status === "pending");

  
  return (
    <>
    <NavBarKitchen/>
    <div className='container'>
      <div className='titleContainer'>
      <img className='logoImg' src={logo} alt="Logo" />
      <h1 className='title'>Estado del Pedido</h1>
      </div>
      <div className='kitchenForm'>
        {filterOrder.map(order => (
          <div className='items' key={order.id}>
            <h2 className='orderBox'>Orden Nº {order.id}</h2>
            <p className='orderBox'>Tiempo: { moment().diff(moment(order.dataEntry),'minutes')} minutos</p>
            <p className='orderBox'>Estado: {order.status}</p>
            {order.products.map(item => (
              <div className='orderBox' key={item.product.id}>
                <p>Cantidad: {item.qty}</p>
                <p>Nombre: {item.product.name}</p>
              </div>
            ))}
            <button className='kitchenBtn' onClick={() => handleButtonClick(order.id)}>Listo</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ListOrders;








