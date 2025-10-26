# 📧 Configuração do Formspree - NUVO BARS

## Passo a Passo Completo

### 1️⃣ Criar Conta no Formspree (2 minutos)

1. Acesse: https://formspree.io/register
2. Clique em **"Sign Up"**
3. Cadastre com: `guilherme.charnei@gmail.com`
4. Crie uma senha
5. Verifique seu email e confirme a conta

### 2️⃣ Criar o Formulário (1 minuto)

1. Após fazer login, clique em **"+ New Form"**
2. **Nome do formulário:** `NUVO BARS Contact Form`
3. **Email de recebimento:** `guilherme.charnei@gmail.com`
4. Clique em **"Create Form"**

### 3️⃣ Copiar o Form ID

Após criar, você verá uma tela com o **Form ID**. Ele parece com isso:

```
https://formspree.io/f/abc123xyz
                        ↑↑↑↑↑↑↑↑↑
                     Este é o ID
```

**Copie apenas o ID:** `abc123xyz`

### 4️⃣ Configurar no Projeto

#### **Opção A: Configurar Localmente (Desenvolvimento)**

1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua `YOUR_FORM_ID` pelo ID real:

```env
NEXT_PUBLIC_FORMSPREE_ID=abc123xyz
```

3. Salve o arquivo
4. Reinicie o servidor local (`npm run dev`)

#### **Opção B: Configurar na Vercel (Produção)**

1. Acesse: https://vercel.com/
2. Vá em **Settings** → **Environment Variables**
3. Adicione uma nova variável:
   - **Name:** `NEXT_PUBLIC_FORMSPREE_ID`
   - **Value:** `abc123xyz` (seu Form ID real)
   - **Environment:** Marque todas (Production, Preview, Development)
4. Clique em **"Save"**
5. Faça um novo deploy (ou ele redeploya automaticamente)

### 5️⃣ Testar o Formulário

1. Acesse: https://nuvobars.com
2. Role até o formulário de contato
3. Preencha com dados de teste
4. Clique em **"Get My Wall Unit Quote"**
5. Deve aparecer: ✓ Message Sent!
6. **Verifique seu Gmail:** `guilherme.charnei@gmail.com`
7. Deve chegar um email em 1-2 minutos

### 6️⃣ Configurações Adicionais (Opcional)

No painel do Formspree você pode:

- ✅ **Autoresponder:** Enviar email automático de confirmação para o cliente
- ✅ **Spam Protection:** Ativar proteção contra spam
- ✅ **Notifications:** Receber notificações no celular
- ✅ **Integrations:** Conectar com Google Sheets, Slack, etc.

---

## 🆘 Problemas Comuns

### Não recebo os emails
- Verifique pasta de Spam no Gmail
- Confirme que o email está correto no Formspree
- Verifique no painel do Formspree se os submissions estão aparecendo

### Formulário retorna erro
- Verifique se o Form ID está correto
- Aguarde 1-2 minutos após configurar (cache)
- Abra o Console do navegador (F12) para ver erros

### Limites do Plano Gratuito
- 50 submissions/mês no plano gratuito
- 1.000 submissions/mês no plano Gold ($10/mês)
- Quando atingir o limite, considere upgrade

---

## 📊 Dashboard do Formspree

Acesse: https://formspree.io/forms

No dashboard você pode ver:
- ✅ Todos os envios recebidos
- ✅ Data e hora de cada envio
- ✅ Dados completos de cada formulário
- ✅ Estatísticas de uso

---

## ✅ Checklist Final

- [ ] Conta criada no Formspree
- [ ] Form ID copiado
- [ ] Variável configurada na Vercel
- [ ] Novo deploy feito
- [ ] Teste realizado
- [ ] Email recebido no Gmail

---

**Qualquer dúvida, me chame!** 🚀
