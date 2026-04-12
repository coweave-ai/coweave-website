import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/Hero/Hero';
import ProblemSection from '../components/Problem/ProblemSection';
import ImpactSection from '../components/Impact/ImpactSection';
import ProofSection from '../components/Proof/ProofSection';
import SolutionSection from '../components/Solution/SolutionSection';
import RightForYouSection from '../components/RightForYou/RightForYouSection';
import BookCallSection from '../components/BookCall/BookCallSection';

/**
 * Public landing page at /.
 *
 * Stealth-mode composition: problem framing → real results → concrete proof →
 * conceptual solution → who it's for → Book a Call CTA. Deliberately omits
 * product screenshots, feature deep-dives, and CE Studio specifics — those
 * live under /preview/* behind the middleware gate.
 */
const LandingPage = () => {
  return (
    <>
      <SEO
        title="CoWeave — AI-Assisted SDLC for Enterprise Teams"
        description="Codify your SDLC with prompts and agentic workflows. 4× faster development, 75% MTTR reduction, 85%+ test coverage — in production today."
        keywords="AI SDLC automation, agentic workflows, prompt engineering, enterprise software delivery, CoWeave"
        url="/"
      />
      <Hero />
      <ProblemSection />
      <ImpactSection />
      <ProofSection />
      <SolutionSection />
      <RightForYouSection />
      <BookCallSection />
    </>
  );
};

export default LandingPage;
