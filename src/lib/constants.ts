/**
 * Constantes centralizadas do projeto NUVO WOODWORK
 * Este arquivo contém todas as configurações e valores fixos usados em toda a aplicação
 */

// ==========================================
// INFORMAÇÕES DA EMPRESA
// ==========================================

/** Informações básicas da empresa NUVO WOODWORK */
export const COMPANY_INFO = {
  name: 'NUVO WOODWORK',
  tagline: 'Wall Units That Transform Spaces',
  description: 'Custom wall units that organize, connect, and impress. From entertainment centers to storage solutions, we create architectural elements that integrate seamlessly with your space.',
  
  // Endereço da fábrica atualizado
  address: {
    street: '4801 Johnson Rd Suite 4',
    city: 'Coconut Creek',
    state: 'FL',
    zipCode: '33073',
    country: 'USA',
    full: '4801 Johnson Rd Suite 4, Coconut Creek, FL 33073'
  },
  
  // Área de atendimento
  serviceArea: 'South Florida',
  
  // Estatísticas da empresa para o hero
  stats: {
    experience: '30+',
    clients: '4K+',
    successRate: '98%',
    rating: '4.9'
  }
} as const

// ==========================================
// CONFIGURAÇÕES DA APLICAÇÃO
// ==========================================

/** Configurações de comportamento da aplicação */
export const APP_CONFIG = {
  // Configurações do chatbot
  chatbot: {
    welcomeDelay: 3000, // 3 segundos para aparecer popup de boas-vindas
    animationDuration: 300, // duração das animações em ms
    maxMessages: 100, // máximo de mensagens no histórico
  },
  
  // Configurações de animação
  animation: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 1.0,
    },
    easing: 'ease-in-out',
  },
  
  // Configurações de scroll
  scroll: {
    behavior: 'smooth' as ScrollBehavior,
    offset: 80, // offset para navegação fixa
  }
} as const

// ==========================================
// CATEGORIAS DE PROJETOS
// ==========================================

/** Categorias disponíveis para filtros de portfolio */
export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All Wall Units', description: 'View all our custom wall unit projects' },
  { key: 'bar', label: 'Wet Bars', description: 'Sophisticated entertainment spaces with integrated storage' },
  { key: 'display', label: 'Display Units', description: 'Elegant showcases for collections and decorative items' },
  { key: 'entertainment', label: 'Entertainment', description: 'Media centers and home theater solutions' },
  { key: 'wine', label: 'Wine Storage', description: 'Climate-controlled wine displays and cellars' },
  { key: 'office', label: 'Office Units', description: 'Professional workspace solutions' },
  { key: 'kitchen', label: 'Kitchen', description: 'Custom kitchen storage and organization' },
  { key: 'living', label: 'Living Room', description: 'Complete living space transformations' },
  { key: 'dining', label: 'Dining Room', description: 'Elegant dining room storage and display' },
  { key: 'architectural', label: 'Architectural', description: 'Statement pieces and architectural elements' }
] as const

// ==========================================
// MENSAGENS DO CHATBOT
// ==========================================

/** Mensagens pré-definidas para o chatbot Sofia - Vendedor Inteligente */
export const CHATBOT_MESSAGES = {
  // Mensagem de boas-vindas focada em Wall Units
  welcome: "Hi there! I'm Sofia from NUVO! 👋\n\nI specialize in helping people create stunning Wall Units that completely transform their spaces. Think of them as architectural art that tells your story while solving your storage and display needs.\n\nI'd love to understand what you're envisioning for your space. What room are you looking to transform?",
  
  // Opções de ambientes para Wall Units
  roomOptions: [
    'Living Room',
    'Entertainment Room', 
    'Home Office',
    'Kitchen',
    'Bedroom',
    'Dining Room',
    'Something Custom'
  ],
  
  // Mensagens de discovery inteligente
  discovery: {
    purpose: "Perfect! Now help me understand how you use this space. What activities happen there daily?",
    style: "I love getting a sense of your style! Do you lean more toward clean modern lines, warm traditional elements, or a sophisticated mix of both?",
    challenges: "What storage or organization challenges are you hoping to solve? I want to make sure we design something that truly works for your lifestyle.",
    inspiration: "Have you seen any wall units that caught your eye? Or any specific features that made you think 'I wish I had that!'?"
  },
  
  // Opções de propósito/atividades
  purposeOptions: [
    'Entertainment & TV',
    'Display & Collections', 
    'Work & Productivity',
    'Storage & Organization',
    'Wine & Bar Setup',
    'Books & Library',
    'Multi-purpose'
  ],
  
  // Opções de estilo
  styleOptions: [
    'Clean Modern',
    'Warm Traditional',
    'Contemporary Mix', 
    'Industrial Chic',
    'Classic Elegant',
    'Not Sure - Show Me!'
  ],
  
  // Mensagens de qualificação
  qualification: {
    budget: "To design the perfect solution for you, what level of solution are you considering? This helps me understand your needs and show you the most suitable options.",
    timeline: "When would you love to be enjoying your new wall unit? This helps me understand if we need to plan around any special occasions or deadlines.",
    decision: "Are you the primary decision-maker for this project, or will others be involved in the final choice?"
  },
  
  // Opções de orçamento removidas
  budgetOptions: [
    'Basic solution',
    'Standard solution', 
    'Premium solution',
    'Luxury solution',
    'I need guidance on this'
  ],
  
  // Opções de timeline
  timelineOptions: [
    'ASAP - Within 2 months',
    '3-4 months',
    '5-6 months', 
    'After the holidays',
    'No specific timeline'
  ],
  
  // Respostas personalizadas por categoria
  productRecommendations: {
    entertainment: "Entertainment wall units are my absolute favorite! 🎬 We can create a stunning focal point that houses your TV, sound system, and all your media while hiding those messy cables. Plus, we can add features like ambient lighting, game storage, or even a hidden bar area.",
    office: "A home office wall unit is such a smart investment! 💼 We can design built-in desks, file storage, display shelving for books, and even hidden printer storage. Everything organized and beautiful - perfect for productivity and video calls!",
    kitchen: "Kitchen wall units are game-changers! 👨‍🍳 We can create stunning upper cabinetry that maximizes storage while maintaining that open, airy feel. Think spice organization, dish display, and integrated lighting that makes cooking a joy.",
    display: "Display wall units are pure art! 🎨 We can design custom shelving and lighting to showcase your collections, books, or treasured pieces. Each item becomes part of the room's design story.",
    storage: "Smart storage solutions are what we do best! 📦 We'll maximize every inch while keeping everything accessible and beautiful. No more clutter - just organized elegance."
  }
} as const

// ==========================================
// CONFIGURAÇÕES DE ESTILO
// ==========================================

/** Classes CSS customizadas reutilizáveis */
export const STYLE_CLASSES = {
  // Gradientes
  gradients: {
    primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]',
    text: 'gradient-text',
    overlay: 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
  },
  
  // Shadows
  shadows: {
    luxury: 'shadow-luxury',
    card: 'shadow-lg',
    button: 'shadow-lg hover:shadow-xl'
  },
  
  // Transições
  transitions: {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-500'
  },
  
  // Botões
  buttons: {
    primary: 'bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold transition-all duration-300',
    ghost: 'bg-transparent border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300'
  }
} as const

// ==========================================
// UTILITÁRIOS DE TIPO
// ==========================================

/** Tipo para as chaves das categorias de projeto */
export type ProjectCategoryKey = typeof PROJECT_CATEGORIES[number]['key']


/** Tipo para configurações de animação */
export type AnimationDuration = keyof typeof APP_CONFIG.animation.duration