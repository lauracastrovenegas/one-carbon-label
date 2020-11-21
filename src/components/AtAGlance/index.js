import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const GlanceBox = ({tags}) =>{
    return (
        <div>
            <div>{tags.map(tag => <GlanceTag icon={tag}/>)}</div>
        </div>
    );
};

export default GlanceBox;

const GlanceTag = ({icon}) =>{
    const Icon = icon = "gluten" ? <><FontAwesomeIcon icon={faCarrot}></FontAwesomeIcon><p>Open</p></> : <><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon><p>Closed</p></>;
    return (
        <Container>
            {Icon}
        </Container>
    );
};

const Container = styled.div`

`;

