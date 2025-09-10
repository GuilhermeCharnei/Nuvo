'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaCalendar, FaArrowRight } from 'react-icons/fa'

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Tenho interesse em uma Wall Unit personalizada. Gostaria de saber mais sobre seus projetos.")
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
  }

  const handlePhoneCall = () => {
    window.open('tel:+5511999999999', '_self')
  }

  const handleScheduleCall = () => {
    // Open chatbot for scheduling
    const chatbotButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement
    if (chatbotButton) {
      chatbotButton.click()
    }
  }

  return (
    <section 
      className="py-20 bg-gradient-luxury wood-texture relative overflow-hidden" 
      ref={ref}
      data-section="call-to-action"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/90 to-[var(--color-primary)]/70" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[var(--color-secondary)] text-lg font-semibold tracking-wide">
                PRONTO PARA COMEÇAR?
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
            >
              Transforme seu espaço com uma
              <span className="text-[var(--color-secondary)]"> Wall Unit única</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl"
            >
              Cada projeto é único, assim como você. Nossa equipe está pronta para criar 
              a solução perfeita para seu ambiente com design sob medida, materiais premium 
              e acabamento impecável.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">500+</div>
                <div className="text-sm text-gray-300">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">98%</div>
                <div className="text-sm text-gray-300">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">15+</div>
                <div className="text-sm text-gray-300">Anos Experiência</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* WhatsApp */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white p-6 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-luxury group"
              data-testid="button-whatsapp"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">WhatsApp</div>
                  <div className="text-green-100 text-sm">Resposta imediata</div>
                </div>
              </div>
              <FaArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
            </motion.button>

            {/* Phone Call */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePhoneCall}
              className="w-full bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white p-6 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-luxury group"
              data-testid="button-phone"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-xl" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">Ligue Agora</div>
                  <div className="text-[var(--color-light)] text-sm">(11) 99999-9999</div>
                </div>
              </div>
              <FaArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
            </motion.button>

            {/* Schedule Consultation */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScheduleCall}
              className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 p-6 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-luxury group"
              data-testid="button-schedule"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center">
                  <FaCalendar className="text-xl text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">Agendar Consulta</div>
                  <div className="text-gray-200 text-sm">Consultoria gratuita</div>
                </div>
              </div>
              <FaArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
            </motion.button>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="flex items-center justify-center space-x-6 text-white text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Orçamento Gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Sem Compromisso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Atendimento 24h</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
