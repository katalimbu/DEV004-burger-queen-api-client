
import logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';
import './Edit.css';
import axios from 'axios';
import { useParams } from "react-router";


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
    axios.get(`http://localhost:8080/users/${id}`, { // para obtener la lista de pedidos
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

  return( 
    <>
     <div className='mainContainer'>
      <div>
        <img src={logo} className="logoEdit" alt="Logo"></img>
      </div> 

      <div className='container'>
        <h1 className="editheader">¿Algo cambio?</h1>

        <form className='formEdit'  onSubmit={handleButtonClick}>
          <label>Correo</label>
          <input 
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Cargo</label>
          <select name="role" onChange={handleRoleChange} value={role}>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="chef">Chef</option>
          </select>
  
          <label>Contraseña</label>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button className='btnEdit' type="submit">Guardar</button>
        </form>
      </div>
     </div>
    </>
  );
};

export default Edit;
