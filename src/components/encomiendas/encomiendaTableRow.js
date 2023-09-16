import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const EncomiendaTableRow = (props) => {
const { _id, pesoLb, nombreCliente, contenido, nota, responsable, link } = props.obj;

// const deleteStudent = () => {
// 	axios
// 	.delete(
// "http://localhost:4000/students/delete-student/" + _id)
// 	.then((res) => {
// 		if (res.status === 200) {
// 		alert("Student successfully deleted");
// 		window.location.reload();
// 		} else Promise.reject();
// 	})
// 	.catch((err) => alert("Something went wrong"));
// };

return (
	<tr>
	<td>{_id}</td>
	<td>{pesoLb}</td>
	<td>{nombreCliente}</td>
	<td>{contenido}</td>
	<td>{nota}</td>
	<td>{responsable}</td>
	<td>{link}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-encomienda/" + _id}>
		Edit
		</Link>
	</td>
	</tr>
);
};

export default EncomiendaTableRow;
