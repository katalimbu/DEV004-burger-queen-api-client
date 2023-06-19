import { PropTypes } from 'prop-types';

//esta es el dibujo de workerlist(la fila)
const WorkersTable = ({ onDelete, id, email, role }) => {
  const handleDeleteWorker = () => {
    onDelete(id);
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
        <ion-icon name="create-outline"></ion-icon>
      </td>
    </tr>
  );
};
// para todos los componentes que reciben props debo definir su tipo, y si son requeridos o no 
WorkersTable.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default WorkersTable;
