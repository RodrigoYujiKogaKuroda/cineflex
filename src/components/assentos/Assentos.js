import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import Topo from "./../Topo";
import Rodape from "./../Rodape";
import GeraAssentos from "./GeraAssentos.js";
import Referencia from "./Referencia";

export default function Assentos() {

    const { idSessao } = useParams();
    const [movie, setMovie] = useState([]);
    const [poster, setPoster] = useState([]);
    const [day, setDay] = useState([]);
    const [hour, setHour] = useState([]);
    const [seats, setSeats] = useState([]);

    useEffect(() => {
		const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
		request.then(response => {
            setMovie(response.data.movie.title);
            setPoster(response.data.movie.posterURL);
            setDay(response.data.day.weekday);
            setHour(response.data.name);
            setSeats(response.data.seats);
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
                <Referencia />
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