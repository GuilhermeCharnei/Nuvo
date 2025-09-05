'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    ambiente: '',
    mensagem: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle form submission
    console.log('Form submitted:', formData)
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.')
  }

  return (
    <section className="py-20 bg-beige-light" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-graphite mb-6">
            Where Italian Craftsmanship Meets Florida Luxury
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Experience Bespoke Woodworking – Free 3D Design Consultation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('nome')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full p-4 border-2 rounded-lg transition-all duration-300 bg-gray-50 ${
                    focusedField === 'nome' ? 'border-brown-indian bg-white shadow-lg' : 'border-gray-200'
                  }`}
                  placeholder="Your Name"
                  required
                />
              </motion.div>

              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full p-4 border-2 rounded-lg transition-all duration-300 bg-gray-50 ${
                    focusedField === 'email' ? 'border-brown-indian bg-white shadow-lg' : 'border-gray-200'
                  }`}
                  placeholder="Your Email"
                  required
                />
              </motion.div>
            </div>

            <motion.div
              className="relative"
              whileFocus={{ scale: 1.02 }}
            >
              <select
                name="ambiente"
                value={formData.ambiente}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('ambiente')}
                onBlur={() => setFocusedField(null)}
                className={`w-full p-4 border-2 rounded-lg transition-all duration-300 bg-gray-50 ${
                  focusedField === 'ambiente' ? 'border-brown-indian bg-white shadow-lg' : 'border-gray-200'
                }`}
                required
              >
                <option value="">Select the type of space</option>
                <option value="kitchen">Kitchen</option>
                <option value="entertainment">Entertainment Room</option>
                <option value="office">Home Office</option>
                <option value="mudroom">Mudroom</option>
                <option value="laundry">Laundry Room</option>
                <option value="foyer">Foyer</option>
                <option value="commercial">Commercial Space</option>
              </select>
            </motion.div>

            <motion.div
              className="relative"
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('mensagem')}
                onBlur={() => setFocusedField(null)}
                rows={6}
                className={`w-full p-4 border-2 rounded-lg transition-all duration-300 bg-gray-50 resize-none ${
                  focusedField === 'mensagem' ? 'border-brown-indian bg-white shadow-lg' : 'border-gray-200'
                }`}
                placeholder="Tell us about your project..."
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-brown-indian hover:bg-brown-indian/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ background: '#986421' }}
              whileHover={{ 
                background: 'linear-gradient(45deg, #986421, #B8782A)',
                boxShadow: '0 10px 25px rgba(152, 100, 33, 0.3)'
              }}
            >
              Contact Us Now For A Free Quote!
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}