import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import { Icon } from '@mui/material';

const Info = styled.div`
  opacity:0;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.2);
  z-index:  3;
  display:flex;
  align-items:center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor:pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  height: 400px;
  display:flex; 
  align-items: center;
  justify-content: center;
  position:relative;
  //background-color: lightblue;

  &:hover ${Info}{
    opacity:1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
`;



const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-color:white; 
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 10px;
  transition: all .25s ease;

  &:hover{
    background-color:lightblue;
    transform: scale(1.1);
  }
`;

const ProductItem = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        {/* First Icon */}
        <Icon>
          <ShoppingCartIcon/>
        </Icon>
        {/* Second Icon */}
        <Icon>
          <SearchIcon/>
        </Icon>
        {/* Third Icon */}
        <Icon>
          <FavoriteBorderIcon/>
        </Icon>
        
      </Info>
    </Container>
  )
}

export default ProductItem