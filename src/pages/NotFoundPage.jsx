import React from 'react';
import SEO from '../components/common/SEO';
import GlowButton from '../components/common/GlowButton';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Page Not Found | CoWeave"
        description="The page you're looking for doesn't exist."
        url="/404"
        noindex={true}
      />
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-8xl md:text-9xl font-heading font-bold mb-4">
              <span className="animated-gradient-text">404</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton to="/" variant="primary">
                Go Home
              </GlowButton>
              <GlowButton to="/contact" variant="secondary">
                Contact Support
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
