/**
 * Componente Chatbot Sofia - Sistema de Conversação Inteligente
 * 
 * Este componente implementa um chatbot humanizado para captura de leads
 * e assistência a clientes interessados em wall units da NUVO.
 * 
 * Funcionalidades principais:
 * - Conversa guiada para qualificação de leads
 * - Respostas a perguntas livres sobre produtos/serviços
 * - Interface responsiva e acessível
 * - Animações suaves e feedback visual
 * - Coleta estruturada de dados do cliente
 * 
 * Fluxo de conversa:
 * 1. Boas-vindas e seleção do tipo de projeto
 * 2. Definição de orçamento
 * 3. Timeline do projeto
 * 4. Características desejadas
 * 5. Coleta de dados de contato
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes, FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa'
import Image from 'next/image'
import { CHATBOT_MESSAGES, APP_CONFIG, COMPANY_INFO } from '@/lib/constants'
import type { ChatMessage, ConversationStage, ChatbotState } from '@/types'

/**
 * Utilitário para gerar IDs únicos de mensagens
 */
const generateMessageId = (): string => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Utilitário para criar mensagens do bot
 */
const createBotMessage = (content: string, hasOptions = false, options: string[] = []): ChatMessage => ({
  id: generateMessageId(),
  content,
  sender: 'bot',
  timestamp: new Date(),
  hasOptions,
  options
})

/**
 * Utilitário para criar mensagens do usuário
 */
const createUserMessage = (content: string): ChatMessage => ({
  id: generateMessageId(),
  content,
  sender: 'user',
  timestamp: new Date()
})

/**
 * Hook customizado para gerenciar a lógica de conversa
 * Centraliza toda a lógica de fluxo conversacional
 */
