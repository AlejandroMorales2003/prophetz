import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 50px;
    color:white;
    ${mobile({width: "390px"})}
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

const Wrapper = styled.div`
    width:750px;
    height:750px;
    background-color: black;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;

    ${mobile({width: "100%"})}
    `;

const Form = styled.form`
    display:flex;
    padding: 10px 20px;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`;

const Input = styled.input`
    font-size: 15px;;
    padding: 10px;
    margin: 5px 5px;
    width: 400px;

    ${mobile({width: "200px"})}
`;
const Buttons = styled.div`
  display:flex;
`;

const Button = styled.button `
    width: 200px;
    padding: 10px;
    margin: 5px 10px;
    font-size: 15px;
    cursor: pointer;
    ${mobile({width: "100px"})}

    transition: all .5s ease;
    &:hover {
        transform:scale(1.1);
        background-color: #f6b6b6
    };
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  margin: 10px 0px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
          <Logo src ="/circle.png"/>
          <Title>LOGIN</Title>
          <Form>
              <Input placeholder="Username"/>
              <Input placeholder="Password"/>
              <Buttons>
                <Button>LOGIN</Button>
                <Button>BACK</Button>
              </Buttons>
              <Link>Forgot your Password?</Link>
              <Link>Create an Account</Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Login