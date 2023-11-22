import React from 'react'

import { useState, useEffect, useRef } from "react";
import { ethers, BigNumber} from 'ethers';

import GameBoyzColorClubTestFinal from './abi.json';
import GameBoyzColorClubTestFinalStaking from './abiStaking.json';
import styled from "styled-components";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import axios from 'axios';
import GbccImage from "./homegbcc.png";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from '@wagmi/core'

import  { keyframes } from 'styled-components';

import { usePrepareContractWrite, useContractRead, useContractWrite } from 'wagmi'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import { id } from 'ethers/lib/utils.js';


        



 


//inserimento
const GameBoyzColorClubTestFinalAddress = ""


const ListBoxItem = styled.option``;
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

const Section = styled.section`

width: 100vw;
margin-bottom: 5rem;

align-items: center;
justify-content: center;
display: flex;



@media (max-width: 80em){
  margin-bottom: 2rem;
  
}

`

const Container = styled.div`
width: 90%;
min-height: 60vh;

display: flex;
justify-content: top;
align-items:center;

@media (max-width: 40em){
flex-direction: column; /* Inverte l'ordine delle sezioni nella colonna */

align-items:center;
justify-content:center;
}



`

const Iddiv = styled.div`
width:100%;
display:flex;
font-size: 16px;
justify-content:center;
align-items:center;
font-weight: bold; /* Aggiunto il grassetto */
color: white; /* Impostato il colore del testo a bianco */

@media (max-width: 40em){
font-size: 14px;


}
`

const Title2 = styled.h2`
font-size: 70px;
line-height: 1.1;
justify-content: left;
align-items:left;
font-weight: 900;
width: 100%;



color:white;
margin: 0; /* o il margine desiderato */
margin-bottom:1rem;
padding: 0; /* o il padding desiderato */

@media (max-width: 80em){
font-size: 50px;


}
@media (max-width: 40em){
font-size: 40px;
margin:4%;
}




`
const Description2 = styled.h2`
font-size: 24px;
line-height: 1.1;
justify-content: left;
align-items:left;
font-weight: 400;
width: 100%;
display:flex;
margin:0;
margin-bottom:4rem;

color:white;


@media (max-width: 80em){
font-size: 20px;


}
@media (max-width: 64em){
font-size: 20px;
margin-bottom:3rem;
}

@media (max-width: 48em){
font-size: 18px;

}
@media (max-width: 40em){
justify-content: center;
align-items:center;
margin-bottom:2rem;
}


`

const Title3 = styled.h2`
font-size: 20px;


font-weight: 900;
width: 100%;
display:flex;


color:white;

@media (max-width: 80em){
font-size: 20px;


}
@media (max-width: 64em){
font-size: 20px;

}

@media (max-width: 48em){
font-size: 18px;

}



`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
align-items: left;
text-align: left; /* Aggiunto per allineare il testo a sinistra */

@media (max-width: 40em){
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
}
`
const ColumnContainer = styled.div`
width: 50%;
height: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

@media (max-width: 40em) {
  width: 100%;
  align-items: center;
  justify-content: center;

}
`;

const ButtonContainer2 = styled.div`
width: 75%;





`
const FloatingImage = styled.div`
margin: 0;
display: flex;
justify-content: center; /* Centra l'immagine orizzontalmente */
align-items: center; /* Centra l'immagine verticalmente */
margin-bottom:5%;
img {
  display: block;
  max-width: 100%;
  height: auto;

  @media (max-width: 80em) {
    max-width: 90%;
  }
}

.shadow {
  /* Aggiungi stili per la classe 'shadow' se necessario */
}

animation: ${float} 4s linear infinite; // Prova anche con 'linear' anziché 'ease-in-out'

`;
const ButtonContainer = styled.div`
width: 100%;
display:flex;
margin-top:2%;
display:none;

align-items:center;
justify-content:center;



`




const Titolo = styled.h1`
  font-size: 40px;

`
const SubTitle = styled.h1`
font-size: 20px;

`
const Testo = styled.h1`
font-size: 25px;
display:flex;
align-items:center;
justify-content:center;

font-weight: 900;

@media (max-width: 80em){
font-size: 23px;

}

@media (max-width: 40em){
font-size: 20px;

}

`

const BoxNft = styled.div`

width:50%;

flex-direction:column;
align-items:center;
display:flex;
background-color: #f6f6f6;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
border-radius: 10px;
padding: 20px;
font-family: Arial, sans-serif;
font-size: 16px;
line-height: 1.5;
color: #333;

margin: 0 auto;
text-align: center;
margin:1rem;
background: rgba(255,255,255,0.2);




@media (max-width: 40em){
width:70%;

}
`
const LowerDiv = styled.div`

width:100vw;

display:flex;
align-items:center;
justify-content:center;


`
const Home = styled.div`

width:100vw;
height:100vh;

display:flex;
`
const DivScritta = styled.div`
height:100vh;
width:50%;
display:flex;
background-color:purple;
`


const DivImmagineHome = styled.div`
height:100vh;
width:50%;
display:flex;
background-color:yellow;
`
const DivNft2 = styled.div`

