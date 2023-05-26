import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    font-size: 20px;
    //width: 100px;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props=>props.type === "filled" ? "black" : 'transparent'};
    color: ${props=>props.type === "filled" ? "white" : 'black '};
    border: 2px solid black;
    ${mobile({margin: "0px 20px"})}
`;

const TopTexts = styled.div`
    ${mobile({display: "none "})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 10px 20px;
    ${mobile({flexDirection: "column"})}
`;
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`
            
`;
const ProductID = styled.span`
            
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styled.span`

`;
const PriceDetail = styled.div`
    flex: 1;  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({marginTop: "20px"})}
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
    font-size: 24px;
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

const Line = styled.hr`
    margin: 20px 0px;
    //border: none;
    opacity: .5;
    //background-color: grey;
`
const ProductPrice = styled.div`
    margin-top: 20px;
    font-size: 30px;
    font-weight:300;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    padding:20px;
    border-radius:10px;
    height: 50vh;
    //background-color: "red";
`;

const SummaryTitle = styled.h1`
    font-weight: 400;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "900"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    font-size: 24px;
`;

const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled" >CHECKOUT NOW </TopButton>
            </Top>
            <Bottom>
                 <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='/shirt1.png'/>
                            <Details>
                                <ProductName><b>Product: </b> EK CIVIC SHIRT</ProductName>
                                <ProductID><b>ID: </b>99999999</ProductID>
                                <ProductColor color='blue'/>
                                <ProductSize><b>Size: </b>L</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer> 
                                <Icon>
                                    <RemoveIcon/>
                                </Icon>
                                <Amount>1</Amount>
                                <Icon>
                                    <AddIcon/>
                                </Icon>
                            </AmountContainer>
                            <ProductPrice>$20</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Line/>

                    <Product>
                        <ProductDetail>
                            <Image src='/shirt1.png'/>
                            <Details>
                                <ProductName><b>Product: </b> EK CIVIC SHIRT</ProductName>
                                <ProductID><b>ID: </b>99999999</ProductID>
                                <ProductColor color='blue'/>
                                <ProductSize><b>Size: </b>L</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer> 
                                <Icon>
                                    <RemoveIcon/>
                                </Icon>
                                <Amount>1</Amount>
                                <Icon>
                                    <AddIcon/>
                                </Icon>
                            </AmountContainer>
                            <ProductPrice>$20</ProductPrice>
                        </PriceDetail>
                    </Product>
                 </Info>
                 <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$40</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$5.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-$5.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                 </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart