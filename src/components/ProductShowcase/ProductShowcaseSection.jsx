import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'

const showcaseItems = [
  {
    image: '/assets/Context Editor.png',
    alt: 'Context Editor - Role context editing interface',
    badge: 'Context Editor',
    title: 'Write Once, Use Everywhere',
    subtitle: 'Define the context that makes AI actually understand your team.',
    description:
      'Every role on your team has unique expertise—your QA engineer thinks differently than your architect. The Context Editor lets you codify role definitions, repository knowledge, and workflow-specific context into reusable components. No more copy-pasting prompts or losing tribal knowledge when someone leaves.',
    highlights: [
      'Role Contexts — Define what each role knows, does, and avoids',
      'Repo Contexts — Capture architecture decisions, conventions, and patterns',
      'Workflow Contexts — Encode step-by-step processes for TDD, code review, and more',
      'Version-controlled with full edit history',
    ],
    direction: 'left',
  },
  {
    image: '/assets/Context Assembler.png',
    alt: 'Context Assembler - Prompt assembly and preview interface',
    badge: 'Context Assembler',
    title: 'Assemble. Preview. Ship to Your IDE.',
    subtitle: 'Build production-grade prompts from your context components—then use them anywhere.',
    description:
      'Stop feeding AI tools generic instructions and hoping for the best. The Context Assembler combines your team, role, and workflow contexts into a single, optimized prompt you can preview before deploying. Copy it into Cursor, Claude Code, Copilot, or any AI tool your team already uses.',
    highlights: [
      'Multi-layer prompt construction from your context library',
      'Live preview with token count optimization',
      'One-click copy or API export to any AI IDE',
      'Team-wide consistency — same context, same quality, every developer',
    ],
    direction: 'right',
  },
  {
    image: '/assets/Kanban Board.png',
    alt: 'Kanban Board - SDLC workflow orchestration',
    badge: 'Workflow Orchestrator',
    title: 'A Ticket Board That Actually Builds Software',
    subtitle: 'Every column is an SDLC phase. Every phase runs a customized AI workflow.',
    description:
      'This isn\'t another Jira clone. The Workflow Orchestrator tracks tickets from backlog to production—and at each phase, it triggers purpose-built AI workflows that generate architecture docs, write tests first, implement code, run reviews, and validate compliance. Human-supervised at every gate.',
    highlights: [
      'Backlog to Deploy — 10 SDLC phases with custom workflows at each step',
      'AI-powered execution — architecture, TDD, implementation, QA, and deployment',
      'Human-in-the-loop — engineers approve before any phase advances',
      'GitHub-integrated — linked PRs, branches, and CI status in real-time',
    ],
    direction: 'left',
  },
  {
    image: '/assets/Teams.png',
    alt: 'Teams - Organization and knowledge sharing management',
    badge: 'Team Management',
    title: 'Organize Teams, Share Knowledge Instantly',
    subtitle: 'One place to manage who knows what — across every team in your org.',
    description:
      'Engineering knowledge shouldn\'t live in one person\'s head. The Teams hub lets you organize your company into groups, assign context components per team, and track how knowledge flows across your organization. New hires get up to speed in days. Departing engineers leave their expertise behind.',
    highlights: [
      'Multi-team management — engineering, marketing, support, all in one view',
      'Shared context library — roles, repos, and workflows accessible across teams',
      'Performance metrics — track assembly usage and cache efficiency per team',
      'Workflow integration — connect each team directly to their automation pipelines',
    ],
    direction: 'right',
  },
]

const ShowcaseItem = ({ item, index }) => {
  const isImageLeft = item.direction === 'left'

  return (
    <div className="mb-32 last:mb-0">
      {/* Badge + Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-vividAzure/15 border border-primary-vividAzure/30 text-primary-vividAzure text-sm font-semibold tracking-wide mb-4">
          {item.badge}
        </span>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3">
          {item.title}
        </h3>
        <p className="text-xl md:text-2xl text-primary-lightAzure max-w-3xl mx-auto">
          {item.subtitle}
        </p>
      </motion.div>

      {/* Image + Content Grid */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isImageLeft ? '' : 'lg:direction-rtl'
        }`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isImageLeft ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={isImageLeft ? '' : 'lg:order-2'}
        >
          <div className="relative group">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-vividAzure/20 to-primary-lightAzure/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-xl overflow-hidden border border-primary-vividAzure/20 group-hover:border-primary-vividAzure/50 transition-all duration-500 shadow-2xl">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isImageLeft ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={isImageLeft ? '' : 'lg:order-1'}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {item.description}
          </p>

          <ul className="space-y-4">
            {item.highlights.map((highlight, i) => {
              const [bold, ...rest] = highlight.split(' — ')
              const hasLabel = rest.length > 0
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-vividAzure flex-shrink-0" />
                  <span className="text-gray-300">
                    {hasLabel ? (
                      <>
                        <span className="text-white font-semibold">{bold}</span>
                        {' — '}
                        {rest.join(' — ')}
                      </>
                    ) : (
                      highlight
                    )}
                  </span>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

const ProductShowcaseSection = () => {
  return (
    <AnimatedSection
      animation="fade"
      className="py-20 md:py-32 bg-gradient-to-b from-primary-navy via-primary-blue/20 to-primary-navy"
      id="product-showcase"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">The Platform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three tools, one mission: turn your team's expertise into consistent, production-grade output.
          </p>
        </motion.div>

        {/* Showcase Items */}
        {showcaseItems.map((item, index) => (
          <ShowcaseItem key={index} item={item} index={index} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default ProductShowcaseSection
