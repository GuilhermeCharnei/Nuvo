'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhoneAlt, FaLightbulb, FaHandshake, FaCog, FaTruck, FaHeart } from 'react-icons/fa'

const workSteps = [
  {
    number: '01',
    title: 'Initial Contact & Site Visit',
    description: 'We receive your inquiry, qualify your project, and schedule an on-site visit for measurements and discovery.',
    icon: FaPhoneAlt
  },
  {
    number: '02',
    title: 'Concept & Proposal',
    description: 'We dive into your needs and style, then present tailored ideas and a detailed quote with materials, finishes, and timeline.',
    icon: FaLightbulb
  },
  {
    number: '03',
    title: 'Approval & Agreement',
    description: 'Final scope and materials are aligned. Once approved, we sign the contract and move into technical design.',
    icon: FaHandshake
  },
  {
    number: '04',
    title: 'Technical Design & Production',
    description: 'Our team prepares technical drawings and starts precise custom fabrication, followed by quality checks and logistics.',
    icon: FaCog
  },
  {
    number: '05',
    title: 'Delivery & Installation',
    description: 'Your custom pieces are delivered and professionally installed with attention to detail and finishing.',
    icon: FaTruck
  },
  {
    number: '06',
    title: 'Aftercare & Ongoing Support',
    description: 'We provide usage guidance, post-installation support, and stay open for future projects and referrals.',
    icon: FaHeart
  }
]

export default function HowWeWork() {
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
          <p className="text-brown-indian text-lg font-medium mb-4 tracking-wide">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-graphite mb-6 leading-tight">
            Tailored Craftsmanship Through a{' '}
            <span className="text-brown-indian">Seamless Process</span>
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            From first contact to final installation, every step is carefully crafted to deliver precision and excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-beige-light rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                {/* Number */}
                <div className="absolute top-6 right-6">
                  <span className="text-4xl font-bold text-brown-indian/20 group-hover:text-brown-indian/40 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-brown-indian/10 rounded-lg flex items-center justify-center group-hover:bg-brown-indian/20 transition-colors duration-300">
                    <IconComponent className="text-2xl text-brown-indian" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-graphite mb-4 pr-12">
                  {step.title}
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  {step.description}
                </p>

                {/* Progress line (except for last item) */}
                {index < workSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brown-indian/30"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-brown-indian hover:bg-brown-indian/90 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(152, 100, 33, 0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}