import React from 'react';
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
    //flex: 1;
    width: 100%;
    height:100%;
    padding: 20px;
    border-radius: 100px;
    display:flex;
    margin: 30px 0px;
    background-color:black;
    color:white;
`;

const Info = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 10px;
`;

const ImgContainer = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    //height: 500px;
    //width: 700px;
    background-image: url("${props=>props.bg}");
    background-size: cover;
    background-position: bottom;
    //background-position: 0px -100px;
    //object-fit: cover;
    height: 450px;
    width: 450px;
`;

/* const Vid = styled.video`

`; */

const Name = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Bio = styled.p`
    font-size: 24px;
    margin-bottom: 20px;
`

const Icon = styled.div`
    margin-right: 10px;
    display:flex;
    align-items: center;
    justify-content:center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: lightpink;
`;

const InstaName = styled.p`
    font-size: 24px;
`;

const Contact = styled.p`
    display:flex;
    align-items: center;
    //justify-content: center;
`;

const Person = ({item}) => {
  return (
    <Container>
        {/* <Vid src="/airWrx.mov" type="video.mov" autoPlay muted loop/> */}
        <ImgContainer>
            <Image bg={item.img}/>
        </ImgContainer>
        <Info>
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>
            <Contact>
                <Icon>
                    <InstagramIcon style={{fontSize:50}}/>
                </Icon>
                <InstaName>
                    {item.contact}
                </InstaName>
            </Contact>
        </Info>
    </Container>
  )
}

export default Person