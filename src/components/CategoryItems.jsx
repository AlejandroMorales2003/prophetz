//import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'
const Container = styled.div`
    flex:1;
    margin: 10px;
    height: 70vh;
    position: relative;
    transition: all .5s ease;
    &:hover {
        transform: scale(1.025);
    }
    ${mobile({margin: "10px 10px"})}
`;
const Image = styled.img`
    width: 100%;
    border: 1px solid black;
    height: 80%;
    object-fit: cover;
    border-radius: 10px;
    ${mobile({height: "100%"})}
`;
const Info = styled.div`
    position: absolute;
    left:0;
    width:100%;
    height:80%;
    bottom: 0px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;
const Title = styled.h1`
    padding: 5px 10px;
    //font-family: 'Urbanist', sans-serif;
    background-color: white;
    color: black;
    font-size: 40px;
    font-weight: bold;
    border: 1px solid black;
    margin-bottom: 10px;
`;

const Shop =  styled.button`
    padding: 10px;
    font-weight: bold;
    //font-family: 'Urbanist', sans-serif;
    font-size: 15px;
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    cursor:pointer;
    transition: all .5s ease;
    &:hover {
        transform:scale(1.1);
        background-color: #f6b6b6;
        //font-weight: black;
    }
`;

const CategoryItems = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Shop>SHOP NOW</Shop>
            </Info>
        </Link>
    </Container>
  )
}

export default CategoryItems