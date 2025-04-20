import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetails from '../projects/ProjectDetails';
import { projectsData } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

const Projects = () => {
  const { sections, activeSection } = useNavigation();
  const [selectedProject, setSelectedProject] = useState(null);
  const currentColor = sections[activeSection].color;
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  
  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  
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
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #ffffff, ${props => props.backgroundColor});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
`;

export default Projects;