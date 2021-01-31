import React from 'react';
import { withRouter } from 'react-router-dom';

import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Tracks from '../components/Home/Tracks';
import Faq from '../components/Home/Faq';
import Sponsors from '../components/Home/Sponsors';
import Team from '../components/Home/Team';

const SDHacksPage = () => {
    return (
        <>
            <Hero />
            <About />
            <Tracks />
            <Faq />
            <Sponsors />
            <Team />
        </>
    );
};

export default withRouter(SDHacksPage);
