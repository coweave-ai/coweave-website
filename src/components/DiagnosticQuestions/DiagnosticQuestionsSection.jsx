import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import { FaClipboardList, FaVial, FaCogs } from 'react-icons/fa'

const DiagnosticQuestionsSection = () => {
  const questions = [
    {
      icon: FaClipboardList,
      title: 'PRD & TDD: Theory vs Reality',
      question: 'Does your team start from Product Requirement Documents and write Technical Design Documents before coding?',
      alternative: 'Or do developers start coding first and figure it out later?',
      delay: 0
    },
    {
      icon: FaVial,
      title: 'Test-Driven Development: The Missing Practice',
      question: 'How often does your team truly follow Test-Driven Development?',
      alternative: 'Or do tests get rushed in after coding—missing edge cases that cause bugs in production?',
      delay: 0.1
    },
    {
      icon: FaCogs,
      title: 'Integration Challenges',
      question: 'Does your team spend more time in integration testing than anticipated?',
      alternative: 'Leading to delays in delivery and lower reliability?',
      delay: 0.2
    }
  ]

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-indigo via-primary-blue to-primary-navy"
      id="diagnostic"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
            Does This Sound Familiar?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If any of these resonate with your team, you've found the gap in your development process.
          </p>
        </motion.div>

        {/* Question Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {questions.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: q.delay }}
            >
              <GlassCard hoverable className="h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-vividAzure/40 to-primary-lightAzure/40 flex items-center justify-center border-2 border-primary-vividAzure shadow-[0_0_20px_rgba(63,214,248,0.5)]">
                    <q.icon className="text-3xl text-primary-lightAzure drop-shadow-[0_0_10px_rgba(189,243,255,0.8)]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold mb-4 text-center text-primary-lightAzure">
                  {q.title}
                </h3>

                {/* Question */}
                <p className="text-gray-200 text-center leading-relaxed mb-3">
                  {q.question}
                </p>

                {/* Alternative */}
                <p className="text-gray-400 text-center text-sm italic flex-grow">
                  {q.alternative}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default DiagnosticQuestionsSection
