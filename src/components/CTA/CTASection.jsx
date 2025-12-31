import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import ParticleBackground from '../Hero/ParticleBackground'
import GlowButton from '../common/GlowButton'
import urls from '../../config/urls'

const CTASection = () => {
  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-40 bg-gradient-to-br from-primary-indigo via-primary-blue to-primary-darkAzure relative overflow-hidden"
      id="cta"
    >
      <ParticleBackground id="cta-particles" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-indigo/50 via-primary-blue/50 to-primary-darkAzure/50" style={{ zIndex: 2 }} />

      <div className="container mx-auto px-6 relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">Transform Your SDLC</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop paying the variance tax and LLM context tax. Start shipping enterprise-ready, production-grade code consistently.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            CoWeave brings agentic workflows and standardized prompts to your SDLC—codifying the process your team has been struggling to follow manually.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton
              href={urls.signup}
              variant="primary"
              size="large"
            >
              Start Free — Cloud
            </GlowButton>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border-2 border-primary-vividAzure/40 hover:border-primary-vividAzure rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(63,214,248,0.3)]"
            >
              Talk to Sales — Enterprise
            </Link>
          </div>

          <p className="text-primary-lightAzure mt-12 text-lg font-medium">
            CoWeave. Production code. Done right.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default CTASection
