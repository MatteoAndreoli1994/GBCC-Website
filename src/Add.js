
import styled, { keyframes } from 'styled-components';

import { useState, useEffect, useRef } from "react";
import { ethers, BigNumber} from 'ethers';
import InputImage from "./Immagini2/input.png"
import GameBoyzColorClubTestFinal from './abi.json';
import GameBoyzColorClubTestFinalStaking from './abiStaking.json';

import Contratto from './Contract.json';
import "@fontsource/press-start-2p"; // Defaults to weight 400


import { ConnectButton } from '@rainbow-me/rainbowkit';
import axios from 'axios';
import backgImage from "./Immagini2/backg.gif"
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

function Add() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [GBCCID, setGBCCID] = useState([]);
  const [BACKGROUND, setBACKGROUND] = useState([]);
  const [BODY, setBODY] = useState([]);
  const [BODYDETAIL, setBODYDETAIL] = useState([]);
  const [FACE, setFACE] = useState([]);
  const [HEADDETAIL, setHEADDETAIL] = useState([]);
  const [HANDDETAIL, setHANDDETAIL] = useState([]);
  const [GBCCMINTED, setGBCCMINTED] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [url, setUrl] = useState([]);

  const { address, connector } = useAccount()

  const [Nft, setNft] = useState([]);
  var Nfts = [];
  const addressContract = "0xC905F638914EaAe6A157CCa89341D888289F47b9";
  
  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);


        const network = await provider.getNetwork();
        const chainId = network.chainId;

        if (chainId === 56) {
          // Connesso alla Binance Smart Chain (BSC) testnet con ID catena 56
          setIsConnected(true);
          setWalletStatus('Connected');
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          
          setWalletAddress(address);
        } else {
          // Connesso a una catena diversa dalla BSC testnet
          setIsConnected(false);
          setWalletStatus('Connected to a different chain');
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
        setIsConnected(false);
        setWalletStatus('Connection failed');
      }
    } else {
      setIsConnected(false);
      setWalletStatus('No wallet detected');
    }
  };
  const addressContractReg = "0x500ED91590a0339D1941e1b64D9D2eeD96D5c68c";

  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Resto del tuo codice che dipende dal provider Web3
  } else {
    // Codice di fallback per gestire i browser senza supporto per i wallet Ethereum
  }


  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());

  const signer = ( (window.ethereum != null) ?   provider.getSigner() : ethers.providers.getDefaultProvider());

  const contractReg = new ethers.Contract(addressContractReg, Contratto, signer); 

  const hexToDecimal = hex => parseInt(hex, 16);
  var x = 0;
  const [selectedNumber, setSelectedNumber] = useState(1);
  var [RegAddress, setRegAddress] = useState([]);

  var [TotalNFTsByRegistration, setTotalNFTsByRegistration] = useState();

  var [OWNER, setOWNER] = useState([]);








  const Contenitore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Button2 = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const WalletStatus = styled.p`
  margin-top: 20px;
`;

  const rainbow = keyframes`
  0% { color: violet; }
  14% { color: orange; }
  28% { color: yellow; }
  42% { color: green; }
  57% { color: blue; }
  71% { color: indigo; }
  85% { color: red; }
  100% { color: violet; }
`;


const Title = styled.h1`
  font-size: 36px;
  margin-top: 30vh;
  animation: ${rainbow} 3s linear infinite;

  @media (max-width: 64em){
    font-size: 30px;
  }
  
  @media (max-width: 40em){
    font-size: 28px;
  }
  
  @media (max-width: 36em){
    font-size: 27px;
  }
  @media (max-width: 30em){
    margin-top: 40vh;
    font-size: 20px;
  
  }
`;




    //accorcia stringa
  function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
  };


  const handleClickSubmit = async () => {
    console.log("clicked");
    try {


      await contractReg.registra(inputValue);
      

      // Puoi gestire ulteriormente la risposta o aggiornare lo stato della tua applicazione
    } catch (error) {
      console.error('Errore durante la transazione:', error);
      // Puoi gestire l'errore in base alle tue esigenze
    }
  };
  const handleCheck = async () => {
    
    try {
      console.log("clicked");
      console.log(await contractReg.getAddressesByRegistration(inputValue));


      let StringaRegAddress = await contractReg.getAddressesByRegistration(inputValue);
      setRegAddress(StringaRegAddress);

      for(let i=0;i<StringaRegAddress.length;i++){
        console.log(StringaRegAddress[i]);

      }
      
      let StringaTotalNFTsByRegistration = JSON.stringify((await contractReg.totalNFTsByRegistration(inputValue)) );

      let ArrayJson = StringaTotalNFTsByRegistration.split('"');
      let TotalGBCC = ArrayJson[7];
            // Salva i dati da mostrare nel pop-up nello stato popupData
      const data = {
              totalNFTsByRegistration: hexToDecimal(TotalGBCC),
              regAddress: StringaRegAddress,
            };
      setTotalNFTsByRegistration(hexToDecimal(TotalGBCC));
      setPopupData(data);

      // Mostra il pop-up
      setShowPopup(true);
      // Puoi gestire ulteriormente la risposta o aggiornare lo stato della tua applicazione
    } catch (error) {
      console.error('Errore durante la transazione:', error);
      // Puoi gestire l'errore in base alle tue esigenze
    }
  };
  

  


  const [walletAddress, setWalletAddress] = useState('');
  const [walletStatus, setWalletStatus] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    checkConnection();
  }, []);
  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    setWalletStatus('');
    setIsButtonDisabled(false);
  };


  
 const connectWallet = async () => {
    setIsButtonDisabled(true);

    if (isConnected) {
      // Scollega il portafoglio se è già connesso
      disconnectWallet();
      return;
    }

    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        await checkConnection();
      } catch (error) {
        console.error('Error connecting wallet:', error);
        setIsConnected(false);
        setWalletStatus('Connection failed');
        setIsButtonDisabled(false);
      }
    } else {
      setIsConnected(false);
      setWalletStatus('No wallet detected');
      setIsButtonDisabled(false);
    }
  };




