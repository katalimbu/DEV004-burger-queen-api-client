import { useState } from 'react';
import './Edit.css';
import axios from 'axios';
import EditForm from "./EditForm";
import { useNavigate } from "react-router-dom";
import RouteDeny from "../error/error";
import NavBarAdmin from './NavBarAdmi';

const NewUser = () => {
  
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('token');
    // acá estamos preguntando si role tiene un valor 'false' es decir que no ha sido seleccionado
    if (!role) {
      alert('Debes seleccionar un rol antes de guardar los cambios.');
      return; // si es así con el return salimos tempranamente de la funcion para que no se ejecute la petición.
    }

    axios.post('http://localhost:8080/users', {
      email: email,
      role: role,
      password: password
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(() => {
        alert('Los cambios han sido guardados con éxito');
        navigate('/Admi');
      })
      .catch(() => {
        alert('Hubo un error al guardar los cambios. Por favor, inténtalo nuevamente.');
      });
  };

  let userRole = localStorage.getItem('userRole')
  if(userRole !== "admin"){
    return <RouteDeny />
  }

  return (
    <>
    <NavBarAdmin/>
    <EditForm
      password={password}
      email={email}
      role={role}
      textButton={'Registrar'}
      titleText={'Crear usuario'}
      handleButtonClick={handleButtonClick}
      handlePasswordChange={(value) => setPassword(value)}
      handleRoleChange={handleRoleChange}
      handleEmailChange={(value) => setEmail(value)}
    />
    </>
  );
};

export default NewUser;



