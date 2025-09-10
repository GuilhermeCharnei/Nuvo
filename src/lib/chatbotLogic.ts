/**
 * Lógica de Vendas Inteligente para Chatbot Sofia
 * 
 * Este arquivo contém toda a inteligência de vendas, análise de necessidades
 * e recomendações personalizadas para Wall Units NUVO.
 */

import { PRODUCT_KNOWLEDGE, findProductByKeywords, recommendProducts } from '@/data/productKnowledge'
import { COMPANY_POLICIES, PRICING_RANGES, FAQ, OBJECTION_HANDLING } from '@/data/botKnowledgeBase'
import type { ProductCategory } from '@/data/productKnowledge'

export interface CustomerProfile {
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

export interface RecommendationResult {
  primaryRecommendation: ProductCategory
  alternativeOptions: ProductCategory[]
  reasoning: string
  nextQuestions: string[]
  estimatedInvestment: string
  proposedTimeline: string
}

/**
 * Analisa as necessidades do cliente e gera recomendações inteligentes
 */
export const analyzeCustomerNeeds = (profile: CustomerProfile): RecommendationResult => {
  const { room, purpose, style, challenges, budget } = profile
  
  // Determina categoria principal baseada no ambiente e propósito
  let primaryCategory = 'entertainment' // default
  
  if (room && purpose) {
    if (room.toLowerCase().includes('office') || purpose.includes('Work & Productivity')) {
      primaryCategory = 'office'
    } else if (room.toLowerCase().includes('kitchen') || purpose.includes('Storage & Organization')) {
      primaryCategory = 'kitchen'
    } else if (purpose.includes('Entertainment & TV') || purpose.includes('Wine & Bar Setup')) {
      primaryCategory = 'entertainment'
    } else if (purpose.includes('Display & Collections') || purpose.includes('Books & Library')) {
      primaryCategory = 'entertainment' // Display units são parte de entertainment
    }
  }
  
  const primary = PRODUCT_KNOWLEDGE.find(cat => cat.id === primaryCategory) || PRODUCT_KNOWLEDGE[0]
  
  // Encontra alternativas relevantes
  const alternatives = PRODUCT_KNOWLEDGE
    .filter(cat => cat.id !== primaryCategory)
    .slice(0, 2)
  
  // Gera reasoning personalizado
  const reasoning = generateReasoning(profile, primary)
  
  // Próximas perguntas baseadas no que está faltando
  const nextQuestions = generateNextQuestions(profile)
  
  return {
    primaryRecommendation: primary,
    alternativeOptions: alternatives,
    reasoning,
    nextQuestions,
    estimatedInvestment: primary.priceRange,
    proposedTimeline: primary.timeline
  }
}

/**
 * Gera explicação personalizada para a recomendação
 */
const generateReasoning = (profile: CustomerProfile, recommendation: ProductCategory): string => {
  const { room, purpose, style } = profile
  
  let reasoning = `Based on what you've shared, I think a ${recommendation.name.toLowerCase()} would be perfect for your ${room || 'space'}! `
  
  if (purpose?.length) {
    reasoning += `Since you mentioned ${purpose.join(' and ').toLowerCase()}, `
  }
  
  reasoning += `this solution will ${recommendation.description.toLowerCase()}`
  
  if (style) {
    reasoning += ` We can design it in a ${style.toLowerCase()} style that perfectly matches your aesthetic.`
  }
  
  return reasoning
}

/**
 * Gera próximas perguntas baseadas no que ainda não sabemos
 */
const generateNextQuestions = (profile: CustomerProfile): string[] => {
  const questions: string[] = []
  
  if (!profile.budget) {
    questions.push("What investment range feels comfortable for this project?")
  }
  
  if (!profile.timeline) {
    questions.push("When would you ideally like to have this completed?")
  }
  
  if (!profile.challenges) {
    questions.push("What specific storage or functionality challenges should we solve?")
  }
  
  if (!profile.style) {
    questions.push("What style direction appeals to you most?")
  }
  
  return questions.slice(0, 2) // Máximo 2 perguntas por vez
}

/**
 * Determina se temos informações suficientes para uma proposta
 */
export const isReadyForProposal = (profile: CustomerProfile): boolean => {
  return !!(
    profile.room &&
    profile.purpose?.length &&
    profile.budget &&
    profile.timeline
  )
}

/**
 * Gera mensagem de proposta personalizada
 */
export const generateProposal = (profile: CustomerProfile): string => {
  const recommendation = analyzeCustomerNeeds(profile)
  
  return `Perfect! Based on everything you've shared, I have some exciting ideas for your ${profile.room} wall unit! 🎉

Here's what I'm envisioning:

**${recommendation.primaryRecommendation.name}**
${recommendation.reasoning}

**Investment Range:** ${recommendation.estimatedInvestment}
**Timeline:** ${recommendation.proposedTimeline}

**What's Included:**
• ${COMPANY_POLICIES.process.consultation}
• Premium materials and Italian craftsmanship
• ${COMPANY_POLICIES.process.installation}
• ${COMPANY_POLICIES.warranty.duration} ${COMPANY_POLICIES.warranty.coverage.toLowerCase()}

I'd love to show you some examples of similar projects we've done and discuss the specific features that would work best for your space.

Would you like to schedule your free consultation where we create 3D renderings of your custom design? Our team can visit your space and provide detailed recommendations within your ${profile.budget} budget range.`
}

/**
 * Identifica palavras-chave para entender intenção do cliente
 */
export const identifyIntent = (message: string): string[] => {
  const keywords: string[] = []
  const messageLower = message.toLowerCase()
  
  // Identifica tipo de ambiente
  if (messageLower.includes('living') || messageLower.includes('family room')) keywords.push('living_room')
  if (messageLower.includes('office') || messageLower.includes('work')) keywords.push('office')
  if (messageLower.includes('kitchen')) keywords.push('kitchen')
  if (messageLower.includes('entertainment') || messageLower.includes('tv') || messageLower.includes('media')) keywords.push('entertainment')
  
  // Identifica necessidades
  if (messageLower.includes('storage') || messageLower.includes('organize')) keywords.push('storage')
  if (messageLower.includes('display') || messageLower.includes('show')) keywords.push('display')
  if (messageLower.includes('wine') || messageLower.includes('bar')) keywords.push('wine_bar')
  
  // Identifica estilo
  if (messageLower.includes('modern') || messageLower.includes('contemporary')) keywords.push('modern')
  if (messageLower.includes('traditional') || messageLower.includes('classic')) keywords.push('traditional')
  
  return keywords
}

/**
 * Gera resposta inteligente baseada na análise da mensagem
 */
export const generateIntelligentResponse = (message: string, profile: CustomerProfile): string => {
  const intent = identifyIntent(message)
  const products = findProductByKeywords(message)
  
  if (products.length > 0) {
    const product = products[0]
    return `${product.name} - that's exactly our specialty! 🏆 ${product.description} 

I'd love to learn more about your specific vision. ${product.idealFor.includes('your situation') ? 'This sounds perfect for what you have in mind!' : `These are especially popular with ${product.idealFor.join(', ')}.`}

What's the main challenge you're hoping to solve in your space?`
  }
  
  // Resposta genérica inteligente
  return `That's a great question! Let me help you explore the best wall unit solution for your needs. 

Could you tell me a bit more about:
- What room you're looking to transform
- How you currently use that space
- What your biggest storage or organization challenge is

This way I can give you much more specific and helpful recommendations! 😊`
}