import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SDHacksLayout from './layouts/AppLayout';
import FellowshipLayout from './layouts/FellowshipLayout';
import ScheduleLayout from './layouts/ScheduleLayout';
import SDHacksPage from './pages/App';
import FellowshipPage from './pages/Fellowship';
import SchedulePage from './pages/Schedule';

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
                <Route
                    path="/fellowship"
                    component={this.withLayout(
                        FellowshipLayout,
                        FellowshipPage
                    )}
                    exact
                />
                <Route
                    path="/schedule"
                    component={this.withLayout(
                        ScheduleLayout,
                        SchedulePage
                    )}
                    exact
                />
            </Switch>
        );
    }
}

export default Routes;
