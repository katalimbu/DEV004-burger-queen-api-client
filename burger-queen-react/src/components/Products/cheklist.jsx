// import  { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./dinner.css"
// import logo from '../../assets/logo.png';
// function LogoImg (){
//   return (
//     <img src= {logo} className='logoImg'/>
//   )
// }

// function DinnerGeneralContainer () {
//   return (
// <div className='DinnerGeneralContainer'>
// <h1>Hola mesero!</h1>
// <label>
//         Nombre del cliente: <input className='clientName' name="clientNameInput" />
//       </label>
// </div>
//   )
// }

// function BtnBreakfast () {
//   return(
//     <div>
//       <button className='btnGral'>Desayuno</button>
//     </div>
//   )
// }

// function BtnDinner () {
//   return (
//     <div>
//       <button className='btnGral'>Almuerzo/Cena</button>
//     </div>
//   )
// }

// function OrderReadyToKitchen (){
//   return (
//     <div className='containerItems'>
//       <h1>orden</h1>

//     </div>
//   )
// }


// const Dinner = () => {
//   const [data, setData] = useState([]);
//   const [typeProduct, setTypeProduct] = useState('Desayuno');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const accessToken = localStorage.getItem('token'); // Obtener el token del localStorage

//     const ListProducts = () => {
//       axios.get('http://localhost:8080/products', {// axios.get(`${API_URL}/product`, …
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       })
//         .then(response => {
//           setData(response.data);
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
// const filterProducts = data.filter((product)=> product.type === typeProduct)
//   if (isLoading) {
//     return <div>Cargando...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div> <div>
//       {data.map(item => (
//     // Etiqueta vacia que envuelve a todos los tags, solo se retorna un tag.
//     <div> 
//     <div className='motherContainer'>
//       < LogoImg/>
//     <div className='containerItems'>
//     <DinnerGeneralContainer/>
//     <BtnBreakfast/>
//     <BtnDinner/>
//       {filterProducts.map(item => (
//         <div key={item.id}>
//           <button className='btnItem'>
//           <h3 className='itemName'>{item.name}</h3>
//           <p>Precio: ${item.price}</p>
//           {/* <img src={item.image} alt={item.name} /> */}
//           <p>Tipo: {item.type}</p>
//           {/* <p>Fecha de entrada: {item.dateEntry}</p> */}
//           </button>
//         </div>
//       ))}

//       </div>
      
//       </div>
//       <OrderReadyToKitchen/>
//     </div>
//     <div/>

//     </div>
//   );
// };

// export default Dinner;

