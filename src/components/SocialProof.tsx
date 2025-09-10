'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner, Coral Gables',
      content: 'NUVO transformed our kitchen into a work of art. The attention to detail and craftsmanship is absolutely extraordinary. Every guest comments on the beautiful woodwork.',
      rating: 5,
      image: '/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Interior Designer, Miami',
      content: 'Working with NUVO has been exceptional. Their ability to bring complex designs to life while maintaining the highest quality standards is unmatched in South Florida.',
      rating: 5,
      image: '/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg'
    },
    {
      id: 3,
      name: 'Jennifer Chen',
      role: 'Architect, Boca Raton',
      content: 'The Italian-Brazilian heritage truly shows in their work. Eduardo and his team create pieces that are both functional and artistic. Absolutely recommend for luxury projects.',
      rating: 5,
      image: '/images/imgi_14_539774193_18077198129493478_187446010639494702_n_1757111152300.jpg'
    }
  ]

  const stats = [
    { number: '4,000+', label: 'Satisfied Clients' },
    { number: '30+', label: 'Years Experience' },
    { number: '98%', label: 'Projects On Time' },
    { number: '4.9/5', label: 'Client Rating' }
  ]

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-accent)] text-lg font-semibold tracking-wide mb-4 block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-primary)] mb-6">
            Trusted by Florida's
            <span className="gradient-text"> Elite</span>
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            their experience working with NUVO.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-[var(--color-light)] rounded-2xl p-8 shadow-luxury relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[var(--color-secondary)] opacity-20">
                <FaQuoteLeft className="text-3xl" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[var(--color-secondary)] text-sm mr-1" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[var(--color-gray)] mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[var(--color-gray)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-luxury rounded-2xl p-12 text-center"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-white"
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-[var(--color-gray)]">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full" />
              <span className="text-sm font-medium">30-Year Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full" />
              <span className="text-sm font-medium">Free Consultations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full" />
              <span className="text-sm font-medium">Premium Materials Only</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}