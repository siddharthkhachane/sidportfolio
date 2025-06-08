import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectDetails = ({ project, onClose, color }) => {
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <DetailsContainer
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleContainerClick}
    >
      <CloseButton onClick={handleCloseClick}>×</CloseButton>
      
      <ContentGrid>
        <MainContent>
          <ProjectImage src={project.image} alt={project.title} />
          
          <ContentSection>
            <ProjectTitle style={{ color }}>{project.title}</ProjectTitle>
            <ProjectDescription>{project.longDescription}</ProjectDescription>
            
            <FeatureSection>
              <SectionTitle>Key Features</SectionTitle>
              <FeatureList>
                {project.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeatureList>
            </FeatureSection>
          </ContentSection>
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
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const FeatureSection = styled.div``;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  
  &:before {
    content: "→";
    margin-right: 0.5rem;
    color: #63ACE5;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SidebarSection = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: white;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: ${props => `${props.color}20`};
  color: ${props => props.color};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid ${props => `${props.color}40`};
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProjectButton = styled.a`
  background: ${props => props.primary ? props.color : 'transparent'};
  color: ${props => props.primary ? 'white' : props.color};
  border: 1px solid ${props => props.color};
  padding: 0.8rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.color};
    color: white;
  }
`;

export default ProjectDetails;