const useConversationFlow = () => {
  const [state, setState] = useState<ChatbotState>({
    isOpen: false,
    messages: [],
    stage: 'greeting',
    isWaitingForResponse: false,
    userData: {}
  })

  /**
   * Adiciona uma nova mensagem ao chat
   */
  const addMessage = (message: ChatMessage) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }))
  }

  /**
   * Processa respostas do usuário baseado no estágio da conversa
   */
  const processUserResponse = (response: string) => {
    // Adiciona a mensagem do usuário
    addMessage(createUserMessage(response))

    // Processa baseado no estágio atual
    switch (state.stage) {
      case 'greeting':
        handleTypeSelection(response)
        break
      case 'type_selection':
        handleBudgetInquiry(response)
        break
      case 'budget_inquiry':
        handleTimelineInquiry(response)
        break
      case 'timeline_inquiry':
        handleFeaturesInquiry(response)
        break
      case 'features_inquiry':
        handleContactCollection()
        break
      default:
        handleFreeTextQuestion(response)
    }
  }

  /**
   * Manipula seleção do tipo de projeto
   */
  const handleTypeSelection = (response: string) => {
    setState(prev => ({
      ...prev,
      stage: 'budget_inquiry',
      userData: { ...prev.userData, projectType: response }
    }))

    // Resposta personalizada baseada na seleção
    let botResponse = ''
    if (response === 'Something Custom') {
      botResponse = "That's perfectly fine! Sometimes the best projects start with unique ideas. 😊\n\nWhat's your approximate budget range? This helps me understand what options might work best for you."
    } else {
      botResponse = `${response} - oh, I LOVE those! 😍 They create such stunning focal points and really transform a space.\n\nWhat's your approximate budget range? This helps me tailor my suggestions perfectly for you.`
    }

    setTimeout(() => {
      addMessage(createBotMessage(botResponse, true, [...CHATBOT_MESSAGES.budgetOptions]))
    }, 1000)
  }

  /**
   * Manipula definição de orçamento
   */
  const handleBudgetInquiry = (response: string) => {
    setState(prev => ({
      ...prev,
      stage: 'timeline_inquiry',
      userData: { ...prev.userData, budget: response }
    }))

    let botResponse = ''
    if (response === 'Not sure yet') {
      botResponse = "No worries at all! Let me break it down for you. 💰\n\nOur wall units typically range:\n• Display Units: $15K-$50K\n• Kitchen Wall Units: $25K-$75K\n• Entertainment Centers: $35K-$85K\n• Wet Bars: $45K-$100K\n• Wine Storage: $60K-$150K+\n\nEvery project is custom, so there's flexibility! When would you love to have your new wall unit ready?"
    } else {
      botResponse = "Perfect! That budget range gives us some really exciting options to work with! 🎉\n\nWhen would you ideally like to have your beautiful new wall unit completed?"
    }

    setTimeout(() => {
      addMessage(createBotMessage(botResponse, true, [...CHATBOT_MESSAGES.timelineOptions]))
    }, 1000)
  }

  /**
   * Manipula definição de timeline
   */
  const handleTimelineInquiry = (response: string) => {
    setState(prev => ({
      ...prev,
      stage: 'features_inquiry',
      userData: { ...prev.userData, timeline: response }
    }))

    const botResponse = `That timeline works perfectly! ${response === 'No rush' ? 'Taking your time allows us to create something truly extraordinary! 🎨' : 'We can definitely work with that timeline! ⏰'}\n\nWhat features are most exciting to you for your wall unit?`

    setTimeout(() => {
      addMessage(createBotMessage(botResponse))
    }, 1000)
  }

  /**
   * Manipula discussão sobre características
   */
  const handleFeaturesInquiry = (response: string) => {
    setState(prev => ({
      ...prev,
      stage: 'contact_collection',
      userData: { ...prev.userData, features: [response] }
    }))

    const botResponse = `Excellent choice! ${response} will make your space absolutely stunning! ✨\n\nI'm so excited about your project! Let me connect you with our design team for a personalized consultation. What's the best way to reach you?`

    setTimeout(() => {
      addMessage(createBotMessage(botResponse))
    }, 1000)
  }

  /**
   * Inicia coleta de dados de contato
   */
  const handleContactCollection = () => {
    const botResponse = "Perfect! I can see this is going to be an amazing project! 🌟\n\nTo get started with your custom design, I'll need:\n• Your name\n• Best phone number\n• Email address\n\nOur design team will reach out within 24 hours to schedule your complimentary consultation!"

    setTimeout(() => {
      addMessage(createBotMessage(botResponse))
    }, 1000)
  }

  /**
   * Respostas para perguntas livres (fora do fluxo principal)
   */
  const handleFreeTextQuestion = (question: string) => {
    const lowerQuestion = question.toLowerCase()
    let response = ''

    // Base de conhecimento para perguntas frequentes
    if (lowerQuestion.includes('price') || lowerQuestion.includes('cost') || lowerQuestion.includes('quanto')) {
      response = "Great question about pricing! 💰\n\nOur wall units typically range from $15K to $150K+ depending on complexity and materials. Here's a rough breakdown:\n\n• Display Units: $15K-$50K\n• Kitchen/Office: $25K-$75K\n• Entertainment Centers: $35K-$85K\n• Wet Bars: $45K-$100K\n• Wine Storage: $60K-$150K+\n\nEvery project is custom, so the final price depends on your specific needs, materials, and features. Would you like me to connect you with our team for a personalized quote?"
    } 
    else if (lowerQuestion.includes('time') || lowerQuestion.includes('how long') || lowerQuestion.includes('timeline')) {
      response = "Timeline is so important for planning! ⏰\n\nTypical project schedule:\n• Design & Planning: 1-2 weeks\n• Manufacturing: 4-8 weeks\n• Installation: 1-3 days\n\nTotal timeline is usually 6-10 weeks from design approval to completion. We can expedite for rush projects too!\n\nWhen would you ideally like your project completed?"
    }
    else if (lowerQuestion.includes('material') || lowerQuestion.includes('wood') || lowerQuestion.includes('quality')) {
      response = "I love talking about our materials! 🌳\n\nWe use premium materials including:\n• Exotic woods like Walnut, Mahogany, Zebrano\n• Natural stone: Marble, Granite, Quartz\n• Metal accents: Brass, Steel, Bronze\n• Custom stains and finishes\n• Temperature-controlled storage systems\n\nEverything comes with our comprehensive warranty. What style are you envisioning?"
    }
    else if (lowerQuestion.includes('visit') || lowerQuestion.includes('showroom') || lowerQuestion.includes('factory')) {
      response = `I'd love for you to see our craftsmanship in person! 🏭\n\nYou can visit our factory at:\n${COMPANY_INFO.address.full}\n\nWe do tours by appointment so our team can give you their full attention. You'll see active projects and meet our skilled craftsmen!\n\nWould you like me to arrange a visit?`
    }
    else if (lowerQuestion.includes('install') || lowerQuestion.includes('delivery')) {
      response = "Installation is one of my favorite parts! 🔨\n\nOur process is seamless:\n1. Pre-installation site prep\n2. Professional delivery\n3. Precision installation (1-3 days)\n4. Final finishing touches\n5. Quality inspection\n6. Care instructions\n\nWe handle everything - no mess, no stress! Our installers are true artists.\n\nAny specific installation concerns?"
    }
    else if (lowerQuestion.includes('wine') || lowerQuestion.includes('bar') || lowerQuestion.includes('entertainment')) {
      response = "You have excellent taste! Those are some of our most popular and impressive units! 🍷\n\nSpecialty features we can include:\n• Temperature-controlled wine storage\n• LED lighting systems\n• Glass displays\n• Wet bar with plumbing\n• Hidden storage\n• TV integration\n\nWhich type interests you most?"
    }
    else {
      response = "That's a great question! 🤔\n\nI want to make sure I give you the best answer possible. Let me connect you directly with one of our specialists who can address your specific needs in detail.\n\nIn the meantime, is there anything else about our wall units I can help with?"
    }

    setTimeout(() => {
      addMessage(createBotMessage(response))
    }, 1000)
  }

  return {
    state,
    setState,
    addMessage,
    processUserResponse
  }
}

