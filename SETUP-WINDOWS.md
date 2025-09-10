# 💻 SETUP PARA WINDOWS - NUVO WOODWORK

Este guia explica como configurar e rodar o projeto no Windows.

## 📋 **PRÉ-REQUISITOS**

### **1. Node.js (Obrigatório)**
- Baixe e instale o **Node.js 18+** de: https://nodejs.org
- Escolha a versão **LTS (Long Term Support)**
- Durante a instalação, marque a opção **"Add to PATH"**

### **2. Editor de Código**
- **VSCode** (recomendado): https://code.visualstudio.com
- **WebStorm**, **Sublime Text** ou qualquer editor de sua preferência

### **3. Terminal/Prompt**
- **PowerShell** (já vem com Windows)
- **Command Prompt** (cmd)
- **Git Bash** (se instalou o Git)

## 🚀 **INSTALAÇÃO E CONFIGURAÇÃO**

### **Passo 1: Baixar o Projeto**
```bash
# Se baixou como ZIP, extraia para uma pasta
# Se usou Git:
git clone https://github.com/seu-usuario/nuvo-woodwork.git
cd nuvo-woodwork
```

### **Passo 2: Instalar Dependências**
```bash
# Abra o terminal na pasta do projeto
npm install
```

### **Passo 3: Rodar em Desenvolvimento**
```bash
# Para Windows (localhost:3000)
npm run dev

# Para ambiente Replit (se necessário)
npm run dev:replit
```

### **Passo 4: Acessar o Site**
- Abra o navegador em: **http://localhost:3000**
- O site irá recarregar automaticamente quando você fizer alterações

## ⚙️ **COMANDOS ESPECÍFICOS PARA WINDOWS**

### **Scripts Disponíveis:**
```json
{
  "dev": "next dev --port 3000",           // Desenvolvimento Windows
  "dev:replit": "next dev --hostname 0.0.0.0 --port 5000", // Para Replit
  "build": "next build",                   // Construir para produção
  "start": "next start --port 3000",      // Rodar produção Windows
  "start:replit": "next start --hostname 0.0.0.0 --port 5000", // Produção Replit
  "lint": "next lint"                      // Verificar código
}
```

### **Comandos Úteis:**
```bash
# Verificar versão do Node
node --version

# Verificar versão do npm
npm --version

# Limpar cache do npm (se der problemas)
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Construir para produção
npm run build
npm run start
```

## 🔧 **CONFIGURAÇÕES ESPECÍFICAS DO WINDOWS**

### **1. Configuração do Next.js**
O arquivo `next.config.js` já está configurado para Windows:
```javascript
// Case insensitive routes (Windows filesystem)
caseSensitiveRoutes: false

// Output standalone para deploy fácil
output: 'standalone'
```

### **2. Portas e Hostname**
- **Desenvolvimento:** `localhost:3000`
- **Produção local:** `localhost:3000`
- **Para containers:** Use os scripts `:replit`

### **3. Caminhos de Arquivo**
- Windows usa `\` mas o código usa `/` (funciona normalmente)
- Next.js automaticamente resolve os caminhos

## 🚨 **SOLUCIONANDO PROBLEMAS COMUNS**

### **Erro: 'next' não é reconhecido**
```bash
# Instale globalmente (se necessário)
npm install -g next

# Ou use npx
npx next dev --port 3000
```

### **Erro: Porta 3000 ocupada**
```bash
# Use outra porta
npm run dev -- --port 3001

# Ou termine o processo que usa a porta
netstat -ano | findstr :3000
taskkill /PID [numero_do_pid] /F
```

### **Erro: ENOENT ou arquivo não encontrado**
```bash
# Verifique se está na pasta correta
dir

# Reinstale dependências
npm install
```

### **Erro: Permissões**
```bash
# Execute o PowerShell como Administrador
# Ou configure as permissões:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### **Problemas com Imagens**
- Certifique-se que as imagens estão em `public/images/`
- Use barras `/` nos caminhos (não `\`)
- Exemplo correto: `/images/projeto.jpg`

## 📁 **ESTRUTURA DE PASTAS PARA WINDOWS**

```
nuvo-woodwork/
├── public/
│   └── images/           ← Suas imagens aqui
├── src/
│   ├── app/             ← Páginas do site
│   ├── components/      ← Componentes React
│   ├── data/           ← Dados dos projetos
│   ├── lib/            ← Configurações e utilitários
│   └── types/          ← Tipos TypeScript
├── GUIA-CUSTOMIZACAO.md ← Como personalizar
├── SETUP-WINDOWS.md     ← Este arquivo
├── package.json         ← Dependências
└── next.config.js       ← Configurações Next.js
```

## 🎯 **PRÓXIMOS PASSOS**

### **1. Personalização:**
- Siga o **GUIA-CUSTOMIZACAO.md** para personalizar o site
- Altere textos, imagens e cores conforme sua marca

### **2. Deploy:**
- **Vercel:** Deploy gratuito e fácil
- **Netlify:** Alternativa ao Vercel
- **Hospedagem própria:** Use `npm run build` + `npm run start`

### **3. Desenvolvimento:**
- Instale extensões úteis no VSCode:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer

## 📞 **SUPORTE**

Se encontrar problemas:
1. Verifique se seguiu todos os pré-requisitos
2. Consulte a documentação do Next.js: https://nextjs.org/docs
3. Verifique os logs de erro no terminal

**✅ Agora você está pronto para desenvolver no Windows!** 🚀