import { useState, useEffect } from "react";
import { ethers, BigNumber} from 'ethers';
import GameBoyzColorClubTestFinal from './GameBoyzColorClubTestFinal.json';
import styled from "styled-components";
import GameboyMobile from "./assets/elements/minter_mobile.png"
import TastoA from "./assets/elements/tastoA.png"
import Cactus from "./assets/elements/CACTUS.png"
import Nuvola from "./assets/elements/nuvola.png"
import Sinistra_mobile from "./assets/elements/sinistra_mobile.png"
import Destra_mobile from "./assets/elements/destra_mobile.png"
import { useContractRead } from 'wagmi'
import Menu from "./components/menu.js"
import MenuMobile from "./components/menuMobile.js"
import {useAccount,  usePrepareContractWrite, useContractWrite, useWaitFortTransaction  } from 'wagmi';
import './components/LoadingStyle.css'

const GameBoyzColorClubTestFinalAddress = "0x64A823543e787d6D94742AF7E34ee5ac15E2d522"

const Section = styled.div`

min-height: 100vh;
width: 100vw;
object-fit: cover;
background-size: cover;
overflow: hidden;
flex-direction: column;
background-color:green;

@media (max-width: 30em){
  min-height: 188vh;

}

`
const TitleText = styled.h1`
font-size: 16px;
font-family: 'Archivo', sans-serif;
color: #5700EF;
justify-content: center;
text-align: center;


`
const SubTitle = styled.h1`
font-size: 56px;
font-family: 'Custom-SpaceGrotesk-Bold';
font-weight: 600;
color: white;
align-items:center;
display:flex;
justify-content: center;
text-align: center;

@media (max-width: 64em){
  font-size: 40px;
}

@media (max-width: 40em){
  font-size: 38px;
}

@media (max-width: 36em){
  font-size: 33px;
}
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
  font-size: 10px;
}

@media (max-width: 40em){
  font-size: 8px;
}

@media (max-width: 36em){
  font-size: 7px;
}
`
const Minting = styled.div`
width:100vw;
height:80%;
background-color:blue;
overflow: hidden;
align-items: center;
justify-content: center;
display: flex;
position: absolute;



`

const BotContainer = styled.div`
width:100vw;
height:20%;

display: flex;
margin-top: 62vh;

  @media (max-width: 30em){
    height:35vh;
    margin-top: 88vh;

  }
`


const Cloud = styled.div`
width: 20vh;
padding-bottom: 20vh;
display: flex;
background-image: url(${Nuvola});

display: inline-flex;

background-size:100% 100%;



`

const CactusImage = styled.div`
width: 40vh;
height: 40vh;
margin-left:5%;
background-image: url(${Cactus});
display: inline-flex;
background-size:100% 100%;


  
  @media (max-width: 30em){
    display:none;
  }

`
const MinterContainer= styled.div`
width:50%;
padding-bottom:50%;

background-size:100% 100%;
background-image: url(${GameboyMobile});
background-position:center;




@media (max-width: 30em){
    width:130%;
    padding-bottom:130%;
    background-size: 130%;
  
  }

`
const BtnA= styled.button`
width:3.5%;
padding-bottom:3.5%;
position: absolute;
margin-top: 36%;
margin-left: 28.1%;
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

@media (max-width: 30em){
  width:9%;
  padding-bottom:9%;

  margin-top: 84.95%;
  margin-left: 72.16%;
  }
`

const BtnSinistra= styled.button`
width:1.9%;
padding-bottom:1.9%;
position: absolute;
margin-top: 35.7%;
margin-left: 11.78%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(2.8);
background-size:100% 100%;
background-image: url(${Sinistra_mobile});
object-fit: cover;
background-size: cover;
cursor: pointer;
&:active{
    transform: scale(2.7)
}

@media (max-width: 30em){
width:5.5%;
padding-bottom:5.5%;

margin-top: 92.5%;
margin-left: 15.19%;


}
`
const BtnDestra= styled.button`
width:1.7%;
padding-bottom:1.7%;
position: absolute;
margin-top: 35.4%;
margin-left: 17.6%;
border: none;
background-color: rgba(0,0,0,0);
transform: scale(2.9);
background-size:100% 100%;
background-image: url(${Destra_mobile});
object-fit: cover;
background-size: cover;
cursor: pointer;
&:active{
  transform: scale(2.8)
}

@media (max-width: 30em){

  width:4.7%;
  padding-bottom:4.7%;
  margin-top: 91.8%;
  margin-left: 30.89%;
  }
`
const BtnSelect= styled.button`
width:4%;
height:9%;
position: absolute;
margin-top: 43.3%;
margin-left: 19.6%;
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

@media (max-width: 30em){
  margin-top: 112.0%;
  margin-left: 39.3%;

  }
`
const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
`
const SubTextLight = styled.h1`
font-size: 30px;
font-family: 'VT323', monospace;

color: #3b1424;
justify-content: center;
text-align: center;
margin-bottom:5%;
font-weight: 400;

`
const SubTextContainer = styled.div`
width:16%;
height:23%;

position: absolute;
display: flex;

margin-bottom:20vh;
margin-top: 8%;
margin-left: 16.5%;

justify-content: center;
align-items:center;
text-align: center;
flex-direction: column;

@media (max-width: 30em){
  transform: rotate(0deg);
  width:42%;
  height:18.5%;
  margin-top: 23%;
  margin-left: 27.46%;

  }