/**
 * Componente principal do Chatbot
 */
export default function Chatbot() {
  const { state, setState, addMessage, processUserResponse } = useConversationFlow()
  const [currentInput, setCurrentInput] = useState('')
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * Scroll automático para a última mensagem
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [state.messages])

  /**
   * Popup de boas-vindas após delay
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.messages.length === 0) {
        setShowWelcomePopup(true)
      }
    }, APP_CONFIG.chatbot.welcomeDelay)

    return () => clearTimeout(timer)
  }, [state.messages.length])

  /**
   * Foca no input quando o chat abre
   */
  useEffect(() => {
    if (state.isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [state.isOpen])

  /**
   * Abre o chatbot e inicia a conversa
   */
  const handleOpenChat = () => {
    setState(prev => ({ ...prev, isOpen: true }))
    setShowWelcomePopup(false)
    
    if (state.messages.length === 0) {
      setTimeout(() => {
        addMessage(createBotMessage(
          CHATBOT_MESSAGES.welcome,
          true,
          [...CHATBOT_MESSAGES.typeOptions]
        ))
      }, 500)
    }
  }

  /**
   * Fecha o chatbot
   */
  const handleCloseChat = () => {
    setState(prev => ({ ...prev, isOpen: false }))
  }

  /**
   * Envia mensagem do usuário
   */
  const handleSendMessage = () => {
    if (currentInput.trim()) {
      processUserResponse(currentInput.trim())
      setCurrentInput('')
    }
  }

  /**
   * Trata tecla Enter no input
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  /**
   * Seleciona uma opção predefinida
   */
  const handleOptionSelect = (option: string) => {
    processUserResponse(option)
  }

  return (
    <>
      {/* Popup de boas-vindas */}
      <AnimatePresence>
        {showWelcomePopup && !state.isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-luxury p-4 max-w-sm"
          >
            <div className="flex items-start gap-3">
              <Image
                src="/images/logo.png"
                alt="NUVO"
                width={32}
                height={32}
                className="rounded-full flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  Hi! I'm Sofia from NUVO! 👋
                </p>
                <p className="text-xs text-gray-600 mb-3">
                  Ready to transform your space with a custom wall unit?
                </p>
                <button
                  onClick={handleOpenChat}
                  className="text-xs bg-[var(--color-secondary)] text-white px-3 py-1 rounded-full hover:bg-[var(--color-accent)] transition-colors"
                >
                  Let's Chat!
                </button>
              </div>
              <button
                onClick={() => setShowWelcomePopup(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante do chatbot */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => state.isOpen ? handleCloseChat() : handleOpenChat()}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white rounded-full shadow-luxury flex items-center justify-center transition-all duration-300 touch-manipulation"
        data-chatbot-trigger
        aria-label={state.isOpen ? "Close chat" : "Open chat with Sofia"}
      >
        {state.isOpen ? <FaTimes className="text-lg sm:text-xl" /> : <FaComments className="text-lg sm:text-xl" />}
        {!state.isOpen && state.messages.length === 0 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        )}
      </motion.button>

      {/* Interface principal do chat */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: APP_CONFIG.chatbot.animationDuration / 1000 }}
            className="fixed bottom-20 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-luxury overflow-hidden"
          >
            {/* Header do chat */}
            <div className="bg-[var(--color-primary)] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="Sofia - NUVO Assistant"
                  width={32}
                  height={32}
                  className="rounded-full bg-white p-1"
                />
                <div>
                  <h3 className="font-semibold text-sm">Sofia</h3>
                  <p className="text-xs opacity-80">NUVO Design Assistant</p>
                </div>
              </div>
              <button
                onClick={handleCloseChat}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Área de mensagens */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {state.messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaRobot className="text-white text-sm" />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-first' : ''}`}>
                    <div
                      className={`p-3 rounded-2xl text-sm whitespace-pre-line ${
                        message.sender === 'user'
                          ? 'bg-[var(--color-secondary)] text-white ml-auto'
                          : 'bg-white text-gray-800 shadow-sm'
                      }`}
                    >
                      {message.content}
                    </div>
                    
                    {/* Opções de resposta rápida */}
                    {message.hasOptions && message.options && (
                      <div className="mt-2 space-y-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                            className="block w-full text-left p-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[var(--color-secondary)] transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-gray-600 text-sm" />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input de mensagem */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentInput.trim()}
                  className="px-4 py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}