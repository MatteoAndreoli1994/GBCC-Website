import React from 'react';
import styled from 'styled-components';
import Pancake from '../../assets/social-media-icons/pancakeswap-cake-logo.svg';
import Gitbook from '../../assets/social-media-icons/gitbook.png';
import Coin from '../../assets/social-media-icons/coin.png';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: flex-start;
  justify-content: space-between;
  opacity: 0.9;



  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
      margin-top: 10px;

  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
 

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.1;
  font-family: 'Plus Jakarta Sans', sans-serif;





  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: white;
  margin-top: 10px;
  line-height: 1.5;

  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const IconButton = styled.a`
  width: 40px;
  height: 40px;
  background-color: #dbbcfe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 0 #9c73cc;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #8a4fe8;
    transform: translateY(-2px);
    box-shadow: 0 4px 0 #7f3bc2;
  }

  &:active {
    background-color: #7f3bc2;
    transform: translateY(2px);
    box-shadow: 0 2px 0 #6b1b9c;
  }
`;

const PancakeImage = styled.img`
  width: 50%;
`;

const GitbookImage = styled.img`
  width: 50%;
`;

export function CoinDescription() {
  return (
    <Container>
      <Content>
        <Title>$GBCC</Title>
        <Description>
        Game Boyz Color Coin is the main currency of the GBCC ecosystem. It’s a fun mix of meme coin vibes and real value, rewarding NFT holders, gamers, and traders. Earn $GBCC through games, contests, and activity in the community. Use it for payments, future collections, and cool tools. Plus, small transaction fees help grow the treasury and reward our active members.
        </Description>
        <ButtonContainer>
          <IconButton href="https://pancakeswap.finance/?outputCurrency=0x3580F19068a264548D6816BDE5942693Eed95dc1" target="_blank" rel="noopener noreferrer">
            <PancakeImage src={Pancake} alt="PancakeSwap" />
          </IconButton>
          <IconButton href="https://gbcc-deployer.gitbook.io/game-boyz-color-club/usdgbcc-token" target="_blank" rel="noopener noreferrer">
            <GitbookImage src={Gitbook} alt="GitBook" />
          </IconButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
