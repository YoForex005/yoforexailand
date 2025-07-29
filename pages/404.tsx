import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Zap, Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Zap className="w-12 h-12 text-primary-400 mr-3" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            YoForex AI
          </span>
        </div>

        {/* 404 Message */}
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-300 mb-4">Page Not Found</h2>
        <p className="text-neutral-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="bg-transparent border-2 border-primary-500/50 text-primary-400 px-6 py-3 rounded-lg font-medium hover:bg-primary-500/10 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
          
          <Link href="/">
            <a className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow inline-flex items-center justify-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Home Page</span>
            </a>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-500 text-sm mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/features">
              <a className="text-primary-400 hover:text-primary-300 transition-colors">Features</a>
            </Link>
            <Link href="/resources">
              <a className="text-primary-400 hover:text-primary-300 transition-colors">Resources</a>
            </Link>
            <Link href="/login">
              <a className="text-primary-400 hover:text-primary-300 transition-colors">Login</a>
            </Link>
            <Link href="/signup">
              <a className="text-primary-400 hover:text-primary-300 transition-colors">Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}