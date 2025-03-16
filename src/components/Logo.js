import * as React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Marchio from './Images/Marchio.png';

// Wrapper del Logo
const LogoText = styled.h2`
  font-size: ${props => props.theme.fontxxxl};
  color: ${props => props.theme.text};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  z-index: 9999; /* Porta il logo sopra gli altri elementi */
  margin: 0;
  padding: 0;

  &:hover {
    transform: scale(1.1);
  }
`;

// Immagine del Logo Responsive
const ImmagineLogo = styled.img`
  width: auto;
  height: 48px; /* Altezza base per schermi normali */
  display: flex;
  align-items: center;
  z-index: 9999;
  cursor: pointer; /* Mostra che è cliccabile */

  /* Dispositivi piccolissimi (es. iPhone SE, 320px) */
  @media (max-width: 21em) { /* circa 336px */
    height: 36px;
  }

  /* Smartphone medi (es. 375px tipo iPhone X/11) */
  @media (min-width: 21em) and (max-width: 30em) { /* circa 375-480px */
    height: 42px;
  }

  /* Tablet piccoli e telefoni grandi */
  @media (min-width: 30em) and (max-width: 48em) { /* 480px - 768px */
    height: 46px;
  }

  /* Tablet grandi e desktop */
  @media (min-width: 48em) { /* sopra 768px */
    height: 52px;
  }

  /* Limite massimo di dimensione */
  max-height: 60px;
`;

// Componente Logo
const Logo = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Porta all'inizio della pagina
    window.location.reload(); // Ricarica la pagina
  };

  return (
    <LogoText>
      <Link to="#" onClick={handleClick}>
        <ImmagineLogo src={Marchio} alt="Logo" />
      </Link>
    </LogoText>
  );
};

export default Logo;
