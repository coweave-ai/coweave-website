import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes, FaCloud, FaBuilding } from 'react-icons/fa';
import GlowButton from '../common/GlowButton';
import urls from '../../config/urls';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ];

  const productLinks = [
    {
      label: 'PO Studio Cloud',
      description: 'Managed SaaS solution',
      href: '/cloud',
      icon: FaCloud,
    },
    {
      label: 'PO Studio Enterprise',
      description: 'Self-hosted with n8n',
      href: '/enterprise',
      icon: FaBuilding,
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-navy/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/coweave-logo-no-bg.png"
              alt="CoWeave"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Products</span>
                <FaChevronDown
                  className={`w-3 h-3 transition-transform ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-primary-blue/95 backdrop-blur-lg rounded-xl shadow-xl border border-primary-vividAzure/20 overflow-hidden"
                  >
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        to={product.href}
                        className="flex items-start gap-4 p-4 hover:bg-primary-vividAzure/10 transition-colors"
                      >
                        <div className="p-2 bg-primary-vividAzure/20 rounded-lg">
                          <product.icon className="w-5 h-5 text-primary-vividAzure" />
                        </div>
                        <div>
                          <span className="block font-medium text-white">
                            {product.label}
                          </span>
                          <span className="text-sm text-gray-400">
                            {product.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Auth + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={urls.login}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Login
            </a>
            <GlowButton
              href={urls.signup}
              variant="primary"
              size="small"
            >
              Start Free
            </GlowButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-navy/95 backdrop-blur-lg border-t border-primary-blue/30"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              <div className="space-y-2">
                <span className="text-sm text-gray-500 uppercase tracking-wider">
                  Products
                </span>
                {productLinks.map((product) => (
                  <Link
                    key={product.href}
                    to={product.href}
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    {product.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-primary-blue/30 pt-4 space-y-2">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-gray-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 text-gray-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <div className="border-t border-primary-blue/30 pt-4 space-y-3">
                <a
                  href={urls.login}
                  className="block py-2 text-gray-300 hover:text-white"
                >
                  Login
                </a>
                <GlowButton
                  href={urls.signup}
                  variant="primary"
                  className="w-full"
                >
                  Start Free
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
