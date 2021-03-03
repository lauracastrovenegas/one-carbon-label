import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from '../../components/Navigation';

import { LandingPage } from '../Landing/index';
import HomePage from '../Home';
 
const App = () => (
    <Router>
        <Switch>
            <PageWrapper>
                <InnerWrapper>
                    <Navigation />
                    <Route path="/:id">
                        <HomePage />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </InnerWrapper>
            </PageWrapper>
        </Switch>
    </Router>
);
 
export default App;

const InnerWrapper = styled.div`
    @media only screen 
        and (min-width : 768px) {
            display: flex;
            background: white;
            border-radius: 28px;
            border: 5px solid white;
        }
`;

const PageWrapper = styled.div`
    
background: black;
`;

