import { Link } from "react-router-dom";

import styled from 'styled-components';

export default function GeraFilmes({movies}) {

    return (
        <>
            {movies.map(movie =>
                <Movie key={movie.id}>
                    <Link to={`/sessoes/${movie.id}`}>
                        <img src={movie.posterURL} alt={movie.title} />
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