'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHome, FaBrain, FaPalette, FaArrowUp } from 'react-icons/fa'

const benefits = [
  {
    title: 'Integração com Arquitetura',
    description: 'Cada Wall Unit é projetada para se tornar parte da estrutura, não apenas um móvel.',
    icon: FaHome,
    color: 'from-brown-indian/20 to-brown-indian/5'
  },
  {
    title: 'Organização Inteligente',
    description: 'Nichos e compartimentos pensados para otimizar cada centímetro do seu espaço.',
    icon: FaBrain,
    color: 'from-graphite/20 to-graphite/5'
  },
  {
    title: 'Estética Personalizada',
    description: 'Design único que reflete sua personalidade e complementa seu ambiente.',
    icon: FaPalette,
    color: 'from-brown-indian/20 to-brown-indian/5'
  },
  {
    title: 'Valorização do Imóvel',
    description: 'Investimento que agrega valor real ao seu patrimônio e qualidade de vida.',
    icon: FaArrowUp,
    color: 'from-graphite/20 to-graphite/5'
  }
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
            Benefícios
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            Mais que móveis, são soluções que transformam ambientes e experiências
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-lg border border-gray-200 hover:border-brown-indian/30 hover:shadow-lg transition-all duration-300 cursor-custom"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="text-2xl text-brown-indian" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-graphite mb-4 group-hover:text-brown-indian transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-medium leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-brown-indian/20 to-transparent rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}