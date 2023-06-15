import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './admi.css'; 
import logo from '../../assets/logo.png';
import axios from 'axios';

const WorkerList = () => {
  const [arrayWorkers, setArrayWorkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    getWorkers();
  }, []);
  

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <table className="table table-bordered table-striped table-hover customTableStyle">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Correo</th>
          <th scope="col">Cargo</th>
          <th scope="col">editar|borrar</th>
        </tr>
      </thead>
      <tbody>
        {arrayWorkers.map((users) => (
          <tr key={users.id}>
            <th scope="row">{users.id}</th>
            <td>{users.email}</td>
            <td>{users.role}</td>
            <td>{/* Agrega los botones de editar y borrar aquí */}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Workers = () => {
  return (
    <>
      <div className="logoContainer">
        <img src={logo} className="img-fluid" alt="Logo"></img>
        <h1 className="header">Trabajadores Burguer Queen</h1>
      </div>
      <div className="tableContainer">
        <WorkerList />
        <button type="button" className="btn btn-warning">Agregar</button>
      </div>
    </>
  );
};

export default Workers;

// import { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './admi.css'; 
// import logo from '../../assets/logo.png';
// import axios from 'axios';

// const Workers = () => {
//     const [arrayWorkers, setArrayWorkers] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const getWorker = async() =>{
//         const accessToken = localStorage.getItem('token');
//         //  Se pasa un token de autorización en el encabezado de la solicitud
//         await axios.get('http://localhost:8080/users', {   
//           headers: {
//             Authorization: `Bearer ${accessToken}`
//           }
//         })
//           .then(response => {//  Si la solicitud es exitosa, se actualiza el estado 
//             setArrayWorkers(response.data);
//             setIsLoading(false);
//           console.log(response.data)
//           })
//           .catch(error => {
//             console.error(error);
//             setError('Error al obtener los datos');
//             setIsLoading(false); // isLoading en false para indicar que la carga ha finalizado.
//           });
//       };
//       useEffect(() => {
//         getWorker();
//       },[]);
//     return(
//         <>
//         <div className="logoContainer">
//         <img src={logo} className="img-fluid" alt="Logo"></img>
//         <h1 className="header">Trabajadores Burguer Queen</h1>
//         </div>
//         <div className="tableContainer">
//         <table className="table table-bordered table-striped table-hover customTableStyle">       
//          <thead  className="thead-dark">
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Correo</th>
//             <th scope="col">Cargo</th>
//             <th scope="col">editar|borrar</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td colSpan="2">Larry the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </table>
//       <button type="button" className="btn btn-warning">Agregar</button>
//     </div>
//     </>
//     );
// }; 
// export default Workers