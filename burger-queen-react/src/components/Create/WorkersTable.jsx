import React from "react";
//props de componente.

const WorkersTable = ({id, email, role}) => (

            <tr>
            <th scope="row">{id}</th>
            <td>{email}</td>
            <td>{role}</td>
            <td><ion-icon name="trash-outline" className='eraseItem'></ion-icon>
            <ion-icon name="create-outline"></ion-icon>
            </td>
        </tr>
);
export default WorkersTable