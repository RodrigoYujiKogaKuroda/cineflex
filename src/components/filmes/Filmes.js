import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Topo from "./../Topo";
import GeraFilmes from "./GeraFilmes";

export default function Filmes() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
		request.then(response => {
            setMovies(response.data);
        });
        request.catch(error => {});
	}, []);

    return (
        <>
            <Topo />
            <div className='menuBody'>
                <p className='pageTitle'>Selecione o filme</p>
                <Lista>
                    <GeraFilmes movies={movies}/>
                </Lista>
            </div>
        </>
    );

}

const Lista = styled.ul`
    @media(max-width: 1125px) {
        min-width: 100%;
        margin-top: 33px;
        display: grid;
        grid-template-columns: auto auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
    }
`;