import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const GlassCard = ({
  children,
  className = '',
  hoverable = true,
  ...props
}) => {
  const baseStyles = clsx(
    'backdrop-blur-lg bg-primary-blue/30',
    'border border-primary-vividAzure/20',
    'rounded-2xl p-6',
    'transition-all duration-300'
  )

  const hoverStyles = hoverable
    ? clsx(
        'hover:bg-primary-blue/40',
        'hover:border-primary-vividAzure/50',
        'hover:shadow-[0_0_30px_rgba(63,214,248,0.3)]',
        'hover:scale-105'
      )
    : ''

  return (
    <motion.div
      className={clsx(baseStyles, hoverStyles, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
