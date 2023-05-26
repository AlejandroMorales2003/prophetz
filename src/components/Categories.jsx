import React from 'react'
import styled from 'styled-components'
import { categories } from '../data';
import CategoryItems from './CategoryItems';
import {mobile} from '../responsive';

const Container = styled.div`
    display: flex; 
    padding: 20px;
    height: 55vh; // change this to have a gap between products and categories
    ${mobile({padding: "0px", flexDirection: "column", height: "140vh", marginBottom: "50px"})}
`;

const Categories = () => {
  return (
    <Container>
        {categories.map((item)=> (
            <CategoryItems item={item} key={item.id}/> //key={item.id} means map based on the id of the data
        ))}
    </Container>
  )
}

export default Categories