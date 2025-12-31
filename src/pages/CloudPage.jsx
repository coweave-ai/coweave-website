import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import GlassCard from '../components/common/GlassCard';
import urls from '../config/urls';
import {
  FaCloud,
  FaCheck,
  FaUsers,
  FaLock,
  FaHistory,
  FaPlug,
  FaCog,
  FaChartLine,
  FaRocket,
  FaTimes,
  FaBuilding,
  FaUserTie
} from 'react-icons/fa';

const CloudPage = () => {
  const cloudBenefits = [
    {
      title: 'Start in Minutes',
      description: 'No infrastructure to set up. Sign up and start organizing your prompts immediately.',
    },
    {
      title: 'Always Up to Date',
      description: 'Automatic updates and improvements. New features delivered continuously.',
    },
    {
      title: 'Zero Maintenance',
      description: 'We handle security, backups, and scaling. Focus on your code, not infrastructure.',
    },
  ];

  const features = [
    {
      icon: FaHistory,
      title: 'Prompt Version Control',
      description: 'Track every change to your prompts. Roll back when needed. Never lose important context.',
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Role-based access control. Share prompts across teams securely with granular permissions.',
    },
    {
      icon: FaPlug,
      title: 'API Access',
      description: 'Integrate with your CI/CD pipeline. Programmatic prompt assembly for automation. (Starter+)',
    },
    {
      icon: FaLock,
      title: 'SAML SSO',
      description: 'Enterprise-grade authentication. Single sign-on with your identity provider (Professional).',
    },
    {
      icon: FaCog,
      title: 'Workflow Templates',
      description: 'Pre-built prompt templates for common SDLC workflows. Customize for your team.',
    },
    {
      icon: FaChartLine,
      title: 'Usage Analytics',
      description: 'Track prompt usage, performance, and team adoption with built-in analytics.',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Create Your Team',
      description: 'Sign up and invite your team members. Set up roles and permissions.',
    },
    {
      step: '2',
      title: 'Organize Prompts',
      description: 'Create base prompts, role prompts, and repository prompts. Build your prompt library.',
    },
    {
      step: '3',
      title: 'Assemble & Deploy',
      description: 'Combine prompts for specific contexts. Use the API to integrate with your workflow or AI tool.',
    },
    {
      step: '4',
      title: 'Iterate & Improve',
      description: 'Track usage, gather feedback, and continuously improve your prompts.',
    },
  ];

  const bottomLineGroups = [
    {
      title: 'FOR INDIVIDUALS',
      icon: FaUserTie,
      benefits: [
        'Less Context Gathering – No more copy-pasting standards',
        'Experimentation – Personal prompts for testing ideas',
        'Learning – See team standards, understand patterns',
        'Productivity – Focus on problems, not prompt engineering'
      ]
    },
    {
      title: 'FOR TEAMS',
      icon: FaUsers,
      benefits: [
        'Consistency – All AI outputs follow team standards',
        'Faster Reviews – 2-3x reduction in review time',
        'Less Technical Debt – Patterns enforced automatically',
        'Knowledge Codification – Best practices captured, not lost',
        'Faster Onboarding – New devs get full context automatically'
      ]
    },
    {
      title: 'FOR ORGANIZATIONS',
      icon: FaBuilding,
      benefits: [
        'Standardization – Institutional knowledge preserved',
        'Compliance – Audit trail of all prompt changes',
        'Scalability – Onboard teams without knowledge loss',
        'Quality – Predictable AI behavior across organization'
      ]
    }
  ];

  const aiTools = ['Cursor', 'Copilot', 'Claude Code', 'Windsurf', 'Aider'];

  return (
    <>
      <SEO
        title="Prompt Optimization Studio - Eliminate AI Output Variance | CoWeave"
        description="Stop the inconsistency of 'vibe coding'. Transform generic AI assistants into context-aware team members by codifying your organizational knowledge into prompts."
        url="/cloud"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">Prompt Optimization Studio</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
              Eliminate AI Output Variance Across Your Team
            </p>

            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Stop the inconsistency of 'vibe coding'—where every developer gets different results from AI tools. Transform generic AI assistants into context-aware team members by codifying your organizational knowledge into prompts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <GlowButton
                href={urls.signup}
                variant="primary"
                size="large"
              >
                Start Free
              </GlowButton>
              <GlowButton
                to="/pricing"
                variant="secondary"
                size="large"
              >
                View Pricing
              </GlowButton>
            </div>

            <p className="text-gray-500 text-sm">
              Cloud-Based • No Setup Required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cloud Benefits Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* The Problem Section */}
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">The </span>
              <span className="animated-gradient-text">Variance Tax</span>
              <span className="text-white"> is Costing You Velocity</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When teams adopt AI coding assistants without guardrails, each developer prompts AI differently, creating the "Variance Tax":
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8">
              <div className="space-y-3 mb-6">
                <p className="text-gray-300"><span className="text-primary-lightAzure font-medium">Developer A</span> → Detailed prompts with coding standards</p>
                <p className="text-gray-300"><span className="text-primary-lightAzure font-medium">Developer B</span> → Quick, minimal prompts</p>
                <p className="text-gray-300"><span className="text-primary-lightAzure font-medium">Developer C</span> → Custom instructions tuned over months</p>
                <p className="text-gray-300"><span className="text-primary-lightAzure font-medium">Developer D</span> → Just started, uses defaults</p>
                <p className="text-gray-300"><span className="text-primary-lightAzure font-medium">Developer E</span> → Copies prompts from blog posts</p>
              </div>
              <div className="text-center text-2xl text-primary-vividAzure mb-6">↓</div>
              <h3 className="text-xl font-bold text-red-400 mb-4 text-center">RESULT:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-gray-300">
                  <FaTimes className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <span>Code that "works" but requires 2-3x more review time</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaTimes className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <span>Inconsistent patterns that confuse new team members</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaTimes className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <span>Technical debt that compounds with every merge</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaTimes className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <span>Engineers acting as "context gatherers" not problem solvers</span>
                </li>
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* The Solution Section */}
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Centralized Prompt Management Platform</span>
              <span className="text-white"> to Eliminate AI Output Variance and Codify Organizational Knowledge</span>
            </h2>
            <p className="text-xl text-gray-300">
              Stop the variance tax by codifying your team's best practices into reusable prompts that ensure consistent AI outputs across your entire engineering organization.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Everything You Need to </span>
              <span className="animated-gradient-text">Manage Prompts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for teams that take prompt engineering seriously
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6 hover:border-primary-vividAzure/50 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary-vividAzure mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get from zero to organized prompts in four simple steps
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-vividAzure to-primary-lightAzure rounded-xl flex items-center justify-center text-2xl font-bold text-primary-navy">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Real Example Section */}
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Real-World Impact</span>
            </h2>
            <p className="text-xl text-gray-300">E-Commerce Team Example</p>
            <p className="text-lg text-gray-400 mt-2">Scenario: New API Endpoint Implementation • Team: 15 developers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">WITHOUT PO STUDIO:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Each dev manually explains REST patterns, error handling, auth approach, testing standards</li>
                    <li>• Results vary: Some use Express patterns, others custom</li>
                    <li>• Code review: 4 hours avg (validating consistency + logic)</li>
                    <li>• Technical debt: Inconsistent error handling across services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">WITH PO STUDIO:</h3>
                  <p className="text-gray-300 mb-4">Team-wide prompts codify TypeScript standards, Express.js structure, security patterns, and testing requirements.</p>
                  <p className="text-gray-400 mb-2">Developer says: <span className="text-white">"Add refund endpoint"</span></p>
                  <p className="text-gray-400 mb-4">AI receives: <span className="text-primary-lightAzure">Team context automatically</span></p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-300">
                      <FaCheck className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Code follows exact team patterns</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <FaCheck className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Review time: 1 hour (just business logic)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <FaCheck className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>2-3x time savings on review</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <FaCheck className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Zero technical debt from inconsistency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* The Bottom Line Section */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">The Bottom Line</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bottomLineGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <group.icon className="w-6 h-6 text-primary-vividAzure" />
                    <h3 className="text-lg font-bold text-primary-lightAzure">{group.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Integration Section */}
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Works with Your </span>
              <span className="animated-gradient-text">Existing AI Tools</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PO Studio provides prompt management and assembly. You continue using the AI coding tools you already love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {aiTools.map((tool, index) => (
                <div key={index} className="px-6 py-3 bg-primary-blue/30 border border-primary-vividAzure/20 rounded-lg text-gray-300 font-medium">
                  {tool}
                </div>
              ))}
            </div>
            <div className="text-3xl text-primary-vividAzure mb-4">↓</div>
            <GlassCard className="p-6 inline-block">
              <div className="flex items-center gap-3">
                <FaPlug className="w-6 h-6 text-primary-vividAzure" />
                <span className="text-white font-bold">PO Studio API</span>
              </div>
              <p className="text-gray-400 mt-2">(Assembles your team's context)</p>
            </GlassCard>
            <p className="text-gray-400 mt-6">
              API Access included in Starter and Professional tiers
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Simple, Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start free, upgrade when you're ready
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'FREE', price: '$0', period: '/forever', users: '3 users', teams: '1 team', prompts: '10 prompts', cta: 'Start Free' },
              { name: 'STARTER', price: '$29', period: '/month', users: '15 users', teams: '3 teams', prompts: '100 prompts', cta: 'Start Trial', highlighted: true },
              { name: 'PROFESSIONAL', price: '$99', period: '/month', users: '60 users', teams: '10 teams', prompts: '500 prompts', cta: 'Start Trial' },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-primary-blue/30 backdrop-blur-lg border rounded-xl p-6 text-center ${
                  plan.highlighted
                    ? 'border-primary-vividAzure shadow-[0_0_30px_rgba(63,214,248,0.3)]'
                    : 'border-primary-vividAzure/20'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary-vividAzure">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>{plan.users}</li>
                  <li>{plan.teams}</li>
                  <li>{plan.prompts}</li>
                </ul>
                <GlowButton
                  href={urls.signup}
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.cta}
                </GlowButton>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link
              to="/pricing"
              className="text-primary-lightAzure hover:text-white transition-colors font-medium"
            >
              See Full Pricing Details →
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Upgrade Path Section */}
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Ready for Full SDLC Automation?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              PO Studio eliminates variance at the prompt level. CoWeave AI Platform eliminates variance at the process level.
            </p>

            <GlassCard className="p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Upgrade to CoWeave AI Platform to get:</h3>
              <ul className="text-left space-y-2 max-w-md mx-auto mb-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>Everything in PO Studio</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>AI Service + Workflow Execution Engine</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>Agentic Workflows with Deterministic Orchestration</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>ALL Workflows & Agents (Architect, Dev, QA, DevOps, Doc)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>PRD → TDD → Test → Code automation</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>3-5x development velocity</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>85%+ test coverage automatically</span>
                </li>
              </ul>
              <Link
                to="/platform"
                className="text-primary-lightAzure hover:text-white transition-colors font-medium"
              >
                Learn About CoWeave AI Platform →
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
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
              <span className="animated-gradient-text">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join teams already using PO Studio Cloud to manage their prompts and ship production-grade code consistently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <GlowButton
                href={urls.signup}
                variant="primary"
                size="large"
              >
                Start Free Today
              </GlowButton>
              <Link
                to="/platform"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                Need Platform? →
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              No credit card required • 3 users included
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default CloudPage;
