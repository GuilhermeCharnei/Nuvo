/**
 * Utilitários e Funções Helper
 * 
 * Este arquivo contém funções utilitárias reutilizáveis em toda a aplicação.
 * Centraliza lógica comum para evitar duplicação de código.
 */

/**
 * Formata números como moeda em USD
 * @param value - Valor numérico a ser formatado
 * @param locale - Locale para formatação (padrão: en-US)
 * @returns String formatada como moeda
 */
export const formatCurrency = (value: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Cria um delay assíncrono
 * @param ms - Milissegundos para aguardar
 * @returns Promise que resolve após o delay
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Parse JSON seguro que não falha com valores vazios
 * @param value - String JSON para fazer parse
 * @param fallback - Valor padrão em caso de erro
 * @returns Objeto parsed ou valor padrão
 */
export const safeJSONParse = <T>(value: string | null, fallback: T): T => {
  if (!value) return fallback
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

/**
 * Gera ID único baseado em timestamp e random
 * @param prefix - Prefixo opcional para o ID
 * @returns ID único como string
 */
// Contador para IDs únicos (evita hydration mismatch)
let idCounter = 0;

export const generateId = (prefix: string = 'id'): string => {
  idCounter += 1;
  return `${prefix}_${idCounter}`;
}

/**
 * Trunca texto para um número máximo de caracteres
 * @param text - Texto a ser truncado
 * @param maxLength - Comprimento máximo
 * @param suffix - Sufixo a adicionar (padrão: ...)
 * @returns Texto truncado
 */
export const truncateText = (
  text: string, 
  maxLength: number, 
  suffix: string = '...'
): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - suffix.length) + suffix
}

/**
 * Valida se uma string é um email válido
 * @param email - String de email para validar
 * @returns Boolean indicando se é válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida se uma string é um telefone válido (formato americano)
 * @param phone - String de telefone para validar
 * @returns Boolean indicando se é válido
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+?1?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/
  return phoneRegex.test(phone)
}

/**
 * Scroll suave para um elemento
 * @param elementId - ID do elemento de destino
 * @param offset - Offset em pixels (padrão: 0)
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Debounce para funções - evita execuções excessivas
 * @param func - Função a ser debounced
 * @param wait - Tempo de espera em ms
 * @returns Função debounced
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

/**
 * Converte string para formato de slug (URL-friendly)
 * @param text - Texto a ser convertido
 * @returns String em formato slug
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/[\s_-]+/g, '-') // Substitui espaços por hífens
    .replace(/^-+|-+$/g, '') // Remove hífens do início/fim
}

/**
 * Classifica array de objetos por propriedade
 * @param array - Array a ser classificado
 * @param key - Chave para classificação
 * @param order - Ordem: 'asc' ou 'desc'
 * @returns Array classificado
 */
export const sortByKey = <T>(
  array: T[],
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  return [...array].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]
    
    if (aVal < bVal) return order === 'asc' ? -1 : 1
    if (aVal > bVal) return order === 'asc' ? 1 : -1
    return 0
  })
}

/**
 * Combina nomes de classes CSS condicionalmente
 * @param classes - Array de strings/objetos de classe
 * @returns String de classes combinadas
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Verifica se um valor está dentro de um range
 * @param value - Valor a verificar
 * @param min - Valor mínimo
 * @param max - Valor máximo
 * @returns Boolean indicando se está no range
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max
}

/**
 * Capitaliza primeira letra de cada palavra
 * @param text - Texto para capitalizar
 * @returns Texto com cada palavra capitalizada
 */
export const titleCase = (text: string): string => {
  return text.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )
}