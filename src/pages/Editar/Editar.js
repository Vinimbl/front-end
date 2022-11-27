import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [logradouro, setLogradouro] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const editUsuario = async e => {
        e.preventDefault();

        await fetch("http://localhost/Crud/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, nome, email, telefone, logradouro })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.erro) {
                    setStatus({
                        type: 'erro',
                        mensagem: responseJson.mensagem
                    });
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: responseJson.mensagem
                    });
                }
            }).catch(() => {
                setStatus({
                    type: 'erro',
                    mensagem: "Usuário não editado, tente novamente mais tarde!"
                });
            });
    }

    useEffect(() => {
        const getUsuario = async () => {
            await fetch("http://localhost/Crud/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    setNome(responseJson.usuario.nome);
                    setEmail(responseJson.usuario.email);
                    setTelefone(responseJson.usuario.telefone);
                    setLogradouro(responseJson.usuario.logradouro);
                });
        }
        getUsuario();
    }, [id])}
