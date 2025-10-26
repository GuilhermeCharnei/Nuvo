/**
 * Componente ProjectShowcase - Galeria de Projetos
 * 
 * Este componente exibe uma galeria filtável dos projetos de wall units da NUVO.
 * Permite visualização por categorias e navegação para páginas individuais de projeto.
 * 
 * Funcionalidades principais:
 * - Grid responsivo de projetos
 * - Filtros por categoria (All, Wet Bars, Wine Storage, etc.)
 * - Navegação para páginas de detalhes
 * - Animações suaves de entrada e transição
 * - Hover effects e feedback visual
 * 
 * Uso:
 * - Clique nos filtros para filtrar por categoria
 * - Clique nos cards para ver detalhes completos do projeto
 * - Scroll automático quando navegado via botão "View Portfolio"
 */

'use client'

import React, { useRef, useCallback, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaTimes, FaClock, FaTools, FaQuoteLeft } from 'react-icons/fa'
import { projectsData } from '@/data/projects'
import { PROJECT_CATEGORIES, APP_CONFIG, STYLE_CLASSES } from '@/lib/constants'
import type { Project, ProjectCategoryKey } from '@/types'
import { trackProjectClick } from './GoogleAnalytics'

/**
 * Hook personalizado para gerenciar estado dos filtros
 */
const useProjectFilters = (projects: Project[], galleryRef: React.RefObject<HTMLDivElement>) => {
  const [activeTab, setActiveTab] = useState<ProjectCategoryKey>('all')

  /**
   * Filtra projetos baseado na categoria ativa
   */
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  /**
   * Altera a categoria ativa do filtro e faz scroll para mostrar filtros e galeria
   */
  const handleCategoryChange = useCallback((category: ProjectCategoryKey) => {
    setActiveTab(category)
    
    // Scroll suave para mostrar os filtros e galeria após uma pequena delay para permitir re-render
    setTimeout(() => {
      // Busca pelos filtros para posicionar melhor o scroll
      const filtersElement = document.querySelector('.category-filters')
      const targetElement = filtersElement || galleryRef.current
      
      if (targetElement) {
        const offset = 120 // Espaço extra para mostrar título e filtros completamente
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }, [galleryRef])

  return {
    activeTab,
    filteredProjects,
    handleCategoryChange
  }
}

/**
 * Hook personalizado para navegação entre projetos
 */
const useProjectNavigation = () => {
  const router = useRouter()

  /**
   * Navega para a página de detalhes de um projeto específico
   */
  const handleProjectClick = useCallback((projectId: number, projectTitle: string) => {
    trackProjectClick(projectId, projectTitle)
    router.push(`/project/${projectId}`)
  }, [router])

  return { handleProjectClick }
}

/**
 * Componente para um card individual de projeto
 */
interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
  onClick: (projectId: number, projectTitle: string) => void
  onLearnMore: (project: Project) => void
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ 
  project, 
  index, 
  isInView, 
  onClick,
  onLearnMore 
}) => {
  // Configurações de animação para o card (memoizado)
  const cardAnimation = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { 
      duration: APP_CONFIG.animation.duration.normal, 
      delay: index * 0.1 
    }
  }), [isInView, index])

  const handleClick = useCallback(() => onClick(project.id, project.title), [onClick, project.id, project.title])
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(project.id, project.title)
    }
  }, [onClick, project.id, project.title])

  return (
    <motion.div
      layout
      {...cardAnimation}
      onClick={handleClick}
      className="group cursor-pointer hover:scale-105 transition-transform duration-300"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={handleKeyDown}
    >
      {/* Container da imagem com overlay */}
      <div className="relative h-80 rounded-2xl overflow-hidden shadow-luxury mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        
        {/* Gradient overlay para legibilidade do texto */}
        <div className={STYLE_CLASSES.gradients.overlay} />
        
        {/* Conteúdo sobreposto na imagem */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="text-xl font-semibold mb-2 transition-all duration-300 group-hover:text-[var(--color-secondary)]">
            {project.title}
          </h3>
          <p className="text-sm text-gray-200 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Indicador de hover */}
        <div className="absolute inset-0 bg-[var(--color-secondary)]/0 group-hover:bg-[var(--color-secondary)]/10 transition-all duration-300" />
      </div>
      
      {/* Informações adicionais abaixo da imagem */}
      <div className="px-2">
        <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2 transition-colors group-hover:text-[var(--color-secondary)]">
          {project.title}
        </h3>
        <p className="text-[var(--color-gray)] text-sm line-clamp-3">
          {project.description}
        </p>
        
        
        {/* Botão Learn More */}
        <div className="mt-4 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation()
              onLearnMore(project)
            }}
            className="flex-1 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            Learn More
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className="flex-1 bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            View Project
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
})

/**
 * Modal de detalhes do projeto
 */
interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-luxury"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[var(--color-primary)]">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <FaTimes className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Gallery */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images?.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )) || (
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Project Details</h3>
                <p className="text-[var(--color-gray)] leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
                {project.clientStory && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-[var(--color-primary)] mb-2">The Story</h4>
                    <p className="text-sm text-[var(--color-gray)]">{project.clientStory}</p>
                  </div>
                )}
              </div>

              {/* Specifications */}
              {project.specs && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Timeline */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[var(--color-secondary)]/10 rounded-lg flex items-center justify-center">
                        <FaClock className="text-[var(--color-secondary)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-primary)] mb-1">Project Timeline</h4>
                        <p className="text-[var(--color-gray)]">{project.specs.timeline}</p>
                      </div>
                    </div>

                    {/* Materials */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[var(--color-secondary)]/10 rounded-lg flex items-center justify-center">
                        <FaTools className="text-[var(--color-secondary)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-primary)] mb-1">Materials Used</h4>
                        <p className="text-[var(--color-gray)]">{project.specs.materials}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-[var(--color-primary)] mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.specs.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></div>
                          <span className="text-sm text-[var(--color-gray)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div className="mt-6 p-4 bg-[var(--color-secondary)]/5 rounded-lg">
                    <h4 className="font-semibold text-[var(--color-primary)] mb-2">Project Dimensions</h4>
                    <p className="text-xl font-bold text-[var(--color-secondary)]">{project.specs.dimensions}</p>
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Client Testimonial</h3>
                  <div className="bg-[var(--color-secondary)]/5 rounded-xl p-6 relative">
                    <FaQuoteLeft className="absolute top-4 left-4 text-[var(--color-secondary)]/20 text-2xl" />
                    <blockquote className="text-[var(--color-gray)] italic text-lg leading-relaxed pl-8">
                      "{project.testimonial.text}"
                    </blockquote>
                    <footer className="mt-4 pl-8">
                      <cite className="font-semibold text-[var(--color-primary)] not-italic">
                        {project.testimonial.client}
                      </cite>
                      <p className="text-sm text-[var(--color-gray)]">{project.testimonial.location}</p>
                    </footer>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-[var(--color-gray)] mb-4">
                  Interested in a similar project for your space?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      const chatbotButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement
                      if (chatbotButton) chatbotButton.click()
                      onClose()
                    }}
                    className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Chat with Sofia
                  </button>
                  <button
                    onClick={() => {
                      const ctaSection = document.querySelector('[data-section="call-to-action"]')
                      if (ctaSection) {
                        ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                      onClose()
                    }}
                    className="bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Componente para os botões de filtro de categoria
 */
interface CategoryFiltersProps {
  activeTab: ProjectCategoryKey
  onCategoryChange: (category: ProjectCategoryKey) => void
  isInView: boolean
}

const CategoryFilters: React.FC<CategoryFiltersProps> = React.memo(({
  activeTab,
  onCategoryChange,
  isInView
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeTab === category.key
              ? 'bg-[var(--color-secondary)] text-white shadow-lg transform scale-105'
              : 'bg-gray-100 text-[var(--color-gray)] hover:bg-[var(--color-secondary)] hover:text-white hover:scale-105'
          }`}
          aria-pressed={activeTab === category.key}
          title={category.description}
        >
          {category.label}
        </button>
      ))}
    </motion.div>
  )
})

/**
 * Componente principal ProjectShowcase
 */
export default function ProjectShowcase() {
  const ref = useRef(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  // Estado do modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Hooks personalizados para lógica de negócio
  const { activeTab, filteredProjects, handleCategoryChange } = useProjectFilters(projectsData, galleryRef)
  const { handleProjectClick } = useProjectNavigation()

  // Handlers do modal
  const handleLearnMore = useCallback((project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300) // Delay para a animação
  }, [])

  // Configurações de animação para diferentes seções (memoizado)
  const sectionAnimations = useMemo(() => ({
    header: {
      initial: { opacity: 0, y: 30 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: { duration: 0.8 }
    },
    viewMore: {
      initial: { opacity: 0, y: 30 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: { duration: 0.8, delay: 0.6 }
    }
  }), [isInView])

  return (
    <section id="portfolio" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da seção */}
        <motion.div
          {...sectionAnimations.header}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-primary)] mb-6">
            Our Wall Unit Portfolio
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-3xl mx-auto leading-relaxed">
            Explore our collection of custom wall units that transform spaces into architectural masterpieces. 
            Each project showcases our commitment to craftsmanship, innovation, and personalized design.
          </p>
          <div className="mt-8 text-sm text-[var(--color-secondary)] font-medium">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
          </div>
        </motion.div>

        {/* Filtros de categoria */}
        <div className="category-filters">
          <CategoryFilters
            activeTab={activeTab}
            onCategoryChange={handleCategoryChange}
            isInView={isInView}
          />
        </div>

        {/* Grid de projetos */}
        <motion.div
          ref={galleryRef}
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={handleProjectClick}
              onLearnMore={handleLearnMore}
            />
          ))}
        </motion.div>

        {/* Botão para ver mais projetos */}
        <motion.div
          {...sectionAnimations.viewMore}
          className="text-center mt-16"
        >
          <button
            onClick={() => handleCategoryChange('all')}
            className={STYLE_CLASSES.buttons.ghost}
            disabled={activeTab === 'all'}
          >
            {activeTab === 'all' ? 'Showing All Wall Units' : 'View All Wall Units'}
          </button>
          
          {/* Informações adicionais */}
          <div className="mt-6 text-sm text-[var(--color-gray)]">
            <p>
              Ready to start your project?{' '}
              <button
                onClick={() => {
                  const chatbotButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement
                  if (chatbotButton) chatbotButton.click()
                }}
                className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] font-medium underline"
              >
                Chat with Sofia
              </button>{' '}
              for personalized assistance.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal de detalhes do projeto */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}