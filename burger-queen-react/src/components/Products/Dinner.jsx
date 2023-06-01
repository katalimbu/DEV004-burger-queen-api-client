import  { useEffect, useState } from 'react';
import axios from 'axios';

const Dinner = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('token'); // Obtener el token del localStorage

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

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <img src={item.image} alt={item.name} />
          <p>Tipo: {item.type}</p>
          <p>Fecha de entrada: {item.dateEntry}</p>
        </div>
      ))}
    </div>
  );
};

export default Dinner;


// import  { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./dinner.css"

// function Dinner (){
//     const [data, setData] = useState(null);
  
//     useEffect(() => {
//       axios.get('http://localhost:8080/products')
//         .then(response => {
//           localStorage.setItem('token', response.data.accessToken);
//           navigate('/breakfast');
//           setData(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }, []);

// return (
//     <div>
    
//     <div className="containerDinner"> 
//     <h1>Hola mesero </h1>
//     <label>
//     Nombre del cliente: <input name="clientName" />
//   </label>
//     <div className ="containerItemsDinner">
//         <h2> Resumen del pedido:</h2>
//         <btn>Hamburguesa Simple $10 </btn>
//         <btn>Hamburguesa Doble $15 </btn>
//         <btn>Papas fritas $5 </btn>
//         <btn>Aros de cebolla $5 </btn>
//         <btn>Agua chica $5  </btn>
//         <btn>Agua grande $7 </btn>
//         <btn>Gaseosa chica $5 </btn>
//         <btn>Gaseosa grande $7 </btn>
//     </div>
//     <div className="orderDinner">
//     </div>
//     <btn className= "OrderReadyForKitchen">Enviar a cocina</btn>
//     </div>
//     </div>
// )
    
// }
// export default Dinner