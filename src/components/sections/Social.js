import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from "../Carousel"
import Gbcc from "../../assets/nfts/GBCC_Social.png"
import Button from "../Button"
import {dark} from "../../styles/Themes"
import TwitterImg from "../../assets/social-media-icons/twitter.png"
import TelegramImg from "../../assets/social-media-icons/Telegram.png"


const Section = styled.section`
min-height: 75vh;
width: 100%;
color: white;
display: flex;
justify-content: center;
align-items: center;

overflow: hidden;
`
const Container = styled.div`
width: 75%;
height: 90%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;


@media (max-width: 40em){
  width: 85%;
  flex-direction: column;
}
`
const Box = styled.div`
width: 50%;
height: 60%;
display: flex;

flex-direction: column;
Justify-content: center;
align-items: center;


@media (max-width: 40em){
  width: 90vw;
  height: 100%;

}
`
const Textbox = styled.div`

width:100%;
height:100%;

justify-content:center;
display:flex;
flex-direction: column;


@media (max-width: 40em){
  justify-content:start;
  text-align: center;
  align-items:center;
}
`
const ButtonContainer = styled.div`
width: 80%;
margin: 1rem;
align-self: flex-start;
display:flex;


  @media (max-width: 40em){
    width: 90%;
 
    margin-top:2%;
    align-self: center;
    display:flex;
    justify-content:center;
  }
`

const Title = styled.h2`
font-size: 56px;
font-weight: 900;
margin: 1rem;

width: 80%;


@media (max-width: 64em){
  font-size: 40px;
  width: 100%;
}

@media (max-width: 40em){
  font-size: 38px;
  width: 100%;
}
@media (max-width: 30em){
  font-size: 35px;
  width: 110%;
}
@media (max-width: 20em){
  font-size: 30px;
  width: 110%;
}
`

const SubText = styled.p`
font-size: 22px;

font-family: 'Archivo', sans-serif;
align-self: flex-start;
width: 80%;
margin: 1rem;
font-weight: 400;
color: #E4E3E3;

@media (max-width: 40em){
  font-size: 16px;
  width: 100%;
  align-self: center;
}


@media (max-width: 36em){

  font-size: ${props => props.theme.fontsm};
  margin: 0 auto;
}
`

const Uptext = styled.h2`
align-self: flex-start;
font-size: 16px;
font-family: 'Archivo', sans-serif;
line-height: 1;
color: #C19DFF;
margin: 1rem auto;
width: 80%;
`
const GbccImage= styled.div`
width:100%;
padding-bottom:100%;

background-size:100% 100%;
background-image: url(${Gbcc});
background-position:center;
border-radius: 40px;

@media (max-width: 64em){
  width:130%;
  padding-bottom:130%;
}

@media (max-width: 40em){
  width:50%;
  padding-bottom:50%;
}
@media (max-width: 30em){
  width:75%;
  padding-bottom:75%;
}
`
const Btn = styled.div`
margin-right:20%;
display: flex;
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
align-items:center;
padding: 0.9rem 2.3rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);

&:hover{
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(0,0,0,0.3);
}

@media (max-width: 40em){
  padding: 0.8rem 2rem;
  margin-top:5%;
  margin:10%;
  font-size: 12px;
}
`

const Twitter = styled.img`
width:15px;
height:15px;
margin-left:12%;
`
const Telegram = styled.img`
width:15px;
height:15px;
margin-left:12%;

`
export const About = () => {
  return (
    <Section id="social">
      <Container>
        <Box>
          <GbccImage></GbccImage>
        </Box>

        <Box>
          <Textbox>
            <Title> Join the Community </Title>
            <SubText> Follow us on Twitter or join our Telegram channel to keep update with our latest release and announcements.</SubText>
            <ButtonContainer>
              <ThemeProvider theme={dark}>
                <a href="https://twitter.com/GBCCNFT"><Btn>TWITTER <Twitter src={TwitterImg}/></Btn></a>
                
                <a href="https://t.me/GBCCNFT"><Btn>TELEGRAM <Telegram src={TelegramImg}/></Btn></a>

                
              </ThemeProvider>
            </ButtonContainer>
          </Textbox>
        </Box>
      </Container>
    </Section>
  )
}

export default About
