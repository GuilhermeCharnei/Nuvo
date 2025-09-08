'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowLeft, FaRuler, FaDollarSign, FaClock, FaTools } from 'react-icons/fa'
import { useState } from 'react'

// Project data will be moved to a shared file later
const projectsData = [
  {
    id: 1,
    title: 'Wet Bar Wall Unit',
    category: 'bar',
    mainImage: '/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg',
    images: [
      '/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg',
    ],
    description: 'Sophisticated wet bar with integrated refrigeration, stone countertops, and LED lighting',
    fullDescription: 'This stunning wet bar wall unit transforms any space into an elegant entertaining area. Featuring premium granite countertops, integrated refrigeration system, and custom LED lighting that creates the perfect ambiance for hosting guests.',
    specs: {
      dimensions: '12\' W x 8\' H x 2\' D',
      materials: 'Walnut wood, Granite countertop, Stainless steel',
      features: ['Temperature-controlled storage', 'LED strip lighting', 'Integrated sink', 'Glass storage'],
      timeline: '8-10 weeks',
      priceRange: '$45,000 - $65,000'
    },
    clientStory: 'Our client wanted to create the perfect entertaining space in their luxury home. The challenge was integrating modern functionality with classic elegance. We designed this custom wet bar that seamlessly blends premium materials with cutting-edge technology.',
    testimonial: {
      text: 'NUVO exceeded our expectations. This wet bar has become the centerpiece of our home entertainment.',
      client: 'Michael & Sarah Johnson',
      location: 'Boca Raton, FL'
    }
  },
  {
    id: 2,
    title: 'Corporate Bar Unit',
    category: 'bar',
    mainImage: '/images/482083207_619297530845020_484943003542860880_n_1757113219623.jpg',
    images: [
      '/images/482083207_619297530845020_484943003542860880_n_1757113219623.jpg',
    ],
    description: 'Luxury corporate bar with curved design, premium finishes, and integrated storage',
    fullDescription: 'A sophisticated corporate bar designed for executive spaces. The curved design creates an inviting atmosphere while premium finishes reflect the company\'s commitment to excellence.',
    specs: {
      dimensions: '16\' W x 9\' H x 3\' D',
      materials: 'Mahogany wood, Quartz surface, Brass accents',
      features: ['Curved design', 'Executive storage', 'Wine refrigeration', 'Display lighting'],
      timeline: '10-12 weeks',
      priceRange: '$55,000 - $75,000'
    },
    clientStory: 'A leading law firm wanted to create an impressive client entertainment area. The curved design solution maximized the space while creating an elegant focal point for their office.',
    testimonial: {
      text: 'This bar unit has elevated our client meetings and office culture tremendously.',
      client: 'David Martinez, Managing Partner',
      location: 'Fort Lauderdale, FL'
    }
  },
  // Add more projects as needed
]

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)
  
  const project = projectsData.find(p => p.id === parseInt(params.id as string))
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.push('/')}
            className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const handleStartProject = () => {
    router.push('/')
    setTimeout(() => {
      const chatbotButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement
      if (chatbotButton) {
        chatbotButton.click()
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[var(--color-primary)] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-white hover:text-[var(--color-secondary)] transition-colors"
          >
            <FaArrowLeft /> Back to Portfolio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Image Gallery */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-luxury mb-6"
            >
              <Image
                src={project.images[selectedImage] || project.mainImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            
            {/* Image Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                      selectedImage === index ? 'ring-2 ring-[var(--color-secondary)]' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl font-display font-bold text-[var(--color-primary)] mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {project.fullDescription}
              </p>

              {/* Specs */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <FaRuler className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)]">Dimensions</h3>
                    <p className="text-gray-600">{project.specs.dimensions}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaTools className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)]">Materials</h3>
                    <p className="text-gray-600">{project.specs.materials}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)]">Timeline</h3>
                    <p className="text-gray-600">{project.specs.timeline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaDollarSign className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)]">Investment Range</h3>
                    <p className="text-gray-600">{project.specs.priceRange}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-[var(--color-primary)] mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.specs.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleStartProject}
                className="w-full bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Get Quote for Similar Project
              </button>
            </motion.div>
          </div>
        </div>

        {/* Client Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Project Story</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {project.clientStory}
          </p>
          
          {/* Testimonial */}
          <div className="border-l-4 border-[var(--color-secondary)] pl-6">
            <p className="text-lg italic text-gray-700 mb-4">
              "{project.testimonial.text}"
            </p>
            <div className="text-sm text-gray-600">
              <div className="font-semibold">{project.testimonial.client}</div>
              <div>{project.testimonial.location}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}