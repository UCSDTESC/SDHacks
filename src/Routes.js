import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SDHacksLayout from './components/Layout';
import SDHacksPage from './App';

class Routes extends React.Component {
    withLayout(Children) {
        return () => (
            <SDHacksLayout>
                <Children />
            </SDHacksLayout>
        );
    }

    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    exact
                    component={this.withLayout(SDHacksPage)}
                />
            </Switch>
        );
    }
}

export default Routes;
