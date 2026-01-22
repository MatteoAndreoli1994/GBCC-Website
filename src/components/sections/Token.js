import React from 'react';
import styled from 'styled-components';
import { CoinDescription } from './CoinDescription.jsx';
import LogoGBCC from '../../assets/social-media-icons/logo_colore.svg';
import line from '../Images/line.jpg'
import LogoLine from '../Images/logo_line5.png'

// Sfuma molto l'immagine di sfondo sopra e sotto usando gradient mask
const Section = styled.section`
  min-height: 0;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  padding: 4rem 0 0 0;

  /* Aggiungi margini sopra/sotto tranne che su desktop wide */
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 1200px) {
    padding-top: 3rem;
  }

  @media (max-width: 1024px) {
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1.7rem;
  }

  @media (max-width: 900px) {
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1.1rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.6rem;
    margin-bottom: 0.7rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: 
      linear-gradient(
        to bottom,
        rgba(25, 25, 45, 0.06) 0%,
        rgba(25, 25, 45, 0.03) 20%,
        rgba(25, 25, 45, 0.02) 60%,
        rgba(25, 25, 45, 0.04) 100%
      ),
      url(${line}) center center / cover no-repeat;
    opacity: 0.1;

    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 12%,
      black 24%,
      black 76%,
      rgba(0, 0, 0, 0.3) 88%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 12%,
      black 24%,
      black 76%,
      rgba(0, 0, 0, 0.3) 88%,
      transparent 100%
    );
  }
`;

// Riduci spaziatura sotto il titolo per avvicinarlo ai box
const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.05;
  text-align: center;
  margin-bottom: 0.25rem;
  margin-top: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 2.3rem;
    margin-bottom: 0px;
    margin-top: 0.3rem;
  }

  @media (max-width: 968px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0px;
    margin-top: 0.2rem;
  }
`;

const Container = styled.div`
  width: 94%;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 0 0 0;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0.5rem 0 0 0;
  }

  @media (max-width: 414px) {
    width: 95%;
  }
`;

const BoxesContainer = styled.div`
  margin-top: 0.2rem; /* Riduci spaziatura sopra i box */
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  gap: 1.4rem;

  @media (max-width: 1024px) {
    gap: 1.1rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.2rem;
    flex-direction: column;
    gap: 0.6rem;
    align-items: center; /* Center horizontally the boxes */
  }
`;

const BoxBase = styled.div`
  flex: 1;
  display: flex;
  border-radius: 12px;
  min-height: 320px;
  align-items: center;
  justify-content: center;

  transition: box-shadow 0.18s;
  position: relative;

  @media (max-width: 1024px) {
    min-height: 220px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 160px;
  }
`;

const Box = styled(BoxBase)`
  margin-right: 0;
`;

const BoxRight = styled(BoxBase)`
  margin-left: 0;
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
    align-items: flex-start;
    justify-content: center;
  }
`;

const LogoImmagineGrande = styled.img`
  width: 70%;
  height: 100%;
  object-fit: contain;
  object-position: center right;
  display: block;
  max-width: 100%;
  max-height: 85vh;
  min-width: 0;
  min-height: 0;
  margin-bottom: 0;

  @media (min-width: 1200px) {
    height: 70vh;
    width: 70%;
    max-width: 100%;
  }
  @media (max-width: 1024px) {
    height: 36vw;
    max-height: 55vh;
    width: 100%;
  }
  @media (max-width: 768px) {
    height: auto;
    max-height: none;
    width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
    display: block;

  }
  @media (max-width: 480px) {
    width: 95vw;
    max-width: 95vw;
    margin: 0 auto;
  }
`;

const InnerBox = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: none;
  padding: 0.5rem 0 0 0;

  @media (max-width: 768px) {
    min-height: unset;
    padding: 0.1rem 0 0 0;
  }
`;

// Per spostare più vicino la PNG alla scritta su mobile, wrapper apposito
const MobileImageWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 0.4rem;
    margin-bottom: 0;
  }
`;


export const Token = () => {
  return (
    <Section id="token">
      <Container>
        {/*<LogoImmagine src={LogoGBCC} alt="Logo GBCC" />*/}
        <Title>L-NE</Title>
        <BoxesContainer>
          <Box>
            <InnerBox>
              <CoinDescription />
            </InnerBox>
          </Box>
          <BoxRight>
            <InnerBox>
              <LogoImmagineGrande
                src={LogoLine}
                alt="Logo Line"
                style={{
                  display: 'block'
                }}
                className="desktop-image"
              />
            </InnerBox>
          </BoxRight>
        </BoxesContainer>
      </Container>
    </Section>
  );
};

export default Token;