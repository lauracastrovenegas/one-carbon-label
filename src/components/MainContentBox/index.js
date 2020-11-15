import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

export const MainBox = ({score, qrCode, materials, manufacturing, use, transport, endOfLife}) =>{
    return (
        <Container>
            <Column>
                <h1>{score}</h1>
                <p>kg CO2E</p>
                <div><QRCode value={qrCode}/></div>
            </Column>
            <hr></hr>
            <Column>
                <Row><h2>Materials</h2></Row>
                <Row><h2>Manufacturing</h2></Row>
                <Row><h2>Use</h2></Row>
                <Row><h2>Transport</h2></Row>
                <Row><h2>End of Life</h2></Row>
            </Column>
            <Column>
                <Row><h2>{materials}</h2><p>kg CO2e</p></Row>
                <Row><h2>{manufacturing}</h2><p>kg CO2e</p></Row>
                <Row><h2>{use}</h2><p>kg CO2e</p></Row>
                <Row><h2>{transport}</h2><p>kg CO2e</p></Row>
                <Row><h2>{endOfLife}</h2><p>kg CO2e</p></Row>
            </Column>
        </Container>
    );
};

export default MainBox;

const Container = styled.div`
    border-radius: 28px;
    border: 5px solid black;
    display: inline-flex;
    flex-direction: row;
    padding: 10px;

    h1{
        margin: 0;
        font-size: 5rem;
        font-weight: 500;
        text-align: center;
    }

    p{
        text-align: center;
    }

    hr.vertical {
        height:100%; /* you might need some positioning for this to work, see other questions about 100% height */
        width:0;
        border:1px solid black;
    }

    svg {
        width: 50%; 
        height: auto;
    }
`;

const Column = styled.div`
    padding: 20px 20px 20px 10px;
    margin: auto 0 auto 0;

    p{
        margin-top: 0px;
        margin-bottom: 2rem;
    }

`;

const Row = styled.div`
    display: flex;
    flex-direction: row;

    p{
        margin-top: auto;
        margin-bottom: auto;
        padding-left: 2px;
        font-size: 0.2rem;
    }

    h2{
        margin: 5px;
        font-size: 2rem;
    }

`;