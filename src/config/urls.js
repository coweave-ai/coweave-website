/**
 * URL Configuration
 *
 * Uses environment variables to switch between staging and production URLs.
 *
 * Production (Vercel): app.coweave.ai
 * Staging (K8s): po-studio-cloud.appemble.com
 */

const APP_BASE_URL = import.meta.env.VITE_APP_URL || 'https://app.coweave.ai';
const DOCS_BASE_URL = import.meta.env.VITE_DOCS_URL || 'https://docs.coweave.ai';

export const urls = {
  // Authentication
  login: `${APP_BASE_URL}/login`,
  signup: `${APP_BASE_URL}/signup`,
  signupWithPlan: (plan) => `${APP_BASE_URL}/signup?plan=${plan}`,

  // Documentation
  docs: DOCS_BASE_URL,

  // App base (for other uses)
  app: APP_BASE_URL,
};

export default urls;
