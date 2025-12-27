# Technical Design Document: CoWeave Website Consolidation

**Document ID:** TDD-WEBSITE-001
**Version:** 1.0
**Created:** December 27, 2025
**Status:** Draft

---

## 1. Overview

### 1.1 Purpose

This TDD defines the technical architecture, component design, and implementation details for transforming the coweave-website from a single-page teaser site into a multi-page product website presenting PO Studio Cloud and PO Studio Enterprise offerings.

### 1.2 Scope

**In Scope:**
- Multi-page routing implementation
- New page components (Cloud, Enterprise, Pricing, Contact)
- Navigation and footer refactoring
- Integration with PO Studio Cloud signup
- Contact form for Enterprise inquiries
- SEO optimization
- Analytics integration

**Out of Scope:**
- Blog system (future initiative)
- Documentation site (future initiative)
- E-commerce/payment on website (handled by app.coweave.ai)
- Admin dashboard for website

### 1.3 References

| Document | Location |
|----------|----------|
| PRD - Website Consolidation | `CONSOLIDATION_PLAN.md` (Section 1-5) |
| PO Studio Editions | `po-studio/docs/editions/EDITIONS_AND_DEPLOYMENT.md` |
| Cloud Signup PRD | `po-studio-cloud/docs/features/PRD-CLOUD-SIGNUP-BILLING.md` |
| Current Website README | `coweave-website/README.md` |

---

## 2. Architecture

### 2.1 Current Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    coweave-website                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                      App.jsx                          │  │
│  │  ┌─────┐ ┌─────────┐ ┌──────────┐ ┌────────┐ ┌──────┐ │  │
│  │  │Hero │ │Problem  │ │Solution  │ │Impact  │ │Wait  │ │  │
│  │  │     │ │Section  │ │Section   │ │Section │ │list  │ │  │
│  │  └─────┘ └─────────┘ └──────────┘ └────────┘ └──────┘ │  │
│  │                                                       │  │
│  │  ┌──────────────────────────────────────────────────┐ │  │
│  │  │                    Footer                        │ │  │
│  │  └──────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

**Characteristics:**
- Single-page application (no routing)
- All sections rendered in single App.jsx
- Waitlist form as primary CTA
- Minimal footer

### 2.2 Target Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         coweave-website                                  │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │                         BrowserRouter                               │ │
│  │  ┌──────────────────────────────────────────────────────────────┐  │ │
│  │  │                    Layout Component                          │  │ │
│  │  │  ┌────────────────────────────────────────────────────────┐  │  │ │
│  │  │  │                   Navigation                           │  │  │ │
│  │  │  └────────────────────────────────────────────────────────┘  │  │ │
│  │  │                                                              │  │ │
│  │  │  ┌────────────────────────────────────────────────────────┐  │  │ │
│  │  │  │                    Routes                              │  │  │ │
│  │  │  │  ┌──────┐ ┌───────┐ ┌──────────┐ ┌───────┐ ┌────────┐  │  │  │ │
│  │  │  │  │ /    │ │/cloud │ │/enterprise│ │/pricing│ │/contact│  │  │  │ │
│  │  │  │  │Home  │ │Cloud  │ │Enterprise │ │Pricing │ │Contact │  │  │  │ │
│  │  │  │  │Page  │ │Page   │ │Page       │ │Page    │ │Page    │  │  │  │ │
│  │  │  │  └──────┘ └───────┘ └──────────┘ └───────┘ └────────┘  │  │  │ │
│  │  │  └────────────────────────────────────────────────────────┘  │  │ │
│  │  │                                                              │  │ │
│  │  │  ┌────────────────────────────────────────────────────────┐  │  │ │
│  │  │  │                     Footer                             │  │  │ │
│  │  │  └────────────────────────────────────────────────────────┘  │  │ │
│  │  └──────────────────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Tech Stack

| Layer | Current | Target | Notes |
|-------|---------|--------|-------|
| **Framework** | React 18 | React 18 | No change |
| **Build** | Vite 4.x | Vite 5.x | Upgrade for performance |
| **Styling** | Tailwind CSS 3.x | Tailwind CSS 3.x | No change |
| **Animation** | Framer Motion | Framer Motion | No change |
| **Particles** | tsParticles | tsParticles | No change |
| **Routing** | None | React Router 6 | **Add** |
| **SEO** | None | React Helmet Async | **Add** |
| **Forms** | React Hook Form | React Hook Form | Already exists |
| **Analytics** | None | GA4 / Plausible | **Add** |

### 2.4 Dependency Changes

