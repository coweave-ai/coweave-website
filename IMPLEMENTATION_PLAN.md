# CoWeave Website Consolidation - Implementation Plan

**Document ID:** IMPL-WEBSITE-001
**Version:** 1.3
**Created:** December 27, 2025
**Updated:** December 27, 2025
**Status:** Phases 1-7 Complete | Phase 8 (Action Items) In Progress

---

## Overview

This document provides a step-by-step implementation plan for transforming the coweave-website from a teaser landing page into a multi-page product website with the official CoWeave messaging.

**Total Estimated Effort:** 3-4 days
**Dependencies:** None (self-contained frontend work)

---

## Phase 1: Foundation Setup (Day 1 - Morning) - COMPLETE

### 1.1 Install New Dependencies - COMPLETE

**Task:** Add React Router and SEO libraries

**File:** `package.json`

```bash
cd /home/coweave/coweave/coweave-website
npm install react-router-dom@6 react-helmet-async
npm install -D vite-plugin-sitemap
```

**Verification:**
```bash
npm run dev  # Should start without errors
```

---

### 1.2 Create Layout Component - COMPLETE

**Task:** Create the main layout wrapper with Navigation and Footer

**File:** `src/components/Layout/Layout.jsx`

```jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-primary-navy flex flex-col">
      <Navigation />
      <main className="flex-grow" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

**File:** `src/components/Layout/index.js`

```js
export { default } from './Layout';
```

---

### 1.3 Create Navigation Component - COMPLETE

**Task:** Build responsive navigation with Products dropdown

**File:** `src/components/Navigation/Navigation.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes, FaCloud, FaBuilding } from 'react-icons/fa';
import GlowButton from '../common/GlowButton';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Docs', href: 'https://docs.coweave.ai', external: true },
  ];

  const productLinks = [
    {
      label: 'PO Studio Cloud',
      description: 'Managed SaaS solution',
      href: '/cloud',
      icon: FaCloud,
    },
    {
      label: 'PO Studio Enterprise',
      description: 'Self-hosted with n8n',
      href: '/enterprise',
      icon: FaBuilding,
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-navy/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/coweave-logo-no-bg.png"
              alt="CoWeave"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Products</span>
                <FaChevronDown
                  className={`w-3 h-3 transition-transform ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-primary-blue/95 backdrop-blur-lg rounded-xl shadow-xl border border-primary-vividAzure/20 overflow-hidden"
                  >
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        to={product.href}
                        className="flex items-start gap-4 p-4 hover:bg-primary-vividAzure/10 transition-colors"
                      >
                        <div className="p-2 bg-primary-vividAzure/20 rounded-lg">
                          <product.icon className="w-5 h-5 text-primary-vividAzure" />
                        </div>
                        <div>
                          <span className="block font-medium text-white">
                            {product.label}
                          </span>
                          <span className="text-sm text-gray-400">
                            {product.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Auth + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://app.coweave.ai/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Login
            </a>
            <GlowButton
              href="https://app.coweave.ai/signup"
              variant="primary"
              size="small"
            >
              Start Free
            </GlowButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-navy/95 backdrop-blur-lg border-t border-primary-blue/30"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              <div className="space-y-2">
                <span className="text-sm text-gray-500 uppercase tracking-wider">
                  Products
                </span>
                {productLinks.map((product) => (
                  <Link
                    key={product.href}
                    to={product.href}
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    {product.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-primary-blue/30 pt-4 space-y-2">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-gray-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 text-gray-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <div className="border-t border-primary-blue/30 pt-4 space-y-3">
                <a
                  href="https://app.coweave.ai/login"
                  className="block py-2 text-gray-300 hover:text-white"
                >
                  Login
                </a>
                <GlowButton
                  href="https://app.coweave.ai/signup"
                  variant="primary"
                  className="w-full"
                >
                  Start Free
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
```

---

### 1.4 Create SEO Component - COMPLETE

**Task:** Build reusable SEO component for meta tags

**File:** `src/components/common/SEO.jsx`

```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'CoWeave - Production Code Done Right',
  description = 'CoWeave codifies your software development lifecycle with prompts and agentic workflows. Same quality, every developer, every time.',
  image = '/og-image.png',
  url,
  type = 'website',
}) => {
  const siteUrl = 'https://coweave.ai';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CoWeave" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
```

---

### 1.5 Create ScrollToTop Component - COMPLETE

**Task:** Ensure scroll resets on route changes

**File:** `src/components/common/ScrollToTop.jsx`

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

---

### 1.6 Update App.jsx with Routing - COMPLETE

**Task:** Convert App.jsx to use React Router

**File:** `src/App.jsx`

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ParticleProvider } from './context/ParticleContext';

import Layout from './components/Layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import CloudPage from './pages/CloudPage';
import EnterprisePage from './pages/EnterprisePage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import './styles/index.css';

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
              <Route path="enterprise" element={<EnterprisePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ParticleProvider>
    </HelmetProvider>
  );
}

export default App;
```

---

### 1.7 Create Pages Directory and HomePage - COMPLETE

**Task:** Create pages directory and move homepage sections

**File:** `src/pages/HomePage.jsx`

```jsx
import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/Hero/Hero';
import ProblemSection from '../components/Problem/ProblemSection';
import SolutionSection from '../components/Solution/SolutionSection';
import ProductsSection from '../components/Products/ProductsSection';
import ProofSection from '../components/Proof/ProofSection';
import CTASection from '../components/CTA/CTASection';

const HomePage = () => {
  return (
    <>
      <SEO
        title="CoWeave - Production Code Done Right"
        description="CoWeave codifies your software development lifecycle with prompts and agentic workflows. Same quality, every developer, every time."
        url="/"
      />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <ProofSection />
      <CTASection />
    </>
  );
};

export default HomePage;
```

---

### 1.8 Create Placeholder Pages - COMPLETE

**Task:** Create placeholder components for other pages

**Files to create:**
- `src/pages/CloudPage.jsx`
- `src/pages/EnterprisePage.jsx`
- `src/pages/PricingPage.jsx`
- `src/pages/ContactPage.jsx`
- `src/pages/NotFoundPage.jsx`

**Example (CloudPage.jsx):**

```jsx
import React from 'react';
import SEO from '../components/common/SEO';

const CloudPage = () => {
  return (
    <>
      <SEO
        title="PO Studio Cloud - Managed Prompt Optimization | CoWeave"
        description="Prompt management SaaS for engineering teams. Start free, no credit card required."
        url="/cloud"
      />
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Cloud Page - Coming Soon</h1>
      </div>
    </>
  );
};

export default CloudPage;
```

---

## Phase 2: Update Existing Sections (Day 1 - Afternoon) - COMPLETE

### 2.1 Update Hero Section - COMPLETE

**Task:** Update Hero with new messaging and dual CTAs

**File:** `src/components/Hero/Hero.jsx`

**Changes:**
1. Update headline to "Production Code. Done Right."
2. Update subtitle to "Same quality, every developer, every time."
3. Add description text about CoWeave
4. Add dual CTAs: "Start Free" and "See Enterprise →"
5. Remove scroll-to-waitlist, use direct links

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import GlowButton from '../common/GlowButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground id="hero-particles" />

      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/70 via-primary-navy/60 to-primary-indigo/70" style={{ zIndex: 2 }} />

      <div className="relative container mx-auto px-6 text-center max-w-6xl pt-20" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/assets/coweave-logo-no-bg.png"
            alt="CoWeave Logo"
            className="w-40 h-40 md:w-56 md:h-56 mx-auto drop-shadow-[0_0_30px_rgba(63,214,248,0.6)] animate-float"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
        >
          <span className="hero-gradient-text">Production Code.</span>
          <br />
          <span className="hero-gradient-text">Done Right.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl text-primary-lightAzure mb-6 font-medium"
        >
          Same quality, every developer, every time.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          CoWeave codifies your software development lifecycle with prompts and agentic workflows—eliminating the variance cost and shipping production-grade code consistently.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <GlowButton
            href="https://app.coweave.ai/signup"
            variant="primary"
            size="large"
          >
            Start Free
          </GlowButton>
          <Link
            to="/enterprise"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
          >
            See Enterprise →
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-primary-vividAzure text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-gradient-text {
          background: linear-gradient(90deg, #3fd6f8, #bdf3ff, #3fd6f8, #bdf3ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 4s ease infinite;
          filter: drop-shadow(0 0 10px rgba(63, 214, 248, 0.4));
        }
      `}</style>
    </section>
  );
};

