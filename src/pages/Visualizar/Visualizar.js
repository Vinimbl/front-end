import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


export const Visualizar = (props) => {

    const [data, setData] = useState([]);

    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getUsuario = async () => {
            await fetch("http://localhost/Crud/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    //console.log(responseJson);
                    setData(responseJson.usuario);
                });
        }
        getUsuario();
    }, [id]);

}