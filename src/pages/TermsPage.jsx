import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import AnimatedSection from '../components/common/AnimatedSection';

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms of Service | CoWeave"
        description="Read the terms and conditions that govern your use of CoWeave services."
        url="/terms"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Terms of Service</span>
            </h1>
            <p className="text-gray-400">
              Last updated: December 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <AnimatedSection
        animation="fade"
        className="py-16 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-400">
                  By accessing or using CoWeave services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
                <p className="text-gray-400 mb-4">
                  You may use our services only in compliance with these terms and all applicable laws. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
                <p className="text-gray-400">
                  You agree not to misuse our services or help anyone else do so.
                </p>
              </div>

              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                <p className="text-gray-400">
                  The services and all content, features, and functionality are owned by CoWeave and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Your Content</h2>
                <p className="text-gray-400">
                  You retain ownership of any content you submit to our services. By submitting content, you grant us a license to use, store, and process that content to provide our services.
                </p>
              </div>

              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-400">
                  To the maximum extent permitted by law, CoWeave shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <p className="text-gray-400">
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                    legal@coweave.ai
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default TermsPage;
