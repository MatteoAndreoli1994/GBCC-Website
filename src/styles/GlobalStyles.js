import { createGlobalStyle } from "styled-components";
import "@fontsource/space-mono";
import "@fontsource/space-grotesk";
import "@fontsource/vt323";

const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Grenze+Gotisch&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');


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
`;

export default GlobalStyles;
