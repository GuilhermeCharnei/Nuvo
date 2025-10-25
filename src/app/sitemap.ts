import { MetadataRoute } from 'next'
import { projectsData } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL - Update this to your actual domain
  const baseUrl = 'https://nuvobars.com'

  // Current date for lastModified
  const currentDate = new Date()

  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }

  // Generate URLs for all project pages
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Future pages (commented out - uncomment when you create these pages)
  // const otherPages = [
  //   {
  //     url: `${baseUrl}/about`,
  //     lastModified: currentDate,
  //     changeFrequency: 'monthly' as const,
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/services`,
  //     lastModified: currentDate,
  //     changeFrequency: 'monthly' as const,
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/contact`,
  //     lastModified: currentDate,
  //     changeFrequency: 'monthly' as const,
  //     priority: 0.6,
  //   },
  // ]

  return [
    homepage,
    ...projectPages,
    // ...otherPages, // Uncomment when these pages exist
  ]
}
