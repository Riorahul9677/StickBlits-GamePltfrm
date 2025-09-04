export interface Game {
  id: string;
  title: string;
  description: string;
  genre: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  icon: string;
  cover: string;
  featured?: boolean;
}

export const games: Game[] = [
  // Action Games
  {
    id: 'stick-drift',
    title: 'Stick Drift',
    description: 'High-speed racing through neon-lit cities with stick figure drivers.',
    genre: 'Racing',
    difficulty: 'Medium',
    tags: ['Racing', 'Arcade', 'Neon'],
    icon: '/game-icons/stick-drift-icon.png',
    cover: '/game-covers/stick-drift-cover.jpg',
    featured: true
  },
  {
    id: 'cayo-perico-zombies',
    title: 'Cayo Perico: Zombies',
    description: 'Survive waves of zombies on a tropical island paradise.',
    genre: 'Action',
    difficulty: 'Hard',
    tags: ['Zombies', 'Survival', 'Island'],
    icon: '/game-icons/zombies-icon.png',
    cover: '/game-covers/zombies-cover.jpg',
    featured: true
  },
  {
    id: 'red-west-ii',
    title: 'Red West II',
    description: 'Western adventure with stick figure outlaws and epic showdowns.',
    genre: 'Adventure',
    difficulty: 'Medium',
    tags: ['Western', 'Adventure', 'Story'],
    icon: '/game-icons/red-west-icon.png',
    cover: '/game-covers/red-west-cover.jpg',
    featured: true
  },
  {
    id: 'blitz-runner',
    title: 'Blitz Runner',
    description: 'Fast-paced parkour through cyberpunk landscapes.',
    genre: 'Action',
    difficulty: 'Hard',
    tags: ['Parkour', 'Cyberpunk', 'Speed'],
    icon: '/game-icons/blitz-runner-icon.png',
    cover: '/game-covers/blitz-runner-cover.jpg',
    featured: true
  },
  {
    id: 'puzzle-pop',
    title: 'Puzzle Pop',
    description: 'Colorful bubble-popping puzzle game with stick figure themes.',
    genre: 'Puzzle',
    difficulty: 'Easy',
    tags: ['Puzzle', 'Casual', 'Colorful'],
    icon: '/game-icons/puzzle-pop-icon.png',
    cover: '/game-covers/puzzle-pop-cover.jpg'
  },
  {
    id: 'shadow-fighter',
    title: 'Shadow Fighter',
    description: 'Martial arts combat with fluid stick figure animations.',
    genre: 'Action',
    difficulty: 'Hard',
    tags: ['Fighting', 'Martial Arts', 'Combat'],
    icon: '/game-icons/shadow-fighter-icon.png',
    cover: '/game-covers/shadow-fighter-cover.jpg'
  },
  {
    id: 'neon-tennis',
    title: 'Neon Tennis',
    description: 'Futuristic tennis with glowing courts and stick players.',
    genre: 'Sports',
    difficulty: 'Medium',
    tags: ['Tennis', 'Sports', 'Neon'],
    icon: '/game-icons/neon-tennis-icon.png',
    cover: '/game-covers/neon-tennis-cover.jpg'
  },
  {
    id: 'space-stick',
    title: 'Space Stick',
    description: 'Intergalactic adventure with stick astronauts.',
    genre: 'Adventure',
    difficulty: 'Medium',
    tags: ['Space', 'Adventure', 'Sci-Fi'],
    icon: '/game-icons/space-stick-icon.png',
    cover: '/game-covers/space-stick-cover.jpg'
  },
  {
    id: 'stick-soccer',
    title: 'Stick Soccer',
    description: 'Fast-paced soccer with stick figure teams.',
    genre: 'Sports',
    difficulty: 'Easy',
    tags: ['Soccer', 'Sports', 'Team'],
    icon: '/game-icons/stick-soccer-icon.png',
    cover: '/game-covers/stick-soccer-cover.jpg'
  },
  {
    id: 'cyber-heist',
    title: 'Cyber Heist',
    description: 'Plan and execute the perfect digital heist.',
    genre: 'Strategy',
    difficulty: 'Hard',
    tags: ['Heist', 'Strategy', 'Cyberpunk'],
    icon: '/game-icons/cyber-heist-icon.png',
    cover: '/game-covers/cyber-heist-cover.jpg'
  }
];

export const genres = ['Action', 'Puzzle', 'Racing', 'Sports', 'Adventure', 'Strategy'];