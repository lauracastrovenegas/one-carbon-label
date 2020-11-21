import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const GlanceBox = ({tags}) =>{
    return (
        <Container>
            <p>At A Glance</p>
            <Row>{tags.map(tag => <GlanceTag icon={tag}/>)}</Row>
        </Container>
    );
};

export default GlanceBox;

const GlanceTag = ({icon}) =>{
    const Icon = (icon == 'gluten') ? <><img src={"https://onecarbonlabel.s3.amazonaws.com/Artboard_15-512+1.svg"}/></> : ((icon == 'vegan') ? <><img src={"https://onecarbonlabel.s3.amazonaws.com/Artboard_9-512+1.svg"}/></> : <><img src={"https://onecarbonlabel.s3.amazonaws.com/Artboard_52-512+1.svg"}/></>)

    return (
        <IconBox>
            {Icon}
        </IconBox>
    );
};

const IconBox = styled.div`
    width: 6.3rem;
    border-radius: 15px;
    border: 3px solid black;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.10);
    margin: 0.4vw;
    padding: auto;
    display: flex;
    width: 12vw;
    height: 12vw;
    
    img{
        height: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    @media only screen 
    and (max-width : 768px) {
        width: 29vw;
        height: 29vw;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
`;

const Container = styled.div`
    text-align: left;
    width: auto;
    margin-left: auto;

    p{
        margin-bottom: 5px;
        color: #5a5e63;
    }

    @media only screen 
    and (max-width : 768px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

