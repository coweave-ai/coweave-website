import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { getAllPosts } from '../../content/blog';
import { FaCalendar, FaClock, FaTag } from 'react-icons/fa';

const BlogListPage = () => {
  const posts = getAllPosts();

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
        title="Blog - CoWeave"
        description="Insights on AI-assisted development, prompt engineering, and production-grade code practices from the CoWeave team."
        url="/blog"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300">
              Insights on AI-assisted development, prompt engineering, and production-grade code practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-primary-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-400">
                  No posts yet. Check back soon!
                </p>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-8 hover:border-primary-vividAzure/50 transition-all duration-300 group"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary-lightAzure transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                          <FaCalendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaClock className="w-4 h-4" />
                          {post.readingTime}
                        </span>
                        {post.tags && post.tags.length > 0 && (
                          <span className="flex items-center gap-2">
                            <FaTag className="w-4 h-4" />
                            {post.tags.slice(0, 3).join(', ')}
                          </span>
                        )}
                      </div>

                      <div className="mt-6 text-primary-vividAzure group-hover:text-primary-lightAzure transition-colors">
                        Read more →
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogListPage;
