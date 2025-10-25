import { Metadata } from 'next'
import { projectsData } from '@/data/projects'
import { BreadcrumbSchema, ProductSchema } from '@/components/StructuredData'

/**
 * Generate dynamic metadata for each project page
 * This function runs on the server and generates SEO-optimized metadata
 */
export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  // Find the project by ID
  const project = projectsData.find(p => p.id === parseInt(params.id))

  // If project not found, return basic metadata
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    }
  }

  // Base URL
  const baseUrl = 'https://nuvobars.com'
  const projectUrl = `${baseUrl}/project/${project.id}`

  // Extract category name for better SEO
  const categoryMap: { [key: string]: string } = {
    bar: 'Wet Bar',
    display: 'Display Unit',
    entertainment: 'Entertainment Center',
    wine: 'Wine Storage',
    office: 'Office Furniture',
    kitchen: 'Kitchen',
    living: 'Living Room',
    dining: 'Dining Room',
    architectural: 'Architectural Feature'
  }

  const categoryName = categoryMap[project.category] || 'Custom Furniture'

  // Create rich description with keywords
  const description = project.fullDescription || project.description
  const seoDescription = `${description} ${project.specs ? `Featuring ${project.specs.materials}.` : ''} Custom ${categoryName} by NUVO WOODWORK in South Florida. ${project.specs?.timeline || ''} delivery.`

  return {
    title: `${project.title} - Custom ${categoryName} | NUVO WOODWORK`,
    description: seoDescription.substring(0, 160), // Limit to 160 chars

    keywords: [
      project.title.toLowerCase(),
      categoryName.toLowerCase(),
      'custom wall unit',
      'luxury woodwork',
      'South Florida',
      'Boca Raton',
      project.specs?.materials.toLowerCase() || '',
      'bespoke furniture',
      'interior design'
    ],

    // Canonical URL
    alternates: {
      canonical: projectUrl,
    },

    // Open Graph
    openGraph: {
      type: 'article',
      url: projectUrl,
      title: `${project.title} - Custom ${categoryName}`,
      description: description.substring(0, 200),
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${categoryName} by NUVO WOODWORK`,
        },
        ...(project.images || []).slice(0, 3).map(img => ({
          url: img,
          width: 1200,
          height: 630,
          alt: `${project.title} - Additional view`,
        }))
      ],
      siteName: 'NUVO WOODWORK',
      locale: 'en_US',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Custom ${categoryName}`,
      description: description.substring(0, 200),
      images: [project.image],
      creator: '@nuvodesigngroup',
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Additional metadata
    authors: [{ name: 'NUVO WOODWORK' }],
    creator: 'NUVO WOODWORK',
    publisher: 'NUVO WOODWORK',

    // Category
    category: 'Home & Design',
  }
}

/**
 * Generate static params for all projects
 * This helps with static generation and SEO
 */
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

/**
 * Layout component for project pages
 * This is a Server Component that wraps the Client Component page
 */
export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  // Find the project for breadcrumb
  const project = projectsData.find(p => p.id === parseInt(params.id))
  const baseUrl = 'https://nuvobars.com'

  // Build breadcrumb items
  const breadcrumbItems = [
    {
      name: 'Home',
      url: baseUrl
    },
    {
      name: 'Portfolio',
      url: `${baseUrl}/#portfolio`
    }
  ]

  // Add project name if found
  if (project) {
    breadcrumbItems.push({
      name: project.title,
      url: `${baseUrl}/project/${project.id}`
    })
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {project && (
        <ProductSchema
          id={project.id}
          name={project.title}
          description={project.fullDescription || project.description}
          image={project.image}
          images={project.images}
          priceRange={undefined}
          category={project.category}
          materials={project.specs?.materials}
          dimensions={project.specs?.dimensions}
          timeline={project.specs?.timeline}
          rating={5}
          reviewCount={1}
          testimonial={project.testimonial}
        />
      )}
      {children}
    </>
  )
}
