import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/Hero/Hero';
import ProductShowcaseSection from '../components/ProductShowcase/ProductShowcaseSection';
import BenefitsSection from '../components/Benefits/BenefitsSection';
import ProblemSection from '../components/Problem/ProblemSection';
import ProofSection from '../components/Proof/ProofSection';
import ProductsSection from '../components/Products/ProductsSection';
import RightForYouSection from '../components/RightForYou/RightForYouSection';
import CTASection from '../components/CTA/CTASection';

const HomePage = () => {
  return (
    <>
      <SEO
        title="CoWeave - Build Enterprise-Grade Software Fast | AI-Powered SDLC Automation"
        description="CoWeave codifies your software development lifecycle with prompts and agentic workflows. Same quality, every developer, every time."
        keywords="AI coding tools, SDLC automation, agentic workflows, context engineering, developer productivity, AI code generation, enterprise software, test-driven development, CoWeave, Context Engineering Studio"
        url="/preview"
        noindex={true}
      />
      <Hero />
      <ProductShowcaseSection />
      <BenefitsSection />
      <ProblemSection />
      <ProofSection />
      <ProductsSection />
      <RightForYouSection />
      <CTASection />
    </>
  );
};

export default HomePage;
