import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { WalletWidget } from './WalletWidget.jsx';
import { CoinDescription } from './CoinDescription.jsx';
import LogoGBCC from '../../assets/social-media-icons/logo_colore.svg';


const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 1rem 0;


  @media (max-width: 1024px) {
  min-height: auto;

  }
`;

const Title = styled.h1`
  font-size: 4.5rem; /* Dimensione di base per schermi grandi */
  font-weight: bold;
  line-height: 1;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 3rem;
      margin-bottom: 0px;
  }

  @media (max-width: 968px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;



const Container = styled.div`
  width: 94%;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  
  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem 0;
  }

    @media (max-width: 414px) {

    width: 95%;


  }
`;

const BoxesContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;

  
  @media (max-width: 1024px) {
    gap: 1.5rem;

  }
  
  @media (max-width: 768px) {
      margin-top: 0rem;
    flex-direction: column;
    gap: 3rem;
  }


`;

const Box = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
  position: relative;

  
  @media (max-width: 768px) {
    width: 100%;
  }


`;

const BoxRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* Modificato da flex-end a center */
  align-items: center; /* Modificato da flex-start a center */
  position: relative;

  border-radius: 10px; /* Aggiunto per migliorare l'estetica */
  padding: 1rem; /* Aggiunto per dare spazio interno */
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const InnerBox = styled.div`
  width: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center; /* Aggiunto per centrare il contenuto */


  @media (max-width: 768px) {
    justify-content: center;
  
  }
`;

const LogoImmagine = styled.img`
  width: 400px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
  
  @media (max-width: 1024px) {
    width: 350px;
  }
  
  @media (max-width: 768px) {
    width: 280px;
  }
  
  @media (max-width: 480px) {
    width: 220px;
  }
`;

export const Token = () => {
  const [lineProps, setLineProps] = useState({
    startX: 0,
    startY: 0,
    width: 0,
    angle: 0,
  });
  
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  
  useEffect(() => {
    const updateLineProps = () => {
      if (box2Ref.current && box3Ref.current) {
        const box2Rect = box2Ref.current.getBoundingClientRect();
        const box3Rect = box3Ref.current.getBoundingClientRect();
        
        // Calculate the center of Box 2 and Box 3
        const centerX1 = box2Rect.left + box2Rect.width / 2;
        const centerY1 = box2Rect.top + box2Rect.height / 2;
        const centerX2 = box3Rect.left + box3Rect.width / 2;
        const centerY2 = box3Rect.top + box3Rect.height / 2;
        
        // Calculate the distance and angle between the centers of the two boxes
        const dx = centerX2 - centerX1;
        const dy = centerY2 - centerY1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radian to degree
        
        setLineProps({
          startX: centerX1,
          startY: centerY1,
          width: distance,
          angle: angle,
        });
      }
    };
    
    // Iniziale calcolo
    updateLineProps();
    
    // Aggiornamento al ridimensionamento della finestra
    window.addEventListener('resize', updateLineProps);
    
    return () => {
      window.removeEventListener('resize', updateLineProps);
    };
  }, []);
  
  return (
    <Section    id="token">
      <Container>
      {/*<LogoImmagine src={LogoGBCC} alt="Logo GBCC" />*/ }  

      <Title>Game Boyz Color Coin</Title>

        <BoxesContainer>
          <Box ref={box2Ref}>
            <InnerBox>
              <CoinDescription />
            </InnerBox>
          </Box>
          <BoxRight ref={box3Ref}>
            <InnerBox>
              <WalletWidget />
            </InnerBox>
          </BoxRight>
        </BoxesContainer>
      </Container>
    </Section>
  );
};

export default Token;