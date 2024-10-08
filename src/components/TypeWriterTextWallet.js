import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bounce } from "react-awesome-reveal";
import { Fade } from 'react-awesome-reveal';
import Button from './Button';
import TwitterImg from "../assets/social-media-icons/twitter.png";
import TelegramImg from "../assets/social-media-icons/Telegram.png";
import OpenSeaImg from "../assets/social-media-icons/OpenSea.png";
import RareboardImg from "../assets/social-media-icons/Rareboard.png";
import NftKeyImg from "../assets/social-media-icons/NftKey.png";

import { useAccount } from 'wagmi';
import { ethers } from 'ethers';

import WalletAbi from './../WalletAbi.json';
import TokensContract from './../TokensContract.json';

//inserimento
const PaymentAddress = "0x9cAc83f10Be40C1038092c3c02892F33b396b386";
const TokenAddress = "0x3580F19068a264548D6816BDE5942693Eed95dc1";

const Telegram = styled.img`
  width: 35px;
  height: 35px;
`;

const Twitter = styled.img`
  width: 35px;
  height: 35px;
`;

const OpenSea = styled.img`
  width: 35px;
  height: 35px;
`;

const Title = styled.h2`
  font-size: 60px;
  line-height: 1;
  font-weight: 900;
  width: 100%;
  display: flex;
  margin-top: 1%;
  color: white;

  @media (max-width: 80em) {
    font-size: 60px;
  }
  @media (max-width: 60em) {
    font-size: 60px;
           display:none;
  }
  @media (max-width: 48em) {
    font-size: 55px;
  }
  @media (max-width: 40em) {
   
    br {

    }
    text-align: center;
    font-size: 40px;
  }
  @media (max-width: 30em) {
    br {

    }
    text-align: center;
    font-size: 35px;
  }
`;
const TitleMobile = styled.h2`
  font-size: 100px;
  line-height: 1;
  font-weight: 900;
  width: 100%;
  display: flex;
  margin-top: 1%;
  color: white;

  @media (max-width: 80em) {
    font-size: 80px;
  }
  @media (max-width: 64em) {
    font-size: 60px;
  }
  @media (max-width: 48em) {
    font-size: 55px;
  }
  @media (max-width: 40em) {

    br {

    }
    text-align: center;
    font-size: 40px;
  }
  @media (max-width: 30em) {
    br {

    }
    text-align: center;
    font-size: 35px;
  }
`;

const Title2 = styled.h2`
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
  width: 100%;
  display: flex;
  margin-top: 2.5%;
  color: white;

  @media (max-width: 80em) {
    font-size: 40px;
  }
  @media (max-width: 60em) {
    font-size: 60px;
           display:none;
  }
  @media (max-width: 48em) {
    font-size: 25px;
  }
  @media (max-width: 40em) {
      display:none;
    br {

    }
    text-align: center;
    font-size: 20px;
  }
  @media (max-width: 30em) {
    br {

    }
    text-align: center;
    font-size: 17px;
  }
`;


const Title2Mobile = styled.h2`
  font-size: 50px;
  line-height: 1;
  font-weight: 900;
  width: 100%;
  display: flex;
  margin-top: 2.5%;
  color: white;

  @media (max-width: 80em) {
    font-size: 40px;
  }
  @media (max-width: 64em) {
    font-size: 30px;
  }
  @media (max-width: 48em) {
    font-size: 25px;
  }
  @media (max-width: 40em) {
    br {

    }
    text-align: center;
    font-size: 20px;
  }
  @media (max-width: 30em) {
    br {

    }
    text-align: center;
    font-size: 17px;
  }
`;

const SubTitle2 = styled.h2`
  font-size: 25px;
  line-height: 1.5;
  font-weight: 900;
  width: 100%;


  display: flex;
  margin-top: 10.5%;
  color: white;
  padding: 100px;
  justify-content: center;
  background-color: azure;
  color: black;
  border-radius: 20px;
  border: 1px solid #ccc;

  @media (max-width: 80em) {
  font-size: 20px;
  }
  @media (max-width: 64em) {
  font-size: 10px;
    padding: 70px;
  }

  
  @media (max-width: 40em) {

    text-align: center;
    font-size: 15px;
  }
  @media (max-width: 30em) {

    text-align: center;
    font-size: 15px;

  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 2%;
  display: flex;
  align-items: center;

  @media (max-width: 60em) {
justify-content:center;
  }
`;

const ButtonContainer2 = styled.div`
  width: 100%;
  margin-top: 7%;
  display: flex;
  align-items: center;

  @media (max-width: 60em) {
justify-content:center;
  }
`;

const TextBox = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  margin-right: 10px;
  font-size: 16px;
  width: 200px;

    @media (max-width: 60em) {
  width: 150px;
  }
`;

const Sottotioli = styled.p`
  padding: 10px;
    font-family: 'Space Grotesk', sans-serif;
  margin-right: 10px;
  font-size: 16px;
  width: 200px;
      @media (max-width: 60em) {
  width: 150px;
  }
