/**
 * Componente Hero - Seção principal da página inicial
 * 
 * Este componente representa a primeira impressão do usuário na página,
 * incluindo título principal, chamada para ação e estatísticas da empresa.
 * 
 * Funcionalidades:
 * - Exibição do título e descrição principal
 * - Botões de ação (Start Project / View Portfolio)
 * - Estatísticas da empresa
 * - Animações suaves de entrada
 * - Efeito de fundo com textura de madeira
 */

'use client'

import { motion } from 'framer-motion'
import { COMPANY_INFO, APP_CONFIG, STYLE_CLASSES } from '@/lib/constants'
import type { EventHandler } from '@/types'

/**
 * Hook personalizado para handlers de navegação
 * Centraliza a lógica de navegação para reutilização
 */
const useNavigationHandlers = () => {
  /**
   * Abre o chatbot Sofia para iniciar um projeto
   * Busca o botão do chatbot e simula um clique
   */
  const handleStartProject: EventHandler = () => {
    const chatbotButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement
    if (chatbotButton) {
      chatbotButton.click()
    } else {
      console.warn('Chatbot trigger not found. Make sure the chatbot component is rendered.')
    }
  }

  /**
   * Navega para a seção de portfolio
   * Faz scroll suave até a galeria de projetos
   */
  const handleViewPortfolio: EventHandler = () => {
    const portfolioSection = document.querySelector('#portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: APP_CONFIG.scroll.behavior,
        block: 'start'
      })
    } else {
      console.warn('Portfolio section not found. Make sure the section has id="portfolio".')
    }
  }

  return { handleStartProject, handleViewPortfolio }
}

/**
 * Componente principal Hero
 * Renderiza a seção de abertura da página com título, botões e estatísticas
 */
export default function Hero() {
  const { handleStartProject, handleViewPortfolio } = useNavigationHandlers()

  // Configurações de animação para diferentes elementos
  const animationVariants = {
    // Animação do título principal
    title: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1, delay: 0.5 }
    },
    // Animação da descrição
    description: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.7 }
    },
    // Animação dos botões
    buttons: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.9 }
    },
    // Animação das estatísticas
    stats: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, delay: 1.1 }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo com efeito de textura de madeira */}
      <div 
        className="absolute inset-0 bg-[var(--color-primary)] wood-texture"
        aria-hidden="true"
      />
      
      {/* Overlay escuro para melhor legibilidade do texto */}
      <div 
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      {/* Container principal do conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-4 md:px-6 text-center">
        
        {/* Seção do título e descrição */}
        <motion.div
          className="mb-8 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título principal com gradiente */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 md:mb-8 leading-tight px-2 sm:px-0 break-words"
            {...animationVariants.title}
          >
            {/* Primeira linha do título */}
            Wall Units That
            <br />
            {/* Segunda linha com gradiente especial */}
            <span className={STYLE_CLASSES.gradients.text}>Transform Spaces</span>
          </motion.h1>
          
          {/* Descrição da empresa */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-gray-200 font-light px-2 sm:px-4"
            {...animationVariants.description}
          >
            {COMPANY_INFO.description}
          </motion.p>

          {/* Container dos botões de ação */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2 sm:px-0"
            {...animationVariants.buttons}
          >
            {/* Botão principal - Iniciar projeto */}
            <button
              onClick={handleStartProject}
              className={`${STYLE_CLASSES.buttons.primary} w-full sm:w-auto min-h-[48px]`}
              aria-label="Start your custom wall unit project with NUVO"
            >
              Start Your Project
            </button>
            
            {/* Botão secundário - Ver portfolio */}
            <button
              onClick={handleViewPortfolio}
              className={`${STYLE_CLASSES.buttons.secondary} w-full sm:w-auto min-h-[48px]`}
              aria-label="View our portfolio of completed wall unit projects"
            >
              View Portfolio
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Seção de estatísticas da empresa */}
      <motion.div
        {...animationVariants.stats}
        className="absolute bottom-20 left-0 right-0 z-10"
      >
        <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
          {/* Grid responsivo das estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-center text-white">
            
            {/* Estatística: Anos de experiência */}
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)] mb-1 sm:mb-2">
                {COMPANY_INFO.stats.experience}
              </div>
              <div className="text-xs sm:text-sm opacity-80">
                Years Experience
              </div>
            </div>
            
            {/* Estatística: Clientes satisfeitos */}
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)] mb-1 sm:mb-2">
                {COMPANY_INFO.stats.clients}
              </div>
              <div className="text-xs sm:text-sm opacity-80">
                Happy Clients
              </div>
            </div>
            
            {/* Estatística: Taxa de sucesso */}
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)] mb-1 sm:mb-2">
                {COMPANY_INFO.stats.successRate}
              </div>
              <div className="text-xs sm:text-sm opacity-80">
                Success Rate
              </div>
            </div>
            
            {/* Estatística: Avaliação dos clientes */}
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)] mb-1 sm:mb-2">
                {COMPANY_INFO.stats.rating}
              </div>
              <div className="text-xs sm:text-sm opacity-80">
                Client Rating
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}