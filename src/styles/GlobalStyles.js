import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #0f111a 0%, #1a1d29 50%, #2a2d3a 100%);
    color: white;
    overflow-x: hidden;
    line-height: 1.6;
    width: 100%;
    height: 100%;
  }
  
  .app {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
  }
  
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
  
  *:focus-visible {
    outline: 2px solid #63ACE5;
    outline-offset: 2px;
  }

  /* Tablet styles */
  @media (max-width: 1024px) {
    html, body {
      font-size: 14px;
    }
    
    .app {
      padding: 0;
    }
    
    main {
      padding: 1rem;
    }
  }

  /* Mobile Large (768px and below) */
  @media (max-width: 768px) {
    html, body {
      overflow-x: hidden;
      touch-action: pan-y;
      -webkit-overflow-scrolling: touch;
      font-size: 14px;
    }
    
    .app {
      touch-action: pan-y;
      -webkit-overflow-scrolling: touch;
      width: 100vw;
      overflow-x: hidden;
    }
    
    main {
      padding: 1rem !important;
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
    }
    
    h1 {
      font-size: 2.5rem !important;
      line-height: 1.1 !important;
    }
    
    h2 {
      font-size: 2rem !important;
      line-height: 1.2 !important;
    }
    
    h3 {
      font-size: 1.5rem !important;
    }
    
    p {
      font-size: 1rem !important;
      line-height: 1.5 !important;
    }
    
    /* Fix for elements with inline styles */
    div[style*="right: 30px"], div[style*="right: 15px"] {
      right: 15px !important;
    }
    
    div[style*="width: 12px"], div[style*="width: 16px"] {
      width: 16px !important;
      height: 16px !important;
    }
    
    div[style*="font-size: 2rem"] {
      font-size: 1.5rem !important;
    }
    
    /* Ensure all containers are mobile-friendly */
    section, div {
      max-width: 100vw;
      overflow-x: hidden;
    }
  }
  
  /* Mobile Small (480px and below) */
  @media (max-width: 480px) {
    html, body {
      font-size: 12px;
    }
    
    main {
      padding: 0.5rem !important;
    }
    
    h1 {
      font-size: 2rem !important;
      line-height: 1.1 !important;
    }
    
    h2 {
      font-size: 1.5rem !important;
      line-height: 1.2 !important;
    }
    
    h3 {
      font-size: 1.2rem !important;
    }
    
    p {
      font-size: 0.9rem !important;
      line-height: 1.4 !important;
    }
    
    div[style*="right: 30px"], div[style*="right: 15px"] {
      right: 10px !important;
    }
    
    div[style*="width: 12px"], div[style*="width: 16px"] {
      width: 18px !important;
      height: 18px !important;
    }
    
    div[style*="padding: 2rem"], div[style*="padding: 1rem"] {
      padding: 0.5rem !important;
    }
    
    /* Button adjustments for small screens */
    button {
      min-height: 44px;
      font-size: 0.9rem !important;
    }
  }
  
  /* Mobile Extra Small (320px and below) */
  @media (max-width: 320px) {
    html, body {
      font-size: 11px;
    }
    
    h1 {
      font-size: 1.8rem !important;
    }
    
    h2 {
      font-size: 1.3rem !important;
    }
    
    p {
      font-size: 0.8rem !important;
    }
    
    main {
      padding: 0.25rem !important;
    }
  }
`;

export default GlobalStyles;
