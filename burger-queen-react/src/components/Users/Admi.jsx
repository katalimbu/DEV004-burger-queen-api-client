import './admi.css'; 
import logo from '../../assets/logo.png';
import WorkerList from "./WorkerList";

// este es el componente principal.
const Admi = () => {
  return (
    <>
      <div className="logoContainer">
        <img src={logo} className="img-fluid" alt="Logo"></img>
        <h1 className="header">Trabajadores Burguer Queen</h1>
      </div>
      <div className="tableContainer">
        <WorkerList />
        
        <button type="button" className="btn btn-warning">
          Agregar nuevo trabajador
        </button>
      </div>
    </>
  );
};

export default Admi;
