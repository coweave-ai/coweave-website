import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';

// Small helper: redirect a dynamic-segment route to its target while
// preserving the :slug param. <Navigate> alone drops the param, which would
// turn /blog/some-post into /blog (the list) instead of
// /blog/some-post (the post).
export const SlugRedirect = ({ to }) => {
  const { slug } = useParams();
  return <Navigate to={`${to}/${slug}`} replace />;
};

import Layout from './components/Layout/Layout';

// Full public site
import HomePage from './pages/HomePage';
import EnterprisePage from './pages/EnterprisePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import DocsListPage from './pages/DocsListPage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';

// Always-public legal pages
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SecurityPage from './pages/SecurityPage';
import NotFoundPage from './pages/NotFoundPage';

// The full route table for the public site. Extracted from App so it can be
// mounted under a MemoryRouter in tests (App wraps this in a BrowserRouter).
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Homepage — full product home */}
        <Route index element={<HomePage />} />

        {/* Public product site at clean root URLs */}
        <Route path="platform" element={<EnterprisePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<BlogListPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="docs" element={<DocsListPage />} />
        <Route path="docs/:slug" element={<DocsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />

        {/* Legal pages */}
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="security" element={<SecurityPage />} />

        {/* Back-compat redirects — old gated /preview/* links → clean URLs */}
        <Route path="preview" element={<Navigate to="/" replace />} />
        <Route path="preview/platform" element={<Navigate to="/platform" replace />} />
        <Route path="preview/features" element={<Navigate to="/features" replace />} />
        <Route path="preview/contact" element={<Navigate to="/contact" replace />} />
        <Route path="preview/blog" element={<Navigate to="/blog" replace />} />
        <Route path="preview/blog/:slug" element={<SlugRedirect to="/blog" />} />
        <Route path="preview/docs" element={<Navigate to="/docs" replace />} />
        <Route path="preview/docs/:slug" element={<SlugRedirect to="/docs" />} />
        <Route path="preview/about" element={<Navigate to="/about" replace />} />
        <Route path="preview/careers" element={<Navigate to="/careers" replace />} />

        {/* Legacy external links */}
        <Route path="cloud" element={<Navigate to="/platform" replace />} />
        <Route path="pricing" element={<Navigate to="/features" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
