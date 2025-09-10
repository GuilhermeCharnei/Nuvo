# 🚀 DEPLOY NUVO WOODWORK NA HOSTINGER

## 📋 **PRÉ-REQUISITOS**

1. **Conta na Hostinger** ativa
2. **Domínio** configurado 
3. **Acesso ao painel** da Hostinger

---

## 🎯 **OPÇÃO 1: HOSTING COMPARTILHADO (Mais Comum)**

### **Passo 1: Configurar para Export Estático**

1. **Edite o arquivo `next.config.js`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Execute o build estático:**
   ```bash
   npm run build
   ```

3. **Isso criará uma pasta `out/` com arquivos HTML/CSS/JS**

### **Passo 2: Upload dos Arquivos**

1. **Acesse o File Manager** da Hostinger
2. **Vá para a pasta `public_html`** (ou pasta do seu domínio)
3. **Delete todos os arquivos** existentes na pasta
4. **Faça upload de TODOS os arquivos** da pasta `out/`
5. **Aguarde o upload** completar

### **Passo 3: Configurar Domínio**

1. No painel da Hostinger, vá em **"Websites"**
2. Selecione seu domínio
3. Certifique-se que aponta para `public_html`

---

## 🖥️ **OPÇÃO 2: VPS/CLOUD HOSTING (Node.js)**

### **Passo 1: Preparar Aplicação**

1. **Mantenha o `next.config.js` original** (sem `output: 'export'`)
2. **Execute o build:**
   ```bash
   npm run build
   ```

### **Passo 2: Upload Completo**

1. **Faça upload de TODO o projeto** via FTP/Git:
   - Pasta `src/`
   - Pasta `.next/`
   - Pasta `public/`
   - `package.json`
   - `next.config.js`
   - Etc.

### **Passo 3: Configurar Servidor**

1. **SSH no servidor:**
   ```bash
   npm install
   npm run build
   npm start
   ```

2. **Configure PM2** (se disponível):
   ```bash
   npm install -g pm2
   pm2 start "npm start" --name nuvo-woodwork
   ```

---

## ⚠️ **LIMITAÇÕES DO EXPORT ESTÁTICO**

### **✅ O que FUNCIONA:**
- Todo o design e layout
- Galeria de projetos
- Formulários (com backend externo)
- Animações e interações

### **❌ O que NÃO funciona:**
- **Chatbot Sofia** (precisa de servidor)
- Rotas dinâmicas `/project/[id]`
- API routes
- Server-side rendering

---

## 🤖 **SOLUÇÃO PARA O CHATBOT**

Para manter o chatbot funcionando, você tem 3 opções:

### **Opção A: Chatbot Externo**
- Use **Tawk.to**, **Drift**, ou **Intercom**
- Integre via JavaScript

### **Opção B: Hosting Node.js**
- Upgrade para **VPS** ou **Cloud Hosting**
- Mantenha a aplicação completa

### **Opção C: Chatbot Simples**
- Crie versão estática com respostas fixas
- Link para WhatsApp/email para contato

---

## 📁 **ESTRUTURA FINAL**

### **Hosting Compartilhado:**
```
public_html/
├── _next/
├── images/
├── index.html
├── project.html
└── outros arquivos...
```

### **VPS/Cloud:**
```
/var/www/nuvo/
├── src/
├── .next/
├── public/
├── package.json
└── outros arquivos...
```

---

## 🔧 **COMANDOS ÚTEIS**

### **Build Estático:**
```bash
npm run build
```

### **Testar Local:**
```bash
npx serve out
```

### **Preview Build:**
```bash
npm start
```

---

## 📞 **SUPORTE**

Se precisar de ajuda:
1. **Verifique logs** da Hostinger
2. **Teste localmente** primeiro
3. **Entre em contato** com suporte da Hostinger