// Stili CSS
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top:0%;
  min-width:300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;

`;

const PopupTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const PopupContent = styled.div`

  color: black;
  p{
    font-size: 15px;
    
    @media (max-width: 64em){
      font-size: 10px;
    }
    
    @media (max-width: 40em){
      font-size: 10px;
    }
    
    @media (max-width: 36em){
      font-size: 10px;
    }
    @media (max-width: 30em){
      font-size: 7px;
    
    }
  }
`;

const PopupCloseButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  font-family: 'Press Start 2P', cursive;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% 100%;
  color: #ffffff;
  font-family: 'Press Start 2P', cursive;
  text-align: center;

  margin: 0;
  height: 100vh;
  display: flex;

  justify-content: center;
`;

const WalletButton = styled.button`
  position: absolute;
  top: 2%;
  right: 10px;
  background-color: ${({ isConnected }) => (isConnected ? '#fff' : '#ff0000')};
  color: ${({ isConnected }) => (isConnected ? '#007bff' : '#fff')};
  padding: 10px 20px;
  border: none;
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  cursor: pointer;
  display: block;

  @media (max-width: 64em){
    font-size: 16px;
  }
  
  @media (max-width: 40em){
    font-size: 16px;
  }
  
  @media (max-width: 36em){
    font-size: 14px;
  }
  @media (max-width: 30em){
    font-size: 10px;
  
  }
`;

const WalletAddress = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;

  @media (max-width: 64em){
    font-size: 10px;
  }
  
  @media (max-width: 40em){
    font-size: 8px;
  }
  
  @media (max-width: 36em){
    font-size: 6px;
  }
  @media (max-width: 30em){
    font-size: 5px;
  
  }
`;

const InputDiv = styled.div`
  margin-top: 1.5%;
  background-size: 100% 100%;
  background-image: url(${InputImage});
  width: 350px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px 50px;
`;

const Input = styled.input`
  margin-top: 1.5%;
  width: 300px;
  height: 5px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  border-radius: 50px 50px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const Button = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;

  &:hover {
    background-color: #ff3333;
  }
`;

const Response = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: black;
`;

const CenteredContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`;

const ConnectWalletButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Titolo = styled.h1`
  font-size: 40px;
`;

const SubTitle = styled.h1`
  font-size: 20px;
`;

const Testo = styled.h1`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.h6`
  font-size: 25px;
  font-weight: bold;
  color: #fcfffc;
`;

const BoxNft = styled.div`
  background-color: red;
  width: 80%;
  flex-direction: column;
  align-items: center;
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  padding: 20px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin: 1rem;
`;

const ImmagineNft = styled.div`
  background-color: gray;
  width: 50%;
  margin: 1rem;
  border-radius: 10px;
  display: flex;
`;

const Img1 = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const InfoNft = styled.div`
  background-color: orange;
  width: 50%;
  min-height: 30vh;
  flex-direction: column;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border: 2px dashed #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    text-align: center;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    text-align: center;
    color: #555;
  }
`;

const BottoneStake = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 30px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #007aff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #0059ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #004de6;
    box-shadow: none;
  }
`;

const ListBox = styled.select``;

const Exp = styled.div`
  width: 50%;
  height: 20px;
  background-color: gray;
  margin-left: 10%;
`;

const ExpLoaded = styled.div`
  width: 20%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExpDati = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddressContainer = styled.div`
  width: 50%;
  margin: 2%;
  color: white;
`;

const AddressTg = styled.h6`
  font-size: 13px;
`;

const ContainerButton = styled.div`
  justify-content: center;
  display: flex;

`;


const inputRef = useRef(null);
const [username, setUsername] = useState('');

const handleInputChange = (text) => {
  setInputValue(text);
  
};





var dati = "";








  return (
      <>




          
  <Container>



    <CenteredContainer>
          {/* Pulsante "Connect Wallet" */}


      <WalletButton onClick={connectWallet} isConnected={isConnected}>{isConnected ? 'Connected' : 'Connect Wallet'}</WalletButton>

    {/* Contenitore per l'indirizzo del wallet */}

      <WalletAddress>{walletAddress}</WalletAddress>


    {isConnected ? (
      <>      <Title>
      Insert your Telegram ID 
    </Title>
<InputDiv>    <Input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        autoFocus
      /></InputDiv>

    <br />
    {/* Pulsante "Submit" */}
    <ContainerButton>
      <Button onClick={handleClickSubmit} >Submit</Button>

      <Button onClick={handleCheck}>Check</Button>
      {showPopup && (
        <PopupContainer>
          <PopupTitle>Popup Title</PopupTitle>
          <PopupContent>
            <p>Total GBCCs: {popupData.totalNFTsByRegistration}</p>
            <p>Address:</p>
            {popupData.regAddress.map((address, index) => (
              <div key={index}>
                <p>{address}</p>
              </div>
            ))}
          </PopupContent>
          <PopupCloseButton onClick={() => setShowPopup(false)}>
            Close
          </PopupCloseButton>
        </PopupContainer>
      )}

    </ContainerButton>


        
        
        
     
 
    {/* Elemento per la visualizzazione della risposta */}
    <Response id="response"></Response></>

                                    
                                  ) :
                                  ( <Title>
                                    Please connect your wallet
                                    </Title>)
                                  
                              }



    </CenteredContainer>
  </Container>
            
    
      </>



);
}

export default Add;