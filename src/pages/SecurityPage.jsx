import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import { FaShieldAlt, FaLock, FaUserShield, FaClipboardCheck, FaKey, FaServer } from 'react-icons/fa';

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: FaLock,
      title: 'Encryption at Rest',
      description: 'All data is encrypted using AES-256 encryption when stored in our databases.',
    },
    {
      icon: FaShieldAlt,
      title: 'Encryption in Transit',
      description: 'All network communications use TLS 1.3 for secure data transmission.',
    },
    {
      icon: FaUserShield,
      title: 'SAML SSO',
      description: 'Integrate with your identity provider (Okta, Azure AD, Google Workspace) for single sign-on.',
    },
    {
      icon: FaClipboardCheck,
      title: 'Audit Trails',
      description: 'Complete audit trail of all user actions and API calls for compliance requirements.',
    },
    {
      icon: FaKey,
      title: 'API Key Management',
      description: 'Secure API keys with granular permissions, expiration dates, and team scoping.',
    },
    {
      icon: FaServer,
      title: 'Self-Hosted Option',
      description: 'Enterprise customers can self-host for complete control over their data and infrastructure.',
    },
  ];

  return (
    <>
      <SEO
        title="Security | CoWeave"
        description="Learn about CoWeave's security practices, certifications, and how we protect your data."
        url="/security"
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
            <div className="inline-flex items-center gap-2 bg-primary-vividAzure/20 px-4 py-2 rounded-full mb-8">
              <FaShieldAlt className="w-5 h-5 text-primary-vividAzure" />
              <span className="text-primary-lightAzure font-medium">Enterprise-Grade Security</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Security at CoWeave</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your data security is our top priority. We implement industry-leading practices to protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
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
              <span className="animated-gradient-text">Security Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade security built into every layer of our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => (
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

      {/* Report Vulnerability */}
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
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              <span className="text-white">Report a </span>
              <span className="animated-gradient-text">Vulnerability</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Found a security issue? We appreciate responsible disclosure. Please report vulnerabilities to our security team.
            </p>
            <a
              href="mailto:security@coweave.ai"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
            >
              security@coweave.ai
            </a>
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
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              <span className="text-white">Need More </span>
              <span className="animated-gradient-text">Security Details?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team for security questionnaires, penetration test reports, or compliance documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                to="/contact"
                variant="primary"
                size="large"
              >
                Contact Sales
              </GlowButton>
              <Link
                to="/platform"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                Platform Features
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default SecurityPage;
