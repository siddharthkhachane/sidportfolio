import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const Contact = () => {
  const { sections, activeSection } = useNavigation();
  const currentColor = sections[activeSection].color;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Normally you would send this data to your backend
    // This is just a simulation
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thanks for your message! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <ContactContainer>
      <SectionHeader backgroundColor={currentColor}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's discuss your project or just say hello
        </motion.p>
      </SectionHeader>
      
      <ContentGrid>
        <FormSection>
          <FormContainer
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                borderColor={currentColor}
              />
            </FormField>
            
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                borderColor={currentColor}
              />
            </FormField>
            
            <FormField>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                borderColor={currentColor}
              />
            </FormField>
            
            <SubmitButton type="submit" color={currentColor}>
              Send Message
            </SubmitButton>
            
            {formStatus.submitted && (
              <StatusMessage error={formStatus.error}>
                {formStatus.message}
              </StatusMessage>
            )}
          </FormContainer>
        </FormSection>
        
        <InfoSection>
          <ContactInfo
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InfoTitle>Contact Information</InfoTitle>
            
            <InfoItem>
              <InfoIcon>📧</InfoIcon>
              <InfoText>khachane@usc.edu</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>📱</InfoIcon>
              <InfoText>+1 (213) 512-5004</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoText>Los Angeles, CA</InfoText>
            </InfoItem>
            
            <SocialLinks>
              <SocialLink href="https://github.com/siddharthkhachane" color={currentColor}>
                <SocialIcon>GitHub</SocialIcon>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/siddharth-khachane1/" color={currentColor}>
                <SocialIcon>LinkedIn</SocialIcon>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </InfoSection>
      </ContentGrid>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div``;

const FormContainer = styled(motion.form)`
  background: rgba(15, 17, 26, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;

const Input = styled.input`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor ? `${props.borderColor}50` : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.borderColor};
    box-shadow: 0 0 0 2px ${props => `${props.borderColor}30`};
  }
`;

const TextArea = styled.textarea`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor ? `${props.borderColor}50` : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: white;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.borderColor};
    box-shadow: 0 0 0 2px ${props => `${props.borderColor}30`};
  }
`;

const SubmitButton = styled.button`
  background: ${props => props.color || '#4B86B4'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const StatusMessage = styled.div`
  padding: 1rem;
  background: ${props => props.error ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)'};
  color: ${props => props.error ? '#ff6b6b' : '#6bff6b'};
  border-radius: 8px;
  text-align: center;
`;

const InfoSection = styled.div``;

const ContactInfo = styled(motion.div)`
  background: rgba(15, 17, 26, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
`;

const InfoText = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => `${props.color}20` || 'rgba(255, 255, 255, 0.1)'};
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.color || 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-3px);
  }
`;

const SocialIcon = styled.span`
  color: white;
  font-size: 0.8rem;
`;

export default Contact;