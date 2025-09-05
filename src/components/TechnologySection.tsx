'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCog, FaCube, FaHandsHelping, FaEye, FaPaintBrush } from 'react-icons/fa'
import { FaGripLinesVertical } from 'react-icons/fa'

const processSteps = [
  {
    category: 'Tecnologia',
    items: [
      { name: 'CNC', icon: FaCog, description: 'Cortes precisos e repetíveis' },
      { name: 'Corte a Laser', icon: FaGripLinesVertical, description: 'Detalhes com precisão milimétrica' },
      { name: 'Modelagem 3D', icon: FaCube, description: 'Visualização antes da produção' }
    ]
  },
  {
    category: 'Artesanato',
    items: [
      { name: 'Acabamento Manual', icon: FaHandsHelping, description: 'Toque humano em cada detalhe' },
      { name: 'Encaixes Invisíveis', icon: FaEye, description: 'Engenharia de precisão' },
      { name: 'Pintura Personalizada', icon: FaPaintBrush, description: 'Cores únicas para cada projeto' }
    ]
  }
]

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-beige-light" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-graphite mb-6">
            Tecnologia + Artesanato
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            A união perfeita entre inovação tecnológica e maestria artesanal
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {processSteps.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-3xl font-display font-bold text-center mb-8 text-graphite">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.4 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-brown-indian/5 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brown-indian/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="text-brown-indian text-xl" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-graphite mb-1">
                          {item.name}
                        </h4>
                        <p className="text-gray-medium text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-graphite rounded-lg p-8 text-white">
            <p className="text-xl font-medium">
              "Cada Wall Unit nasce da harmonia entre a precisão das máquinas e a sensibilidade humana"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}