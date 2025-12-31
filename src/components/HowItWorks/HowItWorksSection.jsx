import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import { FaCode, FaUserCheck, FaPlug } from 'react-icons/fa'

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FaCode,
      number: '1',
      title: 'Codify Your Practices',
      description: 'Turn tribal knowledge into automated intelligence. Your team\'s expertise, encoded and always available.',
      delay: 0
    },
    {
      icon: FaUserCheck,
      number: '2',
      title: 'Human-in-the-Loop',
      description: 'AI proposes, human approves. Every workflow requires engineer review—the perfect balance of automation and oversight.',
      delay: 0.1
    },
    {
      icon: FaPlug,
      number: '3',
      title: 'Seamless Integration',
      description: 'Adapts to your workflow, no overhaul needed. Works with your existing tools and processes.',
      delay: 0.2
    }
  ]

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-blue via-primary-indigo to-primary-navy"
      id="how-it-works"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
            Orchestrate Agentic Workflows from{' '}
            <span className="animated-gradient-text">PRD*</span>
            {' '}to{' '}
            <span className="animated-gradient-text">Prod</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              <GlassCard hoverable className="h-full flex flex-col text-center">
                {/* Step Number */}
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-vividAzure to-primary-lightAzure flex items-center justify-center text-primary-navy font-bold text-xl">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <step.icon className="text-4xl text-primary-lightAzure" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold mb-4 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
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
          <p className="text-sm text-gray-400">
            *PRD = Product Requirements Document &nbsp;•&nbsp; Prod = Production Deployment
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default HowItWorksSection