```json
// package.json additions
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

## 3. Component Architecture

### 3.1 Component Hierarchy

```
App
├── HelmetProvider
│   └── BrowserRouter
│       └── Layout
│           ├── Navigation
│           │   ├── Logo
│           │   ├── NavLinks
│           │   │   └── ProductDropdown
│           │   ├── AuthLinks (Login)
│           │   └── CTAButton (Start Free)
│           │
│           ├── Routes
│           │   ├── HomePage
│           │   │   ├── HeroSection
│           │   │   ├── ProblemSection
│           │   │   ├── SolutionSection (updated)
│           │   │   ├── ProductsSection (new)
│           │   │   ├── ImpactSection
│           │   │   └── CTASection (replaces Waitlist)
│           │   │
│           │   ├── CloudPage
│           │   │   ├── CloudHero
│           │   │   ├── FeaturesGrid
│           │   │   ├── PricingPreview
│           │   │   └── CloudCTA
│           │   │
│           │   ├── EnterprisePage
│           │   │   ├── EnterpriseHero
│           │   │   ├── EnterpriseFeaturesGrid
│           │   │   ├── DeploymentOptions
│           │   │   ├── SecuritySection
│           │   │   └── ContactCTA
│           │   │
│           │   ├── PricingPage
│           │   │   ├── PricingHero
│           │   │   ├── PricingCards
│           │   │   ├── FeatureComparison
│           │   │   └── PricingFAQ
│           │   │
│           │   └── ContactPage
│           │       ├── ContactHero
│           │       └── ContactForm
│           │
│           └── Footer
│               ├── FooterLogo
│               ├── FooterLinks
│               └── FooterLegal
```

### 3.2 Component Specifications

#### 3.2.1 Layout Component

**Purpose:** Wraps all pages with consistent navigation and footer

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
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

#### 3.2.2 Navigation Component

**Purpose:** Global navigation with dropdown for products

**File:** `src/components/Navigation/Navigation.jsx`

**Props:** None (uses React Router hooks)

**State:**
```typescript
interface NavigationState {
  isMenuOpen: boolean;      // Mobile menu toggle
  isScrolled: boolean;      // Background opacity on scroll
  activeDropdown: string | null;  // Currently open dropdown
}
```

**Features:**
- Sticky header with blur backdrop
- Dropdown menu for Products (Cloud, Enterprise)
- Mobile hamburger menu
- Scroll-based background opacity change
- Active link highlighting

**Structure:**
```jsx
<nav className="fixed top-0 w-full z-50 transition-all duration-300">
  <div className="container mx-auto px-6">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <Link to="/">
        <img src="/assets/coweave-logo-no-bg.png" alt="CoWeave" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        <ProductDropdown />
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="https://docs.coweave.ai" external>Docs</NavLink>
      </div>

      {/* Auth + CTA */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="https://app.coweave.ai/login">Login</a>
        <GlowButton href="https://app.coweave.ai/signup">
          Start Free
        </GlowButton>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        <HamburgerIcon />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && <MobileMenu />}
</nav>
```

#### 3.2.3 ProductDropdown Component

**Purpose:** Dropdown menu for Cloud and Enterprise products

**File:** `src/components/Navigation/ProductDropdown.jsx`

```jsx
const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
        <span>Products</span>
        <ChevronDownIcon className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 w-64 bg-primary-blue/90 backdrop-blur-lg rounded-lg shadow-lg border border-primary-vividAzure/20"
          >
            <Link to="/cloud" className="dropdown-item">
              <CloudIcon />
              <div>
                <span className="font-medium">PO Studio Cloud</span>
                <span className="text-sm text-gray-400">Managed SaaS solution</span>
              </div>
            </Link>
            <Link to="/enterprise" className="dropdown-item">
              <BuildingIcon />
              <div>
                <span className="font-medium">PO Studio Enterprise</span>
                <span className="text-sm text-gray-400">Self-hosted with n8n</span>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
