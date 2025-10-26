'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { trackPhoneClick } from './GoogleAnalytics'

/**
 * Botão flutuante de ligação
 * Fica fixo no canto inferior direito, acima do chatbot
 * Sempre visível para facilitar contato direto
 */
export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulse, setIsPulse] = useState(true)

  // Mostra botão após 2 segundos de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
        // Para de pulsar depois de aparecer
        setTimeout(() => setIsPulse(false), 3000)
      } else {
        setIsVisible(false)
        setIsPulse(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCall = () => {
    trackPhoneClick()
    window.open('tel:+15617702595', '_self')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCall}
          className="fixed right-6 bottom-24 z-40 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 group"
          style={{
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4)',
          }}
          aria-label="Call us now at 561-770-2595"
        >
          {/* Ícone do telefone */}
          <motion.div
            animate={isPulse ? {
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: isPulse ? Infinity : 0,
              repeatDelay: 0.5,
            }}
          >
            <FaPhone className="text-2xl" />
          </motion.div>

          {/* Tooltip ao passar o mouse */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          >
            <div className="text-sm font-semibold">Call Now!</div>
            <div className="text-xs text-gray-300">+1 (561) 770-2595</div>
            {/* Seta do tooltip */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900" />
          </motion.div>

          {/* Efeito de onda/pulso */}
          {isPulse && (
            <motion.div
              className="absolute inset-0 rounded-full bg-green-400"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{
                scale: 1.8,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  )
}
