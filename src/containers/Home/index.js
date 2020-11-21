import React from 'react';
import styled from 'styled-components';
import MainBox from '../../components/MainContentBox/index';
import GlanceBox from '../../components/AtAGlance/index';
 
const Home = () => {
  const name = 'Oatly Oat-Milk 64floz';
  return(
  <Container>
    <WhiteContainer>
    <h1>{name}</h1>
    <p2>Summary of Environmental Impact</p2>
    <Row>
      <MainBox
        score= "70"
        qrCode= "http://facebook.github.io/react/"
        materials="20.3"
        manufacturing="37.8"
        use="9.8"
        transport="1.4"
        endOfLife="0.7"
      />
      <GlanceBox
        tags = {['gluten','gmo','vegan']}
      />
      </Row>
      </WhiteContainer>
  </Container>
  );
};
 
export default Home;

const Container = styled.div`
  background: black;
  text-align: center;
  
  h1{
    margin: 0;
  }

  p{
    margin: 1rem;
  }
  
`;

const WhiteContainer = styled.div`
  background: white;
  border-radius: 28px;
  border: 5px solid white;
  padding: 10px;
  
  p2{
    color: #5a5e63;
    margin-bottom: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;

  @media only screen 
    and (max-width : 768px) {
      display: flex;
      flex-direction: column;
  }
`;