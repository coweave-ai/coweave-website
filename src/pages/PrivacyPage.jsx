import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import AnimatedSection from '../components/common/AnimatedSection';

const PrivacyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | CoWeave"
        description="Learn how CoWeave collects, uses, and protects your personal information."
        url="/privacy"
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
              <span className="animated-gradient-text">Privacy Policy</span>
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
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-400 mb-4">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                </p>
                <p className="text-gray-400">
                  This may include your name, email address, company name, and any other information you choose to provide.
                </p>
              </div>

              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-400 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                </p>
                <p className="text-gray-400">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                <p className="text-gray-400 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-gray-400">
                  All data is encrypted at rest (AES-256) and in transit (TLS 1.3).
                </p>
              </div>

              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                <p className="text-gray-400">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                    privacy@coweave.ai
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

export default PrivacyPage;
