import React from 'react';
import styled from 'styled-components';
import Coin from '../../assets/marquee/coin.svg';
import Coin2 from '../../assets/marquee/coin2.png';
import Gym from '../../assets/marquee/gym.png';
import Wallet from '../../assets/marquee/wallet.png';
import Bsc from '../../assets/marquee/bsc.png';
import Skategbcc from '../../assets/marquee/skategbcc.png';

// Container for the entire marquee section
const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 35px 0;
`;

// Background images styling
const BackgroundImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

// Floating images styling with responsiveness
const FloatingImage = styled.img`
  position: absolute;
  opacity: 0.7;
  filter: blur(4px);

  &:nth-child(1) {
    top: 30%;
    left: 15%;
    width: 140px;
    height: auto;
  }
  &:nth-child(2) {
    top: 35%;
    left: 1%;
    width: 100px;
    height: auto;
  }
  &:nth-child(3) {
    top: 30%;
    right: 60%;
    width: 130px;
    height: auto;
  }
  &:nth-child(4) {
    bottom: 10%;
    right: 32%;
    width: 100px;
    height: auto;
  }
  &:nth-child(5) {
    top: 20%;
    left: 50%;
    width: 100px;
    height: auto;
    transform: translateX(-50%);
  }
  &:nth-child(6) {
    top: 10%;
    right: 0%;
    width: 130px;
    height: auto;
    transform: translateX(-50%);
  }

  @media (max-width: 1024px) {
    width: 80px; /* Ridotto su schermi medi */
  }
  @media (max-width: 768px) {
    width: 60px; /* Ancora più piccolo su schermi piccoli */
  }
`;

// Glass strip that will be behind the content with glowing gradient border
const GlassStrip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  z-index: 1;

  // Gradient border
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(135deg, rgba(237, 228, 228, 0.21), rgba(234, 224, 224, 0.18)) 1;

  // Glow effect
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.25), 0 0 50px rgba(180, 180, 255, 0.07);
`;

// Marquee content container that will be above the glass strip
const MarqueeContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  padding: 20px;
  flex-wrap: nowrap; /* Non permettere che gli elementi vadano su più righe */

  @media (max-width: 1024px) {
    padding: 20px 10px; /* Ridotto padding per schermi medi */
  }

  @media (max-width: 768px) {
    padding: 15px 5px; /* Ancora più ridotto su schermi piccoli */
    height: 60px;
  }
`;

// Individual stat item
const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 15px;
`;

// Title styling using Akorn (via GlobalStyles)
const StatTitle = styled.h2`
  font-family: 'Acorn', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #5137AA;
  margin: 0;
  line-height: 1; /* Modifica questa proprietà per regolare l'interlinea */

  margin-bottom: 2px;

  @media (max-width: 1024px) {
    font-size: 32px; /* Ridotto su schermi medi */
  }

  @media (max-width: 768px) {
    font-size: 24px; /* Ancora più piccolo su schermi piccoli */
  }
`;

// Subtitle styling using Inter (via Google Fonts in GlobalStyles)
const StatSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #E1E1E3;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 18px; /* Ridotto su schermi medi */
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Ancora più piccolo su schermi piccoli */
  }
`;

const Marquee = () => {
  return (
    <MarqueeContainer>
      {/* Background images layer */}
      <BackgroundImages>
        <FloatingImage src={Coin} alt="Coin" />
        <FloatingImage src={Coin2} alt="Coin2" />
        <FloatingImage src={Gym} alt="Gym" />
        <FloatingImage src={Wallet} alt="Wallet" />
        <FloatingImage src={Bsc} alt="BSC" />
        <FloatingImage src={Skategbcc} alt="Skategbcc" />
      </BackgroundImages>

      {/* Glass strip layer */}
      <GlassStrip />

      {/* Content layer (on top) */}
      <MarqueeContent>
        <StatItem>
          <StatTitle>BNB CHAIN</StatTitle>
          <StatSubtitle>Low Fees</StatSubtitle>
        </StatItem>

        <StatItem>
          <StatTitle>+20K USD</StatTitle>
          <StatSubtitle>Rewards</StatSubtitle>
        </StatItem>

        <StatItem>
          <StatTitle>+500 PLAYERS</StatTitle>
          <StatSubtitle>Play to earn</StatSubtitle>
        </StatItem>
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;
