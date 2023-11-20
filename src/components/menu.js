import React, { useState } from "react";
import styled from 'styled-components'
import '../components/MenuStyle.css'
import InfoImg from "../components/Icon/info.png"
import GiveawayImg from "../components/Icon/giveaway.png"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount} from 'wagmi';
import { useEffect } from "react";


import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';


const Container = styled.div`
width: 100%;
height: 100%;
display:flex;

margin-top:0.8%;

flex-direction: column;

@media (max-width: 30em){

  }
`
const Test = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
align-items:center;
margin-left:2%;

`
const Info = styled.div`
width: 100%;
height: 46%;
display:flex;

border-radius: 40px;
flex-direction: column;
margin-bottom:3%;
margin-top:2%;
border-style:solid; border-color:#3b1424; border-width:0.6rem;



@media (max-width: 40em){

}

@media (max-width: 36em){

}
`
const Info2 = styled.div`
width: 100%;
height: 31%;
display:flex;

border-radius: 40px;
flex-direction: column;
margin-bottom:3%;
margin-top:2%;
border-style:solid; border-color:#3b1424; border-width:0.6rem;
`
const TitleText = styled.h1`
font-size: 20px;
font-family: 'Archivo', sans-serif;
color: black;
text-align: left;
margin-left: 1rem;
margin-top: 1rem;
align-items:center;
display:flex;
color:purple;
@media (max-width: 64em){
  font-size: 18px;
}

@media (max-width: 40em){
  font-size: 18px;
}

@media (max-width: 30em){
  font-size: 17px;
}
@media (max-width: 20em){
  font-size: 15px;

}
`
const Text = styled.h1`
font-size: 15px;
font-family: 'Archivo', sans-serif;
font-weight: 400;
color: #605F5E;
margin-left: 1rem;
margin-right: 1rem;
margin-top: 0.8rem;
margin-bottom: 0.8rem;
display: inline-block;
align-items: center;

@media (max-width: 64em){
  font-size: 15px;
}

@media (max-width: 40em){
  font-size: 14px;

  margin-bottom: 0.5rem;
}

@media (max-width: 30em){
  font-size: 14px;
  margin-bottom: 0.2rem;
}
@media (max-width: 20em){
  font-size: 12px;

}

`

const TextOrder = styled.div`
`


const SubTitle = styled.h1`
font-size: 19px;
font-family: 'Custom-SpaceGrotesk-Bold';
font-weight: 400;
color: black;
align-items:center;
display:flex;
line-height: 2;

@media (max-width: 64em){
  font-size: 18px;
}

@media (max-width: 40em){
  font-size: 19px;

  line-height: 1.2;
}

@media (max-width: 30em){
  font-size: 18px;
}
@media (max-width: 20em){
  font-size: 14px;

}

`
const Img = styled.img`
margin-left:7%;
margin-top:2%;
display:flex;

`
const Img2 = styled.img`
margin-left:2%;
display:flex;
`
const ButtonWhite = styled.div`

width:80vw;
height:10vh;
position:absolute;
margin-left:2em;
margin-top:-1em;


`
const DataText = styled.h1`

font-size: 16px;
font-family: 'Archivo', sans-serif;
color: black;
justify-content: center;
text-align: center;
font-weight: 700;


`
const CustomButtonConnect = styled.div`
display:flex;
width:20vw;
margin-right:40em;
align-items:center;

@media (max-width: 30em){
  display:none;
}
`
const CustomButtonConnectMobile = styled.div`
display:flex;
width:50%;
height:20%;
align-items:center;

transform: scale(0.8);
background-color:red;

display:none;
@media (max-width: 30em){
display:flex;
}
`

const Menu = () => {
  const [dp, setDp] = useState(false);
  const [dp2, setDp2] = useState(true);
  const {isConnected} = useAccount();
 
  return (

<Container>















<Test>


    <Info2 style={{background: "linear-gradient( to right, #F5F7FA, #B8C6DB)" }}>
      <TitleText>HOW TO USE </TitleText>

      <TextOrder>


      </TextOrder>
      <Text> <SubTitle >←  →</SubTitle> DECREASE OR INCREASE THE NUMBER OF GBCC TO MINT. </Text>
      <Text> <SubTitle>A</SubTitle> PRESS "A" TO MINT. </Text>
      <Text> <SubTitle>B</SubTitle> PRESS "B" TO SHOW THE SUPPLY. </Text>
      <Text> <SubTitle>SELECT</SubTitle> PRESS "SELECT" TO SEE THE CONTRACT.</Text>
      <Text> <SubTitle></SubTitle></Text>
    
    </Info2>


   
</Test>

</Container>
);
 
}

export default Menu