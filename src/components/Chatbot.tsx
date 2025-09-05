'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes, FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa'

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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [currentStep, setCurrentStep] = useState('greeting')
  const [leadData, setLeadData] = useState<LeadData>({})
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
      setTimeout(() => {
        addBotMessage(
          "👋 Hi! I'm NUVO's Wall Unit Specialist. I'm here to help you create the perfect wall unit for your space. What type of room are you looking to transform?",
          ['Living Room', 'Kitchen', 'Home Office', 'Bedroom', 'Entertainment Room', 'Other']
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
          `Great choice! ${response} wall units can really transform a space. What's your budget range for this project?`,
          ['$5,000 - $15,000', '$15,000 - $30,000', '$30,000 - $50,000', '$50,000+', 'Need guidance']
        )
        break

      case 'budget':
        setLeadData(prev => ({ ...prev, budget: response }))
        setCurrentStep('timeline')
        if (response === 'Need guidance') {
          addBotMessage(
            "No problem! Our wall units typically range from $8,000 to $60,000+ depending on size, materials, and complexity. When would you like to have your wall unit completed?",
            ['Within 2 months', '2-4 months', '4-6 months', 'No rush', 'Just exploring']
          )
        } else {
          addBotMessage(
            "Perfect! That budget range gives us great options to work with. When would you like to have your wall unit completed?",
            ['Within 2 months', '2-4 months', '4-6 months', 'No rush', 'Just exploring']
          )
        }
        break

      case 'timeline':
        setLeadData(prev => ({ ...prev, timeline: response }))
        setCurrentStep('features')
        addBotMessage(
          "Excellent! What features are most important to you in your wall unit?",
          ['Built-in lighting', 'Hidden storage', 'TV integration', 'Display shelving', 'Wine storage', 'All of the above']
        )
        break

      case 'features':
        setCurrentStep('contact')
        addBotMessage(
          `${response} - excellent choice! Based on what you've told me, I can see this being a beautiful project. Our design team would love to create a custom 3D rendering for you. What's the best way to reach you?`,
          ['Get my email', 'Call me', 'Text me', 'Schedule consultation']
        )
        break

      case 'contact':
        setCurrentStep('lead_capture')
        if (response === 'Get my email') {
          addBotMessage("What's your email address? I'll send you our portfolio and project examples.")
        } else if (response === 'Call me') {
          addBotMessage("What's your phone number? Our specialist will call you within 24 hours.")
        } else if (response === 'Text me') {
          addBotMessage("What's your phone number? We'll text you to schedule a convenient time.")
        } else {
          addBotMessage("What's your email address? I'll send you a link to book your free consultation.")
        }
        break

      case 'lead_capture':
        if (response.includes('@')) {
          setLeadData(prev => ({ ...prev, email: response }))
        } else {
          setLeadData(prev => ({ ...prev, phone: response }))
        }
        setCurrentStep('name')
        addBotMessage("And what's your name?")
        break

      case 'name':
        setLeadData(prev => ({ ...prev, name: response }))
        setCurrentStep('location')
        addBotMessage("Great to meet you! What city are you located in? (We serve South Florida)")
        break

      case 'location':
        setLeadData(prev => ({ ...prev, location: response }))
        setCurrentStep('complete')
        // Save lead data here (would integrate with your CRM/database)
        console.log('Lead captured:', { ...leadData, location: response })
        addBotMessage(
          `Perfect! I've got all your information. Here's what happens next:\n\n✅ You'll receive our portfolio within 1 hour\n✅ Our design team will create a preliminary concept\n✅ We'll schedule your free in-home consultation\n✅ You'll get your custom 3D design\n\nOur team will contact you within 24 hours. Any other questions about wall units I can answer right now?`,
          ['Pricing questions', 'Material options', 'Installation process', 'Timeline details', "I'm all set!"]
        )
        break

      case 'complete':
        if (response === "I'm all set!") {
          addBotMessage("Wonderful! Thank you for choosing NUVO. We're excited to create something amazing for you! 🎉")
        } else {
          handleAdditionalQuestions(response)
        }
        break

      default:
        addBotMessage("I'm not sure I understand. Let me connect you with one of our specialists who can help you better.")
    }
  }

  const handleAdditionalQuestions = (question: string) => {
    switch (question) {
      case 'Pricing questions':
        addBotMessage(
          "Our wall units start at $8,000 for basic designs and can go up to $60,000+ for complex, room-spanning installations. Factors that affect pricing:\n\n• Size and complexity\n• Premium materials (exotic woods, stone)\n• Integrated technology (lighting, outlets)\n• Custom features\n\nYour specialist will provide exact pricing during your consultation."
        )
        break
      case 'Material options':
        addBotMessage(
          "We offer premium materials including:\n\n🌳 Hardwoods: Walnut, Oak, Cherry, Mahogany\n🏗️ Engineered options for stability\n🎨 Custom finishes and stains\n⚡ LED lighting integration\n🪨 Stone and metal accents\n\nAll materials come with our 30-year warranty!"
        )
        break
      case 'Installation process':
        addBotMessage(
          "Our installation is seamless:\n\n1️⃣ Pre-installation site prep\n2️⃣ Professional delivery\n3️⃣ Precision installation (1-3 days)\n4️⃣ Final finishing touches\n5️⃣ Quality inspection\n6️⃣ Care instructions\n\nWe handle everything - no mess, no stress!"
        )
        break
      case 'Timeline details':
        addBotMessage(
          "Typical project timeline:\n\n📐 Design phase: 1-2 weeks\n🔨 Manufacturing: 4-8 weeks\n🚚 Installation: 1-3 days\n\nRush orders possible for additional fee. We'll give you exact timeline during consultation."
        )
        break
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
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
                <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-full flex items-center justify-center">
                  <FaRobot className="text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold">NUVO Assistant</h3>
                  <p className="text-xs opacity-80">Wall Unit Specialist</p>
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
                        <FaRobot className="text-[var(--color-secondary)] mt-1 flex-shrink-0" />
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
                    <FaRobot className="text-[var(--color-secondary)]" />
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
                  placeholder="Type your message..."
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