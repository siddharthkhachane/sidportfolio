import React, { useEffect } from 'react';
import styled from 'styled-components';

const CustomCursor = ({ position, color }) => {
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      // Restore default cursor when component unmounts
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  return (
    <CursorElement 
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: color,
      }}
    />
  );
};

const CursorElement = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: width 0.3s, height 0.3s, background-color 0.8s;
  
  &:hover {
    width: 40px;
    height: 40px;
  }
`;

export default CustomCursor;
