'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHome, FaUtensils, FaCouch, FaBriefcase, FaDoorOpen, FaTshirt } from 'react-icons/fa'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const services = [
    {
      icon: FaCouch,
      title: 'Entertainment Wall Units',
      description: 'Custom entertainment centers that integrate TV, storage, and display in one cohesive design.',
      features: ['Built-in Media Storage', 'Integrated Lighting', 'Hidden Cable Management', 'Custom Shelving']
    },
    {
      icon: FaBriefcase,
      title: 'Office Wall Units',
      description: 'Productive workspace solutions with built-in storage, shelving, and organizational systems.',
      features: ['Built-in Desks', 'Storage Solutions', 'Display Shelving', 'Cable Management']
    },
    {
      icon: FaUtensils,
      title: 'Kitchen Wall Units',
      description: 'Custom kitchen wall installations that maximize storage while maintaining elegant design.',
      features: ['Upper Cabinetry', 'Open Shelving', 'Integrated Lighting', 'Display Areas']
    },
    {
      icon: FaHome,
      title: 'Living Room Wall Units',
      description: 'Sophisticated living spaces with integrated storage, display, and architectural elements.',
      features: ['Display Shelving', 'Storage Solutions', 'Accent Lighting', 'Architectural Details']
    },
    {
      icon: FaDoorOpen,
      title: 'Bedroom Wall Units',
      description: 'Space-saving bedroom solutions with built-in storage and elegant design elements.',
      features: ['Built-in Wardrobes', 'Display Areas', 'Storage Solutions', 'Lighting Integration']
    },
    {
      icon: FaTshirt,
      title: 'Custom Wall Storage',
      description: 'Tailored storage solutions that transform any wall into functional and beautiful space.',
      features: ['Custom Shelving', 'Hidden Storage', 'Display Areas', 'Integrated Systems']
    }
  ]

  return (
    <section className="py-24 bg-gradient-luxury wood-texture" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-secondary)] text-lg font-semibold tracking-wide mb-4 block">
            WALL UNIT TYPES
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Wall Unit Solutions
            <span className="text-[var(--color-secondary)]"> For Every Space</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From entertainment centers to storage solutions, we create custom wall units 
            that organize, connect, and impress in every room of your home.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[var(--color-secondary)]/50 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-center text-gray-300 text-sm"
                  >
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Ready for your custom wall unit?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(196, 165, 116, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Get Your Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}