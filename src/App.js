import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Hero from './components/Hero';

class SDHacksPage extends Component {
    render() {
        return (
            <>
                <Hero />
            </>
        );
    }
}

export default withRouter(SDHacksPage);
