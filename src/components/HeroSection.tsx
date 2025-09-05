'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-graphite wood-texture overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg"
          alt="NUVO WOODWORK - Luxury Living Room"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 to-graphite/60" />
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-8 left-8"
          >
            <Image
              src="/images/logo.png"
              alt="NUVO WOODWORK Logo"
              width={120}
              height={40}
              className="brightness-0 invert"
            />
          </motion.div>

          {/* Welcome Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-brown-indian text-lg font-medium mb-6 tracking-wide"
          >
            Welcome to NUVO
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight"
          >
            Where Wood Becomes{' '}
            <span className="text-brown-indian">Art</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-beige-light mb-12 max-w-3xl mx-auto font-light"
          >
            Bespoke Furniture & Millwork for Discerning Spaces
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-brown-indian hover:bg-brown-indian/90 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(152, 100, 33, 0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us Now For a Free Quote
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-brown-indian rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-brown-indian rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}