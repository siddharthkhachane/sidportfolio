import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import NavigationDots from './components/common/NavigationDots';
import CustomCursor from './components/common/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <NavigationProvider>
          <GlobalStyles />
          <AppContent cursorPosition={cursorPosition} />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;

const AppContent = ({ cursorPosition }) => {
  const { sections, activeSection, setActiveSection } = useNavigation();
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allowSectionNavigation, setAllowSectionNavigation] = useState(true);
  
  const handleNavigation = (index) => {
    setActiveSection(index);
  };

  const handleWheel = (e) => {
    if (isModalOpen || !allowSectionNavigation) return;
    
    e.preventDefault();
    
    if (isScrollingRef.current) return;
    
    const threshold = 50;
    
    if (Math.abs(e.deltaY) < threshold) return;
    
    isScrollingRef.current = true;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    if (e.deltaY > threshold && activeSection < sections.length - 1) {
      setActiveSection(prev => prev + 1);
    } else if (e.deltaY < -threshold && activeSection > 0) {
      setActiveSection(prev => prev - 1);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  const handleTouchStart = (e) => {
    if (isModalOpen || !allowSectionNavigation) return;
    
    // Check if touch is on a scrollable element (projects section)
    const target = e.target.closest('[data-scrollable]');
    if (target) {
      return; // Don't handle section navigation for scrollable areas
    }
    
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isModalOpen || !allowSectionNavigation) return;
    
    // Check if touch is on a scrollable element (projects section)
    const target = e.target.closest('[data-scrollable]');
    if (target) {
      return; // Don't handle section navigation for scrollable areas
    }
    
    touchEndY.current = e.changedTouches[0].clientY;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (isScrollingRef.current || isModalOpen || !allowSectionNavigation) return;
    
    const swipeThreshold = 50;
    const swipeDistance = touchStartY.current - touchEndY.current;
    
    if (Math.abs(swipeDistance) < swipeThreshold) return;
    
    isScrollingRef.current = true;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    if (swipeDistance > 0 && activeSection < sections.length - 1) {
      setActiveSection(prev => prev + 1);
    } else if (swipeDistance < 0 && activeSection > 0) {
      setActiveSection(prev => prev - 1);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);
    
    document.addEventListener('modalOpen', handleModalOpen);
    document.addEventListener('modalClose', handleModalClose);
    
    return () => {
      document.removeEventListener('modalOpen', handleModalOpen);
      document.removeEventListener('modalClose', handleModalClose);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Disable section navigation when in projects section on mobile
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setAllowSectionNavigation(!(isMobile && activeSection === 2)); // Projects section is index 2
  }, [activeSection]);
  
  return (
    <div 
      className="app" 
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CustomCursor 
        position={cursorPosition} 
        color={sections[activeSection].color} 
      />
      
      <Layout>
        {activeSection === 0 && <Hero />}
        {activeSection === 1 && <About />}
        {activeSection === 2 && <Projects setIsModalOpen={setIsModalOpen} />}
        {activeSection === 3 && <Contact />}
      </Layout>
      
      <NavigationDots 
        sections={sections} 
        activeSection={activeSection} 
        onChange={handleNavigation} 
      />
      
    </div>
  );
};
