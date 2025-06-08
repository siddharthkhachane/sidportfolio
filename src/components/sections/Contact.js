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
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <ContactContainer>
      <SectionHeader backgroundColor={currentColor}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's discuss your next project or just say hello!
        </motion.p>
      </SectionHeader>
      
      <ContentGrid>
        <FormSection>
          <FormContainer
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <FormRow>
              <FormField>
                <Label>Name *</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  borderColor={currentColor}
                  required
                  placeholder="Your full name"
                />
              </FormField>
              
              <FormField>
                <Label>Email *</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  borderColor={currentColor}
                  required
                  placeholder="your.email@example.com"
                />
              </FormField>
            </FormRow>
            
            <FormField>
              <Label>Subject *</Label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                borderColor={currentColor}
                required
                placeholder="What's this about?"
              />
            </FormField>
            
            <FormField>
              <Label>Message *</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                borderColor={currentColor}
                required
                placeholder="Tell me more about your project or just say hello!"
                rows="6"
              />
            </FormField>
            
            <SubmitButton
              type="submit"
              backgroundColor={currentColor}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {submitStatus === 'success' && (
              <SuccessMessage>
                ✅ Message sent successfully! I'll get back to you soon.
              </SuccessMessage>
            )}
          </FormContainer>
        </FormSection>
        
        <InfoSection>
          <ContactInfo
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <InfoTitle>Let's Connect</InfoTitle>
            <InfoDescription>
              I'm always open to discussing new opportunities, 
              interesting projects, or just having a chat about technology.
            </InfoDescription>
            
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
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
  max-width: 1200px;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
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
    line-height: 1.2;
  }
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    
    h1 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormSection = styled.div`
  width: 100%;
`;

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
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
    border-radius: 12px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor ? `${props.borderColor}50` : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.borderColor};
    box-shadow: 0 0 0 2px ${props => `${props.borderColor}30`};
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 0.8rem;
  }
`;

const TextArea = styled.textarea`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor ? `${props.borderColor}50` : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.borderColor};
    box-shadow: 0 0 0 2px ${props => `${props.borderColor}30`};
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 0.8rem;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  background: ${props => props.backgroundColor || '#4B86B4'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  min-height: 50px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
    min-height: 44px;
  }
`;

const SuccessMessage = styled.div`
  color: #4ade80;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
`;

const InfoSection = styled.div`
  display: flex;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(15, 17, 26, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: fit-content;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const InfoDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

const InfoIcon = styled.span`
  font-size: 1.2rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const InfoText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => `${props.color}30`};
    color: ${props => props.color};
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const SocialIcon = styled.span`
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default Contact;
