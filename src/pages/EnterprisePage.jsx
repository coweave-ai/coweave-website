import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import {
  FaBuilding,
  FaServer,
  FaPlug,
  FaShieldAlt,
  FaHeadset,
  FaCheck,
  FaLock,
  FaUsers,
  FaCode,
  FaCogs,
  FaNetworkWired,
  FaClipboardCheck,
  FaRocket,
  FaDatabase
} from 'react-icons/fa';

const EnterprisePage = () => {
  const enterpriseFeatures = [
    {
      icon: FaServer,
      title: 'Self-Hosted Deployment',
      description: 'Deploy on your own infrastructure. Docker, Kubernetes, or bare metal. Your data never leaves your network.',
    },
    {
      icon: FaPlug,
      title: 'n8n SSO Integration',
      description: 'Native single sign-on with n8n. Users authenticate once and access both platforms seamlessly.',
    },
    {
      icon: FaCode,
      title: 'Workflow Prompts',
      description: 'Sync prompts directly with n8n workflows. Update prompts and workflows stay in sync automatically.',
    },
    {
      icon: FaShieldAlt,
      title: 'Air-Gapped Deployment',
      description: 'Deploy in completely isolated environments. No external network dependencies required.',
    },
    {
      icon: FaUsers,
      title: 'Unlimited Users & Teams',
      description: 'No per-seat licensing. Scale to your entire organization without worrying about costs.',
    },
    {
      icon: FaHeadset,
      title: 'Dedicated Support',
      description: 'Custom SLA. Dedicated success manager. Priority support with guaranteed response times.',
    },
  ];

  const securityFeatures = [
    {
      title: 'SOC 2 Type II',
      description: 'Certified compliance with industry security standards',
    },
    {
      title: 'SAML 2.0 SSO',
      description: 'Integrate with Okta, Azure AD, Google Workspace, and more',
    },
    {
      title: 'Audit Logging',
      description: 'Complete audit trail of all user actions and API calls',
    },
    {
      title: 'Custom Retention',
      description: 'Configure data retention policies to meet compliance requirements',
    },
    {
      title: 'Encryption at Rest',
      description: 'AES-256 encryption for all stored data',
    },
    {
      title: 'Encryption in Transit',
      description: 'TLS 1.3 for all network communications',
    },
  ];

  const n8nIntegration = [
    {
      title: 'Unified Authentication',
      description: 'Users sign in to n8n and automatically have access to PO Studio. No separate credentials needed.',
    },
    {
      title: 'Workflow Prompt Sync',
      description: 'Create prompts in PO Studio and reference them directly in your n8n workflows. Changes sync instantly.',
    },
    {
      title: 'Workflow Templates',
      description: 'Pre-built n8n workflow templates that leverage PO Studio prompts for common SDLC tasks.',
    },
    {
      title: 'API Integration',
      description: 'Call PO Studio API from any n8n node. Assemble prompts dynamically based on workflow context.',
    },
  ];

  const deploymentOptions = [
    {
      icon: FaDatabase,
      title: 'Docker',
      description: 'Single container deployment with Docker Compose. Perfect for small teams or development.',
    },
    {
      icon: FaNetworkWired,
      title: 'Kubernetes',
      description: 'Helm charts for production Kubernetes deployments. Auto-scaling and high availability.',
    },
    {
      icon: FaServer,
      title: 'Air-Gapped',
      description: 'Offline installation packages. No internet connectivity required after initial setup.',
    },
  ];

  return (
    <>
      <SEO
        title="PO Studio Enterprise - Self-Hosted with n8n Integration | CoWeave"
        description="Enterprise-grade prompt management with n8n workflow integration. Self-hosted, air-gapped, SOC 2 compliant. Full control over your prompt infrastructure."
        url="/enterprise"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary-vividAzure/20 px-4 py-2 rounded-full mb-8">
              <FaBuilding className="w-5 h-5 text-primary-vividAzure" />
              <span className="text-primary-lightAzure font-medium">Self-Hosted Solution</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">PO Studio Enterprise</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Full control over your prompt infrastructure with complete n8n workflow integration.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Deploy on your infrastructure. Integrate with your existing n8n workflows.
              Enterprise security, compliance, and dedicated support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <GlowButton
                to="/contact"
                variant="primary"
                size="large"
              >
                Contact Sales
              </GlowButton>
              <GlowButton
                to="/cloud"
                variant="secondary"
                size="large"
              >
                Try Cloud First
              </GlowButton>
            </div>

            <p className="text-gray-500 text-sm">
              Includes everything in Cloud, plus self-hosting and n8n integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Your Infrastructure', description: 'Deploy where you need it. Cloud, on-prem, or hybrid.' },
              { title: 'Your Data', description: 'Data never leaves your network. Full compliance control.' },
              { title: 'Your Workflows', description: 'Native n8n integration. Unified prompt and workflow management.' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-vividAzure/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="w-5 h-5 text-primary-vividAzure" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* n8n Integration Section */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Native </span>
              <span className="animated-gradient-text">n8n Integration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PO Studio Enterprise is built for n8n. Unified authentication, synchronized workflows, and seamless prompt management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {n8nIntegration.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6 hover:border-primary-vividAzure/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-vividAzure/20 rounded-lg flex items-center justify-center">
                    <FaPlug className="w-5 h-5 text-primary-vividAzure" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-primary-lightAzure text-lg">
              Already using n8n? PO Studio Enterprise integrates seamlessly with your existing workflows.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Enterprise Features Section */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Enterprise Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to deploy and manage prompts at enterprise scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6 hover:border-primary-vividAzure/50 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary-vividAzure mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Security & Compliance Section */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Security & </span>
              <span className="animated-gradient-text">Compliance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for regulated industries and security-conscious organizations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaShieldAlt className="w-5 h-5 text-primary-vividAzure" />
                    <h3 className="font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Deployment Options Section */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Deployment Options</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Deploy how and where you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8 text-center hover:border-primary-vividAzure/50 transition-colors"
              >
                <option.icon className="w-12 h-12 text-primary-vividAzure mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-gray-400">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
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
              <span className="text-white">Cloud vs </span>
              <span className="animated-gradient-text">Enterprise</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-vividAzure/20">
                  <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center p-4 text-white font-bold">Cloud</th>
                  <th className="text-center p-4 text-primary-vividAzure font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Prompt Management', cloud: true, enterprise: true },
                  { feature: 'Team Collaboration', cloud: true, enterprise: true },
                  { feature: 'API Access', cloud: true, enterprise: true },
                  { feature: 'SAML SSO', cloud: 'Starter+', enterprise: true },
                  { feature: 'Self-Hosted Deployment', cloud: false, enterprise: true },
                  { feature: 'n8n SSO Integration', cloud: false, enterprise: true },
                  { feature: 'Workflow Prompts', cloud: false, enterprise: true },
                  { feature: 'Air-Gapped Deployment', cloud: false, enterprise: true },
                  { feature: 'Unlimited Users', cloud: false, enterprise: true },
                  { feature: 'Custom SLA', cloud: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-primary-vividAzure/10 last:border-0">
                    <td className="p-4 text-gray-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.cloud === 'boolean' ? (
                        row.cloud ? (
                          <FaCheck className="w-5 h-5 text-primary-vividAzure mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm">{row.cloud}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.enterprise === true ? (
                        <FaCheck className="w-5 h-5 text-primary-vividAzure mx-auto" />
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

      {/* CTA Section */}
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Ready for </span>
              <span className="animated-gradient-text">Enterprise?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements. Custom deployment, integration, and pricing tailored to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                to="/contact"
                variant="primary"
                size="large"
              >
                Contact Sales
              </GlowButton>
              <Link
                to="/cloud"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                Start with Cloud →
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Not sure which is right for you? Start with Cloud and upgrade to Enterprise anytime.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default EnterprisePage;
