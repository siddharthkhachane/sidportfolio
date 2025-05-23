import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '../../context/NavigationContext';

const Footer = () => {
  const { sections, activeSection } = useNavigation();
  const currentColor = sections[activeSection].color;
  
  return (
    <FooterContainer>
      <FooterContent>
       <SocialLinks>
          <SocialLink href="https://github.com/siddharthkhachane" color={currentColor}>GitHub</SocialLink>
          <SocialLink href="https://www.linkedin.com/in/siddharth-khachane1/" color={currentColor}>LinkedIn</SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 90;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.color || 'white'};
  }
`;

export default Footer;
