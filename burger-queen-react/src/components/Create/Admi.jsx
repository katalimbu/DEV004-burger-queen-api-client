import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './admi.css'; 
import logo from '../../assets/logo.png';
import axios from 'axios';
import WorkersTable from "./workersTable";

export const deleteWorkers = async () => {
  try {
    const accessToken = localStorage.getItem('token');
    const response = await axios.delete('http://localhost:8080/users/{uid}', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error('Error al eliminar los datos');
  }
};

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
          <th scope="col">Eliminar | Editar</th>
        </tr>
      </thead>
      <tbody>
        {arrayWorkers.map((users) => (
          <WorkersTable
            key={'hols' + users.id}
            email={users.email}
            id={users.id}
            role={users.role}
          />
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
        <button type="button" className="btn btn-warning">
          Agregar nuevo trabajador
        </button>
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
// import WorkersTable from "./workersTable";

// export const deleteWorkers = async () => {
//   try {
//     const accessToken = localStorage.getItem('token');
//     const response = await axios.delete('http://localhost:8080/users/{uid}', {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });
//     setDeleteWorker(response.data);
//     setIsLoading(false);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//     setError('Error al obtener los datos');
//     setIsLoading(false);
//   }
// };
// deleteWorkers();

// const WorkerList = () => {
//   const [arrayWorkers, setArrayWorkers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   // const [deleteWorker, setDeleteWorker]=useState([])

//   useEffect(() => {
//     const getWorkers = async () => {
//       try {
//         const accessToken = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:8080/users', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`
//           }
//         });
//         setArrayWorkers(response.data);
//         setIsLoading(false);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//         setError('Error al obtener los datos');
//         setIsLoading(false);
//       }
//     };
//     getWorkers();
//   }, []);

//   // useEffect(() => {
    
//   // }, []);



//   if (isLoading) {
//     return <div>Cargando...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <table className="table table-bordered table-striped table-hover customTableStyle">
//       <thead className="thead-dark">
//         <tr>
//           <th scope="col">ID</th>
//           <th scope="col">Correo</th>
//           <th scope="col">Cargo</th>
//           <th scope="col">Eliminar | Editar </th>
//         </tr>
//       </thead>
//       <tbody>
//         {arrayWorkers.map((users) => (
//          <WorkersTable
//          key={'hols'+ users.id}
//          email={users.email}
//          id={users.id}
//          role={users.role}
//           />
//         //  <tr key={users.id}>
//         //     <th scope="row">{users.id}</th>
//         //     <td>{users.email}</td>
//         //     <td>{users.role}</td>
//         //     <td>
//         //       <ion-icon name="trash-outline" className='eraseItem'></ion-icon>
//         //       <ion-icon name="create-outline"></ion-icon>
//         //       </td>
//         //   </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// // *** 

// const Workers = () => {
//   return (
//     <>
//       <div className="logoContainer">
//         <img src={logo} className="img-fluid" alt="Logo"></img>
//         <h1 className="header">Trabajadores Burguer Queen</h1>
//       </div>
//       <div className="tableContainer">
//         <WorkerList />
//         <button type="button" className="btn btn-warning">Agregar nuevo trabajador</button>
//       </div>
//     </>
//   );
// };

// export default Workers;

