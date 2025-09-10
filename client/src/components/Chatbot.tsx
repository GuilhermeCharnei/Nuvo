'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  options?: string[]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting when chatbot opens
      setTimeout(() => {
        addBotMessage(
          "Olá! Eu sou a Sofia, assistente virtual da NUVO WOODWORK! 🏠✨\n\nEstou aqui para ajudar você a descobrir a Wall Unit perfeita para seu espaço. Como posso te ajudar hoje?",
          [
            "Quero saber sobre Wall Units",
            "Preciso de um orçamento",
            "Quais tipos vocês fazem?",
            "Falar com um consultor"
          ]
        )
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (text: string, options?: string[]) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: false,
      timestamp: new Date(),
      options
    }
    
    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    handleBotResponse(text)
  }

  const handleBotResponse = (userText: string) => {
    setIsTyping(true)
    
    setTimeout(() => {
      const lowerText = userText.toLowerCase()
      
      if (lowerText.includes('wall unit') || lowerText.includes('quero saber')) {
        addBotMessage(
          "Perfeito! As Wall Units da NUVO são criadas sob medida para cada ambiente. 🎯\n\nNossas especialidades incluem:\n\n• Salas de estar com sistema de entretenimento\n• Ambientes gourmet com adega integrada\n• Home offices organizacionais\n• Quartos com storage inteligente\n\nQual ambiente você gostaria de transformar?",
          [
            "Sala de estar",
            "Ambiente gourmet", 
            "Home office",
            "Quarto principal",
            "Ver portfolio completo"
          ]
        )
      } else if (lowerText.includes('orçamento') || lowerText.includes('preço')) {
        addBotMessage(
          "Ótimo! Para fazer um orçamento personalizado, preciso conhecer um pouco do seu projeto. 📐\n\nMe conta:\n\n• Qual o ambiente?\n• Qual o tamanho aproximado da parede?\n• Você tem alguma referência de estilo?\n• Qual sua região?",
          [
            "Começar orçamento",
            "Falar com consultor",
            "Ver projetos similares",
            "Agendar visita técnica"
          ]
        )
      } else if (lowerText.includes('tipos') || lowerText.includes('quais')) {
        addBotMessage(
          "Trabalhamos com diversos tipos de Wall Units! 🏗️\n\n🏠 **RESIDENCIAIS:**\n• Salas de estar (TV + storage)\n• Ambientes gourmet (adega + bar)\n• Home offices (mesa integrada)\n• Quartos (guarda-roupa + nichos)\n\n🏢 **CORPORATIVOS:**\n• Escritórios executivos\n• Salas de reunião\n• Recepções\n\nQual tipo desperta mais seu interesse?",
          [
            "Wall Units residenciais",
            "Soluções corporativas", 
            "Ver galeria de projetos",
            "Quero orçamento"
          ]
        )
      } else if (lowerText.includes('sala de estar')) {
        addBotMessage(
          "Excelente escolha! Nossas Wall Units para sala de estar são o coração da casa! ❤️\n\n**Incluem:**\n• Painel para TV até 75 polegadas\n• Storage para equipamentos\n• Nichos para decoração\n• Iluminação LED integrada\n• Gerenciamento de cabos invisível\n\n**Materiais:** Madeira nobre, laca premium ou melamina de alto padrão\n\nGostaria de ver alguns projetos realizados?",
          [
            "Ver projetos de sala",
            "Quero orçamento",
            "Outros ambientes",
            "Falar com especialista"
          ]
        )
      } else if (lowerText.includes('gourmet') || lowerText.includes('cozinha')) {
        addBotMessage(
          "Ambiente gourmet é nossa paixão! 👨‍🍳✨\n\n**Nossas Wall Units gourmet incluem:**\n• Adega climatizada integrada\n• Bar com iluminação especial\n• Storage para cristais e utensílios\n• Sistemas push-pull premium\n• Acabamentos resistentes à umidade\n\n**Diferenciais:**\n• Controle de temperatura para vinhos\n• Vidro anti-UV\n• Iluminação LED específica\n\nQuer ver como ficou em outros projetos?",
          [
            "Ver projetos gourmet",
            "Sobre a adega climatizada",
            "Solicitar orçamento",
            "Outros tipos de Wall Unit"
          ]
        )
      } else if (lowerText.includes('home office') || lowerText.includes('escritório')) {
        addBotMessage(
          "Home office bem organizado é produtividade garantida! 💼📚\n\n**Nossa Wall Unit para escritório inclui:**\n• Mesa integrada (tamanho personalizado)\n• Prateleiras ajustáveis\n• Nichos para equipamentos\n• Sistema de cabos invisível\n• Iluminação focal para trabalho\n• Storage para documentos\n\n**Ideal para:**\n• Profissionais liberais\n• Estudantes\n• Trabalho remoto\n• Ateliers criativos\n\nVamos planejar seu espaço de trabalho ideal?",
          [
            "Ver projetos de escritório",
            "Quero orçamento",
            "Dicas de organização",
            "Falar com consultor"
          ]
        )
      } else if (lowerText.includes('consultor') || lowerText.includes('especialista')) {
        addBotMessage(
          "Perfeito! Vou conectar você com nossa equipe de especialistas! 👥\n\n**Opções de atendimento:**\n\n📞 **Ligação imediata:** (11) 99999-9999\n📱 **WhatsApp:** Resposta em até 5 minutos\n📅 **Agendamento:** Consulta presencial gratuita\n💬 **Chat:** Continue aqui comigo\n\nQual forma prefere?",
          [
            "WhatsApp agora",
            "Ligar agora", 
            "Agendar consulta presencial",
            "Continuar por aqui"
          ]
        )
      } else if (lowerText.includes('portfolio') || lowerText.includes('projetos') || lowerText.includes('galeria')) {
        addBotMessage(
          "Temos um portfolio incrível para você explorar! 🎨📸\n\n**Acesse nosso portfolio completo:**\n\n• 500+ projetos realizados\n• Filtros por ambiente\n• Detalhes técnicos\n• Depoimentos dos clientes\n• Antes e depois\n\nVou rolar a página para você ver nossa galeria, ok?",
          [
            "Ver galeria agora",
            "Projetos por categoria",
            "Quero orçamento",
            "Continuar conversa"
          ]
        )
      } else if (lowerText.includes('whatsapp')) {
        addBotMessage(
          "Perfeito! Te redirecionando para o WhatsApp! 📱\n\nNossa equipe está online e pronta para te atender. Você receberá:\n\n• Resposta imediata\n• Fotos de projetos similares\n• Orçamento preliminar\n• Agendamento de visita técnica\n\nAté logo! 👋"
        )
        setTimeout(() => {
          const message = encodeURIComponent("Olá! Vim do site da NUVO e tenho interesse em uma Wall Unit personalizada. A Sofia me indicou vocês!")
          window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
        }, 2000)
      } else if (lowerText.includes('agendar') || lowerText.includes('visita')) {
        addBotMessage(
          "Ótima escolha! A visita técnica é fundamental para um projeto perfeito! 🏠👷‍♂️\n\n**Nossa visita técnica inclui:**\n\n• Medição precisa do ambiente\n• Análise das instalações existentes\n• Sugestões de design personalizado\n• Orçamento detalhado no local\n• Prazo de execução\n\n**É totalmente gratuita e sem compromisso!**\n\nQual região você está?",
          [
            "São Paulo - Capital",
            "Grande São Paulo",
            "Interior de SP",
            "Outras regiões",
            "Falar com agendamento"
          ]
        )
      } else {
        // Default response for unrecognized input
        addBotMessage(
          "Entendo! Deixe-me te ajudar da melhor forma. 🤔\n\nEstou aqui para esclarecer dúvidas sobre:\n\n• Tipos de Wall Units\n• Processo de criação\n• Materiais e acabamentos\n• Prazos e investimento\n• Agendamento de consulta\n\nO que você gostaria de saber especificamente?",
          [
            "Tipos de Wall Unit",
            "Como funciona o processo",
            "Quanto custa em média",
            "Quero falar com consultor"
          ]
        )
      }
    }, 1000 + Math.random() * 1000) // Random delay for more natural feel
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputText.trim()) {
      addUserMessage(inputText.trim())
    }
  }

  const handleOptionClick = (option: string) => {
    addUserMessage(option)
  }

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white rounded-full shadow-luxury flex items-center justify-center z-40 transition-colors"
        data-chatbot-trigger
        data-testid="chatbot-trigger"
      >
        <FaRobot className="text-2xl" />
        
        {/* Pulse animation for attention */}
        <div className="absolute inset-0 bg-[var(--color-secondary)] rounded-full animate-ping opacity-20"></div>
        
        {/* Notification badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">!</span>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            data-testid="chatbot-window"
          >
            {/* Header */}
            <div className="bg-[var(--color-secondary)] text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRobot className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold">Sofia - NUVO Assistant</h3>
                  <p className="text-xs text-white/80">Online • Responde em segundos</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                data-testid="chatbot-close"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser 
                        ? 'bg-[var(--color-primary)] text-white' 
                        : 'bg-[var(--color-secondary)] text-white'
                    }`}>
                      {message.isUser ? <FaUser className="text-xs" /> : <FaRobot className="text-xs" />}
                    </div>
                    
                    {/* Message Bubble */}
                    <div className={`rounded-2xl p-3 ${
                      message.isUser 
                        ? 'bg-[var(--color-primary)] text-white rounded-br-sm' 
                        : 'bg-gray-100 text-[var(--color-primary)] rounded-bl-sm'
                    }`}>
                      <p className="text-sm whitespace-pre-line leading-relaxed">
                        {message.text}
                      </p>
                      
                      {/* Quick Options */}
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              className="block w-full text-left text-xs bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-colors border border-white/30"
                              data-testid={`chatbot-option-${index}`}
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

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaRobot className="text-white text-xs" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent"
                  data-testid="chatbot-input"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="w-10 h-10 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
                  data-testid="chatbot-send"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
