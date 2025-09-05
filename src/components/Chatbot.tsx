'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  options?: string[]
}

interface LeadData {
  name?: string
  email?: string
  phone?: string
  projectType?: string
  budget?: string
  timeline?: string
  location?: string
}

interface WelcomePopupProps {
  isVisible: boolean
  onClose: () => void
  onStartChat: () => void
}

function WelcomePopup({ isVisible, onClose, onStartChat }: WelcomePopupProps) {
  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-luxury rounded-full flex items-center justify-center">
              <img src="/images/logo.png" alt="NUVO" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
              Ola! Sou a Sofia 👋
            </h3>
            <p className="text-[var(--color-gray)] mb-6">
              Especialista em Wall Units da NUVO. Estou aqui para ajudar voce a criar o wall unit perfeito para seu espaco!
            </p>
            <div className="flex gap-3">
              <button
                onClick={onStartChat}
                className="flex-1 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent)] transition-colors"
              >
                Comecar Conversa
              </button>
              <button
                onClick={onClose}
                className="px-4 py-3 text-[var(--color-gray)] hover:text-[var(--color-primary)] transition-colors"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [currentStep, setCurrentStep] = useState('greeting')
  const [leadData, setLeadData] = useState<LeadData>({})
  const [isTyping, setIsTyping] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Show welcome popup after 3 seconds
    const welcomeTimer = setTimeout(() => {
      if (!isOpen && messages.length === 0) {
        setShowWelcome(true)
      }
    }, 3000)

    return () => clearTimeout(welcomeTimer)
  }, [])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Ola! Sou a Sofia, especialista em Wall Units da NUVO. Estou aqui para ajudar voce a criar o wall unit perfeito para seu espaco. Que tipo de wall unit mais te interessa?",
          ['Wet Bar', 'Adega', 'Centro de Entretenimento', 'Escritorio', 'Cozinha', 'Display/Exposicao', 'Outro']
        )
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true)
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        isBot: true,
        timestamp: new Date(),
        options
      }
      setMessages(prev => [...prev, newMessage])
      setIsTyping(false)
    }, 1000)
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleOptionClick = (option: string) => {
    addUserMessage(option)
    processUserResponse(option)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputText.trim()) {
      addUserMessage(inputText)
      processUserResponse(inputText)
      setInputText('')
    }
  }

  const processUserResponse = (response: string) => {
    switch (currentStep) {
      case 'greeting':
        setLeadData(prev => ({ ...prev, projectType: response }))
        setCurrentStep('budget')
        addBotMessage(
          `Excelente escolha! ${response} pode realmente transformar um espaco. Qual e sua faixa de orcamento para este projeto?`,
          ['R$ 40.000 - R$ 80.000', 'R$ 80.000 - R$ 150.000', 'R$ 150.000 - R$ 250.000', 'R$ 250.000+', 'Preciso de orientacao']
        )
        break

      case 'budget':
        setLeadData(prev => ({ ...prev, budget: response }))
        setCurrentStep('timeline')
        if (response === 'Preciso de orientacao') {
          addBotMessage(
            "Sem problema! Nossos wall units variam conforme a complexidade:\n\n• Display/Exposicao: R$ 40K-120K\n• Cozinha: R$ 80K-200K\n• Entertainment: R$ 100K-250K\n• Wet Bar: R$ 120K-300K\n• Adega: R$ 150K-400K+\n\nQuando gostaria de ter seu projeto finalizado?",
            ['Ate 2 meses', '2-4 meses', '4-6 meses', 'Sem pressa', 'So explorando']
          )
        } else {
          addBotMessage(
            "Perfeito! Essa faixa de orcamento nos da otimas opcoes. Quando gostaria de ter seu wall unit finalizado?",
            ['Ate 2 meses', '2-4 meses', '4-6 meses', 'Sem pressa', 'So explorando']
          )
        }
        break

      case 'timeline':
        setLeadData(prev => ({ ...prev, timeline: response }))
        setCurrentStep('features')
        addBotMessage(
          "Excelente! Quais caracteristicas sao mais importantes para voce?",
          ['Iluminacao integrada', 'Controle de temperatura', 'Displays em vidro', 'Armazenamento oculto', 'Features de bar', 'Integracao de TV', 'Todas as opcoes']
        )
        break

      case 'features':
        setCurrentStep('contact')
        addBotMessage(
          `${response} - excelente escolha! Pelo que voce me contou, ja vejo um projeto lindo. Nossa equipe adoraria criar uma renderizacao 3D personalizada. Qual a melhor forma de entrar em contato?`,
          ['Enviar por email', 'Me ligue', 'WhatsApp', 'Agendar consulta']
        )
        break

      case 'contact':
        setCurrentStep('lead_capture')
        if (response === 'Enviar por email') {
          addBotMessage("Qual seu email? Vou enviar nosso portfolio e exemplos de projetos.")
        } else if (response === 'Me ligue') {
          addBotMessage("Qual seu telefone? Nosso especialista entrara em contato em ate 24 horas.")
        } else if (response === 'WhatsApp') {
          addBotMessage("Qual seu WhatsApp? Vamos agendar um horario conveniente para voce.")
        } else {
          addBotMessage("Qual seu email? Enviarei o link para agendar sua consulta gratuita.")
        }
        break

      case 'lead_capture':
        if (response.includes('@')) {
          setLeadData(prev => ({ ...prev, email: response }))
        } else {
          setLeadData(prev => ({ ...prev, phone: response }))
        }
        setCurrentStep('name')
        addBotMessage("E qual e seu nome?")
        break

      case 'name':
        setLeadData(prev => ({ ...prev, name: response }))
        setCurrentStep('location')
        addBotMessage("Prazer em conhece-lo! Em que cidade voce esta? (Atendemos todo o Sul da Florida)")
        break

      case 'location':
        setLeadData(prev => ({ ...prev, location: response }))
        setCurrentStep('complete')
        console.log('Lead captured:', { ...leadData, location: response })
        addBotMessage(
          "Perfeito! Tenho todas suas informacoes. Veja o que acontece agora:\n\n✓ Voce recebera nosso portfolio em 1 hora\n✓ Nossa equipe criara um conceito preliminar\n✓ Agendaremos sua consulta gratuita em casa\n✓ Voce recebera seu design 3D personalizado\n\nNossa equipe entrara em contato em ate 24 horas. Alguma pergunta sobre wall units que posso responder agora?",
          ['Duvidas sobre precos', 'Opcoes de materiais', 'Processo de instalacao', 'Cronograma', 'Esta tudo certo!']
        )
        break

      case 'complete':
        if (response === "Esta tudo certo!") {
          addBotMessage("Maravilhoso! Obrigada por escolher a NUVO. Estamos ansiosos para criar algo incrivel para voce! 🎉")
        } else {
          handleAdditionalQuestions(response)
        }
        break

      default:
        addBotMessage("Nao tenho certeza se entendi. Deixe-me conectar voce com um de nossos especialistas que pode ajudar melhor.")
    }
  }

  const handleAdditionalQuestions = (question: string) => {
    switch (question) {
      case 'Duvidas sobre precos':
        addBotMessage(
          "Nossos wall units tem precos baseados na complexidade:\n\n💰 Display Units: R$ 40K-120K\n🍷 Wine Storage: R$ 150K-400K+\n🍸 Wet Bars: R$ 120K-300K\n📺 Entertainment Centers: R$ 100K-250K\n🏢 Office Units: R$ 80K-220K\n🍳 Kitchen Wall Units: R$ 80K-200K\n\nFatores que afetam o preco:\n• Materiais (madeiras exoticas, pedra)\n• Tamanho e complexidade\n• Tecnologia integrada\n• Features personalizadas\n\nSeu especialista dara preco exato na consulta."
        )
        break
      case 'Opcoes de materiais':
        addBotMessage(
          "Oferecemos materiais premium:\n\n🌳 Madeiras Exoticas: Nogueira, Mogno, Zebrano\n🏗️ Laminados engenheirados para estabilidade\n🎨 Acabamentos e vernizes personalizados\n💎 Pedras naturais: Marmore, Granito, Quartzo\n🥃 Armazenamento com controle de temperatura\n⚡ Sistemas de LED integrados\n🪨 Detalhes em metal: Bronze, Aco, Latao\n\nTodos materiais com garantia abrangente!"
        )
        break
      case 'Processo de instalacao':
        addBotMessage(
          "Nossa instalacao e perfeita:\n\n1️⃣ Preparacao pre-instalacao\n2️⃣ Entrega profissional\n3️⃣ Instalacao de precisao (1-3 dias)\n4️⃣ Acabamentos finais\n5️⃣ Inspecao de qualidade\n6️⃣ Instrucoes de cuidado\n\nCuidamos de tudo - sem bagunca, sem stress!"
        )
        break
      case 'Cronograma':
        addBotMessage(
          "Cronograma tipico do projeto:\n\n📐 Fase de design: 1-2 semanas\n🔨 Fabricacao: 4-8 semanas\n🚚 Instalacao: 1-3 dias\n\nPedidos urgentes possiveis com taxa adicional. Daremos cronograma exato na consulta."
        )
        break
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const handleStartChat = () => {
    setShowWelcome(false)
    setIsOpen(true)
  }

  return (
    <>
      {/* Welcome Popup */}
      <WelcomePopup 
        isVisible={showWelcome} 
        onClose={() => setShowWelcome(false)}
        onStartChat={handleStartChat}
      />

      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white rounded-full shadow-luxury flex items-center justify-center transition-all duration-300"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaComments className="text-xl" />}
        {!isOpen && messages.length === 0 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">1</span>
          </div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-luxury flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-luxury text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center">
                  <img src="/images/logo.png" alt="Sofia" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold">Sofia</h3>
                  <p className="text-xs opacity-80">Especialista NUVO</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] ${message.isBot ? 'bg-gray-100' : 'bg-[var(--color-secondary)] text-white'} rounded-2xl p-3`}>
                    <div className="flex items-start space-x-2">
                      {message.isBot && (
                        <img src="/images/logo.png" alt="Sofia" className="w-4 h-4 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                      {!message.isBot && (
                        <FaUser className="text-white/70 mt-1 flex-shrink-0" />
                      )}
                    </div>
                    
                    {/* Options */}
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => (
                          <motion.button
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left p-2 text-xs bg-white border border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-200"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 rounded-2xl p-3 flex items-center space-x-2">
                    <img src="/images/logo.png" alt="Sofia" className="w-4 h-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-accent)] transition-colors"
                >
                  <FaPaperPlane className="text-sm" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}