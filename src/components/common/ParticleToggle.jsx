import React from 'react'
import { motion } from 'framer-motion'
import { useParticles } from '../../context/ParticleContext'

const ParticleToggle = () => {
  const { particlesEnabled, toggleParticles } = useParticles()

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      onClick={toggleParticles}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full backdrop-blur-lg bg-primary-blue/40 border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[0_0_30px_rgba(63,214,248,0.4)] flex items-center justify-center group z-50"
      title={particlesEnabled ? 'Disable Particles' : 'Enable Particles'}
      style={{ zIndex: 9999 }}
    >
      <motion.div
        animate={{
          opacity: particlesEnabled ? 1 : 0.4,
          scale: particlesEnabled ? 1 : 0.8
        }}
        transition={{ duration: 0.2 }}
        className="text-2xl"
      >
        ✨
      </motion.div>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 hidden group-hover:block">
        <div className="bg-primary-navy/90 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap border border-primary-vividAzure/30">
          {particlesEnabled ? 'Disable' : 'Enable'} Particles
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-primary-navy/90"></div>
        </div>
      </div>
    </motion.button>
  )
}

export default ParticleToggle