export default Hero;
```

---

### 2.2 Update Problem Section - COMPLETE

**Task:** Update with variance cost messaging

**File:** `src/components/Problem/ProblemSection.jsx`

**Changes:**
1. Update headline to "The Variance Cost is Killing Your Team"
2. Update problem cards with three pain point questions
3. Add variance cost visualization concept

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProblemCard from './ProblemCard';
import AnimatedSection from '../common/AnimatedSection';
import { FaFileAlt, FaVial, FaPuzzlePiece } from 'react-icons/fa';

const ProblemSection = () => {
  const problems = [
    {
      icon: FaFileAlt,
      title: 'PRD & TDD? What PRD & TDD?',
      description: 'How many team members actually start from Product Requirement Documents and Technical Design Documents? Or does your team start coding first and figure it out later?',
      delay: 0
    },
    {
      icon: FaVial,
      title: 'TDD is a Myth',
      description: 'Have you ever seen Test-Driven Development actually followed? Tests written FIRST? Or do tests get rushed in after—missing edge cases that cause bugs later?',
      delay: 0.15
    },
    {
      icon: FaPuzzlePiece,
      title: 'Integration Hell',
      description: 'Does your team spend more time in integration testing than anticipated, leading to delays in delivery and lower reliability?',
      delay: 0.3
    }
  ];

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue"
      id="problem"
    >
      <div className="container mx-auto px-6">
        {/* Variance Cost Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-xl text-primary-vividAzure mb-4">The Hidden Cost of AI Coding Tools</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">The </span>
            <span className="animated-gradient-text">Variance Cost</span>
            <span className="text-white"> is Killing Your Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            When five developers use vibe-coding tools, you get five different design patterns, five different approaches, five different quality levels. <strong className="text-primary-lightAzure">That's the variance cost—and it compounds with every feature.</strong>
          </p>
        </motion.div>

        {/* Validation Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-gray-400 mb-16"
        >
          Let me ask you three questions. Be honest.
        </motion.p>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>

        {/* Found the Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-primary-lightAzure font-medium">
            If you answered yes to any of these...
          </p>
          <p className="text-3xl text-white font-bold mt-2">
            You've found the gap.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ProblemSection;
```

