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
// FAIXAS DE PREÇOS DOS PROJETOS
// ==========================================

/** Faixas de preços para diferentes tipos de wall units */
export const PRICE_RANGES = {
  display: { min: 15000, max: 50000, label: '$15K-$50K' },
  kitchen: { min: 25000, max: 75000, label: '$25K-$75K' },
  entertainment: { min: 35000, max: 85000, label: '$35K-$85K' },
  bar: { min: 45000, max: 100000, label: '$45K-$100K' },
  wine: { min: 60000, max: 150000, label: '$60K-$150K+' },
  office: { min: 35000, max: 75000, label: '$35K-$75K' },
  living: { min: 40000, max: 100000, label: '$40K-$100K' },
  dining: { min: 30000, max: 70000, label: '$30K-$70K' },
  architectural: { min: 15000, max: 50000, label: '$15K-$50K' }
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

/** Mensagens pré-definidas para o chatbot Sofia */
export const CHATBOT_MESSAGES = {
  // Mensagem de boas-vindas
  welcome: "Hi there! I'm Sofia from NUVO! 👋\n\nI'm so excited to help you create something truly spectacular for your space! Our wall units aren't just furniture - they're architectural art that transforms entire rooms.\n\nWhat type of wall unit caught your attention?",
  
  // Opções de tipos de wall units
  typeOptions: [
    'Wet Bar & Entertainment',
    'Wine Storage & Display', 
    'Kitchen & Office Units',
    'Architectural Features',
    'Something Custom'
  ],
  
  // Mensagens de follow-up
  followUp: {
    budget: "What's your approximate budget range? This helps me tailor my suggestions perfectly for you.",
    timeline: "When would you ideally like to have your beautiful new wall unit completed?",
    features: "What features are most exciting to you for your wall unit?"
  },
  
  // Opções de orçamento
  budgetOptions: [
    '$15K - $35K',
    '$35K - $65K', 
    '$65K - $100K',
    '$100K+',
    'Not sure yet'
  ],
  
  // Opções de timeline
  timelineOptions: [
    'Within 2 months',
    '3-4 months',
    '5-6 months', 
    'No rush'
  ]
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

/** Tipo para as chaves das faixas de preço */
export type PriceRangeKey = keyof typeof PRICE_RANGES

/** Tipo para configurações de animação */
export type AnimationDuration = keyof typeof APP_CONFIG.animation.duration