import React from 'react';
import { Dice1 as GamingDice } from 'lucide-react';
import styled from 'styled-components';
import GBCC from '../../assets/nfts/homegbcc.png';
import Image1 from '../../assets/social-media-icons/Rareboard.png';
import Image2 from '../../assets/social-media-icons/bit5.svg';
import Image3 from '../../assets/social-media-icons/me.png';
import Image4 from '../../assets/social-media-icons/controlcenter.png';


const Container = styled.div`
  min-height: calc(100vh - 13vh);
  margin-top: 13vh;
  width: 100%;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3%;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  height: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  order: 2;
  text-align: center;

  @media (min-width: 1024px) {
    order: 1;
    padding-right: 2rem;
    text-align: left;
    padding-top: 20%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
  display: none;
  font-family: 'test'; /* Usa il font Acorn direttamente */

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 968px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
    display: block;
  }
`;

const Title2 = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
    
  @media (min-width: 1024px) {
    display: none;
    font-size: 3.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 32rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.3;
  }

  @media (min-width: 1024px) {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;


  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const LogoBox = styled.div`
  width: auto;
  height: 5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 1px;
  height: 2rem;
  background: rgba(255, 255, 255, 0.2);
`;

const ImageSection = styled.div`
  order: 1;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    order: 2;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-height: calc(87vh - 6rem);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 40%;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Img1 = styled.img`
  width: 55px;
  height: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

const Img2 = styled.img`
  width: 100px;
  height: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 85px;
  }
`;

const Img3 = styled.img`
  width: 80px;
  height: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 65px;
  }
`;

// ProfileButton migliorato con animazioni hover e click
const ProfileButton = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 3%;
  background: white;
  border-radius: 9999px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 9999; /* Rendere il bottone davanti a tutto */
  
  /* Animazione hover */
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.2);
    background: #f8f8f8;
  }
  
  /* Animazione click */
  &:active {
    transform: scale(0.95);
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.15);
  }
`;

// Animazione dell'immagine del profilo
const ProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, #a855f7, #6366f1);
  border-radius: 9999px;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  background-image: url(${Image4});
  background-size: cover;
  background-position: center;
  
  ${ProfileButton}:hover & {
    transform: rotate(10deg);
  }
`;

const ProfileInfo = styled.div`
  color: black;
  padding-right: 0.75rem;
  transition: transform 0.2s ease;
  
  ${ProfileButton}:hover & {
    transform: translateX(2px);
  }
`;

const ProfileName = styled.div`
  font-weight: bold;
`;

const ProfileRole = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

function Home() {
  return (
    <Container id="Home">
      <MainContainer>
        <Grid>
          <TextSection>
            <Title>
              Collect, earn <br></br>and have fun.
            </Title>

            <Title2>
              Collect, earn and have fun.
            </Title2>
            
            <Description>
              Meet a very special group of tiny cute Game Boyz Nfts. Trade, collect, and play in a dynamic gaming ecosystem where the adventure never ends!<br></br>Discover the collection.
            </Description>

            <LogosContainer>
              <LogoBox>
                <a href="https://www.rareboard.com/game-boyz-color-club"><Img1 src={Image1} alt="Image1" /></a>
              </LogoBox>
              <Divider />
              <LogoBox>
              <a href="https://bit5.com/collection/0x38/gameboyzcolorclub"><Img2 src={Image2} alt="Image2" /></a>
              </LogoBox>
              <Divider />
              <LogoBox>
                <a href="https://magiceden.io/collections/bsc/0xc905f638914eaae6a157cca89341d888289f47b9"><Img3 src={Image3} alt="Image3" /></a>
              </LogoBox>
            </LogosContainer>
          </TextSection>

          <ImageSection>
            <ImageContainer>
              <Image 
                src={GBCC}
                alt="Gameboy"
              />
            </ImageContainer>
          </ImageSection>
        </Grid>

        {/* Modificato da div a tag <a> con href verso X.com */}
        <ProfileButton href="https://x.com/Matteo01273732" target="_blank" rel="noopener noreferrer">
          <ProfileImage />
          <ProfileInfo>
            <ProfileName>matteo.lab</ProfileName>
            <ProfileRole>Founder</ProfileRole>
          </ProfileInfo>
        </ProfileButton>
      </MainContainer>
    </Container>
  );
}

export default Home;