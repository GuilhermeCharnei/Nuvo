# NUVO WOODWORK - Wall Units Project

## Overview

NUVO WOODWORK is a premium custom wall unit design and manufacturing website built with Next.js 14. The application showcases sophisticated woodworking solutions that integrate seamlessly with architectural spaces. The website presents wall units as architectural elements rather than furniture, emphasizing precision, craftsmanship, and custom design for various environments including living rooms, gourmet kitchens, home offices, and corporate spaces.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router architecture
- **Language**: TypeScript for type safety and enhanced development experience
- **Styling**: Tailwind CSS with custom design system featuring brand-specific colors (graphite, brown-indian, beige-light)
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Icons**: React Icons library for consistent iconography
- **Fonts**: Google Fonts integration (Inter for body text, Poppins for display text)

### Component Structure
- Modular component architecture with single-responsibility components
- Each section is a separate component (HeroSection, ProductSection, GallerySection, etc.)
- Client-side rendering for interactive elements with 'use client' directives
- Responsive design approach with mobile-first considerations

### Design System
- Custom color palette reflecting woodworking aesthetics
- Custom animations (fade-in, slide-up, pulse-slow) for enhanced user experience
- Wood texture background effects using CSS patterns
- Typography hierarchy with display and body font families

### Performance Optimizations
- Next.js built-in optimizations (image optimization, code splitting)
- Font optimization with Google Fonts integration
- CSS optimization with Tailwind's purging capabilities

### Development Environment
- TypeScript configuration with strict mode enabled
- ESLint for code quality and consistency
- PostCSS for CSS processing
- Custom path aliases (@/*) for clean imports

## External Dependencies

### Core Framework Dependencies
- **Next.js 14.2.16**: React framework with App Router for modern web development
- **React 18**: UI library for component-based architecture
- **TypeScript 5**: Static type checking for enhanced development experience

### Styling and Animation
- **Tailwind CSS 3.4.1**: Utility-first CSS framework for rapid UI development
- **Framer Motion 11.11.9**: Animation library for smooth transitions and interactions
- **Autoprefixer 10.4.21**: CSS vendor prefix automation

### UI Components and Icons
- **React Icons 5.3.0**: Comprehensive icon library with multiple icon sets
- **Google Fonts**: Web font service for Inter and Poppins font families

### Development Tools
- **ESLint**: Code linting with Next.js configuration
- **PostCSS**: CSS processing and transformation tool

### Deployment Configuration
- Custom server configuration for hostname (0.0.0.0) and port (5000)
- Optimized for containerized deployment environments

### Future Integration Points
- Contact form ready for backend integration
- Gallery system prepared for dynamic content management
- Project showcase structure suitable for CMS integration
- Testimonial section ready for dynamic content loading