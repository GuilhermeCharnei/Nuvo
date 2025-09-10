'use client'

import React from 'react'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import ProjectShowcase from '@/components/ProjectShowcase'
import Services from '@/components/Services'
import Process from '@/components/Process'
import SocialProof from '@/components/SocialProof'
import CallToAction from '@/components/CallToAction'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Expertise />
      <ProjectShowcase />
      <Services />
      <Process />
      <SocialProof />
      <CallToAction />
      <Chatbot />
    </main>
  )
}