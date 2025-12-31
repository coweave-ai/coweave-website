import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import AnimatedSection from '../components/common/AnimatedSection';

const PrivacyPage = () => {
  const effectiveDate = 'January 1, 2025';
  const lastUpdated = 'December 31, 2024';

  return (
    <>
      <SEO
        title="Privacy Policy | CoWeave"
        description="Learn how CoWeave collects, uses, and protects your personal information. CCPA compliant privacy policy for California residents."
        url="/privacy"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-gray-400">
              Effective Date: {effectiveDate} | Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <AnimatedSection
        animation="fade"
        className="py-16 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Introduction */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-400 mb-4">
                  CoWeave, Inc. ("CoWeave," "we," "us," or "our") is committed to protecting your privacy. This Privacy
                  Policy describes how we collect, use, disclose, and safeguard your personal information when you use
                  our process orchestration platform, website, applications, and related services (collectively, the "Services").
                </p>
                <p className="text-gray-400 mb-4">
                  CoWeave, Inc. is a Delaware corporation with its principal place of business in Santa Clara County,
                  California, United States. We comply with the California Consumer Privacy Act (CCPA), the California
                  Privacy Rights Act (CPRA), and other applicable privacy laws.
                </p>
                <p className="text-gray-400">
                  By using our Services, you consent to the collection and use of your information as described in this
                  Privacy Policy. If you do not agree with this Privacy Policy, please do not access or use our Services.
                </p>
              </div>

              {/* 1. Information We Collect */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.1 Information You Provide Directly</h3>
                <p className="text-gray-400 mb-4">We collect information you voluntarily provide, including:</p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li><strong className="text-white">Account Information:</strong> Name, email address, password, company name, job title, phone number</li>
                  <li><strong className="text-white">Billing Information:</strong> Payment card details, billing address (processed by our payment processor, Stripe)</li>
                  <li><strong className="text-white">Profile Information:</strong> Profile photo, preferences, settings</li>
                  <li><strong className="text-white">Communications:</strong> Messages, feedback, support requests, survey responses</li>
                  <li><strong className="text-white">User Content:</strong> Processes, workflows, configurations, and other content you create using our Services</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.2 Information Collected Automatically</h3>
                <p className="text-gray-400 mb-4">When you use our Services, we automatically collect:</p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li><strong className="text-white">Device Information:</strong> Device type, operating system, browser type, unique device identifiers</li>
                  <li><strong className="text-white">Usage Data:</strong> Pages visited, features used, time spent, click patterns, search queries</li>
                  <li><strong className="text-white">Log Data:</strong> IP address, access times, referring URLs, error logs</li>
                  <li><strong className="text-white">Location Data:</strong> General location based on IP address (not precise GPS location)</li>
                  <li><strong className="text-white">Cookies and Tracking:</strong> Information collected through cookies, pixels, and similar technologies</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.3 Information from Third Parties</h3>
                <p className="text-gray-400 mb-4">We may receive information from:</p>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li><strong className="text-white">Single Sign-On Providers:</strong> If you log in via Google, GitHub, or other OAuth providers</li>
                  <li><strong className="text-white">Integration Partners:</strong> Data from services you connect to our platform</li>
                  <li><strong className="text-white">Business Partners:</strong> Referral information from partners</li>
                  <li><strong className="text-white">Public Sources:</strong> Publicly available business information</li>
                </ul>
              </div>

              {/* 2. How We Use Your Information */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-400 mb-4">We use your personal information for the following purposes:</p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Provide and Improve Services</h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li>Create and manage your account</li>
                  <li>Deliver, maintain, and improve our Services</li>
                  <li>Process transactions and send related information</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Personalize your experience and content</li>
                  <li>Develop new features and services</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Communications</h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li>Send transactional emails (account verification, password resets, billing)</li>
                  <li>Send product updates and announcements</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Security and Compliance</h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li>Detect, prevent, and address fraud, abuse, and security issues</li>
                  <li>Monitor and enforce our Terms of Service</li>
                  <li>Comply with legal obligations and respond to lawful requests</li>
                  <li>Protect the rights, property, and safety of CoWeave and our users</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.4 Analytics and Research</h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>Analyze usage patterns and trends</li>
                  <li>Measure the effectiveness of our Services</li>
                  <li>Conduct research and development</li>
                  <li>Create aggregated, de-identified data for business purposes</li>
                </ul>
              </div>

              {/* 3. Legal Basis for Processing */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Legal Basis for Processing</h2>
                <p className="text-gray-400 mb-4">We process your personal information based on the following legal grounds:</p>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li><strong className="text-white">Contract Performance:</strong> To fulfill our contractual obligations to you</li>
                  <li><strong className="text-white">Legitimate Interests:</strong> For our legitimate business interests, such as improving our Services, marketing, and fraud prevention</li>
                  <li><strong className="text-white">Consent:</strong> Where you have given explicit consent for specific purposes</li>
                  <li><strong className="text-white">Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </div>

              {/* 4. Information Sharing and Disclosure */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">We do not sell your personal information.</strong> We may share your
                  information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.1 Service Providers</h3>
                <p className="text-gray-400 mb-4">
                  We share information with third-party vendors who perform services on our behalf, including:
                </p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li>Cloud hosting providers (e.g., AWS, Google Cloud)</li>
                  <li>Payment processors (e.g., Stripe)</li>
                  <li>Email service providers</li>
                  <li>Analytics providers</li>
                  <li>Customer support tools</li>
                </ul>
                <p className="text-gray-400 mb-4">
                  These providers are contractually obligated to use your information only to provide services to us
                  and are bound by confidentiality obligations.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Business Transfers</h3>
                <p className="text-gray-400 mb-4">
                  If CoWeave is involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of
                  assets, your information may be transferred as part of that transaction. We will notify you of any
                  such change in ownership or control.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Legal Requirements</h3>
                <p className="text-gray-400 mb-4">
                  We may disclose your information if required to do so by law or in response to valid requests by
                  public authorities (e.g., a court order, subpoena, or government request).
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.4 Protection of Rights</h3>
                <p className="text-gray-400">
                  We may disclose information when we believe disclosure is necessary to protect our rights, your
                  safety, or the safety of others; investigate fraud; or respond to a government request.
                </p>
              </div>

              {/* 5. Data Security */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p className="text-gray-400 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li><strong className="text-white">Encryption at Rest:</strong> All data is encrypted using AES-256 encryption</li>
                  <li><strong className="text-white">Encryption in Transit:</strong> All communications use TLS 1.3 encryption</li>
                  <li><strong className="text-white">Access Controls:</strong> Role-based access controls and multi-factor authentication</li>
                  <li><strong className="text-white">Network Security:</strong> Firewalls, intrusion detection, and DDoS protection</li>
                  <li><strong className="text-white">Regular Audits:</strong> Security assessments, penetration testing, and vulnerability scanning</li>
                  <li><strong className="text-white">Employee Training:</strong> Security awareness training for all employees</li>
                  <li><strong className="text-white">Incident Response:</strong> Documented incident response procedures</li>
                </ul>
                <p className="text-gray-400">
                  While we strive to protect your personal information, no method of transmission over the Internet
                  or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>

              {/* 6. Data Retention */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                <p className="text-gray-400 mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes for which it
                  was collected, including:
                </p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li><strong className="text-white">Account Data:</strong> Retained while your account is active and for 30 days after deletion request</li>
                  <li><strong className="text-white">User Content:</strong> Retained while your account is active; deleted within 90 days of account termination</li>
                  <li><strong className="text-white">Billing Records:</strong> Retained for 7 years for tax and legal compliance</li>
                  <li><strong className="text-white">Log Data:</strong> Retained for 12 months for security and debugging purposes</li>
                  <li><strong className="text-white">Marketing Data:</strong> Retained until you opt out or for 2 years of inactivity</li>
                </ul>
                <p className="text-gray-400">
                  We may retain certain information for longer periods when required by law or for legitimate business
                  purposes, such as resolving disputes or enforcing our agreements.
                </p>
              </div>

              {/* 7. Your Privacy Rights */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
                <p className="text-gray-400 mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.1 General Rights</h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-white">Portability:</strong> Request your data in a portable, machine-readable format</li>
                  <li><strong className="text-white">Opt-Out:</strong> Opt out of marketing communications at any time</li>
                  <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.2 Exercising Your Rights</h3>
                <p className="text-gray-400 mb-4">
                  To exercise your rights, please contact us at{' '}
                  <a href="mailto:privacy@coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                    privacy@coweave.ai
                  </a>{' '}
                  or use the settings in your account dashboard. We will respond to your request within 45 days.
                </p>
                <p className="text-gray-400">
                  We may need to verify your identity before processing your request. We will not discriminate against
                  you for exercising your privacy rights.
                </p>
              </div>

              {/* 8. California Privacy Rights (CCPA/CPRA) */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. California Privacy Rights (CCPA/CPRA)</h2>
                <p className="text-gray-400 mb-4">
                  If you are a California resident, you have additional rights under the California Consumer Privacy
                  Act (CCPA) and the California Privacy Rights Act (CPRA):
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.1 Right to Know</h3>
                <p className="text-gray-400 mb-4">
                  You have the right to request that we disclose the categories and specific pieces of personal
                  information we have collected about you, the sources of collection, the business purposes for
                  collection, and the categories of third parties with whom we share your information.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.2 Right to Delete</h3>
                <p className="text-gray-400 mb-4">
                  You have the right to request deletion of your personal information, subject to certain exceptions
                  (e.g., legal obligations, ongoing transactions, security purposes).
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.3 Right to Correct</h3>
                <p className="text-gray-400 mb-4">
                  You have the right to request correction of inaccurate personal information we maintain about you.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.4 Right to Opt-Out of Sale/Sharing</h3>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">We do not sell your personal information.</strong> We do not share
                  your personal information for cross-context behavioral advertising. If this changes, we will provide
                  a clear opt-out mechanism.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.5 Right to Limit Use of Sensitive Information</h3>
                <p className="text-gray-400 mb-4">
                  We do not collect or process sensitive personal information as defined by the CPRA (e.g., Social
                  Security numbers, precise geolocation, genetic data, biometric data, health information).
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.6 Non-Discrimination</h3>
                <p className="text-gray-400 mb-4">
                  We will not discriminate against you for exercising your CCPA/CPRA rights. We will not deny you
                  services, charge different prices, or provide a different quality of service.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.7 Authorized Agents</h3>
                <p className="text-gray-400 mb-4">
                  You may designate an authorized agent to submit requests on your behalf. Authorized agents must
                  provide proof of authorization (e.g., power of attorney or written permission signed by you).
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.8 Categories of Personal Information</h3>
                <p className="text-gray-400 mb-4">
                  In the past 12 months, we have collected the following categories of personal information:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-400 mb-4">
                    <thead>
                      <tr className="border-b border-primary-vividAzure/20">
                        <th className="text-left py-2 text-white">Category</th>
                        <th className="text-left py-2 text-white">Collected</th>
                        <th className="text-left py-2 text-white">Sold</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-primary-vividAzure/10">
                        <td className="py-2">Identifiers (name, email, IP address)</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">No</td>
                      </tr>
                      <tr className="border-b border-primary-vividAzure/10">
                        <td className="py-2">Commercial information (purchase history)</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">No</td>
                      </tr>
                      <tr className="border-b border-primary-vividAzure/10">
                        <td className="py-2">Internet activity (browsing, usage data)</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">No</td>
                      </tr>
                      <tr className="border-b border-primary-vividAzure/10">
                        <td className="py-2">Geolocation data (general location)</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">No</td>
                      </tr>
                      <tr className="border-b border-primary-vividAzure/10">
                        <td className="py-2">Professional information (job title, company)</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">No</td>
                      </tr>
                      <tr>
                        <td className="py-2">Inferences (preferences, characteristics)</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.9 "Shine the Light" (California Civil Code § 1798.83)</h3>
                <p className="text-gray-400">
                  California residents may request information about the disclosure of personal information to third
                  parties for direct marketing purposes. We do not disclose personal information to third parties for
                  their direct marketing purposes.
                </p>
              </div>

              {/* 9. Cookies and Tracking Technologies */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Cookies and Tracking Technologies</h2>
                <p className="text-gray-400 mb-4">
                  We use cookies and similar tracking technologies to collect information and improve our Services.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">9.1 Types of Cookies We Use</h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li><strong className="text-white">Essential Cookies:</strong> Required for the operation of our Services (authentication, security)</li>
                  <li><strong className="text-white">Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our Services</li>
                  <li><strong className="text-white">Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">9.2 Managing Cookies</h3>
                <p className="text-gray-400 mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to block or delete
                  cookies. However, blocking essential cookies may affect the functionality of our Services.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">9.3 Do Not Track</h3>
                <p className="text-gray-400">
                  Our Services do not currently respond to "Do Not Track" browser signals. However, you can opt out
                  of analytics and marketing tracking using our cookie preferences or by contacting us.
                </p>
              </div>

              {/* 10. Children's Privacy */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
                <p className="text-gray-400 mb-4">
                  Our Services are not intended for children under the age of 16. We do not knowingly collect personal
                  information from children under 16. If we learn that we have collected personal information from a
                  child under 16, we will promptly delete that information.
                </p>
                <p className="text-gray-400">
                  If you believe we have collected information from a child under 16, please contact us immediately at{' '}
                  <a href="mailto:privacy@coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                    privacy@coweave.ai
                  </a>.
                </p>
              </div>

              {/* 11. International Data Transfers */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
                <p className="text-gray-400 mb-4">
                  CoWeave is based in the United States, and your information may be processed and stored in the
                  United States or other countries where our service providers operate. These countries may have
                  different data protection laws than your country of residence.
                </p>
                <p className="text-gray-400 mb-4">
                  When we transfer personal information internationally, we implement appropriate safeguards, including:
                </p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li>Standard Contractual Clauses approved by relevant authorities</li>
                  <li>Data Processing Agreements with service providers</li>
                  <li>Compliance with applicable data transfer mechanisms</li>
                </ul>
                <p className="text-gray-400">
                  By using our Services, you consent to the transfer of your information to the United States and
                  other jurisdictions as described in this Privacy Policy.
                </p>
              </div>

              {/* 12. Third-Party Links and Services */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Third-Party Links and Services</h2>
                <p className="text-gray-400 mb-4">
                  Our Services may contain links to third-party websites, services, or applications. This Privacy
                  Policy does not apply to those third parties. We encourage you to review the privacy policies of
                  any third-party services you access.
                </p>
                <p className="text-gray-400">
                  We are not responsible for the privacy practices or content of third-party services.
                </p>
              </div>

              {/* 13. Changes to This Privacy Policy */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Privacy Policy</h2>
                <p className="text-gray-400 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technologies,
                  legal requirements, or other factors. When we make material changes, we will:
                </p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li>Update the "Last Updated" date at the top of this page</li>
                  <li>Post a notice on our website or Services</li>
                  <li>Send you an email notification (for material changes)</li>
                </ul>
                <p className="text-gray-400">
                  We encourage you to review this Privacy Policy periodically. Your continued use of our Services
                  after any changes indicates your acceptance of the updated Privacy Policy.
                </p>
              </div>

              {/* 14. Contact Information */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
                <p className="text-gray-400 mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="text-gray-400 space-y-2 mb-6">
                  <p><strong className="text-white">CoWeave, Inc.</strong></p>
                  <p>Attn: Privacy Team</p>
                  <p>Santa Clara County, California, USA</p>
                  <p>
                    Email:{' '}
                    <a href="mailto:privacy@coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                      privacy@coweave.ai
                    </a>
                  </p>
                  <p>
                    Website:{' '}
                    <a href="https://coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                      https://coweave.ai
                    </a>
                  </p>
                </div>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">For California residents:</strong> You may also contact the California
                  Attorney General's Office if you have concerns about our privacy practices:
                </p>
                <div className="text-gray-400 space-y-1">
                  <p>Office of the Attorney General</p>
                  <p>California Department of Justice</p>
                  <p>Attn: Public Inquiry Unit</p>
                  <p>P.O. Box 944255</p>
                  <p>Sacramento, CA 94244-2550</p>
                  <p>
                    Website:{' '}
                    <a href="https://oag.ca.gov/privacy" className="text-primary-lightAzure hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      https://oag.ca.gov/privacy
                    </a>
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default PrivacyPage;
