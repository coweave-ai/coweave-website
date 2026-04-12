import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'
import GlowButton from '../common/GlowButton'
import urls from '../../config/urls'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground id="hero-particles" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/70 via-primary-navy/60 to-primary-indigo/70" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center max-w-7xl pt-20" style={{ zIndex: 10 }}>
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
            className="w-40 h-40 md:w-56 md:h-56 mx-auto drop-shadow-[0_0_30px_rgba(63,214,248,0.6)] animate-float"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
        >
          <span className="hero-gradient-text">Build Enterprise-Grade</span>
          <br />
          <span className="hero-gradient-text">Software, 4× Faster</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl text-primary-lightAzure mb-6 font-medium"
        >
          Humans + AI, CoWeave Together
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          Same quality, every developer, every time. Standardized prompts and agentic workflows that eliminate variance across your entire SDLC.
        </motion.p>

        {/* Concrete proof strip */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-base md:text-lg text-primary-lightAzure/90 mb-12 max-w-3xl mx-auto font-medium"
        >
          4× faster development · 75% MTTR reduction · 85%+ test coverage — in production today.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <GlowButton
            href={urls.bookDemo}
            variant="primary"
            size="large"
          >
            Book a 30-min Call
          </GlowButton>
        </motion.div>

        {/* Watch Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-20"
        >
          <a
            href="https://www.youtube.com/watch?v=J9Xj7SzMyR8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-primary-lightAzure hover:text-white transition-colors group"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-vividAzure/40 group-hover:border-primary-vividAzure/80 group-hover:bg-primary-vividAzure/10 transition-all">
              ▶
            </span>
            <span className="text-lg font-medium">Watch Video</span>
          </a>
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
