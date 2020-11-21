import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Trap', sans-serif;
    }
`;

export default Layout;
