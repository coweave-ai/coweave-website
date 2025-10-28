import React from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary-navy border-t border-primary-vividAzure/20 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Logo */}
          <img
            src="/assets/coweave-logo-no-bg.png"
            alt="CoWeave Logo"
            className="w-12 h-12 opacity-80"
          />

          {/* Contact */}
          <div className="text-center">
            <a
              href="mailto:contact@coweave.ai"
              className="text-gray-400 hover:text-primary-vividAzure transition-colors text-sm"
            >
              contact@coweave.ai
            </a>
          </div>

          {/* Social Links */}
          {/* <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-vividAzure transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-vividAzure transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-vividAzure transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div> */}

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm pt-6 border-t border-primary-vividAzure/10 w-full">
            <p>© {new Date().getFullYear()} CoWeave.ai. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
