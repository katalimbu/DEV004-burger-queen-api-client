import ProductList from './ProductList';
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import RouteDeny from "../error/error";
import NavBarAdmin from '../Users/NavBarAdmi';

const AdmiProduct = () => {
  const navigate = useNavigate();

  const handleNewProduct = () => {
    navigate('/newproduct');
  };

  let role = localStorage.getItem('userRole')
  if(role !== "admin"){
    return <RouteDeny />
  }

  return (
    <>
    <NavBarAdmin/>
      <div className="logoContainer">
        <img src={logo} className="img-fluid" alt="Logo" />
        <h1 className="header">Productos Burguer Queen</h1>
      </div>
      <div className="tableContainer">
        <ProductList />

        <button type="button" className="btn btn-warning" onClick={handleNewProduct}>
          Agregar nuevo producto
        </button>
      </div>
    </>
  );
};

export default AdmiProduct;