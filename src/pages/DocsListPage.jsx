import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { getAllDocs, docCategories } from '../../content/docs';
import {
  FaClock,
  FaSearch,
  FaBook,
  FaServer,
  FaCogs,
  FaBookOpen,
} from 'react-icons/fa';

// Icon mapping for category cards
const iconMap = {
  FaBook,
  FaServer,
  FaCogs,
  FaBookOpen,
};

const DocsListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const allDocs = getAllDocs();

  const filteredDocs = useMemo(() => {
    let list = allDocs;

    if (activeCategory !== 'all') {
      list = list.filter((d) => d.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.excerpt.toLowerCase().includes(q)
      );
    }

    return list;
  }, [allDocs, activeCategory, searchQuery]);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const currentCategory = docCategories[activeCategory];

  return (
    <>
      <SEO
        title="Docs - CoWeave"
        description="Setup, installation, operations, and reference documentation for the CoWeave platform."
        url="/preview/docs"
        noindex={true}
      />

      {/* Hero */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-primary-navy via-primary-indigo to-primary-blue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="animated-gradient-text">Docs</span>
            </h1>
            <p className="text-xl text-gray-300">
              Setup, installation, operations, and reference for the CoWeave platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-8 bg-gradient-to-b from-primary-indigo/50 to-primary-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {Object.entries(docCategories).map(([key, category], index) => {
                const IconComponent = iconMap[category.icon];
                const isActive = activeCategory === key;

                return (
                  <motion.button
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setActiveCategory(key)}
                    className={`group relative flex flex-col items-center justify-center p-3 md:p-4 rounded-xl min-w-[100px] md:min-w-[130px] transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-primary-vividAzure to-primary-blue border-2 border-primary-lightAzure shadow-lg shadow-primary-vividAzure/25'
                        : 'bg-primary-blue/40 border border-primary-vividAzure/20 hover:border-primary-vividAzure/50 hover:bg-primary-blue/60'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-primary-vividAzure/20 blur-xl -z-10" />
                    )}

                    <div
                      className={`mb-2 p-2 rounded-lg ${
                        isActive
                          ? 'bg-white/20'
                          : 'bg-primary-vividAzure/10 group-hover:bg-primary-vividAzure/20'
                      } transition-colors`}
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            isActive ? 'text-white' : 'text-primary-lightAzure'
                          }`}
                        />
                      )}
                    </div>

                    <span
                      className={`font-semibold text-xs md:text-sm ${
                        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      } transition-colors`}
                    >
                      {category.name}
                    </span>

                    <span
                      className={`hidden md:block text-[10px] mt-1 text-center max-w-[110px] ${
                        isActive ? 'text-white/80' : 'text-gray-500'
                      }`}
                    >
                      {category.description}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="activeDocCategoryDot"
                        className="absolute -bottom-1 w-1.5 h-1.5 bg-primary-lightAzure rounded-full"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-primary-navy border-b border-primary-vividAzure/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-primary-blue/30 border border-primary-vividAzure/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-vividAzure/50 transition-colors"
                />
              </div>
            </motion.div>

            <p className="text-gray-500 text-sm">
              {filteredDocs.length} {filteredDocs.length === 1 ? 'doc' : 'docs'}
              {searchQuery && ` matching "${searchQuery}"`}
              {activeCategory !== 'all' && ` in ${currentCategory.name}`}
            </p>
          </div>
        </div>
      </section>

      {/* Doc list */}
      <section className="py-12 bg-primary-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredDocs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-400">
                  {searchQuery
                    ? `No docs found matching "${searchQuery}"`
                    : 'No docs in this category yet.'}
                </p>
                {(searchQuery || activeCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="mt-4 text-primary-vividAzure hover:text-primary-lightAzure transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </motion.div>
            ) : (
              <div className="space-y-6">
                {filteredDocs.map((doc, index) => (
                  <motion.article
                    key={doc.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/preview/docs/${doc.slug}`}
                      className="block bg-primary-blue/30 backdrop-blur-lg border border-primary-vividAzure/20 rounded-xl p-6 md:p-8 hover:border-primary-vividAzure/50 hover:bg-primary-blue/40 transition-all duration-300 group"
                    >
                      {doc.category && (
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-vividAzure/20 text-primary-lightAzure rounded-full mb-3">
                          {docCategories[doc.category]?.name || doc.category}
                        </span>
                      )}

                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary-lightAzure transition-colors">
                        {doc.title}
                      </h2>

                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {doc.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        {doc.readingTime && (
                          <span className="flex items-center gap-2">
                            <FaClock className="w-3 h-3" />
                            {doc.readingTime}
                          </span>
                        )}
                        {doc.lastUpdated && (
                          <span>Updated {formatDate(doc.lastUpdated)}</span>
                        )}
                      </div>

                      <div className="mt-4 text-primary-vividAzure group-hover:text-primary-lightAzure transition-colors text-sm font-medium">
                        Read doc →
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

export default DocsListPage;
