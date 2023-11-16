import React from "react";

function ViewTableRow(props) {
  return (
    <tr>
      <td>{props.obj.firstName}</td>
      <td>{props.obj.lastName}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.contact}</td>
      <td>{props.obj.parentContact}</td>
      <td>{props.obj.parentName}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default ViewTableRow;
