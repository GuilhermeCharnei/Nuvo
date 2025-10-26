/**
 * Componente Chatbot Sofia - Vendedor Inteligente de Wall Units
 * 
 * Chatbot consultivo que entende necessidades específicas e recomenda 
 * soluções personalizadas de Wall Units NUVO.
 * 
 * Funcionalidades principais:
 * - Descoberta inteligente de necessidades
 * - Recomendações personalizadas baseadas em perfil
 * - Qualificação de leads consultiva
 * - Interface conversacional natural
 * - Integração com base de conhecimento de produtos
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes, FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa'
import Image from 'next/image'
import { CHATBOT_MESSAGES, APP_CONFIG, COMPANY_INFO } from '@/lib/constants'
import { analyzeCustomerNeeds, generateIntelligentResponse, generateProposal, isReadyForProposal, type CustomerProfile } from '@/lib/chatbotLogic'
import type { ChatMessage, ConversationStage, ChatbotState } from '@/types'
import { trackChatbotOpen, trackChatbotMessage } from './GoogleAnalytics'

/**
 * Contador para IDs únicos (evita hydration mismatch)
 */
let messageCounter = 0;

/**
 * Utilitário para gerar IDs únicos de mensagens
 */
const generateMessageId = (): string => {
  messageCounter += 1;
  return `msg_${messageCounter}`;
}

/**
 * Utilitário para criar mensagens do bot
 */
const createBotMessage = (content: string, hasOptions = false, options: string[] = []): ChatMessage => ({
  id: generateMessageId(),
  content,
  sender: 'bot',
  timestamp: new Date(Date.now()),
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
  timestamp: new Date(Date.now())
})

/**
 * Hook para lógica de conversa inteligente
 * Implementa vendas consultivas focadas em Wall Units
 */
