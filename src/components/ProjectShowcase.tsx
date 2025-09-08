'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { projectsData } from '@/data/projects'

export default function ProjectShowcase() {
  const ref = useRef(null)
  const router = useRouter()
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState('all')

  const projects = projectsData

  const handleProjectClick = (projectId: number) => {
    router.push(`/project/${projectId}`)
  }

  // Keep original structure for compatibility
  const originalProjects = [
    {
      id: 1,
      title: 'Wet Bar Wall Unit',
      category: 'bar',
      image: '/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg',
      description: 'Sophisticated wet bar with integrated refrigeration, stone countertops, and LED lighting'
    },
    {
      id: 2,
      title: 'Corporate Bar Unit',
      category: 'bar', 
      image: '/images/482083207_619297530845020_484943003542860880_n_1757113219623.jpg',
      description: 'Luxury corporate bar with curved design, premium finishes, and integrated storage'
    },
    {
      id: 3,
      title: 'Display & Storage Unit',
      category: 'display',
      image: '/images/480901597_619297520845021_6239928355207253905_n_1757113219624.jpg',
      description: 'Illuminated display wall unit with gold accents and premium storage solutions'
    },
    {
      id: 4,
      title: 'Entertainment Wall Unit',
      category: 'entertainment',
      image: '/images/481025547_620547904053316_5834691484597900035_n_1757113219626.jpg',
      description: 'Acoustic wall panels with geometric texture and integrated entertainment features'
    },
    {
      id: 5,
      title: 'Foyer Architectural Unit',
      category: 'architectural',
      image: '/images/362974437_3630876727235474_164680955745073358_n_1757113219625.jpg',
      description: 'Dramatic entryway with illuminated wood slats and architectural lighting'
    },
    {
      id: 6,
      title: 'Fireplace Wall Unit',
      category: 'living',
      image: '/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg',
      description: 'Complete living room wall unit with built-in fireplace, TV, and storage'
    },
    {
      id: 7,
      title: 'Wine Storage Wall',
      category: 'wine',
      image: '/images/481249236_619830234125083_8298283058325732482_n_1757113219629.jpg',
      description: 'Temperature-controlled wine display with premium glass and metal details'
    },
    {
      id: 8,
      title: 'Executive Office Unit',
      category: 'office',
      image: '/images/365983685_6721524491232858_6578871452303785944_n_1757113219631.jpg',
      description: 'Comprehensive office wall unit with built-in desk and display shelving'
    },
    {
      id: 9,
      title: 'Modern Kitchen Unit',
      category: 'kitchen',
      image: '/images/481174538_621185887322851_3067729186485640710_n_1757113219634.jpg',
      description: 'Clean white kitchen wall unit with integrated appliances and seamless design'
    },
    {
      id: 10,
      title: 'Wine Cellar Wall',
      category: 'wine',
      image: '/images/401001686_1115390219447467_1719936535112898132_n_1757113219634.jpg',
      description: 'Temperature-controlled wine display behind glass with precision wall mounting'
    },
    {
      id: 11,
      title: 'Luxury Dining Unit',
      category: 'dining',
      image: '/images/361927037_969825864291137_4158234675795338117_n_1757113219633.jpg',
      description: 'Sophisticated dining room with architectural frames and integrated lighting'
    },
    {
      id: 12,
      title: 'Entryway Feature Unit',
      category: 'architectural',
      image: '/images/363316847_1229783514352191_2158139334373251137_n_1757113219636.jpg',
      description: 'Modern entryway with architectural elements and statement lighting'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Wall Units' },
    { key: 'bar', label: 'Wet Bars' },
    { key: 'display', label: 'Display Units' },
    { key: 'entertainment', label: 'Entertainment' },
    { key: 'wine', label: 'Wine Storage' },
    { key: 'office', label: 'Office Units' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'living', label: 'Living Room' },
    { key: 'dining', label: 'Dining Room' },
    { key: 'architectural', label: 'Architectural' }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <section id="portfolio" className="py-24 bg-white" ref={ref}>
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
            Wall Units That
            <span className="gradient-text"> Inspire</span>
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">
            Every wall unit we create is a testament to precision craftsmanship, 
            transforming ordinary walls into extraordinary architectural features.
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
              onClick={() => handleProjectClick(project.id)}
              className="group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-luxury mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
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
          <button
            className="bg-transparent border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            View All Wall Units
          </button>
        </motion.div>
      </div>
    </section>
  )
}