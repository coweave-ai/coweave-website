import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation, Outlet } from 'react-router-dom';

// Isolate the route table from the (heavy) real page components: mock Layout
// to render just its <Outlet/>, and every page to a tiny marker element. This
// keeps the test focused on the routing/redirect config in AppRoutes.jsx.
const { makePage } = vi.hoisted(() => {
  const make = (name) => async () => {
    const react = await vi.importActual('react');
    return {
      default: () =>
        react.createElement('div', { 'data-testid': `page-${name}` }, name),
    };
  };
  return { makePage: make };
});

vi.mock('../components/Layout/Layout', async () => {
  const react = await vi.importActual('react');
  const rr = await vi.importActual('react-router-dom');
  return {
    default: () =>
      react.createElement(
        'div',
        { 'data-testid': 'layout' },
        react.createElement(rr.Outlet)
      ),
  };
});

vi.mock('../pages/HomePage', makePage('HomePage'));
vi.mock('../pages/EnterprisePage', makePage('EnterprisePage'));
vi.mock('../pages/FeaturesPage', makePage('FeaturesPage'));
vi.mock('../pages/ContactPage', makePage('ContactPage'));
vi.mock('../pages/BlogListPage', makePage('BlogListPage'));
vi.mock('../pages/BlogPostPage', makePage('BlogPostPage'));
vi.mock('../pages/DocsListPage', makePage('DocsListPage'));
vi.mock('../pages/DocsPage', makePage('DocsPage'));
vi.mock('../pages/AboutPage', makePage('AboutPage'));
vi.mock('../pages/CareersPage', makePage('CareersPage'));
vi.mock('../pages/PrivacyPage', makePage('PrivacyPage'));
vi.mock('../pages/TermsPage', makePage('TermsPage'));
vi.mock('../pages/SecurityPage', makePage('SecurityPage'));
vi.mock('../pages/NotFoundPage', makePage('NotFoundPage'));

// Imported after the mocks so AppRoutes picks up the mocked modules.
import AppRoutes from '../AppRoutes';

// Renders the final resolved pathname so redirect targets can be asserted.
function LocationSpy() {
  const { pathname } = useLocation();
  return <span data-testid="location">{pathname}</span>;
}

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LocationSpy />
      <AppRoutes />
    </MemoryRouter>
  );
}

describe('clean root URLs render the right page', () => {
  it.each([
    ['/', 'HomePage'],
    ['/platform', 'EnterprisePage'],
    ['/features', 'FeaturesPage'],
    ['/contact', 'ContactPage'],
    ['/blog', 'BlogListPage'],
    ['/blog/my-first-post', 'BlogPostPage'],
    ['/docs', 'DocsListPage'],
    ['/docs/getting-started', 'DocsPage'],
    ['/about', 'AboutPage'],
    ['/careers', 'CareersPage'],
    ['/privacy', 'PrivacyPage'],
    ['/terms', 'TermsPage'],
    ['/security', 'SecurityPage'],
  ])('%s renders %s and stays put', async (path, page) => {
    renderAt(path);
    expect(await screen.findByTestId(`page-${page}`)).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent(path);
  });
});

describe('old /preview/* links redirect to clean URLs', () => {
  it.each([
    ['/preview', '/', 'HomePage'],
    ['/preview/platform', '/platform', 'EnterprisePage'],
    ['/preview/features', '/features', 'FeaturesPage'],
    ['/preview/contact', '/contact', 'ContactPage'],
    ['/preview/blog', '/blog', 'BlogListPage'],
    ['/preview/docs', '/docs', 'DocsListPage'],
    ['/preview/about', '/about', 'AboutPage'],
    ['/preview/careers', '/careers', 'CareersPage'],
  ])('%s -> %s', async (from, to, page) => {
    renderAt(from);
    expect(await screen.findByTestId(`page-${page}`)).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent(to);
  });

  it('preserves the :slug when redirecting a blog post', async () => {
    renderAt('/preview/blog/hello-world');
    expect(await screen.findByTestId('page-BlogPostPage')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/blog/hello-world');
  });

  it('preserves the :slug when redirecting a docs page', async () => {
    renderAt('/preview/docs/install-guide');
    expect(await screen.findByTestId('page-DocsPage')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/docs/install-guide');
  });
});

describe('legacy external links redirect', () => {
  it.each([
    ['/cloud', '/platform', 'EnterprisePage'],
    ['/pricing', '/features', 'FeaturesPage'],
  ])('%s -> %s', async (from, to, page) => {
    renderAt(from);
    expect(await screen.findByTestId(`page-${page}`)).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent(to);
  });
});

describe('unknown routes', () => {
  it('render the 404 page without redirecting', async () => {
    renderAt('/does-not-exist');
    expect(await screen.findByTestId('page-NotFoundPage')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/does-not-exist');
  });
});
