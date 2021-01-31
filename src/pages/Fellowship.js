import React from 'react';
import { withRouter } from 'react-router-dom';
import Provide from '../components/Fellowship/Provide';
import Sponsor from '../components/Fellowship/Sponsor';
const FellowshipPage = () => {
    return (
        <>
            <Provide />
            <Sponsor />
        </>
    );
};

export default withRouter(FellowshipPage);
