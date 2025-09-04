export interface NewsPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  teaser: string;
  image: string;
  content?: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: 'collector-bonuses',
    title: 'Weekly Collector Bonuses Now Live',
    category: 'Updates',
    date: '2024-01-15',
    readTime: '3 min',
    teaser: 'Earn exclusive rewards and rare collectibles in featured games.',
    image: '/news/collector-bonuses.jpg'
  },
  {
    id: 'zombie-survival-update',
    title: 'Zombie Survival Gets Major Update',
    category: 'Game Updates',
    date: '2024-01-12',
    readTime: '5 min',
    teaser: 'New weapons, maps, and survival mechanics added to the apocalypse.',
    image: '/news/zombie-update.jpg'
  },
  {
    id: 'summer-blitz-giveaway',
    title: 'Summer Blitz Giveaway - Win Big!',
    category: 'Events',
    date: '2024-01-10',
    readTime: '2 min',
    teaser: 'Enter to win premium game bundles and exclusive StickBlitz merchandise.',
    image: '/news/summer-giveaway.jpg'
  },
  {
    id: 'sb-plus-rewards',
    title: 'Introducing SB+ Premium Rewards',
    category: 'Features',
    date: '2024-01-08',
    readTime: '4 min',
    teaser: 'Unlock exclusive content, early access, and special perks.',
    image: '/news/sb-plus.jpg'
  },
  {
    id: 'drift-week',
    title: 'Drift Week Championship Begins',
    category: 'Tournaments',
    date: '2024-01-05',
    readTime: '3 min',
    teaser: 'Compete in high-speed racing tournaments for epic prizes.',
    image: '/news/drift-week.jpg'
  },
  {
    id: 'circoloop-collab',
    title: 'CircoLoop Collaboration Announced',
    category: 'Partnerships',
    date: '2024-01-03',
    readTime: '2 min',
    teaser: 'New puzzle mechanics and exclusive content coming soon.',
    image: '/news/circoloop.jpg'
  },
  {
    id: 'community-spotlight',
    title: 'Community Spotlight: Amazing Creations',
    category: 'Community',
    date: '2024-01-01',
    readTime: '4 min',
    teaser: 'Featuring incredible user-generated content and achievements.',
    image: '/news/community.jpg'
  },
  {
    id: 'patch-notes',
    title: 'Latest Patch Notes - Version 2.4.1',
    category: 'Updates',
    date: '2023-12-28',
    readTime: '6 min',
    teaser: 'Bug fixes, performance improvements, and new features.',
    image: '/news/patch-notes.jpg'
  }
];