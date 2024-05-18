import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from "../Carousel"
import Button from "../Button"
import { useState, useEffect } from "react";
import {dark} from "../../styles/Themes"
import { keyframes } from 'styled-components'
import accessorio1 from "../../assets/elements/assets/1.png"
import accessorio2 from "../../assets/elements/assets/2.png"
import accessorio3 from "../../assets/elements/assets/3.png"
import accessorio4 from "../../assets/elements/assets/4.png"


import accessorio7 from "../../assets/elements/assets/7.png"
import accessorio8 from "../../assets/elements/assets/8.png"

import accessorio10 from "../../assets/elements/assets/10.png"
import accessorio11 from "../../assets/elements/assets/11.png"
import accessorio12 from "../../assets/elements/assets/12.png"
import LOGO from "../../assets/LOGO.gif"


const Section = styled.section`
min-height: 60vh;
width: 100%;
color: white;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;


`
const Container = styled.div`

width: 90%;
height:100%;

min-height: 80vh;
margin: 0 auto;
display: flex;
align-items: center;
justify-content:center;


@media (max-width: 70em){
  width: 90%;
}


@media (max-width: 64em){
  width: 90%;
  flex-direction: column;



  @media (max-width: 40em){
    flex-direction: column;

  }

  @media (max-width: 30em){


  }
  
`
const Box1 = styled.div`
width:50%;

height:90vh;
display: flex;

flex-direction: column;
Justify-content: center;
align-items: left;


@media (max-width: 64em){


  flex-direction: column;
  height: 70vh;
  width:100%;
  justify-content:top;
  align-items: center;

}
@media (max-width: 40em){

  flex-direction: column;

  width:100%;
  justify-content:top;

}

@media (max-width: 30em){

  height: 30vh;
display:flex;
justify-content:start;
}
`

const Box = styled.div`

min-height: 60vh;
width:50%;
display: flex;

flex-direction: column;
Justify-content: center;
align-items: center;




@media (max-width: 64em){

  flex-direction: column;
  height: 100%;
  width:100%;
  justify-content:center;


}
@media (max-width: 30em){


min-height: 20vh;
margin-bottom:2rem;
}

`
const Title = styled.h2`

line-height: 1;
margin-left:2rem auto;
margin: 1.5rem auto;
width: 80%;
font-size: 56px;
font-weight: 900;

@media (max-width: 80em){
  font-size: 48px;

      }

@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: 46px;
  margin-left: 0;
  margin: 1.5rem auto;
  br{
    display:none;
  }
}

@media (max-width: 30em){
  width: 100%;
  text-align:center;
  font-size: 40px;
  margin: 1rem auto;
}
@media (max-width: 20em){
  br{
    display:none;
  }
  text-align: center;
  font-size: 30px;
}
`
const ButtonContainer = styled.div`
width: 80%;
margin-top: 7%;
margin-left:8%;
align-items:center;
display:flex;


@media (max-width: 64em){
  margin-left:0%;
  justify-content:center;
  width: 100%;
  margin-top: 10%;
}

}
  @media (max-width: 30em){
    width: 100%;

  }
`
const SubText = styled.p`

line-height: 1.5;
font-size: 24px;
font-weight: 400;
color: #E4E3E3;
align-self: flex-start;
width: 80%;
margin: 1rem auto;



@media (max-width: 64em){
  font-size: 20px;
  text-align:center;
}
@media (max-width: 40em){
  width: 100%;
  text-align:center;
  margin-left: 0;
  font-size: 20;
}
@media (max-width: 30em){
  width: 100%;
  text-align:center;
  font-size: ${props => props.theme.fontsm};
  margin: 0 auto;
}
`
const SubText2 = styled.p`

line-height: 1.5;
font-size: 24px;
font-weight: 600;
color: #5700EF;
align-self: flex-start;
width: 80%;
margin: 1rem auto;



@media (max-width: 64em){
  font-size: 20px;
  text-align:center;
}
@media (max-width: 40em){
  width: 100%;
  text-align:center;
  margin-left: 0;
  font-size: 20;
}
@media (max-width: 30em){
  width: 100%;
  text-align:center;
  font-size: ${props => props.theme.fontsm};
  margin: 0 auto;
}
`
const SubText3 = styled.p`

line-height: 1.5;
font-size: 24px;
font-weight: 600;
color: white;
align-self: flex-start;
width: 80%;
margin: 1rem auto;



@media (max-width: 64em){
  font-size: 20px;
  text-align:center;
}
@media (max-width: 40em){
  width: 100%;
  text-align:center;
  margin-left: 0;
  font-size: 20;
}
@media (max-width: 30em){
  width: 100%;
  text-align:center;
  font-size: ${props => props.theme.fontsm};
  margin: 0 auto;
}
`





