'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { FaAward, FaCog, FaLeaf, FaUsers } from 'react-icons/fa'

export default function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const features = [
    {
      icon: FaAward,
      title: "Master Craftsmanship",
      description: "30 years of Italian-Brazilian woodworking heritage refined through American precision and innovation."
    },
    {
      icon: FaCog,
      title: "Advanced Technology",
      description: "CNC precision meets traditional hand-finishing for flawless results that stand the test of time."
    },
    {
      icon: FaLeaf,
      title: "Sustainable Materials",
      description: "Premium woods sourced responsibly, ensuring both beauty and environmental consciousness."
    },
    {
      icon: FaUsers,
      title: "Personal Service",
      description: "From concept to completion, our dedicated team ensures your vision becomes reality."
    }
  ]

  return (
    <section className="py-24 bg-[var(--color-light)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                OUR EXPERTISE
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold text-[var(--color-primary)] mb-8 leading-tight"
            >
              Where Heritage Meets
              <span className="gradient-text"> Innovation</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[var(--color-gray)] mb-12 leading-relaxed"
            >
              Founded by master craftsman Eduardo Ramos, NUVO represents the perfect fusion of 
              old-world artistry and modern innovation. Every piece we create tells a story 
              of passion, precision, and uncompromising quality.
            </motion.p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center">
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
                  <Image
                    src="/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg"
                    alt="Luxury Kitchen Design"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 rounded-2xl overflow-hidden shadow-luxury"
                >
                  <Image
                    src="/images/imgi_16_537905886_18076992200493478_4499625465287494593_n_1757111152302.jpg"
                    alt="Custom Woodwork Detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
              
              <div className="space-y-6 pt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 rounded-2xl overflow-hidden shadow-luxury"
                >
                  <Image
                    src="/images/imgi_10_539858318_615257668134300_4100570420848379988_n_1757111152298.jpg"
                    alt="Entertainment Center"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-luxury"
                >
                  <Image
                    src="/images/imgi_9_541880794_18077731115493478_1184188163504688235_n_1757111152300.jpg"
                    alt="Dining Room Design"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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