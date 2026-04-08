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
  FaTimes,
  FaCubes,
  FaLayerGroup,
  FaCodeBranch,
  FaCogs,
  FaBrain,
  FaPlug,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaLock,
  FaServer,
  FaBuilding
} from 'react-icons/fa';

const FeaturesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const featureCategories = [
    {
      title: 'Context Engineering',
      icon: FaCubes,
      features: [
        'Component-based context engineering (Base, Role, Repository, Workflow)',
        'Hierarchical context assembly',
        'Context version control with full history',
        'Team collaboration with RBAC',
        'API access for CI/CD integration',
        'Runtime caching for performance',
      ]
    },
    {
      title: 'AI Service & Workflow Engine',
      icon: FaBrain,
      features: [
        'Claude-powered AI Service',
        'Deterministic workflow orchestration',
        'PRD → TDD → Test → Code automation',
        '85%+ test coverage automatically',
        '3-5x development velocity',
        'Human-in-the-loop at every step',
      ]
    },
    {
      title: 'Agentic Workflows',
      icon: FaCogs,
      features: [
        'Architect Agent — PRD to design',
        'Developer Agent — code generation',
        'QA Agent — test creation and execution',
        'DevOps Agent — deployment automation',
        'Documentation Agent — auto-generated docs',
        'RCA Agent — incident response',
      ]
    },
    {
      title: 'Integrations',
      icon: FaPlug,
      features: [
        'GitHub / GitLab',
        'Jira / Linear',
        'Slack',
        'Jenkins / CI-CD pipelines',
        'Works with Cursor, Copilot, Claude Code, any AI tool',
      ]
    },
    {
      title: 'Enterprise & Security',
      icon: FaShieldAlt,
      features: [
        'SAML 2.0 SSO (Okta, Azure AD, Google)',
        'Self-hosted on-prem deployment',
        'Air-gapped deployment option',
        'AES-256 encryption at rest',
        'TLS 1.3 encryption in transit',
        'Complete audit logging',
      ]
    },
    {
      title: 'Analytics & Observability',
      icon: FaChartLine,
      features: [
        'Workflow performance analytics',
        'Team usage insights',
        'Context component adoption tracking',
        'PLG stack (Prometheus, Loki, Grafana)',
      ]
    },
  ];

  const tiers = [
    {
      name: 'Starter',
      subtitle: 'For growing teams',
      users: '15 users',
      teams: '3 teams',
      contexts: '100 context components',
      analytics: 'Standard analytics',
      support: 'Email support (24h response)',
      highlighted: false
    },
    {
      name: 'Professional',
      subtitle: 'For scaling organizations',
      users: '60 users',
      teams: '10 teams',
      contexts: '500 context components',
      analytics: 'Enhanced analytics',
      support: 'Priority support (8h response)',
      highlighted: true
    },
    {
      name: 'Enterprise',
      subtitle: 'For large organizations',
      users: 'Unlimited users',
      teams: 'Unlimited teams',
      contexts: 'Unlimited context components',
      analytics: 'Advanced analytics + custom reports',
      support: 'Dedicated success manager + 24/7 + Custom SLA',
      highlighted: false
    },
  ];

  const detailedFeatures = [
    { category: 'SCALE', features: [
      { name: 'Users', starter: '15', professional: '60', enterprise: 'Unlimited' },
      { name: 'Teams', starter: '3', professional: '10', enterprise: 'Unlimited' },
      { name: 'Context Components', starter: '100', professional: '500', enterprise: 'Unlimited' }
    ]},
    { category: 'CORE PLATFORM (ALL TIERS)', features: [
      { name: 'Context Engineering Studio', starter: true, professional: true, enterprise: true },
      { name: 'AI Service', starter: true, professional: true, enterprise: true },
      { name: 'Workflow Engine', starter: true, professional: true, enterprise: true },
      { name: 'ALL Workflows', starter: true, professional: true, enterprise: true },
      { name: 'ALL Agents', starter: true, professional: true, enterprise: true },
      { name: 'Full Integrations', starter: true, professional: true, enterprise: true },
      { name: 'PRD→TDD→Test', starter: true, professional: true, enterprise: true },
      { name: '85%+ coverage', starter: true, professional: true, enterprise: true }
    ]},
    { category: 'DEPLOYMENT (ALL TIERS)', features: [
      { name: 'On-prem deployment', starter: true, professional: true, enterprise: true },
      { name: 'Kubernetes', starter: true, professional: true, enterprise: true },
      { name: 'Docker Compose', starter: true, professional: true, enterprise: true },
      { name: 'Air-gapped', starter: false, professional: false, enterprise: true }
    ]},
    { category: 'SECURITY', features: [
      { name: 'SAML SSO', starter: true, professional: true, enterprise: true },
      { name: 'RBAC', starter: true, professional: true, enterprise: true },
      { name: 'Audit logging', starter: 'Basic', professional: 'Full', enterprise: 'Full' },
      { name: 'Custom retention policies', starter: false, professional: false, enterprise: true }
    ]},
    { category: 'ANALYTICS', features: [
      { name: 'Workflow analytics', starter: 'Standard', professional: 'Enhanced', enterprise: 'Advanced' },
      { name: 'Team insights', starter: 'Standard', professional: 'Enhanced', enterprise: 'Advanced' },
      { name: 'Custom reports', starter: false, professional: false, enterprise: true }
    ]},
    { category: 'SUPPORT', features: [
      { name: 'Support type', starter: 'Email', professional: 'Priority', enterprise: 'Dedicated' },
      { name: 'Response time', starter: '24h', professional: '8h', enterprise: 'Custom SLA' },
      { name: 'Success manager', starter: false, professional: false, enterprise: true },
      { name: '24/7 support', starter: false, professional: false, enterprise: true },
      { name: 'SLA guarantee', starter: false, professional: false, enterprise: '99.9% uptime' }
    ]},
    { category: 'REQUIREMENTS (ALL TIERS)', features: [
      { name: 'Claude BYOL', starter: true, professional: true, enterprise: true },
      { name: 'PostgreSQL', starter: true, professional: true, enterprise: true },
      { name: 'Redis', starter: true, professional: true, enterprise: true },
      { name: 'PLG stack', starter: true, professional: true, enterprise: true }
    ]}
  ];

  const faqs = [
    {
      question: 'How can I get started?',
      answer: "Book a demo to see CoWeave AI Platform in action. We'll walk you through the product and help you find the right plan for your team. We also offer proof-of-concept deployments for qualified teams."
    },
    {
      question: 'Do I need a Claude license?',
      answer: "Yes. CoWeave AI Platform requires Bring Your Own License (BYOL). We recommend Claude Max or Enterprise Claude. Currently supports Claude only (other LLMs coming soon)."
    },
    {
      question: 'Do all tiers have the same features?',
      answer: "Yes! All tiers include identical core features: Context Engineering Studio, AI Service, Workflow Execution Engine, and ALL workflows & agents. Tiers differ only in: Scale (users, teams, context components), Analytics level (Standard, Enhanced, Advanced), and Support level (Email, Priority, Dedicated)."
    },
    {
      question: 'Is my data secure?',
      answer: "Yes. CoWeave Platform deploys on your infrastructure (on-prem or VPC). Your code never leaves your network. Only outbound port 443 to Claude API. AES-256 encryption at rest, TLS 1.3 in transit. Air-gapped option available for Enterprise."
    },
    {
      question: 'What kind of support do you offer?',
      answer: "Starter: Email support with 24h response. Professional: Priority support with 8h response. Enterprise: Dedicated success manager, 24/7 support, and Custom SLA with 99.9% uptime guarantee."
    },
    {
      question: 'What deployment options are available?',
      answer: "All tiers support on-prem deployment via Kubernetes or Docker Compose. Enterprise tier additionally supports air-gapped deployment for fully isolated environments."
    },
  ];

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
        title="Features & Plans - CoWeave AI Platform"
        description="Explore the complete feature set of CoWeave AI Platform. Context engineering, agentic workflows, SDLC automation, and enterprise security — all in one platform."
        keywords="CoWeave features, SDLC automation features, context engineering, agentic workflows, enterprise development platform, AI development tools"
        url="/features"
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
              <span className="animated-gradient-text">Platform Features & Plans</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for production-grade software delivery — from context engineering to full SDLC orchestration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <AnimatedSection animation="fade" className="py-20 bg-primary-navy">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">Complete Feature Set</span>
            </h2>
            <p className="text-gray-400 text-lg">Every capability included in CoWeave AI Platform</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featureCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-vividAzure/20 rounded-lg">
                      <category.icon className="w-5 h-5 text-primary-vividAzure" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <FaCheck className="w-3 h-3 text-primary-vividAzure mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Tier Cards */}
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
              <span className="animated-gradient-text">Plans</span>
            </h2>
            <p className="text-gray-400 text-lg mb-2">All tiers include the same core features — choose based on scale and support</p>
            <p className="text-primary-lightAzure text-sm font-medium">Book a demo for pricing details</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-primary-blue/30 backdrop-blur-lg border rounded-2xl p-6 transition-all duration-300 flex flex-col ${
                  tier.highlighted
                    ? 'border-primary-vividAzure shadow-[0_0_30px_rgba(63,214,248,0.3)]'
                    : 'border-primary-vividAzure/20 hover:border-primary-vividAzure/50'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-vividAzure text-primary-navy px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-sm text-primary-lightAzure mb-4">{tier.subtitle}</p>

                <div className="text-sm text-gray-400 mb-4 pb-4 border-b border-primary-vividAzure/20">
                  <p className="font-medium text-gray-300 mb-2">SCALE</p>
                  <p>{tier.users}</p>
                  <p>{tier.teams}</p>
                  <p>{tier.contexts}</p>
                </div>

                <div className="text-sm text-gray-400 mb-4 pb-4 border-b border-primary-vividAzure/20">
                  <p className="font-medium text-gray-300 mb-2">ANALYTICS</p>
                  <p>{tier.analytics}</p>
                </div>

                <div className="text-sm text-gray-400 mb-4 flex-grow">
                  <p className="font-medium text-gray-300 mb-2">SUPPORT</p>
                  <p>{tier.support}</p>
                </div>

                <GlowButton
                  href={tier.name === 'Enterprise' ? undefined : urls.bookDemo}
                  to={tier.name === 'Enterprise' ? '/contact' : undefined}
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="w-full mt-auto"
                  size="small"
                >
                  {tier.name === 'Enterprise' ? 'Contact Us' : 'Book a Demo'}
                </GlowButton>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Detailed Feature Comparison Table */}
      <AnimatedSection animation="fade" className="py-20 bg-primary-navy">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">Detailed Feature Comparison</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                  {detailedFeatures.map((category, catIndex) => (
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
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
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

      {/* Bottom CTA */}
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
              <span className="text-white">Ready to </span>
              <span className="animated-gradient-text">get started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a demo to see CoWeave AI Platform in action and find the right plan for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                href={urls.bookDemo}
                variant="primary"
                size="large"
              >
                Book a Demo
              </GlowButton>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default FeaturesPage;
