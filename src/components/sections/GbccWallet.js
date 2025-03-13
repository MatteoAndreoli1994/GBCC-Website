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
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Allinea il contenuto a destra */

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .shadow {
    /* Stili per l'ombra se necessario */
  }

  animation: ${float} 3s ease-in-out infinite;
`;


const Section = styled.section`

height:100%;
width: 100%;
position: relative;

align-items: top;
justify-content: center;
display: flex;

@media (max-width: 60em){
flex-direction: column;


}
`

const Container = styled.div`
width: 100%;



display: flex;
justify-content: top;
align-items:center;


  
`

const Box = styled.div`
width: 100%;
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
      <Container>

        <Box> 
          <TypeWriterTextWallet/> 
        </Box>





      </Container>

      
    </Section>
  )
}

export default Home