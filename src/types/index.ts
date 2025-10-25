/**
 * Definições de tipos TypeScript para o projeto NUVO WOODWORK
 * Este arquivo centraliza todos os tipos e interfaces usados na aplicação
 */

// ==========================================
// TIPOS BASE DA APLICAÇÃO
// ==========================================

/** Especificações técnicas de um projeto */
export interface ProjectSpecs {
  /** Dimensões do projeto (ex: "12' W x 8' H x 2' D") */
  dimensions: string
  /** Materiais utilizados (ex: "Walnut wood, Granite countertop") */
  materials: string
  /** Lista de características principais */
  features: string[]
  /** Tempo estimado para conclusão (ex: "8-10 weeks") */
  timeline: string
  /** Faixa de preço do projeto (ex: "$45,000 - $65,000") */
  priceRange: string
}

/** Testemunho de cliente */
export interface ClientTestimonial {
  /** Texto do depoimento */
  text: string
  /** Nome do cliente */
  client: string
  /** Localização do cliente */
  location: string
}

/** Interface principal para um projeto */
export interface Project {
  /** ID único do projeto */
  id: number
  /** Título do projeto */
  title: string
  /** Categoria do projeto (bar, wine, office, etc.) */
  category: string
  /** URL da imagem principal */
  image: string
  /** URLs das imagens adicionais (opcional) */
  images?: string[]
  /** Descrição curta para cards */
  description: string
  /** Descrição completa para página individual (opcional) */
  fullDescription?: string
  /** Especificações técnicas (opcional) */
  specs?: ProjectSpecs
  /** História do projeto e desafios (opcional) */
  clientStory?: string
  /** Depoimento do cliente (opcional) */
  testimonial?: ClientTestimonial
}

// ==========================================
// TIPOS DO CHATBOT
// ==========================================

/** Estados possíveis de uma mensagem do chatbot */
export type MessageStatus = 'sending' | 'sent' | 'error'

/** Tipos de remetente de mensagem */
export type MessageSender = 'user' | 'bot'

/** Interface para uma mensagem do chatbot */
export interface ChatMessage {
  /** ID único da mensagem */
  id: string
  /** Conteúdo da mensagem */
  content: string
  /** Quem enviou a mensagem */
  sender: MessageSender
  /** Timestamp da mensagem */
  timestamp: Date
  /** Status da mensagem (opcional) */
  status?: MessageStatus
  /** Se é uma mensagem com opções de resposta (opcional) */
  hasOptions?: boolean
  /** Opções de resposta disponíveis (opcional) */
  options?: string[]
}

/** Estágios da conversa no chatbot */
export type ConversationStage = 
  | 'greeting'
  | 'room_selection'
  | 'purpose_discovery'
  | 'style_inquiry'
  | 'challenges_discovery'
  | 'budget_inquiry'
  | 'timeline_inquiry'
  | 'recommendation'
  | 'contact_collection'
  | 'completed'

/** Estado completo do chatbot */
export interface ChatbotState {
  /** Se o chatbot está aberto */
  isOpen: boolean
  /** Lista de mensagens */
  messages: ChatMessage[]
  /** Estágio atual da conversa */
  stage: ConversationStage
  /** Se está aguardando resposta do usuário */
  isWaitingForResponse: boolean
  /** Dados coletados do usuário */
  userData: {
    room?: string
    purpose?: string[]
    style?: string
    challenges?: string[]
    budget?: string
    timeline?: string
    isDecisionMaker?: boolean
    inspiration?: string
    name?: string
    email?: string
    phone?: string
  }
}

// ==========================================
// TIPOS DE COMPONENTES
// ==========================================

/** Props para componentes de botão */
export interface ButtonProps {
  /** Texto do botão */
  children: React.ReactNode
  /** Função chamada ao clicar */
  onClick?: () => void
  /** Variante visual do botão */
  variant?: 'primary' | 'secondary' | 'ghost'
  /** Se o botão está desabilitado */
  disabled?: boolean
  /** Classes CSS adicionais */
  className?: string
  /** Tipo do botão HTML */
  type?: 'button' | 'submit' | 'reset'
}

/** Props para componentes de card de projeto */
export interface ProjectCardProps {
  /** Dados do projeto */
  project: Project
  /** Função chamada ao clicar no card */
  onClick?: (projectId: number) => void
  /** Índice para animações escalonadas */
  index?: number
  /** Se as animações devem ser exibidas */
  animate?: boolean
}

/** Props para componentes de galeria */
export interface ProjectGalleryProps {
  /** Lista de projetos para exibir */
  projects: Project[]
  /** Categoria ativa para filtro */
  activeCategory?: string
  /** Função para mudança de categoria */
  onCategoryChange?: (category: string) => void
  /** Se deve mostrar filtros */
  showFilters?: boolean
}

// ==========================================
// TIPOS DE NAVEGAÇÃO
// ==========================================

/** Parâmetros de rota para páginas dinâmicas */
export interface RouteParams {
  /** ID do projeto na URL */
  id: string
  /** Index signature para compatibilidade com Next.js 14.2.32+ */
  [key: string]: string | string[]
}

/** Props para componentes de página */
export interface PageProps {
  /** Parâmetros da rota */
  params: RouteParams
  /** Query parameters da URL */
  searchParams?: { [key: string]: string | string[] | undefined }
}

// ==========================================
// TIPOS DE UTILIDADE
// ==========================================

/** Função genérica para handlers de eventos */
export type EventHandler<T = void> = () => T

/** Função para handlers com parâmetro */
export type ParameterizedEventHandler<P, T = void> = (param: P) => T

/** Configurações de animação */
export interface AnimationConfig {
  /** Duração da animação em segundos */
  duration: number
  /** Delay antes de iniciar em segundos */
  delay?: number
  /** Função de easing */
  ease?: string
}

/** Status de carregamento para operações assíncronas */
export type LoadingStatus = 'idle' | 'loading' | 'success' | 'error'

// ==========================================
// TIPOS DE FORMULÁRIO
// ==========================================

/** Dados básicos de contato */
export interface ContactFormData {
  /** Nome completo */
  name: string
  /** Email */
  email: string
  /** Telefone (opcional) */
  phone?: string
  /** Mensagem ou comentários */
  message?: string
  /** Tipo de projeto de interesse */
  projectType?: string
}

/** Estado de validação de campo */
export interface FieldValidation {
  /** Se o campo é válido */
  isValid: boolean
  /** Mensagem de erro (se houver) */
  errorMessage?: string
}

/** Estado completo de validação de formulário */
export interface FormValidationState {
  /** Validações por campo */
  fields: Record<string, FieldValidation>
  /** Se o formulário todo é válido */
  isFormValid: boolean
}

// ==========================================
// TIPOS ESPECÍFICOS DO PROJETO
// ==========================================

/** Tipo para as chaves das categorias de projeto */
export type ProjectCategoryKey = 'all' | 'bar' | 'display' | 'entertainment' | 'wine' | 'office' | 'kitchen' | 'living' | 'dining' | 'architectural'


/** Tipo para configurações de animação */
export type AnimationDuration = 'fast' | 'normal' | 'slow'