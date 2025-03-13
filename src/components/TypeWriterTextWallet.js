import React, { useState } from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';

import WalletAbi from './../WalletAbi.json';
import TokensContract from './../TokensContract.json';

// Contract addresses
const PaymentAddress = "0x9cAc83f10Be40C1038092c3c02892F33b396b386";
const TokenAddress = "0x3580F19068a264548D6816BDE5942693Eed95dc1";

// Styled Components
const Title = styled.h2`
  font-size: 20px;
  font-weight: 900;
  width: 100%;
  display: flex;
  color: black;
`;

const Title2 = styled.h2`
  font-size: 14px;
  line-height: 1;
  font-weight: 900;
  width: 100%;
  display: flex;
  margin-top: 1%;
  color: black;
`;

const SubTitle2 = styled.h2`
  font-size: 18px; 
  line-height: 1.5;
  text-align: center;
  color: black;
`;

const CenteredContainer = styled.div`
  width: 100%;
  min-height: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dbbcfd;
  color: black;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-top: 5%;

  

`;

const ButtonContainer = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
    flex-direction:column;
    margin-top:20px;
`;

const ButtonContainer2 = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  margin-top:10px;



`;

const TextBox = styled.input`
  width:100%;
  padding: 10px;

  border-radius: 20px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};

  font-size: 16px;




`;

const Sottotioli = styled.p`
  font-family: 'Poppins', 'Inter', sans-serif; /* More elegant fonts */
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  text-align: left;
  color: black; /* Elegant medium gray */
  font-weight: 500; /* Bold */
`;

const Btn2 = styled.div`
  display: inline-block;
  color: white;
  font-weight: 600; /* Medio-bold elegante */
  outline: none;
  border: none;
  font-size: 16px; /* Leggermente più grande */
  font-family: 'Inter', sans-serif; /* Font moderno e leggibile */
  text-align: center;
  margin: 1%;
  padding: 0.9rem 1rem;
  border-radius: 12px; /* Angoli morbidi */
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background-color: #9c7de0; /* Colore principale */
  box-shadow: 0 4px 12px rgba(156, 125, 224, 0.4); /* Ombra basata sul colore principale */

  /* Hover effect: un tono più scuro del principale */
  &:hover {
    background-color: #7a5bb3; /* Tono più scuro */
    box-shadow: 0 6px 16px rgba(122, 91, 179, 0.6); /* Ombra più intensa per profondità */
  }

  /* Click effect (active) */
  &:active {
    background-color: #624991; /* Ancora più scuro per "premuto" */
    box-shadow: 0 3px 8px rgba(98, 73, 145, 0.6); /* Ombra ridotta */
    transform: scale(0.98); /* Piccolo effetto pressione */
  }

  width: 90%;
  margin-top: 20px;
  margin-bottom: 10px;
`;




const SubTitle3 = styled.h3`
  font-size: 10px;
  line-height: 1;
  font-weight: 900;
  width: 130px;
  display: flex;
  margin-top: 5%;
  color: white;
  padding: 10px;
  justify-content: center;
  background-color: #4EA5D9;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  margin-left: 2%;
`;

const SubTitle4 = styled.h3`
  font-size: 10px;
  line-height: 1;
  font-weight: 900;
  width: 50px;
  display: flex;
  margin-top: 5%;
  padding: 10px;
  justify-content: center;
  background-color: #5700EF;
  color: #fff;
  border-radius: 10px;
  text-align: center;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
`;

export const TypeWriterText = () => {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState('');
  const [tgId, setId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isApproved, setIsApproved] = useState(false);

  const validateAmount = (value) => {
    if (parseFloat(value) > 2000) {
      setError(true);
      setErrorMessage('Please enter an amount less than or equal to 2000 GBCC.');
      return false;
    }
    setError(false);
    setErrorMessage('');
    return true;
  };

  async function handleDepositClick() {
    if (!validateAmount(amount)) return;
    
    setIsLoading(true);

    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(PaymentAddress, WalletAbi, signer);

        const response = await contract.deposit(ethers.utils.parseEther(amount), tgId);
        console.log("Transaction response:", response);
      }
    } catch (err) {
      console.error("Error:", err);
      setErrorMessage(err.message || 'Transaction failed. Please try again.');
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleApproveClick() {
    if (!validateAmount(amount)) return;
    
    setIsLoading(true);

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(TokenAddress, TokensContract, signer);
      
      const approvalTx = await tokenContract.approveMax(PaymentAddress);
      await approvalTx.wait();
      setIsApproved(true);
      console.log("Approval transaction response:", approvalTx);
    } catch (err) {
      console.error("Error:", err);
      setErrorMessage(err.message || 'Approval failed. Please try again.');
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Title>GBCC Wallet</Title>
      <Title2>Deposit</Title2>

      <Info>
        <SubTitle4>Beta</SubTitle4>
        <SubTitle3>Deposit Fees 5%</SubTitle3>
      </Info>

      <CenteredContainer>
        {isConnected ? (
          <>
            <ButtonContainer2>
              <Sottotioli>Amount</Sottotioli>
              <TextBox
                type="text"
                placeholder="$GBCC"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                error={error}
              />

              
            </ButtonContainer2>

            <ButtonContainer>
            <Sottotioli>Telegram ID</Sottotioli>
              <TextBox
                type="text"
                placeholder="ID"
                value={tgId}
                onChange={(e) => setId(e.target.value)}
              />
            </ButtonContainer>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            
              {!isApproved ? (
                <Btn2 onClick={handleApproveClick} disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Approve'}
                </Btn2>
              ) : (
                <Btn2 onClick={handleDepositClick} disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Deposit'}
                </Btn2>
              )}
            
          </>
        ) : (
          <SubTitle2>Connect Your Wallet!</SubTitle2>
        )}
      </CenteredContainer>
    </>
  );
};

export default TypeWriterText;
