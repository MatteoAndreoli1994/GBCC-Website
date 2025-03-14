import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset and global styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    position: relative;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Importa il font COMICATE ma non applicarlo globalmente */
  @font-face {
    font-family: 'COMICATE';
    src: url('/font/COMICATE.TTF') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyles;
