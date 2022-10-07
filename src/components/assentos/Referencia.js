import styled from 'styled-components';

export default function Referencia() {

    return (
        <>
        <Linha>
            <Assento>
                <Cadeira
                    seatColor={"#1aae9e"}
                    borderColor={"#0e7d71"}
                    key="Selecionado">
                </Cadeira>
                <p>Selecionado</p>
            </Assento>
            <Assento>
                <Cadeira
                    seatColor={"#c3cfd9"}
                    borderColor={"#808f9d"}
                    key="Selecionado">
                </Cadeira>
                <p>Disponível</p>
            </Assento>
            <Assento>
                <Cadeira
                    seatColor={"#fbe192"}
                    borderColor={"#f7c52b"}
                    key="Selecionado">
                </Cadeira>
                <p>Indisponível</p>
            </Assento>
        </Linha>
        </>
    );

}

const Linha = styled.div`
    @media(max-width: 1125px) {
        width: 327px;
        margin-top: 16px;
        display: flex;
        justify-content: space-evenly;
    }
`;

const Assento = styled.div`
    @media(max-width: 1125px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Cadeira = styled.div`
    @media(max-width: 1125px) {
        width: 24px;
        height: 24px;
        margin-bottom: 10px;
        background: ${props => props.seatColor};
        border: 1px solid ${props => props.borderColor};
        border-radius: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;