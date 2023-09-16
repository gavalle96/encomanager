import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EncomiendaTableRow from "./encomiendaTableRow";

const EncomiendasList = () => {
    const [encomiendas, setEncomiendas] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/encomiendas/")
            .then(({ data }) => {
                setEncomiendas(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return encomiendas.map((res, i) => {
            return <EncomiendaTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Peso Lb</th>
                        <th>Cliente</th>
                        <th>Contenido</th>
                        <th>Nota</th>
                        <th>Responsable</th>
                        <th>Link</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default EncomiendasList;
