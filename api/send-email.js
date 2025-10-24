/**
 * Vercel Serverless Function for sending emails via Brevo SMTP
 *
 * This function handles waitlist form submissions by:
 * 1. Validating incoming request data
 * 2. Sending email notification via Brevo SMTP
 * 3. Returning success/error response to client
 *
 * Environment variables required:
 * - BREVO_SMTP_USER: Your Brevo account email
 * - BREVO_SMTP_PASSWORD: Your Brevo SMTP password (not login password)
 * - SENDER_EMAIL: Verified sender email address
 * - RECIPIENT_EMAIL: Email address to receive notifications
 */

import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (resets on cold start)
const rateLimiter = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

/**
 * Rate limiting check
 */
function checkRateLimit(identifier) {
  const now = Date.now();
  const userRequests = rateLimiter.get(identifier) || [];

  // Clean old requests outside the window
  const recentRequests = userRequests.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  );

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  recentRequests.push(now);
  rateLimiter.set(identifier, recentRequests);
  return true; // Within rate limit
}

/**
 * Validate email address format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Create email HTML template
 */
function createEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2px;
            border-radius: 10px;
          }
          .content {
            background: white;
            padding: 30px;
            border-radius: 8px;
          }
          h2 {
            color: #667eea;
            margin-top: 0;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
          }
          .field {
            margin: 15px 0;
            padding: 10px;
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            border-radius: 4px;
          }
          .field label {
            font-weight: bold;
            color: #667eea;
            display: block;
            margin-bottom: 5px;
          }
          .field value {
            color: #333;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e9ecef;
            text-align: center;
            color: #6c757d;
            font-size: 12px;
          }
          .timestamp {
            color: #6c757d;
            font-size: 14px;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <h2>🚀 New Waitlist Signup</h2>
            <p class="timestamp">Received: ${new Date().toLocaleString('en-US', {
              timeZone: 'America/Los_Angeles',
              dateStyle: 'full',
              timeStyle: 'long'
            })}</p>

            <div class="field">
              <label>Name:</label>
              <value>${data.name}</value>
            </div>

            <div class="field">
              <label>Email:</label>
              <value>${data.email}</value>
            </div>

            ${data.company ? `
            <div class="field">
              <label>Company:</label>
              <value>${data.company}</value>
            </div>
            ` : ''}

            <div class="field">
              <label>Role:</label>
              <value>${data.role}</value>
            </div>

            <div class="footer">
              <p>This email was sent from the CoWeave waitlist form.</p>
              <p>Powered by Brevo SMTP</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Main serverless function handler
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    // Parse request body
    const { name, email, company, role } = req.body;

    // Validate required fields
    if (!name || !email || !role) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, and role are required.'
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address format.'
      });
    }

    // Validate name length
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Name must be between 2 and 100 characters.'
      });
    }

    // Rate limiting (using IP or email as identifier)
    const identifier = req.headers['x-forwarded-for'] || req.socket.remoteAddress || email;
    if (!checkRateLimit(identifier)) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests. Please try again in a minute.'
      });
    }

    // Check environment variables
    const {
      BREVO_SMTP_USER,
      BREVO_SMTP_PASSWORD,
      SENDER_EMAIL,
      RECIPIENT_EMAIL
    } = process.env;

    if (!BREVO_SMTP_USER || !BREVO_SMTP_PASSWORD || !SENDER_EMAIL || !RECIPIENT_EMAIL) {
      console.error('Missing environment variables');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Please contact support.'
      });
    }

    // Create Brevo SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: BREVO_SMTP_USER,
        pass: BREVO_SMTP_PASSWORD,
      },
      // Additional options for better reliability
      pool: true,
      maxConnections: 1,
      rateDelta: 1000,
      rateLimit: 5,
    });

    // Prepare email data
    const emailData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : 'Not provided',
      role: role.trim(),
    };

    // Send email
    const info = await transporter.sendMail({
      from: `"CoWeave Waitlist" <${SENDER_EMAIL}>`,
      replyTo: email,
      to: RECIPIENT_EMAIL,
      subject: `🚀 New Waitlist Signup: ${emailData.name}`,
      text: `
New waitlist signup received!

Name: ${emailData.name}
Email: ${emailData.email}
Company: ${emailData.company}
Role: ${emailData.role}

Received: ${new Date().toLocaleString()}
      `.trim(),
      html: createEmailTemplate(emailData),
    });

    // Log success (visible in Vercel logs)
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      name: emailData.name,
      email: emailData.email,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    // Log error (visible in Vercel logs)
    console.error('Email sending error:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

    // Return error response (don't expose internal details)
    return res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later or contact support.'
    });
  }
};