```

#### 3.2.4 ProductsSection Component (NEW)

**Purpose:** Side-by-side comparison of Cloud vs Enterprise on homepage

**File:** `src/components/Products/ProductsSection.jsx`

**Props:** None

**Structure:**
```jsx
const ProductsSection = () => {
  const products = [
    {
      name: 'PO Studio Cloud',
      tagline: 'Get started in minutes',
      description: 'Managed SaaS solution. No infrastructure to maintain.',
      features: [
        'Prompt management',
        'Version control',
        'Team collaboration',
        'SAML SSO',
        'API access'
      ],
      cta: {
        text: 'Start Free',
        href: 'https://app.coweave.ai/signup',
        variant: 'primary'
      },
      icon: CloudIcon
    },
    {
      name: 'PO Studio Enterprise',
      tagline: 'Deploy on your infrastructure',
      description: 'Self-hosted with full n8n integration.',
      features: [
        'Everything in Cloud',
        'n8n SSO integration',
        'Workflow prompts',
        'Air-gapped deployment',
        'Custom SLA'
      ],
      cta: {
        text: 'Contact Sales',
        href: '/contact',
        variant: 'secondary'
      },
      icon: BuildingIcon
    }
  ];

  return (
    <AnimatedSection className="py-20 md:py-32" id="products">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-white">Two Ways to </span>
            <span className="animated-gradient-text">Transform Your Team</span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose the deployment model that fits your organization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
```

#### 3.2.5 ProductCard Component

**Purpose:** Individual product offering card

**File:** `src/components/Products/ProductCard.jsx`

**Props:**
```typescript
interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
  icon: React.ComponentType;
  delay?: number;
}
```

**Structure:**
```jsx
const ProductCard = ({ name, tagline, description, features, cta, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-8 hover:border-primary-vividAzure/40 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary-vividAzure/20 rounded-lg">
          <Icon className="w-8 h-8 text-primary-vividAzure" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-primary-lightAzure">{tagline}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-300">
            <CheckIcon className="w-5 h-5 text-primary-vividAzure mr-3" />
            {feature}
          </li>
        ))}
      </ul>

      <GlowButton
        href={cta.href}
        variant={cta.variant}
        className="w-full"
      >
        {cta.text}
      </GlowButton>
    </motion.div>
  );
};
```

#### 3.2.6 CTASection Component (Replaces WaitlistSection)

**Purpose:** Final call-to-action section with dual CTAs

**File:** `src/components/CTA/CTASection.jsx`

```jsx
const CTASection = () => {
  return (
    <AnimatedSection
      className="py-20 md:py-40 bg-gradient-to-br from-primary-indigo via-primary-blue to-primary-darkAzure relative overflow-hidden"
      id="cta"
    >
      <ParticleBackground id="cta-particles" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">
              Ready to Transform Your Team?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Start building more reliable software with AI-powered prompt management
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton
              href="https://app.coweave.ai/signup"
              variant="primary"
              size="large"
            >
              Start Free - Cloud
            </GlowButton>
            <GlowButton
              href="/contact"
              variant="secondary"
              size="large"
            >
              Talk to Sales - Enterprise
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
```

#### 3.2.7 PricingCards Component

**Purpose:** Display pricing tiers with feature lists

**File:** `src/components/Pricing/PricingCards.jsx`

**Props:**
```typescript
interface PricingCardsProps {
  billingCycle: 'monthly' | 'yearly';
}
```

**Data Structure (synced with `po-studio-cloud/backend/src/config/plans.ts`):**
```javascript
const pricingData = {
  free: {
    name: 'Free',
    description: 'For individuals and evaluation',
    price: { monthly: 0, yearly: 0 },
    limits: { users: 3, teams: 1, prompts: 50, versionHistoryDays: 7 },
    features: [
      { text: 'Up to 3 users', included: true },
      { text: '1 team', included: true },
      { text: '50 prompts', included: true },
      { text: 'Version control (7 days)', included: true },
      { text: 'Community support', included: true },
      { text: 'SSO', included: false },
      { text: 'API access', included: false },
      { text: 'Audit logs', included: false },
    ],
    cta: { text: 'Get Started', href: 'https://app.coweave.ai/signup' },
    highlighted: false
  },
  starter: {
    name: 'Starter',
    description: 'For small teams',
    price: { monthly: 29, yearly: 290 },
    limits: { users: 15, teams: 3, prompts: 500, versionHistoryDays: 30 },
    trial: { days: 30, requiresCard: false },
    features: [
      { text: 'Up to 15 users', included: true },
      { text: '3 teams', included: true },
      { text: '500 prompts', included: true },
      { text: 'Version control (30 days)', included: true },
      { text: 'API access', included: true },
      { text: 'Email support', included: true },
      { text: 'SSO', included: false },
      { text: 'Audit logs', included: false },
    ],
    cta: { text: 'Start Free Trial', href: 'https://app.coweave.ai/signup?plan=starter' },
    highlighted: false
  },
  professional: {
    name: 'Professional',
    description: 'For growing teams',
    price: { monthly: 99, yearly: 990 },
    limits: { users: 60, teams: 10, prompts: -1, versionHistoryDays: 365 }, // -1 = unlimited
    trial: { days: 30, requiresCard: false },
    features: [
      { text: 'Up to 60 users', included: true },
      { text: '10 teams', included: true },
      { text: 'Unlimited prompts', included: true },
      { text: 'Version control (1 year)', included: true },
      { text: 'SSO (SAML + OIDC)', included: true },
      { text: 'API access', included: true },
      { text: 'Audit logs', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: { text: 'Start Free Trial', href: 'https://app.coweave.ai/signup?plan=professional' },
    highlighted: true
  }
};
```

#### 3.2.8 FeatureComparison Component

**Purpose:** Detailed feature comparison matrix

**File:** `src/components/Pricing/FeatureComparison.jsx`

**Structure:**
```jsx
const FeatureComparison = () => {
  const categories = [
    {
      name: 'Core Features',
      features: [
        { name: 'Base Prompts', free: true, starter: true, pro: true, enterprise: true },
        { name: 'Role Prompts', free: true, starter: true, pro: true, enterprise: true },
        { name: 'Repo Prompts', free: true, starter: true, pro: true, enterprise: true },
        { name: 'Workflow Prompts', free: false, starter: false, pro: false, enterprise: true },
        { name: 'Version Control', free: true, starter: true, pro: true, enterprise: true },
      ]
    },
    {
      name: 'Authentication',
      features: [
        { name: 'Email/Password', free: true, starter: true, pro: true, enterprise: true },
        { name: 'SAML SSO', free: false, starter: true, pro: true, enterprise: true },
        { name: 'OIDC SSO', free: false, starter: false, pro: true, enterprise: true },
        { name: 'n8n SSO', free: false, starter: false, pro: false, enterprise: true },
      ]
    },
    // ... more categories
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Feature</th>
            <th className="text-center">Free</th>
            <th className="text-center">Starter</th>
            <th className="text-center">Professional</th>
            <th className="text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <React.Fragment key={category.name}>
              <tr className="category-header">
                <td colSpan={5}>{category.name}</td>
              </tr>
              {category.features.map(feature => (
                <tr key={feature.name}>
                  <td>{feature.name}</td>
                  <td className="text-center">
                    {feature.free ? <CheckIcon /> : <MinusIcon />}
                  </td>
                  {/* ... other columns */}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
```

#### 3.2.9 ContactForm Component

**Purpose:** Enterprise inquiry form with Brevo integration

**File:** `src/components/Contact/ContactForm.jsx`

**Props:** None

**State:**
```typescript
interface ContactFormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}
```

**Form Fields:**
```typescript
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  teamSize: '1-10' | '11-50' | '51-200' | '201-500' | '500+';
  interest: 'enterprise' | 'demo' | 'partnership' | 'other';
  message: string;
}
```

**Validation (using Zod):**
```typescript
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().min(1, 'Company name is required'),
  jobTitle: z.string().optional(),
  teamSize: z.enum(['1-10', '11-50', '51-200', '201-500', '500+']),
  interest: z.enum(['enterprise', 'demo', 'partnership', 'other']),
  message: z.string().min(10, 'Please provide more details'),
});
```

**Submit Handler:**
```javascript
const onSubmit = async (data) => {
  setIsSubmitting(true);
  try {
    // Option 1: EmailJS (existing setup)
    await emailjs.send(
      process.env.VITE_EMAILJS_SERVICE_ID,
      process.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        company: data.company,
        team_size: data.teamSize,
        interest: data.interest,
        message: data.message,
      }
    );

    // Option 2: Brevo API
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setIsSubmitted(true);
  } catch (error) {
    setError('Failed to submit. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

#### 3.2.10 Footer Component (Updated)

**Purpose:** Expanded footer with navigation links

**File:** `src/components/Footer/Footer.jsx`

**Structure:**
```jsx
const Footer = () => {
  const footerLinks = {
    products: [
      { label: 'Cloud', href: '/cloud' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Pricing', href: '/pricing' },
    ],
    resources: [
      { label: 'Documentation', href: 'https://docs.coweave.ai', external: true },
      { label: 'API Reference', href: 'https://docs.coweave.ai/api', external: true },
      { label: 'Changelog', href: '/changelog' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
    legal: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-primary-navy border-t border-primary-blue/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo + Description */}
          <div className="col-span-2 md:col-span-1">
            <img src="/assets/coweave-logo-no-bg.png" alt="CoWeave" className="h-12 mb-4" />
            <p className="text-gray-400 text-sm">
              Humans + AI, CoWeave Together
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener" className="text-gray-400 hover:text-white">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="text-gray-400 hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-blue/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CoWeave. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/coweave-ai" className="text-gray-400 hover:text-white">
              <GitHubIcon />
            </a>
            <a href="https://twitter.com/coweave_ai" className="text-gray-400 hover:text-white">
              <TwitterIcon />
            </a>
            <a href="https://linkedin.com/company/coweave" className="text-gray-400 hover:text-white">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

---

## 4. Page Components

### 4.1 HomePage

**File:** `src/pages/HomePage.jsx`

**Sections:**
1. HeroSection (updated with dual CTAs)
2. ProblemSection (unchanged)
3. SolutionSection (updated messaging)
4. ProductsSection (new)
5. ImpactSection (unchanged)
6. CTASection (replaces WaitlistSection)

```jsx
const HomePage = () => {
  return (
    <>
      <SEO
        title="CoWeave - Codify Your Software Development Lifecycle"
        description="Humans + AI, CoWeave Together to Build Reliable Software. Prompt management for modern engineering teams."
      />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <ImpactSection />
      <CTASection />
    </>
  );
};
```

### 4.2 CloudPage

**File:** `src/pages/CloudPage.jsx`

**Sections:**
1. CloudHero
2. FeaturesGrid
3. ScreenshotsSection
4. PricingPreview
5. CloudCTA

```jsx
const CloudPage = () => {
  return (
    <>
      <SEO
        title="PO Studio Cloud - Prompt Management SaaS | CoWeave"
        description="Managed prompt management for engineering teams. Start free, no credit card required."
      />
      <CloudHero />
      <FeaturesGrid features={cloudFeatures} />
      <ScreenshotsSection />
      <PricingPreview />
      <CloudCTA />
    </>
  );
};
```

### 4.3 EnterprisePage

**File:** `src/pages/EnterprisePage.jsx`

**Sections:**
1. EnterpriseHero
2. EnterpriseFeaturesGrid
3. N8nIntegrationSection
4. DeploymentOptionsSection
5. SecuritySection
6. EnterpriseCTA

```jsx
const EnterprisePage = () => {
  return (
    <>
      <SEO
        title="PO Studio Enterprise - Self-Hosted with n8n Integration | CoWeave"
        description="Deploy PO Studio on your infrastructure. Full n8n integration, air-gapped options, and enterprise support."
      />
      <EnterpriseHero />
      <EnterpriseFeaturesGrid />
      <N8nIntegrationSection />
      <DeploymentOptionsSection />
      <SecuritySection />
      <EnterpriseCTA />
    </>
  );
};
```

### 4.4 PricingPage

**File:** `src/pages/PricingPage.jsx`

**Sections:**
1. PricingHero
2. BillingToggle (monthly/yearly)
3. PricingCards
4. FeatureComparison
5. PricingFAQ

```jsx
const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <>
      <SEO
        title="Pricing - PO Studio Cloud | CoWeave"
        description="Flexible pricing for teams of all sizes. Free tier available. Start your 30-day trial today."
      />
      <PricingHero />
      <BillingToggle value={billingCycle} onChange={setBillingCycle} />
      <PricingCards billingCycle={billingCycle} />
      <FeatureComparison />
      <PricingFAQ />
    </>
  );
};
```

### 4.5 ContactPage

**File:** `src/pages/ContactPage.jsx`

**Sections:**
1. ContactHero
2. ContactForm
3. ContactInfo

```jsx
const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Sales - PO Studio Enterprise | CoWeave"
        description="Get in touch with our sales team to learn about PO Studio Enterprise deployment options."
      />
      <ContactHero />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  );
};
```

---

## 5. State Management

### 5.1 Approach

The website is primarily static with minimal state requirements. No global state management library is needed.

**Local State (useState):**
- Navigation: mobile menu open/closed, active dropdown
- Pricing: billing cycle toggle (monthly/yearly)
- Contact form: form data, submission state

**URL State (React Router):**
- Current route
- Query parameters (e.g., `?plan=starter` for signup link)

### 5.2 Context Usage

**Existing:**
- `ParticleContext` - Controls particle animation on/off

**New (if needed):**
- `ThemeContext` - (Optional) Dark/light mode toggle for accessibility

---

## 6. Routing Configuration

### 6.1 Route Definitions

**File:** `src/App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import CloudPage from './pages/CloudPage';
import EnterprisePage from './pages/EnterprisePage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="cloud" element={<CloudPage />} />
            <Route path="enterprise" element={<EnterprisePage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
```

### 6.2 Scroll Behavior

React Router v6 doesn't automatically scroll to top on navigation. Add scroll restoration:

**File:** `src/components/ScrollToTop.jsx`

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

Add to App.jsx inside `<BrowserRouter>`.

---

## 7. SEO Implementation

### 7.1 SEO Component

**File:** `src/components/common/SEO.jsx`

```jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  image = '/og-image.png',
  url,
  type = 'website'
}) => {
  const siteUrl = 'https://coweave.ai';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />

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

### 7.2 Sitemap Generation

**File:** `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://coweave.ai',
      exclude: ['/404'],
      routes: [
        '/',
        '/cloud',
        '/enterprise',
        '/pricing',
        '/contact',
        '/terms',
        '/privacy',
      ],
    }),
  ],
});
```

---

## 8. Analytics Integration

### 8.1 Google Analytics 4

**File:** `src/utils/analytics.js`

```javascript
// Initialize GA4
export const initGA = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA4_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', import.meta.env.VITE_GA4_ID);
};

// Track page views
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = (action, category, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

### 8.2 Track Route Changes

```jsx
// In App.jsx or Layout.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};
```

### 8.3 Custom Events to Track

| Event | Category | Label |
|-------|----------|-------|
| `click_start_free` | CTA | Page name |
| `click_contact_sales` | CTA | Page name |
| `click_pricing_plan` | Pricing | Plan name |
| `submit_contact_form` | Form | - |
| `toggle_billing_cycle` | Pricing | monthly/yearly |

---

## 9. File Structure

### 9.1 Target File Structure

```
coweave-website/
├── public/
│   ├── assets/
│   │   ├── coweave-logo-no-bg.png
│   │   ├── og-image.png
│   │   ├── screenshots/
│   │   │   ├── dashboard.png
│   │   │   ├── editor.png
│   │   │   └── version-history.png
│   │   └── icons/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedSection.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── GlowButton.jsx
│   │   │   ├── ParticleToggle.jsx
│   │   │   └── SEO.jsx                    # NEW
│   │   │
│   │   ├── CTA/
│   │   │   └── CTASection.jsx             # NEW (replaces Waitlist)
│   │   │
│   │   ├── Contact/
│   │   │   ├── ContactForm.jsx            # NEW
│   │   │   └── ContactInfo.jsx            # NEW
│   │   │
│   │   ├── Footer/
│   │   │   └── Footer.jsx                 # UPDATED
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx                   # UPDATED
│   │   │   └── ParticleBackground.jsx
│   │   │
│   │   ├── Impact/
│   │   │   ├── ImpactSection.jsx
│   │   │   └── StatCard.jsx
│   │   │
│   │   ├── Layout/
│   │   │   └── Layout.jsx                 # NEW
│   │   │
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx             # NEW
│   │   │   ├── ProductDropdown.jsx        # NEW
│   │   │   └── MobileMenu.jsx             # NEW
│   │   │
│   │   ├── Pricing/
│   │   │   ├── PricingCards.jsx           # NEW
│   │   │   ├── PricingCard.jsx            # NEW
│   │   │   ├── BillingToggle.jsx          # Reuse from po-studio-cloud
│   │   │   ├── FeatureComparison.jsx      # NEW
│   │   │   └── PricingFAQ.jsx             # NEW
│   │   │
│   │   ├── Problem/
│   │   │   ├── ProblemSection.jsx
│   │   │   └── ProblemCard.jsx
│   │   │
│   │   ├── Products/
│   │   │   ├── ProductsSection.jsx        # NEW
│   │   │   └── ProductCard.jsx            # NEW
│   │   │
│   │   ├── Solution/
│   │   │   ├── SolutionSection.jsx        # UPDATED
│   │   │   └── FeatureCard.jsx
│   │   │
│   │   └── Waitlist/                      # DEPRECATED - to be removed
│   │       ├── WaitlistForm.jsx
│   │       └── WaitlistSection.jsx
│   │
│   ├── context/
│   │   └── ParticleContext.jsx
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.jsx
│   │   └── useParallax.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx                   # NEW
│   │   ├── CloudPage.jsx                  # NEW
│   │   ├── EnterprisePage.jsx             # NEW
│   │   ├── PricingPage.jsx                # NEW
│   │   ├── ContactPage.jsx                # NEW
│   │   ├── TermsPage.jsx                  # NEW
│   │   ├── PrivacyPage.jsx                # NEW
│   │   └── NotFoundPage.jsx               # NEW
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── utils/
│   │   └── analytics.js                   # NEW
│   │
│   ├── App.jsx                            # UPDATED
│   └── main.jsx
│
├── .env
├── .env.example
├── package.json
├── tailwind.config.js
├── vite.config.js
├── CONSOLIDATION_PLAN.md
└── TDD-WEBSITE-CONSOLIDATION.md
```

---

## 10. Testing Strategy

### 10.1 Component Tests (Vitest + Testing Library)

```javascript
// src/components/Products/ProductCard.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const mockProps = {
    name: 'PO Studio Cloud',
    tagline: 'Get started in minutes',
    description: 'Managed SaaS solution',
    features: ['Feature 1', 'Feature 2'],
    cta: { text: 'Start Free', href: '/signup', variant: 'primary' },
    icon: () => <span>Icon</span>,
  };

  it('renders product name', () => {
    render(
      <BrowserRouter>
        <ProductCard {...mockProps} />
      </BrowserRouter>
    );
    expect(screen.getByText('PO Studio Cloud')).toBeInTheDocument();
  });

  it('renders all features', () => {
    render(
      <BrowserRouter>
        <ProductCard {...mockProps} />
      </BrowserRouter>
    );
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
  });

  it('renders CTA button with correct link', () => {
    render(
      <BrowserRouter>
        <ProductCard {...mockProps} />
      </BrowserRouter>
    );
    const button = screen.getByRole('link', { name: 'Start Free' });
    expect(button).toHaveAttribute('href', '/signup');
  });
});
```

### 10.2 Page Tests

```javascript
// src/pages/HomePage.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './HomePage';

describe('HomePage', () => {
  const renderHomePage = () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </HelmetProvider>
    );
  };

  it('renders hero section', () => {
    renderHomePage();
    expect(screen.getByText(/Codify Your Software Development Lifecycle/i)).toBeInTheDocument();
  });

  it('renders products section', () => {
    renderHomePage();
    expect(screen.getByText('PO Studio Cloud')).toBeInTheDocument();
    expect(screen.getByText('PO Studio Enterprise')).toBeInTheDocument();
  });
});
```

### 10.3 E2E Tests (Playwright)

```javascript
// tests/e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigates from home to cloud page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Cloud');
    await expect(page).toHaveURL('/cloud');
    await expect(page.locator('h1')).toContainText('PO Studio Cloud');
  });

  test('navigates from home to pricing', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Pricing');
    await expect(page).toHaveURL('/pricing');
  });

  test('Start Free button links to signup', async ({ page }) => {
    await page.goto('/');
    const link = page.locator('a:has-text("Start Free")').first();
    await expect(link).toHaveAttribute('href', /app\.po-studio\.io\/signup/);
  });
});
```

---

## 11. Performance Considerations

### 11.1 Code Splitting

Use React.lazy for route-based code splitting:

```jsx
import { lazy, Suspense } from 'react';

const CloudPage = lazy(() => import('./pages/CloudPage'));
const EnterprisePage = lazy(() => import('./pages/EnterprisePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// In Routes
<Suspense fallback={<PageLoader />}>
  <Route path="cloud" element={<CloudPage />} />
</Suspense>
```

### 11.2 Image Optimization

- Use WebP format where possible
- Implement lazy loading for images below the fold
- Use srcset for responsive images

```jsx
<img
  src="/assets/screenshots/dashboard.webp"
  srcSet="/assets/screenshots/dashboard-sm.webp 640w,
          /assets/screenshots/dashboard-md.webp 1024w,
          /assets/screenshots/dashboard.webp 1920w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  loading="lazy"
  alt="PO Studio Dashboard"
/>
```

### 11.3 Particle Performance

Reduce particle count on lower-end devices:

```javascript
const getParticleCount = () => {
  if (window.matchMedia('(max-width: 768px)').matches) return 30;
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return 40;
  return 80;
};
```

---

## 12. Deployment

### 12.1 Build Configuration

**File:** `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://coweave.ai',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'tsparticles'],
        },
      },
    },
  },
});
```

### 12.2 Environment Variables

**File:** `.env.example`

```
# Analytics
VITE_GA4_ID=G-XXXXXXXXXX

