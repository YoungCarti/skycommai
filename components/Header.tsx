"use client";

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 sm:px-6">
      <header className="relative backdrop-blur-xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border border-slate-700/40 rounded-2xl shadow-2xl shadow-black/50">
        {/* Multi-layered background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-emerald-900/5 to-blue-900/10 rounded-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 rounded-2xl"></div>
        
        {/* Inner glow effect */}
        <div className="absolute inset-[1px] bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-2xl"></div>
        
        <div className="relative flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-200 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-black font-bold text-sm">Z</span>
            </div>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer px-3 py-1.5 transition-all duration-300 hover:scale-105 group">
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">About</span>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer px-3 py-1.5 transition-all duration-300 hover:scale-105 group">
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">Gallery</span>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-gray-300 cursor-pointer px-3 py-1.5 transition-all duration-300 hover:scale-105 hover:text-white text-sm">Pricing</span>
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative overflow-hidden bg-gradient-to-r from-white to-gray-100 text-black px-4 py-1.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 group text-sm flex items-center">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-gray-300 hover:text-white transition-colors duration-300"
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
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border border-slate-700/40 rounded-2xl shadow-2xl shadow-black/50">
            <div className="px-4 py-3 space-y-3">
              <div className="flex items-center space-x-1 cursor-pointer px-3 py-2 hover:bg-white/5 rounded-lg transition-all duration-300 group">
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">About</span>
                <svg className="w-3 h-3 text-gray-400 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer px-3 py-2 hover:bg-white/5 rounded-lg transition-all duration-300 group">
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">Gallery</span>
                <svg className="w-3 h-3 text-gray-400 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="text-gray-300 cursor-pointer px-3 py-2 hover:bg-white/5 rounded-lg transition-all duration-300 hover:text-white text-sm block">Pricing</span>
              <button className="w-full bg-gradient-to-r from-white to-gray-100 text-black px-4 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20 text-sm mt-3">
                Login
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
