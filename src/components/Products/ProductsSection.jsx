import React from 'react'
import { motion } from 'framer-motion'
import { FaCloud, FaBuilding, FaCheck } from 'react-icons/fa'
import AnimatedSection from '../common/AnimatedSection'
import GlowButton from '../common/GlowButton'
import urls from '../../config/urls'

const ProductsSection = () => {
  const products = [
    {
      name: 'PO Studio Cloud',
      tagline: 'Get started in minutes',
      description: 'Managed SaaS solution. No infrastructure to maintain. Start free, upgrade when ready.',
      features: [
        'Prompt management & version control',
        'Team collaboration with RBAC',
        'SAML SSO (Starter+)',
        'API access for CI/CD',
        'Automatic updates'
      ],
      cta: {
        text: 'Start Free',
        href: urls.signup,
        variant: 'primary'
      },
      icon: FaCloud,
      highlighted: false
    },
    {
      name: 'PO Studio Enterprise',
      tagline: 'Full control, full integration',
      description: 'Self-hosted on your infrastructure with complete n8n workflow integration.',
      features: [
        'Everything in Cloud',
        'n8n SSO integration',
        'Workflow prompts',
        'Air-gapped deployment',
        'Custom SLA & support'
      ],
      cta: {
        text: 'Contact Sales',
        href: '/contact',
        variant: 'secondary',
        isInternal: true
      },
      icon: FaBuilding,
      highlighted: false
    }
  ]

  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-primary-navy"
      id="products"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">Two Ways to </span>
            <span className="animated-gradient-text">Fill the Gap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the deployment model that fits your organization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-primary-blue/30 backdrop-blur-lg border rounded-2xl p-8 transition-all duration-300 hover:border-primary-vividAzure/60 ${
                product.highlighted
                  ? 'border-primary-vividAzure shadow-[0_0_30px_rgba(63,214,248,0.3)]'
                  : 'border-primary-vividAzure/20'
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-vividAzure/20 rounded-lg">
                  <product.icon className="w-8 h-8 text-primary-vividAzure" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  <p className="text-primary-lightAzure">{product.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{product.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <FaCheck className="w-4 h-4 text-primary-vividAzure mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <GlowButton
                href={product.cta.isInternal ? undefined : product.cta.href}
                to={product.cta.isInternal ? product.cta.href : undefined}
                variant={product.cta.variant}
                className="w-full"
              >
                {product.cta.text}
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ProductsSection