# Email (if using EmailJS for contact form)
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxx

# Feature flags
VITE_SHOW_BLOG=false
VITE_SHOW_DOCS=false
```

### 12.3 CI/CD Pipeline

**Primary: Vercel (Automatic Deployment)**

Vercel automatically deploys when connected to the GitHub repository:
- **Production:** Push to `main` branch → deploys to coweave.ai
- **Preview:** Push to any other branch → creates preview URL

No GitHub Actions workflow needed for deployment. Vercel handles:
- Build (`npm run build`)
- Deploy to edge network
- SSL certificate provisioning
- CDN distribution

**Optional: GitHub Actions for Additional CI**

**File:** `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Test
        run: npm run test

      - name: Build (verify)
        run: npm run build
        env:
          VITE_GA4_ID: ${{ secrets.GA4_ID }}
```

**Vercel Project Settings:**

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm ci` |
| Node.js Version | 20.x |

See **Section 15: Infrastructure: Ingress & DNS** for complete Vercel configuration.

---

## 13. Security Considerations

### 13.1 Content Security Policy

Add CSP headers via CloudFlare or nginx:

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://www.google-analytics.com https://api.emailjs.com;
```

### 13.2 Form Security

- Rate limit contact form submissions (server-side if using API)
- Implement honeypot field for spam protection
- Validate all inputs client-side and server-side

```jsx
// Honeypot field (hidden)
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
  {...register('honeypot')}
