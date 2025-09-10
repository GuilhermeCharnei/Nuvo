# 📝 GUIA DE CUSTOMIZAÇÃO - NUVO WOODWORK

Este documento explica onde você pode alterar cada elemento do website no VSCode.

## 🎨 **ALTERAÇÕES DE TEXTO E CONTEÚDO**

### **📋 Informações da Empresa**
**Arquivo:** `src/lib/constants.ts`
```typescript
// Linha 8-15 - Informações básicas da empresa
export const COMPANY_INFO = {
  name: 'NUVO WOODWORK',           // Nome da empresa
  tagline: 'Custom Wall Units',     // Slogan
  phone: '+1 (555) 123-4567',      // Telefone
  email: 'info@nuvowoodwork.com',   // Email
  address: 'Miami, FL'             // Endereço
}
```

### **💰 Faixas de Preço**
**Arquivo:** `src/lib/constants.ts` (linhas 17-27)
```typescript
export const PRICE_RANGES = {
  display: '$15K - $35K',    // Altere os valores aqui
  kitchen: '$25K - $65K',
  // ... outros preços
}
```

### **🤖 Mensagens do Chatbot Sofia**
**Arquivo:** `src/lib/constants.ts` (linhas 29-55)
```typescript
export const CHATBOT_MESSAGES = {
  welcome: "Hi! I'm Sofia...",           // Mensagem inicial
  budgetOptions: ["$15K - $35K", ...],   // Opções de orçamento
  typeOptions: ["Wet Bar & Entertainment", ...] // Tipos de projeto
}
```

## 🖼️ **ALTERAÇÕES DE IMAGENS**

### **🏠 Imagem Principal (Hero)**
**Arquivo:** `src/components/Hero.tsx` (linha 65)
```typescript
src="/images/480969695_620547907386649_7438075877562462263_n_1757113219623.jpg"
```

### **🏢 Logo da Empresa**
**Arquivo:** `src/components/Chatbot.tsx` (linha 359)
```typescript
src="/images/logo.png"  // Substitua por sua logo
```

### **📸 Imagens dos Projetos**
**Arquivo:** `src/data/projects.ts`
```typescript
{
  id: 1,
  image: '/images/nome-da-sua-imagem.jpg',  // Altere aqui
  images: ['/images/img1.jpg', '/images/img2.jpg'], // Galeria adicional
}
```

### **📁 Como Adicionar Novas Imagens:**
1. Coloque as imagens na pasta `public/images/`
2. Referencie como `/images/nome-da-imagem.jpg`

## 🎨 **ALTERAÇÕES DE CORES E ESTILOS**

### **🌈 Cores Principais**
**Arquivo:** `src/app/globals.css` (linhas 4-9)
```css
:root {
  --color-primary: #2C1810;     /* Marrom escuro */
  --color-secondary: #8B4513;   /* Marrom médio */
  --color-accent: #D2B48C;      /* Bege */
  --color-gray: #6B7280;        /* Cinza texto */
}
```

### **🎭 Animações e Transições**
**Arquivo:** `src/lib/constants.ts` (linhas 57-69)
```typescript
export const APP_CONFIG = {
  animation: {
    duration: {
      fast: 0.3,     // Animações rápidas
      normal: 0.6,   // Animações normais
      slow: 1.0      // Animações lentas
    }
  }
}
```

## 📊 **ALTERAÇÕES DE DADOS DOS PROJETOS**

