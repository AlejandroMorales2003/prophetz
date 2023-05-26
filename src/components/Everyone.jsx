import React from 'react';
import styled from 'styled-components';
import {Members, Photographers} from '../data';
import Person from '../components/Person';

const Container = styled.div`
    padding: 50px;
    //display: flex;
    //flex-wrap: wrap;
    //border-top: 20px solid black;
    //text-align: center;
`;

const Title = styled.h1`
    //display: flex;
    text-align: center;
    font-size: 90px;
    border-bottom: 1px solid black;
    //left:0;
    right:0;
`;

const TheCrew = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Photographer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Everyone = () => {
  return (
    <Container>
        <Title>Photographers</Title>
        <Photographer>
            {Photographers.map((item) => (
                <Person item={item} key={item.id}/>
            ))}
        </Photographer>
        <Title>The Crew</Title>
        <TheCrew>
            {Members.map((item) => (
                <Person item={item} key={item.id}/>
            ))}
        </TheCrew>
    </Container>
  )
}

export default Everyone