'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-9xl font-bold text-primary-600 mb-4"
          >
            404
          </motion.h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Please check the URL or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asLink
              href="/"
              variant="primary"
              size="lg"
            >
              <Home className="mr-2 w-5 h-5" />
              Go to Homepage
            </Button>
            <Button
              asLink
              href="/contact"
              variant="outline"
              size="lg"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


