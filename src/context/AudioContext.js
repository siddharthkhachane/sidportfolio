import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { useNavigation } from './NavigationContext';

// Create context
const AudioContext = createContext();

// Provider component
export const AudioProvider = ({ children }) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const { activeSection, sections } = useNavigation();
  const audioRefs = useRef({});

  // Initialize audio elements
  useEffect(() => {
    sections.forEach(section => {
      const audio = new Audio(`/assets/sounds/ambient-${section.id}.mp3`);
      audio.loop = true;
      audio.volume = 0;
      audioRefs.current[section.id] = audio;
    });

    return () => {
      // Cleanup audio
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, [sections]);

  // Handle audio transitions
  useEffect(() => {
    if (!audioEnabled) return;

    // Fade out all audio
    Object.values(audioRefs.current).forEach(audio => {
      const fadeAudio = setInterval(() => {
        if (audio.volume > 0.1) {
          audio.volume -= 0.1;
        } else {
          audio.volume = 0;
          clearInterval(fadeAudio);
        }
      }, 50);
    });

    // Fade in current section audio
    const currentAudio = audioRefs.current[sections[activeSection].id];
    if (currentAudio) {
      const fadeInAudio = setInterval(() => {
        if (currentAudio.volume < 0.4) {
          currentAudio.volume += 0.1;
        } else {
          currentAudio.volume = 0.5;
          clearInterval(fadeInAudio);
        }
      }, 50);
    }
  }, [activeSection, audioEnabled, sections]);

  // Toggle audio
  const toggleAudio = () => {
    if (!audioEnabled) {
      // Start playing all audios when first enabled
      Object.values(audioRefs.current).forEach(audio => {
        audio.play().catch(err => console.error("Error playing audio:", err));
      });
    } else {
      // Pause all audios when disabled
      Object.values(audioRefs.current).forEach(audio => {
        const fadeOut = setInterval(() => {
          if (audio.volume > 0.1) {
            audio.volume -= 0.1;
          } else {
            audio.volume = 0;
            audio.pause();
            clearInterval(fadeOut);
          }
        }, 50);
      });
    }
    
    setAudioEnabled(!audioEnabled);
  };

  // Context value
  const value = {
    audioEnabled,
    toggleAudio
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

// Custom hook for using the audio context
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};