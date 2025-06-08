import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'Problem Solver',
  'Tech Enthusiast'
];

const Hero = () => {
  const { sections, activeSection, setActiveSection } = useNavigation();
  const [currentRole, setCurrentRole] = useState(0);
  const currentColor = sections[activeSection].color;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    setActiveSection(1);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Siddharth_Khachane_CV.pdf';
    link.download = 'Siddharth_Khachane_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HeroContainer>
      <ContentWrapper>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi there! I'm
          </Greeting>
          
          <Name
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            color={currentColor}
          >
            Siddharth Khachane
          </Name>
          
          <RoleWrapper
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <RoleText
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </RoleText>
          </RoleWrapper>
          
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Passionate about creating innovative solutions and bringing ideas to life through code. 
            I love building user-centric applications and exploring new technologies.
          </Description>
          
          <ButtonsContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <PrimaryButton color={currentColor} onClick={handleDownloadCV}>
              <ButtonIcon>📄</ButtonIcon>
              Download CV
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

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 100vh;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 800px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Greeting = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, ${props => props.color});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.8rem;
  }
`;

const RoleWrapper = styled(motion.div)`
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: 2rem;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    height: 1.5rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const RoleText = styled(motion.span)`
  display: inline-block;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
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
  min-height: 44px;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 576px) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: ${props => props.color || '#4B86B4'};
  border: 2px solid ${props => props.color || '#4B86B4'};
  border-radius: 30px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  min-height: 44px;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.color || '#4B86B4'};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 576px) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }
`;

const ButtonIcon = styled.span`
  font-size: 1.2rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
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
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(-50%) translateY(-5px);
  }
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    bottom: 1rem;
    gap: 0.3rem;
  }
`;

const ScrollText = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ScrollIcon = styled.span`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default Hero;
