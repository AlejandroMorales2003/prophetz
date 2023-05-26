import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import {mobile} from '../responsive'

const Container = styled.div`
    height: 30vh;
    background-color:black;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color:white;
`;
const Title = styled.h1`
    //font-family: urbanist;
    margin-bottom:10px;
    font-size: 70px;
    ${mobile({fontSize: "50px"})}
`;
const Description = styled.div`
    //font-family: urbanist;
    margin-bottom:10px;
    font-size: 24px;
    ${mobile({textAlign: "center", fontSize: "16px"})}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color:white;
    display:flex;
    justify-content: space-between;
    border-color: 1px solid lightgray;
    ${mobile({width: "80%"})}
`;
const Input = styled.input`
    border: none;
    font-size: 20px;
    //font-family: urbanist;
    border: none;
    flex:8;
    margin-left:20px;
`;

const Button = styled.div`
    flex: 2;
    //border: hidden;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.05);
        background-color: blue;
    }
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Keep up with us to stay in the loop.</Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <SendIcon fontSize='large'/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter