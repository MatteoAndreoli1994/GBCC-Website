import React from 'react';
import { Info } from 'lucide-react';
import styled from 'styled-components';
import Game from '../../assets/elements/thread.png';

const Container = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media (max-width: 1024px) {
  min-height: auto;

  }
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

    @media (max-width: 414px) {

     gap: 0rem;

       width: 95%;
  }
`;

const ImageSection = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
  border-radius: 8px;
  
  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    height: 400px;
  }
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  transition: transform 0.4s ease;

  &:hover {
    transform: translate(-50%, -50%) rotate(0deg) scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 0 1rem;
    align-items: flex-start;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 100%;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    max-width: 32rem;
  }
      @media (max-width: 320px) {
  width:100%;

  font-size:16px;
  }
`;

const Button = styled.button`
  background: white;
  color: #9b59b6;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    padding: 0.875rem 2rem;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <ContentWrapper>
        <ImageSection>
          <Image
            src={Game}
            alt="Workspace"
          />
        </ImageSection>
        <ContentSection>
          <Title>Our Vision</Title>
          <Description>
          Game Boyz Color Club is a NFT collection of 2222 unique digital collectibles on the Binance Smart Chain. Each NFT will allow you to get involved in our fantastic journey! Meet our community and get access to special privileges such as games, reward systems, future projects and collections from our ecosystem!
          </Description>
          <a href="https://game-boyz-color-club.gitbook.io/game-boyz-color-club-docs">
            <Button>
              <Info size={20} />
              Learn More
            </Button>
          </a>
        </ContentSection>
      </ContentWrapper>
    </Container>
  );
};

export default About;