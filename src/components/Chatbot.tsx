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
          className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-luxury rounded-full flex items-center justify-center">
              <img src="/images/logo.png" alt="NUVO" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
              Hi! I'm Sofia 👋
            </h3>
            <p className="text-[var(--color-gray)] mb-6">
              NUVO's Wall Unit Specialist. I'm here to help you create the perfect wall unit for your space!
            </p>
            <div className="flex gap-3">
              <button
                onClick={onStartChat}
                className="flex-1 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent)] transition-colors"
              >
                Start Chat
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
  const [awaitingCustomQuestion, setAwaitingCustomQuestion] = useState(false)
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
          "Hi there! I'm Sofia from NUVO! 👋\n\nI'm so excited to help you create something truly spectacular for your space! Our wall units aren't just furniture - they're architectural art that transforms entire rooms.\n\nWhat type of wall unit caught your attention?",
          ['Wet Bar Unit', 'Wine Storage', 'Entertainment Center', 'Office Wall Unit', 'Kitchen Wall Unit', 'Display Unit', 'Other', 'I have a specific question']
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
      if (awaitingCustomQuestion) {
        handleCustomQuestion(inputText)
        setAwaitingCustomQuestion(false)
      } else {
        processUserResponse(inputText)
      }
      setInputText('')
    }
  }

  const processUserResponse = (response: string) => {
    switch (currentStep) {
      case 'greeting':
        if (response === 'I have a specific question') {
          setAwaitingCustomQuestion(true)
          addBotMessage(
            "Of course! I'm here to help with any questions you have. 😊\n\nWhat would you like to know about our wall units? Feel free to ask me anything!"
          )
        } else {
          setLeadData(prev => ({ ...prev, projectType: response }))
          setCurrentStep('budget')
          if (response === 'Other') {
            addBotMessage(
              "That's perfectly fine! Sometimes the best projects start with unique ideas. 😊\n\nWhat's your approximate budget range? This helps me understand what options might work best for you.",
              ['$15,000 - $30,000', '$30,000 - $60,000', '$60,000 - $100,000', '$100,000+', 'Need guidance']
            )
          } else {
            addBotMessage(
              `${response} - oh, I LOVE those! 😍 They create such stunning focal points and really transform a space.\n\nWhat's your approximate budget range? This helps me tailor my suggestions perfectly for you.`,
              ['$15,000 - $30,000', '$30,000 - $60,000', '$60,000 - $100,000', '$100,000+', 'Need guidance']
            )
          }
        }
        break

      case 'budget':
        setLeadData(prev => ({ ...prev, budget: response }))
        setCurrentStep('timeline')
        if (response === 'Need guidance') {
          addBotMessage(
            "No worries at all! Let me break it down for you. 💰\n\nOur wall units typically range:\n• Display Units: $15K-$50K\n• Kitchen Wall Units: $25K-$75K\n• Entertainment Centers: $35K-$85K\n• Wet Bars: $45K-$100K\n• Wine Storage: $60K-$150K+\n\nEvery project is custom, so there's flexibility! When would you love to have your new wall unit ready?",
            ['Within 2 months', '2-4 months', '4-6 months', 'No rush', 'Just exploring ideas']
          )
        } else {
          addBotMessage(
            "Perfect! That budget range gives us some really exciting options to work with! 🎉\n\nWhen would you ideally like to have your beautiful new wall unit completed?",
            ['Within 2 months', '2-4 months', '4-6 months', 'No rush', 'Just exploring ideas']
          )
        }
        break

      case 'timeline':
        setLeadData(prev => ({ ...prev, timeline: response }))
        setCurrentStep('features')
        addBotMessage(
          `That timeline works perfectly! ${response === 'No rush' ? 'Taking your time allows us to create something truly extraordinary! 🎨' : 'We can definitely work with that timeline! ⏰'}\n\nWhat features are most exciting to you for your wall unit?`,
          ['Integrated lighting', 'Temperature control', 'Glass displays', 'Hidden storage', 'Wet bar features', 'TV integration', 'All of the above', 'Ask about features']
        )
        break

      case 'features':
        setCurrentStep('contact')
        addBotMessage(
          `${response} - excellent choice! Based on what you've told me, I can already envision a beautiful project. Our team would love to create a custom 3D rendering for you. What's the best way to reach you?`,
          ['Send me email', 'Call me', 'Text me', 'Schedule consultation']
        )
        break

      case 'contact':
        setCurrentStep('lead_capture')
        if (response === 'Send me email') {
          addBotMessage("What's your email address? I'll send you our portfolio and project examples.")
        } else if (response === 'Call me') {
          addBotMessage("What's your phone number? Our specialist will contact you within 24 hours.")
        } else if (response === 'Text me') {
          addBotMessage("What's your phone number? We'll text you to schedule a convenient time.")
        } else {
          addBotMessage("What's your email address? I'll send you the link to schedule your free consultation.")
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
        addBotMessage("Great to meet you! What city are you located in? (We serve all of South Florida)")
        break

      case 'location':
        setLeadData(prev => ({ ...prev, location: response }))
        setCurrentStep('complete')
        console.log('Lead captured:', { ...leadData, location: response })
        addBotMessage(
          "Perfect! I have all your information. Here's what happens next:\n\n✓ You'll receive our portfolio within 1 hour\n✓ Our design team will create a preliminary concept\n✓ We'll schedule your free in-home consultation\n✓ You'll get your custom 3D design\n\nOur team will contact you within 24 hours. Any questions about wall units I can answer right now?",
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
        handleCustomQuestion(response)
    }
  }

  const handleCustomQuestion = (question: string) => {
    // Handle free-form questions
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('price') || lowerQuestion.includes('cost') || lowerQuestion.includes('expensive') || lowerQuestion.includes('budget')) {
      addBotMessage(
        "Great question about pricing! 💰\n\nOur wall units typically range from $15K to $150K+ depending on complexity and materials. Here's a rough breakdown:\n\n• Display Units: $15K-$50K\n• Kitchen/Office: $25K-$75K\n• Entertainment Centers: $35K-$85K\n• Wet Bars: $45K-$100K\n• Wine Storage: $60K-$150K+\n\nEvery project is custom, so the final price depends on your specific needs, materials, and features. Would you like me to connect you with our team for a personalized quote?",
        ['Yes, get me a quote', 'Tell me about materials', 'What affects the price?', 'Ask another question']
      )
    } else if (lowerQuestion.includes('time') || lowerQuestion.includes('long') || lowerQuestion.includes('when') || lowerQuestion.includes('timeline')) {
      addBotMessage(
        "Timeline is so important for planning! ⏰\n\nTypical project schedule:\n• Design & Planning: 1-2 weeks\n• Manufacturing: 4-8 weeks\n• Installation: 1-3 days\n\nTotal timeline is usually 6-10 weeks from design approval to completion. We can expedite for rush projects too!\n\nWhen would you ideally like your project completed?",
        ['Within 2 months', '2-4 months', '4-6 months', 'No rush', 'Ask another question']
      )
    } else if (lowerQuestion.includes('material') || lowerQuestion.includes('wood') || lowerQuestion.includes('finish') || lowerQuestion.includes('quality')) {
      addBotMessage(
        "I love talking about our materials! 🌳\n\nWe use premium materials including:\n• Exotic woods like Walnut, Mahogany, Zebrano\n• Natural stone: Marble, Granite, Quartz\n• Metal accents: Brass, Steel, Bronze\n• Custom stains and finishes\n• Temperature-controlled storage systems\n\nEverything comes with our comprehensive warranty. What style are you envisioning?",
        ['Modern & sleek', 'Traditional & warm', 'Rustic & natural', 'Luxury & elegant', 'Ask another question']
      )
    } else if (lowerQuestion.includes('visit') || lowerQuestion.includes('showroom') || lowerQuestion.includes('see') || lowerQuestion.includes('factory')) {
      addBotMessage(
        "I'd love for you to see our craftsmanship in person! 🏭\n\nYou can visit our factory at:\n4801 Johnson Rd Suite 4, Coconut Creek, FL 33073\n\nWe do tours by appointment so our team can give you their full attention. You'll see active projects and meet our skilled craftsmen!\n\nWould you like me to arrange a visit?",
        ['Yes, schedule a visit', 'Tell me more first', 'Send me photos instead', 'Ask another question']
      )
    } else if (lowerQuestion.includes('install') || lowerQuestion.includes('delivery') || lowerQuestion.includes('setup')) {
      addBotMessage(
        "Installation is one of my favorite parts! 🔨\n\nOur process is seamless:\n1. Pre-installation site prep\n2. Professional delivery\n3. Precision installation (1-3 days)\n4. Final finishing touches\n5. Quality inspection\n6. Care instructions\n\nWe handle everything - no mess, no stress! Our installers are true artists.\n\nAny specific installation concerns?",
        ['Will it damage my walls?', 'How long does it take?', 'What about cleanup?', 'Sounds perfect!', 'Ask another question']
      )
    } else if (lowerQuestion.includes('wine') || lowerQuestion.includes('bar') || lowerQuestion.includes('entertainment')) {
      addBotMessage(
        "You have excellent taste! Those are some of our most popular and impressive units! 🍷\n\nSpecialty features we can include:\n• Temperature-controlled wine storage\n• LED lighting systems\n• Glass displays\n• Wet bar with plumbing\n• Hidden storage\n• TV integration\n\nWhich type interests you most?",
        ['Wine Storage', 'Wet Bar', 'Entertainment Center', 'Combination unit', 'Ask another question']
      )
    } else {
      addBotMessage(
        "That's a great question! 🤔\n\nI want to make sure I give you the best answer possible. Let me connect you directly with one of our specialists who can address your specific needs in detail.\n\nIn the meantime, is there anything else about our wall units I can help with?",
        ['Pricing information', 'Material options', 'Timeline questions', 'Installation process', 'Schedule a consultation', 'Ask another question']
      )
    }
  }

  const handleAdditionalQuestions = (question: string) => {
    switch (question) {
      case 'Pricing questions':
        addBotMessage(
          "Our wall units are priced based on complexity and materials:\n\n💰 Display Units: $15K-$50K\n🍷 Wine Storage: $60K-$150K+\n🍸 Wet Bars: $45K-$100K\n📺 Entertainment Centers: $35K-$85K\n🏢 Office Units: $25K-$75K\n🍳 Kitchen Wall Units: $25K-$75K\n\nFactors affecting price:\n• Materials (exotic woods, stone)\n• Size and complexity\n• Integrated technology\n• Custom features\n\nYour specialist will provide exact pricing during consultation."
        )
        break
      case 'Material options':
        addBotMessage(
          "We offer premium materials including:\n\n🌳 Exotic Woods: Walnut, Mahogany, Zebrano\n🏗️ Engineered veneers for stability\n🎨 Custom stains and finishes\n💎 Natural stone: Marble, Granite, Quartz\n🥃 Temperature-controlled wine storage\n⚡ Integrated LED lighting systems\n🪨 Metal accents: Brass, Steel, Bronze\n\nAll materials come with our comprehensive warranty!"
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
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white rounded-full shadow-luxury flex items-center justify-center transition-all duration-300 touch-manipulation"
      >
        {isOpen ? <FaTimes className="text-lg sm:text-xl" /> : <FaComments className="text-lg sm:text-xl" />}
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
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] h-[60vh] sm:h-[500px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-luxury flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-luxury text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center">
                  <img src="/images/logo.png" alt="Sofia" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold">Sofia</h3>
                  <p className="text-xs opacity-80">NUVO Specialist</p>
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
                  <div className={`max-w-[85%] md:max-w-[80%] ${message.isBot ? 'bg-gray-100' : 'bg-[var(--color-secondary)] text-white'} rounded-2xl p-3`}>
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
                            className="block w-full text-left p-2 text-xs md:text-sm bg-white border border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-200 touch-manipulation"
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
                  placeholder={awaitingCustomQuestion ? "Ask me anything about wall units..." : "Type your message..."}
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