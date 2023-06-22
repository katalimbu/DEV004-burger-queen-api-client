import { useState } from 'react';
import axios from 'axios';
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import RouteDeny from "../error/error";
import NavBarAdmin from '../Users/NavBarAdmi';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('token');
    if (!name){
      alert('El campo de nombre esta vacío')
      return
    }
    else if (!price){
      alert('El campo de precio esta vacío')
      return
    }
    if (!image){
      alert('El campo de imagen esta vacío')
      return
    }
    else if (!type){
      alert('El campo de tipo esta vacío')
      return
    }

    axios.post('http://localhost:8080/products', {
      name: name,
      price: price,
      image: image,
      type:type
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(() => {
        alert('El producto ha sido guardado con éxito');
        navigate('/AdmiProduct');
      })
      .catch(() => {
        alert('Hubo un error al guardar los cambios. Por favor, inténtalo nuevamente.');
      });
  };

  let role = localStorage.getItem('userRole')
  if(role !== "admin"){
    return <RouteDeny />
  }
  
  return (
    <>
    <NavBarAdmin/>
    <ProductForm
      name= {name}
      price= {price}
      image= {image}
      type={type}
      textButton={'Registrar'}
      titleText={'Crear producto'}
      handleButtonClick={handleButtonClick}
      handleNameChange={(value) => setName(value)}
      handlePriceChange={(value) => setPrice(value)}
      handleImageChange={(value) => setImage(value)}
      handleTypeChange={handleTypeChange}
    />
    </>
  );
};

export default NewProduct;
