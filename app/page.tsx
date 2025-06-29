"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-full relative overflow-hidden text-white">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0 min-h-full">
        {/* Base gradient */}
        <div className="absolute inset-0 min-h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
        
        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 min-h-full bg-gradient-to-tr from-blue-900/30 via-transparent to-emerald-900/30"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 min-h-full opacity-5">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.div 
            className="absolute top-40 right-32 w-24 h-24 border border-white/10 rotate-12"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-32 left-1/3 w-40 h-40 border border-white/15 rotate-12"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rotate-45"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>
        
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 min-h-full opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 min-h-full">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
            ></motion.div>
          ))}
        </div>
        
        {/* Glowing lines */}
        <div className="absolute inset-0 min-h-full overflow-hidden">
          <motion.div 
            className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/30 to-transparent"
            animate={{ y: ["100%", "-100%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header />

        {/* Hero Section */}
        <motion.main 
          className="px-6 pt-24 pb-8"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
             Welcome,<br />
              Hello
            </motion.h1>
            <motion.p 
              className="text-sm text-gray-500 mb-8"
              variants={itemVariants}
            >
              No credit card required.
            </motion.p>
          </div>
        </motion.main>
        
        {/* Hero Section */}
        <main className="px-6 pt-24 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
             Welcome,<br />
              Hello
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              No credit card required
            </p>
          </div>
        </main>
        
        {/* Hero Section */}
        <motion.main 
          className="px-6 pt-24 pb-8"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
             Welcome,<br />
              Hello
            </motion.h1>
            <motion.p 
              className="text-sm text-gray-500 mb-8"
              variants={itemVariants}
            >
              No credit card required.
            </motion.p>
          </div>
        </motion.main>
      </motion.div>
    </div>
  );
}