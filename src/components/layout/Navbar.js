import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const Navbar = () => {
  const { sections, activeSection, setActiveSection } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (index) => {
    setActiveSection(index);
    setMobileMenuOpen(false);
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SK
        </motion.span>
      </Logo>
      
      <NavLinks>
        {sections.map((section, index) => (
          <NavItem 
            key={section.id}
            active={index === activeSection}
            onClick={() => handleNavClick(index)}
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
      
      <MobileMenuButton 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <HamburgerLine open={mobileMenuOpen} />
        <HamburgerLine open={mobileMenuOpen} />
        <HamburgerLine open={mobileMenuOpen} />
      </MobileMenuButton>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section, index) => (
              <MobileNavItem 
                key={section.id}
                active={index === activeSection}
                onClick={() => handleNavClick(index)}
              >
                {section.title}
              </MobileNavItem>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
      
      <NavActions>
        <ThemeToggle>
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
    height: 60px;
  }
  
  @media (max-width: 480px) {
    padding: 0 15px;
    height: 55px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  z-index: 101;
  
  span {
    background: linear-gradient(to right, #ffffff, #63ACE5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
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

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
  
  &:nth-child(1) {
    transform: ${props => props.open ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.open ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.open ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(15, 17, 26, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavItem = styled.div`
  padding: 1rem 20px;
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: ${props => props.active ? '3px solid #63ACE5' : '3px solid transparent'};
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    display: none;
  }
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
