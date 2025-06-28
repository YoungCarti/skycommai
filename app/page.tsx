import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white pt-20">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
        
        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-emerald-900/30"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/10 rotate-12 animate-bounce-slow"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-white/15 rotate-12 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rotate-45 animate-spin-reverse"></div>
        </div>
        
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Glowing lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-slide-right"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-slide-left"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-slide-down"></div>
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/30 to-transparent animate-slide-up"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <main className="px-6 pt-8 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              AI Powered Email,<br />
              Built to Save You Time
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Zero is an AI-native email client that manages your inbox, so you don't have to.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              No credit card required.
            </p>
            
            {/* Y Combinator Badge */}
            <div className="flex items-center justify-center space-x-2 mb-12">
              <span className="text-gray-400">Backed by</span>
              <div className="flex items-center space-x-1">
                <div className="w-5 h-5 bg-orange-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Y</span>
                </div>
                <span className="text-white font-medium">Combinator</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}