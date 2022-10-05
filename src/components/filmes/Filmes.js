import styled from 'styled-components';

import Topo from "./../Topo";
import GeraFilmes from "./GeraFilmes";

export default function Filmes() {

    return (
        <>
            <Topo />
            <div className='menuBody'>
                <p className='pageTitle'>Selecione o filme</p>
                <Lista>
                    <GeraFilmes />
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