import styled from 'styled-components';

export default function Topo({movie, poster, day, hour}) {

	return (
        <>
            <Container>
                <Poster>
                    <img src={poster} alt={movie}></img>
                </Poster>
                {(day !== null) ?
                <Titulos>
                    <Titulo>
                        {movie}
                    </Titulo>
                    <Titulo>
                    {day} - {hour}
                    </Titulo>
                </Titulos>
                :
                <Titulo>
                    {movie}
                </Titulo>
                }
            </Container>
        </>
	);

}

const Container = styled.div`
    @media(max-width: 1125px) {
        position: fixed;
        width: 100%;
        height: 117px;
        bottom: 0;
        right: 0;
        background: #dfe6ed;
        border: 1px solid #9eadba;
        display: flex;
    }
`;

const Poster = styled.div`
    @media(max-width: 1125px) {
        width: 64px;
        height: 89px;
        margin-top: 14px;
        margin-left: 10px;
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 48px;
            height: 72px;
        }
    }
`;

const Titulos = styled.div`
    @media(max-width: 1125px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const Titulo = styled.p`
    @media(max-width: 1125px) {
        margin-left: 16px;
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        display: flex;
        align-items: center;
    }
`;