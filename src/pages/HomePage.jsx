import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/Hero/Hero';
import ProblemSection from '../components/Problem/ProblemSection';
import SolutionSection from '../components/Solution/SolutionSection';
import ProductsSection from '../components/Products/ProductsSection';
import ProofSection from '../components/Proof/ProofSection';
import CTASection from '../components/CTA/CTASection';

const HomePage = () => {
  return (
    <>
      <SEO
        title="CoWeave - Production Code Done Right"
        description="CoWeave codifies your software development lifecycle with prompts and agentic workflows. Same quality, every developer, every time."
        url="/"
      />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <ProofSection />
      <CTASection />
    </>
  );
};

export default HomePage;
