import React, { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import axios from 'axios';

function Contato(){

    const { handleSubmit, register} = useForm();
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        axios.get(`https://vinicius.pro.br/daoo/rest/index.php/contacts`)
        .then(res => {
            const dados = res.data
            setContatos(dados);
        })
    })

    const onSubmit = (dados, event) => {

        event.preventDefault();

        const url = `https://vinicius.pro.br/daoo/rest/index.php/contacts`;
        let dadosJson = JSON.stringify(dados);

        axios.post(url, dadosJson)
            .then(res => {
                console.log(res);
            })

    } 

    return(
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1>Contato</h1>
            </div>
            <div className="col-sm-1"></div> 

            <div className="container">
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className="form-control" id="name" placeholder="nome" name="name" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="email" name="email" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="mensagem">Mensagem</label>
                    <input type="text" className="form-control" id="message" placeholder="mensagem" name="message" ref={register} />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Enviar</button>
            </form>

            <ul>
            {contatos.map( (dados, index) => <li key={index}>Nome: {dados.name} - Email: {dados.email} - Mensagem: {dados.message}</li>)}
        </ul>
            </div>
        </div>
        
    );
}

export default Contato