import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from '../common/ParticleBackground';
import { Canvas } from '@react-three/fiber';
import TimelineEnvironment from '../3d/TimelineEnvironment';
import { useNavigation } from '../../context/NavigationContext';

const Layout = ({ children }) => {
  const { activeSection, sections } = useNavigation();
  
  return (
    <LayoutContainer>
      <Navbar />
      
      {/* 3D Background Environment */}
      <CanvasContainer>
        <Canvas>
          <ambientLight intensity={0.5} />
          <TimelineEnvironment 
            activeSection={activeSection} 
            sectionsData={sections} 
          />
        </Canvas>
      </CanvasContainer>
      
      {/* Particle Overlay */}
      <ParticleBackground />
      
      {/* Main Content */}
      <ContentContainer>
        {children}
      </ContentContainer>
      
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #0F111A;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ContentContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  > div {
    width: 100%;
    max-width: 1100px;
  }
`;

export default Layout;