# Croma Arquitetura — Site Institucional & CMS

Site institucional e painel administrativo desenvolvido sob medida para a **Croma Arquitetura** (Stands & Eventos e Arquitetura Comercial).

---

## 🚀 Tecnologias Utilizadas

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript & React 18
- **Estilização:** Tailwind CSS com Design System personalizado (Preto Urbano `#0a0a0a`, Verde Croma `#1b5a2d`/`#5a873c`, Laranja Comercial `#e63812`/`#f47820`)
- **Efeitos Visuais:** Glassmorphism (`backdrop-blur`, bordas translúcidas), iluminação radial e textura com grafismos da marca.
- **Tipografia:** 
  - Primária (Títulos): `Obviously` (Wide / Bold locais via `@font-face`)
  - Secundária (Textos): `Montserrat` (Google Fonts)
- **Banco de Dados:** Prisma ORM com SQLite (`prisma/dev.db`)
- **Autenticação:** NextAuth.js com Credenciais e senhas criptografadas com `bcryptjs`
- **Upload de Mídia:** Armazenamento local em `public/uploads` com suporte expansível para Cloudinary ou S3.

---

## 📂 Estrutura de Páginas

1. **Home / Splash Screen (`/`):**
   - Hero com Split Screen dividido entre **Stands e Eventos** e **Arquitetura Comercial**
   - Propósito: *"A Croma em uma frase"*
   - Seção de Experiência e Metodologia
   - Métricas comprovadas da trajetória (30+ anos, 12.359 projetos, 6.326 eventos, 459.303 m²)
   - Manifesto e CTA para WhatsApp

2. **Stands e Eventos (`/stands`):**
   - Identidade visual com acento **Verde Croma** e logo dedicada
   - Metodologia de trabalho em 5 etapas (Entender, Conectar, Projetar, Realizar, Entregar Resultado)
   - Especialidades (Stands, Cenografias, Espaços Promocionais, Especiais)
   - Grid dinâmico de portfólio conectado ao banco de dados SQLite

3. **Arquitetura Comercial (`/comercial`):**
   - Identidade visual com acento **Laranja Vibrante** e logo dedicada
   - Especialidades (Arquitetura Comercial, Espaços Corporativos, Showrooms, Projetos Especiais)
   - Grid dinâmico de portfólio conectado ao banco de dados SQLite

4. **Página de Projeto Dinâmica (`/projeto/[slug]`):**
   - Renderização dos dados do projeto (Cliente, Ano, Local, Área, Desafio & Solução)
   - Galeria em formato Mosaico com **Lightbox interativo** para ampliação de imagens
   - CTA direto para o WhatsApp citando o nome do projeto em questão

5. **Contato (`/contato`):**
   - Cards Glassmórficos com links diretos:
     - **WhatsApp:** Contato rápido
     - **E-mail:** `sandramartins@cromarquitetura.com.br`
     - **Instagram:** `@CROMARQUITETURA`

6. **Painel de Controle / CMS (`/painel-de-controle`):**
   - Rota oculta e protegida por login e senha
   - Visão geral das métricas de projetos publicados
   - CRUD completo: Criar, Editar, Excluir e Alternar visibilidade (Publicado / Rascunho)
   - Upload de imagem de capa e galeria com drag/drop e preview em tempo real

---

## 🔐 Acesso ao Painel de Controle

- **URL:** [http://localhost:3000/painel-de-controle](http://localhost:3000/painel-de-controle)
- **E-mail:** `admin@cromarquitetura.com.br`
- **Senha:** `croma2025!`

---

## 🛠️ Como Executar o Projeto

### 1. Pré-requisitos
- Node.js 18+ instalado.

### 2. Instalação e Execução
```bash
# Instalar dependências (caso necessário)
npm install

# Gerar o cliente Prisma e sincronizar o banco SQLite
npx prisma generate
npx prisma db push

# Popular os projetos e usuário inicial (Seed)
node prisma/seed.js

# Iniciar o servidor de desenvolvimento
npm run dev
```
O site estará disponível em: **`http://localhost:3000`**

### 3. Build de Produção
```bash
npm run build
npm start
```
