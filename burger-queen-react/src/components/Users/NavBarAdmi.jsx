import { Link } from "react-router-dom";
import LogoutButton from "../Login/Logout";

function NavBarAdmin() {
  return (
    <div className='container-fluid'>
      <navBar/>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Hola Administrador!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuarios
          </a>
          <ul className="dropdown-menu">
            <Link className="dropdown-item" to="/Admi">Usuarios</Link>
            <Link className="dropdown-item" to="/newuser">Crear usuario</Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <Link className="dropdown-item" to="/admiproduct">Productos</Link>
            <Link className="dropdown-item" to="/newproduct">Crear productos</Link>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Menú</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Kitchen">Chef</Link>
        </li>
      </ul>
    </div>
    <LogoutButton />
  </div>
</nav>
    </div>
  )
}

export default NavBarAdmin;