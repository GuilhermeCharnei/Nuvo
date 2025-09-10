/**
 * Dados dos projetos realizados pela NUVO WOODWORK
 * 
 * Este arquivo contém o catálogo completo de projetos com informações
 * detalhadas para exibição no portfolio e nas páginas individuais.
 */

import type { Project } from '@/types'

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Wall Unit Residencial Moderna",
    description: "Sistema completo de entretenimento com TV integrada, storage inteligente e iluminação LED ambiente para sala de estar contemporânea.",
    fullDescription: "Este projeto transformou completamente a sala de estar de uma residência em Alphaville. A wall unit integra perfeitamente o sistema de entretenimento com soluções de armazenamento elegantes, criando um ambiente sofisticado e funcional. O design minimalista valoriza tanto a funcionalidade quanto a estética, com materiais premium e acabamentos impecáveis.",
    category: "living-room",
    image: "/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg",
    images: [
      "/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg",
      "/images/imgi_16_537905886_18076992200493478_4499625465287494593_n_1757111152302.jpg"
    ],
    specs: {
      timeline: "6 semanas",
      materials: "Carvalho Europeu, LED RGB, Vidro temperado",
      dimensions: "4,2m x 2,5m x 0,4m",
      priceRange: "R$ 22.000 - R$ 28.000",
      features: [
        "Painel para TV até 75 polegadas",
        "Sistema de som integrado Sonos",
        "Iluminação LED RGB programável",
        "Storage oculto para equipamentos",
        "Gerenciamento invisível de cabos",
        "Controle via smartphone"
      ]
    },
    testimonial: {
      client: "Maria & João Silva",
      location: "Alphaville, SP",
      text: "A NUVO superou todas as nossas expectativas. O projeto ficou exatamente como imaginávamos, mas ainda melhor. A qualidade dos materiais e o acabamento são impecáveis. Nossa sala se tornou o ambiente favorito da casa!"
    },
    clientStory: "O casal queria uma solução que organizasse todos os equipamentos de entretenimento sem perder a elegância do ambiente. O desafio era integrar TV, som, gaming e storage em um design limpo e sofisticado.",
    featured: true,
    tags: ["entretenimento", "led", "minimalista", "premium"],
    createdAt: new Date('2024-01-15')
  },

  {
    id: 2,
    title: "Ambiente Gourmet com Adega Climatizada",
    description: "Espaço gastronômico completo com adega integrada, bar premium e sistema de iluminação especial para valorizar coleções de vinhos.",
    fullDescription: "Um projeto sofisticado que combina funcionalidade gourmet com design exclusivo. A adega climatizada comporta mais de 200 garrafas com controle preciso de temperatura e umidade. O bar integrado possui iluminação especial que realça as garrafas e cria uma atmosfera única para entretenimento.",
    category: "gourmet",
    image: "/images/imgi_10_539858318_615257668134300_4100570420848379988_n_1757111152298.jpg",
    images: [
      "/images/imgi_10_539858318_615257668134300_4100570420848379988_n_1757111152298.jpg",
      "/images/imgi_9_541880794_18077731115493478_1184188163504688235_n_1757111152300.jpg"
    ],
    specs: {
      timeline: "8 semanas",
      materials: "Nogueira brasileira, Vidro anti-UV, Aço inoxidável",
      dimensions: "3,8m x 2,2m x 0,6m",
      priceRange: "R$ 35.000 - R$ 45.000",
      features: [
        "Adega climatizada para 200+ garrafas",
        "Controle digital de temperatura",
        "Vidro anti-UV com fechamento hermético",
        "Bar com bancada em granito",
        "Iluminação LED especial para vinhos",
        "Sistema de ventilação silencioso"
      ]
    },
    testimonial: {
      client: "Roberto Mendes",
      location: "Jardins, SP",
      text: "Como sommelier, tinha exigências muito específicas para minha adega. A NUVO entendeu perfeitamente minhas necessidades e criou um ambiente que preserva perfeitamente minha coleção de vinhos, além de impressionar todos os convidados."
    },
    clientStory: "Um sommelier profissional precisava de uma solução que combinasse controle preciso de temperatura para sua coleção com um espaço elegante para receber convidados e realizar degustações.",
    featured: true,
    tags: ["adega", "gourmet", "climatizada", "premium"],
    createdAt: new Date('2024-02-20')
  },

  {
    id: 3,
    title: "Home Office Executivo Integrado",
    description: "Escritório residencial com mesa integrada, sistema organizacional inteligente e iluminação focal para máxima produtividade.",
    fullDescription: "Este home office foi projetado para um executivo que trabalha remotamente. A mesa integrada oferece amplo espaço de trabalho, enquanto o sistema de organização mantém tudo em ordem. A iluminação foi especialmente planejada para evitar fadiga ocular durante longas jornadas de trabalho.",
    category: "office",
    image: "/images/imgi_16_537905886_18076992200493478_4499625465287494593_n_1757111152302.jpg",
    specs: {
      timeline: "4 semanas",
      materials: "Freijó, Melamina texturizada, LED 4000K",
      dimensions: "3,2m x 2,0m x 0,3m",
      priceRange: "R$ 12.000 - R$ 18.000",
      features: [
        "Mesa integrada 1,8m x 0,8m",
        "Prateleiras ajustáveis",
        "Sistema de cabos invisível",
        "Iluminação focal anti-fadiga",
        "Storage para documentos A4",
        "Suporte para 2 monitores"
      ]
    },
    testimonial: {
      client: "Ana Paula Rodrigues",
      location: "Vila Madalena, SP", 
      text: "Meu home office ficou perfeito! A organização melhorou muito minha produtividade. Tudo tem seu lugar e a iluminação é ideal para trabalhar o dia todo sem cansar a vista."
    },
    featured: false,
    tags: ["escritório", "produtividade", "organização"],
    createdAt: new Date('2024-03-10')
  },

  {
    id: 4,
    title: "Wall Unit Corporativa Executiva",
    description: "Solução profissional para escritório corporativo com design sofisticado, storage para documentos e display institucional.",
    fullDescription: "Projetado para a sala da diretoria de uma empresa de tecnologia, este projeto combina funcionalidade corporativa com design executivo. O display institucional valoriza prêmios e certificações da empresa, enquanto o storage organizado mantém documentos importantes sempre acessíveis.",
    category: "corporate",
    image: "/images/imgi_9_541880794_18077731115493478_1184188163504688235_n_1757111152300.jpg",
    specs: {
      timeline: "5 semanas",
      materials: "Laminado cinza grafite, Acrílico, LED branco",
      dimensions: "4,0m x 2,8m x 0,4m",
      priceRange: "R$ 18.000 - R$ 25.000",
      features: [
        "Display para certificações",
        "Storage para pastas suspensas",
        "Nichos para troféus",
        "Iluminação profissional",
        "Acabamento resistente",
        "Design clean corporativo"
      ]
    },
    testimonial: {
      client: "TechCorp Solutions",
      location: "Faria Lima, SP",
      text: "A wall unit da NUVO trouxe muito mais organização e sofisticação para nossa diretoria. O design profissional impressiona clientes e parceiros que visitam nosso escritório."
    },
    featured: false,
    tags: ["corporativo", "executivo", "organização"],
    createdAt: new Date('2024-04-05')
  },

  {
    id: 5,
    title: "Quarto Principal com Storage Integrado",
    description: "Design minimalista para quarto principal com guarda-roupa integrado, nichos decorativos e iluminação suave.",
    fullDescription: "Este projeto para quarto principal prioriza a harmonia e funcionalidade. O guarda-roupa integrado oferece amplo espaço de armazenamento sem comprometer a estética clean do ambiente. A iluminação indireta cria uma atmosfera relaxante e aconchegante.",
    category: "bedroom",
    image: "/images/imgi_10_539858318_615257668134300_4100570420848379988_n_1757111152298.jpg",
    specs: {
      timeline: "6 semanas",
      materials: "MDF laqueado branco, LED 3000K",
      dimensions: "3,5m x 2,5m x 0,6m",
      priceRange: "R$ 15.000 - R$ 22.000",
      features: [
        "Guarda-roupa integrado",
        "Gavetas com fechamento suave",
        "Nichos para decoração",
        "Iluminação indireta",
        "Espelhos integrados",
        "Sistema anti-ruído"
      ]
    },
    testimonial: {
      client: "Casal Fernanda & Lucas",
      location: "Moema, SP",
      text: "Nosso quarto ficou um sonho! O guarda-roupa integrado deu muito mais espaço e organização. O ambiente ficou muito mais clean e relaxante."
    },
    featured: false,
    tags: ["quarto", "storage", "minimalista"],
    createdAt: new Date('2024-05-12')
  },

  {
    id: 6,
    title: "Projeto Especial - Biblioteca Residencial",
    description: "Biblioteca personalizada com sistema de catalogação integrado, iluminação especial e design clássico atemporal.",
    fullDescription: "Um projeto único para um bibliófilo apaixonado. Esta biblioteca comporta mais de 2.000 livros com sistema de organização por categorias. A iluminação foi especialmente projetada para preservar os livros e proporcionar conforto durante a leitura.",
    category: "custom",
    image: "/images/imgi_7_540479857_1411482216613022_6855047719546468565_n_1757111152297.jpg",
    specs: {
      timeline: "10 semanas",
      materials: "Carvalho envelhecido, Bronze, LED 2700K",
      dimensions: "5,0m x 3,0m x 0,4m",
      priceRange: "R$ 28.000 - R$ 38.000",
      features: [
        "Capacidade para 2.000+ livros",
        "Sistema de catalogação digital",
        "Iluminação anti-UV",
        "Escada deslizante clássica",
        "Poltrona de leitura integrada",
        "Controle de umidade"
      ]
    },
    testimonial: {
      client: "Prof. Eduardo Martins",
      location: "Higienópolis, SP", 
      text: "Como professor universitário, minha biblioteca é fundamental. A NUVO criou um ambiente que não só organiza perfeitamente minha coleção, mas também inspira momentos únicos de leitura e pesquisa."
    },
    clientStory: "Um professor universitário e colecionador de livros antigos precisava de uma solução que organizasse sua vasta coleção mantendo-a preservada e acessível.",
    featured: true,
    tags: ["biblioteca", "clássico", "preservação", "especial"],
    createdAt: new Date('2024-06-18')
  }
]

/**
 * Função utilitária para buscar projetos por categoria
 */
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projectsData
  return projectsData.filter(project => project.category === category)
}

/**
 * Função utilitária para buscar projeto por ID
 */
export const getProjectById = (id: number) => {
  return projectsData.find(project => project.id === id)
}

/**
 * Função utilitária para buscar projetos em destaque
 */
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured === true)
}

/**
 * Função utilitária para buscar projetos por tag
 */
export const getProjectsByTag = (tag: string) => {
  return projectsData.filter(project => 
    project.tags?.includes(tag.toLowerCase())
  )
}
