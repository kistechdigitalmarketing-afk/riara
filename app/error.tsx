'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We&apos;re sorry for the inconvenience. An error occurred while loading this page. 
          Please try again or return to the homepage.
        </p>
        {error.digest && (
          <p className="text-sm text-gray-500 mb-6">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            variant="primary"
            size="lg"
          >
            <RefreshCw className="mr-2 w-5 h-5" />
            Try Again
          </Button>
          <Button
            asLink
            href="/"
            variant="outline"
            size="lg"
          >
            <Home className="mr-2 w-5 h-5" />
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}


