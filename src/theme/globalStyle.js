import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        font-family: 'Roboto', sans-serif;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        width: 100%;
        height: 100%;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .menuBody {
        min-width: 100%;
        margin-top: 112px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .pageTitle {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
    }

    .cadeira {
        width: 26px;
        height: 26px;
        margin: 9px 3.5px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cadeiraMenor {
        width: 24px;
        height: 24px;
        margin-bottom: 10px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cadeira p {
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: #000000;
    }
    .selecionado {
        background: #8dd7cf;
        border: 1px solid #1aae9e;
    }
    .disponivel {
        background: #c3cfd9;
        border: 1px solid #808f9d;
    }
    .indisponivel {
        background: #fbe192;
        border: 1px solid #f7c52b;
    }
    ::placeholder {		
		font-style: italic;
		color: #afafaf;
	}
`;

export default GlobalStyle;