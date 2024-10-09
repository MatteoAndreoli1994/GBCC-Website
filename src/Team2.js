import React from 'react'




import GameboyMobile from "./assets/elements/minter_mobile.png"
import { useState, useEffect } from "react";
import { ethers, BigNumber} from 'ethers';
import GameBoyzColorClubTestFinal from './GameBoyzColorClubTestFinal.json';
import styled from "styled-components";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import TastoA from "./assets/elements/tastoA.png"
import TastoB from "./assets/elements/tastoB.png"
import Cactus from "./assets/elements/CACTUS.png"
import Nuvola from "./assets/elements/nuvola.png"
import Sinistra_mobile from "./assets/elements/sinistra_mobile.png"
import Destra_mobile from "./assets/elements/destra_mobile.png"
import { useContractRead } from 'wagmi'
import Menu from "./components/menu.js"
import MenuMobile from "./components/menuMobile.js"
import {useAccount,  usePrepareContractWrite, useContractWrite, useWaitFortTransaction  } from 'wagmi';
import './components/LoadingStyle.css'
import Giveaways from "./assets/background/giveaways.png"
import HammerGame from "./Hammer-game.png"

//inserimento
const GameBoyzColorClubTestFinalAddress = "0xC905F638914EaAe6A157CCa89341D888289F47b9"




const GiveawayImg = styled.img`
max-width: 100%;
max-height: 100%;
`
const SubTitleSelect = styled.h1`
font-size: 13px;
font-family: 'Custom-SpaceGrotesk-Bold';
font-weight: 600;
color:RED;
align-items:center;
display:flex;
justify-content: center;
text-align: center;
text-shadow: 1px 0 1px #333, 0 1px 1px #000;

@media (max-width: 64em){
  font-size: 9px;
}
@media (max-width: 50em){
  font-size: 6px;
}
@media (max-width: 40em){
  font-size: 7px;

  
}
`


const BtnA= styled.button`
width:3.5%;
padding-bottom:3.5%;
position: absolute;
margin-top: 29.5%;
margin-left: 30.1%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(2.7);
background-size:100% 100%;
background-image: url(${TastoA});
object-fit: cover;
background-size: cover;
cursor: pointer;
&:active{
    transform: scale(2.5);
}

@media (max-width: 40em){
  margin-top: 50.4%;
  margin-left: 51.6%;
  transform: scale(4.5);
  &:active{
    transform: scale(4.2);
  }
}

@media (max-width: 30em){
  width:9%;
  padding-bottom:9%;
  transform: scale(2.2);
  margin-top: 68.35%;
  margin-left: 69%;
  &:active{
    transform: scale(2.0);
  }

  }
`
const BtnB= styled.button`
width:3.5%;
padding-bottom:3.5%;
position: absolute;
margin-top: 32.5%;
margin-left: 25.3%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(2.7);
background-size:100% 100%;
background-image: url(${TastoB});
object-fit: cover;
background-size: cover;
cursor: pointer;
&:active{
    transform: scale(2.5);
}

@media (max-width: 40em){
  margin-top: 55.3%;
  margin-left: 43.7%;
  transform: scale(4.5);
  &:active{
    transform: scale(4.2);
  }
}

@media (max-width: 30em){
  width:9%;
  padding-bottom:9%;
  transform: scale(2.2);
  margin-top: 74.75%;
  margin-left: 58.16%;
  &:active{
    transform: scale(2.0);
  }

  }
`

