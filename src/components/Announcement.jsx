import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    //transform:translateX(-20vw);
`;

const Text = styled.p`
    width:100%;
    color: white;
    font-size: 10px;
    font-weight: bold;
    display:flex;
    justify-content: center;
    align-content:center;
    //flex: 1;
`;

const Announcement = () => {
  //const [slideIndex,setSlideIndex] = useState(0);
  return (
    <Container>
      <Text>FREESHIPPING</Text>
      <Text>FREESHIPPING</Text>
      <Text>FREESHIPPING</Text>
    </Container>
  )
}

export default Announcement