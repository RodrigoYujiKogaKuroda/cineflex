import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function GeraLista({sessions}) {

    return (
        <>
            {sessions.map( sessions =>
                <Dia key={sessions.id}>
                    <Texto>
                        {sessions.weekday} - {sessions.date}
                    </Texto>
                    <Horarios>
                        {sessions.showtimes.map( showtime => 
                            <Horario key={showtime.id}>
                                <Link to={`/assentos/${showtime.id}`} style={{ textDecoration: 'none' }}>
                                    <p>{showtime.name}</p>
                                </Link>
                            </Horario>
                        )}
                    </Horarios>
                </Dia>
            )}
        </>
    );

}

const Dia = styled.div`
    @media(max-width: 1125px) {
        margin-bottom: 23px;
        left: 24px;
    }
`;

const Texto = styled.p`
    @media(max-width: 1125px) {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }
`;

const Horarios = styled.div`
    @media(max-width: 1125px) {
        margin-top: 22px;
        display: flex;
        left: 0;
    }
`;

const Horario = styled.div`
    @media(max-width: 1125px) {
        width: 83px;
        height: 43px;
        margin-right: 9px;
        background: #e8833a;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.02em;
            color: #ffffff;
        }

    }
`;