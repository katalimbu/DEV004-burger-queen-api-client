import LogoutButton from "../Login/Logout";

function NavBarWaiter() {
    return (
      <div className='container-fluid'>
        <navBar/>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Hola Mesero!</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/menu">Menú</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/waiter">órdenes</a>
          </li>
        </ul>
      </div>
      <LogoutButton />
    </div>
  </nav>
      </div>
    )
  }
  
  export default NavBarWaiter;