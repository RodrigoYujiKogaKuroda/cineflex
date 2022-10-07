import { useState } from "react";
import styled from 'styled-components';


export default function GeraAssentos({seats}) {

    const seatsCopy = seats;
    const [marked, setMarked] = useState([]);

    function markSeat(index, available) {
        if(available) {
            console.log("Selecionado!");
            seatsCopy[index].isAvailable = false;
        }
    }

    return (
        <>
            {seatsCopy.map((seat, index) =>
                <Cadeira
                    seatColor={seat.isAvailable ? "#c3cfd9" : "#fbe192" }
                    borderColor={seat.isAvailable ? "#808f9d" : "#f7c52b" }
                    onClick={() => {markSeat(index, seat.isAvailable)}}
                    key={seat.id}>
                        <p>{seat.name}</p>
                </Cadeira>
            )}
        </>
    );

}

const Cadeira = styled.div`
    @media(max-width: 1125px) {
        width: 26px;
        height: 26px;
        margin: 9px 3.5px;
        background: ${props => props.seatColor};
        border: 1px solid ${props => props.borderColor};
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: #000000;
    }

    .selecionado {
    background: #1aae9e;
    border: 1px solid #0e7d71;
    }
`;