`

const SubText = styled.p`
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
const Warn = styled.p`
font-size: ${props => props.theme.fonts};
justify-content: center;
align-items: center;
text-align: center;

`
const MintAmount = styled.input`
background: none;
border: 0;
padding: 0;
margin: 0;
width: 1em;
margin: 1em;
`
const Display = styled.div`
justify-content: center;
align-items: center;
text-align: center;
align-items: center;
display: flex;
flex-direction: column;
input[type=number] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
const Percentuale = styled.div`
justify-content: center;
align-items: center;
text-align: center;
display: flex;
position:absolute;
margin-left:33%;
margin-top:2.6%;
flex-direction: column;
input[type=number] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
const DotDiv = styled.div`
width:15px;
padding-bottom:15px;

position: absolute;
margin-top: 8.4%;
margin-left: 11.9%;
border: none;


background-size:100% 100%;

object-fit: cover;
background-size: cover;
cursor: pointer;
&:active{
  transform: scale(2.8)
}

@media (max-width: 30em){
  width:15px;
  padding-bottom:15px;

  margin-top: 21.8%;
  margin-left: 14.99%;
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
}
}

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

const MainMint = () => {
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

      const { data: totalSupplyData} = useContractRead({
        address: '0x762C566e21B65E9377CC4FC45D91A24530308bd8',
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
        address: '0x762C566e21B65E9377CC4FC45D91A24530308bd8',
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
        address: '0x762C566e21B65E9377CC4FC45D91A24530308bd8',
        abi: GameBoyzColorClubTestFinal.abi,
        functionName: "allowListMintOpen",
        watch: true,
      });

      const { data: Mintpause} = useContractRead({
        address: '0x762C566e21B65E9377CC4FC45D91A24530308bd8',
        abi: GameBoyzColorClubTestFinal.abi,
        functionName: "paused",
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
                  value: ethers.utils.parseEther((0).toString()),
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
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
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
        if(mintAmount >= 3 ) return;
        setMintAmount(mintAmount + 1);
      }


    };
  


    return (
    <Section id="mint">
    <TitleText>MINT</TitleText>
    <SubTitle>Mint Date:<Cloud></Cloud></SubTitle>
    


        <Minting>

          
            <MinterContainer>

            {(allowListOpen===1 || publicMintPause===0)?(
              <>


              {publicMintPause===0 && dp3!=1 &&
                <>
                          <SubTextContainer> 

                              <SubText>
                              {isConnected && allowListData? (//HO LA WL E SONO CONNESSO
                                      <Display>
                                        <SubTextLight> PUBLIC MINT </SubTextLight>
                                        <SubTextLight></SubTextLight>
                                              <SubTextLight></SubTextLight>
                                              <SubTextLight>←  {mintAmount}  →</SubTextLight>
                                              
                                      </Display>
                                    
                                  ) : isConnected? (// NON HO LA WL
                                  <>

                                    <SubTextLight> YOU DON'T HAVE WHITELIST AVAILABLE! </SubTextLight>
                                  </>
                                  ):
                                  (<SubTextLight>YOU MUST BE CONNECT TO MINT</SubTextLight>)
                                  
                              }
                              </SubText>
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
                                  <SubTextLight> PRIVATE MINT </SubTextLight>
                                  <SubTextLight></SubTextLight>
                                  <SubTextLight>  MINTS AVAILABLE: {allowListData}</SubTextLight>
                                        <SubTextLight></SubTextLight>
                                        <SubTextLight>←  {mintAmount}  →</SubTextLight>
                                        
                                </Display>
                              
                            ) : isConnected? (// NON HO LA WL
                            <>

                              <SubTextLight> YOU DON'T HAVE WHITELIST AVAILABLE! </SubTextLight>
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
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div> </div>)}

                        

                        {(((supplyData*100)/2222).toFixed(1)>10)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div> </div>)}

                        {(((supplyData*100)/2222).toFixed(1) > 20)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)>30)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)>40)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)>50)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)>60)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)>70)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)>80)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)>90)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}

                        {(((supplyData*100)/2222).toFixed(1)==100)?(
                        <div class="loader-bar">
                          <div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div><div class="block-border"></div>
                          <div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div><div class="block-meter"></div>
                          <Percentuale><SubTextLight>({((supplyData*100)/2222).toFixed(1)}%)</SubTextLight></Percentuale>
                        </div>
                        ):(<div></div>)}                   
                        
                    
                    
                  
                  </SubTextContainer>
                }



              </>
              ):(<SubTextContainer><SubTextLight>MINT CLOSED</SubTextLight></SubTextContainer> )
            }



            {allowListOpen===1? (
              <>
                <BtnA onClick={handleMint}></BtnA>
              </>
              ):
              (  
                <BtnA onClick={handleMintPublic}></BtnA>
                )
              
              }

                  
                  

                  <BtnSinistra onClick={handleDecrement}></BtnSinistra>
                  <BtnDestra onClick={handleIncrement}></BtnDestra>
                  <BtnSelect onClick={() => setDp3(!dp3)}><SubTitleSelect>SELECT</SubTitleSelect></BtnSelect>
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
            </MinterContainer>
                
              <Menu/>


        </Minting>

        <BotContainer>
              
            <CactusImage></CactusImage>

            <MenuMobile></MenuMobile>
            
        </BotContainer>
        



    </Section>
    );


};
export default MainMint;
