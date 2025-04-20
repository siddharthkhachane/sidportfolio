import React from 'react';
import styled from 'styled-components';
import { useAudio } from '../../context/AudioContext';

const AudioToggle = () => {
  const { audioEnabled, toggleAudio } = useAudio();
  
  return (
    <ToggleButton 
      onClick={toggleAudio}
      active={audioEnabled}
    >
      {audioEnabled ? '🔊' : '🔇'}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.active ? '#ffffff' : '#ffffff30'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export default AudioToggle;