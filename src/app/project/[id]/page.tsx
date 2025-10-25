/**
 * Página Individual de Projeto - Detalhes Completos
 *
 * Esta página exibe informações detalhadas de um projeto específico de wall unit.
 * Inclui galeria de imagens, especificações técnicas, história do projeto e testemunhos.
 *
 * Funcionalidades principais:
 * - Galeria de imagens com navegação por thumbnails
 * - Especificações técnicas completas (dimensões, materiais, timeline, preço)
 * - História do projeto e desafios enfrentados
 * - Testemunhos autênticos de clientes
 * - Call-to-action para iniciar projeto similar
 * - Navegação de volta ao portfolio
 *
 * Roteamento:
 * - URL dinâmica: /project/[id]
 * - Parâmetro id corresponde ao ID do projeto nos dados
 * - Fallback para página 404 se projeto não encontrado
 *
 * SEO Features:
 * - Dynamic metadata generation for each project
 * - Open Graph tags for social media sharing
 * - Twitter Card support
 * - Canonical URLs
 * - Structured data (Product schema)
 */

'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowLeft, FaRuler, FaDollarSign, FaClock, FaTools, FaQuoteLeft } from 'react-icons/fa'
import { useState } from 'react'
import { projectsData } from '@/data/projects'
import { APP_CONFIG, STYLE_CLASSES, COMPANY_INFO } from '@/lib/constants'
import type { Project, RouteParams, ProjectSpecs, ClientTestimonial } from '@/types'

/**
 * Hook customizado para gerenciar galeria de imagens
 */
const useImageGallery = (project: Project) => {
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Combina imagem principal com array de imagens adicionais
  const projectImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image]
  
  const currentImage = projectImages[selectedImage] || project.image
  
  /**
   * Seleciona uma imagem específica da galeria
   */
  const handleImageSelect = (index: number) => {
    if (index >= 0 && index < projectImages.length) {
      setSelectedImage(index)
    }
  }
  
  return {
    projectImages,
    currentImage,
    selectedImage,
    handleImageSelect
  }
}

/**
 * Hook customizado para navegação
 */
const useProjectNavigation = () => {
  const router = useRouter()
  
  /**
   * Volta para a página principal (portfolio)
   */
  const handleBackToPortfolio = () => {
    router.push('/')
    // Scroll para seção de portfolio após navegação
    setTimeout(() => {
      const portfolioSection = document.querySelector('#portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ 
          behavior: APP_CONFIG.scroll.behavior 
        })
      }
    }, 500)
  }
  
  /**
   * Inicia novo projeto similar através do chatbot
   */
  const handleStartSimilarProject = () => {
    router.push('/')
    setTimeout(() => {
      const chatbotButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement
      if (chatbotButton) {
        chatbotButton.click()
      }
    }, 1000)
  }
  
  return {
    handleBackToPortfolio,
    handleStartSimilarProject
  }
}

/**
 * Componente para galeria de imagens do projeto
 */
