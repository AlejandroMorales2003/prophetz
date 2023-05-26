import React, { useState } from 'react'
import styled from 'styled-components'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {sliderItems} from '../data'
import {mobile} from '../responsive'

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display:flex; 
    align-items:center;
    justify-content:center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin:auto;
    cursor: pointer;
    opacity:0.5;
    z-index: 2;
    transition: all .5s ease;

    &:hover {
        //background-color: red;
        opacity: 1;
    } 
`;

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    //margin-top: 0px;
    background-color: black;
    position: relative;
    overflow: hidden;

    ${mobile({display: "none"})};
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 80vh;
    display:flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height:100%;
    flex:1;
    display: flex;
    align-items:center;
    justify-content: center;
`;

const Image = styled.img`
    height:90%;
    width: 80%;
    border: 1px solid white;
    object-fit:cover;
    border-radius: 10px;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;

const Title = styled.h1`
    color: white;
    //font-family: 'Times New Roman';
    font-size:70px;
    font-weight:bold;
`;
const Description = styled.p`
    color: white;
    margin: 10px 0px;
    font-size: 20px;
    //font-family: 'Times New Roman';
    font-weight: 500;
`;
const Button = styled.button`
    margin-top: 15px;
    padding: 10px;
    font-size: 20px;
    //font-family: 'Times New Roman';
    background-color: white;
    border-radius: 8px;
    border:none;
    cursor:pointer;
    transition: all .5s ease;
    &:hover {
        transform:scale(1.1);
        background-color: #f6b6b6
    }
`;

const Slider = () => {
    const [slideIndex,setSlideIndex ] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
            
        }
        //console.log(slideIndex)
    };


  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <NavigateBeforeIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    {/* Alejandro's Container */}
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>

                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <NavigateNextIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider