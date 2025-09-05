'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const projectsData = [
  {
    id: 1,
    title: 'Sala de Estar Premium',
    environment: 'sala',
    wood: 'Freijó',
    finish: 'Laca acetinada',
    lighting: 'LED integrado com dimmer',
    description: 'Wall Unit integrada com sistema de iluminação inteligente'
  },
  {
    id: 2,
    title: 'Ambiente Gourmet Sofisticado',
    environment: 'gourmet',
    wood: 'Carvalho',
    finish: 'Verniz natural',
    lighting: 'Spots direcionais',
    description: 'Design que harmoniza culinária e entretenimento'
  },
  {
    id: 3,
    title: 'Home Office Executivo',
    environment: 'corporativo',
    wood: 'Mogno',
    finish: 'Poliuretano fosco',
    lighting: 'Iluminação funcional',
    description: 'Produtividade e elegância em cada detalhe'
  },
  {
    id: 4,
    title: 'Quarto Master Minimalista',
    environment: 'sala',
    wood: 'Cedro',
    finish: 'Laca mate',
    lighting: 'Iluminação indireta',
    description: 'Sutileza e funcionalidade para momentos íntimos'
  },
  {
    id: 5,
    title: 'Corporativo Imponente',
    environment: 'corporativo',
    wood: 'Pau-ferro',
    finish: 'Laca brilhante',
    lighting: 'Sistema RGB',
    description: 'Impressione clientes com design marcante'
  },
  {
    id: 6,
    title: 'Parede Mimetizada',
    environment: 'gourmet',
    wood: 'Peroba',
    finish: 'Textura natural',
    lighting: 'Oculta com sensor',
    description: 'A arte de esconder com elegância'
  }
]

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'sala', label: 'Sala' },
  { key: 'gourmet', label: 'Gourmet' },
  { key: 'corporativo', label: 'Corporativo' }
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
              <div className="h-64 bg-gradient-to-br from-brown-indian/20 to-graphite/10 flex items-center justify-center group-hover:from-brown-indian/30 transition-all duration-300">
                <span className="text-brown-indian text-lg font-semibold">
                  {project.title}
                </span>
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
              
              <div className="h-64 bg-gradient-to-br from-brown-indian/20 to-graphite/10 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-brown-indian text-xl font-semibold">
                  {selectedProject.title}
                </span>
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