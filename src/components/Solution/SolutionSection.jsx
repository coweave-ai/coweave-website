import React from 'react'
import { motion } from 'framer-motion'
import FeatureCard from './FeatureCard'
import AnimatedSection from '../common/AnimatedSection'

const SolutionSection = () => {
  const features = [
    {
      number: '①',
      title: 'Context-Aware AI That Knows Your Stack',
      description: 'AI agents adapt to YOUR domain knowledge and engineering processes. No more context gathering—your team\'s expertise is codified and always available.',
      delay: 0
    },
    {
      number: '②',
      title: 'End-to-End SDLC Orchestration',
      description: 'Orchestrate architecture, development, testing, deployment, and incident response—with human supervision at every step.',
      delay: 0.1
    },
    {
      number: '③',
      title: 'Consistent Patterns',
      description: 'Same process, same quality, every developer, every time. Eliminate the variance tax.',
      delay: 0.2
    },
    {
      number: '④',
      title: 'PRD & TDD First, Always',
      description: 'Codify requirements and design before code. Enforce Test-Driven Development with workflows that write tests first.',
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
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="animated-gradient-text">Human-Supervised Full-Cycle SDLC Automation Platform</span>
          </h2>
          <p className="text-xl text-primary-lightAzure font-medium mb-6">
            Featuring Agentic Workflows and Deterministic Orchestration
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            CoWeave goes beyond code generation to orchestrate your entire development pipeline—from PRD to production. Standardized prompts reduce AI output variance, while agentic workflows with deterministic guardrails ensure consistent, production-grade output at every phase.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default SolutionSection
