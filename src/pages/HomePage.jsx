import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/Hero/Hero';
import ProblemSection from '../components/Problem/ProblemSection';
import DiagnosticQuestionsSection from '../components/DiagnosticQuestions/DiagnosticQuestionsSection';
import SolutionSection from '../components/Solution/SolutionSection';
import HowItWorksSection from '../components/HowItWorks/HowItWorksSection';
import ProductsSection from '../components/Products/ProductsSection';
import ProofSection from '../components/Proof/ProofSection';
import RightForYouSection from '../components/RightForYou/RightForYouSection';
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
      <DiagnosticQuestionsSection />
      <SolutionSection />
      <HowItWorksSection />
      <ProductsSection />
      <ProofSection />
      <RightForYouSection />
      <CTASection />
    </>
  );
};

export default HomePage;
