"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-black/80 border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="text-white font-bold text-xl">skycomm ai</div>
            </div>
            {/* Divider line after logo */}
            <div className="hidden md:block h-6 w-px bg-gray-600 ml-6"></div>
          </div>
          
          {/* Desktop Navigation - Left side */}
          <nav className="hidden md:flex items-center space-x-8 ml-12">
            <div className="flex items-center space-x-1 cursor-pointer group">
              <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm">Product</span>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 text-sm">Blog</span>
            <span className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 text-sm">Docs</span>
          </nav>

          {/* Desktop Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Divider line */}
            <div className="h-6 w-px bg-gray-600"></div>
            
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium transition-all duration-200 hover:bg-gray-200 text-sm">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-gray-300 hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50 bg-black/80 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-4">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Product</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="block text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 text-sm">Blog</span>
              <span className="block text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 text-sm">Docs</span>
              <button className="w-full bg-white text-black px-4 py-2 rounded-md font-medium transition-all duration-200 hover:bg-gray-200 text-sm mt-3">
                Get started
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
