import { PropTypes } from 'prop-types';
import { useNavigate } from "react-router-dom";

//esta es el dibujo de workerlist(la fila)
const WorkersTable = ({ onDelete, id, email, role }) => {
  const navigate = useNavigate();

  const handleDeleteWorker = () => {
    onDelete(id);
  };

const handleEditWorker = () => {
  navigate(`/Edit/${id}`);
};
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <ion-icon
          name="trash-outline"
          className="eraseItem"
          onClick={handleDeleteWorker}
        ></ion-icon>
        <ion-icon 
        name="create-outline"
        className="editItem"
        onClick={handleEditWorker}
        ></ion-icon>
      </td>
    </tr>
  );
};
// para todos los componentes que reciben props debo definir su tipo, y si son requeridos o no 
WorkersTable.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WorkersTable;
