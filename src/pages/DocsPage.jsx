import React, { Suspense, lazy, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MDXProvider } from '@mdx-js/react';
import SEO from '../components/common/SEO';
import { mdxComponents } from '../components/blog/MDXComponents';
import { getDocBySlug, docCategories } from '../../content/docs';
import { FaClock, FaArrowLeft, FaBookOpen } from 'react-icons/fa';

// Dynamic import for MDX files in content/docs
const importDoc = (slug) => {
  return lazy(() => import(`../../content/docs/${slug}.mdx`));
};

const DocsPage = () => {
  const { slug } = useParams();
  const doc = getDocBySlug(slug);

  const DocContent = useMemo(() => {
    if (!doc) return null;
    return importDoc(slug);
  }, [slug, doc]);

  if (!doc) {
    return <Navigate to="/preview/docs" replace />;
  }

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <>
      <SEO
        title={`${doc.title} - CoWeave Docs`}
        description={doc.excerpt}
        url={`/preview/docs/${doc.slug}`}
        noindex={true}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Back link */}
            <Link
              to="/preview/docs"
              className="inline-flex items-center gap-2 text-primary-lightAzure hover:text-white transition-colors mb-8"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Docs
            </Link>

            {/* Category */}
            {doc.category && (
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-primary-vividAzure/20 text-primary-lightAzure rounded-full mb-4">
                <FaBookOpen className="w-3 h-3" />
                {docCategories[doc.category]?.name || doc.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {doc.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              {doc.readingTime && (
                <span className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  {doc.readingTime}
                </span>
              )}
              {doc.lastUpdated && (
                <span>Updated {formatDate(doc.lastUpdated)}</span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-primary-navy">
        <div className="container mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg"
          >
            <MDXProvider components={mdxComponents}>
              <Suspense
                fallback={
                  <div className="text-center py-12">
                    <div className="animate-pulse text-primary-lightAzure">
                      Loading...
                    </div>
                  </div>
                }
              >
                {DocContent && <DocContent />}
              </Suspense>
            </MDXProvider>
          </motion.article>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-12 bg-primary-blue/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link
              to="/preview/docs"
              className="inline-flex items-center gap-2 text-primary-lightAzure hover:text-white transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              All docs
            </Link>
            <a
              href="https://cal.com/hersh-bhargava-1wdmf9/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-vividAzure text-white font-semibold rounded-xl hover:bg-primary-vividAzure/80 transition-colors"
            >
              Stuck? Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocsPage;