/>

// In submit handler
if (data.honeypot) {
  // Bot detected, silently reject
  return;
}
```

---

## 14. Accessibility

### 14.1 Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Focus management on route changes

### 14.2 Implementation

```jsx
// Focus management on route change
const FocusManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Focus main content on route change
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, [location]);

  return null;
};

// Skip to content link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## 15. Infrastructure: Ingress & DNS

### 15.1 DNS Configuration

**Current State:**

| Domain | Purpose | Current Provider |
|--------|---------|------------------|
| `coweave.ai` | Marketing website | TBD (to be confirmed) |
| `app.coweave.ai` | PO Studio Cloud SaaS | AWS Route 53 |
| `po-studio-cloud.appemble.com` | Staging/alternate access | Cloudflare |

**Target State:**

| Domain | Points To | Purpose |
|--------|-----------|---------|
| `coweave.ai` | Vercel Edge Network | Marketing website |
| `www.coweave.ai` | Redirect to `coweave.ai` | WWW redirect |
| `app.coweave.ai` | AWS EKS Ingress | PO Studio Cloud SaaS |
| `docs.coweave.ai` | TBD (GitBook/Docusaurus) | Documentation (future) |
| `blog.coweave.ai` | Vercel (same as coweave.ai) | Blog (future, or /blog path) |

