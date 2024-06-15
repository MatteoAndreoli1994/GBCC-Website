import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import CoverVideo from '../CoverVideo'
import TypeWriterTextWallet from '../TypeWriterTextWallet'
import MyVideo from "../../assets/elements/trailer.mp4"
import GbccImage from "../../assets/nfts/wallet.png"
import  { keyframes } from 'styled-components';
import OpenSeaImg from "../../assets/social-media-icons/OpenSea.png"
import RareboardImg from "../../assets/social-media-icons/Rareboard.png"
import NftKeyImg from "../../assets/social-media-icons/NftKey.png"
import TwitterImg from "../../assets/social-media-icons/twitter.png"
import TelegramImg from "../../assets/social-media-icons/Telegram.png"



const Twitter = styled.img`
width:35px;
height:35px;

@media (max-width: 20em){
  width:23px;
  height:23px;

}
`

const OpenSea = styled.img`
width:35px;
height:35px;
@media (max-width: 20em){
  width:23px;
  height:23px;

}
`
const Telegram = styled.img`
width:35px;
height:35px;
@media (max-width: 20em){
  width:23px;
  height:23px;

}
`

const float = keyframes`
  0% {
    transform: translatey(0px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    transform: translatey(-10px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: translatey(0px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }

  0% {
    filter: drop-shadow(0 50px 9px rgba(0,0,0,.4));
    transform: translatey(0);
}

50% {
    filter: drop-shadow(0 20px 14px rgba(0,0,0,.1));
    transform: translatey(-16px);
}
100% {
    filter: drop-shadow(0 50px 9px rgba(0,0,0,.4));
    transform: translatey(0);
}
`

const FloatingImage = styled.div`
  position: relative;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .shadow {

  }

  animation: ${float} 3s ease-in-out infinite;
`


const Section = styled.section`
min-height:60vh;
width: 100vw;
position: relative;

align-items: center;
justify-content: center;
display: flex;

@media (max-width: 60em){
flex-direction: column;


}
`

const Container = styled.div`
width: 80vw;
min-height: 60vh;


display: flex;
justify-content: top;
align-items:center;



@media (max-width: 60em){
  flex-direction: column-reverse;
  justify-content: top;
}
@media (max-width: 30em){

  min-height: 60vh;


}
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;



@media (max-width: 60em){

  width: 100%;

  margin-bottom: 5%;
  align-items:center;
  align-text:center; 
 
}
`

const ColumnContainer = styled.div`
width: 50%;
height: 100%;

justify-content: center;
align-items: center;
display: flex;
flex-direction: column;


@media (max-width: 40em){
width:80%;

margin-bottom:2rem;

}
`
const ButtonContainer = styled.div`
width: 100%;
display:flex;
margin-top:2%;
display:none;

align-items:center;
justify-content:center;
@media (max-width: 40em){

display:flex;
margin-top:0%;

}

`
const Btn = styled.div`

display: inline-block;
background-color: #5700EF;
color: black;
outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;
font-weight: 700;

padding: 0.9rem 2.3rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
&:hover{
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
}

`

const VideoTrailer = styled.img`
width: 100%;
height: 100%;
`
const Btn2 = styled.div`

display: inline-block;


outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;


padding: 0.9rem 1rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
&:hover{
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
}

`
const Btn3 = styled.div`

display: inline-block;

outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;


padding: 0.9rem 1rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);


`
const TitleMobile = styled.h2`
  font-size: 100px;
  line-height: 1;
  font-weight: 900;
display:none;
  display: none;
  margin-top: 1%;
  color: white;


  @media (max-width: 60em) {
margin-bottom:1%;
display:flex;

    br {

    }
    text-align: center;
    font-size: 40px;
  }
  @media (max-width: 30em) {
    br {

    }
    text-align: center;
    font-size: 35px;
  }
`;

const Title2Mobile = styled.h2`
  font-size: 50px;
  line-height: 1;
  font-weight: 900;

  display: none;
  margin-top: 2.5%;
  color: white;


  @media (max-width:60em) {
margin-bottom:4%;
display:flex;
    br {

    }
    text-align: center;
    font-size: 20px;
  }
  @media (max-width: 30em) {
    br {

    }
    text-align: center;
    font-size: 17px;
  }
`;

export const Home = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) =>{
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

    setClick(!click);
  }

  return (
    <Section id="home">
            <TitleMobile>TG Wallet</TitleMobile>
            <Title2Mobile>$GBCC Deposit</Title2Mobile>



        
      <Container>

        <Box> 
          <TypeWriterTextWallet/> 
        </Box>


        <ColumnContainer>
        <FloatingImage>
        <img src={GbccImage} alt="Angioletto" width="400" height="400"/>
        <div className="shadow" />
        </FloatingImage>

          
        </ColumnContainer>



      </Container>

      
    </Section>
  )
}

export default Home