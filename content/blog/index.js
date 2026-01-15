/**
 * Blog Post Registry
 *
 * Add new posts here. They will automatically appear on the blog listing page.
 * Posts are sorted by date (newest first).
 */

export const posts = [
  // January 2026 - Forward-looking
  {
    slug: 'coweave-workflows-in-practice',
    title: 'CoWeave Workflows in Practice: From Issue to PR with Multi-Agent Orchestration',
    excerpt: 'How multiple AI agents work together across the SDLC—architecture, implementation, review, testing—while maintaining context and consistency through persistent sessions.',
    date: '2026-01-10',
    author: 'CoWeave Team',
    category: 'tutorial',
    tags: ['workflows', 'sdlc', 'automation', 'ai-agents'],
    readingTime: '6 min read',
  },
  {
    slug: 'move-fast-break-things',
    title: 'Why "Move Fast and Break Things" Doesn\'t Work Anymore',
    excerpt: 'Silicon Valley\'s favorite mantra helped Facebook grow from dorm room to dominance. But when software runs healthcare, manufacturing, and critical infrastructure, "breaking things" isn\'t innovation—it\'s negligence.',
    date: '2026-01-08',
    author: 'CoWeave Team',
    category: 'insights',
    tags: ['sdlc', 'quality', 'best-practices'],
    readingTime: '4 min read',
  },
  {
    slug: 'ethics-ai-software-development',
    title: 'The Ethics of AI in Software Development: Transparency, Accountability, Quality',
    excerpt: 'AI-generated code is flooding production systems. But most teams have no visibility into how that code was created, who\'s accountable when it fails, or whether it meets their quality standards.',
    date: '2026-01-08',
    author: 'CoWeave Team',
    category: 'insights',
    tags: ['ai', 'ethics', 'software-quality'],
    readingTime: '4 min read',
  },
  {
    slug: 'ai-skills-gap',
    title: 'The AI Skills Gap: What Engineers Need to Learn in 2025',
    excerpt: 'The software engineering role is undergoing its most dramatic transformation in decades. The question isn\'t whether AI will change engineering—it already has. What skills do engineers need to thrive?',
    date: '2026-01-06',
    author: 'CoWeave Team',
    category: 'insights',
    tags: ['ai', 'engineering', 'skills', 'career-development'],
    readingTime: '4 min read',
  },
  {
    slug: 'build-buy-partner',
    title: 'The Engineering Leader\'s Guide to AI: Build, Buy, or Partner?',
    excerpt: 'Should you build, buy, or partner for AI development workflows? The answer determines not just your budget, but your competitive position for the next three years.',
    date: '2026-01-02',
    author: 'CoWeave Team',
    category: 'leadership',
    tags: ['ai', 'engineering-leadership', 'decision-framework'],
    readingTime: '4 min read',
  },
  // Late December 2025 - Leadership & planning
  {
    slug: 'engineering-capacity-planning',
    title: 'Engineering Capacity Planning in the AI Era: Rethinking Your Roadmap',
    excerpt: 'Your Q1 roadmap assumes developers ship two features per sprint. But what happens when AI gives your team 3-5x velocity? Most engineering leaders are planning for a world that no longer exists.',
    date: '2025-12-28',
    author: 'CoWeave Team',
    category: 'leadership',
    tags: ['engineering-leadership', 'capacity-planning', 'ai-transformation'],
    readingTime: '4 min read',
  },
  {
    slug: 'toil-to-innovation',
    title: 'From 60% Toil to 60% Innovation: Transforming Engineer Experience',
    excerpt: 'Engineers didn\'t become engineers to spend 60% of their time on repetitive tasks. Organizations using structured AI workflows are flipping that ratio. Here\'s what that transformation looks like.',
    date: '2025-12-22',
    author: 'CoWeave Team',
    category: 'insights',
    tags: ['developer-experience', 'productivity', 'career-development'],
    readingTime: '5 min read',
  },
  // Mid December 2025 - Integration guides
  {
    slug: 'integrating-vibe-coding',
    title: 'Integrating with Existing Vibe Coding: What to Expect',
    excerpt: 'Your team is already vibe coding with AI tools like Cursor or Claude Code. But you\'re seeing the variance problem. The question isn\'t whether to abandon your tools—it\'s how to make them work consistently.',
    date: '2025-12-18',
    author: 'CoWeave Team',
    category: 'integration',
    tags: ['ai', 'integration', 'best-practices', 'vibe-coding'],
    readingTime: '5 min read',
  },
  {
    slug: 'first-90-days-metrics',
    title: 'The First 90 Days: Metrics That Matter During CoWeave Implementation',
    excerpt: 'Get the metrics right during your first 90 days with CoWeave, and you\'ll prove ROI, secure broader adoption, and catch context optimization opportunities before inconsistencies calcify into habits.',
    date: '2025-12-14',
    author: 'CoWeave Team',
    category: 'integration',
    tags: ['coweave', 'context-engineering', 'implementation', 'metrics'],
    readingTime: '5 min read',
  },
  {
    slug: 'legacy-workflow-integration',
    title: 'Legacy Workflow Integration: Making AI Work with Your Existing Process',
    excerpt: 'Your SDLC is built around tools and processes refined over years. The question isn\'t whether AI can improve development—it\'s whether you can adopt AI without throwing away years of process refinement.',
    date: '2025-12-10',
    author: 'CoWeave Team',
    category: 'integration',
    tags: ['ai', 'sdlc', 'integration', 'enterprise'],
    readingTime: '5 min read',
  },
  // Early December 2025 - Tutorials & change management
  {
    slug: 'change-management-ai-adoption',
    title: 'Change Management for AI Adoption: Getting Your Team on Board',
    excerpt: 'Your CTO greenlit AI coding assistants. Budget approved. Tools selected. But three months later, only 30% of your team is actually using them. This isn\'t a technology problem—it\'s a people problem.',
    date: '2025-12-06',
    author: 'CoWeave Team',
    category: 'leadership',
    tags: ['ai', 'change-management', 'team-adoption', 'best-practices'],
    readingTime: '5 min read',
  },
  {
    slug: 'getting-started-ai-platform',
    title: 'Getting Started with CoWeave AI Platform',
    excerpt: 'Your complete guide to SDLC automation. Set up workflows, connect context, and go from PRD to production with AI orchestration.',
    date: '2025-12-02',
    author: 'CoWeave Team',
    category: 'tutorial',
    tags: ['ai-platform', 'n8n', 'workflows', 'sdlc', 'tutorial'],
    readingTime: '8 min read',
  },
  // Late November 2025 - Tutorials & foundational
  {
    slug: 'getting-started-ce-studio',
    title: 'Getting Started with Context Engineering Studio',
    excerpt: 'Get from zero to engineered context in under 3 days. CE Studio provides default templates—just customize them to match your team.',
    date: '2025-11-29',
    author: 'CoWeave Team',
    category: 'tutorial',
    tags: ['implementation', 'onboarding', 'ce-studio', 'tutorial'],
    readingTime: '5 min read',
  },
  {
    slug: 'institutional-knowledge-crisis',
    title: 'The Institutional Knowledge Crisis: Why Companies Lose When Engineers Leave',
    excerpt: 'When a senior engineer leaves, most companies focus on the immediate gap. But the real crisis isn\'t what walks out the door—it\'s what was never captured in the first place.',
    date: '2025-11-25',
    author: 'CoWeave Team',
    category: 'insights',
    tags: ['knowledge-management', 'engineering-culture', 'sdlc'],
    readingTime: '4 min read',
  },
  {
    slug: 'human-centered-ai',
    title: 'Human-Centered AI: Why We\'ll Never Automate Away Engineers',
    excerpt: 'AI can write code faster than any human. But engineering isn\'t just about writing code—it\'s about making judgment calls that balance competing priorities. These are human problems requiring context and accountability.',
    date: '2025-11-22',
    author: 'CoWeave Team',
    category: 'insights',
    tags: ['ai', 'engineering', 'human-judgment'],
    readingTime: '4 min read',
  },
  // Mid November 2025 - Foundational concepts
  {
    slug: 'reimagined-engineering-reality',
    title: 'The Reimagined Engineering Reality',
    excerpt: 'Life doesn\'t get perfect with CoWeave—but it gets dramatically better. Engineering teams are drowning in invisible taxes that silently drain 40-60% of their potential velocity.',
    date: '2025-11-18',
    author: 'CoWeave Team',
    category: 'insights',
    tags: ['engineering', 'productivity', 'sdlc', 'ai', 'workflows'],
    readingTime: '6 min read',
  },
  {
    slug: 'variance-cost',
    title: 'The Variance Cost: Why AI Coding Tools Need Guardrails',
    excerpt: 'The Variance Cost is the organizational penalty paid when team members use AI coding tools independently, without shared standards or guardrails. Learn how Context Engineering eliminates this hidden tax.',
    date: '2025-11-15',
    author: 'CoWeave Team',
    category: 'insights',
    tags: ['ai', 'sdlc', 'best-practices', 'context-engineering'],
    readingTime: '7 min read',
  },
  // Add new posts above this line
];

