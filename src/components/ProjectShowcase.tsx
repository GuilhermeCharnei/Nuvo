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

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { projectsData } from '@/data/projects'
import { PROJECT_CATEGORIES, APP_CONFIG, STYLE_CLASSES } from '@/lib/constants'
import type { Project, ProjectCategoryKey } from '@/types'

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
   * Altera a categoria ativa do filtro e faz scroll para a galeria
   */
  const handleCategoryChange = (category: ProjectCategoryKey) => {
    setActiveTab(category)
    
    // Scroll suave para a galeria após uma pequena delay para permitir re-render
    setTimeout(() => {
      if (galleryRef.current) {
        const offset = 100 // Espaço extra para melhor visualização
        const elementPosition = galleryRef.current.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

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
  const handleProjectClick = (projectId: number) => {
    router.push(`/project/${projectId}`)
  }

  return { handleProjectClick }
}

/**
 * Componente para um card individual de projeto
 */
interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
  onClick: (projectId: number) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  isInView, 
  onClick 
}) => {
  // Configurações de animação para o card
  const cardAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { 
      duration: APP_CONFIG.animation.duration.normal, 
      delay: index * 0.1 
    }
  }

  return (
    <motion.div
      layout
      {...cardAnimation}
      onClick={() => onClick(project.id)}
      className="group cursor-pointer hover:scale-105 transition-transform duration-300"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(project.id)
        }
      }}
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
        
        {/* Indicador de preço se disponível */}
        {project.specs?.priceRange && (
          <div className="mt-2 text-sm font-medium text-[var(--color-secondary)]">
            {project.specs.priceRange}
          </div>
        )}
      </div>
    </motion.div>
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

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
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
}

/**
 * Componente principal ProjectShowcase
 */
export default function ProjectShowcase() {
  const ref = useRef(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  // Hooks personalizados para lógica de negócio
  const { activeTab, filteredProjects, handleCategoryChange } = useProjectFilters(projectsData, galleryRef)
  const { handleProjectClick } = useProjectNavigation()

  // Configurações de animação para diferentes seções
  const sectionAnimations = {
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
  }

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
        <CategoryFilters
          activeTab={activeTab}
          onCategoryChange={handleCategoryChange}
          isInView={isInView}
        />

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
    </section>
  )
}