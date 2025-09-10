'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAward, FaCog, FaLeaf, FaUsers } from 'react-icons/fa'

export default function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: FaAward,
      title: "Custom Wall Units",
      description: "Precision-engineered wall installations that integrate seamlessly with your architecture."
    },
    {
      icon: FaCog,
      title: "Integrated Lighting",
      description: "Built-in LED systems and smart lighting solutions that enhance your wall unit's functionality."
    },
    {
      icon: FaLeaf,
      title: "Premium Materials",
      description: "High-grade woods, stone accents, and metal details for lasting beauty and durability."
    },
    {
      icon: FaUsers,
      title: "Complete Installation",
      description: "From design to installation, we handle every aspect of your wall unit project."
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-light)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[var(--color-accent)] text-lg font-semibold tracking-wide">
                WALL UNIT SPECIALISTS
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[var(--color-primary)] mb-6 lg:mb-8 leading-tight"
            >
              Wall Units as
              <span className="gradient-text"> Architectural Art</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-[var(--color-gray)] mb-8 lg:mb-12 leading-relaxed"
            >
              At NUVO, wall units aren't furniture—they're architectural elements. Founded by Eduardo Ramos, 
              we specialize in creating custom wall installations that blend seamlessly with your space's 
              architecture while providing sophisticated storage and display solutions.
            </motion.p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 animate-fade-in-up"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center animate-float">
                    <feature.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-gray)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-luxury"
                >
                  <img
                    src="/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg"
                    alt="Luxury Kitchen Design"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 rounded-2xl overflow-hidden shadow-luxury"
                >
                  <img
                    src="/images/imgi_16_537905886_18076992200493478_4499625465287494593_n_1757111152302.jpg"
                    alt="Custom Woodwork Detail"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="space-y-6 pt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 rounded-2xl overflow-hidden shadow-luxury"
                >
                  <img
                    src="/images/imgi_10_539858318_615257668134300_4100570420848379988_n_1757111152298.jpg"
                    alt="Entertainment Center"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-luxury"
                >
                  <img
                    src="/images/imgi_9_541880794_18077731115493478_1184188163504688235_n_1757111152300.jpg"
                    alt="Dining Room Design"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-luxury"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">ER</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)]">Eduardo Ramos</h4>
                  <p className="text-sm text-[var(--color-gray)]">Master Craftsman & Founder</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}