import { useState } from 'react';
import './Admi.css';
import WorkerList from './WorkerList';
import NewUser from './createUser'
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import RouteDeny from "../error/error";
import NavBarAdmin from "../Users/NavBarAdmi"

const Admi = () => {
  const [showNewUser, setShowNewUser] = useState(false);
  const navigate = useNavigate();
  const handleNewUser = () => {
    setShowNewUser(true);
    navigate('/newuser');
  };
  let role = localStorage.getItem('userRole')
  if(role !== "admin"){
    return <RouteDeny />
  }
  
  return (
    <>
    <NavBarAdmin/>
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


