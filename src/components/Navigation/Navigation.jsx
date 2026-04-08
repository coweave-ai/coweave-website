import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import GlowButton from '../common/GlowButton';
import urls from '../../config/urls';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { label: 'Platform', href: '/platform' },
    { label: 'Features', href: '/features' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
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
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/coweave-logo-no-bg.png"
              alt="CoWeave"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation — Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
              href={urls.bookDemo}
              variant="primary"
              size="small"
            >
              Book a Demo
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
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-primary-blue/30 pt-4 space-y-3">
                <a
                  href={urls.login}
                  className="block py-2 text-gray-300 hover:text-white"
                >
                  Login
                </a>
                <GlowButton
                  href={urls.bookDemo}
                  variant="primary"
                  className="w-full"
                >
                  Book a Demo
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
