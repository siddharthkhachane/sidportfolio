import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavigationDots = ({ sections, activeSection, onChange }) => {
  return (
    <NavContainer>
      {sections.map((section, index) => (
        <NavDot 
          key={section.id}
          active={index === activeSection}
          color={section.color}
          onClick={() => onChange(index)}
        >
          {index === activeSection && (
            <motion.div 
              className="active-indicator"
              layoutId="activeDot"
              initial={false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </NavDot>
      ))}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 100;
`;

const NavDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.color : '#ffffff30'};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: scale(1.3);
  }
  
  ${props => props.active && `
    transform: scale(1.5);
    box-shadow: 0 0 10px ${props.color};
  `}
  
  .active-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

export default NavigationDots;