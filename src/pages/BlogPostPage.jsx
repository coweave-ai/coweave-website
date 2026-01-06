import React, { Suspense, lazy, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MDXProvider } from '@mdx-js/react';
import SEO from '../components/common/SEO';
import { mdxComponents } from '../components/blog/MDXComponents';
import { getPostBySlug } from '../../content/blog';
import { FaCalendar, FaClock, FaArrowLeft, FaTag } from 'react-icons/fa';

// Dynamic import for MDX files
const importPost = (slug) => {
  return lazy(() => import(`../../content/blog/${slug}.mdx`));
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // Dynamically import the MDX content
  const PostContent = useMemo(() => {
    if (!post) return null;
    return importPost(slug);
  }, [slug, post]);

  // If post not found, redirect to blog list
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <SEO
        title={`${post.title} - CoWeave Blog`}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
      />

      {/* Hero Section */}
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
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-lightAzure hover:text-white transition-colors mb-8"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                {post.readingTime}
              </span>
              <span>by {post.author}</span>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-vividAzure/20 text-primary-lightAzure rounded-full text-sm"
                  >
                    <FaTag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
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
                {PostContent && <PostContent />}
              </Suspense>
            </MDXProvider>
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to eliminate the variance cost?
            </h2>
            <p className="text-gray-400 mb-8">
              Start managing your context with CE Studio today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cloud"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-vividAzure text-white font-semibold rounded-xl hover:bg-primary-vividAzure/80 transition-colors"
              >
                Try CE Studio Cloud
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-vividAzure/30 text-primary-lightAzure rounded-xl hover:border-primary-vividAzure/60 transition-colors"
              >
                More Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
