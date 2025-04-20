import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0F111A;
    color: white;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  
  #root {
    height: 100%;
    width: 100%;
  }
  
  .app {
    height: 100%;
    width: 100%;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
  }
  
  p {
    line-height: 1.5;
  }
  
  button {
    font-family: inherit;
  }
  
  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid #63ACE5;
    outline-offset: 2px;
  }
`;

export default GlobalStyles;