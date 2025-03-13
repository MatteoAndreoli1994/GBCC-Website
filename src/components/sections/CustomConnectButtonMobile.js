import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styled from 'styled-components';

// Wrapper per il pulsante personalizzato
const CustomButtonWrapper = styled.div`
  button {
    background-color: transparent; 

    color: black;

    border: none;

  font-size: 22px;
  font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: transparent;

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
              CONNECT WALLET
            </button>
          );
        }

        if (!connected) {
          return (
            <button onClick={openConnectModal} type="button">
              CONNECT WALLET
            </button>
          );
        }

        if (chain.unsupported) {
          return (
            <button onClick={openChainModal} type="button">
              CONNECTED (WRONG NETWORK)
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