// Blog categories with metadata
export const categories = {
  all: {
    name: 'All Articles',
    description: 'Browse all CoWeave articles',
    icon: 'FaNewspaper',
  },
  tutorial: {
    name: 'Getting Started',
    description: 'Step-by-step guides',
    icon: 'FaGraduationCap',
  },
  leadership: {
    name: 'Leadership',
    description: 'For engineering leaders',
    icon: 'FaUserTie',
  },
  integration: {
    name: 'Integration',
    description: 'Adoption & workflows',
    icon: 'FaCogs',
  },
  insights: {
    name: 'Insights',
    description: 'AI & engineering culture',
    icon: 'FaLightbulb',
  },
};

// Helper to get post by slug
export const getPostBySlug = (slug) => posts.find(p => p.slug === slug);

// Helper to get all posts sorted by date
export const getAllPosts = () => [...posts].sort((a, b) =>
  new Date(b.date) - new Date(a.date)
);

// Helper to get posts by category
export const getPostsByCategory = (category) => {
  if (category === 'all') return getAllPosts();
  return getAllPosts().filter(p => p.category === category);
};

// Helper to search posts
export const searchPosts = (query) => {
  const q = query.toLowerCase();
  return getAllPosts().filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.tags.some(tag => tag.toLowerCase().includes(q))
  );
};
