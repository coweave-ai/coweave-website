import React from 'react'
import { motion } from 'framer-motion'
import ProblemCard from './ProblemCard'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import { FaDollarSign, FaCoins, FaClock, FaBrain, FaRobot, FaEyeSlash, FaHandPaper, FaExclamationTriangle } from 'react-icons/fa'

const ProblemSection = () => {
  const taxes = [
    {
      icon: FaDollarSign,
      title: 'Variance Tax',
      description: (
        <>
          Every developer prompts AI differently — different patterns, different quality.
          <span className="block mt-3 text-red-300 font-semibold">2-3x code review overhead</span>
        </>
      ),
      delay: 0
    },
    {
      icon: FaCoins,
      title: 'LLM Context Tax',
      description: (
        <>
          Engineers spend hours gathering context for every AI prompt instead of building.
          <span className="block mt-3 text-red-300 font-semibold">Context gatherers, not builders</span>
        </>
      ),
      delay: 0.1
    },
    {
      icon: FaClock,
      title: 'Coordination Tax',
      description: (
        <>
          Meetings, approvals, and cross-team dependencies. Alignment takes longer than execution.
          <span className="block mt-3 text-red-300 font-semibold">Weeks added to every feature</span>
        </>
      ),
      delay: 0.2
    },
    {
      icon: FaBrain,
      title: 'Knowledge Silos',
      description: (
        <>
          Critical knowledge trapped in engineers' heads. Single points of failure everywhere.
          <span className="block mt-3 text-red-300 font-semibold">Team paralysis when key people are out</span>
        </>
      ),
      delay: 0.3
    }
  ]

  const llmLimitations = [
    {
      icon: FaBrain,
      title: 'No Institutional Knowledge',
      description: 'LLMs don\'t know your codebase, APIs, or system architecture.',
      delay: 0
    },
    {
      icon: FaEyeSlash,
      title: 'Process Blindness',
      description: 'No awareness of your Git flow, testing standards, or deployment process.',
      delay: 0.1
    },
    {
      icon: FaRobot,
      title: 'No Context Memory',
      description: 'Every session starts from zero. Copy-paste context, every single time.',
      delay: 0.15
    },
    {
      icon: FaHandPaper,
      title: 'Constant Manual Work',
      description: 'Engineers become full-time "prompt engineers" just to get usable output.',
      delay: 0.2
    },
    {
      icon: FaExclamationTriangle,
      title: 'Unreliable Output',
      description: 'Technically sound but impractical. Plausible code that breaks in production.',
      delay: 0.25
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

        {/* Tax Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {taxes.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto my-20"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />
        </motion.div>

        {/* LLM Limitations Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-white">Why </span>
            <span className="text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.6)]">Generic LLMs</span>
            <span className="text-white"> Fall Short</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Copilot, Cursor, and ChatGPT are powerful — but without your team's context, they're guessing.
          </p>
        </motion.div>

        {/* LLM Limitation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {llmLimitations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: item.delay }}
            >
              <GlassCard hoverable className="h-full flex flex-col items-center text-center border-red-400/20 hover:border-red-400/50 hover:shadow-[0_0_20px_rgba(248,113,113,0.2)]">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4 border border-red-400/40">
                  <item.icon className="text-xl text-red-300" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ProblemSection
