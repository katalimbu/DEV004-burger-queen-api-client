import { PropTypes } from 'prop-types';
import { useNavigate } from "react-router-dom";

//esta es el dibujo de workerlist(la fila)
const ProductTable = ({ onDelete, id, name, price, type }) => {
  const navigate = useNavigate();

  const handleDeleteProduct = () => {
    onDelete(id);
  };

const handleEditProduct = () => {
  navigate(`/editproduct/${id}`);
};
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{type}</td>
      <td>
        <ion-icon
          name="trash-outline"
          className="eraseItem"
          onClick={handleDeleteProduct}
        ></ion-icon>
        <ion-icon 
        name="create-outline"
        className="editItem"
        onClick={handleEditProduct}
        ></ion-icon>
      </td>
    </tr>
  );
};
// para todos los componentes que reciben props debo definir su tipo, y si son requeridos o no 
ProductTable.propTypes = {
  id:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductTable;
