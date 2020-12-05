import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
 
import * as ROUTES from '../../constants/routes';

const NavWrapper = styled.div`
  display: flex;
  color: black;

  nav.vertical{
    height: 100%;
  }

  @media only screen 
  and (max-width : 768px) {
    background-color: black;
    color: white;
  }
`;

const Button = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 1rem 0.5rem;
  margin: 0rem 0rem;
  width: 11rem;
  background: transparent;
  color: white;

  :hover {
    color: gray;
  }

  :active {
    color: gray;
  }

  @media (max-width: 320px) {
    width: 5rem;
  }
`
 
const Navigation = () => (
  <NavWrapper>
    <nav>
        <Button href={ROUTES.LANDING}>
            One Carbon Label
        </Button>
    </nav>
  </NavWrapper>
);
 
export default Navigation;