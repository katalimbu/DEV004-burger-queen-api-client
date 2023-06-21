import axios from 'axios';
import ProductTable from "./ProductTable";
import { useState, useEffect } from 'react';
// estos son comoponente shijos 
const ProductList = () => {
  const [arrayProducts, setArrayProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getProducts = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/products', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      setArrayProducts(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError('Error al obtener los datos');
      setIsLoading(false);
    }
  };

  const deleteProducts = (id) => {
    const accessToken = localStorage.getItem('token');
    
    axios.delete(`http://localhost:8080/products/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(() => {
      alert('El producto ha sido eliminado con éxito');
      getProducts();
    })
    .catch (error => {
      console.error(error);
      // throw new Error('Error al eliminar los datos')
    }) 
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
// esta es la tabla con las instrucciones de llenado, que son las uqe se llenan en workertable.
  return (
    <table className="table table-bordered table-striped table-hover customTableStyle">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Tipo</th>
          <th scope="col">Eliminar | Editar</th>
        </tr>
      </thead>
      <tbody>
        {arrayProducts.map((products) => (
          <ProductTable
            key={products.id}
            id={products.id}
            name={products.name}
            price={products.price}
            image={products.image}
            type={products.type}
            onDelete={deleteProducts}

          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
