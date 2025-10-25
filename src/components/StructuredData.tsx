/**
 * Structured Data Components
 *
 * This file contains JSON-LD structured data components for SEO.
 * These help search engines understand the content better and can result in rich snippets.
 *
 * Reference: https://schema.org
 */

/**
 * Organization Schema
 * Tells search engines about your company
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NUVO WOODWORK",
    "alternateName": "NUVO Design Group",
    "url": "https://www.nuvodesigngroup.com",
    "logo": "https://www.nuvodesigngroup.com/images/logo.png",
    "description": "Premium custom wall units and luxury woodwork in South Florida. Specializing in wet bars, wine cellars, entertainment centers, and architectural features.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "", // Add your street address
      "addressLocality": "Boca Raton",
      "addressRegion": "FL",
      "postalCode": "33431", // Update with actual postal code
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-561-XXX-XXXX", // Add your phone number
      "contactType": "Customer Service",
      "areaServed": ["US", "FL"],
      "availableLanguage": ["English", "Portuguese"]
    },
    "sameAs": [
      "https://www.facebook.com/nuvodesigngroup",
      "https://www.instagram.com/nuvodesigngroup",
      "https://www.linkedin.com/company/nuvodesigngroup"
    ],
    "foundingDate": "2015", // Update with actual founding date
    "priceRange": "$$$",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "26.3683", // Boca Raton coordinates
        "longitude": "-80.1289"
      },
      "geoRadius": "100000" // 100km radius
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Local Business Schema
 * Helps with local SEO and Google Business Profile
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "NUVO WOODWORK",
    "image": "https://www.nuvodesigngroup.com/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg",
    "@id": "https://www.nuvodesigngroup.com",
    "url": "https://www.nuvodesigngroup.com",
    "telephone": "+1-561-XXX-XXXX", // Add your phone number
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "", // Add your street address
      "addressLocality": "Boca Raton",
      "addressRegion": "FL",
      "postalCode": "33431", // Update with actual postal code
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.3683,
      "longitude": -80.1289
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael & Sarah Johnson"
        },
        "reviewBody": "NUVO exceeded our expectations. This wet bar has become the centerpiece of our home entertainment."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "David Martinez"
        },
        "reviewBody": "This bar unit has elevated our client meetings and office culture tremendously."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Robert & Lisa Chen"
        },
        "reviewBody": "It's like having our own private gallery. The lighting makes everything look museum-quality."
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Boca Raton"
      },
      {
        "@type": "City",
        "name": "Miami"
      },
      {
        "@type": "City",
        "name": "Fort Lauderdale"
      },
      {
        "@type": "City",
        "name": "West Palm Beach"
      },
      {
        "@type": "City",
        "name": "Delray Beach"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Wall Units & Woodwork Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Wet Bars",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Wet Bar Design & Installation"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Wine Storage",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Climate-Controlled Wine Cellar"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Entertainment Centers",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Entertainment Wall Units"
              }
            }
          ]
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Website Schema
 * Defines your website for search engines
 */
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NUVO WOODWORK",
    "url": "https://www.nuvodesigngroup.com",
    "description": "Premium custom wall units and luxury woodwork in South Florida",
    "publisher": {
      "@type": "Organization",
      "name": "NUVO WOODWORK"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.nuvodesigngroup.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * BreadcrumbList Schema
 * Shows navigation hierarchy to search engines
 */
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Product Schema for Projects
 * Marks individual projects as products with pricing and details
 */
interface ProductSchemaProps {
  id: number
  name: string
  description: string
  image: string
  images?: string[]
  priceRange?: string
  category: string
  materials?: string
  dimensions?: string
  timeline?: string
  rating?: number
  reviewCount?: number
  testimonial?: {
    text: string
    client: string
    location: string
  }
}

export function ProductSchema(props: ProductSchemaProps) {
  const baseUrl = 'https://www.nuvodesigngroup.com'

  // Parse price range
  const priceString = props.priceRange || '$25,000 - $100,000'
  const priceMatch = priceString.match(/\$?([\d,]+)\s*-\s*\$?([\d,]+)/)
  const minPrice = priceMatch ? priceMatch[1].replace(/,/g, '') : '25000'
  const maxPrice = priceMatch ? priceMatch[2].replace(/,/g, '') : '100000'

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": props.name,
    "description": props.description,
    "image": props.images || [props.image],
    "brand": {
      "@type": "Brand",
      "name": "NUVO WOODWORK"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "NUVO WOODWORK"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": `${baseUrl}/project/${props.id}`,
      "priceCurrency": "USD",
      "lowPrice": minPrice,
      "highPrice": maxPrice,
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": minPrice,
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": "false"
      },
      "availability": "https://schema.org/PreOrder",
      "itemCondition": "https://schema.org/NewCondition",
      "validFrom": new Date().toISOString()
    },
    "category": props.category,
    "additionalProperty": [
      ...(props.materials ? [{
        "@type": "PropertyValue",
        "name": "Materials",
        "value": props.materials
      }] : []),
      ...(props.dimensions ? [{
        "@type": "PropertyValue",
        "name": "Dimensions",
        "value": props.dimensions
      }] : []),
      ...(props.timeline ? [{
        "@type": "PropertyValue",
        "name": "Production Timeline",
        "value": props.timeline
      }] : [])
    ],
    ...(props.rating && props.reviewCount ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": props.rating,
        "reviewCount": props.reviewCount,
        "bestRating": "5",
        "worstRating": "1"
      }
    } : {}),
    ...(props.testimonial ? {
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": props.testimonial.client
        },
        "reviewBody": props.testimonial.text
      }
    } : {})
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * FAQ Schema
 * Displays frequently asked questions in search results
 */
interface FAQItem {
  question: string
  answer: string
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
