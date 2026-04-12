import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import GlowButton from '../common/GlowButton';
import urls from '../../config/urls';

const BookCallSection = () => {
  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue"
      id="book-call"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">See if CoWeave is a fit for </span>
            <span className="animated-gradient-text">your team</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            We're in stealth — working directly with a small number of
            engineering teams.
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-10">
            Book a 30-minute intro and we'll walk you through the platform
            and the results.
          </p>

          <div className="flex justify-center">
            <GlowButton
              href={urls.bookDemo}
              variant="primary"
              size="large"
            >
              Book a 30-min Call
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default BookCallSection;
