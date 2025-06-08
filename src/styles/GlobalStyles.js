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

  @media (max-width: 768px) {
    html, body {
      overflow-x: hidden;
    }
    
    main {
      padding: 1rem !important;
    }
    
    h1 {
      font-size: 2.5rem !important;
    }
    
    h2 {
      font-size: 1.8rem !important;
    }
    
    p {
      font-size: 0.9rem !important;
      text-align: center;
    }
    
    div[style*="right: 30px"] {
      right: 15px !important;
    }
    
    div[style*="width: 12px"] {
      width: 16px !important;
      height: 16px !important;
    }
    
    div[style*="padding: 2rem"] {
      padding: 1rem !important;
    }
    
    div[style*="gap: 1.5rem"] {
      flex-direction: column !important;
      gap: 1rem !important;
    }
    
    div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
    }
    
    div[style*="font-size: 4rem"] {
      font-size: 2.5rem !important;
    }
    
    div[style*="font-size: 2rem"] {
      font-size: 1.5rem !important;
    }
  }
  
  @media (max-width: 480px) {
    main {
      padding: 0.5rem !important;
    }
    
    h1 {
      font-size: 2rem !important;
    }
    
    h2 {
      font-size: 1.5rem !important;
    }
    
    p {
      font-size: 0.8rem !important;
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
    
    div[style*="font-size: 4rem"], div[style*="font-size: 2.5rem"] {
      font-size: 2rem !important;
    }
    
    div[style*="font-size: 2rem"], div[style*="font-size: 1.5rem"] {
      font-size: 1.2rem !important;
    }
    
    button {
      padding: 0.6rem 1rem !important;
      font-size: 0.9rem !important;
    }
  }
  
  @media (max-width: 320px) {
    h1 {
      font-size: 1.8rem !important;
    }
    
    h2 {
      font-size: 1.3rem !important;
    }
    
    p {
      font-size: 0.75rem !important;
    }
  }
`;

export default GlobalStyles;
