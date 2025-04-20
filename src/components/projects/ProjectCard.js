import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick, color }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <CardContainer
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      hovered={hovered}
      borderColor={color}
    >
      <ImageContainer>
        <img 
          src={project.image} 
          alt={project.title} 
        />
        <OverlayGradient hovered={hovered} color={color} />
      </ImageContainer>
      
      <ContentContainer>
        <Title>{project.title}</Title>
        <Description>{project.shortDescription}</Description>
        
        <TechList>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <TechTag key={index} color={color}>{tech}</TechTag>
          ))}
          {project.technologies.length > 3 && (
            <TechTag color={color}>+{project.technologies.length - 3}</TechTag>
          )}
        </TechList>
      </ContentContainer>
      
      {hovered && (
        <ViewButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          color={color}
        >
          View Project
          <motion.span 
            initial={{ x: 0 }}
            animate={{ x: 5 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
          >
            →
          </motion.span>
        </ViewButton>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  background: rgba(15, 17, 26, 0.7);
  border-radius: 16px;
  overflow: hidden;
  height: 350px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid ${props => props.hovered ? props.borderColor : 'transparent'};
  box-shadow: ${props => props.hovered ? `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${props.borderColor}30` : '0 5px 15px rgba(0, 0, 0, 0.2)'};
  transform: ${props => props.hovered ? 'translateY(-10px)' : 'none'};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const OverlayGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.hovered ? 
    `linear-gradient(to bottom, transparent, ${props.color}80)` : 
    'linear-gradient(to bottom, transparent, rgba(15, 17, 26, 0.9))'};
  transition: background 0.3s ease;
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: white;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const TechTag = styled.span`
  background: ${props => `${props.color}20`};
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  border: 1px solid ${props => `${props.color}40`};
`;

const ViewButton = styled(motion.div)`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: ${props => props.color};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default ProjectCard;