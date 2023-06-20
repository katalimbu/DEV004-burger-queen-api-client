import { useState } from 'react';
import './Edit.css';
import axios from 'axios';
import EditForm from "./EditForm";
import { useNavigate } from "react-router-dom";

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

  return (
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
  );
};

export default NewUser;


// import { useState, useEffect } from 'react';
// import './Edit.css';
// import axios from 'axios';
// import { useParams } from "react-router";
// import EditForm from "./EditForm"


// const NewUser = () => {
//   let { id } = useParams();

//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   useEffect(() => {
//     const accessToken = localStorage.getItem('token');

//   const handleButtonClick = (e) => {
//     e.preventDefault();

//     const accessToken = localStorage.getItem('token');

//     axios.post('http://localhost:8080/user', {
//       email: email,
//       role: role,
//       password: password
//     }, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     })
//       .then(() => {
//         alert('Los cambios han sido guardados con éxito');
//       })
//       .catch(() => {
//         alert('Hubo un error al guardar los cambios. Por favor, inténtalo nuevamente.');
//       });
//   };

//   return (
//     <EditForm
//       password={password}
//       email={email}
//       role={role}
//       textButton={'Guardar'}
//       handleButtonClick={handleButtonClick}
//       handlePasswordChange={(e) => setPassword(e.target.value)}
//       handleRoleChange={handleRoleChange}
//       handleEmailChange={(e) => setEmail(e.target.value)}
//     />
//   )
//   }
//   }

// export default NewUser;