---

### 2.3 Update Solution Section - COMPLETE

**Task:** Update with gap-filling messaging

**File:** `src/components/Solution/SolutionSection.jsx`

**Changes:**
1. Update headline to focus on "Filling the Gap"
2. Add the gap questions as lead-in
3. Update feature cards to match SDLC enforcement messaging

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import AnimatedSection from '../common/AnimatedSection';

const SolutionSection = () => {
  const gapQuestions = [
    "What tool ensures your SDLC processes are being followed?",
    "What tool enforces Test-Driven Development?",
    "What tool generates comprehensive tests alongside your code?",
    "What tool eliminates the variance cost?"
  ];

  const features = [
    {
      number: '①',
      title: 'PRD & TDD First, Always',
      description: 'Codify requirements and design before a single line of code. Documents stay in sync with implementation.',
      delay: 0
    },
    {
      number: '②',
      title: 'Tests Before Code',
      description: 'Enforce TDD with agentic workflows that write tests first. Achieve 85%+ coverage automatically.',
      delay: 0.15
    },
    {
      number: '③',
      title: 'Consistent Patterns',
      description: 'Same process, same quality, every developer, every time. Eliminate the variance cost completely.',
      delay: 0.3
    }
  ];

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue"
      id="solution"
    >
      <div className="container mx-auto px-6">
        {/* Gap Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            {gapQuestions.map((question, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-lg text-gray-300"
              >
                {question}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">That's the Gap.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Introducing CoWeave—a platform to <strong className="text-primary-lightAzure">codify your software development lifecycle</strong> with prompts and agentic workflows.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SolutionSection;
```

---

## Phase 3: New Sections (Day 2) - COMPLETE

### 3.1 Create Products Section - COMPLETE

**Task:** Build the Cloud vs Enterprise comparison section

**File:** `src/components/Products/ProductsSection.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaBuilding, FaCheck } from 'react-icons/fa';
import AnimatedSection from '../common/AnimatedSection';
import GlowButton from '../common/GlowButton';

const ProductsSection = () => {
  const products = [
    {
      name: 'PO Studio Cloud',
      tagline: 'Get started in minutes',
      description: 'Managed SaaS solution. No infrastructure to maintain. Start free, upgrade when ready.',
      features: [
        'Prompt management & version control',
        'Team collaboration with RBAC',
        'SAML SSO (Starter+)',
        'API access for CI/CD',
        'Automatic updates'
      ],
      cta: {
        text: 'Start Free',
        href: 'https://app.coweave.ai/signup',
        variant: 'primary'
      },
      icon: FaCloud,
      highlighted: false
    },
    {
      name: 'PO Studio Enterprise',
      tagline: 'Full control, full integration',
      description: 'Self-hosted on your infrastructure with complete n8n workflow integration.',
      features: [
        'Everything in Cloud',
        'n8n SSO integration',
        'Workflow prompts',
        'Air-gapped deployment',
        'Custom SLA & support'
      ],
      cta: {
        text: 'Contact Sales',
        href: '/contact',
        variant: 'secondary'
      },
      icon: FaBuilding,
      highlighted: false
    }
  ];

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-primary-navy"
      id="products"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">Two Ways to </span>
            <span className="animated-gradient-text">Fill the Gap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the deployment model that fits your organization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-primary-blue/30 backdrop-blur-lg border rounded-2xl p-8 transition-all duration-300 hover:border-primary-vividAzure/60 ${
                product.highlighted
                  ? 'border-primary-vividAzure shadow-[0_0_30px_rgba(63,214,248,0.3)]'
                  : 'border-primary-vividAzure/20'
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-vividAzure/20 rounded-lg">
                  <product.icon className="w-8 h-8 text-primary-vividAzure" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  <p className="text-primary-lightAzure">{product.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{product.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <FaCheck className="w-4 h-4 text-primary-vividAzure mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <GlowButton
                href={product.cta.href}
                variant={product.cta.variant}
                className="w-full"
              >
                {product.cta.text}
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProductsSection;
```

---

### 3.2 Create Proof Section (Replaces Impact) - COMPLETE

**Task:** Build the proof/case study section with PO Studio metrics

**File:** `src/components/Proof/ProofSection.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaRocket, FaClock, FaVial, FaBug } from 'react-icons/fa';

const ProofSection = () => {
  const buildStats = [
    { label: 'API Endpoints', value: '110+' },
    { label: 'Database Tables', value: '11' },
    { label: 'Lines of Code', value: '11,000+' },
  ];

  const speedStats = [
    {
      icon: FaRocket,
      value: '4x',
      label: 'Faster Development',
      detail: '10 weeks vs 40 weeks traditional',
    },
    {
      icon: FaClock,
      value: '3 days',
      label: 'Integration Time',
      detail: 'Not 3 weeks, not 3 months',
    },
  ];

  const qualityStats = [
    {
      icon: FaVial,
      value: '1,085',
      label: 'Automated Tests',
    },
    {
      icon: FaBug,
      value: '85%',
      label: 'Code Coverage',
    },
  ];

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-navy via-primary-blue to-primary-darkAzure"
      id="proof"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">Real </span>
            <span className="animated-gradient-text">Results</span>
            <span className="text-white">, Not Promises</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We built PO Studio—a complete enterprise application—using CoWeave.
            Here's what happened.
          </p>
        </motion.div>

        {/* The Build */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-8 mb-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">The Build</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            {buildStats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-primary-vividAzure">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Speed Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {speedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-8 text-center"
            >
              <stat.icon className="w-10 h-10 text-primary-vividAzure mx-auto mb-4" />
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-xl text-primary-lightAzure mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Quality Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          {qualityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary-vividAzure mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* The Secret */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl text-primary-lightAzure mb-4">The Secret?</p>
          <p className="text-xl text-gray-300">
            We followed the SDLC process. <strong className="text-white">Every. Single. Step.</strong>
          </p>
          <p className="text-lg text-gray-400 mt-4">
            That's not luck. That's what happens when SDLC isn't a framework on a whiteboard—it's woven into every step of development.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ProofSection;
```

---

### 3.3 Create CTA Section (Replaces Waitlist) - COMPLETE

**Task:** Build final call-to-action section

**File:** `src/components/CTA/CTASection.jsx`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import ParticleBackground from '../Hero/ParticleBackground';
import GlowButton from '../common/GlowButton';

const CTASection = () => {
  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-40 bg-gradient-to-br from-primary-indigo via-primary-blue to-primary-darkAzure relative overflow-hidden"
      id="cta"
    >
      <ParticleBackground id="cta-particles" />
      <div className="absolute inset-0" style={{ zIndex: 2 }} />

      <div className="container mx-auto px-6 relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">Transform Your SDLC</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop paying the variance cost. Start shipping production-grade code consistently.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            CoWeave brings agentic workflows and customized prompts to your SDLC—automating the process your team has been struggling to follow manually.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton
              href="https://app.coweave.ai/signup"
              variant="primary"
              size="large"
            >
              Start Free — Cloud
            </GlowButton>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border-2 border-primary-vividAzure/40 hover:border-primary-vividAzure rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(63,214,248,0.3)]"
            >
              Talk to Sales — Enterprise
            </Link>
          </div>

          <p className="text-primary-lightAzure mt-12 text-lg font-medium">
            CoWeave. Production code. Done right.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default CTASection;
```

---

## Phase 4: Product Pages (Day 2-3)

### 4.1 Cloud Page

**File:** `src/pages/CloudPage.jsx`

(Full implementation with features, pricing preview, screenshots)

### 4.2 Enterprise Page

**File:** `src/pages/EnterprisePage.jsx`

(Full implementation with enterprise features, n8n integration, security section)

### 4.3 Pricing Page

**File:** `src/pages/PricingPage.jsx`

(Full implementation with pricing cards, feature comparison, FAQ)

### 4.4 Contact Page

**File:** `src/pages/ContactPage.jsx`

(Full implementation with contact form, contact info)

---

## Phase 5: Footer & Polish (Day 3)

### 5.1 Update Footer

**File:** `src/components/Footer/Footer.jsx`

(Expanded footer with navigation links, social links, legal links)

### 5.2 Update GlowButton

**Task:** Add support for external links and Link component

**File:** `src/components/common/GlowButton.jsx`

(Update to handle both internal links and external URLs)

---

## Phase 6: Testing & Deployment (Day 4)

### 6.1 Manual Testing Checklist

- [ ] All routes work correctly
- [ ] Navigation works on desktop and mobile
- [ ] All CTAs link to correct destinations
- [ ] SEO meta tags appear correctly
- [ ] Particle animations work
- [ ] Responsive design on all breakpoints
- [ ] Accessibility check (keyboard navigation, screen reader)

### 6.2 Build and Preview

```bash
npm run build
npm run preview
```

### 6.3 Update vite.config.js

Add sitemap plugin configuration.

### 6.4 Deploy

Deploy to CloudFlare Pages or chosen hosting platform.

---

## File Creation Summary

### New Files to Create

| File | Purpose |
|------|---------|
| `src/components/Layout/Layout.jsx` | Page layout wrapper |
| `src/components/Navigation/Navigation.jsx` | Global navigation |
| `src/components/common/SEO.jsx` | SEO meta tags |
| `src/components/common/ScrollToTop.jsx` | Scroll restoration |
| `src/components/Products/ProductsSection.jsx` | Cloud vs Enterprise |
| `src/components/Proof/ProofSection.jsx` | Case study section |
| `src/components/CTA/CTASection.jsx` | Final CTA |
| `src/pages/HomePage.jsx` | Home page |
| `src/pages/CloudPage.jsx` | Cloud product page |
| `src/pages/EnterprisePage.jsx` | Enterprise product page |
| `src/pages/PricingPage.jsx` | Pricing page |
| `src/pages/ContactPage.jsx` | Contact page |
| `src/pages/NotFoundPage.jsx` | 404 page |

### Files to Modify

| File | Changes |
|------|---------|
| `src/App.jsx` | Add routing, HelmetProvider |
| `src/components/Hero/Hero.jsx` | Update messaging, dual CTAs |
| `src/components/Problem/ProblemSection.jsx` | Update messaging |
| `src/components/Solution/SolutionSection.jsx` | Update messaging |
| `src/components/Footer/Footer.jsx` | Expand with links |
| `src/components/common/GlowButton.jsx` | Add Link support |
| `package.json` | Add dependencies |
| `vite.config.js` | Add sitemap plugin |

### Files to Remove/Deprecate

| File | Action |
|------|--------|
| `src/components/Waitlist/WaitlistSection.jsx` | Remove |
| `src/components/Waitlist/WaitlistForm.jsx` | Remove |
| `src/components/Impact/ImpactSection.jsx` | Replace with ProofSection |

---

## Dependencies

```json
{
  "dependencies": {
    "react-router-dom": "^6.21.0",
    "react-helmet-async": "^2.0.4"
  },
  "devDependencies": {
    "vite-plugin-sitemap": "^0.6.0"
  }
}
```

---

## Environment Variables

```env
# .env
VITE_GA4_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://coweave.ai
```

---

## Success Criteria

1. ✅ Multi-page routing works
2. ✅ Navigation with Products dropdown
3. ✅ Updated messaging per MESSAGING_GUIDE.md
4. ✅ Products section with Cloud vs Enterprise
5. ✅ Proof section with PO Studio case study
6. ✅ CTA section replaces waitlist
7. ✅ SEO meta tags on all pages
8. ✅ Mobile responsive
9. ✅ All CTAs link correctly
10. ✅ Build succeeds with no errors

---

## Progress Tracking

### Phase 1: Foundation Setup - COMPLETE (December 27, 2025)

| Task | Status | Notes |
|------|--------|-------|
| Install dependencies | ✅ Complete | react-router-dom@6, react-helmet-async |
| Create Layout component | ✅ Complete | `src/components/Layout/Layout.jsx` |
| Create Navigation component | ✅ Complete | Products dropdown, mobile responsive |
| Create SEO component | ✅ Complete | `src/components/common/SEO.jsx` |
| Create ScrollToTop component | ✅ Complete | `src/components/common/ScrollToTop.jsx` |
| Update App.jsx with routing | ✅ Complete | HelmetProvider, BrowserRouter |
| Create HomePage | ✅ Complete | Uses existing sections |
| Create placeholder pages | ✅ Complete | Cloud, Enterprise, Pricing, Contact, Blog, 404 |
| Update GlowButton | ✅ Complete | Added href, to, size props |

**Build Status:** ✅ Builds successfully (`npm run build`)
**Dev Server:** ✅ Runs at http://localhost:3000

### Phase 2: Update Existing Sections - COMPLETE (December 27, 2025)

| Task | Status | Notes |
|------|--------|-------|
| Update Hero section | ✅ Complete | New messaging, dual CTAs |
| Update Problem section | ✅ Complete | Variance cost messaging, three questions |
| Update Solution section | ✅ Complete | Gap-filling messaging, SDLC features |

**Build Status:** ✅ Builds successfully

### Phase 3: New Sections - COMPLETE (December 27, 2025)

| Task | Status | Notes |
|------|--------|-------|
| Create ProductsSection | ✅ Complete | Cloud vs Enterprise comparison cards |
| Create ProofSection | ✅ Complete | PO Studio case study with metrics |
| Create CTASection | ✅ Complete | Final call-to-action replacing Waitlist |
| Update HomePage | ✅ Complete | Integrated new sections |

**Build Status:** ✅ Builds successfully

### Phase 4: Product Pages - COMPLETE (December 27, 2025)

| Task | Status | Notes |
|------|--------|-------|
| CloudPage full implementation | ✅ Complete | Hero, benefits, features, how-it-works, pricing preview, CTA |
| EnterprisePage full implementation | ✅ Complete | n8n integration, security, deployment options, comparison table |
| PricingPage with FAQ | ✅ Complete | Pricing cards, feature comparison table, FAQ accordion |
| ContactPage polished | ✅ Complete | Contact options, enterprise topics, process steps |

**Build Status:** ✅ Builds successfully

### Phase 5: Footer & Polish - COMPLETE (December 27, 2025)

| Task | Status | Notes |
|------|--------|-------|
| Expand Footer component | ✅ Complete | Multi-column layout with Products, Resources, Company, Legal sections |
| Add social links | ✅ Complete | Twitter, LinkedIn, GitHub with hover effects |
| Add legal links | ✅ Complete | Privacy, Terms, Security pages |
| Create AboutPage | ✅ Complete | Mission statement, problem solving, CTA |
| Create CareersPage | ✅ Complete | Open positions placeholder, contact email |
| Create PrivacyPage | ✅ Complete | Privacy policy content |
| Create TermsPage | ✅ Complete | Terms of service content |
| Create SecurityPage | ✅ Complete | Security features, vulnerability reporting |
| Update App.jsx routes | ✅ Complete | Added all new page routes |

**Build Status:** ✅ Builds successfully

### Phase 6: Testing & Deployment - COMPLETE (December 27, 2025)

| Task | Status | Notes |
|------|--------|-------|
| Build verification | ✅ Complete | `npm run build` succeeds |
| All routes work | ✅ Complete | 12 routes configured |
| Navigation works | ✅ Complete | Desktop and mobile responsive |
| All CTAs link correctly | ✅ Complete | External and internal links |
| SEO meta tags | ✅ Complete | All pages have unique SEO |
| Mobile responsive | ✅ Complete | Tailwind responsive classes |

**Build Status:** ✅ Builds successfully
**Bundle Size:** ~568 KB (minified)

---

### Phase 7: Kubernetes Deployment - COMPLETE (December 27, 2025)

| Task | Status | Notes |
|------|--------|-------|
| Create Dockerfile | ✅ Complete | Multi-stage build (Node → Nginx) |
| Create nginx.conf | ✅ Complete | SPA routing, gzip, caching |
| Create .dockerignore | ✅ Complete | Excludes node_modules, dist, etc. |
| Create K8s manifests | ✅ Complete | namespace, deployment, service, ingress |
| Create kustomization.yaml | ✅ Complete | Kustomize for easy deployment |
| Create k8s/README.md | ✅ Complete | Deployment instructions |
| Build Docker image | ✅ Complete | `docker build -t coweave-website:latest .` |
| Import to k3s | ✅ Complete | `docker save | k3s ctr images import` |
| Deploy to cluster | ✅ Complete | `kubectl apply -k k8s/` |
| TLS certificate | ✅ Complete | cert-manager issued certificate |
| DNS configuration | ✅ Complete | A record added for `coweave-website.appemble.com` |
| URL config for environments | ✅ Complete | `src/config/urls.js` with VITE_APP_URL env var |
| Staging URLs wired | ✅ Complete | Login/signup point to `po-studio-cloud.appemble.com` |

**Deployment Details:**
- **Namespace:** `coweave-website`
- **Replicas:** 2 pods running
- **Hostname:** `coweave-website.appemble.com`
- **TLS:** Enabled via cert-manager (letsencrypt-prod)
- **Image:** `docker.io/library/coweave-website:latest` (local)

---

### Phase 8: Remaining Action Items

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Set up Blog with MDX | High | 🔲 Pending | Do now so you can write content in a couple days |
| Analytics integration | Medium | 🔲 Pending | GA4 or Plausible |
| Calendly integration | Medium | 🔲 Pending | For Enterprise demo scheduling |
| Image optimization | Low | 🔲 Pending | Can do later |
| Accessibility audit | Low | 🔲 Pending | Can do later |

---

## Deployment Options

### Option 1: Vercel (Production)
The repo is connected to Vercel for production deployment. Push to main branch triggers automatic deployment.

### Option 2: Kubernetes (Staging/Internal)
For staging and internal testing on the k3s cluster:

```bash
cd /home/coweave/coweave/coweave-website

# Build and deploy
docker build -t coweave-website:latest .
docker save coweave-website:latest | sudo k3s ctr images import -
sudo kubectl apply -k k8s/

# Restart to pull new image
sudo kubectl rollout restart deployment/coweave-website -n coweave-website

# Check status
sudo kubectl get pods -n coweave-website
sudo kubectl get ingress -n coweave-website
```

---

## Local Development

To test the website locally on this VM:

```bash
cd /home/coweave/coweave/coweave-website

# Install dependencies (if not done)
npm install

# Start development server
npm run dev

# Access at http://localhost:3000
# Or use --host to expose on network
npm run dev -- --host
```

To build for production:

```bash
npm run build
npm run preview  # Preview production build
```
