import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    
    <button type="button" className="btn btn-outline-warning" onClick={handleLogout}>
        Cerrar sesión
    </button>
  );
}

export default LogoutButton;