`;

const Btn = styled.div`
  display: inline-block;
  background-color: #5700ef;
  color: black;
  outline: none;
  border: none;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  color: white;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  padding: 0.9rem 2.3rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`;

const Btn2 = styled.div`
  display: inline-block;
  color: black;
  outline: none;
  border: none;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  color: white;
  justify-content: center;
  text-align: center;
  margin: 1%;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  margin-top: 20px;
`;

const Btn3 = styled.div`
  display: inline-block;
  color: black;
  outline: none;
  border: none;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  color: white;
  justify-content: center;
  text-align: center;
  margin: 1%;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const SubTitle3 = styled.h3`
  font-size: 20px;
  line-height: 1;
  font-weight: 900;
  width: 230px;
  display: flex;
  margin-top: 5%;
  color: white;
  padding: 10px;
  justify-content: center;
  background-color: #4EA5D9;
  color: #fff;
  border-radius: 10px;

  text-align: center;
  margin-left:2%;


  @media (max-width: 80em) {
    font-size: 18px;
  }
  @media (max-width: 64em) {
    font-size: 16px;
      width: 150px;
  }
  @media (max-width: 48em) {
    font-size: 14px;
  }
  @media (max-width: 40em) {
    font-size: 12px;
  }
  @media (max-width: 30em) {
    font-size: 10px;
  }
`;
const SubTitle4 = styled.h3`
  font-size: 20px;
  line-height: 1;
  font-weight: 900;
  width: 100px;
  display: flex;
  margin-top: 5%;

  padding: 10px;
  justify-content: center;
  background-color: #5700EF;
  color: #fff;
  border-radius: 10px;

  text-align: center;
  @media (max-width: 80em) {
    font-size: 18px;
  }
  @media (max-width: 64em) {
    font-size: 16px;
      width: 50px;
  }
  @media (max-width: 48em) {
    font-size: 14px;
  }
  @media (max-width: 40em) {
    font-size: 12px;
  }
  @media (max-width: 30em) {
    font-size: 10px;
  }
`;
const Info = styled.div`
width:100%;
display:flex;

align-items:center;
`;

export const TypeWriterText = () => {
  const [click, setClick] = useState(false);
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState('');
  const [tgId, setId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [providerMessage, setProviderMessage] = useState('');
  const [isApproved, setIsApproved] = useState(false);








  async function handleDepositClick() {
    if (parseFloat(amount) > 2000) {
      setError(true);
      setErrorMessage('Please enter an amount less than or equal to 2000 GBCC.');
      return;
    }

    setError(false);
    setErrorMessage('');
    setIsLoading(true);

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(PaymentAddress, WalletAbi, signer);


      try {
        const response = await contract.deposit(ethers.utils.parseEther(amount), tgId);
        console.log("Transaction response:", response);
      } catch (err) {
        console.error("Error:", err);
      }
    }

    setIsLoading(false);
  }


  async function handleApproveClick() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(TokenAddress, TokensContract, signer); // Assumi TokenAddress e TokenAbi corretti
    if (parseFloat(amount) > 200) {
      setError(true);
      setErrorMessage('Please enter an amount less than or equal to 200 GBCC.');
      return;
    }

    setError(false);
    setErrorMessage('');
    setIsLoading(true);

    try {
      const approvalTx = await tokenContract.approveMax(PaymentAddress);
      await approvalTx.wait(); // Attendere la conferma della transazione di approvazione
      setIsApproved(true); // Imposta isApproved a true dopo l'approvazione
      console.log("Transaction response:", approvalTx);
    } catch (err) {
      console.error("Error:", err);
    }

    setIsLoading(false);
  }
  


  return (
    <>
      <Title>GBCC Wallet</Title>
      <Title2>Deposit</Title2>

      <Info>      <SubTitle4>Beta</SubTitle4>
      <SubTitle3>Deposit Fees: 4%</SubTitle3></Info>





      {isConnected ? (
        <>
          <ButtonContainer2>
            <Sottotioli>Quantity</Sottotioli>
            <Sottotioli>Telegram ID</Sottotioli>
          </ButtonContainer2>

          <ButtonContainer>
            <TextBox
              type="text"
              placeholder="$TGBCC"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              error={error}
            />
            <TextBox
              type="text"
              placeholder="ID"
              value={tgId}
              onChange={(e) => setId(e.target.value)}
            />
          </ButtonContainer>

          {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}

          <div>


      {!isApproved && (
        <Btn2 onClick={handleApproveClick}>
          {isLoading ? 'Loading...' : 'Approve'}
        </Btn2>
      )}

      {isApproved && (
        <Btn2 onClick={handleDepositClick}>
          {isLoading ? 'Loading...' : 'Deposit'}
        </Btn2>
      )}

          </div>
        </>
      ) : (

        

        <SubTitle2>Connect Your Wallet!</SubTitle2>

      )}
    </>
  );
};

export default TypeWriterText;
