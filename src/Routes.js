import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SDHacksLayout from './layouts/AppLayout';
import SDHacksPage from './pages/App';

class Routes extends React.Component {
    withLayout(Layout, Children) {
        return () => (
            <Layout>
                <Children />
            </Layout>
        );
    }

    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    component={this.withLayout(SDHacksLayout, SDHacksPage)}
                    exact
                />
            </Switch>
        );
    }
}

export default Routes;
