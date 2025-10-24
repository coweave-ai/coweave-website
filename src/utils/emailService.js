import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  if (publicKey) {
    emailjs.init(publicKey)
  }
}

// Send waitlist email
export const sendWaitlistEmail = async (formData) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

    if (!serviceId || !templateId) {
      throw new Error('EmailJS configuration is missing. Please set up environment variables.')
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        role: formData.role,
        message: `New waitlist signup from ${formData.name}`
      }
    )

    return { success: true, data: response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error: error.message || 'Failed to send email' }
  }
}
