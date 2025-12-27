import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import urls from '../config/urls';
import { FaEnvelope } from 'react-icons/fa';

const CareersPage = () => {
  return (
    <>
      <SEO
        title="Careers at CoWeave - Join Our Team"
        description="Join CoWeave and help us transform software development. We're building the future of production-grade code."
        url="/careers"
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
              <span className="animated-gradient-text">Careers at CoWeave</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Help us build the future of software development. We're looking for passionate people who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="animated-gradient-text">Open Positions</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8 text-center"
            >
              <p className="text-xl text-gray-300 mb-6">
                We don't have any open positions right now, but we're always looking for talented people.
              </p>
              <p className="text-gray-400 mb-8">
                If you're passionate about software development, AI, and developer tools, we'd love to hear from you.
              </p>
              <a
                href="mailto:careers@coweave.ai"
                className="inline-flex items-center gap-2 text-primary-lightAzure hover:text-white transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
                careers@coweave.ai
              </a>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
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
              <span className="text-white">Not Looking for a Job?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Try our products and experience the future of production-grade code.
            </p>
            <GlowButton
              href={urls.signup}
              variant="primary"
              size="large"
            >
              Try PO Studio Free
            </GlowButton>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default CareersPage;