const BtnSinistra= styled.button`
width:1.9%;
padding-bottom:1.9%;
position: absolute;
margin-top: 32.3%;
margin-left: 10.55%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(2.5);
background-size:100% 100%;
background-image: url(${Sinistra_mobile});
object-fit: cover;
background-size: cover;
cursor: pointer;
&:active{
    transform: scale(2.4)
}

@media (max-width: 40em){

  transform: scale(4);
  margin-top: 54.48%;
  margin-left: 18.3%;
  &:active{
    transform: scale(3.9)
  }
}

@media (max-width: 30em){
width:5.5%;
padding-bottom:5.5%;
transform: scale(1.9);
margin-top: 74.3%;
margin-left: 24.1%;

  &:active{
    transform: scale(1.8)
  }

}
`
const BtnDestra= styled.button`
width:1.75%;
padding-bottom:1.75%;
position: absolute;
margin-top: 32.1%;
margin-left: 15.9%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(2.7);
background-size:100% 100%;
background-image: url(${Destra_mobile});
object-fit: cover;
background-size: cover;
cursor: pointer;
&:active{
  transform: scale(2.5)
}

@media (max-width: 40em){
  transform: scale(4.3);
  margin-top: 53.8%;
  margin-left: 27%;
  &:active{
    transform: scale(4)
}
}

@media (max-width: 30em){
  transform: scale(2.2);
  width:4.7%;
  padding-bottom:4.7%;
  margin-top: 73.88%;
  margin-left: 36.5%;

  &:active{
    transform: scale(2.1)
  }
  }
`
const BtnSelect= styled.button`
width:4%;

position: absolute;
margin-top: 40.5%;
margin-left: 17.7%;
display:flex;
align-items:center;
align-text:center;
justify-content:center;
border: none;
background-color: rgba(255, 0, 0, 0);
transform: scale(2.9);
background-size:100% 100%;
cursor: pointer;
transform: rotate(-23deg);
&:active{
    background-image: none;
    
}

@media (max-width: 40em){
  margin-top: 67.8%;
  margin-left: 30.7%;

  
}
@media (max-width: 30em){
  margin-top: 93%;
  margin-left: 35%;
  width:20%;
  height:0.5%;
  transform: rotate(-23deg);

  }
`

const SubTextLight = styled.h1`
font-family: VT323, monospace;
font-size: 24px;
font-weight: 400;
display:flex;
color: #3b1424;
justify-content:center;
text-align: center;


width:100%;
@media (max-width: 80em){
  font-size: 20px;
  }

@media (max-width: 64em){
  font-size: 18px;
  }

@media (max-width: 50em){
    font-size: 14px;
  }

@media (max-width: 40em){
      font-size: 17px;

  }

  @media (max-width: 20em){
    font-size: 15px;
}


`
const SubTextLightGiveaway = styled.h1`
line-height: 1.5;
font-size: 24px;
font-weight: 400;
color: #E4E3E3;
display:flex;

justify-content:left;
text-align: left;



width:100%;


@media (max-width: 64em){
  font-size: 20px;
  }

@media (max-width: 50em){
    font-size: 14px;
  }

@media (max-width: 40em){
      font-size: 14px;

  }

  @media (max-width: 20em){
    font-size: 13px;
}


`
const SubTextLightGiveawayQuestion = styled.h1`
font-size: 30px;
font-weight: 600;
color: #E4E3E3;
display:flex;
color: white;
justify-content:left;
text-align: left;
margin-top:2%;


width:100%;
@media (max-width: 80em){
  font-size: 20px;
  }

@media (max-width: 64em){
  font-size: 18px;
  }

@media (max-width: 50em){
    font-size: 14px;
  }

@media (max-width: 40em){
      font-size: 14px;

  }

  @media (max-width: 20em){
    font-size: 13px;
}


`
const SubTextLightGiveawayPrize = styled.h1`
line-height: 1.2;
font-size: 24px;
font-weight: 400;
color: #E4E3E3;

display:flex;
color: white;
justify-content:left;
text-align: left;
margin-top:2%;
margin-bottom:2%;



width:100%;
@media (max-width: 64em){
  font-size: 20px;
  }

@media (max-width: 50em){
    font-size: 14px;
  }

@media (max-width: 40em){
      font-size: 14px;

  }

  @media (max-width: 20em){
    font-size: 13px;
}


`
const SubTextLightAmount = styled.h1`
font-size: 30px;
font-family: 'VT323', monospace;
display:flex;
color: #3b1424;
justify-content: center;
text-align: center;

font-weight: 400;

@media (max-width: 80em){
  font-size: 25px;
  }

@media (max-width: 64em){
  font-size: 18px;
  }

@media (max-width: 50em){
    font-size: 17px;
  }

@media (max-width: 40em){
      font-size: 17px;

  }

  @media (max-width: 20em){
    font-size: 15px;
}


`

