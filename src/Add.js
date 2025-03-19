import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "@fontsource/press-start-2p";
import backgImage from "./Immagini2/backg.gif";
import InputImage from "./Immagini2/input.png";
import { RainbowKitProvider, ConnectButton, connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  trustWallet,
  ledgerWallet
} from "@rainbow-me/rainbowkit/wallets";
import { createClient, configureChains, WagmiConfig, useAccount } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { ethers } from "ethers";
import Contratto from "./Contract.json";

// Definizione manuale della Binance Smart Chain (BSC) rinominata in bnbChain
const bnbChain = {
  id: 56,
  name: "Binance Smart Chain",
  network: "bnb",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://bsc-dataseed.binance.org/",
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://bscscan.com" },
  },
  testnet: false,
};

const { chains, provider } = configureChains([bnbChain], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      trustWallet({ chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      coinbaseWallet({ chains, appName: "My RainbowKit App" }),
      walletConnectWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// Animazione rainbow per il titolo
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
  font-family: "Press Start 2P", cursive;
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;



  flex-direction:column;
`;

const CenteredContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;



`;

const Title = styled.h1`
  font-size: 36px;
 
  animation: ${rainbow} 3s linear infinite;

  @media (max-width: 64em) { font-size: 30px; }
  @media (max-width: 40em) { font-size: 28px; }
  @media (max-width: 36em) { font-size: 27px; }
  @media (max-width: 30em) {
    margin-top: 40vh;
    font-size: 20px;
  }
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
  width: 300px;
  padding: 10px;
  margin: 20px 0;
  font-family: "Press Start 2P", cursive;
  font-size: 16px;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const Button = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  font-family: "Press Start 2P", cursive;
  font-size: 16px;
  cursor: pointer;
  margin: 0 1rem;

  &:hover {
    background-color: #ff3333;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top:1%;
`;
const ContainerButton2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  width: 90%; 
  max-width: 600px; 
  margin: 10px auto;

  font-size: clamp(14px, 4vw, 18px);
  font-weight: 600;
  line-height: 1.4;
  color: black;

  @media (max-width: 480px) {
    font-size: 12px;
  }
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
  min-width: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;
// Stili per il popup
const Navbar = styled.div`
width:95%;
height:10%;


display:flex;

align-items:center;

justify-content:flex-end;
position: absolute;
top:0;


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
  margin: 20px auto 0;
  font-family: "Press Start 2P", cursive;
`;


function Add() {
  // Indirizzo del contratto
  const addressContractReg = "0x500ED91590a0339D1941e1b64D9D2eeD96D5c68c";

  // Stati
  const [inputValue, setInputValue] = useState("");
  const [popupData, setPopupData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [regAddress, setRegAddress] = useState([]);
  const [totalNFTsByRegistration, setTotalNFTsByRegistration] = useState();

  // Utilità: conversione da esadecimale a decimale
  const hexToDecimal = (hex) => parseInt(hex, 16);

  // Setup del provider e del contratto
  const getProvider = () =>
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const getSigner = () =>
    window.ethereum != null
      ? getProvider().getSigner()
      : ethers.providers.getDefaultProvider();

  const getContract = () => {
    const signer = getSigner();
    return new ethers.Contract(addressContractReg, Contratto, signer);
  };

  // Gestione dell'input
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  // Invio del Telegram ID
  const handleClickSubmit = async () => {
    try {
      const contractReg = getContract();
      await contractReg.registra(inputValue);
    } catch (error) {
      console.error("Errore durante la transazione:", error);
    }
  };

  // Controllo dei dati di registrazione
  const handleCheck = async () => {
    try {
      const contractReg = getContract();
      const stringaRegAddress = await contractReg.getAddressesByRegistration(inputValue);
      setRegAddress(stringaRegAddress);
      const stringaTotalNFTsByRegistration = JSON.stringify(
        await contractReg.totalNFTsByRegistration(inputValue)
      );
      const arrayJson = stringaTotalNFTsByRegistration.split('"');
      const totalGBCC = arrayJson[7];
      const data = {
        totalNFTsByRegistration: hexToDecimal(totalGBCC),
        regAddress: stringaRegAddress,
      };
      setTotalNFTsByRegistration(hexToDecimal(totalGBCC));
      setPopupData(data);
      setShowPopup(true);
    } catch (error) {
      console.error("Errore durante la transazione:", error);
    }
  };

  // Utilizziamo l'hook useAccount di wagmi per monitorare la connessione
  const { address, isConnected } = useAccount();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Container>
        <Navbar>
            <ConnectButton />
            </Navbar>
          
          <CenteredContainer>
            {/* Il ConnectButton di RainbowKit gestisce internamente la connessione */}

            
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
                <ContainerButton>
                  <Button onClick={handleClickSubmit}>Submit</Button>
                  <Button onClick={handleCheck}>Check</Button>
                </ContainerButton>
                <ContainerButton2>
                ⚠️To submit an address, you must have at least 1 GBCC Nft. <br/>
                💡Click Check to view all addresses associated with your ID.
                </ContainerButton2>
                {showPopup && (
                  <PopupContainer>
                    <PopupTitle>Popup Title</PopupTitle>
                    <PopupContent>
                      <p>Total GBCCs: {popupData.totalNFTsByRegistration}</p>
                      <p>Address:</p>
                      {popupData.regAddress.map((addr, index) => (
                        <div key={index}>
                          <p>{addr}</p>
                        </div>
                      ))}
                    </PopupContent>
                    <PopupCloseButton onClick={() => setShowPopup(false)}>
                      Close
                    </PopupCloseButton>
                  </PopupContainer>
                )}
                <Response id="response"></Response>
              </>
            ) : (
              <Title>Please connect your wallet</Title>
            )}
          </CenteredContainer>
        </Container>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default Add;