### **🏗️ Adicionar/Editar Projetos**
**Arquivo:** `src/data/projects.ts`
```typescript
{
  id: 1,                                    // ID único
  title: 'Nome do Projeto',                // Título
  category: 'bar',                         // Categoria (bar, wine, office, etc.)
  image: '/images/projeto.jpg',            // Imagem principal
  description: 'Descrição curta...',       // Descrição para cards
  fullDescription: 'Descrição completa...', // Descrição da página individual
  specs: {
    dimensions: '8ft x 12ft x 3ft',        // Dimensões
    materials: 'Walnut, Brass, Glass',     // Materiais
    timeline: '8-10 weeks',               // Tempo de execução
    priceRange: '$45K - $65K',            // Faixa de preço
    features: ['LED lighting', '...']      // Características
  },
  clientStory: 'História do cliente...',   // História do projeto
  testimonial: {
    text: 'Depoimento do cliente...',      // Testemunho
    client: 'Nome do Cliente',            // Nome
    location: 'Cidade, Estado'            // Localização
  }
}
```

### **📂 Categorias de Projetos**
**Arquivo:** `src/lib/constants.ts` (linhas 71-89)
```typescript
export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All Wall Units' },
  { key: 'bar', label: 'Wet Bars' },      // Altere os rótulos aqui
  { key: 'wine', label: 'Wine Storage' },
  // ... outras categorias
]
```

## 📱 **ALTERAÇÕES DE CONTEÚDO DAS PÁGINAS**

### **🏠 Página Principal (Hero Section)**
**Arquivo:** `src/components/Hero.tsx`
- **Linha 67:** Título principal
- **Linha 72:** Subtítulo
- **Linha 76:** Texto descritivo
- **Linha 84:** Texto do botão

### **📞 Informações de Contato**
**Arquivo:** `src/components/Hero.tsx` (linhas 94-104)
```typescript
// Informações de contato no hero
phone: COMPANY_INFO.phone,
email: COMPANY_INFO.email,
address: COMPANY_INFO.address
```

### **💬 Personalização do Chatbot**
**Arquivo:** `src/components/Chatbot.tsx`
- **Linha 23:** Nome do chatbot (Sofia)
- **Linha 359:** Logo do chatbot
- **Linha 307:** Tempo para aparecer popup (3000ms = 3 segundos)

## 🔧 **CONFIGURAÇÕES TÉCNICAS**

### **⚙️ Configurações do App**
**Arquivo:** `src/lib/constants.ts`
```typescript
export const APP_CONFIG = {
  animation: { /* configurações de animação */ },
  scroll: { behavior: 'smooth' },           // Comportamento do scroll
  chatbot: { showDelay: 3000 }             // Delay do chatbot
}
```

### **🎨 Classes CSS Reutilizáveis**
**Arquivo:** `src/lib/constants.ts` (linhas 91-126)
```typescript
export const STYLE_CLASSES = {
  buttons: {
    primary: 'bg-[var(--color-secondary)] text-white...',  // Botão principal
    ghost: 'border border-[var(--color-secondary)]...'     // Botão fantasma
  },
  gradients: {
    hero: 'bg-gradient-to-br from-[var(--color-primary)]...', // Gradiente hero
    overlay: 'absolute inset-0 bg-gradient-to-t...'          // Overlay
  }
}
```

## 📋 **CHECKLIST DE PERSONALIZAÇÃO**

### ✅ **Essencial (Faça Primeiro):**
- [ ] Alterar nome da empresa em `COMPANY_INFO`
- [ ] Alterar telefone e email de contato
- [ ] Substituir logo da empresa (`public/images/logo.png`)
- [ ] Alterar imagem principal do hero
- [ ] Atualizar mensagens do chatbot Sofia

### ✅ **Importante:**
- [ ] Adicionar seus próprios projetos em `src/data/projects.ts`
- [ ] Alterar faixas de preço conforme seu negócio
- [ ] Personalizar cores da marca
- [ ] Adicionar suas próprias imagens de projetos

### ✅ **Opcional:**
- [ ] Personalizar animações
- [ ] Ajustar tempo de delay do chatbot
- [ ] Modificar categorias de projetos
- [ ] Customizar estilos CSS

## 🚀 **COMANDOS ÚTEIS**

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Construir para produção
npm run build

# Rodar versão de produção
npm start
```

---

**💡 Dica:** Sempre teste suas alterações rodando `npm run dev` após cada mudança!