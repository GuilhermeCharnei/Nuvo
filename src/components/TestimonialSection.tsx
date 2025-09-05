'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function TestimonialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-graphite wood-texture" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-black/20 backdrop-blur-sm border border-brown-indian/30 rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
              Our Philosophy
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl md:text-3xl text-beige-light font-light leading-relaxed italic"
            >
              "Each piece reflects our obsession with detail – where 
              <span className="text-brown-indian font-medium">CNC technology</span> meets 
              <span className="text-brown-indian font-medium">old-world craftsmanship</span> to create 
              functional heirlooms for discerning Florida homes."
            </motion.p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="h-1 bg-brown-indian mx-auto mt-8 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}