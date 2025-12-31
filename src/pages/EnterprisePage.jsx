import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import GlassCard from '../components/common/GlassCard';
import {
  FaBuilding,
  FaServer,
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
  FaBrain,
  FaPlug,
  FaChartLine,
  FaCloud,
  FaUserCheck,
  FaVial,
  FaClock,
  FaKey,
  FaGraduationCap,
  FaUserTie,
  FaDatabase
} from 'react-icons/fa';

const EnterprisePage = () => {
  const whyCoweaveFeatures = [
    {
      icon: FaBrain,
      title: 'Context-Aware AI That Knows Your Stack',
      description: 'AI agents adapt to YOUR domain knowledge and engineering processes, accelerating them by up to an order of magnitude.',
      checkpoints: [
        'No more context gathering',
        'AI understands YOUR codebase, YOUR patterns, YOUR rules',
        'Institutional knowledge codified, not trapped in heads'
      ]
    },
    {
      icon: FaCogs,
      title: 'End-to-End SDLC Orchestration',
      description: 'Orchestrate your entire pipeline—from PRD to production.',
      checkpoints: [
        'Reduce cycle time by 40-60%',
        'Maintain quality standards throughout',
        'Every phase orchestrated with human oversight'
      ]
    },
    {
      icon: FaPlug,
      title: 'Augmentation, Not Overhaul',
      description: 'Adapts to how your team already works. No need to revamp your SDLC.',
      checkpoints: [
        'Start seeing value in days, not quarters',
        'Works with your existing tools and processes',
        'Integrates with GitHub, Jira, Slack, and more'
      ]
    },
    {
      icon: FaRocket,
      title: 'Deploy in Days',
      description: 'Kubernetes-native deployment on your infrastructure. No cloud lock-in, full data control.',
      checkpoints: [
        'Your code stays in your VPC or on-prem',
        'Only outbound port 443 to Claude API',
        'No inbound connections required',
        'Air-gapped option available (Enterprise)'
      ]
    },
    {
      icon: FaUserCheck,
      title: 'Human-in-the-Loop Foundation',
      description: 'AI proposes, human approves. Every workflow requires engineer review—ensuring quality while accelerating throughput.',
      checkpoints: [
        'You stay in control',
        'Quality + Speed = No compromises',
        'Agentic autonomy with deterministic guardrails'
      ]
    }
  ];

  const whatsIncluded = [
    {
      icon: FaCogs,
      title: 'All Workflows & Agents',
      description: 'Pre-built agentic workflows for every phase of SDLC. Architect, Developer, QA, DevOps, Documentation, and RCA.'
    },
    {
      icon: FaNetworkWired,
      title: 'Workflow Execution Engine',
      description: 'Deterministic orchestration of agentic workflows. Human approval points throughout.'
    },
    {
      icon: FaBrain,
      title: 'AI Service + Prompt Optimization Studio',
      description: 'Context-aware AI powered by Claude. Full Prompt Optimization Studio included for prompt management.'
    },
    {
      icon: FaPlug,
      title: 'Full Tool Integration',
      description: 'GitHub/GitLab, Jira/Linear, Slack, Jenkins, and more. Works with your existing stack.'
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Observability',
      description: 'Track workflow performance, team adoption, and velocity improvements. (Enhanced in Professional, Advanced in Enterprise)'
    }
  ];

  const howItWorksPhases = [
    {
      number: '1',
      title: 'Architecture',
      description: 'PM submits PRD → Architect Agent creates design → Human reviews and approves'
    },
    {
      number: '2',
      title: 'Development',
      description: 'Developer Agent implements code → Creates Git PR → Human reviews and merges'
    },
    {
      number: '3',
      title: 'QA & Testing',
      description: 'QA Agent updates test suites → Human approves tests → Agent runs tests and reports results'
    },
    {
      number: '4',
      title: 'DevOps',
      description: 'DevOps Agent updates deployment framework → Human approves → Human deploys changes'
    }
  ];

  const useCases = [
    {
      title: 'Test-Driven Development Enforcement',
      problem: 'Tests rushed in after coding',
      solution: 'AI agent writes tests BEFORE code',
      result: '100% PRs include tests, 23% coverage increase'
    },
    {
      title: 'Automated Environment Setup',
      problem: 'QA spends 40% of time on environment setup',
      solution: 'Agent acquires sandboxes automatically',
      result: 'Same-day test execution vs 2-3 day wait'
    },
    {
      title: 'Secret Management Enforcement',
      problem: 'Secrets hard-coded in YAML files',
      solution: 'Agent enforces Vault/AWS Secrets Manager',
      result: '78% drop in security audit findings'
    },
    {
      title: 'Streamlined Onboarding',
      problem: '3-month onboarding for new engineers',
      solution: 'Codified practices teach from day one',
      result: 'Productive in 2 weeks, junior devs write senior code'
    }
  ];

  const bottomLineGroups = [
    {
      title: 'FOR INDIVIDUALS',
      icon: FaUserTie,
      benefits: [
        'AI provides context instantly—unblocked immediately',
        'Agents propose solutions, you review and approve',
        'Ship 60% more per sprint',
        'Focus on creative work, not repetitive tasks'
      ]
    },
    {
      title: 'FOR TEAMS',
      icon: FaUsers,
      benefits: [
        '3-5x development velocity',
        '85%+ test coverage automatically',
        'Consistent quality across all developers',
        'Reduce cycle time by 40-60%',
        'PRD → Production in days, not weeks'
      ]
    },
    {
      title: 'FOR ORGANIZATIONS',
      icon: FaBuilding,
      benefits: [
        'Institutional knowledge codified and preserved',
        'Compliance automated (audit trails, security enforcement)',
        'Senior engineers freed for strategic work',
        'Faster onboarding (2 weeks vs 3 months)',
        'Predictable, production-grade output'
      ]
    }
  ];

  const enterpriseFeatures = [
    {
      icon: FaServer,
      title: 'Self-Hosted Deployment',
      description: 'Deploy on your own infrastructure. Docker, Kubernetes, or bare metal. Your data never leaves your network.',
    },
    {
      icon: FaLock,
      title: 'SAML 2.0 SSO',
      description: 'Integrate with Okta, Azure AD, Google Workspace, and more. Single sign-on for your entire organization.',
    },
    {
      icon: FaShieldAlt,
      title: 'Air-Gapped Deployment',
      description: 'Deploy in completely isolated environments. No external network dependencies required (except for Claude.ai).',
    },
    {
      icon: FaHeadset,
      title: 'Dedicated Support',
      description: 'Custom SLA. Dedicated success manager. Priority support with guaranteed response times.',
    },
    {
      icon: FaClipboardCheck,
      title: 'Complete Audit Logging',
      description: 'Full audit trail of all user actions and API calls for compliance requirements.',
    },
  ];

  const securityFeatures = [
    { icon: FaLock, title: 'SOC 2 Type II', description: 'Certified compliance with industry security standards' },
    { icon: FaKey, title: 'Encryption at Rest', description: 'AES-256 encryption for all stored data' },
    { icon: FaShieldAlt, title: 'Encryption in Transit', description: 'TLS 1.3 for all network communications' },
    { icon: FaDatabase, title: 'Custom Retention Policies', description: 'Configure data retention policies to meet compliance requirements' },
    { icon: FaUsers, title: 'Role-Based Access Control (RBAC)', description: 'Granular permissions and access controls for teams and individuals' },
    { icon: FaClipboardCheck, title: 'Audit Trails', description: 'Complete audit trail of all user actions and API calls' },
  ];

  const deploymentOptions = [
    {
      icon: FaNetworkWired,
      title: 'Kubernetes',
      description: 'Helm charts for production Kubernetes deployments. Auto-scaling and high availability.',
    },
    {
      icon: FaLock,
      title: 'Air-Gapped',
      description: 'Offline installation packages. No internet connectivity required after initial setup (except for Claude.ai).',
    },
  ];

  const pricingTiers = [
    {
      name: 'STARTER',
      price: '$299/month',
      note: '+ BYOL',
      users: '15 users',
      teams: '3 teams',
      prompts: '100 prompts',
      cta: 'Schedule Demo',
      highlighted: false
    },
    {
      name: 'PROFESSIONAL',
      price: '$799/month',
      note: '+ BYOL',
      users: '60 users',
      teams: '10 teams',
      prompts: '500 prompts',
      cta: 'Schedule Demo',
      highlighted: true
    },
    {
      name: 'ENTERPRISE',
      price: 'Custom',
      note: '+ BYOL',
      users: 'Unlimited',
      teams: 'Unlimited',
      prompts: 'Unlimited',
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <>
      <SEO
        title="CoWeave AI Platform - Human-Supervised SDLC Automation | CoWeave"
        description="Full-cycle SDLC automation platform with agentic workflows and deterministic orchestration. From PRD to production with human oversight at every step."
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">CoWeave AI Platform</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-semibold mb-2">
              Human-Supervised Full-Cycle SDLC Automation Platform
            </p>
            <p className="text-xl text-primary-lightAzure mb-6">
              Featuring Agentic Workflows and Deterministic Orchestration
            </p>

            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              From PRD to production. While others automate just code generation, CoWeave orchestrates your entire pipeline—design, development, testing, deployment, and incident response.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <GlowButton
                to="/contact"
                variant="primary"
                size="large"
              >
                Schedule Demo
              </GlowButton>
              <GlowButton
                to="/pricing"
                variant="secondary"
                size="large"
              >
                View Pricing
              </GlowButton>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>On-Prem Deployment</span>
              <span>•</span>
              <span>Claude BYOL Required</span>
              <span>•</span>
              <span>3-5x Development Velocity</span>
              <span>•</span>
              <span>85%+ Test Coverage</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why CoWeave Platform Section */}
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
              <span className="animated-gradient-text">Why CoWeave Platform?</span>
            </h2>
            <p className="text-xl text-primary-lightAzure font-medium mb-4">
              From PRD to Production with AI Orchestration
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              CoWeave turbocharges your SDLC—not just code generation. Agentic workflows handle architecture, development, testing, deployment, and incident response with human supervision at every step.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {whyCoweaveFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-vividAzure/20 rounded-lg flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-vividAzure" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.checkpoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* What's Included Section */}
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
              <span className="animated-gradient-text">What's Included</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything You Need for SDLC Orchestration
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {whatsIncluded.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6 hover:border-primary-vividAzure/50 transition-colors"
              >
                <item.icon className="w-10 h-10 text-primary-vividAzure mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
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
              <span className="animated-gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-gray-300">
              Orchestrate your SDLC from PRD to production in four phases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {howItWorksPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-vividAzure to-primary-lightAzure flex items-center justify-center text-primary-navy font-bold">
                      {phase.number}
                    </div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <p className="text-gray-300">{phase.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Real Results Section */}
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Real Results</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-World Impact: PO Studio Build
            </p>
            <p className="text-lg text-gray-400 mt-4">
              We built PO Studio—a complete enterprise application—using CoWeave AI Platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary-lightAzure mb-4">THE BUILD:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 110+ API endpoints</li>
                    <li>• 11 database tables</li>
                    <li>• 11,000+ lines of code</li>
                    <li>• 1,085 automated tests</li>
                    <li>• 85%+ test coverage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-lightAzure mb-4">TIMELINE:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 10 weeks vs 40 weeks traditional (4x faster)</li>
                    <li>• 3-day integration (not 3 weeks or months)</li>
                  </ul>
                  <h3 className="text-xl font-bold text-primary-lightAzure mt-6 mb-4">THE SECRET:</h3>
                  <p className="text-gray-300">
                    We followed the SDLC process. <span className="text-white font-semibold">Every. Single. Step.</span>
                  </p>
                  <p className="text-gray-400 mt-2">PRD → TDD → Test → Code → Deploy</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Use Cases Section */}
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
              <span className="animated-gradient-text">Common Use Cases</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <div className="space-y-3">
                    <p className="text-gray-400"><span className="text-red-400 font-medium">Problem:</span> {useCase.problem}</p>
                    <p className="text-gray-400"><span className="text-primary-lightAzure font-medium">Solution:</span> {useCase.solution}</p>
                    <p className="text-gray-400"><span className="text-green-400 font-medium">Result:</span> {useCase.result}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* The Bottom Line Section */}
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
              <span className="animated-gradient-text">The Bottom Line</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bottomLineGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <group.icon className="w-6 h-6 text-primary-vividAzure" />
                    <h3 className="text-lg font-bold text-primary-lightAzure">{group.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
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
              Everything you need to deploy and manage at enterprise scale
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6 hover:border-primary-vividAzure/50 transition-colors"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  <feature.icon className="w-5 h-5 text-primary-vividAzure" />
                  <h3 className="font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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

      {/* Technical Requirements Section */}
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
              <span className="animated-gradient-text">Technical Requirements</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary-lightAzure mb-3">DEPLOYMENT:</h3>
                  <p className="text-yellow-400 mb-2">On-prem deployment required</p>
                  <p className="text-gray-400">Kubernetes cluster (recommended)</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-lightAzure mb-3">LLM LICENSE:</h3>
                  <p className="text-yellow-400 mb-2">Bring Your Own Claude License (BYOL)</p>
                  <p className="text-gray-400">Recommended: Claude Max or Enterprise Claude</p>
                  <p className="text-gray-400">Currently: Claude only (other LLMs coming soon)</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-lightAzure mb-3">INFRASTRUCTURE:</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• PostgreSQL database</li>
                    <li>• Redis cache</li>
                    <li>• Prometheus, Loki, Grafana (PLG) observability stack</li>
                    <li>• Outbound port 443 to Claude API</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-lightAzure mb-3">INTEGRATIONS (Optional):</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• GitHub or GitLab</li>
                    <li>• Jira or Linear</li>
                    <li>• Slack</li>
                    <li>• Jenkins or CI/CD</li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
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
              <span className="animated-gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300">
              All Tiers Include Same Features - Choose for Scale & Support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-primary-blue/30 backdrop-blur-lg border rounded-xl p-6 text-center ${
                  tier.highlighted
                    ? 'border-primary-vividAzure shadow-[0_0_30px_rgba(63,214,248,0.3)]'
                    : 'border-primary-vividAzure/20'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary-vividAzure mb-1">{tier.price}</p>
                <p className="text-gray-400 text-sm mb-6">{tier.note}</p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>{tier.users}</li>
                  <li>{tier.teams}</li>
                  <li>{tier.prompts}</li>
                </ul>
                <GlowButton
                  to="/contact"
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {tier.cta}
                </GlowButton>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link
              to="/pricing"
              className="text-primary-lightAzure hover:text-white transition-colors font-medium"
            >
              See Full Pricing Details →
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Start with PO Studio Section */}
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Start with Prompt Optimization Studio</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Not ready for full SDLC orchestration? Start with PO Studio Cloud to eliminate AI output variance.
            </p>

            <GlassCard className="p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Start with PO Studio Cloud:</h3>
              <ul className="text-left space-y-2 max-w-md mx-auto mb-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>Eliminate AI output variance</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>Codify organizational knowledge</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>Cloud-based, no infrastructure required</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="w-4 h-4 text-primary-vividAzure mt-1" />
                  <span>Free to start</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm mb-4">Upgrade to Platform when ready for workflows</p>
              <Link
                to="/cloud"
                className="text-primary-lightAzure hover:text-white transition-colors font-medium"
              >
                Learn About PO Studio →
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
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
              <span className="animated-gradient-text">Ready to Transform Your SDLC?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See how CoWeave AI Platform orchestrates your entire SDLC with agentic workflows and human supervision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <GlowButton
                to="/contact"
                variant="primary"
                size="large"
              >
                Schedule Demo
              </GlowButton>
              <GlowButton
                to="/pricing"
                variant="secondary"
                size="large"
              >
                View Pricing
              </GlowButton>
            </div>
            <p className="text-gray-400 mt-4">
              See CoWeave AI Platform in action
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default EnterprisePage;