width:100%;
flex-direction: column;
align-items:center;
justify-content:center;
display:flex;
background-color: #f6f6f6;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
border-radius: 10px;
padding: 20px;
font-family: Arial, sans-serif;
font-size: 16px;
line-height: 1.5;
color: #333;

margin: 0 auto;
text-align: center;
margin:1rem;
flex-wrap: wrap;
background: rgba(255,255,255,0.2);



`
const BoxNft2 = styled.div`
width:100%;
display:flex;
flex-direction: space-between;
flex-wrap: wrap;
align-items:center;
justify-content:center;


`
const ImmagineNft = styled.div`
background-color:gray;
width:50%;

margin:1rem;
border-radius: 10px;
display:flex;


`
const ImmagineNft2 = styled.div`

width:50%;
margin: 1rem;
border-radius: 10px;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;
top: 0;
left: 0;
width: 50%;
height: 50%;
.livello {
  position: absolute;
  top: 10px; /* Regola la posizione verticale del livello */
  right: 10px; /* Regola la posizione orizzontale del livello */
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
}
`;
const ImmagineNft3 = styled.div`

background-color: blue;
width:200px;
margin: 1rem;
border-radius: 10px;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;

@media (max-width: 80em){
  width:160px;
}

@media (max-width: 40em){
  width:100px;
  margin: 0.2em;
}
@media (max-width: 30em){
  width:70px;
}

.livello {
  position: absolute;
  top: 10px; /* Regola la posizione verticale del livello */
  right: 10px; /* Regola la posizione orizzontale del livello */
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
}


`;
const LevelDiv = styled.div`
position: absolute;
top: 5%;
right: 5%;
width: 20%;
height: 20%;
background-color: rgba(0, 0, 0, 0.7);
color: white;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
padding: 5px;
font-weight: bold; /* Imposta il grassetto */
text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Aggiunge l'effetto bombato */
z-index: 2; /* Aggiungi uno z-index inferiore al div del livello */

@media (max-width: 40em){
  top: 5%;
  right: 5%;
  width: 30%;
  height: 30%;
}

`;
const Btn2 = styled.div`

display: inline-block;


outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;


padding: 0.6rem 1rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
&:hover{
transform: scale(1.05);
box-shadow: 0 0 20px rgba(0,0,0,0.4);
}

@media (max-width: 40em){
display: none;

}
`
const Btn4 = styled.div`

display: inline-block;


outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;


padding: 0.6rem 1rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
display:none;
&:hover{
transform: scale(1.05);
box-shadow: 0 0 20px rgba(0,0,0,0.4);
}

@media (max-width: 40em){
margin:1%;
display: initial
}
`


const Img1 = styled.img`
width: 100%;
height:100%;
border-radius: 10px;
`
const SelectedImage = styled.img`

clip-path: inset(5px);
width: 100%;
height: 100%;


z-index: 1; /* Aggiungi uno z-index maggiore all'immagine selezionata */


`;



const UnSelectedImage = styled.img`

width: 100%;
height:100%;
display:flex;
align-items:center;

`;
const NftCardInfo = styled.div`

width: 100%;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
background-color:white;


`;
const InfoNft = styled.div`
background-color:orange;
width:50%;
min-height:30vh;

flex-direction:column;
margin:1rem;

display:flex;


background-color: #f8f8f8;
border: 2px dashed #ccc;
border-radius: 10px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
padding: 20px;
display: flex;
flex-direction: column;
align-items: left;
justify-content: left;
background: rgba(255,255,255,0.7);

@media (max-width: 80em){
width:75%;
}


h4 {
font-size: 24px;
font-weight: bold;
margin-top: 0rem;
margin-bottom: 1rem;
text-align: left;

@media (max-width: 80em){
font-size: 20px;
}

@media (max-width: 40em){
font-size: 18px;
}

}

p {
font-size: 18px;
line-height: 1.5;
margin: 0;
text-align: left;
color: #555;

@media (max-width: 80em){
font-size: 16px;
}

@media (max-width: 40em){
font-size: 14px;
}
}

`
const ImmagineMetadati = styled.div`

flex-direction:row;
display: flex;

@media (max-width: 80em){
flex-direction:column;
justify-content:center;
align-items:center;

}

`
const BottoneStake = styled.button`

margin:1rem;
display: inline-block;
padding: 10px 20px;
border-radius: 30px;

font-size: 16px;
font-weight: 900;
text-align: center;
text-transform: uppercase;
color: #fff;
background-color: #C850C0;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
transition: all 0.3s ease;
cursor: pointer;

font-weight: 900;

