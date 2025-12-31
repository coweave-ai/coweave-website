import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ParticleProvider } from './context/ParticleContext';

import Layout from './components/Layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import ParticleToggle from './components/common/ParticleToggle';

// Pages
import HomePage from './pages/HomePage';
import CloudPage from './pages/CloudPage';
import EnterprisePage from './pages/EnterprisePage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
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
              <Route index element={<HomePage />} />
              <Route path="cloud" element={<CloudPage />} />
              <Route path="platform" element={<EnterprisePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="blog" element={<BlogListPage />} />
              <Route path="blog/:slug" element={<BlogPostPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="careers" element={<CareersPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="security" element={<SecurityPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <ParticleToggle />
        </BrowserRouter>
      </ParticleProvider>
    </HelmetProvider>
  );
}

export default App;
