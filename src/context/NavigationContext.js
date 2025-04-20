// src/context/NavigationContext.js
import React, { createContext, useState, useContext } from 'react';

// Create context
const NavigationContext = createContext();

// Provider component
export const NavigationProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);
  
  // Sections data
  const sections = [
    { id: 'hero', title: 'Home', color: '#2A3D66' },
    { id: 'about', title: 'About Me', color: '#4B86B4' },
    { id: 'projects', title: 'Projects', color: '#63ACE5' },
    { id: 'contact', title: 'Contact', color: '#1C243B' },
  ];

  // Context value
  const value = {
    activeSection,
    setActiveSection,
    sections
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook for using the navigation context
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};