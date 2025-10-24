import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import GlowButton from '../common/GlowButton'
import { sendWaitlistEmail } from '../../utils/emailService'

// Validation Schema
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  role: z.string().min(1, 'Please select a role')
})

const WaitlistForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendWaitlistEmail(data)

      if (result.success) {
        setIsSubmitted(true)
        reset()
        // Log success for analytics (optional)
        console.log('Waitlist signup successful:', result.messageId)
      } else {
        // Display user-friendly error message
        const errorMessage = result.error || 'Something went wrong. Please try again.'
        setError(errorMessage)
        console.error('Waitlist signup failed:', result.error)
      }
    } catch (err) {
      setError('Failed to submit. Please check your connection and try again.')
      console.error('Unexpected error during submission:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-4">✓</div>
        <h3 className="text-3xl font-heading font-bold text-primary-vividAzure mb-4">
          You're on the list!
        </h3>
        <p className="text-gray-300 text-lg">
          We'll be in touch soon with exclusive early access.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Your Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 rounded-lg bg-primary-blue/30 border border-primary-vividAzure/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-vividAzure focus:ring-2 focus:ring-primary-vividAzure/50 transition-all"
          placeholder="Jane Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-accent-pink">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 rounded-lg bg-primary-blue/30 border border-primary-vividAzure/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-vividAzure focus:ring-2 focus:ring-primary-vividAzure/50 transition-all"
          placeholder="jane@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-accent-pink">{errors.email.message}</p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
          Company (optional)
        </label>
        <input
          id="company"
          type="text"
          {...register('company')}
          className="w-full px-4 py-3 rounded-lg bg-primary-blue/30 border border-primary-vividAzure/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary-vividAzure focus:ring-2 focus:ring-primary-vividAzure/50 transition-all"
          placeholder="Acme Inc."
        />
      </div>

      {/* Role Field */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
          Role *
        </label>
        <select
          id="role"
          {...register('role')}
          className="w-full px-4 py-3 rounded-lg bg-primary-blue/30 border border-primary-vividAzure/30 text-white focus:outline-none focus:border-primary-vividAzure focus:ring-2 focus:ring-primary-vividAzure/50 transition-all"
          defaultValue=""
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="VP Engineering">VP Engineering</option>
          <option value="Director DevOps">Director DevOps</option>
          <option value="Senior Engineer">Senior Engineer</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Other">Other</option>
        </select>
        {errors.role && (
          <p className="mt-1 text-sm text-accent-pink">{errors.role.message}</p>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-lg bg-accent-pink/10 border border-accent-pink/30">
          <p className="text-accent-pink text-sm">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <GlowButton type="submit" loading={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Reserve Your Spot'}
      </GlowButton>

      {/* Privacy Note */}
      <p className="text-center text-sm text-gray-400">
        We respect your inbox. Updates only.
      </p>
    </form>
  )
}

export default WaitlistForm
