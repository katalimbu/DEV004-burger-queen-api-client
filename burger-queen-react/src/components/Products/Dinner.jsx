import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dinner.css';

function Dinner() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/products?_page=10&_limit=10')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <button key={product.id}>{product.name}</button>
      ))}
    </div>
  );
}

export default Dinner;

//   function Dinner (){
//     return (
//         <div>
        
//         <div className="containerDinner"> 
//         <h1>Hola mesero </h1>
//         <label>
//         Nombre del cliente: <input name="clientName" />
//       </label>
//         <div className ="containerItemsDinner">
//             <h2> Resumen del pedido:</h2>
//             <btn> </btn>
//             <btn>Hamburguesa Doble $15 </btn>
//             <btn>Papas fritas $5 </btn>
//             <btn>Aros de cebolla $5 </btn>
//             <btn>Agua chica $5  </btn>
//             <btn>Agua grande $7 </btn>
//             <btn>Gaseosa chica $5 </btn>
//             <btn>Gaseosa grande $7 </btn>
//         </div>
//         <div className="orderDinner">
//         </div>
//         <btn className= "OrderReadyForKitchen">Enviar a cocina</btn>
//         </div>
//         </div>
//     )
    
// }




