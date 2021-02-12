import React from 'react';
import { withRouter } from 'react-router-dom';

import Schedule from '../components/Schedule/Schedule';

const SchedulePage = () => {
    return (
        <>
            <Schedule />
        </>
    );
};

export default withRouter(SchedulePage);