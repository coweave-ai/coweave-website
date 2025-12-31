import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import AnimatedSection from '../components/common/AnimatedSection';

const TermsPage = () => {
  const effectiveDate = 'January 1, 2025';
  const lastUpdated = 'December 31, 2024';

  return (
    <>
      <SEO
        title="Terms of Service | CoWeave"
        description="Read the terms and conditions that govern your use of CoWeave's process orchestration platform and services."
        url="/terms"
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
              <span className="animated-gradient-text">Terms of Service</span>
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
                  Welcome to CoWeave. These Terms of Service ("Terms") govern your access to and use of CoWeave's
                  process orchestration platform, including our website, applications, APIs, and related services
                  (collectively, the "Services"), provided by CoWeave, Inc. ("CoWeave," "we," "us," or "our"),
                  a Delaware corporation with its principal place of business in Santa Clara County, California.
                </p>
                <p className="text-gray-400">
                  By accessing or using our Services, you agree to be bound by these Terms. If you are using the
                  Services on behalf of an organization, you represent and warrant that you have the authority to
                  bind that organization to these Terms, and "you" refers to both you and that organization.
                </p>
              </div>

              {/* 1. Acceptance of Terms */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-400 mb-4">
                  By creating an account, accessing, or using our Services, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and our{' '}
                  <a href="/privacy" className="text-primary-lightAzure hover:text-white transition-colors">
                    Privacy Policy
                  </a>, which is incorporated herein by reference.
                </p>
                <p className="text-gray-400">
                  If you do not agree to these Terms, you may not access or use the Services. We reserve the right
                  to modify these Terms at any time. We will notify you of material changes by posting the updated
                  Terms on our website or through other communications. Your continued use of the Services after
                  such modifications constitutes your acceptance of the updated Terms.
                </p>
              </div>

              {/* 2. Description of Services */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                <p className="text-gray-400 mb-4">
                  CoWeave provides a process orchestration platform that enables users to design, automate, and
                  manage business processes and workflows. Our Services include:
                </p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li><strong className="text-white">PO Studio:</strong> A visual process orchestration development environment</li>
                  <li><strong className="text-white">Cloud Services:</strong> Hosted infrastructure for running and managing processes</li>
                  <li><strong className="text-white">Enterprise Solutions:</strong> On-premises deployment options and enterprise features</li>
                  <li><strong className="text-white">APIs and Integrations:</strong> Programmatic access to platform capabilities</li>
                  <li><strong className="text-white">Documentation and Support:</strong> Technical resources and customer assistance</li>
                </ul>
                <p className="text-gray-400">
                  We may modify, update, or discontinue any aspect of the Services at any time. We will provide
                  reasonable notice before discontinuing any material functionality.
                </p>
              </div>

              {/* 3. Account Registration */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration and Security</h2>
                <p className="text-gray-400 mb-4">
                  To access certain features of the Services, you must create an account. When creating an account, you agree to:
                </p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security and confidentiality of your login credentials</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Immediately notify us of any unauthorized use of your account</li>
                </ul>
                <p className="text-gray-400">
                  You must be at least 18 years of age to create an account. We reserve the right to suspend or
                  terminate accounts that violate these Terms or for any other reason at our sole discretion.
                </p>
              </div>

              {/* 4. Subscription and Payments */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Subscription Plans and Payments</h2>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">4.1 Subscription Plans.</strong> The Services are offered under various
                  subscription plans as described on our pricing page. Each plan includes specific features, usage limits,
                  and support levels. We reserve the right to modify our plans and pricing at any time, with notice to
                  existing subscribers.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">4.2 Payment Terms.</strong> You agree to pay all fees associated with
                  your selected subscription plan. Fees are billed in advance on a monthly or annual basis, depending
                  on your plan. All payments are non-refundable except as expressly stated in these Terms or required
                  by applicable law.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">4.3 Automatic Renewal.</strong> Subscriptions automatically renew at
                  the end of each billing period unless you cancel before the renewal date. You may cancel your
                  subscription at any time through your account settings.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">4.4 Taxes.</strong> All fees are exclusive of applicable taxes, levies,
                  or duties imposed by taxing authorities. You are responsible for paying all such taxes, excluding
                  taxes based on CoWeave's net income.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">4.5 Free Trials.</strong> We may offer free trials of our Services.
                  At the end of a free trial, you will be automatically enrolled in a paid subscription unless you
                  cancel before the trial ends.
                </p>
              </div>

              {/* 5. Acceptable Use */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use Policy</h2>
                <p className="text-gray-400 mb-4">
                  You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree NOT to:
                </p>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
                  <li>Violate any applicable federal, state, local, or international law or regulation</li>
                  <li>Infringe upon or violate our intellectual property rights or those of others</li>
                  <li>Transmit any material that is defamatory, obscene, threatening, or otherwise objectionable</li>
                  <li>Attempt to gain unauthorized access to any systems, networks, or data</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services</li>
                  <li>Use the Services for any purpose that is harmful, fraudulent, or deceptive</li>
                  <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
                  <li>Use automated systems (bots, scrapers) to access the Services without permission</li>
                  <li>Resell, sublicense, or share your account access with unauthorized parties</li>
                  <li>Use the Services to send spam, phishing communications, or malware</li>
                </ul>
                <p className="text-gray-400">
                  Violation of this Acceptable Use Policy may result in immediate suspension or termination of your
                  account and access to the Services.
                </p>
              </div>

              {/* 6. Intellectual Property */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property Rights</h2>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">6.1 Our Intellectual Property.</strong> The Services, including all
                  content, features, functionality, software, designs, text, graphics, logos, and trademarks, are
                  owned by CoWeave or our licensors and are protected by United States and international copyright,
                  trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">6.2 Limited License.</strong> Subject to your compliance with these
                  Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and
                  use the Services for your internal business purposes during the term of your subscription.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">6.3 Restrictions.</strong> You may not copy, modify, distribute, sell,
                  lease, or create derivative works based on the Services or any content therein, except as expressly
                  permitted in writing by CoWeave.
                </p>
              </div>

              {/* 7. User Content and Data */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. User Content and Data</h2>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">7.1 Your Content.</strong> You retain all ownership rights in any
                  content, data, processes, workflows, or other materials you submit, upload, or create using the
                  Services ("User Content"). You are solely responsible for your User Content and the consequences
                  of submitting it.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">7.2 License to CoWeave.</strong> By submitting User Content, you
                  grant CoWeave a worldwide, non-exclusive, royalty-free license to use, process, store, and display
                  your User Content solely to the extent necessary to provide the Services to you. This license
                  terminates when you delete your User Content or close your account.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">7.3 Data Processing.</strong> Our processing of personal data is
                  governed by our{' '}
                  <a href="/privacy" className="text-primary-lightAzure hover:text-white transition-colors">
                    Privacy Policy
                  </a>. For enterprise customers, we offer a Data Processing Agreement (DPA) upon request.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">7.4 Data Export.</strong> You may export your User Content at any
                  time during your subscription. Upon termination, we will provide a reasonable period for you to
                  retrieve your data before deletion.
                </p>
              </div>

              {/* 8. Third-Party Services */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Services and Integrations</h2>
                <p className="text-gray-400 mb-4">
                  The Services may integrate with or contain links to third-party websites, applications, or services.
                  We do not control and are not responsible for the content, privacy practices, or availability of
                  these third-party services.
                </p>
                <p className="text-gray-400">
                  Your use of third-party services is subject to their respective terms and privacy policies. We
                  encourage you to review those terms before enabling any integrations.
                </p>
              </div>

              {/* 9. Confidentiality */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Confidentiality</h2>
                <p className="text-gray-400 mb-4">
                  Each party agrees to protect the confidential information of the other party using the same degree
                  of care it uses to protect its own confidential information, but in no event less than reasonable care.
                </p>
                <p className="text-gray-400">
                  Confidential information does not include information that: (a) is or becomes publicly available
                  without breach; (b) was known to the receiving party before disclosure; (c) is independently
                  developed without use of confidential information; or (d) is rightfully obtained from a third party.
                </p>
              </div>

              {/* 10. Warranties and Disclaimers */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Warranties and Disclaimers</h2>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">10.1 Our Warranty.</strong> We warrant that the Services will perform
                  substantially in accordance with the applicable documentation during your subscription term. Your
                  sole remedy for breach of this warranty is for us to use commercially reasonable efforts to correct
                  the non-conforming Services.
                </p>
                <p className="text-gray-400 mb-4 uppercase text-sm">
                  <strong className="text-white">10.2 Disclaimer.</strong> EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE
                  SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
                  ERROR-FREE, OR COMPLETELY SECURE.
                </p>
                <p className="text-gray-400 uppercase text-sm">
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSIONS MAY
                  NOT APPLY TO YOU.
                </p>
              </div>

              {/* 11. Limitation of Liability */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
                <p className="text-gray-400 mb-4 uppercase text-sm">
                  <strong className="text-white">11.1 EXCLUSION OF DAMAGES.</strong> TO THE MAXIMUM EXTENT PERMITTED
                  BY LAW, IN NO EVENT SHALL COWEAVE, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT
                  NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM
                  YOUR USE OR INABILITY TO USE THE SERVICES.
                </p>
                <p className="text-gray-400 mb-4 uppercase text-sm">
                  <strong className="text-white">11.2 CAP ON LIABILITY.</strong> OUR TOTAL AGGREGATE LIABILITY ARISING
                  OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL
                  FEES PAID BY YOU TO COWEAVE DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM; OR (B) ONE HUNDRED
                  DOLLARS ($100).
                </p>
                <p className="text-gray-400 uppercase text-sm">
                  THE LIMITATIONS IN THIS SECTION APPLY REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF COWEAVE
                  HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>

              {/* 12. Indemnification */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Indemnification</h2>
                <p className="text-gray-400">
                  You agree to indemnify, defend, and hold harmless CoWeave and its affiliates, officers, directors,
                  employees, and agents from and against any claims, liabilities, damages, losses, and expenses,
                  including reasonable attorneys' fees, arising out of or in any way connected with: (a) your access
                  to or use of the Services; (b) your User Content; (c) your violation of these Terms; or (d) your
                  violation of any third-party rights, including intellectual property rights.
                </p>
              </div>

              {/* 13. Term and Termination */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">13. Term and Termination</h2>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">13.1 Term.</strong> These Terms remain in effect until terminated
                  by either party.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">13.2 Termination by You.</strong> You may terminate your account at
                  any time by contacting us or using the account settings. Termination does not entitle you to any
                  refund of prepaid fees.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">13.3 Termination by CoWeave.</strong> We may suspend or terminate
                  your access to the Services immediately, without prior notice or liability, for any reason,
                  including if you breach these Terms.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">13.4 Effect of Termination.</strong> Upon termination, your right
                  to use the Services will immediately cease. Sections that by their nature should survive termination
                  shall survive, including intellectual property provisions, warranty disclaimers, limitation of
                  liability, and governing law.
                </p>
              </div>

              {/* 14. Governing Law */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">14. Governing Law and Jurisdiction</h2>
                <p className="text-gray-400 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California,
                  United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-400">
                  Any legal action or proceeding arising out of or relating to these Terms or the Services shall be
                  brought exclusively in the state or federal courts located in Santa Clara County, California, and
                  you consent to the personal jurisdiction of such courts.
                </p>
              </div>

              {/* 15. Dispute Resolution */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">15. Dispute Resolution</h2>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">15.1 Informal Resolution.</strong> Before filing any formal legal
                  claim, you agree to first contact us at{' '}
                  <a href="mailto:legal@coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                    legal@coweave.ai
                  </a>{' '}
                  and attempt to resolve the dispute informally for at least thirty (30) days.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">15.2 Binding Arbitration.</strong> If informal resolution is
                  unsuccessful, any dispute arising from these Terms shall be resolved through binding arbitration
                  administered by JAMS in Santa Clara County, California, in accordance with JAMS Streamlined
                  Arbitration Rules and Procedures.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">15.3 Class Action Waiver.</strong> You agree that any dispute
                  resolution proceedings will be conducted on an individual basis and not as a class, consolidated,
                  or representative action.
                </p>
              </div>

              {/* 16. General Provisions */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">16. General Provisions</h2>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">16.1 Entire Agreement.</strong> These Terms, together with the
                  Privacy Policy and any applicable Order Forms or SOWs, constitute the entire agreement between
                  you and CoWeave regarding the Services.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">16.2 Severability.</strong> If any provision of these Terms is
                  held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">16.3 Waiver.</strong> Our failure to enforce any right or provision
                  of these Terms shall not constitute a waiver of such right or provision.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">16.4 Assignment.</strong> You may not assign or transfer these Terms
                  without our prior written consent. We may assign our rights and obligations without restriction.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">16.5 Force Majeure.</strong> Neither party shall be liable for any
                  failure or delay in performance due to causes beyond its reasonable control, including natural
                  disasters, war, terrorism, labor disputes, or government actions.
                </p>
              </div>

              {/* 17. Contact Information */}
              <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
                <p className="text-gray-400 mb-4">
                  If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
                </p>
                <div className="text-gray-400 space-y-2">
                  <p><strong className="text-white">CoWeave, Inc.</strong></p>
                  <p>Santa Clara County, California, USA</p>
                  <p>
                    Email:{' '}
                    <a href="mailto:legal@coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                      legal@coweave.ai
                    </a>
                  </p>
                  <p>
                    Website:{' '}
                    <a href="https://coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                      https://coweave.ai
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

export default TermsPage;
