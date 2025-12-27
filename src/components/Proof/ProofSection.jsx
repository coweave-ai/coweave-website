import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaRocket, FaClock, FaVial, FaBug } from 'react-icons/fa'

const ProofSection = () => {
  const buildStats = [
    { label: 'API Endpoints', value: '110+' },
    { label: 'Database Tables', value: '11' },
    { label: 'Lines of Code', value: '11,000+' },
  ]

  const speedStats = [
    {
      icon: FaRocket,
      value: '4x',
      label: 'Faster Development',
      detail: '10 weeks vs 40 weeks traditional',
    },
    {
      icon: FaClock,
      value: '3 days',
      label: 'Integration Time',
      detail: 'Not 3 weeks, not 3 months',
    },
  ]

  const qualityStats = [
    {
      icon: FaVial,
      value: '1,085',
      label: 'Automated Tests',
    },
    {
      icon: FaBug,
      value: '85%',
      label: 'Code Coverage',
    },
  ]

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-navy via-primary-blue to-primary-darkAzure"
      id="proof"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">Real </span>
            <span className="animated-gradient-text">Results</span>
            <span className="text-white">, Not Promises</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We built PO Studio—a complete enterprise application—using CoWeave.
            Here's what happened.
          </p>
        </motion.div>

        {/* The Build */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-8 mb-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">The Build</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            {buildStats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-primary-vividAzure">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Speed Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {speedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-8 text-center"
            >
              <stat.icon className="w-10 h-10 text-primary-vividAzure mx-auto mb-4" />
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-xl text-primary-lightAzure mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Quality Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          {qualityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary-vividAzure mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* The Secret */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl text-primary-lightAzure mb-4">The Secret?</p>
          <p className="text-xl text-gray-300">
            We followed the SDLC process. <strong className="text-white">Every. Single. Step.</strong>
          </p>
          <p className="text-lg text-gray-400 mt-4">
            That's not luck. That's what happens when SDLC isn't a framework on a whiteboard—it's woven into every step of development.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default ProofSection
