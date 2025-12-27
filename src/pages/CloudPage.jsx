import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import urls from '../config/urls';
import {
  FaCloud,
  FaCheck,
  FaUsers,
  FaLock,
  FaHistory,
  FaPlug,
  FaRocket,
  FaCog,
  FaShieldAlt,
  FaChartLine
} from 'react-icons/fa';

const CloudPage = () => {
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
      description: 'Integrate with your CI/CD pipeline. Programmatic prompt assembly for automation.',
    },
    {
      icon: FaLock,
      title: 'SAML SSO',
      description: 'Enterprise-grade authentication. Single sign-on with your identity provider (Starter+).',
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

  const benefits = [
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
      description: 'Combine prompts for specific contexts. Use the API to integrate with your workflow.',
    },
    {
      step: '4',
      title: 'Iterate & Improve',
      description: 'Track usage, gather feedback, and continuously improve your prompts.',
    },
  ];

  return (
    <>
      <SEO
        title="PO Studio Cloud - Managed Prompt Optimization | CoWeave"
        description="Prompt management SaaS for engineering teams. Start free, no credit card required. Version control, team collaboration, and API access."
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
            <div className="inline-flex items-center gap-2 bg-primary-vividAzure/20 px-4 py-2 rounded-full mb-8">
              <FaCloud className="w-5 h-5 text-primary-vividAzure" />
              <span className="text-primary-lightAzure font-medium">Managed SaaS Solution</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">PO Studio Cloud</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Managed prompt optimization for engineering teams.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Get started in minutes—no infrastructure required. Version control for your AI prompts,
              team collaboration, and seamless API integration.
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
              No credit card required. Free tier available forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-vividAzure/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="w-5 h-5 text-primary-vividAzure" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-vividAzure rounded-xl flex items-center justify-center text-2xl font-bold text-primary-navy">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Preview Section */}
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
              <span className="animated-gradient-text">Simple, Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start free, upgrade when you're ready
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Free', price: '$0', period: '/forever', description: '3 users, 1 team, 10 prompts' },
              { name: 'Starter', price: '$29', period: '/month', description: '15 users, 3 teams, 100 prompts', highlighted: true },
              { name: 'Professional', price: '$99', period: '/month', description: '60 users, 10 teams, 500 prompts' },
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
                <p className="text-gray-400 text-sm">{plan.description}</p>
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
            <GlowButton to="/pricing" variant="secondary">
              See Full Pricing Details
            </GlowButton>
          </motion.div>
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
              <span className="text-white">Ready to </span>
              <span className="animated-gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join teams already using PO Studio Cloud to manage their prompts and ship production-grade code consistently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                href={urls.signup}
                variant="primary"
                size="large"
              >
                Start Free Today
              </GlowButton>
              <Link
                to="/enterprise"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                Need Enterprise? →
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default CloudPage;
