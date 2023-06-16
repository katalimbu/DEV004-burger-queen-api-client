import React from "react";
import { deleteWorkers } from './Admi';

const WorkersTable = ({ id, email, role }) => {
  const handleDeleteWorker = () => {
    deleteWorkers(id);
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

export default WorkersTable;
