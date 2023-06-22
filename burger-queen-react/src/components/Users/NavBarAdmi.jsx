
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
          <a className="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuarios
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Admi">Usuarios</a></li>
            <li><a className="dropdown-item" href="/newuser">Crear usuario</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/admiproduct">Productos</a></li>
            <li><a className="dropdown-item" href="/newproduct">Crear productos</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/menu">Menú</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Kitchen">Cocina</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBarAdmin;