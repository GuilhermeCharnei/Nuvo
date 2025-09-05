'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-graphite wood-texture">
      <div className="container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-8 left-8"
          >
            <h1 className="text-2xl font-display font-bold text-brown-indian">NUVO</h1>
            <p className="text-sm text-gray-medium">WOODWORK</p>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Wall Units que organizam,{' '}
            <span className="text-brown-indian">conectam</span> e impressionam.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-medium mb-12 max-w-2xl mx-auto">
            Design sob medida com estrutura, simplicidade e presença.
          </p>

          <motion.button
            className="bg-brown-indian hover:bg-brown-indian/90 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 animate-pulse-slow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicite seu projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}