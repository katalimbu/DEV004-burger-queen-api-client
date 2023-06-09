import { useState } from 'react';// módulo necesario para utilizar estados
import './Login.css'; 
import logo from '../../assets/logo.png';
import axios from 'axios';// modulo axios para la peticion http
import { useNavigate } from "react-router-dom";

// declaro el componente login, que es un formulario de inicio de sesion 
function Login() {
  // aca se utilizan los hook (usestate), para declarar variables de estados.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

// estas funciones son para manejar los estados del componente cuando hay cambios en el formulario. 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);// se ejecutan al obtener el valor atrvez del event.
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();// se llama este evento para evitar que la página se recargue
    // hago la peticion http para hacer el login
    axios.post('http://localhost:8080/login', {
      email: username,
      password: password 
    })
    .then((response) => {
      localStorage.setItem('token', response.data.accessToken);
      navigate('/menu');
      // coloqué en este lugar los localStorage para que la información este disponible después de la autenticación. 
      localStorage.setItem('userEmail',response.data.user.email);
      localStorage.setItem('userId', response.data.user.id)
      console.log('esto es userId', response.data.user.id)
    
      // Si la solicitud es exitosa, el token de acceso devuelto por el servidor se muestra en la consola
      console.log(response.data.accessToken);
      // guardar token en el local storage porque lo voy a necesitar para las otras vistas 
      // redirect

    })
    .catch((error) => {
      // en caso de rechazar se muestra el error en la consola.
      console.log(error);
    });
  };
  console.log("username", username);
  // aca es lo que se renderiza para armar la interfaz de usuario
  return (
    <>
    <div className='bigContainer'>
    <div className='containerGreeting'>
      <h1 className='greetingLogin'> Hola!</h1>
      </div>
   <div className='generalContainer'>
      <div className='boxAndImg'>
      <img className='logo' src={logo} />
        <form className='holaForm' onSubmit={handleSubmit}>
            <label className='label' htmlFor="username">Usuario:</label>
            <input
              className='loginInput'
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <br></br>
            <label className='label' htmlFor="password">Contraseña:</label>
            <input
              className='loginInput'
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className='btnLogin' type="submit">Iniciar sesión</button>
        </form>
        </div> 
        </div>
      </div>
      </>

  )
}

export default Login;
