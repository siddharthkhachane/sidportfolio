import React, { useState, useEffect } from 'react';
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
  
  // Track cursor position
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

// Separate component that can use the Navigation context
const AppContent = ({ cursorPosition }) => {
  const { sections, activeSection, setActiveSection } = useNavigation();
  
  // Handle navigation
  const handleNavigation = (index) => {
    setActiveSection(index);
  };

  // Handle scroll navigation
  const handleWheel = (e) => {
    if (e.deltaY > 0 && activeSection < sections.length - 1) {
      setActiveSection(prev => prev + 1);
    } else if (e.deltaY < 0 && activeSection > 0) {
      setActiveSection(prev => prev - 1);
    }
  };
  
  return (
    <div className="app" onWheel={handleWheel}>
      <CustomCursor 
        position={cursorPosition} 
        color={sections[activeSection].color} 
      />
      
      <Layout>
        {activeSection === 0 && <Hero />}
        {activeSection === 1 && <About />}
        {activeSection === 2 && <Projects />}
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

