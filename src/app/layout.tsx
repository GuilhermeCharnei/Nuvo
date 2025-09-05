import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'NUVO WOODWORK - Wall Units Sob Medida',
  description: 'Wall Units que organizam, conectam e impressionam. Design sob medida com estrutura, simplicidade e presença.',
  keywords: 'wall units, móveis sob medida, woodwork, design interiores, móveis planejados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}