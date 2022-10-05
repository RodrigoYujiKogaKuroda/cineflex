import { useState } from "react";

export default function GeraAssentos({seats}) {

    const [assentoMarcado, setAssentoMarcado] = useState(false);
    const [assentosMarcados, setAssentosMarcados] = useState([]);

    function marcarAssento(disponivel) {
        if(disponivel) {
            alert("Pode usar!");
            setAssentoMarcado(!assentoMarcado);
            if (assentoMarcado === true) {
                setAssentosMarcados(...assentosMarcados, seats.id);
            }
        } else {
            alert("Esse assento não está disponível");
        }
    }

    return (
        <>
            {seats.map( seat =>
                <div
                onClick={() => {marcarAssento(seat.isAvailable)}}
                className={`cadeira ${seat.isAvailable ?
                'disponivel'
                : 'indisponivel' }`}
                key={seat.id}>
                    <p>{seat.name}</p>
                </div>
            )}
        </>
    );

}