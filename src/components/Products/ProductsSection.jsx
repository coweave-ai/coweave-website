import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBuilding, FaCheck } from 'react-icons/fa'
import AnimatedSection from '../common/AnimatedSection'
import GlowButton from '../common/GlowButton'
import urls from '../../config/urls'

const ProductsSection = () => {
  const features = [
    'Context Engineering Studio — codify your team\'s knowledge',
    'AI Service + Workflow Execution Engine',
    'Agentic workflows with deterministic orchestration',
    'Pre-built agents: Architect, Developer, QA, DevOps, Docs, RCA',
    'Full GitHub/GitLab, Jira/Linear, Slack, CI/CD integration',
    'On-prem deployment with full data control',
    '3-5x development velocity with 85%+ test coverage',
    'Human-in-the-loop at every step'
  ]

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-primary-navy"
      id="products"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">One Platform, Everything You Need</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From context engineering to full SDLC orchestration — CoWeave AI Platform is the complete suite for production-grade software delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-8 transition-all duration-300 hover:border-primary-vividAzure/60">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-vividAzure/20 rounded-lg">
                <FaBuilding className="w-8 h-8 text-primary-vividAzure" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">CoWeave AI Platform</h3>
                <p className="text-primary-lightAzure">Human-Supervised SDLC Automation</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              Human-supervised automation from PRD to production. Pre-built workflows for architecture, development, testing, deployment, and incident response — powered by context engineering that codifies your team's knowledge.
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <GlowButton
                href={urls.bookDemo}
                variant="primary"
                className="flex-1"
              >
                Book a Demo
              </GlowButton>
              <GlowButton
                to="/features"
                variant="secondary"
                className="flex-1"
              >
                See All Features
              </GlowButton>
            </div>
          </div>
        </motion.div>

        {/* See Features Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/platform"
            className="text-lg text-primary-lightAzure hover:text-white transition-colors font-medium"
          >
            Learn More About the Platform →
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default ProductsSection
