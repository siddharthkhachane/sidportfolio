import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const Hero = () => {
  const { sections, activeSection, setActiveSection } = useNavigation();
  const currentColor = sections[activeSection].color;
  const textRef = useRef();
  
  // Text animation using Typed.js-like effect
  useEffect(() => {
    const roles = ["Software Developer", "Fullstack Engineer", "Creative Coder"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let textContent = "";
    
    const type = () => {
      const currentRole = roles[roleIndex];
      const typeSpeed = isDeleting ? 50 : 150;
      
      if (isDeleting) {
        textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (textRef.current) {
        textRef.current.textContent = textContent;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, typeSpeed);
      }
    };
    
    const typingTimer = setTimeout(type, 1000);
    
    return () => clearTimeout(typingTimer);
  }, []);
  
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
            I'm a <RoleText ref={textRef}></RoleText><Cursor color={currentColor}>|</Cursor>
          </RoleWrapper>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Developing Full stack scalable and optimized software with AI Integration
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
            
            <SecondaryButton href="#contact" color={currentColor}>
              Get In Touch
            </SecondaryButton>
          </ButtonsContainer>
        </TextContent>
        
        <Visual3D
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ShapeContainer>
            <FloatingShape color={currentColor} delay={0} />
            <FloatingShape color={currentColor} delay={0.5} />
            <FloatingShape color={currentColor} delay={1} />
          </ShapeContainer>
        </Visual3D>
      </ContentWrapper>
      
      <ScrollIndicator onClick={handleExploreClick}>
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon>↓</ScrollIcon>
      </ScrollIndicator>
    </HeroContainer>
  );
};

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

const Cursor = styled.span`
  display: inline-block;
  color: ${props => props.color};
  font-weight: bold;
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
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

const Visual3D = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const ShapeContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

// A decorative floating shape component
const FloatingShape = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: ${props => `${props.color}30` || 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid ${props => `${props.color}60` || 'rgba(255, 255, 255, 0.2)'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 6s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
  
  &:nth-child(2) {
    width: 200px;
    height: 200px;
    opacity: 0.6;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  
  &:nth-child(3) {
    width: 100px;
    height: 100px;
    opacity: 0.8;
    border-radius: 40% 60% 50% 50% / 40% 50% 50% 60%;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(-50%, -50%);
    }
    50% {
      transform: translate(-50%, -60%) rotate(10deg);
    }
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
