import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StatCard = ({ value, suffix, label, icon: Icon, delay = 0 }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepValue = value / steps
      const stepTime = duration / steps

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setCount(Math.min(Math.round(stepValue * currentStep), value))

        if (currentStep >= steps) {
          clearInterval(timer)
          setCount(value)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-blue/40 to-primary-navy/40 backdrop-blur-lg border border-primary-vividAzure/20 hover:border-primary-vividAzure/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(63,214,248,0.3)] hover:scale-105 h-full flex flex-col items-center justify-center text-center">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-vividAzure/40 to-primary-lightAzure/40 flex items-center justify-center border-2 border-primary-vividAzure shadow-[0_0_20px_rgba(63,214,248,0.5)]">
            <Icon className="text-3xl text-primary-lightAzure drop-shadow-[0_0_10px_rgba(189,243,255,0.8)]" />
          </div>
        </div>

        {/* Animated Number */}
        <div className="text-5xl md:text-6xl font-bold font-heading mb-4 animated-gradient-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {count}{suffix}
        </div>

        {/* Label */}
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
          {label}
        </p>
      </div>
    </motion.div>
  )
}

export default StatCard
