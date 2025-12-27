import React from 'react'
import { motion } from 'framer-motion'
import ProblemCard from './ProblemCard'
import AnimatedSection from '../common/AnimatedSection'
import { FaFileAlt, FaVial, FaPuzzlePiece } from 'react-icons/fa'

const ProblemSection = () => {
  const problems = [
    {
      icon: FaFileAlt,
      title: 'PRD & TDD? What PRD & TDD?',
      description: 'How many team members actually start from Product Requirement Documents and write Technical Design Documents? Or does your team start coding first and figure it out later?',
      delay: 0
    },
    {
      icon: FaVial,
      title: 'TDD is a Myth',
      description: 'Have you ever seen Test-Driven Development actually followed? Tests written FIRST? Or do tests get rushed in after—missing edge cases that cause bugs later?',
      delay: 0.15
    },
    {
      icon: FaPuzzlePiece,
      title: 'Integration Hell',
      description: 'Does your team spend more time in integration testing than anticipated, leading to delays in delivery and lower reliability?',
      delay: 0.3
    }
  ]

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue"
      id="problem"
    >
      <div className="container mx-auto px-6">
        {/* Variance Cost Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-xl text-primary-vividAzure mb-4">The Hidden Cost of AI Coding Tools</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">The </span>
            <span className="animated-gradient-text">Variance Cost</span>
            <span className="text-white"> is Killing Your Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            When five developers use vibe-coding tools, you get five different design patterns, five different approaches, five different quality levels. <strong className="text-primary-lightAzure">That's the variance cost—and it compounds with every feature.</strong>
          </p>
        </motion.div>

        {/* Validation Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-gray-400 mb-16"
        >
          Let me ask you three questions. Be honest.
        </motion.p>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>

        {/* Found the Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-primary-lightAzure font-medium">
            If you answered yes to any of these...
          </p>
          <p className="text-3xl text-white font-bold mt-2">
            You've found the gap.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default ProblemSection
