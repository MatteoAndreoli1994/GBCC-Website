import logo from './logo.svg';
import Add from "./Add";
import './App.css';
import styled from "styled-components";
import EthLogo from"./Immagini/eth.png"

import GameBoyzColorClubTestFinal from "./abi.json";
import { useState, useEffect } from "react";
import { ethers, BigNumber} from 'ethers';
import { useContractRead } from 'wagmi'
import Logo from "./Immagini/logo.png"
//Connettiamoci Adesso!

import '@rainbow-me/rainbowkit/styles.css'; 
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  trustWallet,
  ledgerWallet
} from '@rainbow-me/rainbowkit/wallets';

//MINT
import { useAccount, usePrepareContractWrite, useContractWrite} from 'wagmi';

const Ethereum: Chain = {
  id: 56,
  name: 'Smart Chain',
  network: 'Smart Chain',
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org/',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://testnet.bscscan.com' },
    etherscan: { name: 'SnowTrace', url: 'https://testnet.bscscan.com' },
  },
  testnet: false,
};

const { provider, chains } = configureChains(
  [Ethereum],
  [jsonRpcProvider({ rpc: chain => ({ http: "https://bsc-dataseed.binance.org/" }) })]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      trustWallet({ chains}),
    ],
  },
  {
    groupName: 'Others',
    wallets: [
      coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
      walletConnectWallet({ chains }),
      trustWallet({ chains}),
      ledgerWallet({ chains}),
      
    ],
  },
]);

const client = createClient({
  autoConnect: true,
  connectors,
  provider
})

//Minted




function App() {
    const { isConnected } = useAccount();
    const [supplyData, setSupplyData] = useState(0);

    const addressContract = "0xeCB31776F25203a02565d9cda2F7a4531dC02D5C";
    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
    const contract = new ethers.Contract(addressContract, GameBoyzColorClubTestFinal, provider);
    const hexToDecimal = hex => parseInt(hex, 16);
    const { address, connector } = useAccount();

      //accorcia stringa
      function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
      };
    


      // Funzione per reindirizzare alla pagina web
      const handleImageClick = () => {
        window.location.href = "https://gameboyzcolorclub.com/";
      };

    

      
   
    const Section = styled.div`

    width:100%;
    min-height:100vh;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    
    display:flex;

    flex-direction:column;


    `


    const Content = styled.div`


      width:100%;
      min-height:100%;


      top:10%;
      flex-direction:column;
      justify-content:top;
      align-items:center;
      display:flex;
      COLOR:BLACK;


    `
    const ImmagineLogo = styled.img`
    width: 250px;
    display: flex;
    align-items:center;

    &:hover {
      transform: scale(1.1); /* Ingrandisci l'immagine del 10% al passaggio del mouse */
      cursor: pointer; /* Cambia il cursore al passaggio del mouse per indicare la possibilità di cliccare */
    }

    @media (max-width: 80em){
      width: 150px;

      }

    @media (max-width: 40em){
      width: 130px;

      }
    `

    const Container = styled.div`
      

      width:70vw;
      align-items:center;
      flex-direction:column;

      display:flex;
    `
    const Navbar = styled.div`

    min-height: 15vh;
      width:90vw;
      align-items:center;

      justify-content:space-between;
      display:flex;
    `

    const CustomConnectButton = styled.div`

    

font-size: 100%; /* Imposta la dimensione del testo desiderata */
display:flex;
justify-content:center;

@media (max-width: 40em){
  font-size: 60%;

  }
    `




  return (

    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <div className="App">
          <header className="App-header">
          <Section>
          
          
          <Content>
            <Container>
              
              <Navbar>          <ImmagineLogo src={Logo} onClick={handleImageClick}/>                    
              <CustomConnectButton><ConnectButton/></CustomConnectButton>
              
              </Navbar>
              <Add/>


              

              
            </Container>
            
          </Content>
            



          </Section>
          </header>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>

  );
}

export default App;
