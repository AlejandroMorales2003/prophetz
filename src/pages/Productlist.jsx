import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import {mobile} from '../responsive';

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
    //touched this
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
    //padding: 80px;
    margin-right: 50px;
    font-size: 20px;
    width: 150px;
    border: none;
    cursor: pointer;
    transition: all .5s ease;
    &:hover {
        transform:scale(1.1);
    }
    ${mobile({width: "100px", fontSize: "16px",marginTop: "2px", border: "1px solid black"})}
`;

const Option = styled.option`
`;


const Productlist = () => {
    //figures out the location of the page for example
    const location = useLocation();
    console.log(location)
    console.log("Pathname: " + location.pathname.split("/")[2]);
    const cat = location.pathname.split("/")[2];

    const[filters, setFilters] = useState({})
    const[sort,setSort] = useState("Newest")
    //we are going to update this state based on the filter

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters, //this makes sure both filters are seen
            [e.target.name]: value,
        })
    }

    console.log(filters)

    //console.log(filters);
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Announcement/>
        <Title>Shirts</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled>Color</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>2XL</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e =>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filter={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Productlist