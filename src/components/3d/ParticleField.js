import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ color }) => {
  // Create a ref for the entire points object instead of just the geometry
  const pointsRef = useRef();
  
  // Create particles with memoization to avoid recreating on every render
  const particles = useMemo(() => {
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    return geometry;
  }, []);
  
  // Animate particles on each frame
  useFrame((state) => {
    if (pointsRef.current) {
      // Rotate the entire points object which does have rotation properties
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <primitive object={particles} />
      <pointsMaterial 
        size={0.1} 
        color={color} 
        transparent 
        opacity={0.6} 
        sizeAttenuation={true} 
      />
    </points>
  );
};

export default ParticleField;