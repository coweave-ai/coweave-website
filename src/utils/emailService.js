/**
 * Email Service - Brevo Integration via Vercel Serverless Function
 *
 * This service replaces the previous EmailJS client-side implementation
 * with a more secure server-side approach using Brevo SMTP via Vercel
 * serverless functions.
 *
 * Benefits:
 * - API keys are kept server-side (more secure)
 * - Better deliverability with Brevo's SMTP
 * - Rate limiting and validation on the server
 * - No client-side API key exposure
 */

// API endpoint (local dev or production)
const getApiEndpoint = () => {
  // For local development with Vercel CLI
  if (import.meta.env.DEV) {
    return 'http://localhost:3000/api/send-email'
  }
  // For production, use relative path (works with any domain)
  return '/api/send-email'
}

/**
 * No initialization needed (keeping for backwards compatibility)
 */
export const initEmailJS = () => {
  // No-op: Brevo integration doesn't need client-side initialization
  console.log('Email service initialized (Brevo via Vercel serverless function)')
}

/**
 * Send waitlist email via Brevo SMTP
 *
 * @param {Object} formData - Form data from waitlist form
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} [formData.company] - User's company (optional)
 * @param {string} formData.role - User's role
 * @returns {Promise<Object>} Response object with success status
 */
export const sendWaitlistEmail = async (formData) => {
  try {
    // Validate required fields client-side
    if (!formData.name || !formData.email || !formData.role) {
      throw new Error('Missing required fields: name, email, and role are required')
    }

    // Call serverless function
    const response = await fetch(getApiEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        role: formData.role,
      }),
    })

    // Parse JSON response
    const data = await response.json()

    // Check if request was successful
    if (!response.ok) {
      throw new Error(data.error || `Server error: ${response.status}`)
    }

    // Return success
    return {
      success: true,
      data: data,
      messageId: data.messageId
    }

  } catch (error) {
    console.error('Email sending error:', error)

    // Return formatted error
    return {
      success: false,
      error: error.message || 'Failed to send email. Please try again later.'
    }
  }
}

/**
 * Optional: Send contact form email (for future use)
 *
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} Response object
 */
export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch(getApiEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || `Server error: ${response.status}`)
    }

    return { success: true, data }
  } catch (error) {
    console.error('Contact email error:', error)
    return { success: false, error: error.message }
  }
}
