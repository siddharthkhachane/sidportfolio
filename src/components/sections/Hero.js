import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const Hero = () => {
  const { sections, activeSection, setActiveSection } = useNavigation();
  const currentColor = sections[activeSection].color;
  
  const handleExploreClick = () => {
    setActiveSection(1); // Navigate to the About section
  };
  
  return (
    <HeroContainer>
      <ContentWrapper>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm 
          </Greeting>
          
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            color={currentColor}
          >
            Siddharth Khachane
          </Name>
          
          <RoleWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RoleText>I am a full stack developer and I build scalable and reliable applications</RoleText>
          </RoleWrapper>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Developing optimized software with AI Integration
          </Description>
          
          <ButtonsContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <PrimaryButton onClick={handleExploreClick} color={currentColor}>
              Explore My Work
              <ButtonIcon>↓</ButtonIcon>
            </PrimaryButton>
            
            <SecondaryButton href="#contact" color={currentColor} onClick={() => setActiveSection(sections.findIndex(section => section.id === 'contact'))}>
              Get In Touch
            </SecondaryButton>
          </ButtonsContainer>
        </TextContent>
      </ContentWrapper>
      
      <ScrollIndicator onClick={handleExploreClick}>
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon>↓</ScrollIcon>
      </ScrollIndicator>
    </HeroContainer>
  );
};

// Styled components
const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Greeting = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, ${props => props.color});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const RoleWrapper = styled(motion.div)`
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  height: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: 2rem;
  }
`;

const RoleText = styled.span`
  display: inline-block;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-bottom: 2rem;
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled.button`
  background: ${props => props.color || '#4B86B4'};
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ButtonIcon = styled.span`
  font-size: 1.2rem;
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: white;
  border: 1px solid ${props => props.color || '#4B86B4'};
  border-radius: 30px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => `${props.color}20` || 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const ScrollText = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ScrollIcon = styled.span`
  font-size: 1.2rem;
  color: white;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export default Hero;
