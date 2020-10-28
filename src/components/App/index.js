import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation';

import LandingPage from '../Landing';
import HomePage from '../Home';
import FaqPage from '../FAQ';
import ContactUsPage from '../ContactUs';

import * as ROUTES from '../../constants/routes';
 
const App = () => (
    <Router>
        <div>
            <Navigation />
 
            <hr />
 
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.FAQ} component={FaqPage} />
            <Route path={ROUTES.CONTACT_US} component={ContactUsPage} />
        </div>
    </Router>
);
 
export default App;