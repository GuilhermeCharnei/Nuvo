'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhoneAlt, FaLightbulb, FaHandshake, FaCog, FaTruck, FaHeart } from 'react-icons/fa'

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We start with an in-depth consultation to understand your vision, needs, and space requirements.',
      icon: FaPhoneAlt,
      duration: '30 minutes'
    },
    {
      number: '02',
      title: 'Design Concept',
      description: 'Our team creates detailed 3D renderings and proposals tailored to your style and budget.',
      icon: FaLightbulb,
      duration: '1-2 weeks'
    },
    {
      number: '03',
      title: 'Contract & Planning',
      description: 'We finalize all details, materials, and timelines before beginning the crafting process.',
      icon: FaHandshake,
      duration: '1 week'
    },
    {
      number: '04',
      title: 'Precision Crafting',
      description: 'Our master craftsmen bring your vision to life using premium materials and advanced techniques.',
      icon: FaCog,
      duration: '4-8 weeks'
    },
    {
      number: '05',
      title: 'Installation',
      description: 'Professional installation with attention to every detail, ensuring perfect fit and finish.',
      icon: FaTruck,
      duration: '1-3 days'
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'We provide care instructions and remain available for any future maintenance needs.',
      icon: FaHeart,
      duration: 'Lifetime'
    }
  ]

  return (
    <section className="py-24 bg-[var(--color-light)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-accent)] text-lg font-semibold tracking-wide mb-4 block">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-primary)] mb-6">
            From Vision to
            <span className="gradient-text"> Reality</span>
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">
            Our proven 6-step process ensures your project is delivered on time, 
            within budget, and exceeds your expectations at every stage.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-secondary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-16 gap-8`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white rounded-2xl p-8 shadow-luxury ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    } text-center`}
                  >
                    <div className={`flex items-center gap-4 mb-6 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    } justify-center`}>
                      <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center">
                        <step.icon className="text-white text-xl" />
                      </div>
                      <div className="text-sm text-[var(--color-accent)] font-semibold">
                        {step.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-[var(--color-primary)] mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-[var(--color-gray)] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Number */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-luxury"
                  >
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-md lg:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20 bg-white rounded-2xl p-8 shadow-luxury"
        >
          <h3 className="text-2xl font-display font-bold text-[var(--color-primary)] mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-[var(--color-gray)] mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have transformed their spaces with NUVO. 
            Your dream project is just one call away.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Schedule Your Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}