'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg"
          alt="Luxury Interior Design"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 z-20 p-8"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="NUVO WOODWORK"
              width={150}
              height={50}
              className="brightness-0 invert"
            />
          </div>
          
          <button
            className="hidden md:block bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Get Free Quote
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Wall Units That
            <br />
            <span className="gradient-text">Transform Spaces</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Custom wall units that organize, connect, and impress. 
            From entertainment centers to storage solutions, we create architectural elements that integrate seamlessly with your space.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </button>
            
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              View Portfolio
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[var(--color-secondary)] rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[var(--color-secondary)] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-20 left-0 right-0 z-10"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">30+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">4K+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">98%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">4.9</div>
              <div className="text-sm opacity-80">Client Rating</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}