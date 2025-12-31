import React from 'react'
import { motion } from 'framer-motion'
import ProblemCard from './ProblemCard'
import AnimatedSection from '../common/AnimatedSection'
import { FaDollarSign, FaCoins, FaClock, FaBrain } from 'react-icons/fa'

const ProblemSection = () => {
  const problems = [
    {
      icon: FaDollarSign,
      title: 'Variance Tax',
      description: (
        <>
          Every developer prompts AI differently. Each creates their own design patterns, follows different approaches, produces different quality levels.
          <span className="block mt-3 text-red-300 font-semibold">Result: 2-3x code review overhead, compounding technical debt</span>
        </>
      ),
      delay: 0
    },
    {
      icon: FaCoins,
      title: 'LLM Context Tax',
      description: (
        <>
          Teams adopt AI tools but still manually gather architecture details, codebase context, and process requirements for each prompt.
          <span className="block mt-3 text-red-300 font-semibold">Cost: Engineers become "context gatherers" instead of builders</span>
        </>
      ),
      delay: 0.1
    },
    {
      icon: FaClock,
      title: 'Coordination Tax',
      description: (
        <>
          Endless meetings, approval bottlenecks, and cross-team dependencies slow every initiative. Alignment takes longer than execution.
          <span className="block mt-3 text-red-300 font-semibold">Cost: Weeks added to every major feature</span>
        </>
      ),
      delay: 0.2
    },
    {
      icon: FaBrain,
      title: 'Knowledge Silos',
      description: (
        <>
          Institutional knowledge trapped in engineers' heads creates single points of failure and steep onboarding curves.
          <span className="block mt-3 text-red-300 font-semibold">Cost: Team paralysis when key people are unavailable</span>
        </>
      ),
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
            <span className="text-white">The </span>
            <span className="text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.6)]">Hidden Cost</span>
            <span className="text-white"> of AI Coding Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI tools promise productivity, but they introduce new costs that compound over time.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ProblemSection
