/**
 * BASE DE CONHECIMENTO DO BOT SOFIA - NUVO WOODWORK
 * 
 * Este arquivo contém TODAS as informações que o bot Sofia deve saber sobre a NUVO.
 * 
 * ⚠️  IMPORTANTE: Revisar e validar todas as informações antes de usar no bot!
 * 
 * Última atualização: 10 de setembro de 2025
 * Responsável: [ADICIONAR NOME DO RESPONSÁVEL]
 */

// ==========================================
// INFORMAÇÕES BÁSICAS DA EMPRESA
// ==========================================

export const COMPANY_INFO = {
  name: "NUVO WOODWORK",
  specialty: "Custom Wall Units and Architectural Woodworking",
  location: "Florida, USA",
  website: "https://nuvowoodwork.com",
  
  // Descrição principal da empresa
  description: "Premium custom wall unit design and manufacturing company specializing in sophisticated woodworking solutions that integrate seamlessly with architectural spaces. We present wall units as architectural elements rather than furniture, emphasizing precision, craftsmanship, and custom design.",
  
  // Diferencial competitivo
  uniqueValue: "Italian craftsmanship meets modern innovation - transforming spaces into functional masterpieces through bespoke wall units."
} as const

// ==========================================
// POLÍTICAS E GARANTIAS
// ==========================================

export const COMPANY_POLICIES = {
  // ⚠️ CORRIGIDO: Garantia é de 12 meses, não 36!
  warranty: {
    duration: "12 months",
    coverage: "Manufacturing defects only",
    description: "We provide a 12-month warranty covering manufacturing defects on all our custom wall units."
  },
  
  // Processo de trabalho
  process: {
    consultation: "Free 3D design consultation",
    timeline: "Typically 6-12 weeks depending on project complexity",
    installation: "Professional white-glove installation included",
    materials: "Premium hardwoods, stone, and metal accents"
  },
  
  // Política de pagamento
  payment: {
    consultation: "Free initial consultation and 3D design",
    deposit: "Deposit required to begin production",
    timeline: "Payment schedule tied to project milestones"
  }
} as const

// ==========================================
// SERVIÇOS OFERECIDOS
// ==========================================

export const SERVICES = {
  // Serviços principais
  primary: [
    "Custom Wall Unit Design",
    "3D Visualization and Planning", 
    "Premium Material Selection",
    "Professional Installation",
    "Project Management"
  ],
  
  // Especialidades técnicas
  specialties: [
    "Entertainment Centers",
    "Home Office Built-ins",
    "Display and Storage Units",
    "Wine Storage Solutions",
    "Architectural Millwork"
  ],
  
  // O que NÃO oferecemos
  exclusions: [
    "We do not work with particle board or low-quality materials",
    "We do not offer same-day or rush installations",
    "We do not provide structural modifications to homes"
  ]
} as const

// ==========================================
// PERGUNTAS FREQUENTES (FAQ)
// ==========================================

export const FAQ = {
  timeline: {
    question: "How long does a typical project take?",
    answer: "Most wall unit projects take 6-12 weeks from design approval to installation, depending on complexity and material selection."
  },
  
  warranty: {
    question: "What warranty do you provide?",
    answer: "We provide a 12-month warranty covering manufacturing defects. This includes issues with craftsmanship, hardware, and material defects that occur under normal use."
  },
  
  consultation: {
    question: "Is the consultation really free?",
    answer: "Yes! We offer a completely free initial consultation including 3D design renderings. There's no obligation to proceed."
  },
  
  materials: {
    question: "What materials do you work with?",
    answer: "We work exclusively with premium materials: solid hardwoods (walnut, oak, cherry, maple), natural stone countertops, quality metal accents, and professional-grade hardware."
  },
  
  installation: {
    question: "Do you handle installation?",
    answer: "Absolutely! All our projects include professional white-glove installation by our experienced team. We handle everything from delivery to final cleanup."
  },
  
  design: {
    question: "Can you match my existing décor?",
    answer: "Yes! Our design team specializes in creating wall units that complement your existing architecture and interior design. We can match wood tones, styles, and finishes."
  }
} as const

// ==========================================
// CLIENTES IDEAIS
// ==========================================

export const TARGET_CUSTOMERS = {
  // Perfis de clientes ideais
  idealProfiles: [
    "Homeowners with luxury homes seeking custom storage solutions",
    "Professionals who work from home and need organized office spaces",
    "Entertainment enthusiasts wanting sophisticated media centers",
    "Wine collectors needing proper storage and display",
    "Anyone valuing craftsmanship and custom design"
  ],
  
  // Situações comuns
  commonNeeds: [
    "Need more storage without losing style",
    "Want to hide technology and cables",
    "Desire a custom piece that fits their exact space",
    "Looking to increase home value with quality additions",
    "Want Italian craftsmanship and attention to detail"
  ]
} as const

// ==========================================
// OBJEÇÕES COMUNS E RESPOSTAS
// ==========================================

export const OBJECTION_HANDLING = {
  price: {
    objection: "It seems expensive",
    response: "I understand! Think of it as an investment in your home. Our wall units are built to last decades, add significant value to your property, and are completely custom to your exact needs. Plus, you're getting Italian craftsmanship that you simply can't find at furniture stores."
  },
  
  timeline: {
    objection: "That seems like a long time to wait",
    response: "Great craftsmanship takes time! The 6-12 week timeline ensures every detail is perfect. We're not mass-producing - each piece is custom-built for your specific space. Most clients tell us the wait was absolutely worth it when they see the final result."
  },
  
  alternatives: {
    objection: "I can just buy something similar at a furniture store",
    response: "Store-bought units are one-size-fits-all and often use particle board or cheap materials. Our wall units are completely custom to your exact measurements, built with premium materials, and designed to integrate seamlessly with your architecture. It's truly architectural art vs. furniture."
  }
} as const

// ==========================================
// PRÓXIMOS PASSOS NO PROCESSO
// ==========================================

export const NEXT_STEPS = {
  // Após interesse inicial
  afterInterest: [
    "Schedule free consultation and 3D design session",
    "Measure space and discuss needs in detail", 
    "Review material options and finishes",
    "Receive detailed proposal with timeline",
    "Review and approve final design",
    "Begin production"
  ],
  
  // Call-to-actions apropriados
  callToActions: [
    "Schedule your free consultation",
    "See examples of similar projects",
    "Discuss your specific needs with our design team",
    "Get a personalized quote for your space"
  ]
} as const

// ==========================================
// LIMITES DO BOT
// ==========================================

export const BOT_LIMITATIONS = {
  // O que o bot pode fazer
  canDo: [
    "Provide general information about services and pricing",
    "Help qualify leads and understand needs",
    "Schedule consultations",
    "Answer questions about the process",
    "Show examples of previous work"
  ],
  
  // O que o bot NÃO pode fazer
  cannotDo: [
    "Provide exact quotes without consultation",
    "Make design decisions",
    "Schedule specific installation dates",
    "Negotiate pricing",
    "Guarantee specific timelines without seeing the project"
  ],
  
  // Quando transferir para humano
  escalateTo: [
    "Complex technical questions about installation",
    "Specific design requirements that need expert input",
    "Pricing negotiations",
    "Project timeline concerns",
    "Warranty claims or issues"
  ]
} as const