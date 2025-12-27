import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import urls from '../config/urls';
import { FaCheck, FaChevronDown } from 'react-icons/fa';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: 'Free',
      description: 'For individuals exploring AI-assisted development',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        '3 users',
        '1 team',
        '10 prompts',
        'Basic version history',
        'Community support'
      ],
      cta: {
        text: 'Get Started',
        href: urls.signup,
        variant: 'secondary'
      }
    },
    {
      name: 'Starter',
      description: 'For small teams getting started with prompt management',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        '15 users',
        '3 teams',
        '100 prompts',
        'Full version history',
        'API access',
        'SAML SSO',
        'Email support'
      ],
      cta: {
        text: 'Start Free Trial',
        href: urls.signupWithPlan('starter'),
        variant: 'primary'
      },
      highlighted: true
    },
    {
      name: 'Professional',
      description: 'For growing teams that need advanced features',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        '60 users',
        '10 teams',
        '500 prompts',
        'Everything in Starter',
        'Advanced analytics',
        'Priority support'
      ],
      cta: {
        text: 'Start Free Trial',
        href: urls.signupWithPlan('professional'),
        variant: 'primary'
      }
    },
    {
      name: 'Enterprise',
      description: 'For organizations with custom requirements',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Unlimited users',
        'Unlimited teams',
        'Unlimited prompts',
        'Self-hosted option',
        'n8n integration',
        'Workflow prompts',
        'Custom SLA',
        'Dedicated support'
      ],
      cta: {
        text: 'Contact Sales',
        href: '/contact',
        variant: 'secondary',
        isInternal: true
      }
    }
  ];

  const faqs = [
    {
      question: 'Can I try PO Studio before purchasing?',
      answer: 'Yes! Our Free tier is available forever with no credit card required. You can also start a free trial of Starter or Professional to test all features before committing.'
    },
    {
      question: 'How does the pricing work for teams?',
      answer: 'Pricing is per organization, not per seat. The user limits refer to the maximum number of users you can invite to your organization. This makes it easy to add team members without worrying about per-user costs.'
    },
    {
      question: 'What happens if I exceed my prompt limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade to a higher plan at any time, and the change takes effect immediately. We won\'t delete any prompts—you just won\'t be able to create new ones until you upgrade.'
    },
    {
      question: 'Can I switch between monthly and yearly billing?',
      answer: 'Yes! You can switch between monthly and yearly billing at any time. When switching to yearly, you\'ll receive a prorated credit for any unused time on your monthly plan.'
    },
    {
      question: 'What\'s included in the Enterprise plan?',
      answer: 'Enterprise includes everything in Professional plus self-hosted deployment options, native n8n SSO integration, workflow prompts, air-gapped deployment support, unlimited users and teams, custom SLA, and dedicated support. Contact our sales team for custom pricing.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Your data security is our top priority. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II compliant and offer SAML SSO for enterprise authentication. Enterprise customers can also self-host for complete data control.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'Free users have access to our community support and documentation. Starter and Professional plans include email support. Enterprise customers receive dedicated support with custom SLAs and a dedicated success manager.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll retain access to your paid features until the end of your current billing period. After that, your account will be downgraded to the Free tier—we won\'t delete any of your data.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Pricing - PO Studio Cloud | CoWeave"
        description="Simple, transparent pricing for teams of all sizes. Start free, upgrade when you're ready. No credit card required."
        url="/pricing"
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
              <span className="animated-gradient-text">Simple Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Start free, upgrade when you're ready. No credit card required.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  isYearly ? 'bg-primary-vividAzure' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    isYearly ? 'left-8' : 'left-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                Yearly{' '}
                <span className="text-primary-vividAzure text-sm font-medium">
                  (2 months free)
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <AnimatedSection
        animation="fade"
        className="py-12 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-primary-blue/30 backdrop-blur-lg border rounded-2xl p-6 transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-primary-vividAzure shadow-[0_0_30px_rgba(63,214,248,0.3)]'
                    : 'border-primary-vividAzure/20 hover:border-primary-vividAzure/50'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-vividAzure text-primary-navy px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4 h-12">{plan.description}</p>

                <div className="mb-6">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <span className="text-4xl font-bold text-white">
                        ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400">/month</span>
                      {isYearly && plan.monthlyPrice > 0 && (
                        <p className="text-sm text-primary-lightAzure mt-1">
                          Billed ${plan.yearlyPrice}/year
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-white">Custom</span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <FaCheck className="w-4 h-4 text-primary-vividAzure mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <GlowButton
                  href={plan.cta.isInternal ? undefined : plan.cta.href}
                  to={plan.cta.isInternal ? plan.cta.href : undefined}
                  variant={plan.cta.variant}
                  className="w-full"
                  size="small"
                >
                  {plan.cta.text}
                </GlowButton>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Comparison Table */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-gradient-to-br from-primary-navy via-primary-blue to-primary-indigo"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Feature Comparison</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <table className="w-full bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl">
              <thead>
                <tr className="border-b border-primary-vividAzure/20">
                  <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center p-4 text-white font-bold">Free</th>
                  <th className="text-center p-4 text-primary-vividAzure font-bold">Starter</th>
                  <th className="text-center p-4 text-white font-bold">Professional</th>
                  <th className="text-center p-4 text-white font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Users', free: '3', starter: '15', pro: '60', enterprise: 'Unlimited' },
                  { feature: 'Teams', free: '1', starter: '3', pro: '10', enterprise: 'Unlimited' },
                  { feature: 'Prompts', free: '10', starter: '100', pro: '500', enterprise: 'Unlimited' },
                  { feature: 'Version History', free: 'Basic', starter: 'Full', pro: 'Full', enterprise: 'Full' },
                  { feature: 'API Access', free: false, starter: true, pro: true, enterprise: true },
                  { feature: 'SAML SSO', free: false, starter: true, pro: true, enterprise: true },
                  { feature: 'Advanced Analytics', free: false, starter: false, pro: true, enterprise: true },
                  { feature: 'Self-Hosted', free: false, starter: false, pro: false, enterprise: true },
                  { feature: 'n8n Integration', free: false, starter: false, pro: false, enterprise: true },
                  { feature: 'Workflow Prompts', free: false, starter: false, pro: false, enterprise: true },
                  { feature: 'Custom SLA', free: false, starter: false, pro: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-primary-vividAzure/10 last:border-0">
                    <td className="p-4 text-gray-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.free === 'boolean' ? (
                        row.free ? (
                          <FaCheck className="w-5 h-5 text-primary-vividAzure mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm">{row.free}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <FaCheck className="w-5 h-5 text-primary-vividAzure mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )
                      ) : (
                        <span className="text-primary-lightAzure text-sm font-medium">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <FaCheck className="w-5 h-5 text-primary-vividAzure mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm">{row.pro}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <FaCheck className="w-5 h-5 text-primary-vividAzure mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Frequently Asked Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary-vividAzure/5 transition-colors"
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  <FaChevronDown
                    className={`w-5 h-5 text-primary-vividAzure flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Still have </span>
              <span className="animated-gradient-text">questions?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                href={urls.signup}
                variant="primary"
                size="large"
              >
                Start Free
              </GlowButton>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default PricingPage;
