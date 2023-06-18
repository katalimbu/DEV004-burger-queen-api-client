import axios from 'axios';
import WorkersTable from "./workersTable";
import { useState, useEffect } from 'react';
// estos son comoponente shijos 
const WorkerList = () => {
  const [arrayWorkers, setArrayWorkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getWorkers = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      setArrayWorkers(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError('Error al obtener los datos');
      setIsLoading(false);
    }
  };

  const deleteWorkers = (id) => {
    const accessToken = localStorage.getItem('token');
    
    axios.delete(`http://localhost:8080/users/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(() => {
      alert('El trabajador ha sido eliminado con éxito');
      getWorkers();
    })
    .catch (error => {
      console.error(error);
      // throw new Error('Error al eliminar los datos')
    }) 
  };

  useEffect(() => {
    getWorkers();
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
          <th scope="col">Correo</th>
          <th scope="col">Cargo</th>
          <th scope="col">Eliminar | Editar</th>
        </tr>
      </thead>
      <tbody>
        {arrayWorkers.map((users) => (
          <WorkersTable
            key={users.id}
            email={users.email}
            id={users.id}
            role={users.role}
            onDelete={deleteWorkers}

          />
        ))}
      </tbody>
    </table>
  );
};

export default WorkerList;
