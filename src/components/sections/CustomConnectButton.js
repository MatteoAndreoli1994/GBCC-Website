import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styled from 'styled-components';

// Wrapper per il pulsante personalizzato
const CustomButtonWrapper = styled.div`
  button {
    background-color: white; /* Verde */

    color: black;
    padding: 12px 24px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: white;
      transform: scale(1.05);
    }

    &:focus {
      outline: none;
    }
  }
`;

// Componente del pulsante di connessione personalizzato
const CustomConnectButton = () => (
  <CustomButtonWrapper>
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        if (!ready) {
          return (
            <button onClick={openConnectModal} type="button">
              Connect Wallet
            </button>
          );
        }

        if (!connected) {
          return (
            <button onClick={openConnectModal} type="button">
              Connect Wallet
            </button>
          );
        }

        if (chain.unsupported) {
          return (
            <button onClick={openChainModal} type="button">
              Wrong Network
            </button>
          );
        }

        return (
          <button onClick={openAccountModal} type="button">
            {account.displayName}
          </button>
        );
      }}
    </ConnectButton.Custom>
  </CustomButtonWrapper>
);

export default CustomConnectButton;
