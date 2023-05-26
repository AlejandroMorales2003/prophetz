import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from '../responsive'

const Container = styled.div`
    display:flex;
    height: 30vh;
    ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
    margin: 15px 0px;
    margin-left: 20px;
    flex: 1;
    display:flex;
    flex-direction: column;
`;

const Logo = styled.h1`
    font-family: 'Tech';
    font-size: 50px;
`;

const Description = styled.p`
    //font-family: urbanist;
    margin: 10px 0px;
`;

const SocialContainer = styled.div`
    margin-top: 15px;
    display:flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content: center;
    margin-right: 10px;
    cursor:pointer;
    transition: all .5s ease;
    &:hover {
        transform:scale(1.2);
    }
`;

const Center = styled.div`
    flex: 1;
    margin: 15px 0px;
    ${mobile({backgroundColor: "#eee", padding: "10px"})}
`;

const Title = styled.h3`
    //margin: 15px 0px;
    font-size: 35px;
    margin-bottom: 15px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor:pointer;
    transition: all .5s ease;

    &:hover {
        color:red;
    }
`;

const Right = styled.div`
    flex: 1;
    margin: 15px 0;
    ${mobile({padding: "10px"})}
`;

const ContactItem = styled.div`
    margin-bottom:10px;
    display: flex;
    align-items: center;

    cursor:pointer;
    transition: all .5s ease;
    &:hover {
        color:red;
    }
`;

const Payment = styled.img`
    margin-top:10px;
    width:40%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Prophets.</Logo>
            <Description>Together through the good and the bad.</Description>
            <SocialContainer>
                <SocialIcon color="000080">
                    <InstagramIcon/>
                </SocialIcon>

                <SocialIcon color="800088">
                    <FacebookIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Guide</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Shop</ListItem>
                <ListItem>Decals</ListItem>
                <ListItem>Clothing</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>The Crew</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>


        <Right>
            <Title>Contact</Title>
            <ContactItem>
                 <LocationOnIcon style={{marginRight:"10px"}}/> The Cabin
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/> 541-918-1133
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"10px"}}/> alejandromorales2003@hotmail.com
            </ContactItem>

            <Payment src='/venmoPay.jpeg'/>
        </Right>
    </Container>
  )
}

export default Footer