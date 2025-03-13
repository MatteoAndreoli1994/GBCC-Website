import React, { useState } from 'react';
import { Rainbow } from 'lucide-react';
import styled from 'styled-components';
import Image4 from '../../assets/social-media-icons/wallet.jpg';
import GbccWallet from "../../components/sections/GbccWallet";

const Container = styled.div`


  max-width: 350px; /* Aumentato da 360px */

  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  background-color: #e6d4f1;
  border-radius: 36px; /* Aumentato */
  padding: 36px; /* Aumentato */
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  margin-top:30px;
`;

const AppIcon = styled.div`
  position: absolute;
  left: 36px; /* Aumentato */
  top: -30px; /* Aumentato */
  width: 60px; /* Aumentato */
  height: 60px; /* Aumentato */
  background-image: #0052FF;
  border-radius: 18px; /* Aumentato */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.2);

background-image: url(${Image4});
background-size: cover;
background-position: center;
`;

const Content = styled.div`
  margin-top:10px;
  display: flex;
  flex-direction: column;
  gap: 1.75rem; /* Aumentato */
  align-items: flex-start;
  width: 100%;
  height: 100%;
  justify-content: flex-start;



`;





export function WalletWidget({ onDeposit = () => {} }) {

  return (
    <Container>
      <Card>
        <AppIcon>
      
        </AppIcon>

        <Content>
          <GbccWallet/>
        </Content>
      </Card>
    </Container>
  );
}