const SubTextPerc = styled.h1`
font-size: 25px;
font-family: 'VT323', monospace;

color: #3b1424;
justify-content: center;
text-align: center;
margin-bottom:5%;
font-weight: 400;

@media (max-width: 64em){
  font-size: 20px;
  }

@media (max-width: 50em){
    font-size: 16px;
  }

@media (max-width: 40em){
      font-size: 14px;
  }



`
const SubTextContainer = styled.div`

width:15.7%;
padding-bottom:3%;


position: absolute;
display: flex;
flex-direction: column;

margin-top: 10.8%;
margin-left: 14%;

justify-content: center;
align-items:center;
text-align: center;

@media (max-width: 40em){
  margin-top: 19%;
  margin-left: 23%;
  width:27%;
  padding-bottom:13%;

  }

@media (max-width: 30em){
  width:32%;
  padding-bottom:15%;

  margin-top: 26%;
  margin-left: 36%;

  }
`
const SubTextRewardsContainer = styled.div`

display: flex;
flex-direction: column;

margin:1%;
margin-bottom:8%;

justify-content: center;
align-items:center;
text-align: center;


`

const SubText = styled.h1`



align-items:center;
display:flex;
text-align: center;
justify-content:center;
font-size: ${props => props.theme.fonts};
font-weight: 400;


@media (max-width: 60em){
  font-size: ${props => props.theme.fontxs};
  
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxxs};
}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontxl};
  margin-top: 2%;
}

@media (max-height: 20em){
  margin-top: 0%;
}
`


const Display = styled.div`

align-items: center;
text-align: center;
align-items: center;

left:50%;
display: flex;
flex-direction: column;

`
const Percentuale = styled.div`
width:100%;
height:20%;

justify-content: center;
align-items: center;
text-align: center;
display: flex;



flex-direction: column;

`
const DotDiv = styled.div`
width:15px;
padding-bottom:15px;

position: absolute;
margin-top: 8.4%;
margin-left: 10.9%;
border: none;


background-size:100% 100%;

object-fit: cover;
background-size: cover;
cursor: pointer;
&:active{
  transform: scale(2.8)
}
@media (max-width: 40em){
  width:13px;
  padding-bottom:13px;

  margin-top: 15%;
  margin-left: 17.5%;
  }
@media (max-width: 30em){
  width:15px;
  padding-bottom:15px;

  margin-top: 18.8%;
  margin-left: 24.29%;
  }

`
const GreenDot = styled.h6`
font-size:15px;
color: #48fb47;
text-shadow:
  0 0 7px #48fb47,
  0 0 10px #48fb47,
  0 0 21px #48fb47,
  0 0 42px #48fb47,
  0 0 82px #48fb47,
  0 0 92px #48fb47,
  0 0 102px #48fb47,
  0 0 151px #48fb47;
position:absolute;
display:flex;
margin-top: -33%;
margin-left: -25.46%;

@media (max-width: 30em){
  font-size:12px;
  margin-top: -83%;
  margin-left: -65.46%;

  }

`
const RedDot = styled.h6`
font-size:15px;
color: #FF2226;
text-shadow:
  0 0 7px #FF2226,
  0 0 10px #FF2226,
  0 0 21px #FF2226,
  0 0 42px #FF2226,
  0 0 82px #FF2226,
  0 0 92px #FF2226,
  0 0 102px #FF2226,
  0 0 151px #FF2226;
position:absolute;
display:flex;


}
}

@media (max-width: 30em){
  font-size:15px;

  }

`

//inserimento
const Section = styled.section`

width:100vw;
min-height:75vh;


overflow: hidden;
display: flex;
flex-direction: column;
align-items:center;
background-position:center;
overflow-x: hidden;

@media (max-width: 64em){

justify-content:center;
align-items:center;

}
`
const Title = styled.h1`
margin-top:3%;
font-size: 25px;
font-weight: 800;
color: #5700EF;
justify-content: center;
text-align: center;
margin-bottom: 1rem;
margin-top:3rem;
@media (max-width: 30em){
  margin-bottom: 0.5rem;
  margin-top:1rem;
}

`
const SubTitle = styled.h1`
font-size: 56px;
font-weight: 900;
color: white;
justify-content: center;
text-align: center;
margin-bottom:1.2rem;

@media (max-width: 64em){
  font-size: 40px;
}

@media (max-width: 40em){
  font-size: 38px;
}

@media (max-width: 36em){
  font-size: 33px;
}
@media (max-width: 30em){


}
`
const SubTitleGiveaway = styled.h1`

  
font-size: 56px;
font-weight: 900;
color: white;
justify-content: left;
text-align: left;

@media (max-width: 64em){
  font-size: 40px;
}

@media (max-width: 40em){
  display:none;
}

@media (max-width: 36em){
  font-size: 33px;
}
@media (max-width: 30em){
  margin-bottom: 0.2rem;

}
`
const SubTitleGiveawayMobile = styled.h1`
font-size: 56px;
font-weight: 900;
color: white;
justify-content: center;
text-align: center;

@media (max-width: 64em){
  font-size: 40px;
}

@media (max-width: 40em){
display: inline;
}

@media (max-width: 36em){
  font-size: 33px;
}
@media (max-width: 30em){
  margin-bottom: 0.2rem;

}
`