const useIntelligentConversation = () => {
  const [state, setState] = useState<ChatbotState>({
    isOpen: false,
    messages: [],
    stage: 'greeting',
    isWaitingForResponse: false,
    userData: {}
  })

  /**
   * Adiciona nova mensagem ao chat
   */
  const addMessage = (message: ChatMessage) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }))
  }

  /**
   * Processa resposta do usuário com inteligência de vendas
   */
  const processUserResponse = (response: string) => {
    // Adiciona mensagem do usuário
    addMessage(createUserMessage(response))

    // Processa baseado no estágio da conversa
    switch (state.stage) {
      case 'greeting':
        handleRoomSelection(response)
        break
      case 'purpose_discovery':
        handlePurposeDiscovery(response)
        break
      case 'style_inquiry':
        handleStyleInquiry(response)
        break
      case 'challenges_discovery':
        handleBudgetInquiry(response)
        break
      case 'budget_inquiry':
        handleTimelineInquiry(response)
        break
      case 'timeline_inquiry':
        handleRecommendation(response)
        break
      case 'recommendation':
        handleRecommendation(response)
        break
      case 'contact_collection':
        handleContactCollection(response)
        break
      default:
        handleFreeTextQuestion(response)
    }
  }

  /**
   * Seleciona ambiente/cômodo
   */
  const handleRoomSelection = (room: string) => {
    setState(prev => ({
      ...prev,
      stage: 'purpose_discovery',
      userData: { ...prev.userData, room }
    }))

    let response = ''
    if (room === 'Entertainment Room') {
      response = "Entertainment rooms are absolutely magical! 🎬 I love designing wall units that become the focal point while organizing all your media beautifully.\n\n"
    } else if (room === 'Home Office') {
      response = "Home offices are so important these days! 💼 A well-designed wall unit can transform your productivity and make video calls look incredibly professional.\n\n"
    } else if (room === 'Living Room') {
      response = "Living rooms are the heart of the home! ✨ The right wall unit becomes both functional storage and a stunning design statement.\n\n"
    } else {
      response = `${room} - what a wonderful space to transform! 🏡 \n\n`
    }

    response += CHATBOT_MESSAGES.discovery.purpose

    setTimeout(() => {
      addMessage(createBotMessage(response, true, [...CHATBOT_MESSAGES.purposeOptions]))
    }, 1000)
  }

  /**
   * Descobre propósito e atividades
   */
  const handlePurposeDiscovery = (purpose: string) => {
    setState(prev => ({
      ...prev,
      stage: 'style_inquiry',
      userData: { ...prev.userData, purpose: [purpose] }
    }))

    let response = ''
    if (purpose === 'Entertainment & TV') {
      response = CHATBOT_MESSAGES.productRecommendations.entertainment + "\n\n"
    } else if (purpose === 'Work & Productivity') {
      response = CHATBOT_MESSAGES.productRecommendations.office + "\n\n"
    } else if (purpose === 'Storage & Organization') {
      response = CHATBOT_MESSAGES.productRecommendations.storage + "\n\n"
    } else {
      response = `${purpose} - that's exactly what we excel at! 🎯 Wall units are perfect for this type of functionality.\n\n`
    }

    response += CHATBOT_MESSAGES.discovery.style

    setTimeout(() => {
      addMessage(createBotMessage(response, true, [...CHATBOT_MESSAGES.styleOptions]))
    }, 1200)
  }

  /**
   * Descobre preferências de estilo
   */
  const handleStyleInquiry = (style: string) => {
    setState(prev => ({
      ...prev,
      stage: 'challenges_discovery',
      userData: { ...prev.userData, style }
    }))

    let response = ''
    if (style === 'Clean Modern') {
      response = "Clean modern is absolutely timeless! ✨ I love creating wall units with sleek lines, hidden storage, and integrated lighting that feels effortless.\n\n"
    } else if (style === 'Warm Traditional') {
      response = "Warm traditional never goes out of style! 🏛️ Rich wood tones, classic proportions, and beautiful craftsmanship create such inviting spaces.\n\n"
    } else if (style === 'Contemporary Mix') {
      response = "Contemporary mix is so sophisticated! 🎨 We can blend modern functionality with classic touches for a truly personalized look.\n\n"
    } else {
      response = `${style} - excellent choice! 👌 That aesthetic works beautifully with wall units.\n\n`
    }

    response += CHATBOT_MESSAGES.discovery.challenges

    setTimeout(() => {
      addMessage(createBotMessage(response, false))
    }, 1000)
  }

  /**
   * Descobre desafios específicos
   */
  const handleChallengesDiscovery = (challenges: string) => {
    setState(prev => ({
      ...prev,
      stage: 'budget_inquiry',
      userData: { ...prev.userData, challenges: [challenges] }
    }))

    const response = `That's exactly the kind of challenge we love solving! 🎯 Custom wall units are perfect for addressing specific storage and organization needs while maintaining beautiful design.\n\n${CHATBOT_MESSAGES.qualification.budget}`

    setTimeout(() => {
      addMessage(createBotMessage(response, true, [...CHATBOT_MESSAGES.budgetOptions]))
    }, 1000)
  }

  /**
   * Define orçamento
   */
  const handleBudgetInquiry = (budget: string) => {
    setState(prev => ({
      ...prev,
      stage: 'timeline_inquiry',
      userData: { ...prev.userData, budget }
    }))

    let response = ''
    if (budget === 'I need guidance on this') {
      response = "Absolutely! I'm here to help you understand the best solution level. Based on what you've shared, I can guide you toward the perfect option for your vision.\n\n"
    } else {
      response = `Perfect! ${budget} gives us excellent options to work with. ✨\n\n`
    }

    response += CHATBOT_MESSAGES.qualification.timeline

    setTimeout(() => {
      addMessage(createBotMessage(response, true, [...CHATBOT_MESSAGES.timelineOptions]))
    }, 1000)
  }

  /**
   * Define cronograma
   */
  const handleTimelineInquiry = (timeline: string) => {
    setState(prev => ({
      ...prev,
      stage: 'recommendation',
      userData: { ...prev.userData, timeline }
    }))

    // Gera recomendação personalizada
    const profile: CustomerProfile = { ...state.userData, timeline }
    const recommendation = analyzeCustomerNeeds(profile)
    
    let response = `${timeline} - perfect timing! ⏰\n\n`
    response += recommendation.reasoning + "\n\n"
    response += `**Solution Type:** ${recommendation.estimatedSolution}\n`
    response += `**Estimated Timeline:** ${recommendation.proposedTimeline}\n\n`
    response += "I'd love to show you some examples of similar projects and discuss your specific features in detail!\n\n"
    response += "Would you like to schedule a FREE consultation where we create 3D renderings of your custom design?"

    setTimeout(() => {
      addMessage(createBotMessage(response, true, ['Yes, schedule consultation!', 'Tell me more first', 'Send me examples']))
    }, 1500)
  }

  /**
   * Gera recomendação final
   */
  const handleRecommendation = (response: string) => {
    if (response.toLowerCase().includes('schedule') || response === 'Yes, schedule consultation!') {
      setState(prev => ({ ...prev, stage: 'contact_collection' }))
      
      const message = "Fantastic! 🎉 I'm so excited to help you create your dream wall unit!\n\nTo schedule your free consultation and 3D design session, I'll need your contact information. Our design team will reach out within 24 hours.\n\nWhat's your name?"
      
      setTimeout(() => {
        addMessage(createBotMessage(message, false))
      }, 800)
    } else {
      // Fornecer mais informações ou exemplos
      const moreInfo = "I'd be happy to share more details! 📚\n\nOur wall units are completely custom-built using premium materials and Italian craftsmanship. Each project includes:\n\n• Free 3D design consultation\n• Premium materials (hardwood, stone, metal)\n• Professional installation\n• 12-month warranty covering manufacturing defects\n• CNC precision crafting\n\nWould you like to see some examples of similar projects, or should we schedule that consultation?"
      
      setTimeout(() => {
        addMessage(createBotMessage(moreInfo, true, ['Show me examples', 'Schedule consultation', 'I need to think about it']))
      }, 1000)
    }
  }

  /**
   * Coleta informações de contato
   */
  const handleContactCollection = (response: string) => {
    const currentContact = state.userData
    
    if (!currentContact.name) {
      // Collecting name
      setState(prev => ({
        ...prev,
        userData: { ...prev.userData, name: response }
      }))
      
      const botResponse = `Nice to meet you, ${response}! 😊\n\nWhat's the best email address to send your consultation details?`
      
      setTimeout(() => {
        addMessage(createBotMessage(botResponse, false))
      }, 800)
    } else if (!currentContact.email) {
      // Collecting email
      setState(prev => ({
        ...prev,
        userData: { ...prev.userData, email: response }
      }))
      
      const botResponse = `Perfect! And what's your phone number? We'll use this to coordinate your consultation appointment.`
      
      setTimeout(() => {
        addMessage(createBotMessage(botResponse, false))
      }, 800)
    } else if (!currentContact.phone) {
      // Collecting phone - final step
      setState(prev => ({
        ...prev,
        userData: { ...prev.userData, phone: response },
        stage: 'completed'
      }))
      
      const botResponse = `Excellent! 🎆 I have all your details:\n\n👤 Name: ${currentContact.name}\n📧 Email: ${currentContact.email}\n📱 Phone: ${response}\n\nI'll send you a calendar link within the next hour to schedule your FREE consultation. You'll receive 3D renderings and a detailed proposal!\n\nThank you for choosing NUVO! ✨`
      
      setTimeout(() => {
        addMessage(createBotMessage(botResponse, false))
      }, 1000)
    } else {
      // If all info is collected, show completion message
      const botResponse = "Thank you! I have all your information. Our design team will contact you within 24 hours to schedule your FREE consultation. 🎉"
      
      setTimeout(() => {
        addMessage(createBotMessage(botResponse, false))
      }, 800)
    }
  }

  /**
   * Responde perguntas livres usando IA
   */
  const handleFreeTextQuestion = (message: string) => {
    const response = generateIntelligentResponse(message, state.userData)
    
    setTimeout(() => {
      addMessage(createBotMessage(response, false))
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
  const { state, setState, addMessage, processUserResponse } = useIntelligentConversation()
  const [currentInput, setCurrentInput] = useState('')
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Garante que só renderiza após hidratação completa
  useEffect(() => {
    setIsClient(true)
  }, [])

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
   * Abre o chatbot e inicia conversa
   */
  const handleOpenChat = () => {
    trackChatbotOpen()
    setState(prev => ({ ...prev, isOpen: true }))
    setShowWelcomePopup(false)

    if (state.messages.length === 0) {
      setTimeout(() => {
        addMessage(createBotMessage(
          CHATBOT_MESSAGES.welcome,
          true,
          [...CHATBOT_MESSAGES.roomOptions]
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
      trackChatbotMessage('user')
      processUserResponse(currentInput.trim())
      setCurrentInput('')
    }
  }

  /**
   * Trata tecla Enter
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  /**
   * Seleciona opção predefinida
   */
  const handleOptionSelect = (option: string) => {
    processUserResponse(option)
  }

  return (
    <>
      {/* Popup de boas-vindas */}
      <AnimatePresence>
        {isClient && showWelcomePopup && !state.isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 sm:right-6 bg-white rounded-2xl shadow-luxury p-4 max-w-xs sm:max-w-sm mx-4 sm:mx-0 z-40 border border-[var(--color-secondary)]/20"
          >
            <div className="flex items-start space-x-2">
              <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-full flex items-center justify-center flex-shrink-0">
                <FaRobot className="text-white text-sm" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[var(--color-primary)] font-medium mb-1">
                  Hi! I'm Sofia from NUVO 👋
                </p>
                <p className="text-xs text-[var(--color-gray)] mb-3">
                  I'd love to help you design the perfect wall unit for your space!
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
                className="text-gray-400 hover:text-gray-600 text-xs"
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante do chatbot */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={state.isOpen ? handleCloseChat : handleOpenChat}
        className="fixed bottom-6 right-4 sm:right-6 w-14 h-14 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white rounded-full shadow-luxury flex items-center justify-center z-50 transition-all duration-300"
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

      {/* Janela do chat */}
      <AnimatePresence>
        {isClient && state.isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-4 sm:right-6 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-96 mx-4 sm:mx-0 h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-luxury flex flex-col z-40 border border-[var(--color-secondary)]/20"
          >
            {/* Header do chat */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[var(--color-secondary)] text-white rounded-t-2xl">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full p-1">
                  <Image
                    src="/images/logo.png"
                    alt="NUVO"
                    width={24}
                    height={24}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '100%' }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Sofia - NUVO Wall Unit Specialist</h3>
                  <p className="text-xs opacity-90">🟢 Online - Ready to help!</p>
                </div>
              </div>
              <button
                onClick={handleCloseChat}
                className="text-white hover:bg-white/20 p-1 rounded transition-colors"
                data-testid="chatbot-close"
                aria-label="Close chat"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Área de mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {state.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[75%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-1`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-[var(--color-primary)] text-white ml-2' 
                        : 'bg-[var(--color-secondary)] text-white mr-2'
                    }`}>
                      {message.sender === 'user' ? <FaUser className="text-xs" /> : <FaRobot className="text-xs" />}
                    </div>
                    
                    {/* Mensagem */}
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-white border border-gray-200'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </p>
                      
                      {/* Opções de resposta rápida */}
                      {message.hasOptions && message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionSelect(option)}
                              className="block w-full text-left px-3 py-2 text-xs bg-[var(--color-secondary)]/10 hover:bg-[var(--color-secondary)]/20 text-[var(--color-primary)] rounded-lg transition-colors border border-[var(--color-secondary)]/20"
                              data-testid={`chatbot-option-${option.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Área de input */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex space-x-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentInput.trim()}
                  className="w-10 h-10 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
                  data-testid="chatbot-send"
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