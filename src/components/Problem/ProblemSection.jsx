import React from 'react'
import { motion } from 'framer-motion'
import ProblemCard from './ProblemCard'
import AnimatedSection from '../common/AnimatedSection'
import { FaHandshake, FaBrain, FaClipboardList } from 'react-icons/fa'

const ProblemSection = () => {
  const problems = [
    {
      icon: FaHandshake,
      title: 'Coordination Tax',
      description: 'Distributed teams, endless meetings, approval chains. Getting everyone aligned feels like herding cats.',
      delay: 0
    },
    {
      icon: FaBrain,
      title: 'Knowledge Silos',
      description: 'Critical context trapped in engineers\' heads and wikis. What happens when key people are out?',
      delay: 0.15
    },
    {
      icon: FaClipboardList,
      title: 'LLM Context Tax',
      description: 'Teams use AI but manually gather context for every prompt. You\'re still doing the heavy lifting.',
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">Engineering Teams Are </span>
            <span className="animated-gradient-text">
              Overburdened
            </span>
          </h2>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ProblemSection