### 15.2 Vercel DNS Setup

**Required DNS Records for coweave.ai:**

```
# A Records (Vercel's anycast IPs)
@     A     76.76.21.21
@     A     76.76.21.22

# CNAME for www
www   CNAME cname.vercel-dns.com.

# Verification TXT (provided by Vercel)
_vercel   TXT   vc-domain-verify=...
```

**Vercel Project Configuration:**

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "redirects": [
    { "source": "/signup", "destination": "https://app.coweave.ai/signup", "permanent": false },
    { "source": "/login", "destination": "https://app.coweave.ai/login", "permanent": false }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### 15.3 Cross-Domain Routing

**Traffic Flow:**

```
User visits coweave.ai
        │
        ▼
┌───────────────────┐
│   Vercel CDN      │  ← Serves static marketing site
│   (coweave.ai)    │
└───────┬───────────┘
        │
        │ User clicks "Start Free" or "Login"
        ▼
┌───────────────────┐
│   AWS EKS         │  ← Handles app logic, auth, billing
│ (app.coweave.ai)│
└───────────────────┘
```

**No Ingress Changes Required:**

The coweave-website is purely static and deployed to Vercel. There are **no ingress changes** needed for AWS EKS because:

1. **coweave.ai** → Vercel (static site, no backend)
2. **app.coweave.ai** → AWS EKS (existing ingress unchanged)
3. **Cross-origin links** → User navigates between domains via standard links

### 15.4 Contact Form Routing

**Decision:** Link to existing po-studio-cloud contact form (see CONSOLIDATION_PLAN.md Appendix D.1)

| Route | Behavior |
|-------|----------|
| `coweave.ai/contact` | Redirect to `app.coweave.ai/contact` |
| OR | "Contact Sales" button links directly to `app.coweave.ai/contact` |

**Rationale:**
- Reuses existing Cloudflare Turnstile bot protection
- Reuses existing Brevo email integration
- No duplicate backend needed
- Consistent rate limiting

**Implementation Option A (Redirect):**
```json
// vercel.json
{
  "redirects": [
    { "source": "/contact", "destination": "https://app.coweave.ai/contact", "permanent": false }
  ]
}
```

**Implementation Option B (Direct Link):**
```jsx
// In CTASection.jsx, EnterprisePage.jsx, etc.
<GlowButton href="https://app.coweave.ai/contact" variant="secondary">
  Contact Sales
</GlowButton>
```

### 15.5 SSL/TLS Configuration

| Domain | SSL Provider | Certificate Type |
|--------|--------------|------------------|
| `coweave.ai` | Vercel (automatic) | Let's Encrypt |
| `app.coweave.ai` | AWS ACM | Amazon issued |

**Vercel handles SSL automatically:**
- Automatic certificate provisioning
- Automatic renewal
- Edge-terminated HTTPS

### 15.6 CDN & Caching

**Vercel Edge Network:**
- Global CDN with 100+ edge locations
- Automatic static asset caching
- ISR (Incremental Static Regeneration) if needed

**Cache Headers (automatic via Vercel):**
```
# Static assets (JS, CSS, images)
Cache-Control: public, max-age=31536000, immutable

# HTML pages
Cache-Control: public, max-age=0, must-revalidate
```

### 15.7 Migration Checklist

**DNS Migration Steps:**

1. [ ] Confirm current DNS provider for coweave.ai
2. [ ] Add coweave.ai domain to Vercel project
3. [ ] Get verification TXT record from Vercel
4. [ ] Add TXT record to current DNS provider
5. [ ] Verify domain in Vercel
6. [ ] Add A and CNAME records
7. [ ] Wait for DNS propagation (up to 48 hours)
8. [ ] Verify SSL certificate is active
9. [ ] Test all routes work correctly
10. [ ] Update any hardcoded URLs in codebase

**No Changes Required:**

| Component | Status |
|-----------|--------|
| AWS EKS Ingress for app.coweave.ai | No change |
| AWS Route 53 for app.coweave.ai | No change |
| AWS ALB configuration | No change |
| Kubernetes services | No change |

---

## 16. Appendix

### 16.1 Migration from Waitlist to Products

| Current | New |
|---------|-----|
| WaitlistSection | CTASection |
| WaitlistForm | Removed (replaced with direct links) |
| "Join Waitlist" CTA | "Start Free" + "Contact Sales" CTAs |
| Email capture | Direct signup at app.coweave.ai |

### 16.2 External Links

| Link | Target |
|------|--------|
| Start Free | https://app.coweave.ai/signup |
| Login | https://app.coweave.ai/login |
| Documentation | https://docs.coweave.ai |
| GitHub | https://github.com/coweave-ai |
