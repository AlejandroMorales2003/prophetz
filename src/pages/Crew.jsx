import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Everyone from '../components/Everyone';
import Navbar from '../components/Navbar';

const Container = styled.div`
`;

const Crew = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Everyone/>
    </Container>
  )
}

export default Crew