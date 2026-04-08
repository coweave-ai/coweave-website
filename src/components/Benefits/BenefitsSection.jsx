import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaUser, FaUsers, FaBuilding } from 'react-icons/fa'

const groups = [
  {
    icon: FaUser,
    label: 'For Engineers',
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-400/30',
    bgColor: 'bg-cyan-400/10',
    iconColor: 'text-cyan-400',
    benefits: [
      'AI provides context instantly — unblocked immediately',
      'Agents propose solutions, you review and approve',
      'Ship more per sprint',
      'Focus on creative work, not gathering context',
    ],
  },
  {
    icon: FaUsers,
    label: 'For Teams',
    color: 'from-violet-400 to-purple-500',
    borderColor: 'border-violet-400/30',
    bgColor: 'bg-violet-400/10',
    iconColor: 'text-violet-400',
    benefits: [
      '3–5x development velocity',
      '85%+ test coverage automatically',
      'Consistent quality across every developer',
      'PRD to Production in days, not weeks',
    ],
  },
  {
    icon: FaBuilding,
    label: 'For Organizations',
    color: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-400/30',
    bgColor: 'bg-emerald-400/10',
    iconColor: 'text-emerald-400',
    benefits: [
      'Institutional knowledge codified and preserved',
      'Code changes automated with audit trails',
      'Reduce time for novices to codebase-expert level',
      'Predictable, production-grade output every time',
    ],
  },
]

const BenefitsSection = () => {
  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-28 bg-gradient-to-b from-primary-navy to-primary-blue/30"
      id="benefits"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="animated-gradient-text">Impact at Every Level</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`rounded-2xl border ${group.borderColor} bg-primary-blue/20 backdrop-blur-lg p-8 hover:border-opacity-60 transition-all duration-300`}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-11 h-11 rounded-xl ${group.bgColor} flex items-center justify-center`}>
                  <group.icon className={`w-5 h-5 ${group.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{group.label}</h3>
              </div>

              {/* Benefits */}
              <ul className="space-y-3">
                {group.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full ${group.bgColor} ${group.iconColor} flex-shrink-0`}
                      style={{ backgroundColor: 'currentColor' }}
                    />
                    <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default BenefitsSection
