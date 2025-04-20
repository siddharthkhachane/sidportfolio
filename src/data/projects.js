export const projectsData = [
    {
      id: 'project1',
      title: 'Immersive Virtual Gallery',
      shortDescription: 'A WebGL-powered virtual art gallery with interactive 3D exhibits.',
      fullDescription: `
        This project pushes the boundaries of web-based 3D experiences with a fully immersive
        virtual art gallery. Users can navigate through custom-designed exhibition spaces and
        interact with artwork in ways impossible in physical galleries.
        
        The experience features spatial audio, dynamic lighting systems, and physics-based
        interactions that respond naturally to user inputs. Each exhibition space was carefully
        designed to showcase different artistic styles and mediums.
      `,
      image: '/assets/images/project-previews/gallery.jpg',
      technologies: ['Three.js', 'WebGL', 'React', 'GLSL Shaders', 'Web Audio API'],
      features: [
        'Fully explorable 3D gallery spaces',
        'Interactive artwork elements',
        'Custom lighting and post-processing effects',
        'Spatial audio environment',
        'Responsive design works on both desktop and mobile'
      ],
      liveUrl: 'https://gallery.example.com',
      codeUrl: 'https://github.com/yourusername/virtual-gallery',
      year: 2024
    },
    {
      id: 'project2',
      title: 'Neural Audio Visualizer',
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