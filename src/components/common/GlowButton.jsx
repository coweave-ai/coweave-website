import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const GlowButton = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  loading = false,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = clsx(
    'relative px-8 py-4 rounded-lg font-semibold text-lg',
    'transition-all duration-300 ease-out',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-vividAzure',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  )

  const variantStyles = {
    primary: clsx(
      'bg-gradient-to-r from-primary-mediumAzure to-primary-vividAzure',
      'text-white shadow-[0_0_20px_rgba(63,214,248,0.5)]',
      'hover:shadow-[0_0_30px_rgba(63,214,248,0.8),0_0_60px_rgba(63,214,248,0.5)]',
      'hover:scale-105'
    ),
    secondary: clsx(
      'bg-transparent border-2 border-primary-vividAzure text-primary-vividAzure',
      'shadow-[0_0_15px_rgba(63,214,248,0.3)]',
      'hover:bg-primary-vividAzure hover:text-primary-indigo',
      'hover:shadow-[0_0_25px_rgba(63,214,248,0.6)]',
      'hover:scale-105'
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(baseStyles, variantStyles[variant], className)}
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </motion.button>
  )
}

export default GlowButton
