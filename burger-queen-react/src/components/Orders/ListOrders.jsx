import  { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';

function ListOrders(){ 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderStatus, setOrderStatus] = useState('orders');


  useEffect(()=>{
    const accessToken = localStorage.getItem('token');

    axios.get('http://localhost:8080/orders', {
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
      // los [] son una lista de dependencias, osea que cada ves que algo dentro de la lista cambie, se ejecuta el useEffect
  },[]);
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  console.log(data)

  const filterOrder = data.filter(order => order.status == "pending");


  return(
    <div>
      <img src={logo} alt="Logo" />
      <h1>Estado del Pedido</h1>
      <div>
      {filterOrder.map(order => (
        <div key={order.id}>
          <h3>{order.id}</h3>
          {order.products.map(item => (
            <div key={item.product.id}>
              <p>cantidad: {item.qty}</p>
              <p>nombre: {item.product.name}</p>
            </div>
          ))}
                <button onClick={()=>setOrderStatus('orders')}>Listo</button>

        </div>
      ))}
      </div>
    </div>
  )

}

export default ListOrders;
