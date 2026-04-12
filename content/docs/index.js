/**
 * Documentation Registry
 *
 * Add new docs here. They appear automatically on the docs landing page.
 * Sorted by category and then by orderIndex within each category.
 *
 * Each doc is rendered from `content/docs/<slug>.mdx` via DocsPage.jsx.
 *
 * Categories are stable, non-time-based groupings (unlike blog posts which
 * are dated). The intent is "browse the manual," not "scroll the timeline."
 */

export const docs = [
  {
    slug: 'deploying-coweave-single-vm',
    title: 'Self-Hosting CoWeave: From Tarball to Running Platform in 45 Minutes',
    excerpt:
      'You just received your CoWeave package. Here\'s the complete walkthrough — directory layout, values files, infrastructure script, and deployment — designed to get you from a fresh VM to a running platform before lunch.',
    category: 'setup',
    orderIndex: 1,
    readingTime: '10 min read',
    lastUpdated: '2026-04-12',
  },
];

// Doc categories with metadata. Stable groupings, not time-based.
export const docCategories = {
  all: {
    name: 'All Docs',
    description: 'Every guide we have',
    icon: 'FaBook',
  },
  setup: {
    name: 'Setup & Install',
    description: 'Getting CoWeave running on your infrastructure',
    icon: 'FaServer',
  },
  operations: {
    name: 'Operations',
    description: 'Running, upgrading, and maintaining the platform',
    icon: 'FaCogs',
  },
  reference: {
    name: 'Reference',
    description: 'Configuration options, APIs, and architecture',
    icon: 'FaBookOpen',
  },
};

// Helpers
export const getDocBySlug = (slug) => docs.find((d) => d.slug === slug);

export const getAllDocs = () => [...docs].sort((a, b) => {
  // Sort by category then by orderIndex
  if (a.category !== b.category) return a.category.localeCompare(b.category);
  return (a.orderIndex || 0) - (b.orderIndex || 0);
});

export const getDocsByCategory = (category) => {
  if (category === 'all') return getAllDocs();
  return getAllDocs().filter((d) => d.category === category);
};

export const searchDocs = (query) => {
  const q = query.toLowerCase();
  return getAllDocs().filter(
    (d) =>
      d.title.toLowerCase().includes(q) || d.excerpt.toLowerCase().includes(q)
  );
};
