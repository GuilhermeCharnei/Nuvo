/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações para compatibilidade Windows
  experimental: {
    // Evita problemas de case sensitivity no Windows
    caseSensitiveRoutes: false,
  },
  
  // Configurações de imagem otimizadas
  images: {
    domains: [], // Adicione domínios externos se necessário
    unoptimized: false, // Manter otimização de imagem
  },
  
  // Configurações de build para melhor compatibilidade
  swcMinify: true,
  
  // Configurações de desenvolvimento
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  
  // Configurações específicas para Windows
  webpack: (config, { isServer }) => {
    // Resolve problemas de path no Windows
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    
    return config
  },
}

module.exports = nextConfig