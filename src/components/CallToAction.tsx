'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import Image from 'next/image'
import { trackPhoneClick, trackCTAClick, trackFormSubmit } from './GoogleAnalytics'

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    trackFormSubmit('Contact Form - CTA Section')

    try {
      // Formspree endpoint - Configure NEXT_PUBLIC_FORMSPREE_ID no arquivo .env.local
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID'
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: formData.project,
          message: formData.message,
          _subject: `New Contact from NUVO BARS: ${formData.name}`,
        }),
      })

      if (response.ok) {
        setFormStatus('success')
        // Limpa o formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          message: ''
        })
        // Reset status após 5 segundos
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call Us',
      info: '+1 (561) 770-2595',
      subinfo: 'Available Mon-Fri 9AM - 5PM EST',
      isClickable: true,
      action: () => {
        trackPhoneClick()
        window.open('tel:+15617702595', '_self')
      }
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      info: 'guilherme.charnei@gmail.com',
      subinfo: 'We respond within 24 hours',
      isClickable: true,
      action: () => window.open('mailto:guilherme.charnei@gmail.com', '_self')
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Our Factory',
      info: '4801 Johnson Rd Suite 4, Coconut Creek, FL 33073',
      subinfo: 'By appointment only',
      isClickable: true,
      action: () => {
        const address = encodeURIComponent('4801 Johnson Rd Suite 4, Coconut Creek, FL 33073')
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1) {
          // iOS device - prefer Apple Maps
          window.open(`maps://maps.google.com/maps?q=${address}`, '_self')
        } else if (userAgent.indexOf('android') > -1) {
          // Android device - prefer Google Maps
          window.open(`google.navigation:q=${address}`, '_self')
        } else {
          // Desktop or unknown - use Google Maps web
          window.open(`https://maps.google.com/maps?q=${address}`, '_blank')
        }
      }
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      info: 'Mon - Fri: 8AM - 6PM',
      subinfo: 'Sat: 9AM - 4PM',
      isClickable: false
    }
  ]

  return (
    <section className="py-24 bg-gradient-luxury wood-texture relative overflow-hidden" ref={ref} data-section="call-to-action">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image
            src="/images/imgi_9_541880794_18077731115493478_1184188163504688235_n_1757111152300.jpg"
            alt="NUVO Background"
            fill
            className="object-cover"
            sizes="33vw"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[var(--color-secondary)] text-lg font-semibold tracking-wide mb-4 block"
              >
                START YOUR PROJECT
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
              >
                Create Your Perfect
                <span className="text-[var(--color-secondary)]"> Wall Unit</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-300 mb-8 leading-relaxed"
              >
                Ready to transform your wall into a functional work of art? Get your free consultation 
                and discover how we can create the perfect wall unit for your space.
              </motion.p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 ${
                    contact.isClickable ? 'cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02]' : ''
                  }`}
                  onClick={contact.isClickable ? contact.action : undefined}
                >
                  <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {contact.title}
                    </h4>
                    <p className={`text-sm font-medium ${contact.isClickable ? 'text-[var(--color-secondary)] hover:underline' : 'text-[var(--color-secondary)]'}`}>
                      {contact.info}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {contact.subinfo}
                    </p>
                    {contact.isClickable && (
                      <p className="text-gray-300 text-xs mt-1 italic">
                        Click to {contact.title.toLowerCase()}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              {['30-Year Warranty', 'Licensed & Insured', 'Free Consultation', '4.9★ Rating'].map((badge, index) => (
                <div key={badge} className="bg-[var(--color-secondary)] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-luxury"
          >
            <h3 className="text-2xl font-display font-bold text-[var(--color-primary)] mb-6 text-center">
              Get Your Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Project Type</option>
                  <option value="entertainment">Entertainment Wall Unit</option>
                  <option value="kitchen">Kitchen Wall Unit</option>
                  <option value="office">Office Wall Unit</option>
                  <option value="living">Living Room Wall Unit</option>
                  <option value="bedroom">Bedroom Wall Unit</option>
                  <option value="custom">Custom Wall Unit</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <textarea
                  name="message"
                  placeholder="Tell us about your wall unit project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all duration-300 resize-none"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  formStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : formStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : formStatus === 'submitting'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[var(--color-secondary)] hover:bg-[var(--color-accent)]'
                } text-white`}
              >
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && '✓ Message Sent!'}
                {formStatus === 'error' && '✗ Error - Try Again'}
                {formStatus === 'idle' && 'Get My Wall Unit Quote'}
              </motion.button>
            </form>

            <p className="text-center text-sm text-[var(--color-gray)] mt-4">
              {formStatus === 'success'
                ? "Thank you! We'll contact you within 24 hours."
                : '100% Free • No Obligation • Respond within 24 hours'
              }
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20 pt-12 border-t border-white/20"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image
              src="/images/logo.png"
              alt="NUVO WOODWORK"
              width={150}
              height={150}
              className="brightness-0 invert w-auto h-12"
              style={{ maxWidth: '150px' }}
            />
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            © 2024 NUVO WOODWORK. All rights reserved. Where Italian-Brazilian heritage meets Florida luxury. 
            Licensed, insured, and committed to excellence since 2015.
          </p>
        </motion.div>
      </div>
    </section>
  )
}