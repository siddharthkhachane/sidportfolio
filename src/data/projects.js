export const projectsData = [
    {
      id: 'project1',
      title: 'Collab Canvas',
      shortDescription: 'A real-time collaborative whiteboard application',
      fullDescription: `
      This project delivers a powerful real-time collaborative whiteboard where multiple users can simultaneously create and edit content on a shared canvas. Changes are instantly broadcast to all participants with MongoDB-backed persistence ensuring no work is ever lost. The system combines fluid drawing capabilities with efficient state management, creating a seamless digital collaboration space that feels responsive and intuitive across all devices.
      `,
      image: 'public/images/colab.png',
      technologies: ['React', 'JavaScript', 'Deployment', 'MongoDB', 'Nodejs', 'Socket.io'],
      features: [
        'Real-time collaboration with cursor visibility for multiple users',
        'Persistent state management with automatic cloud backup',
      ],
      liveUrl: 'https://collab-canvas-topaz.vercel.app/',
      codeUrl: 'https://github.com/siddharthkhachane/colab/',
      year: 2025
    },
    {
      id: 'project2',
      title: 'WordSlayer',
      shortDescription: 'Fast-paced typing game where players defeat enemies by correctly typing displayed words under time pressure and varying difficulties',
      fullDescription: `
        This project combines audio analysis with machine learning to create stunning real-time
        visualizations that respond to music. By analyzing frequency, amplitude, and rhythm patterns,
        the system generates custom visual signatures for different types of music.
        
        The neural network was trained on thousands of audio samples to recognize patterns in
        different musical genres and translate them into corresponding visual elements with
        appropriate color palettes, movement patterns, and geometric structures.
      `,
      image: 'public/images/wordslayer1.png',
      technologies: ['React', 'Next.js', 'Vercel', 'Tailwind CSS'],
      features: [
        'Real-time combat mechanics',
        'Visual Feedback, Health Bars',
        'Approach Animations',
        'Varying Difficulties',
        'Word Per Minute Feedback'
      ],
      liveUrl: 'https://audio-viz.example.com',
      codeUrl: 'https://github.com/yourusername/neural-audio-viz',
      year: 2025
    },
    {
      id: 'project3',
      title: 'MazeRunner',
      shortDescription: 'A reinforcement learning sandbox to visualize how an agent learns to achive its goal',
      fullDescription: `
        This data exploration tool transforms complex datasets into navigable 3D environments. Users
        can "walk through" their data, using intuitive gestures to filter, sort, and analyze information.
        
        The platform supports various data formats and offers customizable visualization templates
        optimized for different types of data. Advanced features include pattern recognition algorithms
        that automatically highlight correlations and anomalies within the dataset.
      `,
      image: 'public/images/Mazerunner.png',
      technologies: ['Reinforcement Learning', 'React', 'CSS'],
      features: [
        'Gesture-based navigation',
        'Multiple visualization modes',
        'Real-time collaborative analysis',
        'Data import/export functionality',
        'Automated insights generation'
      ],
      liveUrl: 'https://data-explorer.example.com',
      codeUrl: 'https://github.com/yourusername/data-explorer',
      year: 2025
    }
  ];
