'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'

const projectsData = [
  {
    id: 1,
    title: 'Luxury Entertainment Center',
    environment: 'sala',
    image: '/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg',
    wood: 'Premium Walnut',
    finish: 'Satin Lacquer',
    lighting: 'Integrated LED with marble accents',
    description: 'Sophisticated living room centerpiece with integrated lighting and premium finishes'
  },
  {
    id: 2,
    title: 'Gourmet Kitchen Design',
    environment: 'gourmet',
    image: '/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg',
    wood: 'Natural Oak',
    finish: 'Matte Finish',
    lighting: 'Under-cabinet LED strips',
    description: 'Modern kitchen design harmonizing functionality with sophisticated aesthetics'
  },
  {
    id: 3,
    title: 'Contemporary Staircase Feature',
    environment: 'corporativo',
    image: '/images/imgi_6_543839574_797280436173673_2519557351358427065_n_1757111152298.jpg',
    wood: 'Engineered Wood',
    finish: 'Natural Grain',
    lighting: 'Ambient ceiling lights',
    description: 'Modern architectural feature combining wood and steel elements'
  },
  {
    id: 4,
    title: 'Built-in Display Shelving',
    environment: 'sala',
    image: '/images/imgi_10_539858318_615257668134300_4100570420848379988_n_1757111152298.jpg',
    wood: 'Light Oak',
    finish: 'Textured Finish',
    lighting: 'Integrated shelf lighting',
    description: 'Elegant display solution with sophisticated lighting and marble details'
  },
  {
    id: 5,
    title: 'Premium Dining Area',
    environment: 'corporativo',
    image: '/images/imgi_9_541880794_18077731115493478_1184188163504688235_n_1757111152300.jpg',
    wood: 'Natural Wood',
    finish: 'Matte Protection',
    lighting: 'Designer pendant lighting',
    description: 'Impressive dining space with floor-to-ceiling wood features'
  },
  {
    id: 6,
    title: 'Executive Entertainment Wall',
    environment: 'gourmet',
    image: '/images/imgi_14_539774193_18077198129493478_187446010639494702_n_1757111152300.jpg',
    wood: 'Engineered Walnut',
    finish: 'Satin Lacquer',
    lighting: 'Integrated display lighting',
    description: 'Sophisticated wall unit combining storage and entertainment features'
  }
]

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'sala', label: 'Living Spaces' },
  { key: 'gourmet', label: 'Kitchen & Dining' },
  { key: 'corporativo', label: 'Commercial' }
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)

  const filteredProjects = selectedFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.environment === selectedFilter)

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-graphite mb-6">
            Galeria de Ambientes
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto mb-12">
            Projetos que transformam espaços em experiências únicas
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter.key
                    ? 'bg-brown-indian text-white shadow-lg'
                    : 'bg-gray-100 text-gray-medium hover:bg-brown-indian/10 hover:text-brown-indian'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-custom"
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-graphite mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-medium text-sm mb-4">
                  {project.description}
                </p>
                <div className="text-xs text-brown-indian font-medium">
                  {project.wood} • {project.finish}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-medium hover:text-graphite transition-colors duration-200"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="relative h-64 rounded-lg mb-6 overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-graphite mb-4">
                {selectedProject.title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-graphite mb-2">Especificações Técnicas</h4>
                  <ul className="space-y-1 text-gray-medium">
                    <li><strong>Madeira:</strong> {selectedProject.wood}</li>
                    <li><strong>Acabamento:</strong> {selectedProject.finish}</li>
                    <li><strong>Iluminação:</strong> {selectedProject.lighting}</li>
                    <li><strong>Ambiente:</strong> {selectedProject.environment}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-graphite mb-2">Descrição</h4>
                  <p className="text-gray-medium">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}