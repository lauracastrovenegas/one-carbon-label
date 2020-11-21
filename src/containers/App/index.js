import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../../components/Navigation';

import LandingPage from '../Landing/index';
import HomePage from '../Home';
//import FaqPage from '../FAQ';
//import ContactUsPage from '../ContactUs';

import * as ROUTES from '../../constants/routes';
 
const App = () => (
    <Router>
        <main>
            <PageWrapper>
                <Navigation />
                <Route exact path={ROUTES.LANDING} component={HomePage} />
            </PageWrapper>
        </main>
    </Router>
);
 
export default App;

const PageWrapper = styled.div`
    @media only screen 
    and (min-width : 768px) {
        display: flex;
    }

    background: white;
  border-radius: 28px;
  border: 5px solid white;
  padding: 10px;
  
`;

