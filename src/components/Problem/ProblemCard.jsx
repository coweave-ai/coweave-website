import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../common/GlassCard'

const ProblemCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard hoverable className="h-full flex flex-col border-red-400/30 hover:border-red-400/60 hover:shadow-[0_0_30px_rgba(248,113,113,0.3)]">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/40 to-red-400/40 flex items-center justify-center border-2 border-red-400 shadow-[0_0_20px_rgba(248,113,113,0.5)]">
            <Icon className="text-4xl text-red-300 drop-shadow-[0_0_10px_rgba(252,165,165,0.8)]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold mb-4 text-center text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-center leading-relaxed flex-grow">
          {description}
        </p>
      </GlassCard>
    </motion.div>
  )
}

export default ProblemCard
