export const projectsData = [
    {
      id: 'project1',
      title: 'Collab Canvas',
      shortDescription: 'A real-time collaborative whiteboard application',
      fullDescription: `
      This project delivers a powerful real-time collaborative whiteboard where multiple users can simultaneously create and edit content on a shared canvas. Changes are instantly broadcast to all participants with MongoDB-backed persistence ensuring no work is ever lost. The system combines fluid drawing capabilities with efficient state management, creating a seamless digital collaboration space that feels responsive and intuitive across all devices.
      `,
      image: 'public/images/colabcanvas.jpg',
      technologies: ['React', 'JavaScript', 'Deployment', 'MongoDB', 'Nodejs', 'Socket.io'],
      features: [
        'Real-time collaboration with cursor visibility for multiple users',
        'Persistent state management with automatic cloud backup',
      ],
      liveUrl: 'https://sidproject-41.wl.r.appspot.com/',
      codeUrl: 'https://github.com/siddharthkhachane/CollabCanvas/',
      year: 2024
    },
    {
      id: 'project2',
      title: 'WPM - Typing speed',
      shortDescription: 'Audio visualization tool that uses machine learning to generate unique visual patterns.',
      fullDescription: `
        This project combines audio analysis with machine learning to create stunning real-time
        visualizations that respond to music. By analyzing frequency, amplitude, and rhythm patterns,
        the system generates custom visual signatures for different types of music.
        
        The neural network was trained on thousands of audio samples to recognize patterns in
        different musical genres and translate them into corresponding visual elements with
        appropriate color palettes, movement patterns, and geometric structures.
      `,
      image: '/assets/images/project-previews/audio-viz.jpg',
      technologies: ['TensorFlow.js', 'Web Audio API', 'Canvas API', 'React', 'Node.js'],
      features: [
        'Real-time audio analysis',
        'Machine learning-based pattern generation',
        'Custom visualization presets',
        'Audio recording and playback',
        'Exportable visualization as video'
      ],
      liveUrl: 'https://audio-viz.example.com',
      codeUrl: 'https://github.com/yourusername/neural-audio-viz',
      year: 2023
    },
    {
      id: 'project3',
      title: 'Interactive Data Explorer',
      shortDescription: 'A dynamic data visualization platform with intuitive gesture-based navigation.',
      fullDescription: `
        This data exploration tool transforms complex datasets into navigable 3D environments. Users
        can "walk through" their data, using intuitive gestures to filter, sort, and analyze information.
        
        The platform supports various data formats and offers customizable visualization templates
        optimized for different types of data. Advanced features include pattern recognition algorithms
        that automatically highlight correlations and anomalies within the dataset.
      `,
      image: '/assets/images/project-previews/data-explorer.jpg',
      technologies: ['D3.js', 'React', 'WebGL', 'Node.js', 'Express', 'MongoDB'],
      features: [
        'Gesture-based navigation',
        'Multiple visualization modes',
        'Real-time collaborative analysis',
        'Data import/export functionality',
        'Automated insights generation'
      ],
      liveUrl: 'https://data-explorer.example.com',
      codeUrl: 'https://github.com/yourusername/data-explorer',
      year: 2023
    },
    {
      id: 'project4',
      title: 'Responsive E-Commerce Platform',
      shortDescription: 'A modern e-commerce site with advanced filtering and AR product previews.',
      fullDescription: `
        This e-commerce platform focuses on providing an exceptional user experience with 
        intuitive navigation, advanced product filtering, and AR-powered product previews.
        
        Built with performance in mind, the site achieves perfect Lighthouse scores and 
        implements the latest best practices for e-commerce, including one-click checkout,
        personalized recommendations, and seamless mobile experience.
      `,
      image: '/assets/images/project-previews/ecommerce.jpg',
      technologies: ['React', 'Next.js', 'Stripe API', 'AR.js', 'Tailwind CSS', 'Prisma'],
      features: [
        'AR product previews',
        'Advanced filtering system',
        'One-click checkout',
        'Personalized recommendations',
        'Responsive design'
      ],
      liveUrl: 'https://shop.example.com',
      codeUrl: 'https://github.com/yourusername/ecommerce-platform',
      year: 2022
    }
  ];
