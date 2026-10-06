export const PROJECTS_DATA = [
  {
    id: '9jaclip',
    title: '9jaClip — Media & Video Clipping Website',
    tagline: 'High-speed video clipping, highlight trimming, and viral moment sharing platform',
    category: 'Video & Media Clipping Platform',
    year: '2025–2026',
    status: 'Live Production',
    image: '/src/assets/images/project_9jaclip_music_1791285548809.jpg',
    liveUrl: 'https://9jaclip-global.vercel.app/studio',
    githubUrl: 'https://github.com/BARDIS99',
    tags: ['React', 'TypeScript', 'Supabase', 'Video API', 'Timeline Trimmer', 'Tailwind CSS', 'Vercel CDN'],
    summary: 'A fast, modern clipping website built for content creators, streamers, and viewers to capture, cut, timestamp, and share viral video highlights and moments across Nigerian and global digital media.',
    architecturalHighlights: [
      'Sub-second frame-accurate video clipping and timestamp trimming engine',
      'Client-side video timeline scrubber with real-time preview and 60fps playhead',
      'Instant shareable clip URL generation with open graph previews for social feeds',
      'Supabase cloud storage integration for persistent creator clip libraries',
      'Low-latency video chunk streaming optimized for mobile and varying network bandwidth',
      'Responsive dark-mode clip creator workspace with quick download and export tools'
    ],
    metrics: {
      clippingSpeed: '< 1.2s clip export',
      timelineAccuracy: 'Frame-accurate',
      framework: 'React + TypeScript',
      storage: 'Supabase Cloud Video'
    }
  }
];

export const UPCOMING_PROJECTS = [
  {
    id: 'trading-terminal',
    title: 'Algorithmic Market Intelligence Tool',
    tagline: 'Real-time order block scanner & risk-to-reward analytics calculator',
    category: 'FinTech & Trading',
    status: 'In Active Development',
    tags: ['TypeScript', 'Trading APIs', 'WebSockets', 'Chart Engine']
  },
  {
    id: 'creator-suite',
    title: 'Next-Gen Full-Stack Application',
    tagline: 'High-performance cloud workspace currently being staged for push',
    category: 'Cloud Engineering',
    status: 'Staged for Release',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS']
  }
];

export const TRADING_METHODOLOGY = {
  focusMarkets: ['Crypto (BTC, ETH)', 'FX Majors (EUR/USD, GBP/USD)', 'Commodities (Gold · XAU/USD)'],
  principles: [
    { title: 'Liquidity & Market Structure', desc: 'Identifying smart money sweeps, fair value gaps, and institutional key levels.' },
    { title: 'Asymmetric Risk Management', desc: 'Strict 1% maximum capital risk per trade with 1:3+ target reward ratios.' },
    { title: 'Systematic Execution Discipline', desc: 'Trading documented edge without emotional impulse, backed by statistical journal tracking.' },
    { title: 'Developer-Trader Synergy', desc: 'Building custom indicators, position size scripts, and data scrapers for edge.' }
  ]
};

export const TECHNICAL_PILLARS = [
  {
    index: '01',
    title: 'Modern Frontend Architecture',
    subtitle: 'React, TypeScript, Vite & Modern Web APIs',
    description: 'Crafting responsive, zero-jank user interfaces that handle complex state, real-time media feeds, and low-latency canvas graphics without compromising load speeds.',
    capabilities: ['React 18/19 & Hooks', 'Strict TypeScript Typing', 'Web Audio & Canvas APIs', 'Tailwind CSS Modern Engine']
  },
  {
    index: '02',
    title: 'Robust Backend & Database Design',
    subtitle: 'Node.js, Python, Supabase & Cloud Datastores',
    description: 'Designing data schemas with relational rigor, row-level access control, authenticated sessions, and edge-deployed microservices built for uninterrupted uptime.',
    capabilities: ['RESTful & GraphQL Design', 'Supabase & PostgreSQL', 'Python Automation & Scripting', 'Authentication & RBAC']
  },
  {
    index: '03',
    title: 'Financial Market Trading & Risk Analysis',
    subtitle: 'Systematic Price Action & Market Structure',
    description: 'Applying quantitative discipline to financial markets. Identifying institutional liquidity sweeps, managing capital with asymmetric risk:reward ratios, and executing with statistical precision.',
    capabilities: ['Institutional Order Flow', 'Crypto & FX Market Structure', 'Strict Capital Preservation (1% Max)', 'Statistical Edge & Backtesting']
  },
  {
    index: '04',
    title: 'Production Deployment & Operations',
    subtitle: 'Vercel Edge, Git & SIWES Practice',
    description: 'Shipping real-world enterprise software and public platforms. Corporate experience at Sandlip Oasis combined with continuous deployment workflows on Vercel.',
    capabilities: ['Vercel Edge Network', 'Git Release Engineering', 'Sandlip Oasis Enterprise SIWES', 'Core Web Vitals Tuning']
  }
];
