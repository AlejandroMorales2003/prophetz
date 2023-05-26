//import React from 'react'
import styled from 'styled-components'
//import {Search} from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';
import React from "react";

const Container = styled.div`
  height: 110px;

  padding: 0px 50px;
  /*
  position: ${props=>props.className};
  left:0;
  right:0;
  top: 0;
  */
  background-color:white;
  ${mobile({height: "70px", margin: "0px 0px"})};
  border-bottom: 4px solid black;
`;

const Wrapper = styled.div`
  //padding: 10px 20px;
  padding: 0px 20px;
  //Instead of stacking the componenets, it puts them side by side
  display: flex;
  //places a space between the items 
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "0px 20px"})};
`;

/* This is the left side of the nav bar */
const Left = styled.div`
  //this is the units between the spaces
  margin-top:15px;
  flex: 1;
  display: flex;
  //vertically aligns the items
  align-items: center;
 `;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  transition: all .5s ease;
  &:hover {
    color:red;
  }
  ${mobile({display: "none"})};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid black;
  margin-left: 25px;
  padding: 5px;
  ${mobile({margin: "0px"})};
`;

const Input = styled.input`
  border: none;
  width: 200px;
  //height: 30px;
  font-size:20px;
  ${mobile({width: "50px", fontSize: "10px"})};
`;

const Icon = styled.div`
  display:flex;
  align-items: center;
  transition: all .5s ease;
  cursor:pointer;
  color:black;

  &:hover {
    transform:scale(1.05);
    color:red;
  }
`;
/* This is the center of the nav bar */
const Center = styled.div`
  flex: 1;
  margin-top:10px;
  text-align: center;
`;

const Logo = styled.h1`
  //display:flex;
  //align-items:center;
  //justify-content: center;
  font-weight: bold;
  font-family: 'Tech';
  font-size: 70px;
  //margin-top:10px;
  ${mobile({fontSize: "24px", marginLeft: "10px"})};
`;

/* This is the right side of the nav bar */
const Right = styled.div`
  margin-top:15px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center", flex: "2"})};
`;

const MenuItem  = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  transition:all .5s ease;

  &:hover {
    color:red;
  }
  ${mobile({fontSize: "12px", marginLeft: "10px"})};
`;
  
const Navbar = () => {
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Icon>
              <SearchIcon style={{fontSize:30}}/>
            </Icon>
          </SearchContainer>

        </Left>

        <Center>
          <Logo> PROPHET$</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={69} color="primary">
              <ShoppingCartIcon/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar