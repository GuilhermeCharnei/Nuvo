'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      location: "São Paulo, SP",
      project: "Wall Unit Sala de Estar",
      rating: 5,
      text: "A NUVO transformou completamente nossa sala de estar. A Wall Unit ficou perfeita, integrada com a arquitetura da casa. O acabamento é impecável e o atendimento foi excepcional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b64c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      location: "Rio de Janeiro, RJ",
      project: "Home Office Executivo",
      rating: 5,
      text: "Precisão milimétrica e design sofisticado. Meu home office ficou muito mais organizado e produtivo. A equipe da NUVO entende exatamente o que o cliente precisa.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 3,
      name: "Ana Paula Rodrigues",
      location: "Belo Horizonte, MG",
      project: "Ambiente Gourmet",
      rating: 5,
      text: "Superou todas as expectativas! A adega integrada e o espaço gourmet ficaram um sonho. Recebo muitos elogios dos amigos. Vale cada centavo investido.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ]

  const socialStats = [
    {
      platform: "Google",
      icon: FaGoogle,
      rating: "4.9",
      reviews: "127",
      color: "text-blue-600"
    },
    {
      platform: "Facebook", 
      icon: FaFacebook,
      rating: "4.8",
      reviews: "89",
      color: "text-blue-800"
    },
    {
      platform: "Instagram",
      icon: FaInstagram,
      rating: "4.9",
      reviews: "234",
      color: "text-pink-600"
    }
  ]

  const certifications = [
    "Arquitetos Certificados",
    "Marceneiros Especialistas",
    "Garantia de 5 Anos",
    "ISO 9001:2015"
  ]

  return (
    <section className="py-20 bg-[var(--color-light)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-accent)] text-lg font-semibold tracking-wide mb-4 block">
            CLIENTES SATISFEITOS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-primary)] mb-6">
            O que nossos clientes
            <span className="gradient-text"> dizem sobre nós</span>
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">
            Mais de 500 projetos realizados com excelência. Veja porque somos referência 
            em Wall Units personalizadas no Brasil.
          </p>
        </motion.div>

        {/* Social Media Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {socialStats.map((stat, index) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-luxury text-center hover:shadow-xl transition-all duration-300"
              data-testid={`social-stat-${stat.platform.toLowerCase()}`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 ${stat.color} text-2xl flex items-center justify-center`}>
                  <stat.icon />
                </div>
              </div>
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                {stat.rating} ⭐
              </div>
              <div className="text-[var(--color-gray)] text-sm">
                {stat.reviews} avaliações no {stat.platform}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-luxury hover:shadow-xl transition-all duration-300 relative"
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--color-secondary)] rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-white text-sm" />
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-[var(--color-gray)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-primary)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[var(--color-gray)]">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-[var(--color-accent)] font-medium mt-1">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-luxury"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-[var(--color-primary)] mb-2">
              Certificações e Garantias
            </h3>
            <p className="text-[var(--color-gray)]">
              Qualidade comprovada e reconhecida no mercado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center p-4 bg-[var(--color-light)] rounded-xl"
                data-testid={`certification-${index}`}
              >
                <div className="w-12 h-12 bg-[var(--color-secondary)]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-[var(--color-secondary)] rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-[var(--color-primary)]">
                  {cert}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-[var(--color-gray)] mb-6">
            Junte-se aos nossos clientes satisfeitos
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const chatbotButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement
              if (chatbotButton) chatbotButton.click()
            }}
            className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
            data-testid="button-join-clients"
          >
            Solicite Seu Orçamento Gratuito
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
