import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import { FaCheckSquare, FaSquare } from 'react-icons/fa'

const RightForYouSection = () => {
  const [checkedItems, setCheckedItems] = useState([])

  const checklistItems = [
    'Your team has specific standards, patterns, or processes that must be followed consistently',
    'You need orchestration across multiple SDLC phases, not just code generation',
    'Your institutional knowledge is trapped in engineers\' heads, creating bottlenecks',
    'You require on-premise deployment or strict data control for compliance',
    'You want AI that learns YOUR team\'s way of working, not generic best practices',
    'You need human approval points throughout the process—not fully autonomous agents',
    'You have coordination bottlenecks between PM, Architect, Dev, QA, and DevOps roles',
    'Your engineers spend significant time gathering context for AI tools instead of building'
  ]

  const toggleItem = (index) => {
    setCheckedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const checkedCount = checkedItems.length

  const getResultMessage = () => {
    if (checkedCount >= 5) {
      return {
        text: 'CoWeave is essential for your team\'s success',
        color: 'text-green-400',
        bgColor: 'bg-green-500/20',
        borderColor: 'border-green-500/50'
      }
    } else if (checkedCount >= 3) {
      return {
        text: 'CoWeave addresses your core challenges',
        color: 'text-primary-vividAzure',
        bgColor: 'bg-primary-vividAzure/20',
        borderColor: 'border-primary-vividAzure/50'
      }
    }
    return null
  }

  const result = getResultMessage()

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-blue via-primary-indigo to-primary-navy"
      id="right-for-you"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
            Is CoWeave Right for Your Team?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the challenges that apply to your team:
          </p>
        </motion.div>

        {/* Interactive Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-8">
            <ul className="space-y-4">
              {checklistItems.map((item, index) => {
                const isChecked = checkedItems.includes(index)
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    onClick={() => toggleItem(index)}
                    className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      isChecked
                        ? 'bg-primary-vividAzure/20 border border-primary-vividAzure/40'
                        : 'hover:bg-primary-blue/40 border border-transparent'
                    }`}
                  >
                    {isChecked ? (
                      <FaCheckSquare className="text-primary-vividAzure text-xl mt-0.5 flex-shrink-0" />
                    ) : (
                      <FaSquare className="text-gray-500 text-xl mt-0.5 flex-shrink-0" />
                    )}
                    <span className={`text-lg transition-colors ${isChecked ? 'text-white' : 'text-gray-300'}`}>
                      {item}
                    </span>
                  </motion.li>
                )
              })}
            </ul>

            {/* Counter */}
            <div className="mt-6 pt-6 border-t border-primary-vividAzure/20 text-center">
              <span className="text-gray-400">
                Selected: <span className="text-white font-bold text-xl">{checkedCount}</span> / {checklistItems.length}
              </span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Dynamic Result Message */}
        <div className="h-32 flex items-center justify-center mt-8">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key={checkedCount >= 5 ? 'essential' : 'addresses'}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`px-8 py-4 rounded-xl border ${result.bgColor} ${result.borderColor}`}
              >
                <p className={`text-xl font-semibold ${result.color}`}>
                  {checkedCount >= 5 ? '🎯 ' : '✓ '}{result.text}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <p className="text-gray-400 text-lg">
                  Check the items that apply to see if CoWeave is right for you
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-4 space-y-2"
        >
          <p className="text-sm text-gray-500">
            <span className="text-primary-vividAzure">3+ items</span> = CoWeave addresses your challenges
            {' • '}
            <span className="text-green-400">5+ items</span> = CoWeave is essential
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default RightForYouSection
