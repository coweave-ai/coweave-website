import React from 'react'
import { motion } from 'framer-motion'
import FeatureCard from './FeatureCard'
import AnimatedSection from '../common/AnimatedSection'

const SolutionSection = () => {
  const gapQuestions = [
    "What tool ensures your SDLC processes are being followed?",
    "What tool enforces Test-Driven Development?",
    "What tool generates comprehensive tests alongside your code?",
    "What tool eliminates the variance cost?"
  ]

  const features = [
    {
      number: '①',
      title: 'PRD & TDD First, Always',
      description: 'Codify requirements and design before a single line of code. Documents stay in sync with implementation.',
      delay: 0
    },
    {
      number: '②',
      title: 'Tests Before Code',
      description: 'Enforce TDD with agentic workflows that write tests first. Achieve 85%+ coverage automatically.',
      delay: 0.15
    },
    {
      number: '③',
      title: 'Consistent Patterns',
      description: 'Same process, same quality, every developer, every time. Eliminate the variance cost completely.',
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
        {/* Gap Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            {gapQuestions.map((question, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-lg text-gray-300"
              >
                {question}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">That's the Gap.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Introducing CoWeave—a platform to <strong className="text-primary-lightAzure">codify your software development lifecycle</strong> with prompts and agentic workflows.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default SolutionSection
