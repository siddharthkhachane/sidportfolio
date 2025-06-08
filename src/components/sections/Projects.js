import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetails from '../projects/ProjectDetails';
import { projectsData } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

const Projects = ({ setIsModalOpen }) => {
  const { sections, activeSection } = useNavigation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const currentColor = sections[activeSection].color;
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    if (setIsModalOpen) {
      setIsModalOpen(true);
      document.dispatchEvent(new CustomEvent('modalOpen'));
    }
  };
  
  const closeProjectDetails = () => {
    setSelectedProject(null);
    if (setIsModalOpen) {
      setIsModalOpen(false);
      document.dispatchEvent(new CustomEvent('modalClose'));
    }
  };

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (scrollContainerRef.current && scrollContainerRef.current.contains(e.target)) {
        const container = scrollContainerRef.current;
        const { scrollTop, scrollHeight, clientHeight } = container;
        
        if (scrollHeight > clientHeight) {
          setIsScrolling(true);
          e.stopPropagation();
        }
      }
    };

    const handleTouchEnd = () => {
      setIsScrolling(false);
    };

    const handleScroll = (e) => {
      if (scrollContainerRef.current && scrollContainerRef.current.contains(e.target)) {
        e.stopPropagation();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);
  
  return (
    <ProjectsContainer>
      <SectionHeader backgroundColor={currentColor}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore my latest work and creative endeavors
        </motion.p>
      </SectionHeader>
      
      <ScrollableContainer 
        ref={scrollContainerRef}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <ProjectCard 
                project={project} 
                onClick={() => handleProjectClick(project)}
                color={currentColor}
              />
            </motion.div>
          ))}
        </ProjectsGrid>
      </ScrollableContainer>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
          >
            <ProjectDetails 
              project={selectedProject} 
              onClose={closeProjectDetails}
              color={currentColor}
            />
          </ProjectDetailsOverlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 100vh;
    overflow: hidden;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  flex-shrink: 0;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #ffffff, ${props => props.backgroundColor});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    
    h1 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const ScrollableContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;
  margin-right: -10px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  padding-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
    padding-bottom: 0.5rem;
  }
`;

const ProjectDetailsOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export default Projects;
