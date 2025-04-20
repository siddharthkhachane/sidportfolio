import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

const TimelineNode = ({ position, color, active, index }) => {
  const meshRef = useRef();
  
  // Animation springs
  const springs = useSpring({
    scale: active ? [1.2, 1.2, 1.2] : [0.8, 0.8, 0.8],
    rotation: active ? [0, Math.PI * 2, 0] : [0, 0, 0],
    config: { mass: 2, tension: 300, friction: 30 }
  });
  
  // Animation frame updates
  useFrame((state) => {
    if (meshRef.current) {
      // Add subtle floating animation
      meshRef.current.rotation.y += 0.003;
      if (!active) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      }
    }
  });
  
  return (
    <animated.mesh 
      ref={meshRef} 
      position={position} 
      scale={springs.scale}
      rotation={springs.rotation}
    >
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={active ? 0.5 : 0.2}
        roughness={0.3}
        metalness={0.8}
      />
    </animated.mesh>
  );
};

export default TimelineNode;