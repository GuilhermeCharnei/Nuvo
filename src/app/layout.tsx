import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import React from 'react'
import './globals.css'
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema, FAQSchema } from '@/components/StructuredData'

// FAQ data for SEO
const faqs = [
  {
    question: "What types of custom wall units does NUVO WOODWORK create?",
    answer: "NUVO WOODWORK specializes in premium custom wall units including wet bars, wine cellars, entertainment centers, display units, office furniture, and architectural features. Each piece is custom-designed and handcrafted to your exact specifications using luxury materials."
  },
  {
    question: "How long does it take to complete a custom wall unit project?",
    answer: "Most custom wall unit projects take between 6-14 weeks from design approval to installation, depending on complexity and materials. We provide detailed timelines during the consultation phase and keep you updated throughout the process."
  },
  {
    question: "What is the price range for custom wall units?",
    answer: "Our custom wall units typically range from $25,000 to $120,000, depending on size, materials, complexity, and special features like climate control or integrated technology. Each project is uniquely priced based on your specific requirements."
  },
  {
    question: "What areas does NUVO WOODWORK serve?",
    answer: "We serve all of South Florida, including Boca Raton, Miami, Fort Lauderdale, West Palm Beach, Delray Beach, and surrounding areas. For exceptional projects, we can accommodate clients throughout Florida."
  },
  {
    question: "What materials do you use for custom woodwork?",
    answer: "We work with premium materials including walnut, mahogany, teak, oak, and exotic woods, combined with granite, quartz, tempered glass, stainless steel, brass accents, and LED lighting systems. Material selection is tailored to your design vision and functional needs."
  },
  {
    question: "Do you offer design consultations?",
    answer: "Yes, we provide comprehensive design consultations where our team works with you to understand your vision, space requirements, and budget. We create detailed designs and 3D renderings before beginning fabrication."
  },
  {
    question: "Can you integrate technology into custom wall units?",
    answer: "Absolutely! We specialize in integrating modern technology including hidden cable management, integrated TV mounts, surround sound systems, LED lighting, climate control for wine storage, and smart home features."
  },
  {
    question: "What is the warranty on NUVO WOODWORK products?",
    answer: "We stand behind our craftsmanship with comprehensive warranties on materials and workmanship. Specific warranty details are provided during the consultation phase and vary based on the project scope and materials used."
  }
]

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: 'NUVO WOODWORK - Custom Wall Units & Luxury Woodwork | Boca Raton, FL',
    template: '%s | NUVO WOODWORK'
  },
  description: 'Premium custom wall units and luxury woodwork in South Florida. Specializing in wet bars, wine cellars, entertainment centers, and architectural features. Expert craftsmanship, bespoke design.',
  keywords: [
    'custom wall units',
    'luxury woodwork',
    'wet bar design',
    'wine cellar storage',
    'entertainment center',
    'custom cabinets',
    'bespoke furniture',
    'architectural woodwork',
    'South Florida',
    'Boca Raton',
    'Miami',
    'Fort Lauderdale',
    'interior design',
    'home renovation',
    'luxury home upgrades'
  ],

  // Authors & Creators
  authors: [{ name: 'NUVO WOODWORK' }],
  creator: 'NUVO WOODWORK',
  publisher: 'NUVO WOODWORK',

  // Base URL
  metadataBase: new URL('https://nuvobars.com'),

  // Alternate Languages (add more as needed)
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'pt-BR': '/pt-BR',
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nuvobars.com',
    siteName: 'NUVO BARS',
    title: 'NUVO WOODWORK - Custom Wall Units & Luxury Woodwork',
    description: 'Premium custom wall units and luxury woodwork in South Florida. Expert craftsmanship meets bespoke design for wet bars, wine cellars, and architectural features.',
    images: [
      {
        url: 'https://nuvobars.com/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg',
        width: 1200,
        height: 630,
        alt: 'NUVO WOODWORK - Custom Wet Bar Wall Unit',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'NUVO WOODWORK - Custom Wall Units & Luxury Woodwork',
    description: 'Premium custom wall units and luxury woodwork in South Florida. Expert craftsmanship meets bespoke design.',
    images: ['https://nuvobars.com/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg'],
    creator: '@nuvobars',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Manifest
  manifest: '/manifest.json',

  // Verification (add your verification codes when you have them)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Category
  category: 'Home & Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Structured Data for SEO */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
        <FAQSchema faqs={faqs} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}