&:hover {
background-color: #4158D0;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

&:active {
background-color: white;
box-shadow: none;
}

@media (max-width: 40em){

margin:1%;
font-size: 12px;

padding: 8px 16px;
border-radius: 30px;
}

@media (max-width: 30em){
font-size: 9px;
margin:1%;
}


`

const BottoneStake2 = styled.button`

margin:1rem;
display: inline-block;
padding: 10px 20px;
border-radius: 30px;

font-size: 16px;
font-weight: 900;
text-align: center;
text-transform: uppercase;
color: #fff;
background-color: #C850C0;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
transition: all 0.3s ease;
cursor: pointer;

font-weight: 900;

&:hover {
background-color: #4158D0;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

&:active {
background-color: white;
box-shadow: none;
}

@media (max-width: 40em){

margin:1%;
font-size: 11px;

padding: 7px 14px;
border-radius: 30px;
}

@media (max-width: 30em){
font-size: 9px;
margin:1%;
}


`

const ListBox = styled.select`
width: 100%;
height:35px;
background: rgba(255,255,255,0.8);
color: black;
padding-left: 5px;
font-size: 14px;
border:none;
margin-left: 10px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

   option {
     color: black;
     background: white;
     font-weight: small;
     display: flex;
     white-space: pre;
     min-height: 20px;
     padding: 0px 2px 1px;
   }
`;
const Exp = styled.div`
width:50%;
height:20px;
background-color:gray;
margin-left:10%;
`;
const ExpLoaded = styled.div`
width:20%;
height:20px;
background-color:green;
display:flex;
align-items:center;
justify-content:center;
`;
const ExpDati = styled.p`
display:flex;


align-items:center;
justify-content:center;

`;
const DivExp = styled.div`
width:100%;
height:50%;

display:flex;


align-items:center;


p {
font-size: 18px;
line-height: 1.5;
margin: 0;
text-align: left;
color: #555;
}
`;
const SpanNavBar = styled.span`
margin:1rem;

font-weight: 900;

`;
const NoGbccText = styled.span`
font-size: 30px;
margin:1rem;
font-weight: 900;
color:purple;
font-familiy: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;


@media (max-width: 40em){
  font-size: 20px;

  }

  @media (max-width: 40em){
    font-size: 18px;

    }
`;

function Add() {
  const [selectedSection, setSelectedSection] = useState("Wallet"); // Imposta inizialmente "Wallet" come sezione selezionata
  const listBoxRef = useRef();
  const handleSectionChange = (section) => {
    setSelectedSection(section);


    if(section=="Staking"){
      setSelectedNumber(OWNER[0]);
      setSelectedImages([]);
      
    }

    if(section=="Wallet"){
      setSelectedNumber(GBCCs[0]);
      setSelectedImages([]);
    }


  };
  const handleListBoxClick = () => {
    // Impedisce la chiusura della tendina quando si fa clic al suo interno

  };

  const [GBCCID, setGBCCID] = useState([]);
  const [BACKGROUND, setBACKGROUND] = useState([]);
  const [BODY, setBODY] = useState([]);
  const [BODYDETAIL, setBODYDETAIL] = useState([]);
  const [FACE, setFACE] = useState([]);
  const [HEADDETAIL, setHEADDETAIL] = useState([]);
  const [HANDDETAIL, setHANDDETAIL] = useState([]);
  const [GBCCMINTED, setGBCCMINTED] = useState([]);
  const [EXP, setEXP] = useState([]);
  const [EXPPROPORZIONATO, setEXPPROPORZIONATO] = useState([]);
  const [LIVELLO, setLIVELLO] = useState([]);
  const [PERCENTUALELIVELLO, setPERCENTUALELIVELLO] = useState([]);
  const [EXPNEXTLEVEL, setEXPNEXTLEVEL] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isApproved, setIsApproved] = useState(false);
  const [stakeRefresh, setStakeRefresh] = useState(false);
  const [section, setSection] = useState("");

  const [url, setUrl] = useState([]);

  const { address, connector, isConnected } = useAccount()

  const [Nft, setNft] = useState([]);
  var Nfts = [];
  const addressContract = "0xC905F638914EaAe6A157CCa89341D888289F47b9";
  const addressContractStaking = "0xfc04E042e17aA4576b1F31665Bb5e5546eA1801B";
  const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
  const contract = new ethers.Contract(addressContract, GameBoyzColorClubTestFinal, provider);
  const contractStake = new ethers.Contract(addressContractStaking, GameBoyzColorClubTestFinalStaking, provider);
  // Inizializza selectedNumber con il primo ID di GBCCs come valore predefinito
  var [selectedNumber, setSelectedNumber] = useState(null);
  const hexToDecimal = hex => parseInt(hex, 16);
  var x = 0;
  var [GBCCs, setGBCCs] = useState([]);
  var [OWNER, setOWNER] = useState([]);
  const [filePaths, setFilePaths] = useState([]);
  const [filePathsOwner, setFilePathsOwner] = useState([]);

  // Crea un ref per la sezione "Wallet Staking"
  const walletStakingSectionRef = useRef(null);

  // Funzione per scorrere verso la sezione "Wallet Staking"
  const scrollToWalletStaking = () => {
    walletStakingSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };





  //Funzione per sapere id nft che possiedi nel wallet
  const { data: nftOwned} = useContractRead({
    address: addressContract,
    abi: GameBoyzColorClubTestFinal,
    functionName: "walletOfOwner",
    watch: true,
    args: [address],
  });
// stake function
const { config: stakeConfig } = usePrepareContractWrite({
  address: addressContractStaking,
  abi: GameBoyzColorClubTestFinalStaking,
  functionName: 'stake',
  args: [selectedNumber], // Passa il numero selezionato
})

const { writeAsync, isLoading: mintLoading } = useContractWrite(stakeConfig)

// set approval
const { config: setApproval } = usePrepareContractWrite({
  address: addressContract,
  abi: GameBoyzColorClubTestFinal,
  functionName: 'setApprovalForAll',
  args: [addressContractStaking, true], // Passa il numero selezionato
})
const { write: approveStaking, isSuccess } = useContractWrite(setApproval)


const handleApproveAndStake = async () => {
  try {


    await approveStaking();



    // Entrambe le transazioni sono state inviate con successo
    console.log('Transazioni completate con successo');
  } catch (error) {
    console.error('Errore durante l\'invio delle transazioni:', error);
  }
};

const HandleStakeRefresh = async () => {
  try {



    await writeAsync?.();


    // Attendi 10 secondi
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Inverti il valore di stakeRefresh
    setStakeRefresh(prevValue => !prevValue);



    // Entrambe le transazioni sono state inviate con successo
    console.log('Transazioni completate con successo');
  } catch (error) {
    console.error('Errore durante l\'invio delle transazioni:', error);
  }
};


const HandleUnStakeRefresh = async () => {
  try {



    await unstake?.();

    // Attendi 10 secondi
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Inverti il valore di stakeRefresh
    setStakeRefresh(prevValue => !prevValue);



    // Entrambe le transazioni sono state inviate con successo
    console.log('Transazioni completate con successo');
  } catch (error) {
    console.error('Errore durante l\'invio delle transazioni:', error);
  }
};

const handleStakeSelectedAllRefresh = async () => {
  try {



    // Seconda transazione: Stake NFT
    await stakeSelectedAll();

    // Attendi 10 secondi
    await new Promise(resolve => setTimeout(resolve, 20000));
    setSelectedImages([]);

    // Inverti il valore di stakeRefresh
    setStakeRefresh(prevValue => !prevValue);

    // Entrambe le transazioni sono state inviate con successo
    console.log('Transazioni completate con successo');
  } catch (error) {
    console.error('Errore durante l\'invio delle transazioni:', error);
  }
};

const handleStakeSelectedRefresh = async () => {
  try {



    // Seconda transazione: Stake NFT
    await stakeSelected();


    // Attendi 10 secondi
    await new Promise(resolve => setTimeout(resolve, 20000));
    setSelectedImages([]);

    // Inverti il valore di stakeRefresh
    setStakeRefresh(prevValue => !prevValue);

    // Entrambe le transazioni sono state inviate con successo
    console.log('Transazioni completate con successo');
  } catch (error) {
    console.error('Errore durante l\'invio delle transazioni:', error);
  }
};

const handleAUnstakeSelectedRefresh = async () => {
  try {


    // Seconda transazione: Stake NFT
    await unstakeSelected();

    // Attendi 10 secondi
    await new Promise(resolve => setTimeout(resolve, 20000));

    setSelectedImages([]);
    // Inverti il valore di stakeRefresh
    setStakeRefresh(prevValue => !prevValue);

    // Entrambe le transazioni sono state inviate con successo
    console.log('Transazioni completate con successo');
  } catch (error) {
    console.error('Errore durante l\'invio delle transazioni:', error);
  }
};

const handleUnstakeAllRefresh = async () => {
  try {


    // Seconda transazione: Stake NFT
    await unstakeAll();
    // Attendi 10 secondi
    await new Promise(resolve => setTimeout(resolve, 20000));

    setSelectedImages([]);
    // Inverti il valore di stakeRefresh
    setStakeRefresh(prevValue => !prevValue);

    // Entrambe le transazioni sono state inviate con successo
    console.log('Transazioni completate con successo');
  } catch (error) {
    console.error('Errore durante l\'invio delle transazioni:', error);
  }
};


// stakeselected
const { config: stakeSelectedConfig } = usePrepareContractWrite({
  address: addressContractStaking,
  abi: GameBoyzColorClubTestFinalStaking,
  functionName: 'stakeSelected',
  args: [selectedImages], // Passa il numero selezionato
})
const { writeAsync: stakeSelected } = useContractWrite(stakeSelectedConfig)

// stakeselectedAll
const { config: stakeSelectedAllConfig } = usePrepareContractWrite({
  address: addressContractStaking,
  abi: GameBoyzColorClubTestFinalStaking,
  functionName: 'stakeSelected',
  args: [GBCCs], // Passa il numero selezionato
})
const { writeAsync: stakeSelectedAll } = useContractWrite(stakeSelectedAllConfig)


// unstake function
const { config: unstakeConfig } = usePrepareContractWrite({
  address: addressContractStaking,
  abi: GameBoyzColorClubTestFinalStaking,
  functionName: 'unstake',
  args: [selectedNumber], // Passa il numero selezionato
})
const { writeAsync: unstake } = useContractWrite(unstakeConfig)

// unstake function
const { config: unstakeAllConfig } = usePrepareContractWrite({
  address: addressContractStaking,
  abi: GameBoyzColorClubTestFinalStaking,
  functionName: 'unstakeAll',

})
const { writeAsync: unstakeAll } = useContractWrite(unstakeAllConfig)

// unstakeselected
const { config: unstakeSelectedConfig } = usePrepareContractWrite({
  address: addressContractStaking,
  abi: GameBoyzColorClubTestFinalStaking,
  functionName: 'unstakeSelected',
  args: [selectedImages], // Passa il numero selezionato
})
const { writeAsync: unstakeSelected } = useContractWrite(unstakeSelectedConfig)

const [metadata, setMetadata] = useState({}); // Stato per i metadati

  // Funzione per caricare e visualizzare i metadati
  const loadMetadata = async (metadataUrl) => {
    try {
      const response = await fetch(metadataUrl); // Carica il file JSON dai metadati
      if (!response.ok) {
        throw new Error(`Errore nel caricamento dei metadati`);
      }
      const data = await response.json();
      setMetadata(data); // Imposta i metadati nello stato
    } catch (error) {
      console.error(error);
    }
  };



//ricavo ID dei GBCC posseduti
  useEffect(() => {
    if (nftOwned) {
      let temp = JSON.stringify(nftOwned).split('"');
      
      for(let x=1;x<temp.length;x++){
        if(temp[x].substr(0,2)=="0x"){

          

          setGBCCs(oldArray => [...oldArray, hexToDecimal(temp[x])]);

        }
      }



      return () => setGBCCs([]);

    }
  }, [stakeRefresh]);
//controllare se l'utente è abilitato allo stake
  useEffect(() => {
    if (isConnected) {
      const fetchData = async () => {
        try {
          const isApproved = await contract.isApprovedForAll(address, addressContractStaking);


          setIsApproved(isApproved);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }
  }, []);

  // Nuovo useEffect per impostare selectedNumber
useEffect(() => {

  if(selectedSection === "Wallet"){

    if (GBCCs.length > 0) {
      setSelectedNumber(GBCCs[0]);
      console.log(selectedNumber);
    }
  }


  
}, [GBCCs]);

  // Nuovo useEffect per impostare selectedNumber
  useEffect(() => {

    if(selectedSection === "Staking"){
  
      if (OWNER.length > 0) {
        setSelectedNumber(OWNER[0]);
        console.log(selectedNumber);
      }
    }
  
  
    
  }, [OWNER]);




//ricavo json dei gbcc 
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(filePathMetadata);
        const json = await response.json();
        const {results} = json;
        let Stringa = JSON.stringify(json);
        let ArrayJson = Stringa.split('"');

        let dati_GBCCID = ArrayJson[3];

        let Background = ArrayJson[29];
        let Body = ArrayJson[37];
        let BodyDetail = ArrayJson[45];
        let Face = ArrayJson[53];
        let headDetail = ArrayJson[61];
        let handDetail = ArrayJson[69];


        console.log(dati_GBCCID);
        // Only put the results in state, ie, the actual users array
        setGBCCID(dati_GBCCID);
        setBACKGROUND(Background);
        setBODY(Body);
        setBODYDETAIL(BodyDetail);
        setFACE(Face);
        setHEADDETAIL(headDetail);
        setHANDDETAIL(handDetail);


      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  
  }, )




    //accorcia stringa
  function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
  };






  
  
  const handleNumberSelect = (event) => {
      setSelectedNumber(event.target.value);
  };





  
  //Funzione che aggiorna il numero di gbcc mintati
  useEffect(() => {
    const fetchData = async () => {
      try {
        let minted_hex = await contract.totalSupply();
        minted_hex= minted_hex._hex;
        let minted = hexToDecimal(minted_hex);

        setGBCCMINTED(minted);

      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);


  

  useEffect(() => {
    // Funzione per creare i file path basati su GBCCs
    const generateFilePaths = async () => {
      const paths = [];
      for (const gbcc of GBCCs) {
        const assetPath = `https://fra1.digitaloceanspaces.com/gbccdbtest/gbcc-token/public/assets/${gbcc}.png`;

        const metadataURL = `https://fra1.digitaloceanspaces.com/gbccdbtest/gbcc-token/public/metadata/${gbcc}.json`;

        try {
          const response = await fetch(metadataURL);
          if (!response.ok) {
            throw new Error('Errore nel caricamento dei metadati');
          }
          const metadata = await response.json();
          const livello = metadata.attributes.find(attribute => attribute.trait_type === "Level")?.value;
  
          // Estrarre il primo numero dal livello
          const livelloNumerico = livello ? parseInt(livello) : "N/D";
  
          paths.push({
            id: gbcc,
            path: assetPath,
            Livelli: livelloNumerico,
          });
        } catch (error) {
          console.error(error);
        }
      }
  
      return paths;
    };
  
    generateFilePaths().then(paths => {
      console.log("path", paths);
      setFilePaths(paths);
    });
  }, [GBCCs]);
  





