'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Navigation from './Navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar */}
      <div className="hidden lg:block border-b border-gray-200 bg-riara-primary text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${'+254 20 234 5678'}`}
                className="flex items-center space-x-2 hover:text-riara-secondary transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+254 20 234 5678</span>
              </a>
              <a
                href={`mailto:${'info@riaraschools.ac.ke'}`}
                className="flex items-center space-x-2 hover:text-riara-secondary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>info@riaraschools.ac.ke</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/admissions"
                className="px-4 py-1 bg-white text-riara-primary rounded-full hover:bg-riara-secondary-light transition-all duration-300 font-medium"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-riara-primary rounded-lg flex items-center justify-center group-hover:bg-riara-primary-dark transition-all duration-300">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Riara Schools</h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-riara-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <Navigation mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


