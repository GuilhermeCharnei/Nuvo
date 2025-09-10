/**
 * Constantes globais da aplicação NUVO WOODWORK
 * 
 * Este arquivo centraliza todas as informações da empresa, configurações,
 * categorias de projetos e classes de estilo reutilizáveis.
 */

import type { ProjectCategory } from '@/types'

/**
 * Informações da empresa NUVO WOODWORK
 */
export const COMPANY_INFO = {
  name: "NUVO WOODWORK",
  tagline: "Structure in Simplicity",
  description: "Wall Units sob medida que organizam, conectam e impressionam. Design arquitetônico com estrutura, simplicidade e presença.",
  
  // Informações de contato
  contact: {
    phone: "(11) 99999-9999",
    whatsapp: "5511999999999",
    email: "contato@nuvowoodwork.com",
    address: {
      street: "Rua da Marcenaria, 123",
      district: "Design District",
      city: "São Paulo",
      state: "SP"
    }
  },

  // Horários de atendimento
  businessHours: {
    weekdays: "Segunda a Sexta: 8h às 18h",
    saturday: "Sábado: 9h às 15h",
    sunday: "Fechado"
  },

  // Estatísticas da empresa
  stats: {
    experience: "15+",
    clients: "500+",
    successRate: "98%",
    rating: "4.9"
  },

  // Redes sociais
  social: {
    instagram: "https://instagram.com/nuvowoodwork",
    facebook: "https://facebook.com/nuvowoodwork", 
    youtube: "https://youtube.com/nuvowoodwork",
    linkedin: "https://linkedin.com/company/nuvowoodwork"
  }
} as const

/**
 * Categorias de projetos disponíveis
 */
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    key: 'all',
    label: 'Todos os Projetos',
    description: 'Visualizar todos os projetos realizados'
  },
  {
    key: 'living-room',
    label: 'Sala de Estar',
    description: 'Wall units para entretenimento e convívio'
  },
  {
    key: 'gourmet',
    label: 'Ambiente Gourmet',
    description: 'Adegas e espaços gastronômicos integrados'
  },
  {
    key: 'office',
    label: 'Home Office',
    description: 'Escritórios funcionais e organizados'
  },
  {
    key: 'corporate',
    label: 'Corporativo',
    description: 'Soluções para ambientes empresariais'
  },
  {
    key: 'bedroom',
    label: 'Quarto Principal',
    description: 'Storage e design para ambientes íntimos'
  },
  {
    key: 'custom',
    label: 'Projetos Especiais',
    description: 'Soluções únicas e personalizadas'
  }
] as const

/**
 * Configurações gerais da aplicação
 */
export const APP_CONFIG = {
  // Configurações de animação
  animation: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 1.0
    },
    easing: {
      default: [0.4, 0, 0.2, 1],
      spring: [0.6, 0.05, 0.01, 0.9]
    }
  },

  // Configurações de scroll
  scroll: {
    behavior: 'smooth' as const,
    offset: 80 // Offset para compensar navbar fixa
  },

  // Breakpoints responsivos (seguindo Tailwind)
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Configurações de SEO
  seo: {
    defaultTitle: 'NUVO WOODWORK - Wall Units Sob Medida',
    titleSeparator: ' | ',
    defaultDescription: 'Wall Units que organizam, conectam e impressionam. Design sob medida com estrutura, simplicidade e presença.'
  }
} as const

/**
 * Classes CSS reutilizáveis
 * Padroniza estilos comuns em toda a aplicação
 */
