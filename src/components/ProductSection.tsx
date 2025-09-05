'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProductSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-beige-light" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-graphite mb-8">
            Sob medida para cada ambiente
          </h2>
          <p className="text-xl text-gray-medium max-w-4xl mx-auto leading-relaxed">
            Nossas Wall Units são criadas sob medida para cada ambiente. Combinam precisão 
            milimétrica, integração com iluminação, nichos funcionais e acabamentos que elevam o espaço.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="h-64 bg-gradient-to-br from-brown-indian/20 to-graphite/10 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-brown-indian text-lg font-semibold">Detalhe Técnico</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-graphite mb-4">
              Precisão Milimétrica
            </h3>
            <p className="text-gray-medium">
              Cada encaixe é pensado para ser invisível, criando linhas contínuas que se integram 
              perfeitamente com a arquitetura do ambiente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="h-64 bg-gradient-to-br from-graphite/20 to-brown-indian/10 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-graphite text-lg font-semibold">Visão Geral</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-graphite mb-4">
              Integração Total
            </h3>
            <p className="text-gray-medium">
              Do planejamento à instalação, cada Wall Unit é desenvolvida para ser parte 
              da arquitetura, não apenas um móvel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}