'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function ProjectShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Modern Entertainment Center',
      category: 'living',
      image: '/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg',
      description: 'Sophisticated entertainment wall with integrated lighting and marble accents'
    },
    {
      id: 2,
      title: 'Luxury Kitchen Design',
      category: 'kitchen',
      image: '/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg',
      description: 'Contemporary kitchen featuring premium wood finishes and custom cabinetry'
    },
    {
      id: 3,
      title: 'Elegant Staircase Feature',
      category: 'architectural',
      image: '/images/imgi_6_543839574_797280436173673_2519557351358427065_n_1757111152298.jpg',
      description: 'Custom staircase design blending modern aesthetics with functional elegance'
    },
    {
      id: 4,
      title: 'Display Shelving System',
      category: 'living',
      image: '/images/imgi_10_539858318_615257668134300_4100570420848379988_n_1757111152298.jpg',
      description: 'Built-in display solution with sophisticated lighting and premium materials'
    },
    {
      id: 5,
      title: 'Executive Dining Space',
      category: 'dining',
      image: '/images/imgi_9_541880794_18077731115493478_1184188163504688235_n_1757111152300.jpg',
      description: 'Impressive dining area with floor-to-ceiling wood features'
    },
    {
      id: 6,
      title: 'Entertainment Wall Unit',
      category: 'living',
      image: '/images/imgi_14_539774193_18077198129493478_187446010639494702_n_1757111152300.jpg',
      description: 'Comprehensive entertainment solution with integrated storage'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'living', label: 'Living Spaces' },
    { key: 'kitchen', label: 'Kitchens' },
    { key: 'dining', label: 'Dining Rooms' },
    { key: 'architectural', label: 'Architectural' }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-accent)] text-lg font-semibold tracking-wide mb-4 block">
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-primary)] mb-6">
            Masterpieces in Every
            <span className="gradient-text"> Detail</span>
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">
            Each project represents our commitment to excellence, where precision meets artistry 
            to create spaces that inspire and endure.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.key
                  ? 'bg-[var(--color-secondary)] text-white shadow-lg'
                  : 'bg-gray-100 text-[var(--color-gray)] hover:bg-[var(--color-secondary)] hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-luxury mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.h3 
                    className="text-xl font-semibold mb-2"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-200"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--color-gray)] text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-transparent border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            View Complete Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}