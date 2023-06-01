import  { useEffect, useState } from 'react';
import axios from 'axios';

const breakfast = () => {
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

export default breakfast;
