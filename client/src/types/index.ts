/**
 * Definições de tipos TypeScript para a aplicação NUVO WOODWORK
 * 
 * Este arquivo centraliza todas as interfaces e tipos utilizados
 * na aplicação, garantindo consistência e type safety.
 */

/**
 * Tipos básicos para categorias de projetos
 */
export type ProjectCategoryKey = 
  | 'all' 
  | 'living-room' 
  | 'gourmet' 
  | 'office' 
  | 'corporate' 
  | 'bedroom' 
  | 'custom'

export interface ProjectCategory {
  key: ProjectCategoryKey
  label: string
  description: string
}

/**
 * Interface para especificações técnicas de um projeto
 */
export interface ProjectSpecs {
  timeline: string // ex: "4-6 semanas"
  materials: string // ex: "Carvalho Europeu, Vidro temperado"
  dimensions: string // ex: "3,5m x 2,8m x 0,4m"
  priceRange: string // ex: "R$ 15.000 - R$ 25.000"
  features: string[] // lista de características
}

/**
 * Interface para depoimentos de clientes
 */
export interface Testimonial {
  client: string // nome do cliente
  location: string // cidade/estado
  text: string // depoimento
}

/**
 * Interface principal para projetos
 */
export interface Project {
  id: number
  title: string
  description: string
  fullDescription?: string // descrição detalhada para modal
  category: Exclude<ProjectCategoryKey, 'all'> // não pode ser 'all'
  image: string // imagem principal
  images?: string[] // galeria adicional
  specs?: ProjectSpecs // especificações técnicas
  testimonial?: Testimonial // depoimento do cliente
  clientStory?: string // história/contexto do projeto
  featured?: boolean // destaque na homepage
  tags?: string[] // tags para filtros adicionais
  createdAt?: Date // data de criação
}

/**
 * Tipos para handlers de eventos
 */
export type EventHandler = (event?: React.MouseEvent | React.KeyboardEvent) => void

/**
 * Interface para configurações de animação
 */
export interface AnimationConfig {
  initial?: Record<string, any>
  animate?: Record<string, any>
  exit?: Record<string, any>
  transition?: Record<string, any>
}

/**
 * Interface para mensagens do chatbot
 */
export interface ChatMessage {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  options?: string[]
}

/**
 * Tipos para estado do chatbot
 */
export type ChatbotState = 'closed' | 'open' | 'minimized'

/**
 * Interface para configurações de SEO
 */
export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

/**
 * Interface para dados de contato
 */
export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  address: {
    street: string
    district: string
    city: string
    state: string
  }
}

/**
 * Interface para estatísticas da empresa
 */
export interface CompanyStats {
  experience: string
  clients: string
  successRate: string
  rating: string
}

/**
 * Tipos para formulários
 */
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  environment: string
  message: string
}

export interface QuoteFormData extends ContactFormData {
  budget?: string
  timeline?: string
  location: string
  dimensions?: string
}

/**
 * Interface para configurações de filtro
 */
export interface FilterConfig {
  category: ProjectCategoryKey
  sortBy?: 'date' | 'title' | 'featured'
  sortOrder?: 'asc' | 'desc'
}

/**
 * Tipos para estados de loading/error
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface AsyncState<T> {
  data: T | null
  state: LoadingState
  error?: string
}

/**
 * Interface para configurações de componente
 */
export interface ComponentConfig {
  showAnimation?: boolean
  autoPlay?: boolean
  loop?: boolean
  delay?: number
}

/**
 * Tipos para responsividade
 */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface ResponsiveConfig {
  [key in Breakpoint]?: number | string | boolean
}

/**
 * Interface para dados de redes sociais
 */
export interface SocialMedia {
  platform: string
  url: string
  icon: string
  followers?: string
}

/**
 * Interface para avaliações/reviews
 */
export interface Review {
  id: string
  client: string
  rating: number
  comment: string
  project?: string
  date: Date
  platform: 'google' | 'facebook' | 'instagram' | 'website'
}

/**
 * Tipos utilitários
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type Required<T, K extends keyof T> = Omit<T, K> & Omit<Required<Pick<T, K>>, never>

/**
 * Interface para configuração de tema/cores
 */
export interface ThemeConfig {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  muted: string
}

/**
 * Tipos para navegação
 */
export interface NavigationItem {
  label: string
  href: string
  external?: boolean
  children?: NavigationItem[]
}

/**
 * Interface para meta dados de página
 */
export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}
