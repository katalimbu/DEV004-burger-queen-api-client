import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

export default function ProductForm({
  name,
  price,
  image,
  type,
  textButton,
  titleText,
  handleButtonClick,
  handleNameChange,
  handlePriceChange,
  handleImageChange,
  handleTypeChange
  
}) {
  return (
    <div className='mainContainer'>
      <div>
        <img src={logo} className="logoEdit" alt="Logo" />
      </div>

      <div className='container'>
        <h1 className="editheader">{titleText}</h1>

        <form className='formEdit' onSubmit={handleButtonClick}>

          <label>Nombre del Producto</label>
          <input 
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />

          <label>Price</label>
          <input 
            type="number"
            id="price"
            value={price}
            onChange={(e) => handlePriceChange(e.target.value)}
          />

          <label>Imagen</label>
          <input 
            type="text"
            id="image"
            value={image}
            onChange={(e) => handleImageChange(e.target.value)}
          />

            <label>Tipo</label>
            <select name="type" onChange={handleTypeChange} value={type}>
            <option value="elige">Elige el tipo </option>
                <option value="almuerzo">Desayuno</option>
                <option value="cena">Almuerzo</option>
            </select>     

          <button className='btnEdit' type="submit">{textButton}</button>
        </form>
      </div>
    </div>
  );
}

ProductForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  handleTypeChange: PropTypes.func.isRequired
};
