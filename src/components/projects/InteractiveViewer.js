import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

// Main component
const InteractiveViewer = ({ project }) => {
  const [viewing3D, setViewing3D] = useState(false);
  
  const toggleView = () => {
    setViewing3D(!viewing3D);
  };
  
  return (
    <ViewerContainer>
      {!viewing3D ? (
        // Standard image view
        <ImageView>
          <ProjectImage src={project.image} alt={project.title} />
          <ViewButton onClick={toggleView}>View in 3D</ViewButton>
        </ImageView>
      ) : (
        // 3D interactive view
        <ModelView>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <ProjectModel project={project} />
          </Canvas>
          <ViewButton onClick={toggleView}>View Image</ViewButton>
        </ModelView>
      )}
    </ViewerContainer>
  );
};

// 3D model component
const ProjectModel = ({ project }) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  
  // Create texture from project image
  const texture = new THREE.TextureLoader().load(project.image);
  
  // Animation springs
  const springs = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    rotation: active 
      ? [THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(45), 0] 
      : [0, 0, 0],
    config: { mass: 3, tension: 400, friction: 30 }
  });
  
  // Animation loop
  useFrame((state) => {
    if (!active) {
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <animated.mesh
      ref={mesh}
      scale={springs.scale}
      rotation={springs.rotation}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[3, 2, 0.1]} />
      <meshStandardMaterial 
        map={texture} 
        metalness={0.5}
        roughness={0.2}
      />
      {/* Add some edge highlighting when hovered */}
      {hovered && (
        <lineSegments>
          <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(3.02, 2.02, 0.12)]} />
          <lineBasicMaterial attach="material" color="white" linewidth={2} />
        </lineSegments>
      )}
    </animated.mesh>
  );
};

// Styled components
const ViewerContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const ImageView = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ModelView = styled.div`
  width: 100%;
  height: 100%;
  background: #0a0b10;
`;

const ViewButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
  }
`;

export default InteractiveViewer;