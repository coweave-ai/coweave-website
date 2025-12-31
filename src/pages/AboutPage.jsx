import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';
import AnimatedSection from '../components/common/AnimatedSection';
import GlassCard from '../components/common/GlassCard';
import urls from '../config/urls';
import {
  FaHeart,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: FaShieldAlt,
      title: 'Integrity First',
      description: 'We hold ourselves to the highest standards of quality, security, and data privacy—forging a foundation of unwavering integrity in everything we build.'
    },
    {
      icon: FaHeart,
      title: 'People at the Core',
      description: 'We believe that helping people is the core of what we do. Every feature, every workflow, every decision starts with how it serves our users.'
    },
    {
      icon: FaRocket,
      title: 'Boldness & Curiosity',
      description: 'Our culture is one of boldness, curiosity, and relentless support. We ask "why not?" and push boundaries to transform what\'s possible.'
    },
    {
      icon: FaHandshake,
      title: 'Partnership Over Product',
      description: 'We\'re not just building automation. We\'re partnering with engineering leaders to transform how software gets built—faster, more reliably, and with happier teams.'
    }
  ];

  const journeyMilestones = [
    {
      title: 'The Spark',
      description: 'We watched brilliant engineers spend hours gathering context, searching through wikis, waiting for the one person who knows the legacy system. We knew there had to be a better way.'
    },
    {
      title: 'The Mission',
      description: 'We started with a simple belief: augment and transform engineering to empower engineers to be more productive and increase their contributions to society.'
    },
    {
      title: 'The Foundation',
      description: 'Software reliability became our cornerstone. If AI was going to help build software, it needed to produce code that was production-ready, tested, and consistent—every single time.'
    },
    {
      title: 'The Vision',
      description: 'Today, we\'re building the future where engineering teams tackle audacious visions—unencumbered by context gathering, variance costs, and coordination overhead.'
    }
  ];

  return (
    <>
      <SEO
        title="About CoWeave - Empowering Engineers to Build What Matters"
        description="CoWeave is transforming how software gets built. Learn about our mission to augment engineering teams and help them tackle audacious visions."
        url="/about"
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
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">About CoWeave</span>
            </h1>
            <p className="text-2xl text-white font-medium mb-4">
              Empowering Engineers to Build What Matters
            </p>
            <p className="text-xl text-gray-300">
              We're on a mission to transform how teams build software—so engineers can focus on engineering, not overhead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Belief Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-blue/40 to-primary-indigo/40 backdrop-blur-lg border border-primary-vividAzure/30 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
                <span className="animated-gradient-text">What We Believe</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  At CoWeave, we believe your engineers should spend their time <span className="text-white font-semibold">engineering</span>.
                </p>
                <p>
                  Not gathering context for AI. Not searching for "how we do this." Not waiting for reviews from the one person who knows the legacy system.
                </p>
                <p className="text-xl text-primary-lightAzure font-medium">
                  We exist to empower your engineering teams to tackle audacious visions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Story Section */}
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
              <span className="animated-gradient-text">Our Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From a simple observation to a transformative mission
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary-vividAzure flex items-center justify-center text-primary-navy font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-400">{milestone.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-vividAzure/20 rounded-lg">
                    <FaLightbulb className="w-6 h-6 text-primary-vividAzure" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To augment and transform engineering, empowering engineers to be more productive and increase their contributions to society. We believe that when engineers spend less time on overhead, they build software that changes the world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-vividAzure/20 rounded-lg">
                    <FaGlobe className="w-6 h-6 text-primary-vividAzure" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A world where software reliability is the norm, not the exception. Where engineering teams—regardless of size—can build with the consistency and quality of the best organizations on Earth. Where technology serves humanity through better, more reliable software.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Software Reliability Section */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Software </span>
              <span className="animated-gradient-text">Reliability</span>
              <span className="text-white"> is Our Cornerstone</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The software we help build runs hospitals, manages finances, powers communication, and connects communities. We take that responsibility seriously. Every workflow, every automation, every line of AI-assisted code must be production-ready—because the software our customers build touches real lives.
            </p>
            <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6">
              <p className="text-primary-lightAzure text-lg font-medium">
                "Increasing software reliability isn't just our goal—it's who we are. It's in every design decision, every feature, every partnership."
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
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
              <span className="animated-gradient-text">Our Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-vividAzure/20 rounded-lg flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-vividAzure" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Helping Humanity Section */}
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-vividAzure/20 rounded-2xl">
                  <FaUsers className="w-10 h-10 text-primary-vividAzure" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="animated-gradient-text">Building for Good</span>
              </h2>
            </div>

            <div className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8 md:p-10">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  We believe technology should serve humanity. Every engineering team we help becomes more productive, but more importantly, they become capable of building software that matters—healthcare systems that save lives, platforms that connect communities, tools that empower individuals.
                </p>
                <p>
                  When we eliminate the friction of software development, we're not just saving time. We're unlocking human potential. We're enabling the next breakthrough, the next innovation, the next solution to a problem that hasn't been solved yet.
                </p>
                <p className="text-primary-lightAzure font-medium">
                  That's why we wake up every morning. That's why we're relentlessly focused on quality. That's why CoWeave exists.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Location & Contact Section */}
      <AnimatedSection
        animation="fade"
        className="py-20 bg-primary-navy"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="animated-gradient-text">Where We Are</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary-vividAzure" />
                <p className="text-xl text-white font-medium">
                  Proudly part of Silicon Valley
                </p>
              </div>
              <p className="text-gray-400 mb-8">
                CoWeave is headquartered in Sunnyvale, California
              </p>

              <div className="border-t border-primary-vividAzure/20 pt-8">
                <p className="text-gray-400 mb-4">
                  For corporate, partnership, or media inquiries:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <a
                    href="mailto:info@coweave.ai"
                    className="flex items-center gap-2 text-primary-lightAzure hover:text-white transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    info@coweave.ai
                  </a>
                  <a
                    href="https://www.coweave.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-lightAzure hover:text-white transition-colors"
                  >
                    <FaGlobe className="w-4 h-4" />
                    www.coweave.ai
                  </a>
                </div>
              </div>
            </motion.div>
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
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-white">Join Us on </span>
              <span className="animated-gradient-text">This Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're looking to transform how your team builds software or want to learn more about what we do, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                href={urls.signup}
                variant="primary"
                size="large"
              >
                Get Started Free
              </GlowButton>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-lightAzure hover:text-white border border-primary-vividAzure/30 hover:border-primary-vividAzure/60 rounded-xl transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
