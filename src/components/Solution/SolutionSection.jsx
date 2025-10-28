import React from 'react'
import { motion } from 'framer-motion'
import FeatureCard from './FeatureCard'
import AnimatedSection from '../common/AnimatedSection'

const SolutionSection = () => {
  const features = [
    {
      number: '①',
      title: 'Codify Your Practices',
      description: 'Turn tribal knowledge into automated intelligence. Your team\'s expertise, encoded and always available.',
      delay: 0
    },
    {
      number: '②',
      title: 'Human-in-the-Loop',
      description: 'AI does the heavy lifting, humans supervise. The perfect balance of automation and oversight.',
      delay: 0.15
    },
    {
      number: '③',
      title: 'Seamless Integration',
      description: 'Adapts to your workflow, no overhaul needed. Works with your existing tools and processes.',
      delay: 0.3
    }
  ]

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue"
      id="solution"
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
              Orchestrate Agentic Workflows{' '}
            </span>
            <span className="animated-gradient-text">
              from PRD to Prod
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            AI-Assisted SDLC That Knows Your Team
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-xs md:text-sm text-gray-400 italic">
            *PRD = Product Requirements Document | Prod = Production Deployment
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default SolutionSection
