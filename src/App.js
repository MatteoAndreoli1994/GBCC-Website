import './App.css';
import { useState } from 'react';
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import MainMint from "./MainMint";
import styled, { keyframes } from "styled-components";
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/GlobalStyles"
import { light } from "./styles/Themes"
import { dark } from "./styles/Themes"

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Social from "./components/sections/Social";
import RoadmapWithImage from "./components/sections/RoadmapWithImage";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Team2 from "./Team2";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Blog from './pages/BlockPages';
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

const BgSito = styled.div`
  background: linear-gradient(to bottom, #E56AB3, #F9A3CB);
  animation: stars 2s ease-out 5s forwards;
`;

const gradient = "linear-gradient(to bottom, #C76BAD, #DD2476)";

const stars = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20%);
  }
}`;

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
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#5700EF',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      })}>
        <GlobalStyles />
        <BgSito >
          <ThemeProvider theme={light}>
            <Navigation accounts={accounts} setAccounts={setAccounts}/>
            <Home />
            <About />
            <RoadmapWithImage />
            <Team2 accounts={accounts} setAccounts={setAccounts}/>
            <Team />
            <Faq />
            <Social />
            <Footer />
          </ThemeProvider>
        </BgSito>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
