'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-53SZYF5NGW'

// Declare gtag on window
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views
  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Analytics helper functions
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Pre-configured event trackers for common actions
export const trackPhoneClick = () => {
  event({
    action: 'click_phone',
    category: 'engagement',
    label: 'Phone: 561-770-2595',
  })
}

export const trackChatbotOpen = () => {
  event({
    action: 'chatbot_open',
    category: 'engagement',
    label: 'Chatbot opened',
  })
}

export const trackChatbotMessage = (messageType: 'user' | 'bot') => {
  event({
    action: 'chatbot_message',
    category: 'engagement',
    label: `Message sent: ${messageType}`,
  })
}

export const trackProjectClick = (projectId: number, projectTitle: string) => {
  event({
    action: 'project_click',
    category: 'engagement',
    label: `Project: ${projectTitle}`,
    value: projectId,
  })
}

export const trackProjectView = (projectId: number, projectTitle: string) => {
  event({
    action: 'project_view',
    category: 'engagement',
    label: `Project viewed: ${projectTitle}`,
    value: projectId,
  })
}

export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll',
    category: 'engagement',
    label: `Scroll depth: ${percentage}%`,
    value: percentage,
  })
}

export const trackCTAClick = (ctaText: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'conversion',
    label: `CTA: ${ctaText} (${location})`,
  })
}

export const trackFormSubmit = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'conversion',
    label: `Form: ${formName}`,
  })
}
