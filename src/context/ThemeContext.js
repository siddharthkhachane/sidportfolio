import React, { createContext, useState, useContext } from 'react';

// Create context
const ThemeContext = createContext();

// Theme options
const themes = {
  dark: {
    background: '#0F111A',
    text: '#ffffff',
    primary: '#4B86B4',
    secondary: '#63ACE5',
    accent: '#2A3D66'
  },
  light: {
    background: '#f5f5f7',
    text: '#1d1d1f',
    primary: '#0071e3',
    secondary: '#2997ff',
    accent: '#86b9f0'
  }
};

// Provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  
  // Get current theme based on dark mode state
  const currentTheme = darkMode ? themes.dark : themes.light;
  
  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Context value
  const value = {
    darkMode,
    toggleTheme,
    theme: currentTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};