import React from 'react'
import { motion } from 'framer-motion'
import StatCard from './StatCard'
import AnimatedSection from '../common/AnimatedSection'
import { FaBolt, FaRocket, FaCheckCircle, FaArrowDown } from 'react-icons/fa'

const ImpactSection = () => {
  const stats = [
    {
      value: 50,
      suffix: '%',
      label: 'Reduction in MTTR',
      icon: FaBolt,
      delay: 0
    },
    {
      value: 55,
      suffix: '%',
      label: 'Less Time on Routine Tasks',
      icon: FaRocket,
      delay: 0.15
    },
    {
      value: 99.9,
      suffix: '%+',
      label: 'Availability',
      icon: FaCheckCircle,
      delay: 0.3
    },
    {
      value: 70,
      suffix: '%',
      label: 'Fewer Customer Incidents',
      icon: FaArrowDown,
      delay: 0.45
    }
  ]

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-navy via-primary-blue to-primary-darkAzure"
      id="impact"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white drop-shadow-[0_0_10px_rgba(189,243,255,0.3)]">
              Real Results from{' '}
            </span>
            <span className="animated-gradient-text">
              Our Team
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            These aren't projections. They're our actual numbers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ImpactSection
