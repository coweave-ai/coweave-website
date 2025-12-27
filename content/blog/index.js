/**
 * Blog Post Registry
 *
 * Add new posts here. They will automatically appear on the blog listing page.
 * Posts are sorted by date (newest first).
 */

export const posts = [
  {
    slug: 'sample-post',
    title: 'The Variance Cost: Why AI Coding Tools Need Guardrails',
    excerpt: 'When five developers use AI coding tools independently, you get five different approaches. This hidden cost is silently draining engineering productivity.',
    date: '2025-12-27',
    author: 'CoWeave Team',
    tags: ['ai', 'sdlc', 'best-practices'],
    readingTime: '4 min read',
  },
  // Add new posts above this line
];

// Helper to get post by slug
export const getPostBySlug = (slug) => posts.find(p => p.slug === slug);

// Helper to get all posts sorted by date
export const getAllPosts = () => [...posts].sort((a, b) =>
  new Date(b.date) - new Date(a.date)
);
