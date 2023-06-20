import { useState } from 'react';
import './Admi.css';
import WorkerList from './WorkerList';
import NewUser from './createUser'
import logo from '../../assets/logo.png';

const Admi = () => {
  const [showNewUser, setShowNewUser] = useState(false);

  const handleNewUser = () => {
    setShowNewUser(true);
  };

  return (
    <>
      <div className="logoContainer">
        <img src={logo} className="img-fluid" alt="Logo" />
        <h1 className="header">Trabajadores Burguer Queen</h1>
      </div>
      <div className="tableContainer">
        <WorkerList />

        {!showNewUser && (
          <button type="button" className="btn btn-warning" onClick={handleNewUser}>
            Agregar nuevo trabajador
          </button>
        )}

        {showNewUser && <NewUser />}
      </div>
    </>
  );
};

export default Admi;

// este es el componente principal.
// const Admi = () => {
//   const handleNewUser () => {

//   }
 
//   return (
//     <>
//       <div className="logoContainer">
//         <img src={logo} className="img-fluid" alt="Logo"></img>
//         <h1 className="header">Trabajadores Burguer Queen</h1>
//       </div>
//       <div className="tableContainer">
//         <WorkerList />
        
//         <button type="button" className="btn btn-warning" onClick={handleNewUser}>
//           Agregar nuevo trabajador
//         </button>
//       </div>
//     </>
//   );
// };

// export default Admi;

