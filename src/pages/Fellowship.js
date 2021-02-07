import React from 'react';
import { withRouter } from 'react-router-dom';
import Provide from '../components/Fellowship/Provide';
import Sponsor from '../components/Fellowship/Sponsor';
import About from '../components/Fellowship/About';
import Faq from '../components/Fellowship/Faq';
const FellowshipPage = () => {
    return (
        <>
            <About />
            <Provide />
            <Faq />
            <Sponsor />
        </>
    );
};

export default withRouter(FellowshipPage);
