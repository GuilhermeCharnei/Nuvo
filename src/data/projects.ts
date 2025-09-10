export interface Project {
  id: number
  title: string
  category: string
  image: string
  images?: string[]
  description: string
  fullDescription?: string
  specs?: {
    dimensions: string
    materials: string
    features: string[]
    timeline: string
    priceRange: string
  }
  clientStory?: string
  testimonial?: {
    text: string
    client: string
    location: string
  }
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Wet Bar Wall Unit',
    category: 'bar',
    image: '/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg',
    images: [
      '/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg',
    ],
    description: 'Sophisticated wet bar with integrated refrigeration, stone countertops, and LED lighting',
    fullDescription: 'This stunning wet bar wall unit transforms any space into an elegant entertaining area. Featuring premium granite countertops, integrated refrigeration system, and custom LED lighting that creates the perfect ambiance for hosting guests.',
    specs: {
      dimensions: '12\' W x 8\' H x 2\' D',
      materials: 'Walnut wood, Granite countertop, Stainless steel',
      features: ['Temperature-controlled storage', 'LED strip lighting', 'Integrated sink', 'Glass storage'],
      timeline: '8-10 weeks',
      priceRange: '$45,000 - $65,000'
    },
    clientStory: 'Our client wanted to create the perfect entertaining space in their luxury home. The challenge was integrating modern functionality with classic elegance. We designed this custom wet bar that seamlessly blends premium materials with cutting-edge technology.',
    testimonial: {
      text: 'NUVO exceeded our expectations. This wet bar has become the centerpiece of our home entertainment.',
      client: 'Michael & Sarah Johnson',
      location: 'Boca Raton, FL'
    }
  },
  {
    id: 2,
    title: 'Corporate Bar Unit',
    category: 'bar',
    image: '/images/482083207_619297530845020_484943003542860880_n_1757113219623.jpg',
    images: [
      '/images/482083207_619297530845020_484943003542860880_n_1757113219623.jpg',
    ],
    description: 'Luxury corporate bar with curved design, premium finishes, and integrated storage',
    fullDescription: 'A sophisticated corporate bar designed for executive spaces. The curved design creates an inviting atmosphere while premium finishes reflect the company\'s commitment to excellence.',
    specs: {
      dimensions: '16\' W x 9\' H x 3\' D',
      materials: 'Mahogany wood, Quartz surface, Brass accents',
      features: ['Curved design', 'Executive storage', 'Wine refrigeration', 'Display lighting'],
      timeline: '10-12 weeks',
      priceRange: '$55,000 - $75,000'
    },
    clientStory: 'A leading law firm wanted to create an impressive client entertainment area. The curved design solution maximized the space while creating an elegant focal point for their office.',
    testimonial: {
      text: 'This bar unit has elevated our client meetings and office culture tremendously.',
      client: 'David Martinez, Managing Partner',
      location: 'Fort Lauderdale, FL'
    }
  },
  {
    id: 3,
    title: 'Display & Storage Unit',
    category: 'display',
    image: '/images/480901597_619297520845021_6239928355207253905_n_1757113219624.jpg',
    images: [
      '/images/480901597_619297520845021_6239928355207253905_n_1757113219624.jpg',
    ],
    description: 'Illuminated display wall unit with gold accents and premium storage solutions',
    fullDescription: 'This elegant display wall unit combines functionality with stunning visual appeal. Custom LED lighting highlights displayed items while integrated storage keeps the space organized and clutter-free.',
    specs: {
      dimensions: '14\' W x 10\' H x 18" D',
      materials: 'Walnut wood, Gold leaf accents, LED lighting',
      features: ['Adjustable shelving', 'Hidden storage', 'LED accent lighting', 'Glass display areas'],
      timeline: '6-8 weeks',
      priceRange: '$25,000 - $40,000'
    },
    clientStory: 'The homeowners needed a sophisticated way to display their art collection while providing practical storage. Our solution created a gallery-like atmosphere that showcases their pieces beautifully.',
    testimonial: {
      text: 'It\'s like having our own private gallery. The lighting makes everything look museum-quality.',
      client: 'Robert & Lisa Chen',
      location: 'Miami, FL'
    }
  },
  {
    id: 4,
    title: 'Entertainment Wall Unit',
    category: 'entertainment',
    image: '/images/481025547_620547904053316_5834691484597900035_n_1757113219626.jpg',
    images: [
      '/images/481025547_620547904053316_5834691484597900035_n_1757113219626.jpg',
    ],
    description: 'Acoustic wall panels with geometric texture and integrated entertainment features',
    fullDescription: 'This modern entertainment wall unit features acoustic panels with stunning geometric patterns. The design not only looks incredible but also improves room acoustics for the ultimate viewing experience.',
    specs: {
      dimensions: '18\' W x 12\' H x 3\' D',
      materials: 'Acoustic panels, Dark walnut, Integrated technology',
      features: ['Acoustic treatment', 'Hidden cable management', 'Integrated TV mount', 'Surround sound ready'],
      timeline: '10-12 weeks',
      priceRange: '$65,000 - $85,000'
    },
    clientStory: 'Our clients wanted a home theater that was both functional and architecturally stunning. The acoustic panels solve sound issues while creating a dramatic visual statement.',
    testimonial: {
      text: 'The sound quality is incredible, and it looks like modern art. Perfect combination.',
      client: 'James Wilson',
      location: 'Plantation, FL'
    }
  },
  {
    id: 5,
    title: 'Foyer Architectural Unit',
    category: 'architectural',
    image: '/images/362974437_3630876727235474_164680955745073358_n_1757113219625.jpg',
    images: [
      '/images/362974437_3630876727235474_164680955745073358_n_1757113219625.jpg',
    ],
    description: 'Dramatic entryway with illuminated wood slats and architectural lighting',
    fullDescription: 'This architectural masterpiece transforms the entryway into a stunning first impression. The illuminated wood slats create depth and warmth while making a bold design statement.',
    specs: {
      dimensions: '10\' W x 12\' H x 6" D',
      materials: 'Teak wood slats, LED backlighting, Steel frame',
      features: ['Backlit design', 'Vertical wood slats', 'Architectural mounting', 'Dramatic shadows'],
      timeline: '4-6 weeks',
      priceRange: '$15,000 - $25,000'
    },
    clientStory: 'The clients wanted their foyer to make a statement that reflected their modern aesthetic. This architectural feature creates drama and warmth from the moment guests enter.',
    testimonial: {
      text: 'Every guest comments on this feature. It sets the tone for our entire home.',
      client: 'Patricia Rodriguez',
      location: 'Coral Gables, FL'
    }
  },
  {
    id: 6,
    title: 'Fireplace Wall Unit',
    category: 'living',
    image: '/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg',
    images: [
      '/images/imgi_15_539139475_18077099540493478_1747837317726997206_n_1757111141442.jpg',
    ],
    description: 'Complete living room wall unit with built-in fireplace, TV, and storage',
    fullDescription: 'This comprehensive living room solution integrates fireplace, entertainment center, and storage into one cohesive design. Perfect for creating a cozy yet sophisticated gathering space.',
    specs: {
      dimensions: '20\' W x 10\' H x 2.5\' D',
      materials: 'Natural stone, Dark wood, Stainless steel',
      features: ['Electric fireplace', 'TV integration', 'Hidden storage', 'Ambient lighting'],
      timeline: '12-14 weeks',
      priceRange: '$75,000 - $100,000'
    },
    clientStory: 'The family wanted a central focal point that would bring everyone together. This design creates the perfect balance of entertainment, warmth, and storage.',
    testimonial: {
      text: 'This has become the heart of our home. Everyone gravitates to this space.',
      client: 'The Thompson Family',
      location: 'Delray Beach, FL'
    }
  },
  {
    id: 7,
    title: 'Wine Storage Wall',
    category: 'wine',
    image: '/images/481249236_619830234125083_8298283058325732482_n_1757113219629.jpg',
    images: [
      '/images/481249236_619830234125083_8298283058325732482_n_1757113219629.jpg',
    ],
    description: 'Temperature-controlled wine display with premium glass and metal details',
    fullDescription: 'This sophisticated wine storage system combines optimal preservation conditions with stunning visual presentation. Temperature-controlled zones ensure your collection is perfectly maintained.',
    specs: {
      dimensions: '8\' W x 10\' H x 2\' D',
      materials: 'Mahogany, Tempered glass, Stainless steel',
      features: ['Climate control', 'LED wine lighting', 'Glass display', 'Individual bottle slots'],
      timeline: '8-10 weeks',
      priceRange: '$60,000 - $90,000'
    },
    clientStory: 'Wine enthusiasts who needed proper storage that also showcased their collection. The climate control system preserves their investment while the design makes it a conversation piece.',
    testimonial: {
      text: 'Our wine collection has never looked better, and we have perfect storage conditions.',
      client: 'Antonio & Maria Santos',
      location: 'West Palm Beach, FL'
    }
  },
  {
    id: 8,
    title: 'Executive Office Unit',
    category: 'office',
    image: '/images/365983685_6721524491232858_6578871452303785944_n_1757113219631.jpg',
    images: [
      '/images/365983685_6721524491232858_6578871452303785944_n_1757113219631.jpg',
    ],
    description: 'Comprehensive office wall unit with built-in desk and display shelving',
    fullDescription: 'This executive office solution maximizes productivity while maintaining luxury aesthetics. Integrated workspace, storage, and display areas create the perfect professional environment.',
    specs: {
      dimensions: '16\' W x 9\' H x 3\' D',
      materials: 'Executive walnut, Leather accents, Brass hardware',
      features: ['Built-in desk', 'File storage', 'Display shelving', 'Cable management'],
      timeline: '10-12 weeks',
      priceRange: '$45,000 - $65,000'
    },
    clientStory: 'A successful entrepreneur needed a home office that reflected their professional image while providing maximum functionality. This design creates the perfect work environment.',
    testimonial: {
      text: 'This office setup has increased my productivity and impresses every client video call.',
      client: 'Dr. Richard Sterling',
      location: 'Boca Raton, FL'
    }
  },
  {
    id: 9,
    title: 'Modern Kitchen Unit',
    category: 'kitchen',
    image: '/images/481174538_621185887322851_3067729186485640710_n_1757113219634.jpg',
    images: [
      '/images/481174538_621185887322851_3067729186485640710_n_1757113219634.jpg',
    ],
    description: 'Clean white kitchen wall unit with integrated appliances and seamless design',
    fullDescription: 'This minimalist kitchen wall unit maximizes storage while maintaining clean lines. Integrated appliances and hidden storage create a clutter-free cooking environment.',
    specs: {
      dimensions: '14\' W x 8\' H x 2\' D',
      materials: 'White lacquer, Stainless steel, Quartz accents',
      features: ['Integrated appliances', 'Soft-close doors', 'Hidden storage', 'LED under-cabinet lighting'],
      timeline: '8-10 weeks',
      priceRange: '$35,000 - $55,000'
    },
    clientStory: 'The homeowners wanted a kitchen that felt spacious and modern. This design eliminates visual clutter while providing extensive storage and functionality.',
    testimonial: {
      text: 'Cooking is now a pleasure. Everything has its place and the design is timeless.',
      client: 'Jennifer & Mark Davis',
      location: 'Aventura, FL'
    }
  },
  {
    id: 10,
    title: 'Wine Cellar Wall',
    category: 'wine',
    image: '/images/401001686_1115390219447467_1719936535112898132_n_1757113219634.jpg',
    images: [
      '/images/401001686_1115390219447467_1719936535112898132_n_1757113219634.jpg',
    ],
    description: 'Temperature-controlled wine display behind glass with precision wall mounting',
    fullDescription: 'This glass-enclosed wine cellar provides museum-quality storage and display. Precision climate control ensures optimal conditions while the glass design allows full appreciation of the collection.',
    specs: {
      dimensions: '6\' W x 8\' H x 2\' D',
      materials: 'Tempered glass, Steel frame, Cedar storage',
      features: ['Glass enclosure', 'Precision climate control', 'Cedar shelving', 'Security features'],
      timeline: '12-14 weeks',
      priceRange: '$80,000 - $120,000'
    },
    clientStory: 'Serious wine collectors who needed museum-level storage conditions. The glass design allows them to enjoy their collection visually while ensuring perfect preservation.',
    testimonial: {
      text: 'This is better than most commercial wine cellars. Our collection is perfectly preserved.',
      client: 'Charles & Victoria Laurent',
      location: 'Naples, FL'
    }
  },
  {
    id: 11,
    title: 'Luxury Dining Unit',
    category: 'dining',
    image: '/images/361927037_969825864291137_4158234675795338117_n_1757113219633.jpg',
    images: [
      '/images/361927037_969825864291137_4158234675795338117_n_1757113219633.jpg',
    ],
    description: 'Sophisticated dining room with architectural frames and integrated lighting',
    fullDescription: 'This dining room wall unit creates an elegant backdrop for memorable meals. Architectural frames and integrated lighting enhance the dining experience while providing practical storage.',
    specs: {
      dimensions: '12\' W x 9\' H x 18" D',
      materials: 'Dark walnut, Architectural molding, LED lighting',
      features: ['Architectural framing', 'Ambient lighting', 'China storage', 'Display areas'],
      timeline: '8-10 weeks',
      priceRange: '$40,000 - $60,000'
    },
    clientStory: 'The clients wanted their dining room to feel like a fine restaurant. This design creates intimate lighting and elegant storage for their entertaining needs.',
    testimonial: {
      text: 'Every dinner feels special now. The lighting and design create the perfect atmosphere.',
      client: 'Alexander & Grace Kim',
      location: 'Sunny Isles, FL'
    }
  },
  {
    id: 12,
    title: 'Entryway Feature Unit',
    category: 'architectural',
    image: '/images/363316847_1229783514352191_2158139334373251137_n_1757113219636.jpg',
    images: [
      '/images/363316847_1229783514352191_2158139334373251137_n_1757113219636.jpg',
    ],
    description: 'Modern entryway with architectural elements and statement lighting',
    fullDescription: 'This striking entryway feature combines architectural elements with dramatic lighting. The design creates an impressive first impression while providing functional storage for daily essentials.',
    specs: {
      dimensions: '8\' W x 10\' H x 12" D',
      materials: 'Natural wood, Metal accents, LED systems',
      features: ['Architectural design', 'Statement lighting', 'Hidden storage', 'Coat storage'],
      timeline: '6-8 weeks',
      priceRange: '$20,000 - $35,000'
    },
    clientStory: 'The homeowners wanted their entrance to make a bold statement. This architectural feature greets guests with sophisticated design while keeping daily items organized.',
    testimonial: {
      text: 'This entryway feature completely transformed our home\'s first impression.',
      client: 'Daniel & Sophie Moore',
      location: 'Pembroke Pines, FL'
    }
  }
]