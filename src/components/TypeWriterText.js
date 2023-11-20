import React, { useState } from 'react'
import styled from 'styled-components'
import { Bounce} from "react-awesome-reveal";
import { Fade } from 'react-awesome-reveal';
import Button from './Button';
import TwitterImg from "../assets/social-media-icons/twitter.png"
import TelegramImg from "../assets/social-media-icons/Telegram.png"

import OpenSeaImg from "../assets/social-media-icons/OpenSea.png"
import RareboardImg from "../assets/social-media-icons/Rareboard.png"
import NftKeyImg from "../assets/social-media-icons/NftKey.png"
const Telegram = styled.img`
width:35px;
height:35px;



`
const Twitter = styled.img`
width:35px;
height:35px;



`
const OpenSea = styled.img`
width:35px;
height:35px;



`
const Title = styled.h2`
font-size: 100px;
line-height: 1;

font-weight: 900;
width: 100%;
display:flex;
margin-top:1%;

color:white;

@media (max-width: 80em){
  font-size: 80px;
  

}
@media (max-width: 64em){
  font-size: 60px;
  
}

@media (max-width: 48em){
  font-size: 55px;
  
}
@media (max-width: 40em){
  br{
    display:none;
  }
  text-align: center;
  font-size: 40px;
}

@media (max-width: 30em){
  br{
    display:none;
  }
  text-align: center;
  font-size: 35px;
}


`

const ButtonContainer = styled.div`
width: 100%;
margin-top: 7%;


@media (max-width: 40em){
display:none;

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
const Btn2 = styled.div`

display: inline-block;

color: black;
outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;

margin: 1%;
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

color: black;
outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;

margin: 1%;
padding: 0.9rem 1rem;
border-radius: 10px;

transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);


`
export const TypeWriterText = () => {
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
    <>
    
    <Title>
    Collect,<br></br> earn and <br></br>have fun.
    
    </Title>
    
    

    <ButtonContainer>
      <div click={click}>
      
        <Btn2><a href="https://t.me/GBCCNFT"> <Telegram src={TelegramImg}/></a></Btn2> 
        
        <Btn2><a href="https://twitter.com/GBCCNFT"> <Twitter src={TwitterImg}/></a></Btn2>
        <Btn2> <a href="https://opensea.io/collection/game-boyz-color-club"><OpenSea src={OpenSeaImg}/></a></Btn2> 
        <Btn2> <a href="https://www.rareboard.com/nft/upcoming/collection/game-boyz-color-club"> <OpenSea src={RareboardImg}/> </a></Btn2> 
        <Btn2> <a href="https://nftkey.app/collections/gameboyzcolorclub/"><OpenSea src={NftKeyImg}/> </a></Btn2> 
       
      </div>
    </ButtonContainer>
    </>

  )
}

export default TypeWriterText
