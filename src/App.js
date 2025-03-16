import './App.css';
import { useState } from 'react';
import * as React from "react";
import * as ReactDOM from "react-dom/client";


import styled, { keyframes } from "styled-components";
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/GlobalStyles"
import { light } from "./styles/Themes"


import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Token from "./components/sections/Token";

import Social from "./components/sections/Social";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import '@rainbow-me/rainbowkit/styles.css'; 

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

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  trustWallet,
  ledgerWallet
} from '@rainbow-me/rainbowkit/wallets';


import Marquee from './components/sections/Marquee';

const BgSito = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(110deg, #3b82f6, #ec4899);
  background-attachment: fixed;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh; /* Mantiene il contenuto in tutta la viewport */
  overflow: auto;
`;





const Binance: Chain = {
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
    default: { name: 'SnowTrace', url: 'https://bscscan.com' },
    etherscan: { name: 'SnowTrace', url: 'https://bscscan.com' },
  },
  testnet: false,
};

const { provider, chains } = configureChains(
  [Binance],
  [jsonRpcProvider({ rpc: chain => ({ http: "https://bsc-dataseed.binance.org/" }) })]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      trustWallet({ chains }),
    ],
  },
  {
    groupName: 'Others',
    wallets: [
      coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
      walletConnectWallet({ chains }),
      trustWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
});

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains} 
        theme={darkTheme({
          accentColor: '#5700EF',
          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
      >
        <GlobalStyles />
        <BgSito /> {/* Background fisso */}
        <ContentWrapper>
          <ThemeProvider theme={light}>
            <Navigation accounts={accounts} setAccounts={setAccounts} />
            <Home />
        
            <About />
            <Marquee/>
            <Token />

     



            <Social />
            <Footer />
          </ThemeProvider>
        </ContentWrapper>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

