import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import Topo from "./../Topo";
import Rodape from "./../Rodape";
import GeraSessoes from "./GeraSessoes";

export default function Sessoes() {

    const { idFilme } = useParams();
    const [movie, setMovie] = useState([]);
    const [poster, setPoster] = useState([]);
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
		requisicao.then(response => {
            setMovie(response.data.title);
            setPoster(response.data.posterURL);
            setSessions(response.data.days);
        });
	}, []);

    return (
        <>
            <Topo />
            <div className='menuBody'>
                <p className='pageTitle'>Selecione o horário</p>
                <Lista>
                    <GeraSessoes sessions={sessions}/>
                </Lista>
            </div>
            <Rodape movie={movie} poster={poster} day={null} hour={null} />
        </>
    );

}

const Lista = styled.div`
    @media(max-width: 1125px) {
        width: 100%;
        margin-top: 33px;
        margin-left: 24px;
        margin-bottom: 117px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;