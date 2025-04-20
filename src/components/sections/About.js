import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const About = () => {
  const { sections, activeSection } = useNavigation();
  const [activeTab, setActiveTab] = useState('bio');
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const cursorRef = useRef(null);
  const currentColor = sections[activeSection].color;
  
  // Content for each tab
  const tabsContent = {
    bio: {
      title: "About Me",
      text: "I am a full stack software developer and I build scalable and reliable applications"
    },
    skills: {
      title: "My Skills",
      items: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "Spring Boot", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "AI", level: 85 }
      ]
    },
    experience: {
      title: "Experience",
      positions: [
        {
          role: "Senior Software Engineer",
          company: "Ultimate Kronos Group (UKG)",
          period: "Jan 2024 - Jul 2024",
          description: "Developed a Messaging Framework in UKG DIMENSIONS (Workforce Management Application) facilitating smooth asynchronous communication between different services utilizing RabbitMQ, Java and Spring Boot. Spearheaded development of Resiliency Framework automating message persistence process in adverse scenarios and reducing time and efforts required to recover data by 80% than previous solution of manual persistence."
        },
        {
          role: "Software Enginner",
          company: "Ultimate Kronos Group (UKG)",
          period: "Jul 2022 - Jan 2024",
          description: "Implemented a Common Messaging Platform in UKG PRO (HRM application), providing a highly scalable method for communication between microservices utilizing Kafka. Applied encryption, compression and digital signatures on data using Java and Spring Boot. Designed unified monitoring dashboards on Grafana automating production monitoring process and reducing time to manually monitor by 50% on daily basis resulting in performance improvement."
        }
      ]
    }
  };
  
  // Typing effect for text content
  useEffect(() => {
    const textToType = (activeTab === 'bio') 
      ? tabsContent.bio.text 
      : (activeTab === 'experience')
        ? tabsContent.experience.positions[0].description
        : "I specialize in creating seamless experiences with the latest web technologies.";
    
    let currentIndex = 0;
    setTypingText('');
    setIsTyping(true);
    
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypingText(prev => prev + textToType.charAt(currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30);
    
    return () => clearInterval(typingInterval);
  }, [activeTab]);
  
  // Blinking cursor effect
  useEffect(() => {
    if (!isTyping && cursorRef.current) {
      const blinkInterval = setInterval(() => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
        }
      }, 500);
      
      return () => clearInterval(blinkInterval);
    }
  }, [isTyping]);
  
  // Tab content renderers
  const renderBioContent = () => (
    <BioContent>
      <TerminalHeader>
        <TerminalButtons>
          <TerminalButton color="#ff5f56" />
          <TerminalButton color="#ffbd2e" />
          <TerminalButton color="#27c93f" />
        </TerminalButtons>
        <TerminalTitle>about-me.txt</TerminalTitle>
      </TerminalHeader>
      <TerminalBody>
        <TerminalText>
          <span className="prompt">$ cat about-me.txt</span>
          <span className="response">
            {typingText}
            <Cursor ref={cursorRef}>|</Cursor>
          </span>
        </TerminalText>
      </TerminalBody>
    </BioContent>
  );
  
  const renderSkillsContent = () => (
    <SkillsContent>
      {tabsContent.skills.items.map((skill, index) => (
        <SkillItem key={index}>
          <SkillInfo>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel>{skill.level}%</SkillLevel>
          </SkillInfo>
          <SkillBar>
            <SkillProgress 
              style={{ width: `${skill.level}%` }}
              color={currentColor}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </SkillBar>
        </SkillItem>
      ))}
    </SkillsContent>
  );
  
  const renderExperienceContent = () => (
    <ExperienceContent>
      {tabsContent.experience.positions.map((position, index) => (
        <ExperienceItem 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ExperienceHeader>
            <RoleTitle>{position.role}</RoleTitle>
            <CompanyInfo>
              <CompanyName>{position.company}</CompanyName>
              <PeriodBadge color={currentColor}>{position.period}</PeriodBadge>
            </CompanyInfo>
          </ExperienceHeader>
          <ExperienceDescription>
            {position.description}
          </ExperienceDescription>
        </ExperienceItem>
      ))}
    </ExperienceContent>
  );
  
  return (
    <AboutContainer>
      <SectionHeader backgroundColor={currentColor}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get to know more about my skills and experience
        </motion.p>
      </SectionHeader>
      
      <TabsContainer>
        <TabButtons>
          <TabButton 
            active={activeTab === 'bio'} 
            onClick={() => setActiveTab('bio')}
            color={currentColor}
          >
            Bio
          </TabButton>
          <TabButton 
            active={activeTab === 'skills'} 
            onClick={() => setActiveTab('skills')}
            color={currentColor}
          >
            Skills
          </TabButton>
          <TabButton 
            active={activeTab === 'experience'} 
            onClick={() => setActiveTab('experience')}
            color={currentColor}
          >
            Experience
          </TabButton>
        </TabButtons>
        
        <TabContent>
          {activeTab === 'bio' && renderBioContent()}
          {activeTab === 'skills' && renderSkillsContent()}
          {activeTab === 'experience' && renderExperienceContent()}
        </TabContent>
      </TabsContainer>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  width: 100%;
  max-width: 1000px;
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

const TabsContainer = styled.div`
  background: rgba(15, 17, 26, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TabButtons = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 1rem 2rem;
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.6)'};
  font-size: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.active ? props.color : 'transparent'};
    transform: ${props => props.active ? 'scaleX(1)' : 'scaleX(0)'};
    transform-origin: bottom left;
    transition: transform 0.3s ease;
  }
`;

const TabContent = styled.div`
  padding: 2rem;
  min-height: 300px;
`;

const BioContent = styled.div`
  width: 100%;
`;

const TerminalHeader = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
`;

const TerminalButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const TerminalTitle = styled.div`
  margin-left: 1rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

const TerminalBody = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 0 0 8px 8px;
  min-height: 200px;
`;

const TerminalText = styled.div`
  font-family: 'Courier New', monospace;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  .prompt {
    color: #64D86B;
  }
  
  .response {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  margin-left: 2px;
  font-weight: bold;
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div`
  width: 100%;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 600;
  color: white;
`;

const SkillLevel = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: ${props => props.color};
  border-radius: 4px;
`;

const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceItem = styled(motion.div)`
  padding-left: 1.5rem;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
`;

const ExperienceHeader = styled.div`
  margin-bottom: 0.8rem;
`;

const RoleTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
  color: white;
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CompanyName = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const PeriodBadge = styled.span`
  background: ${props => `${props.color}30`};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
`;

export default About;