const XContainer= styled.div`
width:90vw;


display:flex;
flex-direction: row;
justify-content:center;


margin:3%;

@media (max-width: 40em){
  width:150%;
  justify-content:center;
  align-items:center;
  flex-direction: column;

}
`
const Box= styled.div`
width:50%;
height:80%;

display:flex;
flex-direction: column;
align-items:center;
justify-content:center;



`
const Box2= styled.div`
width:50%;
height:80%;

display:flex;
flex-direction: column;




`
const Gameboy= styled.div`
width:100%;
padding-bottom:100%;

background-size:100% 100%;
background-image: url(${GameboyMobile});
background-position:center;

display:flex;


@media (max-width: 30em){
  width:140%;
  padding-bottom:140%;
}

`
const DivAbsolute= styled.div`
width:300px;
padding-bottom:15px;

position: absolute;
margin-top: 16%;
margin-left: 16.7%;
border: none;


`
const XMenu= styled.div`
width:100%;


background-size:100% 100%;

background-position:center;
border-radius: 40px;



`
const LoaderBar= styled.div`

  display: grid;
  margin-top:3%;

  grid-template-columns: repeat(1,6px) repeat(11, 9px 6px) repeat(2,6px);
  grid-template-rows: repeat(6,6px);


  @media (max-width: 84em){

    grid-template-columns: repeat(1,4px) repeat(11, 6px 4px) repeat(2,4px);
    grid-template-rows: repeat(6,4px);
  }

  @media (max-width: 64em){

    grid-template-columns: repeat(1,3px) repeat(11, 4.5px 3px) repeat(2,3px);
    grid-template-rows: repeat(6,3px);
  }


`
const DisplayLoader= styled.div`


`
const GiveawaysRewards= styled.div`
min-height:50vh;
width:80%;
margin:2%;
margin-top:6%;
display:flex;
align-items:center;
justify-content:center;
border-radius: 25px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

@media (max-width: 30em){
flex-direction: column;
}

`
const GiveawaysRewardsBox= styled.div`
width:45%;


margin:2%;
display:flex;
align-items:center;
justify-content:center;




@media (max-width: 30em){
  width:75%;
}
`
const GiveawaysRewardsBoxText= styled.div`
width:45%;


display:flex;
align-items:center;
flex-direction:column;
justify-content:center;

@media (max-width: 30em){
  width:75%;
}


`
const ImmagineHammer= styled.img`
max-height:80%;
max-width:80%;

`


