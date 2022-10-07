import { useState } from "react";
import styled from 'styled-components';

export default function Formulario() {

    var [nome, setNome] = useState("");
    var [cpf, setCpf] = useState("");

    function submitData(event) {
        event.preventDefault();
    }

    return (
        <>
        <Forms onSubmit={submitData}>
            <Campo>
                <label htmlFor="nome">Nome do comprador</label>
                <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome..."
                required
                />
            </Campo>
            <Campo>
                <label htmlFor="cpf">CPF do comprador</label>
                <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite seu CPF..."
                required
                />
            </Campo>
            <Botao type="submit">
                Reservar assento(s)
            </Botao>
        </Forms>
        </>
    );
}


const Forms = styled.form`
    @media(max-width: 1125px) {
        margin-top: 42px;
        margin-bottom: 117px;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Campo = styled.div`
    @media(max-width: 1125px) {
        width: 327px;
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    input[type=text] {
		width: 100%;
		height: 51px;
        padding: 0 18px;
		font-size: 18px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
`;

const Botao = styled.button`
    @media(max-width: 1125px) {
        width: 225px;
        height: 42px;
        margin-top: 41px;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        margin-bottom: 29px;
        color: #ffffff;
        background-color: #e8833a;
        border: none;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;