import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'
import GlowButton from '../common/GlowButton'

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground id="hero-particles" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/70 via-primary-navy/60 to-primary-indigo/70" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center max-w-6xl" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Logo */}
          <img
            src="/assets/coweave-logo-no-bg.png"
            alt="CoWeave Logo"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto drop-shadow-[0_0_30px_rgba(63,214,248,0.6)] animate-float"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight hero-gradient-text"
        >
          Codify your Software Development Lifecycle
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl text-primary-lightAzure mb-12 font-normal"
        >
          Humans + AI, CoWeave Together to Build Reliable Software
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <GlowButton onClick={scrollToWaitlist} variant="primary">
            Request Early Access
          </GlowButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-primary-vividAzure text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Add gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .hero-gradient-text {
          background: linear-gradient(90deg, #3fd6f8, #bdf3ff, #3fd6f8, #bdf3ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 4s ease infinite;
          filter: drop-shadow(0 0 10px rgba(63, 214, 248, 0.4));
        }
      `}</style>
    </section>
  )
}

export default Hero
