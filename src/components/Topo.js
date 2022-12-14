import styled from 'styled-components';

export default function Topo() {

    return (
        <>
            <Cabecalho>
                <p>CINEFLEX</p>
            </Cabecalho>
        </>
    );

}

const Cabecalho = styled.div`
    @media(max-width: 1125px) {
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100%;
        height: 67px;
        background-color: #c3cfd9;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-style: normal;
            font-weight: 400;
            font-size: 34px;
            line-height: 40px;
            color: #e8833a;
        }
    }
`;