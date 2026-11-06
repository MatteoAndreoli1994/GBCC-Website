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
  display: flex;
  flex-direction: column;
  justify-content: center;




`;

const MainContainer = styled.div`
  width: 100%;
  padding: 0 3%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;




`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  height: 100%;
  align-items: center;



  @media (max-width: 1023px) {
    min-height: calc(100vh - 13vh);
    padding-bottom: 4rem;
  }

  @media (max-width: 414px) {
 
 
  }

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



  @media (max-width: 1023px) {
    padding: 0 1rem;
  }

  @media (min-width: 1024px) {
    order: 1;
    padding-right: 2rem;
    text-align: left;
  
  }

  @media (max-width: 320px) {
  width:100%;

      padding: 0rem;
  }

`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
  display: none;
  font-family: 'inter';

  @media (min-width: 1024px) {
    font-size: 4.5rem;
    display: block;
  }
`;

const Title2 = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 1;
  font-family: 'inter';


  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 3.5rem;
  }
    
  @media (min-width: 1024px) {
    display: none;
  }

    @media (max-width: 320px) {
  font-size: 32px;
  }


`;

const Description = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 32rem;
  margin: 0 auto;
  font-family: inter;
  font-weight: 300;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.35rem;
    line-height: 1.4;
    max-width: 36rem;
  }

  @media (min-width: 1024px) {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  @media (max-width: 320px) {
  width:100%;

  font-size:16px;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 0rem;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }

    @media (max-width: 320px) {
  gap: 1rem;
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


  @media (max-width: 320px){
  height: 3rem;

  }
`;

const Divider = styled.div`
  width: 1px;
  height: 2rem;
  background: rgba(255, 255, 255, 0.2);



`;

const ImageSection = styled.div`
  order: 1;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;




  @media (max-width: 1023px) {
    padding: 0;
    
  }

  @media (min-width: 1024px) {
    order: 2;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    max-width: 80%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 65%;
  }

  @media (min-width: 1024px) {
    max-height: calc(87vh - 6rem);
    aspect-ratio: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (min-width: 1024px) {
    max-width: 600px;
  }

    @media (max-height: 750px) {
    max-width: 500px;
  }

      @media (max-height: 700px) {
    max-width: 400px;
  }
`;

const Img1 = styled.img`
  width: 55px;
  height: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    width: 40px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50px;
  }

  @media (max-width: 320px){


  }
`;

const Img2 = styled.img`
  width: 100px;
  height: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    width: 85px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 95px;
  }
`;

const Img3 = styled.img`
  width: 80px;
  height: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    width: 65px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 75px;
  }
`;

const ProfileButton = styled.div`
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
  z-index: 9999;
`;

const ProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, #a855f7, #6366f1);
  border-radius: 9999px;
  flex-shrink: 0;
  background-image: url(${Image4});
  background-size: cover;
  background-position: center;
`;

const ProfileInfo = styled.div`
  color: black;
  padding-right: 0.75rem;
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
              Collect, earn <br />and have fun.
            </Title>

            <Title2>
              Collect, earn and have fun.
            </Title2>
            
            <Description>
              Meet a very special group of tiny cute Game Boyz Nfts. Trade, collect, and play in a dynamic gaming ecosystem where the adventure never ends!
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

        <ProfileButton>
          <ProfileImage />
          <ProfileInfo>
            <ProfileRole>Created By</ProfileRole>
            <ProfileName>Matteo</ProfileName>
          </ProfileInfo>
        </ProfileButton>
      </MainContainer>
    </Container>
  );
}

export default Home;