import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const AnimatedSection = ({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
  staggerChildren = false,
  ...props
}) => {
  const animations = {
    fade: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.6, delay }
    },
    slide: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, delay }
    }
  }

  const containerVariants = staggerChildren
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: {
          staggerChildren: 0.15,
          delayChildren: delay
        }
      }
    : animations[animation]

  return (
    <motion.section
      className={clsx('w-full', className)}
      initial={containerVariants.initial}
      whileInView={containerVariants.whileInView}
      viewport={{ once: true, margin: '-100px' }}
      transition={containerVariants.transition}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