const Textbox = styled.div`

@media (max-width: 64em){
margin-bottom:1rem;
justify-content:center;
  
  }

@media (max-width: 30em){
  margin-bottom:auto;

  }  
  
`
const Uptext = styled.h2`
align-self: flex-start;
font-size: 25px;
font-weight: 800;
line-height: 1;
color: #5700EF;
margin: 1rem auto;
width: 80%;
display:flex;



@media (max-width: 64em){
display:none;
    }

`
const LinkGitbook = styled.a`

  cursor: pointer; /* Cambia il cursore per far capire che è cliccabile */
  color: white; /* Colore del link */
  text-decoration: none; /* Rimuovi la sottolineatura predefinita */
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease; /* Aggiungi una transizione per il colore e la trasformazione */

  &:hover {
    color: green; /* Cambia colore al passaggio del mouse */
    transform: scale(1.05); /* Leggera ingrandimento al passaggio del mouse */
  }

  &:before {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: green; /* Colore della sottolineatura */
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }
`;
const UptextMobile = styled.h2`
align-self: flex-start;
font-size: 25px;
font-weight: 800;
line-height: 1;
color: #5700EF;
align-self: center;
margin: 1rem auto;
margin-top: 3rem;
width: 80%;
display:none;

@media (max-width: 64em){
  justify-content: center;
  text-align: center;
  display:flex;
    }

`

const Btn = styled.div`
margin-left:1rem;
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

text-shadow:
  0 0 7px #ffd700,
  0 0 10px #ffd700,
  0 0 21px #ffd700,
  0 0 42px #ffd700,
  0 0 82px #ffd700,
  0 0 92px #ffd700,
  0 0 102px #ffd700,
  0 0 151px #ffd700;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0,0,0,0.4);

    &:before {
      border-radius: 10px;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.5) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0.5) 75%,
        transparent 75%,
        transparent
      );
      background-size: 50px 50px;
      animation: blink 0.8s linear infinite;
      z-index: -1;
    }
  }

    @keyframes blink {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }

`


export const Token = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    window.location.href = 'https://pancakeswap.finance/swap?outputCurrency=0x3580F19068a264548D6816BDE5942693Eed95dc1';
  };
  const handleClick2 = () => {
    window.location.href = 'https://gbcc-deployer.gitbook.io/game-boyz-color-club-whitepaper/game-boyz-color-token/info-and-tokenomics';
  };


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
    <div>
    <Section id="token">
      
      <Container>
      <UptextMobile>$GBCC TOKEN </UptextMobile> 
        <Box1>
         <img src={LOGO} alt="LOGO" style={{ width: '80%', height: 'auto' }} />
        </Box1>

        <Box>
          <Textbox>
            <Uptext>$GBCC TOKEN </Uptext> 

            <Title> BUY ON PANCAKESWAP! </Title>
            <SubText> $GBCC is the utility token of Game Boyz Color Club, serving as the driving force behind the growth and sustainability of our ecosystem.
<br></br>Users of GBCC NFTs and occasional traders and degens will benefit from this new release that combines the spirit of a MEME Coin with a utility currency!
            </SubText>
            <SubText2>              
            <ThemeProvider theme={dark}>CA: 0x3580f19068a264548d6816bde5942693eed95dc1
          </ThemeProvider>             
          </SubText2>
          <SubText3>              
          <LinkGitbook onClick={handleClick2}>          GITBOOK</LinkGitbook>
        
          </SubText3>

            <ButtonContainer>
              <ThemeProvider theme={dark}><Btn onClick={handleClick}>BUY</Btn></ThemeProvider>
            </ButtonContainer>
          </Textbox>
        </Box>
        
      </Container>
     
    </Section>
    {/*<RowContainer >
    <Row direction="none">
      <div><img src={accessorio1} alt="Gameboyz"width="250" height="250"/></div>
      <div><img src={accessorio2} alt="Gameboyz"width="250" height="250"/></div>
      <div><img src={accessorio3} alt="Gameboyz"width="250" height="250"/></div>
      <div><img src={accessorio4} alt="Gameboyz"width="250" height="250"/></div>

     
      <div><img src={accessorio7} alt="Gameboyz"width="250" height="250"/></div>
      <div><img src={accessorio8} alt="Gameboyz"width="250" height="250"/></div>

      <div><img src={accessorio10} alt="Gameboyz"width="250" height="250"/></div>
      <div><img src={accessorio11} alt="Gameboyz"width="250" height="250"/></div>
      <div><img src={accessorio12} alt="Gameboyz"width="250" height="250"/></div>
      <div><img src={accessorio13} alt="Gameboyz"width="250" height="250"/></div>
    </Row>
    </RowContainer>*/}


    </div>
  )
}

export default Token
