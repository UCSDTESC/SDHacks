import React from 'react';
import Footer from '../components/Footer';

const ScheduleLayout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default ScheduleLayout;
