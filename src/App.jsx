import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ParticleProvider } from './context/ParticleContext';

import Layout from './components/Layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';

// Public landing
import LandingPage from './pages/LandingPage';

// Gated full-site pages (served under /preview/*)
import HomePage from './pages/HomePage';
import EnterprisePage from './pages/EnterprisePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';

// Always-public legal pages
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SecurityPage from './pages/SecurityPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ParticleProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public landing page */}
              <Route index element={<LandingPage />} />

              {/* Always-public legal pages */}
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="security" element={<SecurityPage />} />

              {/* Full site under /preview/* — gated by middleware.js */}
              <Route path="preview" element={<HomePage />} />
              <Route path="preview/platform" element={<EnterprisePage />} />
              <Route path="preview/features" element={<FeaturesPage />} />
              <Route path="preview/contact" element={<ContactPage />} />
              <Route path="preview/blog" element={<BlogListPage />} />
              <Route path="preview/blog/:slug" element={<BlogPostPage />} />
              <Route path="preview/about" element={<AboutPage />} />
              <Route path="preview/careers" element={<CareersPage />} />

              {/* Back-compat redirects — old external links → /preview/* */}
              <Route path="cloud" element={<Navigate to="/preview/platform" replace />} />
              <Route path="pricing" element={<Navigate to="/preview/features" replace />} />
              <Route path="platform" element={<Navigate to="/preview/platform" replace />} />
              <Route path="features" element={<Navigate to="/preview/features" replace />} />
              <Route path="about" element={<Navigate to="/preview/about" replace />} />
              <Route path="contact" element={<Navigate to="/preview/contact" replace />} />
              <Route path="blog" element={<Navigate to="/preview/blog" replace />} />
              <Route path="blog/:slug" element={<Navigate to="/preview/blog" replace />} />
              <Route path="careers" element={<Navigate to="/preview/careers" replace />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ParticleProvider>
    </HelmetProvider>
  );
}

export default App;
