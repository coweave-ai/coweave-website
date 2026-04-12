import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import urls from '../../config/urls';

const Footer = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  // On the public landing page we only show legal links (everything else
  // would point at the gated /preview/* routes and be bounced by middleware).
  // Inside /preview/* we show the full footer, with links rewritten to /preview/*.
  const footerLinks = isLanding
    ? {
        legal: {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Security', href: '/security' },
          ],
        },
      }
    : {
        products: {
          title: 'Product',
          links: [
            { label: 'CoWeave AI Platform', href: '/preview/platform' },
            { label: 'Features & Plans', href: '/preview/features' },
          ],
        },
        resources: {
          title: 'Resources',
          links: [
            { label: 'Documentation', href: 'https://docs.coweave.ai', external: true },
            { label: 'Blog', href: '/preview/blog' },
          ],
        },
        company: {
          title: 'Company',
          links: [
            { label: 'About', href: '/preview/about' },
            { label: 'Contact', href: '/preview/contact' },
          ],
        },
        legal: {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Security', href: '/security' },
          ],
        },
      };

  const socialLinks = [
    { icon: FaTwitter, href: '/', label: 'Twitter' },
    { icon: FaLinkedin, href: '/', label: 'LinkedIn' },
    { icon: FaGithub, href: '/', label: 'GitHub' },
  ];

  const renderLink = (link) => {
    if (link.external) {
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary-lightAzure transition-colors"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.label}
        to={link.href}
        className="text-gray-400 hover:text-primary-lightAzure transition-colors"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="bg-primary-navy border-t border-primary-vividAzure/20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link to="/" className="inline-block mb-4">
                <img
                  src="/assets/coweave-logo-no-bg.png"
                  alt="CoWeave"
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-4 max-w-xs">
                Codify your SDLC.
              </p>
              <a
                href="mailto:hello@coweave.ai"
                className="text-gray-400 hover:text-primary-lightAzure transition-colors text-sm"
              >
                hello@coweave.ai
              </a>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    to={social.href}
                    className="text-gray-400 hover:text-primary-vividAzure transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label} className="text-sm">
                      {renderLink(link)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-vividAzure/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CoWeave.ai. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