export const STYLE_CLASSES = {
  // Gradientes
  gradients: {
    text: 'bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent',
    overlay: 'absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent',
    luxury: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80'
  },

  // Botões
  buttons: {
    primary: 'bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300',
    ghost: 'bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300'
  },

  // Sombras
  shadows: {
    luxury: 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]',
    card: 'shadow-lg hover:shadow-xl transition-shadow duration-300',
    soft: 'shadow-md'
  },

  // Animações
  animations: {
    fadeInUp: 'animate-fade-in-up',
    scaleIn: 'animate-scale-in',
    float: 'animate-float'
  },

  // Layout
  containers: {
    main: 'max-w-7xl mx-auto px-4 sm:px-6',
    content: 'max-w-4xl mx-auto px-4 sm:px-6',
    narrow: 'max-w-2xl mx-auto px-4 sm:px-6'
  },

  // Espaçamentos de seção
  sections: {
    padding: 'py-16 sm:py-20 lg:py-24'
  }
} as const

/**
 * Configurações de tipos de Wall Unit
 */
export const WALL_UNIT_TYPES = {
  'living-room': {
    title: 'Sala de Estar',
    icon: 'FaCouch',
    features: [
      'Painel para TV até 75 polegadas',
      'Storage para equipamentos',
      'Nichos para decoração', 
      'Iluminação LED integrada',
      'Gerenciamento de cabos invisível'
    ],
    materials: ['Madeira nobre', 'Laca premium', 'Melamina alto padrão'],
    priceRange: 'R$ 8.000 - R$ 25.000'
  },
  gourmet: {
    title: 'Ambiente Gourmet',
    icon: 'FaUtensils',
    features: [
      'Adega climatizada integrada',
      'Bar com iluminação especial',
      'Storage para cristais',
      'Sistema push-pull premium',
      'Acabamentos resistentes'
    ],
    materials: ['Madeira tratada', 'Vidro anti-UV', 'Aço inoxidável'],
    priceRange: 'R$ 15.000 - R$ 45.000'
  },
  office: {
    title: 'Home Office',
    icon: 'FaLaptop',
    features: [
      'Mesa integrada personalizada',
      'Prateleiras ajustáveis',
      'Sistema de cabos invisível',
      'Iluminação focal',
      'Storage para documentos'
    ],
    materials: ['MDF premium', 'Fórmica texturizada', 'Madeira natural'],
    priceRange: 'R$ 6.000 - R$ 18.000'
  }
} as const

/**
 * Mensagens padronizadas do sistema
 */
export const SYSTEM_MESSAGES = {
  loading: 'Carregando...',
  error: 'Ops! Algo deu errado. Tente novamente.',
  success: 'Ação realizada com sucesso!',
  noResults: 'Nenhum resultado encontrado.',
  comingSoon: 'Em breve! Estamos preparando algo incrível.',
  
  // Mensagens específicas do chatbot
  chatbot: {
    greeting: 'Olá! Eu sou a Sofia, assistente virtual da NUVO WOODWORK!',
    offline: 'Estou temporariamente offline. Use nosso WhatsApp: (11) 99999-9999',
    error: 'Desculpe, não consegui processar sua mensagem. Pode repetir?'
  },

  // Mensagens de formulário
  form: {
    required: 'Este campo é obrigatório.',
    invalidEmail: 'Por favor, digite um e-mail válido.',
    invalidPhone: 'Por favor, digite um telefone válido.',
    success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    error: 'Erro ao enviar mensagem. Tente novamente ou use nosso WhatsApp.'
  }
} as const

/**
 * URLs e links importantes
 */
export const URLS = {
  whatsapp: `https://wa.me/${COMPANY_INFO.contact.whatsapp}`,
  phone: `tel:+${COMPANY_INFO.contact.whatsapp}`,
  email: `mailto:${COMPANY_INFO.contact.email}`,
  
  // Portfolio e projetos
  portfolio: '/portfolio',
  project: (id: string | number) => `/project/${id}`,
  
  // Páginas institucionais
  about: '/sobre',
  contact: '/contato',
  services: '/servicos',
  
  // Links externos
  googleMaps: 'https://goo.gl/maps/exemplo',
  calendly: 'https://calendly.com/nuvowoodwork'
} as const
