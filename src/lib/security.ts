/**
 * Utilitários de Segurança
 * 
 * Este arquivo contém funções para validação segura, sanitização
 * e proteção contra ataques comuns em aplicações web.
 */

/**
 * Sanitiza strings removendo caracteres perigosos para prevenir XSS
 * @param input - String de entrada do usuário
 * @returns String sanitizada
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/[<>]/g, '') // Remove < e >
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+=/gi, '') // Remove event handlers (onclick, onload, etc.)
    .replace(/script/gi, '') // Remove palavra script
    .trim()
    .substring(0, 1000) // Limita tamanho máximo
}

/**
 * Sanitiza HTML removendo tags perigosas
 * @param html - String HTML de entrada
 * @returns HTML sanitizado
 */
export const sanitizeHTML = (html: string): string => {
  if (typeof html !== 'string') return ''
  
  // Remove tags script, style, object, embed, iframe
  const dangerousTags = /<(script|style|object|embed|iframe|form|input)[^>]*>.*?<\/\1>/gi
  const dangerosSelfClosing = /<(script|style|object|embed|iframe|form|input)[^>]*\/>/gi
  
  return html
    .replace(dangerousTags, '')
    .replace(dangerosSelfClosing, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
}

/**
 * Valida email com regex rigorosa
 * @param email - Email para validar
 * @returns Boolean indicando se é válido
 */
export const validateEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false
  
  // Regex mais rigorosa para email
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  return emailRegex.test(email) && email.length <= 254 // RFC limit
}

/**
 * Valida telefone americano
 * @param phone - Telefone para validar
 * @returns Boolean indicando se é válido
 */
export const validatePhone = (phone: string): boolean => {
  if (!phone || typeof phone !== 'string') return false
  
  // Remove caracteres não numéricos
  const numericPhone = phone.replace(/\D/g, '')
  
  // Valida formato americano (10 ou 11 dígitos)
  return /^1?[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(numericPhone)
}

/**
 * Valida nome (sem caracteres especiais perigosos)
 * @param name - Nome para validar
 * @returns Boolean indicando se é válido
 */
export const validateName = (name: string): boolean => {
  if (!name || typeof name !== 'string') return false
  
  // Apenas letras, espaços, hífens e apostrofes
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/
  
  return nameRegex.test(name) && name.length >= 2 && name.length <= 100
}

/**
 * Valida mensagem de texto (remove conteúdo potencialmente perigoso)
 * @param message - Mensagem para validar
 * @returns Object com isValid e sanitizedMessage
 */
export const validateMessage = (message: string): { isValid: boolean; sanitizedMessage: string } => {
  if (!message || typeof message !== 'string') {
    return { isValid: false, sanitizedMessage: '' }
  }
  
  const sanitized = sanitizeInput(message)
  const isValid = sanitized.length >= 10 && sanitized.length <= 2000
  
  return { isValid, sanitizedMessage: sanitized }
}

/**
 * Rate limiting simples (em memória)
 * Para produção, use Redis ou banco de dados
 */
const rateLimitStore = new Map<string, { count: number; timestamp: number }>()

/**
 * Verifica rate limit para um IP
 * @param identifier - IP ou identificador único
 * @param maxRequests - Número máximo de requests
 * @param windowMs - Janela de tempo em milissegundos
 * @returns Boolean indicando se está dentro do limite
 */
export const checkRateLimit = (
  identifier: string, 
  maxRequests: number = 10, 
  windowMs: number = 60000 // 1 minuto
): boolean => {
  const now = Date.now()
  const key = identifier
  const record = rateLimitStore.get(key)
  
  if (!record || now - record.timestamp > windowMs) {
    // Nova janela de tempo
    rateLimitStore.set(key, { count: 1, timestamp: now })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false // Limite excedido
  }
  
  // Incrementa contador
  rateLimitStore.set(key, { ...record, count: record.count + 1 })
  return true
}

/**
 * Gera token CSRF simples
 * @returns String token
 */
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

/**
 * Valida comprimento de string com limites seguros
 * @param input - String para validar
 * @param minLength - Comprimento mínimo
 * @param maxLength - Comprimento máximo
 * @returns Boolean indicando se está dentro dos limites
 */
export const validateLength = (input: string, minLength: number, maxLength: number): boolean => {
  if (!input || typeof input !== 'string') return false
  return input.length >= minLength && input.length <= maxLength
}

/**
 * Verifica se uma URL é segura (mesmo domínio ou lista permitida)
 * @param url - URL para verificar
 * @param allowedDomains - Lista de domínios permitidos
 * @returns Boolean indicando se é segura
 */
export const isSecureURL = (url: string, allowedDomains: string[] = []): boolean => {
  try {
    const urlObj = new URL(url)
    
    // Permite URLs relativas (mesmo domínio)
    if (url.startsWith('/') && !url.startsWith('//')) {
      return true
    }
    
    // Bloqueia protocolos perigosos
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return false
    }
    
    // Verifica domínios permitidos
    return allowedDomains.includes(urlObj.hostname)
  } catch {
    return false
  }
}

/**
 * Escapa caracteres especiais para uso em HTML
 * @param text - Texto para escapar
 * @returns Texto escapado
 */
export const escapeHTML = (text: string): string => {
  if (typeof text !== 'string') return ''
  
  const escapeMap: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  }
  
  return text.replace(/[&<>"'/]/g, (char) => escapeMap[char])
}