'use client'

import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ProductSection from '@/components/ProductSection'
import GallerySection from '@/components/GallerySection'
import WallUnitTypes from '@/components/WallUnitTypes'
import TechnologySection from '@/components/TechnologySection'
import BenefitsSection from '@/components/BenefitsSection'
import TestimonialSection from '@/components/TestimonialSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-beige-light">
      <HeroSection />
      <ProductSection />
      <GallerySection />
      <WallUnitTypes />
      <TechnologySection />
      <BenefitsSection />
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </main>
  )
}