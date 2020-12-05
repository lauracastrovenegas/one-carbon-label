import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainBox from '../../components/MainContentBox/index';
import GlanceBox from '../../components/AtAGlance/index';
 
const Home = () => {
  const { id } = useParams();
    const [product, setProduct] = useState();
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        fetch(`https://firestore.googleapis.com/v1/projects/onecarbonlabel/databases/(default)/documents/reviews/${id}`, {
            method: 'GET',
            })
          .then((res) => res.json())
          .then((response) => {
            setProduct(response);
            setLoading(false);
            console.log(`https://firestore.googleapis.com/v1/projects/onecarbonlabel/databases/(default)/documents/reviews/${id}`);
          })
          .catch((error) => console.log(error));
    }, [id]);

  return(
  <Container>
    <WhiteContainer>
    <h1>{product.name}</h1>
    <p2>Summary of Environmental Impact</p2>
    <Row>
      <MainBox
        score= "70"
        qrCode= {`/${product.id}`}
        materials={product.materials}
        manufacturing={product.manufacturing}
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

// https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA
 
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
  @media only screen 
  and (max-width : 768px) {
    border-radius: 28px;
    border: 5px solid white;
    padding: 10px;
  }
  
  background: white;
  
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