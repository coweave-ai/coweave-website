import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ number, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="h-full p-8 rounded-2xl border-2 border-primary-vividAzure/30 bg-gradient-to-br from-primary-blue/20 to-primary-indigo/20 backdrop-blur-lg transition-all duration-300 hover:border-primary-vividAzure/60 hover:shadow-[0_0_40px_rgba(63,214,248,0.4)] hover:scale-105">
        {/* Number Badge */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-mediumAzure to-primary-vividAzure flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_20px_rgba(63,214,248,0.5)]">
            {number}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-lg">
          {description}
        </p>

        {/* Decorative gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-darkAzure via-primary-mediumAzure to-primary-vividAzure opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
      </div>
    </motion.div>
  )
}

export default FeatureCard
