import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import urls from '../config/urls';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About CoWeave - Production Code Done Right"
        description="CoWeave is building the future of software development. Learn about our mission to eliminate the variance cost and help teams ship production-grade code consistently."
        url="/about"
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
              <span className="animated-gradient-text">About CoWeave</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to transform how teams build software—eliminating variance and ensuring production-grade quality, every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="animated-gradient-text">Our Mission</span>
              </h2>
              <p className="text-xl text-gray-300">
                To codify the software development lifecycle with prompts and agentic workflows, enabling every developer to ship production-grade code with the same quality, consistency, and speed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Problem We're Solving</h3>
              <p className="text-gray-400 mb-4">
                When developers use AI coding tools independently, organizations face a hidden cost: the variance cost. Different coding styles, different quality levels, different test coverage—it all adds up.
              </p>
              <p className="text-gray-400">
                CoWeave eliminates this variance by providing a platform that enforces consistent SDLC practices across your entire team. Same process, same quality, every developer, every time.
              </p>
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Join Us on </span>
              <span className="animated-gradient-text">This Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're looking to use our products or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                href={urls.signup}
                variant="primary"
                size="large"
              >
                Try PO Studio
              </GlowButton>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                View Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
