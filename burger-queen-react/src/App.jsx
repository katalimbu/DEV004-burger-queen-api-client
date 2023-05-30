import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // hago la peticion http para hacer el login
    axios.post('http://localhost:8080/login', {
      email: username,
      password: password 
    })
    .then((response) => {
      console.log(response.data.accessToken);
      // guardar token en el local storage porque lo voy a necesitar para las otras vistas 
      // redirect

    })
    .catch((error) => {
      console.log(error);
    });
  };

  console.log("username", username);
  
  return (
    <div className="container">
      <div>
        <img src={logo} />
      </div>

      <div className='formLogin'>
        <h2>Hola!</h2>
        <form onSubmit={handleSubmit}>
          <div className='loginItem'>
            <label htmlFor="username">Usuario:</label>
            <input
              className='loginInput'
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className='loginItem'>
            <label htmlFor="password">Contraseña:</label>
            <input
              className='loginInput'
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