interface ImageGalleryProps {
  projectImages: string[]
  currentImage: string
  selectedImage: number
  onImageSelect: (index: number) => void
  projectTitle: string
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  projectImages,
  currentImage,
  selectedImage,
  onImageSelect,
  projectTitle
}) => {
  return (
    <div>
      {/* Imagem principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-luxury mb-6"
      >
        <Image
          src={currentImage}
          alt={`${projectTitle} - Main view`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </motion.div>
      
      {/* Thumbnails (só mostra se tiver múltiplas imagens) */}
      {projectImages.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {projectImages.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageSelect(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                selectedImage === index 
                  ? 'ring-2 ring-[var(--color-secondary)] scale-105' 
                  : 'hover:ring-2 hover:ring-gray-300 hover:scale-105'
              }`}
              aria-label={`View image ${index + 1} of ${projectTitle}`}
            >
              <Image
                src={image}
                alt={`${projectTitle} view ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Componente para especificações técnicas
 */
interface ProjectSpecsProps {
  specs: ProjectSpecs
}

const ProjectSpecsComponent: React.FC<ProjectSpecsProps> = ({ specs }) => {
  const specItems = [
    {
      icon: FaRuler,
      label: 'Dimensions',
      value: specs.dimensions,
      description: 'Overall project dimensions'
    },
    {
      icon: FaTools,
      label: 'Materials',
      value: specs.materials,
      description: 'Premium materials used'
    },
    {
      icon: FaClock,
      label: 'Timeline',
      value: specs.timeline,
      description: 'Estimated completion time'
    },
    {
      icon: FaDollarSign,
      label: 'Investment Range',
      value: specs.priceRange,
      description: 'Price range for similar projects'
    }
  ]

  return (
    <div className="space-y-6 mb-8">
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
        Project Specifications
      </h3>
      
      {specItems.map(({ icon: Icon, label, value, description }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
        >
          <Icon className="text-[var(--color-secondary)] mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-semibold text-[var(--color-primary)] mb-1">
              {label}
            </h4>
            <p className="text-gray-700 font-medium mb-1">
              {value}
            </p>
            <p className="text-sm text-gray-500">
              {description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/**
 * Componente para características do projeto
 */
interface ProjectFeaturesProps {
  features: string[]
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features }) => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-[var(--color-primary)] mb-4">
        Key Features
      </h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-3 text-gray-600"
          >
            <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full flex-shrink-0"></div>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Componente para testemunho do cliente
 */
interface TestimonialProps {
  testimonial: ClientTestimonial
  projectTitle: string
}

const TestimonialComponent: React.FC<TestimonialProps> = ({ 
  testimonial, 
  projectTitle 
}) => {
  return (
    <div className="border-l-4 border-[var(--color-secondary)] pl-6 bg-white p-6 rounded-r-lg">
      <div className="flex items-start gap-3 mb-4">
        <FaQuoteLeft className="text-[var(--color-secondary)] text-xl flex-shrink-0 mt-1" />
        <p className="text-lg italic text-gray-700 leading-relaxed">
          {testimonial.text}
        </p>
      </div>
      <div className="text-sm text-gray-600">
        <div className="font-semibold text-[var(--color-primary)]">
          {testimonial.client}
        </div>
        <div className="flex items-center gap-2">
          <span>{testimonial.location}</span>
          <span className="text-gray-400">•</span>
          <span>{projectTitle} Client</span>
        </div>
      </div>
    </div>
  )
}

/**
 * Componente de página não encontrada
 */
const ProjectNotFound: React.FC<{ onBackHome: () => void }> = ({ onBackHome }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center max-w-md mx-auto px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
        Project Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The project you're looking for doesn't exist or may have been moved.
      </p>
      <button 
        onClick={onBackHome}
        className={STYLE_CLASSES.buttons.primary}
      >
        Back to Portfolio
      </button>
    </div>
  </div>
)

/**
 * Componente principal da página de projeto
 */
export default function ProjectPage() {
  const params = useParams<RouteParams>()
  const { handleBackToPortfolio, handleStartSimilarProject } = useProjectNavigation()
  
  // Busca o projeto pelos dados usando o ID da URL
  const project = projectsData.find(p => p.id === parseInt(params.id))
  
  // Hook para gerenciar galeria de imagens
  const { projectImages, currentImage, selectedImage, handleImageSelect } = useImageGallery(project || projectsData[0])
  
  // Se projeto não encontrado, mostra página de erro
  if (!project) {
    return <ProjectNotFound onBackHome={handleBackToPortfolio} />
  }

  // Configurações de animação para seções
  const sectionAnimations = {
    header: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    content: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.2 }
    },
    story: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.4 }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header com navegação */}
      <motion.div 
        {...sectionAnimations.header}
        className="bg-[var(--color-primary)] text-white py-6"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={handleBackToPortfolio}
            className="flex items-center gap-2 text-white hover:text-[var(--color-secondary)] transition-colors"
            aria-label="Return to project portfolio"
          >
            <FaArrowLeft /> Back to Portfolio
          </button>
          
          <div className="text-right">
            <div className="text-sm opacity-80">
              {COMPANY_INFO.name}
            </div>
            <div className="text-xs opacity-60">
              Custom Wall Units
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Galeria de imagens */}
          <ImageGallery
            projectImages={projectImages}
            currentImage={currentImage}
            selectedImage={selectedImage}
            onImageSelect={handleImageSelect}
            projectTitle={project.title}
          />

          {/* Detalhes do projeto */}
          <motion.div {...sectionAnimations.content}>
            {/* Título e descrição */}
            <h1 className="text-4xl font-display font-bold text-[var(--color-primary)] mb-4">
              {project.title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {/* Especificações técnicas */}
            {project.specs && (
              <ProjectSpecsComponent specs={project.specs} />
            )}

            {/* Características */}
            {project.specs?.features && (
              <ProjectFeatures features={project.specs.features} />
            )}

            {/* Call-to-action */}
            <button
              onClick={handleStartSimilarProject}
              className={`w-full ${STYLE_CLASSES.buttons.primary} py-4 text-lg`}
              aria-label={`Get quote for project similar to ${project.title}`}
            >
              Get Quote for Similar Project
            </button>
            
            {/* Informações de contato */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                Our design team will contact you within 24 hours to discuss your project.
              </p>
            </div>
          </motion.div>
        </div>

        {/* História do projeto e testemunho */}
        {(project.clientStory || project.testimonial) && (
          <motion.div
            {...sectionAnimations.story}
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            {project.clientStory && (
              <>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  Project Story
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.clientStory}
                </p>
              </>
            )}
            
            {project.testimonial && (
              <>
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                  Client Testimonial
                </h3>
                <TestimonialComponent 
                  testimonial={project.testimonial} 
                  projectTitle={project.title}
                />
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}