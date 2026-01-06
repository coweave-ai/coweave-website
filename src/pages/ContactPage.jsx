import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import urls from '../config/urls';
import {
  FaEnvelope,
  FaCalendarAlt,
  FaComments,
  FaCheck,
  FaBuilding,
  FaUsers,
  FaPlug,
  FaShieldAlt
} from 'react-icons/fa';

const ContactPage = () => {
  const contactOptions = [
    {
      icon: FaEnvelope,
      title: 'Email Sales',
      description: 'Get in touch with our sales team directly',
      action: 'sales@coweave.ai',
      href: 'mailto:sales@coweave.ai',
      actionType: 'email'
    },
    {
      icon: FaCalendarAlt,
      title: 'Schedule a Demo',
      description: 'See CoWeave AI Platform in action',
      action: 'Book a call',
      href: 'https://cal.com/hersh-bhargava-1wdmf9/30min',
      actionType: 'external'
    },
    {
      icon: FaComments,
      title: 'General Inquiries',
      description: 'Questions about CoWeave or CE Studio',
      action: 'hello@coweave.ai',
      href: 'mailto:hello@coweave.ai',
      actionType: 'email'
    }
  ];

  const enterpriseTopics = [
    {
      icon: FaBuilding,
      title: 'Self-Hosted Deployment',
      description: 'Deploy on your infrastructure with Docker or Kubernetes'
    },
    {
      icon: FaPlug,
      title: 'n8n Integration',
      description: 'Native SSO and workflow prompt synchronization'
    },
    {
      icon: FaUsers,
      title: 'Unlimited Scale',
      description: 'No user or team limits. Scale to your entire organization'
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Compliance',
      description: 'SOC 2, SAML SSO, audit logging, custom retention'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Reach Out',
      description: 'Email us or schedule a call. Tell us about your team and requirements.'
    },
    {
      step: '2',
      title: 'Discovery Call',
      description: 'A brief conversation to understand your needs and answer your questions.'
    },
    {
      step: '3',
      title: 'Custom Demo',
      description: 'See CoWeave AI Platform in action with features relevant to your use case.'
    },
    {
      step: '4',
      title: 'Proposal',
      description: 'Receive a tailored pricing proposal based on your requirements.'
    }
  ];

  return (
    <>
      <SEO
        title="Contact Sales - CoWeave AI Platform | CoWeave"
        description="Get in touch with our team to discuss enterprise features, custom deployments, n8n integration, and pricing."
        url="/contact"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Let's Talk</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Interested in CoWeave AI Platform? We'd love to hear from you.
            </p>
            <p className="text-lg text-gray-400">
              Our team typically responds within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <AnimatedSection
        animation="fade"
        className="py-16 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.href}
                target={option.actionType === 'external' ? '_blank' : undefined}
                rel={option.actionType === 'external' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8 hover:border-primary-vividAzure/50 hover:shadow-[0_0_30px_rgba(63,214,248,0.15)] transition-all duration-300"
              >
                <div className="p-4 bg-primary-vividAzure/20 rounded-xl mb-4">
                  <option.icon className="w-8 h-8 text-primary-vividAzure" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                <span className="text-primary-lightAzure font-medium hover:text-white transition-colors">
                  {option.action}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Enterprise Topics */}
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
              <span className="text-white">What We Can </span>
              <span className="animated-gradient-text">Discuss</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common topics our sales team can help with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {enterpriseTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6"
              >
                <div className="flex-shrink-0 p-3 bg-primary-vividAzure/20 rounded-lg">
                  <topic.icon className="w-6 h-6 text-primary-vividAzure" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{topic.title}</h3>
                  <p className="text-gray-400">{topic.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
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
              <span className="animated-gradient-text">What to Expect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our simple process to get you started
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((item, index) => (
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

      {/* Alternative Options */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cloud Option */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Not Ready for Enterprise?</h3>
                <p className="text-gray-400 mb-6">
                  Start with CE Studio Cloud. Get up and running in minutes with our managed SaaS solution. Upgrade to Enterprise anytime.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Free tier available', 'No credit card required', 'Upgrade anytime'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <FaCheck className="w-4 h-4 text-primary-vividAzure mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <GlowButton
                  href={urls.signup}
                  variant="primary"
                  className="w-full"
                >
                  Start Free with Cloud
                </GlowButton>
              </motion.div>

              {/* Pricing Option */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Want to See Pricing First?</h3>
                <p className="text-gray-400 mb-6">
                  Check out our transparent pricing for Cloud plans. Enterprise pricing is custom based on your requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Transparent pricing', 'No hidden fees', 'Pay monthly or yearly'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <FaCheck className="w-4 h-4 text-primary-vividAzure mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <GlowButton
                  to="/pricing"
                  variant="secondary"
                  className="w-full"
                >
                  View Pricing Plans
                </GlowButton>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
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
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Ready to </span>
              <span className="animated-gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you choose Cloud or Enterprise, we're here to help you ship production-grade code consistently.
            </p>
            <GlowButton
              to="/"
              variant="primary"
              size="large"
            >
              Back to Home
            </GlowButton>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ContactPage;
