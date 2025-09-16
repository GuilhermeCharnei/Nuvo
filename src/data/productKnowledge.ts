/**
 * Base de Conhecimento dos Produtos NUVO
 * 
 * Este arquivo contém informações detalhadas sobre todos os produtos e serviços
 * da NUVO para usar no chatbot inteligente de vendas.
 */

export interface ProductCategory {
  id: string
  name: string
  description: string
  keywords: string[]
  solutions: ProductSolution[]
  timeline: string
  idealFor: string[]
}

export interface ProductSolution {
  name: string
  description: string
  features: string[]
  materials: string[]
  styles: string[]
}

export const PRODUCT_KNOWLEDGE: ProductCategory[] = [
  {
    id: 'entertainment',
    name: 'Entertainment Rooms',
    description: 'Complete media and entertainment solutions that transform your space into the ultimate entertainment hub.',
    keywords: ['tv', 'media', 'entertainment', 'theater', 'gaming', 'movies', 'music', 'sound system', 'home theater'],
    timeline: '6-10 weeks',
    idealFor: ['Movie enthusiasts', 'Gaming families', 'Music lovers', 'Tech enthusiasts'],
    solutions: [
      {
        name: 'TV Wall Units',
        description: 'Custom-built to house flat-screen TVs, sound systems, and streaming devices with concealed wiring and ventilation.',
        features: ['Concealed wiring', 'Ventilation systems', 'Custom sizing for any TV', 'Integrated lighting', 'Remote storage'],
        materials: ['Premium hardwoods', 'Veneer finishes', 'Glass shelving', 'Metal accents'],
        styles: ['Modern minimalist', 'Traditional rich wood', 'Contemporary glass', 'Industrial metal']
      },
      {
        name: 'Media Storage Cabinets',
        description: 'Organize DVDs, gaming accessories, remotes, and cables in clean, concealed drawers.',
        features: ['Hidden cable management', 'Soft-close drawers', 'Adjustable shelving', 'Device-specific compartments'],
        materials: ['Maple', 'Oak', 'Cherry', 'Walnut'],
        styles: ['Sleek modern', 'Classic traditional', 'Rustic farmhouse']
      },
      {
        name: 'Game Console & Equipment Storage',
        description: 'Designed with ventilation and easy access for all your gaming tech.',
        features: ['Ventilation ports', 'Quick access panels', 'Controller storage', 'Game library organization'],
        materials: ['Engineered wood', 'Metal mesh', 'Tempered glass'],
        styles: ['Gaming-focused modern', 'Family-friendly traditional']
      },
      {
        name: 'Snack Bars & Beverage Stations',
        description: 'Optional built-ins for small fridges, drink storage, or snack prep areas.',
        features: ['Mini fridge integration', 'Beverage storage', 'Snack compartments', 'Ice maker space'],
        materials: ['Water-resistant finishes', 'Stainless steel accents', 'Stone countertops'],
        styles: ['Modern bar style', 'Classic pub look']
      }
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen Solutions',
    description: 'The heart of your home deserves custom cabinetry that elevates function and beauty.',
    keywords: ['kitchen', 'cabinets', 'cooking', 'dining', 'storage', 'pantry', 'island', 'appliances'],
    timeline: '8-12 weeks',
    idealFor: ['Home chefs', 'Entertainers', 'Large families', 'Design enthusiasts'],
    solutions: [
      {
        name: 'Modern Kitchens',
        description: 'Frameless cabinets, handleless fronts, and sleek finishes for contemporary elegance.',
        features: ['Frameless construction', 'Handleless design', 'Soft-close mechanisms', 'LED lighting', 'Smart storage'],
        materials: ['High-gloss laminates', 'Lacquered wood', 'Stainless steel', 'Quartz countertops'],
        styles: ['Minimalist white', 'Bold colors', 'Mixed materials', 'Scandinavian inspired']
      },
      {
        name: 'Traditional Kitchens',
        description: 'Raised-panel doors, wood stains, and classic hardware for timeless charm.',
        features: ['Raised panel doors', 'Crown molding', 'Decorative hardware', 'Classic proportions'],
        materials: ['Cherry wood', 'Maple', 'Oak', 'Granite countertops'],
        styles: ['Colonial', 'Craftsman', 'French country', 'Tuscan']
      },
      {
        name: 'Transitional Kitchens',
        description: 'Perfect balance of modern simplicity and traditional warmth.',
        features: ['Clean lines with classic details', 'Mix of open and closed storage', 'Neutral color palettes'],
        materials: ['Painted hardwood', 'Natural stone', 'Mixed finishes'],
        styles: ['Contemporary traditional', 'Modern farmhouse', 'Updated classic']
      },
      {
        name: 'Smart Storage Solutions',
        description: 'Pull-out drawers, spice racks, appliance garages, and hidden compartments.',
        features: ['Pull-out pantry systems', 'Spice rack organizers', 'Appliance garages', 'Corner solutions', 'Waste management'],
        materials: ['Durable hardware', 'Custom organizers', 'Soft-close mechanisms'],
        styles: ['Integrated seamlessly with any kitchen style']
      }
    ]
  },
  {
    id: 'closet',
    name: 'Closet & Mudroom',
    description: 'Organized entryways and storage solutions that handle daily life with style.',
    keywords: ['closet', 'mudroom', 'entryway', 'storage', 'organization', 'coats', 'shoes', 'bags'],
    timeline: '4-6 weeks',
    idealFor: ['Busy families', 'Organized homeowners', 'Active lifestyles', 'Pet owners'],
    solutions: [
      {
        name: 'Built-In Benches with Storage',
        description: 'Convenient seating with hidden storage underneath.',
        features: ['Comfortable seating', 'Hidden storage compartments', 'Shoe storage', 'Cushioned tops'],
        materials: ['Hardwood', 'Upholstered cushions', 'Metal hardware'],
        styles: ['Modern clean lines', 'Traditional with details', 'Rustic farmhouse']
      },
      {
        name: 'Hooks & Hanging Systems',
        description: 'Easy access storage for coats, backpacks, hats, and umbrellas.',
        features: ['Heavy-duty hooks', 'Coat rods', 'Hat shelves', 'Umbrella stands'],
        materials: ['Stainless steel', 'Brass', 'Iron', 'Wood'],
        styles: ['Industrial', 'Classic', 'Contemporary']
      },
      {
        name: 'Shoe Storage Units',
        description: 'Keep floors clear with organized shoe storage solutions.',
        features: ['Ventilated compartments', 'Adjustable shelving', 'Pull-out drawers', 'Boot storage'],
        materials: ['Cedar', 'Ventilated panels', 'Wire systems'],
        styles: ['Hidden', 'Display', 'Seasonal rotation']
      }
    ]
  },
  {
    id: 'laundry',
    name: 'Laundry Solutions',
    description: 'Efficient laundry rooms that make household tasks easier and more enjoyable.',
    keywords: ['laundry', 'washing', 'drying', 'folding', 'cleaning', 'utility', 'storage'],
    timeline: '3-5 weeks',
    idealFor: ['Large families', 'Efficiency seekers', 'Small space maximizers'],
    solutions: [
      {
        name: 'Laundry Storage Systems',
        description: 'Cabinets for detergents, cleaning supplies, and household essentials.',
        features: ['Chemical-safe storage', 'Child locks', 'Ventilated compartments', 'Easy access'],
        materials: ['Moisture-resistant finishes', 'Laminate interiors', 'Stainless hardware'],
        styles: ['Clean modern', 'Functional traditional']
      },
      {
        name: 'Folding & Work Stations',
        description: 'Countertops and surfaces for folding clothes and organizing laundry.',
        features: ['Durable work surfaces', 'Storage underneath', 'Good lighting', 'Comfortable height'],
        materials: ['Quartz', 'Butcher block', 'Laminate'],
        styles: ['Integrated', 'Standalone', 'Multi-purpose']
      },
      {
        name: 'Hanging & Drying Systems',
        description: 'Rods and racks for air-drying delicate clothing.',
        features: ['Retractable rods', 'Drying racks', 'Steamer storage', 'Ironing board integration'],
        materials: ['Stainless steel', 'Chrome', 'Powder-coated metal'],
        styles: ['Wall-mounted', 'Ceiling-mounted', 'Portable']
      }
    ]
  },
  {
    id: 'office',
    name: 'Home Office',
    description: 'Productive workspace solutions tailored to your professional needs.',
    keywords: ['office', 'desk', 'work', 'study', 'books', 'computer', 'filing', 'productivity'],
    timeline: '5-7 weeks',
    idealFor: ['Remote workers', 'Students', 'Entrepreneurs', 'Creative professionals'],
    solutions: [
      {
        name: 'Built-In Desks',
        description: 'Custom-fit desks with integrated storage and cable management.',
        features: ['Ergonomic design', 'Cable management', 'Built-in drawers', 'Keyboard trays', 'Monitor mounting'],
        materials: ['Hardwood', 'Engineered surfaces', 'Metal frames'],
        styles: ['Executive traditional', 'Modern minimalist', 'Creative studio']
      },
      {
        name: 'Storage & Filing',
        description: 'Organized storage for files, supplies, and equipment.',
        features: ['Filing systems', 'Supply storage', 'Book shelving', 'Display areas'],
        materials: ['Wood', 'Metal', 'Glass', 'Laminate'],
        styles: ['Professional', 'Casual', 'Library-style']
      },
      {
        name: 'Tech Integration',
        description: 'Smart storage for printers, routers, and technology.',
        features: ['Ventilated tech storage', 'Charging stations', 'Wire management', 'Device access'],
        materials: ['Ventilated panels', 'Metal mesh', 'Heat-resistant materials'],
        styles: ['Hidden integration', 'Display storage']
      }
    ]
  },
  {
    id: 'foyer',
    name: 'Foyer & Entryway',
    description: 'Beautiful first impressions with smart storage solutions.',
    keywords: ['foyer', 'entryway', 'entrance', 'welcome', 'guests', 'coats', 'keys', 'mail'],
    timeline: '3-4 weeks',
    idealFor: ['Welcoming homes', 'Organized families', 'Style-conscious owners'],
    solutions: [
      {
        name: 'Storage Benches',
        description: 'Elegant seating with hidden storage for shoes and accessories.',
        features: ['Comfortable seating', 'Hidden storage', 'Stylish design', 'Durable construction'],
        materials: ['Upholstered tops', 'Wood construction', 'Metal accents'],
        styles: ['Traditional', 'Modern', 'Transitional']
      },
      {
        name: 'Wall Storage',
        description: 'Cabinets and cubbies for organizing daily essentials.',
        features: ['Key hooks', 'Mail storage', 'Small item organization', 'Mirror integration'],
        materials: ['Wood', 'Glass', 'Metal'],
        styles: ['Built-in', 'Floating', 'Traditional']
      }
    ]
  },
  {
    id: 'millwork',
    name: 'Architectural Millwork',
    description: 'Handcrafted architectural details that elevate any space.',
    keywords: ['millwork', 'molding', 'trim', 'ceiling', 'beams', 'columns', 'wainscoting', 'architectural'],
    timeline: '6-12 weeks',
    idealFor: ['Luxury homes', 'Historical properties', 'Architecture enthusiasts', 'High-end renovations'],
    solutions: [
      {
        name: 'Custom Molding & Trim',
        description: 'Precision-crafted moldings that add character and elegance.',
        features: ['Custom profiles', 'Period-appropriate designs', 'Seamless joints', 'Durable finishes'],
        materials: ['Hardwood', 'MDF', 'Polyurethane', 'Composite'],
        styles: ['Classical', 'Contemporary', 'Arts & Crafts', 'Georgian']
      },
      {
        name: 'Coffered Ceilings',
        description: 'Stunning ceiling treatments that add depth and luxury.',
        features: ['Custom grid patterns', 'Integrated lighting', 'Acoustic benefits', 'Architectural impact'],
        materials: ['Wood', 'MDF', 'Plaster', 'Metal'],
        styles: ['Traditional', 'Modern geometric', 'Classical']
      },
      {
        name: 'Wainscoting & Paneling',
        description: 'Wall treatments that add texture and sophistication.',
        features: ['Custom heights', 'Various panel styles', 'Integrated trim', 'Durable protection'],
        materials: ['Solid wood', 'Engineered panels', 'Painted finishes'],
        styles: ['Raised panel', 'Flat panel', 'Beadboard', 'Board and batten']
      }
    ]
  }
]

// Função para encontrar categoria por palavras-chave
export const findProductByKeywords = (query: string): ProductCategory[] => {
  const queryLower = query.toLowerCase()
  return PRODUCT_KNOWLEDGE.filter(category => 
    category.keywords.some(keyword => queryLower.includes(keyword)) ||
    category.name.toLowerCase().includes(queryLower) ||
    category.description.toLowerCase().includes(queryLower)
  )
}

// Função para recomendar produtos baseado em necessidades
export const recommendProducts = (needs: string[], budget?: string, space?: string): ProductCategory[] => {
  // Lógica de recomendação baseada em necessidades, orçamento e espaço
  const needsLower = needs.map(need => need.toLowerCase())
  
  return PRODUCT_KNOWLEDGE.filter(category => {
    // Verifica se alguma necessidade coincide com palavras-chave
    const matchesNeeds = category.keywords.some(keyword => 
      needsLower.some(need => need.includes(keyword) || keyword.includes(need))
    )
    
    // Verifica orçamento se fornecido
    let matchesBudget = true
    if (budget) {
      // Lógica simples de correspondência de orçamento
      matchesBudget = true // Por enquanto aceita todos
    }
    
    return matchesNeeds && matchesBudget
  })
}

// Perguntas inteligentes para qualificação
export const SMART_QUESTIONS = {
  space: [
    "What room are you looking to transform?",
    "How large is the space you're working with?",
    "Is this a new construction or renovation project?"
  ],
  lifestyle: [
    "How do you currently use this space?",
    "What activities happen in this room daily?",
    "Who will be using this space most often?"
  ],
  style: [
    "What style speaks to you - modern, traditional, or something in between?",
    "Do you prefer clean minimalist lines or more detailed traditional elements?",
    "Are there any colors or materials you absolutely love?"
  ],
  functionality: [
    "What storage challenges are you trying to solve?",
    "Do you need to hide any technology or equipment?",
    "Are there specific features that would make your daily routine easier?"
  ]
}