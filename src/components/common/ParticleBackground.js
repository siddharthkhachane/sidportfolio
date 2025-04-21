import React from 'react';
import styled from 'styled-components';

const ParticleBackground = () => {
  return (
    <Background />
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0d0221 0%, #121236 100%);
  background-size: 100% 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
  }
  
  &::before {
    background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(107, 37, 193, 0.3) 25%,
      rgba(107, 37, 193, 0.3) 26%,
      transparent 27%,
      transparent 74%,
      rgba(107, 37, 193, 0.3) 75%,
      rgba(107, 37, 193, 0.3) 76%,
      transparent 77%,
      transparent
    );
    background-size: 60px 60px;
    transform: rotate(-30deg);
  }
  
  &::after {
    background-image: linear-gradient(
      90deg,
      transparent 24%,
      rgba(76, 35, 174, 0.3) 25%,
      rgba(76, 35, 174, 0.3) 26%,
      transparent 27%,
      transparent 74%,
      rgba(76, 35, 174, 0.3) 75%,
      rgba(76, 35, 174, 0.3) 76%,
      transparent 77%,
      transparent
    );
    background-size: 60px 60px;
    transform: rotate(30deg);
  }
`;

export default ParticleBackground;