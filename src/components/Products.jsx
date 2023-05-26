import React from 'react'
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { mobile } from '../responsive'
import ProductItem from './ProductItem'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${mobile({padding: "0px"})}
`
const Products = ({cat,filter,sort}) => {
  console.log(cat,filter,sort)

  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      try {
        const res = await axios.get("http://localhost:4999/api/products")
        console.log(res)
      } catch(err) {

      }
    }
    getProducts()
  },[cat])

  return (
    <Container>
        {popularProducts.map((item) => (
            <ProductItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products