const Team = () => {

  const [mintAmount, setMintAmount] = useState(1);
  const {isConnected} = useAccount();
  const [supplyData, setSupplyData] = useState(0);
  const [allowListData, setAllowListData] = useState(0);
  const [allowListOpen, setallowListOpen] = useState(0);
  const [publicMintPause, setpublicMintPause] = useState(0);
  const { address } = useAccount();
  const [Wl, setWl] = useState(1);
  const [dp3, setDp3] = useState(false);
  const [dp4, setDp4] = useState(false);
    //inserimento
  const PaymentContract = "0xC905F638914EaAe6A157CCa89341D888289F47b9"

    const { data: totalSupplyData} = useContractRead({
      address: GameBoyzColorClubTestFinalAddress,
      abi: GameBoyzColorClubTestFinal.abi,
      functionName: "totalSupply",
      watch: true,
    });

    useEffect(() => {
      if (totalSupplyData) {
        let temp = totalSupplyData / (1);
        setSupplyData(temp);
      }
    }, [totalSupplyData]);

    
//funzione che restituisce numero di wl disponibili
    const { data: allowListMintCounterData} = useContractRead({
      address: PaymentContract,
      abi: GameBoyzColorClubTestFinal.abi,
      functionName: "allowListMintCounter",
      watch: true,
      args: [address],
    });

    useEffect(() => {
      if (allowListMintCounterData) {
        let temp2 = allowListMintCounterData / (1);
        setAllowListData(temp2);
      }
    }, [allowListMintCounterData]);

//funzione che restituisce se il mint è aperto o no
    const { data: allowListMintOpenData} = useContractRead({
      address: GameBoyzColorClubTestFinalAddress,
      abi: GameBoyzColorClubTestFinal.abi,
      functionName: "allowListMintOpen",
      watch: true,
    });

    const { data: Mintpause} = useContractRead({
      address: GameBoyzColorClubTestFinalAddress,
      abi: GameBoyzColorClubTestFinal.abi,
      functionName: "publicMintPause",
      watch: true,
    });

    useEffect(() => {
      if (allowListMintOpenData) {
        let temp3 = allowListMintOpenData / (1);
        setallowListOpen(temp3);
      }
    }, [allowListMintOpenData]);

    useEffect(() => {
      if (Mintpause) {
        let temp4 = Mintpause / (1);
        setpublicMintPause(temp4);
      }
    }, [Mintpause]);




  async function handleMint(){
      if(window.ethereum){
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
              GameBoyzColorClubTestFinalAddress,
              GameBoyzColorClubTestFinal.abi,
              signer
          );
          try{
              const response = await contract.allowListMint(BigNumber.from(mintAmount),{ 
                value: ethers.utils.parseEther((0.04 * mintAmount).toString()),
              });
              console.log('response: ', response);
          } catch(err){
              console.log("errore: ", err)
          }
      }

  }

  async function handleMintPublic(){
    if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            GameBoyzColorClubTestFinalAddress,
            GameBoyzColorClubTestFinal.abi,
            signer
        );
        try{
            const response = await contract.mint(BigNumber.from(mintAmount), { 
              value: ethers.utils.parseEther((0.04 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch(err){
            console.log("errore: ", err)
        }
    }

}

  const handleDecrement = () => {
      if(mintAmount <= 1 ) return;
      setMintAmount(mintAmount -1);
  };


  const handleIncrement = () => {
    if (allowListOpen===1){
      if(mintAmount >= allowListData ) return;
      setMintAmount(mintAmount + 1);
    }

    if (publicMintPause===0){
      if(mintAmount >= 20 ) return;
      setMintAmount(mintAmount + 1);
    }


  };

  return (
    
    <Section>
  


      
      <Title id="mint"> MINT</Title>
      
      <SubTitle>Mint your GBCC</SubTitle>
      <ConnectButton></ConnectButton>
      
      <XContainer>
      
        <Box>
          <Gameboy>
    
{(allowListOpen===1 || publicMintPause===0)?(
              <>


              {publicMintPause===0 && dp3!=1 &&
                <>
                          <SubTextContainer> 
                          
                            
                              {isConnected ? (
                                      <Display>
                                       
                                      <SubTextLight> PUBLIC MINT <br></br>PRICE: 0.04 BNB</SubTextLight>

                                            <SubTextLightAmount>←  {mintAmount}  →</SubTextLightAmount>
                                            
                                    </Display>
                                    
                                  ) :
                                  (<SubTextLight>YOU MUST BE CONNECTED TO MINT </SubTextLight>)
                                  
                              }
                          
                          </SubTextContainer>                     
                </>
              } 





              {allowListOpen===1 && 
                <>

                  {dp3==false && dp3!=1 &&//SELECT FALSE
                    <SubTextContainer> 

                        <SubText>
                        {isConnected && allowListData? (//HO LA WL E SONO CONNESSO
                          
                                <Display>
                                  <SubTextLight> PRIVATE MINT <br></br>PRICE: 0.04 BNB <br></br> WL AVAILABLE: {allowListData}</SubTextLight>

                                 

                                        <SubTextLightAmount>←  {mintAmount}  →</SubTextLightAmount>
                                        
                                </Display>
                              
                            ) : isConnected? (// NON HO LA WL
                            <>

                              <SubTextLight> MINT <br></br> 06/05/2023 14:00 UTC </SubTextLight>
                            </>
                            ):
                            (<SubTextLight>YOU MUST BE CONNECT TO MINT</SubTextLight>)
                            
                        }

                        </SubText>

                    </SubTextContainer>
                  }
                </>
              } 





                {dp3 && //SELECT
                  <SubTextContainer> 
                    <SubTextLight>{supplyData} GBCC MINTED <br></br> </SubTextLight>

                        {(((supplyData*100)/2222).toFixed(1)<10)?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                            <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                            
                            
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div> </div>)}

                        

                        {(((supplyData*100)/2222).toFixed(1)<20 && ((supplyData*100)/2222).toFixed(1)>10)?(
                        <DisplayLoader>
                        <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div>


                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div> </div>)}

                        {(((supplyData*100)/2222).toFixed(1) < 30 && ((supplyData*100)/2222).toFixed(1)>20)?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale> 
                        </DisplayLoader>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)<40 && ((supplyData*100)/2222).toFixed(1)>30)?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)<50 && ((supplyData*100)/2222).toFixed(1)>40)?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)<60 && ((supplyData*100)/2222).toFixed(1)>50 )?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)<70 && ((supplyData*100)/2222).toFixed(1)>60 )?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div></div>)}

                          {(((supplyData*100)/2222).toFixed(1)<80 && ((supplyData*100)/2222).toFixed(1)>70 )?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)<90 && ((supplyData*100)/2222).toFixed(1)>80 )?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)<100 && ((supplyData*100)/2222).toFixed(1)>90 )?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)==100)?(
                        <DisplayLoader>
                          <LoaderBar class="loader-bar" >
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div  class="block-meter" ></div>
                          </LoaderBar>
                          <Percentuale><SubTextLightAmount>SOLDOUT</SubTextLightAmount></Percentuale>
                        </DisplayLoader>
                        ):(<div></div>)}                   
                        
                    
                    
                  
                  </SubTextContainer>
                }



              </>
              ):(<SubTextContainer><SubTextLight>PUBLIC MINTCTOBER<br></br> 10/09/2024 14:00 UTC</SubTextLight></SubTextContainer> )
            }



            {allowListOpen===1? (
              <>
                <BtnA onClick={handleMint}></BtnA>
                <BtnB onClick={() => setDp3(!dp3)}></BtnB>
              </>
              ):
              (  <>
                <BtnA onClick={handleMintPublic}></BtnA>
                <BtnB onClick={() => setDp3(!dp3)}></BtnB>
                </>
                )
              
              }

                  
                  

                  <BtnSinistra onClick={handleDecrement}></BtnSinistra>
                  <BtnDestra onClick={handleIncrement}></BtnDestra>
                  <BtnSelect ><SubTitleSelect><a href="https://bscscan.com/address/0xc905f638914eaae6a157cca89341d888289f47b9#code" class="button">SELECT</a></SubTitleSelect></BtnSelect>
                  {isConnected? (
                    <DotDiv> 
                      <GreenDot>●</GreenDot> 
                    </DotDiv>
                    ):
                    ( <DotDiv> 
                      <RedDot>●</RedDot>
                      </DotDiv>
                      )
                    
                  }
            
          </Gameboy>
          
        </Box>

        <Box2><XMenu><Menu/></XMenu></Box2>



      </XContainer>
      <Title id="mint"> REWARDS</Title>
      <SubTitleGiveawayMobile>Minting Giveaway</SubTitleGiveawayMobile>
      <GiveawaysRewards>
      
        <GiveawaysRewardsBox id="giveaway"><ImmagineHammer src={HammerGame}/></GiveawaysRewardsBox>
        
        <GiveawaysRewardsBoxText >
                
                  <SubTextRewardsContainer >
            
                  
                    <SubTextLightGiveaway>When a certain number of mints is reached, holders will have the chance to win one of the fantastic prizes in Nfts or BNB:</SubTextLightGiveaway>
                    <SubTextLightGiveawayPrize>• 25%: ~1 BNB<br/>• 50%: ~2 BNB<br/>• 75%: ~4 BNB<br/>• 100%: ~8 BNB</SubTextLightGiveawayPrize>

                    <SubTextLightGiveaway>Prizes will be distributed as soon as each threshold is reached and every GBCC holder will be able to participate. Soon you mint, more you win!</SubTextLightGiveaway>
                  </SubTextRewardsContainer>
        </GiveawaysRewardsBoxText>
        
      </GiveawaysRewards>

    </Section>
  )
}

export default Team