// Fillare i file path per OWNER
useEffect(() => {
  // Funzione per creare i file path basati su OWNER
  const generateFilePathsOwner = async () => {
    const paths = [];
    for (const owner of OWNER) {
      const assetPath = `https://fra1.digitaloceanspaces.com/gbccdbtest/gbcc-token/public/assets/${owner}.png`;
      const metadataURL = `https://fra1.digitaloceanspaces.com/gbccdbtest/gbcc-token/public/metadata/${owner}.json`;

      try {
        const response = await fetch(metadataURL);
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei metadati');
        }
        const metadata = await response.json();
        const livello = metadata.attributes.find(attribute => attribute.trait_type === "Level")?.value;

        // Estrarre il primo numero dal livello
        const livelloNumerico = livello ? parseInt(livello) : "N/D";

        paths.push({
          id: owner,
          path: assetPath,
          Livelli: livelloNumerico,
        });
      } catch (error) {
        console.error(error);
      }
    }

    return paths;
  };

  generateFilePathsOwner().then(paths => {
    console.log("path", paths);
    setFilePathsOwner(paths);
  });
}, [OWNER]);


  

  
  //funzione che ritorna i gbcc in stake
  useEffect(() => {
    if (isConnected) {
      const fetchData = async () => {
        try {
          const stakedNFTs = await contractStake.getStakedNFTs(address);
          const stakedNFTIds = stakedNFTs.map(nft => nft.toNumber()); // Converte BigNumber in numero
          setOWNER(stakedNFTIds);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }
  }, [stakeRefresh]);

  useEffect(() => {
    if (isConnected && selectedNumber !== null) {
      const fetchData = async () => {
        try {
          const totalExp = await contractStake.getTotalExp(selectedNumber);
          const totalExpValue = totalExp.toNumber();
          const totalExpInHours = totalExpValue / 60 / 60;
          
          setEXP(totalExpInHours);
  
          // Calcola il livello in base al nuovo valore di EXP
          const newLivello = calcolaLivelloDaOre(totalExpInHours);
          
          console.log(EXP);
          console.log(newLivello.livello);
          
          setLIVELLO(newLivello.livello);
          setPERCENTUALELIVELLO(newLivello.percentuale);
          setEXPNEXTLEVEL(newLivello.expnextlevel);
          setEXPPROPORZIONATO(newLivello.exp);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }
  }, [isConnected, selectedNumber]);
  

//refresh gbcc primo accesso
      useEffect(() => {

        const fetchData = async () => {
          if (isConnected) {
            // Attendi 10 secondi
              await new Promise(resolve => setTimeout(resolve, 20000));
      
              // Inverti il valore di stakeRefresh
              setStakeRefresh(prevValue => !prevValue);
        }
        fetchData();
        }
      }, [isConnected]);



var filePath1 = "https://fra1.digitaloceanspaces.com/gbccdbtest/gbcc-token/public/assets/"+selectedNumber+".png";
var filePathMetadata = "https://fra1.digitaloceanspaces.com/gbccdbtest/gbcc-token/public/metadata/"+selectedNumber+".json";

var https = require('https-browserify');

var dati = "";

const combinedList = [...GBCCs, ...OWNER];
let label = '';


console.log("selectNumber:"+selectedNumber);
console.log("filePath1:"+filePath1);


selectedNumber = parseInt(selectedNumber); // Converti in un numero intero
console.log(OWNER.includes(selectedNumber)); // Ora dovrebbe restituire true


if (selectedNumber && OWNER.includes(selectedNumber)) {
  label = 'Staked';

} else if (selectedNumber && GBCCs.includes(selectedNumber)) {
  label = 'Wallet';

}
const handleImageClick = (id) => {
  if (selectedImages.includes(id)) {
    // Rimuovi l'ID se è già stato selezionato
    setSelectedImages(selectedImages.filter((selectedId) => selectedId !== id));
  } else {
    // Aggiungi l'ID se non è stato selezionato
    setSelectedImages([...selectedImages, id]);
  }
};

function calcolaLivelloDaOre(ore) {
  let livello = 1;
  let oreLivello = 0;

  while (ore >= oreLivello) {
    oreLivello += 24 * livello;
    if (ore >= oreLivello) {
      livello++;
    }
  }

  // Calcola la percentuale tra il livello precedente e il livello corrente
  const oreLivelloPrecedente = oreLivello - 24 * livello;
  const percentuale = ((ore - oreLivelloPrecedente) / (24 * livello)) * 100;

  return {
    livello: livello,
    percentuale: percentuale.toFixed(2),
    exp: (ore - oreLivelloPrecedente).toFixed(0),
    expnextlevel: (oreLivello - oreLivelloPrecedente)

  };
};

async function infoGBCC(id){
  try {
    const totalExp = await contractStake.getTotalExp(id);
    const totalExpValue = totalExp.toNumber();
    const totalExpInHours = totalExpValue / 60 / 60;
    


    // Calcola il livello in base al nuovo valore di EXP
    const newLivello = calcolaLivelloDaOre(totalExpInHours);
    
    console.log(EXP);
    console.log(newLivello.livello);
    
    return newLivello;
    
  } catch (error) {
    console.log("error", error);
  }

};



  return (
      <>

      <div>


      <Section>
      <Container>

        <Box> 

        <Title2>
      GBCC Leveling Platform


       </Title2>
       <Description2>
       Level up your NFTs through staking



       </Description2>

        
    
    

    <ButtonContainer2>

    <Btn2 onClick={scrollToWalletStaking}>        <Title3 >Stake Now    </Title3></Btn2> 

       

    </ButtonContainer2>

        </Box>


        <ColumnContainer>
        <FloatingImage>
        <img src={GbccImage} alt="Angioletto" width="800" height="800"/>
        <div className="shadow" />

        </FloatingImage>


          
        </ColumnContainer>

        <ButtonContainer>

        </ButtonContainer>

      </Container>

      
    </Section>












<div ref={walletStakingSectionRef}>
    {isConnected && (
            <>               <SpanNavBar 
            onClick={() => handleSectionChange("Wallet")}
            style={{
              cursor: "pointer",
              color: selectedSection === "Wallet" ? "white" : "purple",
            }}
          >
         Wallet
          </SpanNavBar>
  
          <SpanNavBar
            onClick={() => handleSectionChange("Staking")}
            style={{
              cursor: "pointer",
              color: selectedSection === "Staking" ? "white" : "purple",
            }}
          >
            Staking
          </SpanNavBar>              </>  
            ) 
              
          } 

</div>     

        
      </div>
        <LowerDiv>
        <BoxNft>

        {isConnected ? (
          <>        
            

        {selectedSection === "Staking" && OWNER.length>0 ? (
              <>
          {isConnected ? (
            <>          
              <Testo>GBCC:&nbsp;
              
              {selectedSection === "Wallet" && (
              <>        <ListBox ref={listBoxRef} value={selectedNumber} onChange={handleNumberSelect} onClick={handleListBoxClick} >
              {GBCCs.map((item, index) => (
                <ListBoxItem key={index}>{item}</ListBoxItem>
              ))}



              
            </ListBox></>)}

            {selectedSection === "Staking" && (
              <>        <ListBox ref={listBoxRef} value={selectedNumber} onChange={handleNumberSelect} onClick={handleListBoxClick} >
              {OWNER.map((item, index) => (
                <ListBoxItem key={index}>{item}</ListBoxItem>
              ))}



              
            </ListBox></>)}

             



              
              </Testo>




            <ImmagineMetadati>
              <ImmagineNft2><LevelDiv >{LIVELLO}</LevelDiv><Img1 src={filePath1} alt="Logo" /></ImmagineNft2>
              

              <InfoNft>
                <h4>{GBCCID} <br></br> </h4>
                
                <p>Background: {BACKGROUND}<br></br> </p>
                <p>Body: {BODY}<br></br></p>
                <p>Body Detail: {BODYDETAIL}<br></br></p>
                <p>Face: {FACE}<br></br> </p>
                <p>Head Detail: {HEADDETAIL}<br></br> </p>
                <p>Hand Detail: {HANDDETAIL}</p>
                
                <p>{`Level: ${LIVELLO}${String.fromCharCode(160)}`}
                
                {`(${PERCENTUALELIVELLO}%)`}</p>
                <p>Exp: {EXPPROPORZIONATO}/{EXPNEXTLEVEL}</p>

                
              
              
                
              </InfoNft>

              </ImmagineMetadati>

              {isApproved ? (
                <>

                <BottoneStake   onClick={() => selectedNumber && GBCCs.includes(selectedNumber) ? HandleStakeRefresh() : HandleUnStakeRefresh()}>
                {selectedNumber && GBCCs.includes(selectedNumber) ? 'Stake' : 'Unstake'}

                
                </BottoneStake>
                

                </>  
              ) :
              ( 
                <BottoneStake onClick={() => selectedNumber && GBCCs.includes(selectedNumber) ? handleApproveAndStake() : handleApproveAndStake()}>
                {selectedNumber && GBCCs.includes(selectedNumber) ? 'Approve' : 'Approve'}
                </BottoneStake>
              
              )
            } 


              
              





            </>  
            ) :
            (<Testo>YOU MUST BE CONNECTED </Testo>)
              
          }
              </>):
              <>
              {selectedSection === "Staking" && (<><NoGbccText>No GBCC Staked</NoGbccText> </>)}
              </>
          }


        {selectedSection === "Wallet" && GBCCs.length>0 ? (
              <>
          {isConnected ? (
            <>          
              <Testo>GBCC:&nbsp;
              
              {selectedSection === "Wallet" && (
              <>        <ListBox ref={listBoxRef} value={selectedNumber} onChange={handleNumberSelect} onClick={handleListBoxClick} >
              {GBCCs.map((item, index) => (
                <ListBoxItem key={index}>{item}</ListBoxItem>
              ))}



              
            </ListBox></>)}

            {selectedSection === "Staking" && (
              <>        <ListBox ref={listBoxRef} value={selectedNumber} onChange={handleNumberSelect} onClick={handleListBoxClick} >
              {OWNER.map((item, index) => (
                <ListBoxItem key={index}>{item}</ListBoxItem>
              ))}



              
            </ListBox></>)}

             



              
              </Testo>




            <ImmagineMetadati>
              <ImmagineNft2><LevelDiv >{LIVELLO}</LevelDiv><Img1 src={filePath1} alt="Logo" /></ImmagineNft2>
              

              <InfoNft>
                <h4>{GBCCID} <br></br> </h4>
                
                <p>Background: {BACKGROUND}<br></br> </p>
                <p>Body: {BODY}<br></br></p>
                <p>Body Detail: {BODYDETAIL}<br></br></p>
                <p>Face: {FACE}<br></br> </p>
                <p>Head Detail: {HEADDETAIL}<br></br> </p>
                <p>Hand Detail: {HANDDETAIL}</p>
                
                <p>{`Level: ${LIVELLO}${String.fromCharCode(160)}`}
                
                {`(${PERCENTUALELIVELLO}%)`}</p>
                <p>Exp: {EXPPROPORZIONATO}/{EXPNEXTLEVEL}</p>

                
              
              
                
              </InfoNft>

              </ImmagineMetadati>

              {isSuccess || isApproved ? (
                <>

                <BottoneStake onClick={() => selectedNumber && GBCCs.includes(selectedNumber) ? HandleStakeRefresh() : HandleUnStakeRefresh()}>
                {selectedNumber && GBCCs.includes(selectedNumber) ? 'Stake' : 'Unstake'}
                </BottoneStake>
                

                </>  
              ) :
              ( 
                <BottoneStake onClick={() => selectedNumber && GBCCs.includes(selectedNumber) ? handleApproveAndStake() : handleApproveAndStake()}>
                {selectedNumber && GBCCs.includes(selectedNumber) ? 'Approve' : 'Approve'}
                </BottoneStake>
              
              )
            } 

              
              





            </>  
            ) :
            (<Testo>YOU MUST BE CONNECTED </Testo>)
              
          }
              </>):
              <>
            {selectedSection === "Wallet" && isConnected && (<><NoGbccText>No GBCC in your Wallet</NoGbccText></>)}
 

              </>
        }

          </>  
            ) :
            (<Testo>YOU MUST BE CONNECTED </Testo>)
              
          }



        </BoxNft>    
        </LowerDiv>  



        {isSuccess || isApproved ? (
            <>        
            


            {selectedSection === "Staking" && (
              <>

              <DivNft2>
              <BoxNft2>

                  {isSuccess || isApproved ? (
                    <>

                    <BottoneStake2 onClick={() => handleUnstakeAllRefresh()}>
                      Unstake All
                    </BottoneStake2>

                    <BottoneStake2 onClick={() => handleAUnstakeSelectedRefresh()}>
                    Unstake Selected ({selectedImages.length})
                    </BottoneStake2>
                    

                    </>  
                  ) :
                  ( 
                    <>

                    

                    </>  
                  
                  )
                } 




              </BoxNft2>

            <BoxNft2>

            {filePathsOwner.map((filePath, index) => (
            <div key={index}>
              <ImmagineNft3>
              <LevelDiv>{filePath.Livelli}</LevelDiv>
                {selectedImages.includes(filePath.id) ? (
                  <SelectedImage
                    src={filePath.path}
                    alt={`Image ${filePath.id + 1}`}
                    onClick={() => handleImageClick(filePath.id)}
                  />
                ) : (
  
                  <UnSelectedImage
                    src={filePath.path}
                    alt={`Image ${filePath.id + 1}`}
                    onClick={() => handleImageClick(filePath.id)}
                  />
 

                )}


              </ImmagineNft3>

              <Iddiv style={{ textAlign: 'center' }}>{filePath.id}</Iddiv>
            

            </div>
          ))}


            </BoxNft2>


              </DivNft2>
              </>
            )}
      
            {selectedSection === "Wallet" && (
              <DivNft2>
                <BoxNft2>
                  
                {isSuccess || isApproved ? (
                    <>

                <BottoneStake onClick={() => handleStakeSelectedAllRefresh()}>
                stake all
                </BottoneStake>

                <BottoneStake onClick={() => handleStakeSelectedRefresh()}>
                Stake Selected ({selectedImages.length})
                </BottoneStake>
                    

                    </>  
                  ) :
                  ( 
                    <>


                    </>  
                  
                  )
                } 







              </BoxNft2>

                <BoxNft2>
                {filePaths.map((filePath, index) => (
                <div key={index}>
                  <ImmagineNft3>
                  <LevelDiv >{filePath.Livelli}</LevelDiv>
                    {selectedImages.includes(filePath.id) ? (
                      
                      <SelectedImage
                        src={filePath.path}
                        alt={`Image ${filePath.id + 1}`}
                        onClick={() => handleImageClick(filePath.id)}
                      />
                    ) : (
       
                      <UnSelectedImage
                        src={filePath.path}
                        alt={`Image ${filePath.id + 1}`}
                        onClick={() => handleImageClick(filePath.id)}
                      />
                

                    )}


                  </ImmagineNft3>
                  <Iddiv style={{ textAlign: 'center' }}>{filePath.id}</Iddiv>
                  
                </div>
                
              ))}
                </BoxNft2>
              </DivNft2>
            )}
            
            </>  
            ) :
            ("")
              
          }




      </>



);
}

export default Add;