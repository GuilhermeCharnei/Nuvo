/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para export estático (Hostinger compartilhada)
  // Descomente a linha abaixo para export estático:
  // output: 'export',
  
  // Configurações para compatibilidade Windows
  experimental: {
    // Evita problemas de case sensitivity no Windows
    caseSensitiveRoutes: false,
  },
  
  // Configurações de imagem otimizadas e seguras
  images: {
    domains: [], // Adicione domínios externos se necessário
    unoptimized: false, // Manter otimização de imagem
    dangerouslyAllowSVG: false, // Bloquear SVGs por segurança
    contentDispositionType: 'attachment', // Forçar download de conteúdo suspeito
  },
  
  // Configurações de build para melhor compatibilidade
  swcMinify: true,
  
  // Configurações de desenvolvimento
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  
  // Headers de segurança críticos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Proteção contra clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Proteção contra MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Proteção XSS
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Política de referrer
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Política de permissões
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          // Content Security Policy básico
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self';",
          },
        ],
      },
    ]
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