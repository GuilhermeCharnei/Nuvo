'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Mudroom',
    subtitle: 'Makeover / Redesign / Home Transformation',
    image: '/images/imgi_16_537905886_18076992200493478_4499625465287494593_n_1757111152302.jpg'
  },
  {
    title: 'Kitchen',
    subtitle: 'Makeover / Redesign / Home Transformation',
    image: '/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg'
  },
  {
    title: 'Entertainment Rooms',
    subtitle: 'Makeover / Redesign / Home Transformation',
    image: '/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg'
  },
  {
    title: 'Offices',
    subtitle: 'Makeover / Redesign / Home Transformation',
    image: '/images/imgi_13_539380413_18077322320493478_8953555616821563311_n_1757111152299.jpg'
  },
  {
    title: 'Foyer',
    subtitle: 'Makeover / Redesign / Home Transformation',
    image: '/images/imgi_9_541880794_18077731115493478_1184188163504688235_n_1757111152300.jpg'
  },
  {
    title: 'Laundry',
    subtitle: 'Makeover / Redesign / Home Transformation',
    image: '/images/imgi_11_539785900_18077510651493478_1929870380298171035_n_1757111152301.jpg'
  }
]

export default function ServicesCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-graphite wood-texture overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Transform Every Space in Your{' '}
            <span className="text-brown-indian">Home</span>
          </h2>
          <p className="text-xl text-beige-light max-w-3xl mx-auto">
            From mudrooms to entertainment centers, we create custom solutions for every room
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-brown-indian/20 hover:border-brown-indian/40 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brown-indian transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-beige-light text-sm">
                  {service.subtitle}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brown-indian/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Infinite scroll animation (visual effect) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex space-x-8 overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex space-x-8 flex-shrink-0"
          >
            {[...services, ...services].map((service, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-12 bg-brown-indian/20 rounded-lg flex items-center justify-center">
                <span className="text-brown-indian font-medium text-sm">
                  {service.title}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}