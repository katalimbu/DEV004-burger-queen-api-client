import { useState, useEffect } from 'react';
import './Edit.css';
import axios from 'axios';
import { useParams } from "react-router";
import EditForm  from "./EditForm"
import RouteDeny from "../error/error";
import NavBarAdmin from './NavBarAdmi';


const Edit = () => {
  let { id } = useParams();
  
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  

  const handleRoleChange = (e) => {
    setRole(e.target.value);// se ejecutan al obtener el valor atrvez del event.
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    //  Se pasa un token de autorización en el encabezado de la solicitud
    axios.get(`http://localhost:8080/users/${id}`, { 
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {//  Si la solicitud es exitosa, se actualiza el estado 
        console.log(response.data)
        setPassword(response.data.password)
        setEmail(response.data.email);
        setRole(response.data.role);
      })
   
      .catch(error => {
        console.error(error);
      });

  }, [id]);

  const handleButtonClick = (e) => { 
    e.preventDefault();

    const accessToken = localStorage.getItem('token');

    axios.patch(`http://localhost:8080/users/${id}`, {
      email: email,
      role: role,
      password: password
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(() => {
        alert('Los cambios han sido guardado con éxito');
      })
      .catch(() => {
        alert('Hubo un error al guardar los cambios. Por favor, inténtalo nuevamente.');
      });
  };

  let userRole = localStorage.getItem('userRole')
  if(userRole !== "admin"){
    return <RouteDeny />
  }
  return( 
    <>
    <NavBarAdmin/>
    <EditForm  
      password={password}
      email = {email}
      role = {role}
      titleText={'¿Algo cambió?'}
      textButton = {'Guardar'}
      handleButtonClick = {handleButtonClick}
      handlePasswordChange = {(e) => setPassword(e.target.value)}
      handleRoleChange = {handleRoleChange}
      handleEmailChange = {(e) => setEmail(e.target.value)}
    />
    </>
      )
     };

export default Edit;
