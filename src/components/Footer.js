import React from 'react'
import styled from 'styled-components'
import Twitter from "../assets/social-media-icons/twitter.png"
import Telegram from "../assets/social-media-icons/Telegram.png"
import Image from "../assets/background/night.png"
import Logo from "../assets/logo/logo1.png"


const Section = styled.div`


width:100%;

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
font-weight: 400;
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