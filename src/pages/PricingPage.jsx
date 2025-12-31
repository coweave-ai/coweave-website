import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import GlassCard from '../components/common/GlassCard';
import urls from '../config/urls';
import {
  FaCheck,
  FaChevronDown,
  FaCloud,
  FaBuilding,
  FaExclamationTriangle,
  FaTimes
} from 'react-icons/fa';

const PricingPage = () => {
  const [selectedProduct, setSelectedProduct] = useState('studio');
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // PO Studio Plans
  const studioPlans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      users: 3,
      teams: 1,
      prompts: 10,
      features: [
        'Prompt management',
        'Team collaboration',
        'Version control',
        'Basic analytics',
        'Community support'
      ],
      cta: {
        text: 'Start Free',
        href: urls.signup,
        variant: 'secondary'
      }
    },
    {
      name: 'Starter',
      monthlyPrice: 29,
      yearlyPrice: 290,
      users: 15,
      teams: 3,
      prompts: 100,
      features: [
        'Everything in Free',
        'API Access',
        'Full version history',
        'Email support'
      ],
      cta: {
        text: 'Start Trial',
        href: urls.signupWithPlan('starter'),
        variant: 'primary'
      },
      highlighted: true
    },
    {
      name: 'Professional',
      monthlyPrice: 99,
      yearlyPrice: 990,
      users: 60,
      teams: 10,
      prompts: 500,
      features: [
        'Everything in Starter',
        'SAML SSO',
        'Enhanced analytics',
        'Priority support'
      ],
      cta: {
        text: 'Start Trial',
        href: urls.signupWithPlan('professional'),
        variant: 'primary'
      }
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      users: 'Unlimited',
      teams: 'Unlimited',
      prompts: 'Unlimited',
      features: [
        'Everything in Pro',
        'Self-hosted deployment',
        'Air-gapped option',
        'Custom SLA',
        'Dedicated support'
      ],
      cta: {
        text: 'Contact Sales',
        href: '/contact',
        variant: 'secondary',
        isInternal: true
      }
    }
  ];

  // Platform Plans
  const platformPlans = [
    {
      name: 'Starter',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      users: 15,
      teams: 3,
      prompts: 100,
      analytics: 'Standard',
      support: 'Email support',
      responseTime: '24h response',
      cta: {
        text: 'Schedule Demo',
        href: '/contact',
        variant: 'primary',
        isInternal: true
      }
    },
    {
      name: 'Professional',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      users: 60,
      teams: 10,
      prompts: 500,
      analytics: 'Enhanced',
      support: 'Priority support',
      responseTime: '8h response',
      cta: {
        text: 'Schedule Demo',
        href: '/contact',
        variant: 'primary',
        isInternal: true
      },
      highlighted: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      users: 'Unlimited',
      teams: 'Unlimited',
      prompts: 'Unlimited',
      analytics: 'Advanced',
      support: 'Dedicated success mgr',
      responseTime: 'Custom SLA (99.9%)',
      extras: ['24/7 support', 'Air-gapped deployment'],
      cta: {
        text: 'Contact Sales',
        href: '/contact',
        variant: 'secondary',
        isInternal: true
      }
    }
  ];

  // Platform included features
  const platformIncludes = [
    'Full Prompt Optimization Studio',
    'AI Service + Workflow Execution Engine',
    'ALL Workflows & Agents (Architect, Dev, QA, DevOps, Doc, RCA)',
    'Full GitHub/GitLab/Jira/Linear/Slack/CI-CD integration',
    'PRD → TDD → Test → Code automation',
    '85%+ test coverage automatically',
    '3-5x development velocity',
    'Enterprise compliance'
  ];

  // Feature comparison data
  const comparisonFeatures = [
    { category: 'DEPLOYMENT', features: [
      { name: 'Cloud (SaaS)', studio: true, platform: false },
      { name: 'On-Prem', studio: 'Upon request', platform: true },
      { name: 'Air-Gapped', studio: false, platform: 'Enterprise' }
    ]},
    { category: 'LLM REQUIREMENTS', features: [
      { name: 'Works with any AI tool', studio: true, platform: false },
      { name: 'Requires Claude license', studio: false, platform: true },
      { name: 'Claude BYOL', studio: 'N/A', platform: 'Required' }
    ]},
    { category: 'PROMPT MANAGEMENT', features: [
      { name: 'Prompt version control', studio: true, platform: true },
      { name: 'Team collaboration', studio: true, platform: true },
      { name: 'RBAC', studio: true, platform: true },
      { name: 'API Access', studio: 'Starter+', platform: true },
      { name: 'SAML SSO', studio: 'Pro+', platform: true },
      { name: 'Hierarchical assembly', studio: true, platform: true }
    ]},
    { category: 'AI & AUTOMATION', features: [
      { name: 'AI Service', studio: false, platform: true },
      { name: 'Workflow Execution Engine', studio: false, platform: true },
      { name: 'Agentic Workflows', studio: false, platform: true },
      { name: 'PRD→TDD→Test automation', studio: false, platform: true },
      { name: '85%+ test coverage', studio: false, platform: true }
    ]},
    { category: 'WORKFLOWS & AGENTS', features: [
      { name: 'Architect Agent', studio: false, platform: true },
      { name: 'Developer Agent', studio: false, platform: true },
      { name: 'QA Agent', studio: false, platform: true },
      { name: 'DevOps Agent', studio: false, platform: true },
      { name: 'Documentation Agent', studio: false, platform: true },
      { name: 'RCA Agent', studio: false, platform: true }
    ]},
    { category: 'INTEGRATIONS', features: [
      { name: 'GitHub/GitLab', studio: false, platform: true },
      { name: 'Jira/Linear', studio: false, platform: true },
      { name: 'Slack', studio: false, platform: true },
      { name: 'Jenkins/CI-CD', studio: false, platform: true }
    ]},
    { category: 'STARTING PRICE', features: [
      { name: 'Price', studio: 'Free', platform: '$299/mo + BYOL' }
    ]}
  ];

  // FAQs
  const faqs = [
    {
      question: "What's the difference between PO Studio and CoWeave Platform?",
      answer: "Prompt Optimization Studio eliminates AI output variance by codifying organizational knowledge into prompts. It's a cloud-based prompt management platform that works with any AI tool. CoWeave AI Platform is a complete SDLC automation platform featuring agentic workflows with deterministic orchestration. It includes PO Studio plus AI Service, Workflow Execution Engine, and all workflows & agents. Requires on-prem deployment and Claude BYOL."
    },
    {
      question: 'Can I try before purchasing?',
      answer: "Yes! PO Studio has a free tier with 3 users and 10 prompts. No credit card required. For CoWeave AI Platform, schedule a demo to see it in action. We offer proof-of-concept deployments for qualified teams."
    },
    {
      question: 'Do I need a Claude license for PO Studio?',
      answer: "No. PO Studio works with any AI coding tool (Cursor, Copilot, Claude Code, Windsurf, Aider, etc.). You continue using whatever AI tools you already have."
    },
    {
      question: 'Do I need a Claude license for CoWeave Platform?',
      answer: "Yes. CoWeave AI Platform requires Bring Your Own License (BYOL). We recommend Claude Max or Enterprise Claude. Currently supports Claude only (other LLMs coming soon)."
    },
    {
      question: 'What happens if I exceed my prompt limit?',
      answer: "You can upgrade to a higher tier anytime. Your existing prompts and settings transfer seamlessly."
    },
    {
      question: 'Can I switch between monthly and yearly billing?',
      answer: "Yes. Yearly billing saves 17% (2 months free). You can switch at any time from your account settings."
    },
    {
      question: 'Do all Platform tiers have the same features?',
      answer: "Yes! All CoWeave AI Platform tiers include identical features: Full PO Studio, AI Service, Workflow Execution Engine, and ALL workflows & agents. Tiers differ only in: Scale (users, teams, prompts), Analytics level (Standard, Enhanced, Advanced), and Support level (Email, Priority, Dedicated)."
    },
    {
      question: 'Is my data secure?',
      answer: "Yes. PO Studio is SOC 2 Type II compliant with AES-256 encryption at rest and TLS 1.3 in transit. CoWeave Platform deploys on your infrastructure (on-prem or VPC). Your code never leaves your network. Only outbound port 443 to Claude API. Air-gapped option available."
    },
    {
      question: 'What kind of support do you offer?',
      answer: "PO Studio: Free (Community), Starter (Email), Professional (Priority), Enterprise (Dedicated + Custom SLA). CoWeave Platform: Starter (Email, 24h), Professional (Priority, 8h), Enterprise (Dedicated success manager + 24/7 + Custom SLA)."
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: "Yes. You can cancel anytime from your account settings. Your data remains accessible until the end of your billing period."
    },
    {
      question: 'Can I get PO Studio on-prem?',
      answer: "Yes. On-prem deployment is available upon request for Enterprise customers who require it for compliance."
    }
  ];

  // PO Studio detailed features by tier
  const studioDetailedFeatures = [
    { category: 'SCALE', features: [
      { name: 'Users', free: '3', starter: '15', pro: '60', enterprise: 'Unlimited' },
      { name: 'Teams', free: '1', starter: '3', pro: '10', enterprise: 'Unlimited' },
      { name: 'Prompts', free: '10', starter: '100', pro: '500', enterprise: 'Unlimited' }
    ]},
    { category: 'PROMPT MANAGEMENT', features: [
      { name: 'Hierarchical assembly', free: true, starter: true, pro: true, enterprise: true },
      { name: 'Version control', free: 'Basic', starter: 'Full', pro: 'Full', enterprise: 'Full' },
      { name: 'Team collaboration', free: true, starter: true, pro: true, enterprise: true },
      { name: 'RBAC', free: true, starter: true, pro: true, enterprise: true },
      { name: 'API Access', free: false, starter: true, pro: true, enterprise: true },
      { name: 'Runtime caching', free: true, starter: true, pro: true, enterprise: true }
    ]},
    { category: 'SECURITY & COMPLIANCE', features: [
      { name: 'SAML SSO', free: false, starter: false, pro: true, enterprise: true },
      { name: 'Self-hosted deployment', free: false, starter: false, pro: false, enterprise: 'Upon request' },
      { name: 'Air-gapped option', free: false, starter: false, pro: false, enterprise: true },
      { name: 'Audit logging', free: 'Basic', starter: 'Full', pro: 'Full', enterprise: 'Full' }
    ]},
    { category: 'ANALYTICS', features: [
      { name: 'Usage analytics', free: 'Basic', starter: 'Full', pro: 'Full', enterprise: 'Full' },
      { name: 'Performance tracking', free: false, starter: true, pro: true, enterprise: true },
      { name: 'Team insights', free: false, starter: false, pro: true, enterprise: true },
      { name: 'Advanced analytics', free: false, starter: false, pro: false, enterprise: true }
    ]},
    { category: 'SUPPORT', features: [
      { name: 'Community support', free: true, starter: false, pro: false, enterprise: false },
      { name: 'Email support', free: false, starter: true, pro: false, enterprise: false },
      { name: 'Priority support', free: false, starter: false, pro: true, enterprise: false },
      { name: 'Dedicated support', free: false, starter: false, pro: false, enterprise: true },
      { name: 'Custom SLA', free: false, starter: false, pro: false, enterprise: true }
    ]}
  ];

  // Platform detailed features by tier
  const platformDetailedFeatures = [
    { category: 'SCALE', features: [
      { name: 'Users', starter: '15', professional: '60', enterprise: 'Unlimited' },
      { name: 'Teams', starter: '3', professional: '10', enterprise: 'Unlimited' },
      { name: 'Prompts', starter: '100', professional: '500', enterprise: 'Unlimited' }
    ]},
    { category: 'CORE PLATFORM (ALL TIERS IDENTICAL)', features: [
      { name: 'Full PO Studio', starter: true, professional: true, enterprise: true },
      { name: 'AI Service', starter: true, professional: true, enterprise: true },
      { name: 'Workflow Engine', starter: true, professional: true, enterprise: true },
      { name: 'ALL Workflows', starter: true, professional: true, enterprise: true },
      { name: 'ALL Agents', starter: true, professional: true, enterprise: true },
      { name: 'Full Integrations', starter: true, professional: true, enterprise: true },
      { name: 'PRD→TDD→Test', starter: true, professional: true, enterprise: true },
      { name: '85%+ coverage', starter: true, professional: true, enterprise: true }
    ]},
    { category: 'DEPLOYMENT (ALL TIERS IDENTICAL)', features: [
      { name: 'On-prem required', starter: true, professional: true, enterprise: true },
      { name: 'Kubernetes', starter: true, professional: true, enterprise: true },
      { name: 'Docker Compose', starter: true, professional: true, enterprise: true },
      { name: 'Air-gapped', starter: false, professional: false, enterprise: true }
    ]},
    { category: 'ANALYTICS (TIER DIFFERENCES)', features: [
      { name: 'Workflow analytics', starter: 'Standard', professional: 'Enhanced', enterprise: 'Advanced' },
      { name: 'Team insights', starter: 'Standard', professional: 'Enhanced', enterprise: 'Advanced' },
      { name: 'Custom reports', starter: false, professional: false, enterprise: true }
    ]},
    { category: 'SUPPORT (TIER DIFFERENCES)', features: [
      { name: 'Support type', starter: 'Email', professional: 'Priority', enterprise: 'Dedicated' },
      { name: 'Response time', starter: '24h', professional: '8h', enterprise: 'Custom SLA' },
      { name: 'Success manager', starter: false, professional: false, enterprise: true },
      { name: '24/7 support', starter: false, professional: false, enterprise: true },
      { name: 'SLA guarantee', starter: false, professional: false, enterprise: '99.9% uptime' }
    ]},
    { category: 'REQUIREMENTS (ALL TIERS IDENTICAL)', features: [
      { name: 'Claude BYOL', starter: true, professional: true, enterprise: true },
      { name: 'PostgreSQL', starter: true, professional: true, enterprise: true },
      { name: 'Redis', starter: true, professional: true, enterprise: true },
      { name: 'PLG stack', starter: true, professional: true, enterprise: true }
    ]}
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <FaCheck className="w-5 h-5 text-primary-vividAzure mx-auto" />;
    }
    if (value === false) {
      return <FaTimes className="w-5 h-5 text-gray-500 mx-auto" />;
    }
    return <span className="text-gray-300 text-sm">{value}</span>;
  };

  return (
    <>
      <SEO
        title="Pricing - Simple, Transparent Pricing | CoWeave"
        description="Two products, one mission: Production code. Done right. Start free with Prompt Optimization Studio or schedule a demo for full SDLC automation."
        keywords="CoWeave pricing, Prompt Optimization Studio pricing, enterprise software pricing, AI development tools pricing, SDLC automation cost, free tier, developer tools"
        url="/pricing"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Simple, Transparent Pricing</span>
            </h1>
            <p className="text-2xl text-white font-medium mb-4">
              Two products, one mission: Production code. Done right.
            </p>
            <p className="text-lg text-gray-300">
              Start free with Prompt Optimization Studio or schedule a demo for full SDLC automation with CoWeave AI Platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selector */}
      <AnimatedSection animation="fade" className="py-8 bg-primary-navy">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-center text-gray-400 mb-6">Which product is right for you?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedProduct('studio')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedProduct === 'studio'
                    ? 'border-primary-vividAzure bg-primary-vividAzure/10 shadow-[0_0_20px_rgba(63,214,248,0.3)]'
                    : 'border-primary-vividAzure/20 hover:border-primary-vividAzure/50 bg-primary-blue/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaCloud className={`w-6 h-6 ${selectedProduct === 'studio' ? 'text-primary-vividAzure' : 'text-gray-400'}`} />
                  <span className={`text-xl font-bold ${selectedProduct === 'studio' ? 'text-white' : 'text-gray-300'}`}>
                    Prompt Optimization Studio
                  </span>
                </div>
                <p className={`text-sm ${selectedProduct === 'studio' ? 'text-primary-lightAzure' : 'text-gray-500'}`}>
                  Eliminate AI Output Variance
                </p>
              </button>

              <button
                onClick={() => setSelectedProduct('platform')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedProduct === 'platform'
                    ? 'border-primary-vividAzure bg-primary-vividAzure/10 shadow-[0_0_20px_rgba(63,214,248,0.3)]'
                    : 'border-primary-vividAzure/20 hover:border-primary-vividAzure/50 bg-primary-blue/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaBuilding className={`w-6 h-6 ${selectedProduct === 'platform' ? 'text-primary-vividAzure' : 'text-gray-400'}`} />
                  <span className={`text-xl font-bold ${selectedProduct === 'platform' ? 'text-white' : 'text-gray-300'}`}>
                    CoWeave AI Platform
                  </span>
                </div>
                <p className={`text-sm ${selectedProduct === 'platform' ? 'text-primary-lightAzure' : 'text-gray-500'}`}>
                  Full SDLC Orchestration
                </p>
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PO Studio Pricing */}
      <AnimatePresence mode="wait">
        {selectedProduct === 'studio' && (
          <motion.div
            key="studio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedSection animation="fade" className="py-12 bg-primary-navy">
              <div className="container mx-auto px-6">
                {/* Studio Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    <span className="animated-gradient-text">Prompt Optimization Studio</span>
                  </h2>
                  <p className="text-xl text-primary-lightAzure mb-6">
                    Eliminate AI Output Variance Across Your Team
                  </p>

                  {/* Feature highlights */}
                  <div className="max-w-3xl mx-auto bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6 mb-8">
                    <p className="text-gray-300 mb-4">
                      Centralized prompt management platform that transforms generic AI assistants into context-aware team members by codifying organizational knowledge.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <span className="text-primary-lightAzure">✓ Cloud-based SaaS • No infrastructure required</span>
                      <span className="text-primary-lightAzure">✓ Works with Cursor, Copilot, Claude Code, any AI tool</span>
                      <span className="text-primary-lightAzure">✓ No Claude license required</span>
                      <span className="text-primary-lightAzure">✓ On-prem available upon request</span>
                    </div>
                  </div>

                  {/* Billing Toggle */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
                      Monthly
                    </span>
                    <button
                      onClick={() => setIsYearly(!isYearly)}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        isYearly ? 'bg-primary-vividAzure' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          isYearly ? 'left-8' : 'left-1'
                        }`}
                      />
                    </button>
                    <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                      Yearly{' '}
                      <span className="text-primary-vividAzure text-sm font-medium">
                        (Save 17%)
                      </span>
                    </span>
                  </div>
                </div>

                {/* Studio Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
                  {studioPlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative bg-primary-blue/30 backdrop-blur-lg border rounded-2xl p-6 transition-all duration-300 flex flex-col ${
                        plan.highlighted
                          ? 'border-primary-vividAzure shadow-[0_0_30px_rgba(63,214,248,0.3)]'
                          : 'border-primary-vividAzure/20 hover:border-primary-vividAzure/50'
                      }`}
                    >
                      {plan.highlighted && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-vividAzure text-primary-navy px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </div>
                      )}

                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                      <div className="mb-4">
                        {plan.monthlyPrice !== null ? (
                          <>
                            <span className="text-4xl font-bold text-white">
                              ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                            </span>
                            <span className="text-gray-400">/month</span>
                            {isYearly && plan.monthlyPrice > 0 && (
                              <p className="text-sm text-primary-lightAzure mt-1">
                                ${plan.yearlyPrice}/year
                              </p>
                            )}
                            {plan.monthlyPrice === 0 && (
                              <p className="text-sm text-gray-500 mt-1">forever</p>
                            )}
                          </>
                        ) : (
                          <span className="text-3xl font-bold text-white">Custom</span>
                        )}
                      </div>

                      {/* Scale */}
                      <div className="text-sm text-gray-400 mb-4 space-y-1">
                        <p>{plan.users} users</p>
                        <p>{plan.teams} {plan.teams === 1 ? 'team' : 'teams'}</p>
                        <p>{plan.prompts} prompts</p>
                      </div>

                      <ul className="space-y-2 mb-6 flex-grow">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-300 text-sm">
                            <FaCheck className="w-4 h-4 text-primary-vividAzure mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <GlowButton
                        href={plan.cta.isInternal ? undefined : plan.cta.href}
                        to={plan.cta.isInternal ? plan.cta.href : undefined}
                        variant={plan.cta.variant}
                        className="w-full mt-auto"
                        size="small"
                      >
                        {plan.cta.text}
                      </GlowButton>
                    </motion.div>
                  ))}
                </div>

                <p className="text-center text-gray-500 text-sm mb-12">*Yearly billing (2 months free)</p>

                {/* PO Studio Detailed Features Table */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-heading font-bold text-center mb-8 text-white">
                    What's Included in Each Tier
                  </h3>
                  <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="w-full bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl">
                      <thead>
                        <tr className="border-b border-primary-vividAzure/20">
                          <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                          <th className="text-center p-4 text-primary-lightAzure font-bold">Free</th>
                          <th className="text-center p-4 text-primary-lightAzure font-bold">Starter</th>
                          <th className="text-center p-4 text-primary-lightAzure font-bold">Pro</th>
                          <th className="text-center p-4 text-primary-lightAzure font-bold">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studioDetailedFeatures.map((category, catIndex) => (
                          <React.Fragment key={catIndex}>
                            <tr className="bg-primary-navy/50">
                              <td colSpan={5} className="p-3 text-xs font-bold text-primary-vividAzure uppercase tracking-wider">
                                {category.category}
                              </td>
                            </tr>
                            {category.features.map((feature, featIndex) => (
                              <tr key={featIndex} className="border-b border-primary-vividAzure/10 last:border-0">
                                <td className="p-4 text-gray-300">{feature.name}</td>
                                <td className="p-4 text-center">{renderFeatureValue(feature.free)}</td>
                                <td className="p-4 text-center">{renderFeatureValue(feature.starter)}</td>
                                <td className="p-4 text-center">{renderFeatureValue(feature.pro)}</td>
                                <td className="p-4 text-center">{renderFeatureValue(feature.enterprise)}</td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                {/* Perfect For */}
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-primary-lightAzure font-medium mb-4">Perfect for:</p>
                  <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
                    <span>• Teams using AI coding tools (Cursor, Copilot, Claude Code, etc.)</span>
                    <span>• Experiencing 2-3x code review overhead from inconsistent AI outputs</span>
                    <span>• Need to codify organizational knowledge into automatic guardrails</span>
                    <span>• Want to transform generic AI into context-aware team members</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </motion.div>
        )}

        {/* Platform Pricing */}
        {selectedProduct === 'platform' && (
          <motion.div
            key="platform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedSection animation="fade" className="py-12 bg-primary-navy">
              <div className="container mx-auto px-6">
                {/* Platform Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    <span className="animated-gradient-text">CoWeave AI Platform</span>
                  </h2>
                  <p className="text-xl text-primary-lightAzure mb-6">
                    Human-Supervised Full-Cycle SDLC Automation Platform
                  </p>

                  {/* Feature highlights */}
                  <div className="max-w-3xl mx-auto bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6 mb-8">
                    <p className="text-gray-300 mb-4">
                      Complete SDLC automation featuring Agentic Workflows with Deterministic Orchestration. Pre-built workflows for architecture, development, testing, deployment, and incident response.
                    </p>
                    <div className="flex flex-col gap-2 items-center">
                      <div className="flex items-center gap-2 text-amber-400">
                        <FaExclamationTriangle className="w-4 h-4" />
                        <span className="text-sm font-medium">On-prem deployment required</span>
                      </div>
                      <div className="flex items-center gap-2 text-amber-400">
                        <FaExclamationTriangle className="w-4 h-4" />
                        <span className="text-sm font-medium">Bring Your Own Claude License (BYOL) — Recommended: Claude Max or Enterprise</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">All Tiers Include Same Features — Choose for Scale & Support</p>

                  {/* Billing Toggle */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
                      Monthly
                    </span>
                    <button
                      onClick={() => setIsYearly(!isYearly)}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        isYearly ? 'bg-primary-vividAzure' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          isYearly ? 'left-8' : 'left-1'
                        }`}
                      />
                    </button>
                    <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                      Yearly{' '}
                      <span className="text-primary-vividAzure text-sm font-medium">
                        (Save 17%)
                      </span>
                    </span>
                  </div>
                </div>

                {/* Platform Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                  {platformPlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative bg-primary-blue/30 backdrop-blur-lg border rounded-2xl p-6 transition-all duration-300 flex flex-col ${
                        plan.highlighted
                          ? 'border-primary-vividAzure shadow-[0_0_30px_rgba(63,214,248,0.3)]'
                          : 'border-primary-vividAzure/20 hover:border-primary-vividAzure/50'
                      }`}
                    >
                      {plan.highlighted && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-vividAzure text-primary-navy px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </div>
                      )}

                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                      <div className="mb-4">
                        {plan.monthlyPrice !== null ? (
                          <>
                            <span className="text-4xl font-bold text-white">
                              ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                            </span>
                            <span className="text-gray-400">/month</span>
                            {isYearly && (
                              <p className="text-sm text-primary-lightAzure mt-1">
                                ${plan.yearlyPrice}/year
                              </p>
                            )}
                            <p className="text-sm text-amber-400 mt-1">+ BYOL</p>
                          </>
                        ) : (
                          <>
                            <span className="text-3xl font-bold text-white">Custom</span>
                            <p className="text-sm text-amber-400 mt-1">+ BYOL</p>
                          </>
                        )}
                      </div>

                      {/* Scale */}
                      <div className="text-sm text-gray-400 mb-4 pb-4 border-b border-primary-vividAzure/20">
                        <p className="font-medium text-gray-300 mb-2">SCALE</p>
                        <p>{plan.users} users</p>
                        <p>{plan.teams} teams</p>
                        <p>{plan.prompts} prompts</p>
                      </div>

                      {/* Analytics & Support */}
                      <div className="text-sm text-gray-400 mb-4 pb-4 border-b border-primary-vividAzure/20">
                        <p className="font-medium text-gray-300 mb-2">ANALYTICS</p>
                        <p>{plan.analytics}</p>
                      </div>

                      <div className="text-sm text-gray-400 mb-4 flex-grow">
                        <p className="font-medium text-gray-300 mb-2">SUPPORT</p>
                        <p>{plan.support}</p>
                        <p>{plan.responseTime}</p>
                        {plan.extras && plan.extras.map((extra, i) => (
                          <p key={i}>{extra}</p>
                        ))}
                      </div>

                      <GlowButton
                        to={plan.cta.href}
                        variant={plan.cta.variant}
                        className="w-full mt-auto"
                        size="small"
                      >
                        {plan.cta.text}
                      </GlowButton>
                    </motion.div>
                  ))}
                </div>

                <p className="text-center text-gray-500 text-sm mb-12">*Yearly billing (2 months free)</p>

                {/* All Tiers Include */}
                <div className="max-w-4xl mx-auto bg-primary-blue/20 backdrop-blur-lg border border-primary-vividAzure/30 rounded-xl p-6 mb-12">
                  <h3 className="text-lg font-bold text-white mb-4 text-center">ALL TIERS INCLUDE:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {platformIncludes.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <FaCheck className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Detailed Features Table */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-heading font-bold text-center mb-8 text-white">
                    What's Included in Each Tier
                  </h3>
                  <div className="max-w-4xl mx-auto overflow-x-auto">
                    <table className="w-full bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl">
                      <thead>
                        <tr className="border-b border-primary-vividAzure/20">
                          <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                          <th className="text-center p-4 text-primary-lightAzure font-bold">Starter</th>
                          <th className="text-center p-4 text-primary-lightAzure font-bold">Professional</th>
                          <th className="text-center p-4 text-primary-lightAzure font-bold">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody>
                        {platformDetailedFeatures.map((category, catIndex) => (
                          <React.Fragment key={catIndex}>
                            <tr className="bg-primary-navy/50">
                              <td colSpan={4} className="p-3 text-xs font-bold text-primary-vividAzure uppercase tracking-wider">
                                {category.category}
                              </td>
                            </tr>
                            {category.features.map((feature, featIndex) => (
                              <tr key={featIndex} className="border-b border-primary-vividAzure/10 last:border-0">
                                <td className="p-4 text-gray-300">{feature.name}</td>
                                <td className="p-4 text-center">{renderFeatureValue(feature.starter)}</td>
                                <td className="p-4 text-center">{renderFeatureValue(feature.professional)}</td>
                                <td className="p-4 text-center">{renderFeatureValue(feature.enterprise)}</td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                {/* Perfect For */}
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-primary-lightAzure font-medium mb-4">Perfect for:</p>
                  <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
                    <span>• Teams ready to codify entire SDLC with agentic workflows</span>
                    <span>• Organizations requiring on-prem deployment with full data control</span>
                    <span>• Engineering leaders wanting deterministic orchestration with AI autonomy</span>
                    <span>• Enterprises shipping production-grade code at scale</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feature Comparison Table */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-gradient-to-br from-primary-navy via-primary-blue to-primary-indigo"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">Compare Products</span>
            </h2>
            <p className="text-gray-400 text-lg">See which product fits your needs</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-primary-blue/20 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl">
                <thead>
                  <tr className="border-b border-primary-vividAzure/30">
                    <th className="p-6 text-left text-gray-400 font-medium w-1/2">Feature</th>
                    <th className="p-4 text-center w-1/4 bg-primary-blue/30">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <FaCloud className="w-4 h-4 text-primary-vividAzure" />
                        <span className="text-lg font-bold text-white">PO Studio</span>
                      </div>
                      <p className="text-xs text-gray-400">Cloud SaaS</p>
                      <p className="text-primary-lightAzure font-semibold text-sm mt-1">Starting Free</p>
                    </th>
                    <th className="p-4 text-center w-1/4 bg-primary-blue/30">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <FaBuilding className="w-4 h-4 text-primary-vividAzure" />
                        <span className="text-lg font-bold text-white">Platform</span>
                      </div>
                      <p className="text-xs text-gray-400">On-Prem + BYOL</p>
                      <p className="text-primary-lightAzure font-semibold text-sm mt-1">$299/mo+</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, catIndex) => (
                    <React.Fragment key={catIndex}>
                      <tr className="bg-primary-navy/60">
                        <td colSpan={3} className="p-4 text-sm font-bold text-primary-vividAzure uppercase tracking-wider border-b border-primary-vividAzure/20">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featIndex) => (
                        <tr key={featIndex} className="border-b border-primary-vividAzure/10 hover:bg-primary-blue/30 transition-colors">
                          <td className="p-4 text-gray-300 font-medium">{feature.name}</td>
                          <td className="p-4 text-center w-1/4">{renderFeatureValue(feature.studio)}</td>
                          <td className="p-4 text-center w-1/4">{renderFeatureValue(feature.platform)}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Decision Guide */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">Which Product Should You Choose?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PO Studio Decision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Choose PROMPT OPTIMIZATION STUDIO if you:</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Use AI coding tools (Cursor, Copilot, Claude Code, etc.)',
                    'Experience 2-3x code review overhead from inconsistent AI outputs',
                    'Need to codify organizational knowledge into prompts',
                    'Want cloud-based SaaS with no infrastructure setup',
                    "Don't have a Claude license (works with any AI tool)",
                    'Want to start free and upgrade when ready'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <GlowButton href={urls.signup} variant="primary" className="w-full">
                  Start Free
                </GlowButton>
              </GlassCard>
            </motion.div>

            {/* Platform Decision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GlassCard className="p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Choose COWEAVE AI PLATFORM if you:</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Need full SDLC automation with agentic workflows',
                    'Want PRD → TDD → Test → Code → Deploy automation',
                    'Require on-prem deployment with full data control',
                    'Have Claude Max or Enterprise license (or can get one)',
                    'Want 3-5x development velocity',
                    'Need 85%+ test coverage automatically',
                    'Want human-supervised automation at scale'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <GlowButton to="/contact" variant="primary" className="w-full">
                  Schedule Demo
                </GlowButton>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">Frequently Asked Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary-vividAzure/5 transition-colors"
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  <FaChevronDown
                    className={`w-5 h-5 text-primary-vividAzure flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Still have </span>
              <span className="animated-gradient-text">questions?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                href={urls.signup}
                variant="primary"
                size="large"
              >
                Start Free
              </GlowButton>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-xl transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default PricingPage;
