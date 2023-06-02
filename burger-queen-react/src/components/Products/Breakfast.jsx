import  { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
// import {ApiUrl} from '../../main';

const Breakfast = () => {
  const [data, setData] = useState([]);
  // necesito que dependiendo de lo que pinche, muestre lo que nececito
  const [productType, setProductType] = useState('breakfast');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
// hacer un filter de los productos filtrados 
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
  const filterData = data.filter(product => product.type == productType);

  return (
    <div>
      <div>
      <img src={logo} alt="Logo" />
      <button onClick={()=>setProductType('Desayuno')}>Desayuno</button>
      <button onClick={()=>setProductType('Almuerzo')}>Cena</button>
      {filterData.map(item => (
        <div key={item.id}>
          {/* <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <img src={item.image} alt={item.name} />
          <p>Tipo: {item.type}</p> */}
          {/* <p>Fecha de entrada: {item.dateEntry}</p> */}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Breakfast;
