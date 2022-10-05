import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../theme/globalStyle';

import Filmes from "./filmes/Filmes";
import Sessoes from "./sessoes/Sessoes";
import Assentos from "./assentos/Assentos";

export default function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Filmes />} />
                    <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                    <Route path="/assentos/:idSessao" element={<Assentos />} />
                </Routes>
		    </BrowserRouter>
        </>
    );

}