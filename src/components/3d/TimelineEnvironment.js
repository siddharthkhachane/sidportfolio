import React from 'react';
import TimelineNode from './TimelineNode';
import ParticleField from './ParticleField';

const TimelineEnvironment = ({ activeSection, sectionsData }) => {
  return (
    <group>
      {/* Timeline Nodes - one for each section */}
      {sectionsData.map((section, index) => (
        <TimelineNode 
          key={section.id}
          position={[(index - activeSection) * 4, 0, 0]} 
          color={section.color}
          active={index === activeSection}
          index={index}
        />
      ))}
      
      {/* Background Particle System */}
      <ParticleField color={sectionsData[activeSection].color} />
    </group>
  );
};

export default TimelineEnvironment;