import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import Topo from "./../Topo"
import Rodape from "./../Rodape"
import GeraAssentos from "./GeraAssentos.js"

export default function Assentos() {

    const { idSessao } = useParams();
    const [movie, setMovie] = useState([]);
    const [poster, setPoster] = useState([]);
    const [day, setDay] = useState([]);
    const [hour, setHour] = useState([]);
    const [seats, setSeats] = useState([]);

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
		requisicao.then(resposta => {
            setMovie(resposta.data.movie.title);
            setPoster(resposta.data.movie.posterURL);
            setDay(resposta.data.day.weekday);
            setHour(resposta.data.name);
            setSeats(resposta.data.seats);
        });
	}, []);

    return (
        <>
            <Topo />
            <div className='menuBody'>
                <p className='pageTitle'>Selecione o(s) assento(s)</p>
                <Sala>
                    <GeraAssentos seats={seats} />
                </Sala>
            </div>
            <Rodape movie={movie} poster={poster} day={day} hour={hour} />
        </>
    );

}

const Sala = styled.div`
    @media(max-width: 1125px) {
        width: 100%;
        margin-top: 19px;
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
        justify-content: center;
        align-items: center;
    }
`;