import { useState } from 'react';
import ProductList from './ProductList';
import NewProduct from './createProduct'
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import RouteDeny from "../error/error";
import BasicExample from "../Users/NavBarAdmi"
import NavBarAdmin from '../Users/NavBarAdmi';

const AdmiProduct = () => {
  const [showNewProduct, setShowNewProduct] = useState(false);
  const navigate = useNavigate();
  const handleNewProduct = () => {
    setShowNewProduct(true);
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
        {!showNewProduct && (
          <button type="button" className="btn btn-warning" onClick={handleNewProduct}>
            Agregar nuevo producto
          </button>
        )}
        {showNewProduct && <NewProduct />}
      </div>
    </>
  );
};
export default AdmiProduct;