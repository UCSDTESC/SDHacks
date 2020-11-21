import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Routes from './Routes';
import './scss/main.scss';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Trap', sans-serif;
    }
`;

ReactDOM.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </>,
    document.getElementById('app')
);
