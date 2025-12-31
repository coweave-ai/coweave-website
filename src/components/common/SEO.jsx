import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'CoWeave - Production Code Done Right',
  description = 'CoWeave codifies your software development lifecycle with prompts and agentic workflows. Same quality, every developer, every time.',
  keywords = 'AI coding tools, software development lifecycle, SDLC automation, agentic workflows, prompt engineering, developer productivity, CoWeave',
  image = '/assets/coweave-logo-no-bg.png',
  url,
  type = 'website',
  noindex = false,
}) => {
  const siteUrl = 'https://coweave.ai';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="CoWeave" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="CoWeave - AI-Powered SDLC Automation" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CoWeave" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@coweaveai" />
      <meta name="twitter:creator" content="@coweaveai" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
