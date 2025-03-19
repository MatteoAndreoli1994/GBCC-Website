import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styled, { keyframes } from 'styled-components';
import "@fontsource/press-start-2p";

// Importazioni di immagini e contratto
import InputImage from "./Immagini2/input.png";
import backgImage from "./Immagini2/backg.gif";
import Contratto from './Contract.json';

// Definizione animazione
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

// Componenti stilizzati
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const CenteredContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-top: 30vh;
  animation: ${rainbow} 3s linear infinite;

  @media (max-width: 64em) { font-size: 30px; }
  @media (max-width: 40em) { font-size: 28px; }
  @media (max-width: 36em) { font-size: 27px; }
  @media (max-width: 30em) {
    margin-top: 40vh;
    font-size: 20px;
  }
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

  @media (max-width: 64em) { font-size: 16px; }
  @media (max-width: 40em) { font-size: 16px; }
  @media (max-width: 36em) { font-size: 14px; }
  @media (max-width: 30em) { font-size: 10px; }
`;

const WalletAddress = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;

  @media (max-width: 64em) { font-size: 10px; }
  @media (max-width: 40em) { font-size: 8px; }
  @media (max-width: 36em) { font-size: 6px; }
  @media (max-width: 30em) { font-size: 5px; }
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

const ContainerButton = styled.div`
  justify-content: center;
  display: flex;
`;

const Response = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: black;
`;

// Stili per il popup
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0%;
  min-width: 300px;
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
  p {
    font-size: 15px;
    
    @media (max-width: 64em) { font-size: 10px; }
    @media (max-width: 40em) { font-size: 10px; }
    @media (max-width: 36em) { font-size: 10px; }
    @media (max-width: 30em) { font-size: 7px; }
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

// Componente principale
function Add() {

  // Chain ID per BNB Chain (BSC)
  const BNB_CHAIN_ID = 56;
  // Indirizzo del contratto
  const addressContractReg = "0x500ED91590a0339D1941e1b64D9D2eeD96D5c68c";































  // Stati
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [walletStatus, setWalletStatus] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [regAddress, setRegAddress] = useState([]);
  const [totalNFTsByRegistration, setTotalNFTsByRegistration] = useState();



  // Utility function
  const hexToDecimal = hex => parseInt(hex, 16);

  // Setup del provider e del contratto
  const getProvider = () => {
    return window.ethereum != null 
      ? new ethers.providers.Web3Provider(window.ethereum) 
      : ethers.providers.getDefaultProvider();
  };

  const getSigner = () => {
    const provider = getProvider();
    return window.ethereum != null 
      ? provider.getSigner() 
      : ethers.providers.getDefaultProvider();
  };

  const getContract = () => {
    const signer = getSigner();
    return new ethers.Contract(addressContractReg, Contratto, signer);
  };

  // Controllo della connessione al wallet
  const checkConnection = async () => {
    if (!window.ethereum) {
      setIsConnected(false);
      setWalletStatus('No wallet detected');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      const chainId = network.chainId;

      if (chainId === 56) {
        // Connesso alla Binance Smart Chain (BSC) con ID catena 56
        setIsConnected(true);
        setWalletStatus('Connected');
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } else {
        // Connesso a una catena diversa dalla BSC
        setIsConnected(false);
        setWalletStatus('Connected to a different chain');
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
      setIsConnected(false);
      setWalletStatus('Connection failed');
    }
  };

  // Disconnessione del wallet
  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    setWalletStatus('');
    setIsButtonDisabled(false);
  };

  // Connessione del wallet
  const connectWallet = async () => {
    setIsButtonDisabled(true);

    if (isConnected) {
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

  // Gestione dell'input
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  // Invio del Telegram ID
  const handleClickSubmit = async () => {
    console.log("clicked");
    try {
      const contractReg = getContract();
      await contractReg.registra(inputValue);
    } catch (error) {
      console.error('Errore durante la transazione:', error);
    }
  };

  // Controllo dei dati di registrazione
  const handleCheck = async () => {
    try {
      console.log("clicked");
      const contractReg = getContract();
      
      // Ottieni gli indirizzi registrati
      let stringaRegAddress = await contractReg.getAddressesByRegistration(inputValue);
      setRegAddress(stringaRegAddress);
      
      for (let i = 0; i < stringaRegAddress.length; i++) {
        console.log(stringaRegAddress[i]);
      }
      
      // Ottieni il numero totale di NFT
      let stringaTotalNFTsByRegistration = JSON.stringify(
        await contractReg.totalNFTsByRegistration(inputValue)
      );
      
      let arrayJson = stringaTotalNFTsByRegistration.split('"');
      let totalGBCC = arrayJson[7];
      
      // Prepara i dati per il popup
      const data = {
        totalNFTsByRegistration: hexToDecimal(totalGBCC),
        regAddress: stringaRegAddress,
      };
      
      setTotalNFTsByRegistration(hexToDecimal(totalGBCC));
      setPopupData(data);
      setShowPopup(true);
    } catch (error) {
      console.error('Errore durante la transazione:', error);
    }
  };

  // Controllo iniziale della connessione
  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <Container>
      <CenteredContainer>
        <WalletButton onClick={connectWallet} isConnected={isConnected}>
          {isConnected ? 'Connected' : 'Connect Wallet'}
        </WalletButton>
      


        <WalletAddress>{walletAddress}</WalletAddress>

        {isConnected ? (
          <>
            <Title>Insert your Telegram ID</Title>
            
            <InputDiv>
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                autoFocus
              />
            </InputDiv>

            <br />
            
            <ContainerButton>
              <Button onClick={handleClickSubmit}>Submit</Button>
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

            <Response id="response"></Response>
          </>
        ) : (
          <Title>Please connect your wallet</Title>
        )}
      </CenteredContainer>
    </Container>
  );
}

export default Add;