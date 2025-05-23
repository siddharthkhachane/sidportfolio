import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const Navbar = () => {
  const { sections, activeSection, setActiveSection } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
      </Logo>
      
      <NavLinks>
        {sections.map((section, index) => (
          <NavItem 
            key={section.id}
            active={index === activeSection}
            onClick={() => setActiveSection(index)}
          >
            <span>{section.title}</span>
            {index === activeSection && (
              <motion.div 
                className="active-indicator"
                layoutId="activeSection"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </NavItem>
        ))}
      </NavLinks>
      
      <NavActions>
        <ThemeToggle>
          <span>☀️</span>
          <span>🌙</span>
        </ThemeToggle>
      </NavActions>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 100;
  transition: all 0.3s ease;
  background: ${props => props.scrolled ? 'rgba(15, 17, 26, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  
  span {
    background: linear-gradient(to right, #ffffff, #63ACE5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
  }
  
  .active-indicator {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #ffffff, #63ACE5);
    border-radius: 2px;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 3px;
  cursor: pointer;
  
  span {
    font-size: 16px;
  }
`;

export default Navbar;
