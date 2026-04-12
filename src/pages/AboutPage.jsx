import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import GlassCard from '../components/common/GlassCard';
import urls from '../config/urls';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaCog,
  FaUserShield,
  FaBolt,
  FaLock,
  FaRocket,
  FaHeart,
  FaUsers
} from 'react-icons/fa';

const AboutPage = () => {
  const journeyMilestones = [
    {
      icon: FaBolt,
      title: 'The Spark',
      description: 'Brilliant engineers spending hours gathering context, searching wikis, waiting on the one person who knows the legacy system.',
    },
    {
      icon: FaRocket,
      title: 'The Mission',
      description: 'Augment and transform engineering — empower engineers to be more productive and increase their contributions to society.',
    },
    {
      icon: FaLock,
      title: 'The Foundation',
      description: 'Software reliability as the cornerstone. AI-assisted code must be production-ready, tested, and consistent — every single time.',
    },
    {
      icon: FaGlobe,
      title: 'The Vision',
      description: 'Engineering teams tackling audacious visions — unencumbered by context gathering, variance costs, and coordination overhead.',
    },
  ];

  const values = [
    {
      number: '01',
      icon: FaCog,
      title: 'Engineers should engineer.',
      description: 'Your team\'s most valuable hours belong to building — not gathering context or wrestling with generic AI tools.',
    },
    {
      number: '02',
      icon: FaUserShield,
      title: 'Humans stay in control.',
      description: 'AI proposes. Engineers dispose. Automation amplifies judgment, never replaces it.',
    },
    {
      number: '03',
      icon: FaBolt,
      title: 'Solve the hardest problems first.',
      description: 'We attack knowledge silos, coordination debt, and LLM blindness head-on — that\'s where the real leverage is.',
    },
    {
      number: '04',
      icon: FaLock,
      title: 'Earn trust through results.',
      description: 'Our customers share everything about their stack — that\'s sacred. Quality, security, and privacy above all.',
    },
    {
      number: '05',
      icon: FaRocket,
      title: 'Ship with your customers.',
      description: 'Their pain is our product roadmap. We race to respond and ship what actually matters.',
    },
    {
      number: '06',
      icon: FaHeart,
      title: 'Boldness over comfort.',
      description: 'We take the harder path upfront so our customers — and our team — compound faster.',
    },
  ];

  return (
    <>
      <SEO
        title="About CoWeave - Building the Future of Enterprise-Grade Software"
        description="CoWeave is on a mission to help engineers weave with AI to ship reliable software faster. Learn about our mission, values, and vision."
        url="/about"
      />

      {/* Hero — Cinematic Opening */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-vividAzure/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary-vividAzure text-sm font-semibold tracking-widest uppercase mb-8 text-center"
            >
              Our Story
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight text-center"
            >
              <span className="text-white">CoWeave is building the future of </span>
              <span className="animated-gradient-text">enterprise-grade software development</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center mt-10 text-center"
            >
              <div className="flex-1">
                <p className="text-primary-lightAzure text-xs font-semibold tracking-widest uppercase mb-3">Mission</p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Augment and transform engineering — empowering engineers to be more productive and increase their contributions to society.
                </p>
              </div>
              <div className="hidden md:block w-px bg-primary-vividAzure/20" />
              <div className="flex-1">
                <p className="text-primary-lightAzure text-xs font-semibold tracking-widest uppercase mb-3">Vision</p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A world where software reliability is the norm. Where any team — regardless of size — can build with the consistency of the best organizations on Earth.
                </p>
              </div>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center mt-10"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-primary-vividAzure/50 text-2xl"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Name & Philosophy */}
      <AnimatedSection
        animation="fade"
        className="py-20 md:py-28 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Why "CoWeave" */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Why <span className="animated-gradient-text">CoWeave</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                <span className="text-white font-semibold">Co</span> — together.{' '}
                <span className="text-white font-semibold">Weave</span> — to interlace threads into something whole.
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Humans and AI, weaving together. Not AI replacing humans. Not humans ignoring AI. Two kinds of intelligence — carbon and silicon — interlaced into something neither could produce alone.
              </p>
            </motion.div>

            {/* Weave Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 flex justify-center"
            >
              <div className="relative w-full max-w-lg">
                {/* Labels */}
                <div className="flex justify-between mb-4 px-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary-vividAzure">Human</span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">AI</span>
                </div>

                <svg viewBox="0 0 400 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Human threads (cyan) — horizontal, weaving over/under */}
                  {[20, 50, 80, 110, 140].map((y, i) => (
                    <motion.path
                      key={`h-${i}`}
                      d={`M 0 ${y} C 50 ${y}, 50 ${y + (i % 2 === 0 ? 15 : -15)}, 100 ${y + (i % 2 === 0 ? 15 : -15)} S 150 ${y}, 200 ${y} C 250 ${y}, 250 ${y + (i % 2 === 0 ? -15 : 15)}, 300 ${y + (i % 2 === 0 ? -15 : 15)} S 350 ${y}, 400 ${y}`}
                      stroke="rgba(63, 214, 248, 0.6)"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.15, ease: 'easeInOut' }}
                    />
                  ))}

                  {/* AI threads (purple) — vertical/diagonal, weaving through */}
                  {[60, 120, 180, 240, 320].map((x, i) => (
                    <motion.path
                      key={`a-${i}`}
                      d={`M ${x} 0 C ${x + (i % 2 === 0 ? 15 : -15)} 40, ${x + (i % 2 === 0 ? -15 : 15)} 80, ${x} 80 S ${x + (i % 2 === 0 ? 15 : -15)} 120, ${x} 160`}
                      stroke="rgba(167, 139, 250, 0.6)"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 + i * 0.15, ease: 'easeInOut' }}
                    />
                  ))}

                  {/* Intersection glow dots */}
                  {[
                    [100, 35], [100, 95], [200, 20], [200, 80], [200, 140],
                    [300, 35], [300, 95], [300, 125]
                  ].map(([cx, cy], i) => (
                    <motion.circle
                      key={`dot-${i}`}
                      cx={cx}
                      cy={cy}
                      r="3"
                      fill="white"
                      opacity="0"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: [0, 0.8, 0.4], scale: [0, 1.5, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.2 + i * 0.08 }}
                    />
                  ))}
                </svg>

                {/* Subtle glow underneath */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-vividAzure/5 via-purple-500/5 to-primary-vividAzure/5 rounded-2xl blur-2xl -z-10" />
              </div>
            </motion.div>

            {/* Software as Art */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-blue/40 to-primary-indigo/40 backdrop-blur-lg border border-primary-vividAzure/20 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 text-center">
                  Software as Art
                </h3>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Software art, as Wikipedia defines the term, explores software not merely as a functional artifact but as a medium of expression — a thing that carries intention, aesthetic, and meaning in its structure.
                  </p>
                  <p>
                    The best software has always been art in this sense. It is not just code that works. It is code that reflects a <span className="text-white font-semibold">coherent pattern</span>, applied consistently from the highest architectural abstraction to the smallest implementation detail.
                  </p>

                  <div className="bg-gradient-to-r from-primary-blue/40 to-transparent border-l-2 border-primary-vividAzure/60 rounded-r-lg pl-6 py-4 my-8">
                    <p className="text-xl md:text-2xl font-heading font-bold text-primary-lightAzure leading-tight">
                      That coherence — that pattern — is what CoWeave is built to produce. Not by eliminating the human. By giving the human a loom worthy of the tapestry they are trying to weave.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Letter from the Founder */}
      <AnimatedSection
        animation="fade"
        className="py-20 md:py-28 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-vividAzure to-primary-lightAzure flex items-center justify-center text-primary-navy font-bold text-lg">
                  H
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">A Letter from Our Founder</h2>
                  <p className="text-gray-500 text-sm">Hersh Bhargava · Founder & CEO</p>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-primary-vividAzure/30 to-transparent mt-6" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
            >
              <p>
                I started CoWeave because I watched brilliant engineers waste their best hours on the wrong things.
              </p>
              <p>
                Not building. Not solving hard problems. Not shipping the features their users were waiting for. Instead, they were gathering context for AI tools. Searching through wikis and Slack threads for "how we do this." Waiting on the one person who knows the legacy system. Sitting in meetings that exist only because knowledge isn't shared.
              </p>

              <div className="bg-gradient-to-r from-primary-blue/40 to-transparent border-l-2 border-primary-vividAzure/60 rounded-r-lg pl-6 py-4 my-8">
                <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
                  Your engineers should spend their time{' '}
                  <span className="animated-gradient-text">engineering solutions</span>.
                </p>
              </div>

              <p>
                That belief is the foundation of everything we build. CoWeave weaves your team's domain knowledge — your codebase conventions, your testing standards, your architecture decisions — directly into AI agents that orchestrate the full software development lifecycle. From PRD to production.
              </p>
              <p>
                But here's what makes us different: <span className="text-white font-semibold">humans stay in control</span>. AI proposes, engineers approve. Every agent action requires explicit human review. We believe automation should amplify judgment, never replace it.
              </p>
              <p>
                That's a responsibility we take seriously. Every workflow, every automation, every line of AI-assisted code must be production-ready — because it touches real lives.
              </p>
              <p>
                The early results speak for themselves. Teams using CoWeave see up to a 3-5x increase in delivery velocity. Engineers reclaim 4+ hours per day for strategic work. Onboarding drops from months to weeks. And the quality doesn't just hold — it improves, because the process is consistent every time.
              </p>

              <div className="bg-gradient-to-r from-primary-blue/40 to-transparent border-l-2 border-primary-lightAzure/60 rounded-r-lg pl-6 py-4 my-8">
                <p className="text-xl text-primary-lightAzure font-medium">
                  We're not building another code generation tool. We're building the operating system for how great software teams work.
                </p>
              </div>

              <p>
                When we eliminate the friction of software development, we're not just saving time. We're unlocking human potential. We're enabling the next breakthrough, the next innovation, the next solution to a problem that hasn't been solved yet.
              </p>
              <p>
                That's why we wake up every morning. That's why CoWeave exists.
              </p>

              <div className="flex items-center gap-4 pt-8 mt-8 border-t border-primary-vividAzure/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-vividAzure to-primary-lightAzure flex items-center justify-center text-primary-navy font-bold">
                  H
                </div>
                <div>
                  <p className="text-white font-semibold">Hersh Bhargava</p>
                  <p className="text-gray-500 text-sm">Founder & CEO, CoWeave</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Journey — Vertical Timeline */}
      <AnimatedSection
        animation="fade"
        className="py-20 md:py-28 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              <span className="animated-gradient-text">Our Journey</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-vividAzure/60 via-primary-vividAzure/30 to-transparent" />

            <div className="space-y-12">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Icon dot */}
                  <div className="absolute left-2 md:left-4 top-0 w-8 h-8 rounded-full bg-primary-vividAzure/20 border border-primary-vividAzure/50 flex items-center justify-center shadow-[0_0_12px_rgba(63,214,248,0.4)]">
                    <milestone.icon className="w-3.5 h-3.5 text-primary-vividAzure" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 md:py-28 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">Our Values</span>
            </h2>
            <p className="text-lg text-gray-400">
              The threads that hold every weave together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary-vividAzure font-bold text-lg">{value.number}</span>
                    <value.icon className="w-5 h-5 text-primary-vividAzure" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* From Our Blog */}
      <AnimatedSection
        animation="fade"
        className="py-16 bg-gradient-to-br from-primary-navy via-primary-blue to-primary-indigo"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
              <span className="animated-gradient-text">Explore Our Thinking</span>
            </h2>
            <p className="text-gray-400 mb-10">
              Browse all CoWeave articles on engineering, AI, and the future of software teams.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
              {[
                { label: 'Getting Started', sub: 'Step-by-step guides', cat: 'tutorial' },
                { label: 'Leadership', sub: 'For engineering leaders', cat: 'leadership' },
                { label: 'Integration', sub: 'Adoption & workflows', cat: 'integration' },
                { label: 'Insights', sub: 'AI & engineering culture', cat: 'insights' },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={`/blog?category=${item.cat}`}
                  className="bg-primary-blue/20 border border-primary-vividAzure/15 rounded-xl p-4 hover:border-primary-vividAzure/40 transition-all duration-300 group"
                >
                  <p className="text-white font-semibold text-sm group-hover:text-primary-lightAzure transition-colors">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                </Link>
              ))}
            </div>

            <Link
              to="/blog"
              className="text-primary-lightAzure hover:text-white transition-colors font-medium"
            >
              Browse all articles →
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection
        animation="fade"
        className="py-24 md:py-32 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <FaMapMarkerAlt className="w-6 h-6 text-primary-vividAzure mx-auto mb-4" />
            <p className="text-xl text-white font-medium mb-1">
              Proudly based in the heart of Silicon Valley
            </p>
            <p className="text-gray-400 mb-10">
              Headquartered in Sunnyvale, CA ·{' '}
              <a href="mailto:info@coweave.ai" className="text-primary-lightAzure hover:text-white transition-colors">
                info@coweave.ai
              </a>
            </p>

            <div className="h-px w-16 bg-primary-vividAzure/20 mx-auto mb-10" />

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">
              Join us in transforming how software gets built.
            </h2>

            <GlowButton href={urls.bookDemo} variant="primary" size="large">
              Book a Demo
            </GlowButton>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
