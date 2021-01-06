import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <ParallaxProvider>
                <Header />
                <main>{children}</main>
                <Footer />
            </ParallaxProvider>
        </>
    );
};

export default Layout;
