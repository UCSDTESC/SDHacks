import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from '../components/Home/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <ParallaxProvider>
                <Header
                    navItems={['about', 'tracks', 'faq', 'sponsors', 'contact']}
                />
                <main>{children}</main>
                <Footer />
            </ParallaxProvider>
        </>
    );
};

export default Layout;
