import React from 'react'
import { Link } from 'react-router-dom'
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
      <div className="relative container mx-auto px-6 text-center max-w-6xl pt-20" style={{ zIndex: 10 }}>
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
          <span className="hero-gradient-text">Codify Your Software</span>
          <br />
          <span className="hero-gradient-text">Development Lifecycle</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl text-primary-lightAzure mb-6 font-medium"
        >
          Humans + AI, CoWeave Together to Build
          <br />
          Enterprise-Grade Software
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Reliable software, every developer, every time. CoWeave brings standardized prompts and agentic workflows to your SDLC—eliminating variance and shipping production-grade code consistently.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <GlowButton
            href={urls.signup}
            variant="primary"
            size="large"
          >
            Start Free
          </GlowButton>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
          >
            See Platform →
          </Link>
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
