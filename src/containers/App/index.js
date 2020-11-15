import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../../components/Navigation';

import LandingPage from '../Landing/index';
//import HomePage from '../Home';
//import FaqPage from '../FAQ';
//import ContactUsPage from '../ContactUs';

import * as ROUTES from '../../constants/routes';
 
const App = () => (
    <Router>
        <div>
            <Navigation />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
        </div>
    </Router>
);
 
export default App;