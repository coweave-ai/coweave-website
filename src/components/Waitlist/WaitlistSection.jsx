import React from 'react'
import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'
import AnimatedSection from '../common/AnimatedSection'
import ParticleBackground from '../Hero/ParticleBackground'

const WaitlistSection = () => {
  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-40 bg-gradient-to-br from-primary-indigo via-primary-blue to-primary-darkAzure relative overflow-hidden"
      id="waitlist"
    >
      {/* Particle Background */}
      <ParticleBackground id="waitlist-particles" />

      {/* Dark overlay to ensure particles stay behind */}
      <div className="absolute inset-0" style={{ zIndex: 2 }} />

      <div className="container mx-auto px-6 relative" style={{ zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">
              Be Among the First
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Join the waitlist. Something big is coming.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-lg bg-primary-blue/30 border border-primary-vividAzure/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(63,214,248,0.2)]">
            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default WaitlistSection
