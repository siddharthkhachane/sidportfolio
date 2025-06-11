export const projectsData = [
    {
      id: 'project1',
      title: 'Collab Canvas',
      shortDescription: 'A real-time collaborative whiteboard application',
      fullDescription: `
      This project delivers a powerful real-time collaborative whiteboard where multiple users can simultaneously create and edit content on a shared canvas. Changes are instantly broadcast to all participants with MongoDB-backed persistence ensuring no work is ever lost. The system combines fluid drawing capabilities with efficient state management, creating a seamless digital collaboration space that feels responsive and intuitive across all devices.
      `,
      image: 'images/colab.png',
      technologies: ['React', 'JavaScript', 'Deployment', 'MongoDB', 'Nodejs', 'Socket.io'],
      features: [
        'Real-time collaboration with cursor visibility for multiple users',
        'Persistent state management with automatic cloud backup',
      ],
      liveUrl: 'https://collab-canvas-topaz.vercel.app/',
      codeUrl: 'https://github.com/siddharthkhachane/CollabCanvas',
      year: 2025
    },
    {
      id: 'project2',
      title: 'WordSlayer',
      shortDescription: 'Fast-paced typing game where players defeat enemies by correctly typing displayed words under time pressure and varying difficulties',
      fullDescription: `WordSlayer is a dynamic and engaging word game where players race against the clock to form words, earn points, and outsmart their opponents. With increasing difficulty and quick decision-making, WordSlayer sharpens vocabulary skills while delivering fast-paced, addictive fun.
      `,
      image: 'images/wordslayer1.png',
      technologies: ['React', 'Next.js', 'Vercel', 'Tailwind CSS'],
      features: [
        'Real-time combat mechanics',
        'Visual Feedback, Health Bars',
        'Approach Animations',
        'Varying Difficulties',
        'Word Per Minute Feedback'
      ],
      liveUrl: 'https://word-slayer-kappa.vercel.app/',
      codeUrl: 'https://github.com/siddharthkhachane/WordSlayer',
      year: 2025
    },
    {
      id: 'project3',
      title: 'MazeRunner',
      shortDescription: 'A reinforcement learning sandbox to visualize how an agent learns to achive its goal',
      fullDescription: `
        MazeRunner is a reinforcement learning project focused on training an AI agent to autonomously navigate complex mazes. The agent learns optimal paths by exploring its environment, receiving rewards, and continuously improving its strategy through interaction and feedback.
      `,
      image: 'images/MazeRunner.png',
      technologies: ['Reinforcement Learning', 'React', 'CSS'],
      features: [
        'Draw Maze, set starting points',
        'Reinforcement Learning',
        'Live score of Agent'
      ],
      liveUrl: 'https://mazerunner-ai.vercel.app/',
      codeUrl: 'https://github.com/siddharthkhachane/mazerunner.ai',
      year: 2025
    }
  ];
