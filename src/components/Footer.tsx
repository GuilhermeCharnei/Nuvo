'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp' }
  ]

  const quickLinks = [
    { label: 'Wall Units', href: '#wall-units' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Contato', href: '#contato' }
  ]

  return (
    <footer className="bg-graphite wood-texture">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-display font-bold text-brown-indian mb-2">NUVO</h3>
                <p className="text-sm text-beige-light font-light tracking-widest">WOODWORK</p>
              </div>
              <p className="text-xl text-beige-light font-light italic mb-6">
                "Structure in Simplicity"
              </p>
              <p className="text-gray-medium">
                Transformamos ambientes com Wall Units sob medida que unem 
                tecnologia de ponta e acabamento artesanal.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h4 className="text-xl font-display font-semibold text-white mb-6">
                Links Rápidos
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-medium hover:text-brown-indian transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center md:text-left"
            >
              <h4 className="text-xl font-display font-semibold text-white mb-6">
                Contato
              </h4>
              <div className="space-y-3 mb-8">
                <p className="text-gray-medium">
                  <span className="text-brown-indian font-medium">E-mail:</span><br />
                  contato@nuvowoodwork.com
                </p>
                <p className="text-gray-medium">
                  <span className="text-brown-indian font-medium">Telefone:</span><br />
                  (11) 99999-9999
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-brown-indian/20 hover:bg-brown-indian rounded-lg flex items-center justify-center text-brown-indian hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-brown-indian/20 py-8 text-center"
        >
          <p className="text-gray-medium text-sm">
            © {new Date().getFullYear()} NUVO WOODWORK. Todos os direitos reservados. 
            <span className="text-brown-indian">Criado com excelência e paixão.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}