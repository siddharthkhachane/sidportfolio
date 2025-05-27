import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import InteractiveViewer from './InteractiveViewer';

const ProjectDetails = ({ project, onClose, color }) => {
  return (
    <DetailsContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <CloseButton onClick={onClose} color={color}>×</CloseButton>
      
      <DetailHeader color={color}>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
      </DetailHeader>
      
      <ContentGrid>
        <MainContent>
          <InteractiveViewer project={project} />
          
          <Description>
            <h2>About this project</h2>
            <p>{project.fullDescription}</p>
          </Description>
          
          
        </MainContent>
        
        <Sidebar>
          <SidebarSection>
            <h3>Technologies</h3>
            <TechTags>
              {project.technologies.map((tech, index) => (
                <TechTag key={index} color={color}>{tech}</TechTag>
              ))}
            </TechTags>
          </SidebarSection>
          
          <SidebarSection>
            <h3>Completed</h3>
            <p>{project.year}</p>
          </SidebarSection>
          
          <SidebarSection>
            <h3>Links</h3>
            <ProjectLinks>
              <ProjectButton 
                href={project.liveUrl} 
                target="_blank"
                rel="noopener noreferrer"
                color={color}
                primary
              >
                View Live Project
              </ProjectButton>
              <ProjectButton 
                href={project.codeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                color={color}
              >
                View Source Code
              </ProjectButton>
            </ProjectLinks>
          </SidebarSection>
        </Sidebar>
      </ContentGrid>
    </DetailsContainer>
  );
};

const DetailsContainer = styled(motion.div)`
  scroll-behavior: smooth;
  background: rgba(15, 17, 26, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
  
  /* Custom scrollbar */
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
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.color};
  }
`;

const DetailHeader = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #ffffff, ${props => props.color});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: a.2rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Description = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    white-space: pre-line;
  }
`;

const FeaturesSection = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: white;
  }
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const FeatureIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${props => `${props.color}40`};
  color: ${props => props.color};
  border-radius: 50%;
  font-size: 0.8rem;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SidebarSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: ${props => `${props.color}20`};
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  border: 1px solid ${props => `${props.color}40`};
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectButton = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  background: ${props => props.primary ? props.color : `${props.color}20`};
  color: ${props => props.primary ? 'white' : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${props => props.primary ? 'transparent' : `${props.color}40`};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default ProjectDetails;
