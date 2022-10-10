import { useState } from "react";
import styled from 'styled-components';


export default function GeraAssentos({seats}) {

    const AVAILABLE_COLOR = "#c3cfd9"
    const AVAILABLE_BORDER = "#808f9d"
    const UNAVAILABLE_COLOR = "#fbe192"
    const UNAVAILABLE_BORDER = "#f7c52b"
    const SELECTED_COLOR = "#1aae9e"
    const SELECTED_BORDER = "#0e7d71"

    const seatsCopy = seats.map(a => {return {...a}});
    const [markedSeat, setMarkedSeat] = useState([]);

    function markSeat(index, available) {
        const temporaryMarks = [...markedSeat];
        if (available && seatsCopy[index].isAvailable === true) {
            seatsCopy[index].isAvailable = false;
            temporaryMarks.push(index);
        } else {
            console.log("Não rolou...")
            seatsCopy[index].isAvailable = true;
        }
        setMarkedSeat(temporaryMarks);
        console.log(temporaryMarks);
    }

    return (
        <>
            {seats.map((seat, index) =>
                <Cadeira
                    seatColor={seatsCopy[index].isAvailable ? AVAILABLE_COLOR : UNAVAILABLE_COLOR }
                    borderColor={seatsCopy[index].isAvailable ? AVAILABLE_BORDER : UNAVAILABLE_BORDER }
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
`;