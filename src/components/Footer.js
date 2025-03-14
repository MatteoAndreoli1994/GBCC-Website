import React from 'react'
import styled from 'styled-components'
import Twitter from "../assets/social-media-icons/twitter.png"
import Telegram from "../assets/social-media-icons/Telegram.png"
import Image from "../assets/background/night.png"
import Logo from "../assets/logo/logo1.png"

const Btn = styled.button`
display: inline-block;
background-color: #F1F5F3;
color: black;
outline: none;
border: none;
height:50px;
width:50px;
margin: 0.5rem;
border-radius: 50%;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}
&::after{
    content:' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border:2px solid #F1F5F3;
    width: 100%;
    height: 100%;
    border-radius:50px;
    transition: all 0.2s ease;

}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`
const Section = styled.div`


width:100vw;

position: relative;
display: flex;

justify-content: center;
align-items: center;


`

const Container = styled.div`
flex-direction: column;
width: 100%;
height:100%;

display: flex;
justify-content: center;
align-items:center;

`

const DivTesto = styled.div`
width: 80%;
color: white;
justify-content: center;
align-items:center;
display: flex;
margin: 2rem;
`

const Testo = styled.h4`
font-size: 14px;
font-family: 'suisse', sans-serif;
font-weight: 600;
color: white;
justify-content: center;
text-align: center;

@media (max-width: 64em){
  font-size: 10px;
}
`
const ListUnlisted = styled.ul``


const Footer = () => {
  return (
    <Section>
      <Container>


        <DivTesto>
          <Testo>© 2025 GBCC. All Rights Reserved.</Testo>
        </DivTesto>

      </Container>
      </Section>
  )
}

export default Footer