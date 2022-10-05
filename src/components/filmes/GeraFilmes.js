import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';

export default function GeraFilmes() {

    const [items, setItems] = useState([]);

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
		request.then(response => {
            setItems(response.data);
        });
	}, []);

    return (
        <>
        {items.map(item =>
            <Movie key={item.id}>
                <Link to={`/sessoes/${item.id}`}>
                    <img src={item.posterURL} alt={item.title} />
                </Link>
            </Movie>
        )}
        </>
    );

}

const Movie = styled.li`
    @media(max-width: 1125px) {
        width: 145px;
        height: 209px;
        margin: 5px 15px 6px 15px;
        background: #ffffff;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            width: 129px;
            height: 193px;
        }

    }
`;