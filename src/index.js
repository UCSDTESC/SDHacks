import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import './scss/main.scss';

ReactDOM.render(
    <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </>,
    document.getElementById('app')
);
