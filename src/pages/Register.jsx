import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 50px;
    color:white;
`;
const Wrapper = styled.div`
    width:750px;
    height:750px;
    background-color: black;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
`;

const Logo = styled.img`
    border-radius: 25%;
    width:50%;
    height:50%;
    top:0;
    ${mobile({height: "30%"})}
`
const Title = styled.h1`
    margin-top: 20px;;
`;

const Form = styled.form`
    display:flex;
    flex-wrap: wrap;
    padding: 10px 20px;
    justify-content: center;
`;
const Input = styled.input`
    font-size: 15px;;
    padding: 10px;
    margin: 5px 5px;
    flex: 1;
    min-width: 40%;
    ${mobile({fontSize: "10px"})}
`;

const Agreement = styled.span `
    margin: 10px 0px;
`;

const Button = styled.button `
    width: 20%;
    padding: 10px;
    margin: 0px 20px;
    font-size: 15px;
    cursor: pointer;

    transition: all .5s ease;
    &:hover {
        transform:scale(1.1);
        background-color: #f6b6b6
    }

    ${mobile({fontSize: "10px"})}
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Logo src ="/circle.png"/>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement> 
                    By creating this account, I consent that your data be stored by AliG.
                </Agreement>
                <Button>CREATE</Button>
                <Button>BACK</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register