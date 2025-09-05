'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ProductSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-beige-light" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-brown-indian text-lg font-medium mb-4 tracking-wide">
            Who we are
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-graphite mb-8 leading-tight">
            From Italian-Brazilian heritage to South Florida's elite homes,
            <span className="text-brown-indian"> we blend tradition with innovation.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-xl text-graphite leading-relaxed">
                <strong>NUVO elevates wood to art.</strong> Founded in 2015 by master craftsman Eduardo Ramos, 
                we blend 30 years of Italian-Brazilian woodworking heritage with American precision.
              </p>
              
              <p className="text-lg text-gray-medium leading-relaxed">
                Each piece reflects our obsession with detail – where CNC technology meets old-world 
                craftsmanship to create functional heirlooms for discerning Florida homes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-3xl font-bold text-brown-indian mb-2">30+</h3>
                <p className="text-gray-medium font-medium">Years of Experience</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-3xl font-bold text-brown-indian mb-2">4,000+</h3>
                <p className="text-gray-medium font-medium">Happy Clients</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-3xl font-bold text-brown-indian mb-2">98%</h3>
                <p className="text-gray-medium font-medium">Project Success</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-3xl font-bold text-brown-indian mb-2">4.7</h3>
                <p className="text-gray-medium font-medium">Client Ratings</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg"
                    alt="NUVO Kitchen Design"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/imgi_10_539858318_615257668134300_4100570420848379988_n_1757111152298.jpg"
                    alt="NUVO Entertainment Center"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/imgi_6_543839574_797280436173673_2519557351358427065_n_1757111152298.jpg"
                    alt="NUVO Custom Stairs"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/imgi_14_539774193_18077198129493478_187446010639494702_n_1757111152300.jpg"
                    alt="NUVO Living Room"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}