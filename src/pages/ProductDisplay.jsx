import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive';

const Container = styled.div`
`;

const Wrapper = styled.div`
    border-top: 3px solid black;
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
    flex:1;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;

`;

const InfoContainer = styled.div`
    padding: 0px 50px;
    flex:1;
    ${mobile({padding: "10px"})}
`;
 
const Title = styled.h1`
    font-size: 50px;
    font-weight:extra bold;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width:75%;
    margin: 30px 0px;
    ${mobile({flexDirection: "column",marginTop: "10px"})}
`;
const Filter = styled.div`
    display:flex;
    align-items:center;
`;
const FilterTitle = styled.span`
    font-size: 25px;
    font-weight: 200;
    ${mobile({margin: "10px 0px"})}
`;
const FilterColor = styled.div`
    width:20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    border: 1px solid black;
    margin: 0px 5px;
    cursor:pointer;
    transition: all .25s ease;
    &:hover{
        transform:scale(1.5);
    }
`;
const FilterSize = styled.select`
    margin-left: 10px;
    font-size:20px;
    border:none;

    cursor: pointer;
    transition: all .5s ease;
    &:hover {
        transform:scale(1.1);
    }
`;
const FilterSizeOption = styled.option`
     
`;

const AddContainer = styled.div`
    //display: flex;
    //flex-direction: column;
`;
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0px 10px;
`;

const Icon = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    transition: all .5s ease;
    &:hover {
        transform:scale(1.5);
        //background-color: #f6b6b6
    }
`;

const Button = styled.button`
    margin-top: 20px;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid black;
    background-color: white;
    border-radius: 8px;

    transition: all .5s ease;
    &:hover {
        transform:scale(1.1);
        background-color: #f6b6b6
    }
`;

const ProductDisplay = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>

            <ImgContainer>
                <Img src="/shirt1.png"/>
            </ImgContainer>

            <InfoContainer>

                <Title>EK Civic Shirt</Title>

                <Desc>
                    Made out of 100% cotton. This EK shirt will let you flex on your honda boys
                    with style.
                </Desc>

                <Price>$20</Price>

                <FilterContainer>

                    <Filter>

                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='white'/>
                        <FilterColor color='grey'/>
                        <FilterColor color='blue'/>

                    </Filter>

                    <Filter>

                        <FilterTitle>Size:</FilterTitle>

                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>

                    </Filter>

                </FilterContainer>

                <AddContainer>
                    <AmountContainer> 
                        <Icon>
                            <RemoveIcon/>
                        </Icon>
                        <Amount>1</Amount>
                        <Icon>
                            <AddIcon/>
                        </Icon>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductDisplay