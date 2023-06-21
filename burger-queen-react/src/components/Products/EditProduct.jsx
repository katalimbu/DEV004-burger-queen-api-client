import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import ProductForm  from "./ProductForm"


const EditProduct = () => {
  let { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    //  Se pasa un token de autorización en el encabezado de la solicitud
    axios.get(`http://localhost:8080/products/${id}`, { 
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {//  Si la solicitud es exitosa, se actualiza el estado 
        console.log(response.data)
        setName(response.data.name)
        setPrice(response.data.price);
        setImage(response.data.image);
        setType(response.data.type);
      })
   
      .catch(error => {
        console.error(error);
      });

  }, [id]);

  const handleButtonClick = (e) => { 
    e.preventDefault();

    const accessToken = localStorage.getItem('token');

    axios.patch(`http://localhost:8080/products/${id}`, {
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
        alert('Los cambios han sido guardado con éxito');
      })
      .catch(() => {
        alert('Hubo un error al guardar los cambios. Por favor, inténtalo nuevamente.');
      });
  };

  return( 
    <ProductForm  
      name= {name}
      price= {price}
      image= {image}
      type={type}
      textButton={'Guardar'}
      titleText={'Editar producto'}
      handleButtonClick={handleButtonClick}
      handleNameChange={(value) => setName(value)}
      handlePriceChange={(value) => setPrice(value)}
      handleImageChange={(value) => setImage(value)}
      handleTypeChange={handleTypeChange}
    />
  )
};

export default EditProduct;
