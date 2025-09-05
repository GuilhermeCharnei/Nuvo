'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHome, FaUtensils, FaLaptop, FaBed, FaBuilding, FaEye, FaGlassCheers } from 'react-icons/fa'

const wallUnitTypes = [
  {
    type: 'Sala de Estar',
    slogan: 'Mais que suporte para sua TV — é o centro da sua casa.',
    icon: FaHome,
    description: 'Integração perfeita entre entretenimento e design'
  },
  {
    type: 'Ambiente Gourmet',
    slogan: 'Integração entre sabor, estilo e funcionalidade.',
    icon: FaUtensils,
    description: 'Harmonize culinária e sofisticação'
  },
  {
    type: 'Home Office',
    slogan: 'Organização inteligente para ideias que merecem espaço.',
    icon: FaLaptop,
    description: 'Produtividade e elegância em cada detalhe'
  },
  {
    type: 'Quarto Principal',
    slogan: 'Sutileza e presença para o lugar mais íntimo da casa.',
    icon: FaBed,
    description: 'Privacidade e conforto em design'
  },
  {
    type: 'Espaço Corporativo',
    slogan: 'Design que comunica profissionalismo e sofisticação.',
    icon: FaBuilding,
    description: 'Impressione com ambientes corporativos únicos'
  },
  {
    type: 'Parede Mimetizada',
    slogan: 'A arte de esconder com elegância — e revelar com impacto.',
    icon: FaEye,
    description: 'Funcionalidade invisível, resultado surpreendente'
  },
  {
    type: 'Wall Unit com Bar',
    slogan: 'Receber bem começa com um espaço que impressiona.',
    icon: FaGlassCheers,
    description: 'Hospitalidade e estilo em cada encontro'
  }
]

export default function WallUnitTypes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-graphite wood-texture" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Tipos de Wall Unit
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            Cada ambiente tem sua personalidade. Cada Wall Unit tem seu propósito.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wallUnitTypes.map((unit, index) => {
            const IconComponent = unit.icon
            return (
              <motion.div
                key={unit.type}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-black/20 backdrop-blur-sm border border-brown-indian/20 rounded-lg p-8 hover:bg-brown-indian/10 transition-all duration-300 cursor-custom"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="mb-6">
                  <div className="h-48 bg-gradient-to-br from-brown-indian/20 to-beige-light/10 rounded-lg mb-6 flex items-center justify-center group-hover:from-brown-indian/30 transition-all duration-300">
                    <IconComponent className="text-5xl text-brown-indian" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-white mb-4">
                  {unit.type}
                </h3>
                
                <p className="text-sm text-gray-medium mb-6">
                  {unit.description}
                </p>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-brown-indian/30 pt-4 overflow-hidden"
                >
                  <p className="text-brown-indian font-medium italic text-center">
                    "{unit.slogan}"
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}