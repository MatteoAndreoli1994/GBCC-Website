import React, { useState } from "react";
import styled from 'styled-components'
import '../components/MenuStyle.css'
import InfoImg from "../components/Icon/info.png"
import GiveawayImg from "../components/Icon/giveaway.png"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount} from 'wagmi';
import { useEffect } from "react";
import Cactus from "../assets/elements/CACTUS.png"

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';


const Container = styled.div`
width: 100vw;
height: 80vh;



position:absolute;
flex-direction: column;
display:none;



@media (max-width: 30em){
  display:flex;

      }

`
const Test = styled.div`
width: 95vw;
height: 80vh;
display:flex;
flex-direction: column;

margin-left:2%;

`
const Info = styled.div`
width: 90vw;
height: 40vh;
display:flex;
position:relative;
border-radius: 40px;
flex-direction: column;

margin-top:2%;
border-style:solid; border-color:#3b1424; border-width:0.6rem;

`
const Info2 = styled.div`
width: 90vw;
height: 29vh;
display:flex;
position:relative;
border-radius: 40px;
flex-direction: column;

margin-top:1%;
border-style:solid; border-color:#3b1424; border-width:0.6rem;

`
const TitleText = styled.h1`
font-size: 13px;
font-family: 'Archivo', sans-serif;
color: white;
text-align: left;
margin-left: 1rem;
margin-top: 1rem;
align-items:center;
display:flex;


`
const Text = styled.h1`
font-size: 11px;
font-family: 'Archivo', sans-serif;
font-weight: 400;
color: #E4E3E3;
margin-left: 1rem;
margin-right: 1rem;
margin-top: 0.8rem;
display: inline-block;
align-items: center;

@media (max-width: 30em){

  
    }


`
const SubTitle = styled.h1`
font-size: 12px;
font-family: 'Custom-SpaceGrotesk-Bold';
font-weight: 400;
color: #3b1424;
align-items:center;
display:flex;

line-height: 1;


`
const Img = styled.img`
margin-left:72%;
margin-top:3%;
position:absolute;
display:flex;
`
const Img2 = styled.img`
margin-left:71%;
margin-top:2%;
position:absolute;
display:flex;
`
const ButtonWhite = styled.div`

width:20vw;
height:2vh;
background-color:red
pointer-events:none;
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
`

const CactusImage = styled.div`
display: fixed;
position: absolute;
bottom: -2%;

width: 40vh;
height: 40vh;
background-image: url(${Cactus});
display: inline-flex;
background-size:100% 100%;

`

const Menu = () => {
  const [dp, setDp] = useState(false);
  const [dp2, setDp2] = useState(true);
  const {isConnected} = useAccount();
 
  return (

<Container>


<nav class="main-nav">


  <div class="nav-part">


    <div class="nav-info">
      <span>...</span>
    </div>


    <ul class="nav-buttons">

      <li>
        <a  onClick={() => setDp(!dp)} data-tab="Some">
          
          <span>
          <img src={InfoImg} width="33px" height="33px"/>
           
          </span>
        </a>
      </li>

      <li>
        <a onClick={() => setDp2(!dp2)}  data-tab="Really">
          <span>
          <img src={GiveawayImg} width="45px" height="45px"/>
          </span>
        </a>
      </li>


    </ul>

  </div>
  <CustomButtonConnect>

  {isConnected? (
              <>

              </>
              ):
              (  <div>
                <ButtonWhite><ConnectButton /></ButtonWhite>
                
                  <ul class="nav-buttons2">
                    <li>
                        <a onClick={() => setDp2(!dp2)}  data-tab="Really">
                          <span>
                            <DataText>Connect Wallet</DataText>
                          </span>
              
                        </a>
                      </li>
                  </ul>
                </div>)
              
              }
  </CustomButtonConnect>

</nav>

<Test>
<CactusImage></CactusImage>
  {dp && 
    <Info2 style={{background: "linear-gradient( #7c54c4, #9060cc)" }}>
      <TitleText>HOW TO USE </TitleText><Img src={InfoImg} width="35px" height="35px"/>
      <Text> <SubTitle >←  →</SubTitle> DECREASE OR INCREASE THE NUMBER OF GBCC TO MINT. </Text>
      <Text> <SubTitle>A</SubTitle> PRESS "A" TO CONFIRM. </Text>
      <Text> <SubTitle>SELECT</SubTitle> SHOW THE SUPPLY.</Text>
    
    </Info2>}
    {dp2 && 
    <Info style={{background: "linear-gradient( #7c54c4, #9060cc)" }}>
      <TitleText>MINTING REWARDS </TitleText><Img2 src={GiveawayImg} width="45px" height="45px"/>
      <Text><SubTitle>The more gbcc minted the bigger it will be!</SubTitle></Text>
      <Text> <SubTitle>25% </SubTitle>  1BNB IN NFTS (Bad Seeds and More)</Text>
      <Text> <SubTitle>50%</SubTitle> 3BNB IN NFTS (MoonPets and More)</Text>
      <Text> <SubTitle>75%</SubTitle> 6BNB IN NFTS (Kalmy PFP series and More)</Text>
      <Text> <SubTitle>100%</SubTitle> 10BNB IN NFTS (Pancake Squad and More)</Text>
      <Text> <SubTitle>FIND THE LEGENDARY GOLD GBCC</SubTitle> 1BNB (ONLY ONE WINNER) </Text>
    </Info>}

</Test>






</Container>
);
 
}

export default Menu