<div align="center">

# 🤖 Szumrak GPT

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JanSzewczyk/szumrak-gpt)
[![Live Demo](https://img.shields.io/badge/demo-online-success?style=flat-square)](https://szumrak-gpt.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/JanSzewczyk/szumrak-gpt?style=flat-square)](https://github.com/JanSzewczyk/szumrak-gpt/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**A modern AI chat application built with Next.js, TypeScript, and Tailwind CSS — bringing powerful GPT capabilities to your browser with an elegant, responsive interface.**

[✨ Features](#-features) • [🎯 Getting Started](#-getting-started) • [📖 Table of Contents](#-table-of-contents) • [🛠️ Tech Stack](#️-tech-stack) • [🚀 Deployment](#-deployment)

</div>

---

## 👋 About Szumrak GPT

Welcome to **Szumrak GPT** — a cutting-edge AI chat application that combines the power of GPT language models with a beautifully designed, user-friendly interface.

### What is Szumrak GPT?

Szumrak GPT is a production-ready web application that provides seamless interaction with AI models through a modern chat interface. Built on Next.js 15 with TypeScript and styled with Tailwind CSS, it demonstrates best practices in modern web development while delivering an exceptional user experience.

### The Problem It Solves

Traditional AI chat interfaces often suffer from:
- Poor user experience and outdated designs
- Lack of proper authentication and security
- Limited customization options
- Complex setup processes for developers
- Missing production-ready features

### The Solution

Szumrak GPT addresses these challenges by providing:
- **Modern UI/UX** — Clean, intuitive interface that's a pleasure to use
- **Secure Authentication** — Google OAuth integration for safe user management
- **Type Safety** — Full TypeScript support for reliable development
- **Responsive Design** — Perfect experience across all devices
- **Developer Ready** — Well-structured codebase following best practices
- **Production Optimized** — Built for performance and scalability

### What Makes It Special

- 🎨 **Beautiful Interface** — Carefully crafted with Tailwind CSS
- ⚡ **Fast Performance** — Optimized with Next.js 15 features
- 🔐 **Secure** — Authentication and API protection built-in
- 📱 **Mobile First** — Responsive design that works everywhere
- 🛠️ **Developer Friendly** — Clean code, easy to understand and extend
- 🚀 **Deploy Ready** — One-click deployment to Vercel

---

## ✨ Features

### 🚀 Core Technologies
- **Next.js 15** with App Router and Server Components
- **React 19** with latest features and optimizations
- **TypeScript 5** for complete type safety
- **Tailwind CSS v3.2** for modern, utility-first styling
- **Google OAuth** authentication integration

### 🧪 Testing & Quality
- **ESLint** configuration for code quality
- **TypeScript** strict mode for type safety
- **Code formatting** standards
- **Best practices** enforcement

### 🤖 Automation & DevOps
- **Vercel** deployment optimization
- **Automatic builds** on push
- **Environment management** for different stages
- **Performance monitoring** ready

### 👨‍💻 Developer Experience
- **Hot Module Replacement** for instant feedback
- **TypeScript IntelliSense** for better coding
- **Clean project structure** for easy navigation
- **Comprehensive documentation** for quick onboarding
- **Modern tooling** for efficient development

### ⚡ Performance
- **Server-Side Rendering** for fast initial loads
- **Image optimization** with Next.js Image
- **Code splitting** for optimal bundle sizes
- **Edge deployment** support for global performance
- **Caching strategies** for improved response times

---

## 📖 Table of Contents

- [About Szumrak GPT](#-about-szumrak-gpt)
- [Features](#-features)
- [Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Tech Stack](#️-tech-stack)
- [Styling & Design](#-styling--design)
- [Deployment](#-deployment)
- [Screenshots](#️-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)

---

## 🎯 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

| Requirement | Version | Description |
|------------|---------|-------------|
| **Node.js** | 18.17+ | JavaScript runtime |
| **npm/yarn/pnpm** | Latest | Package manager |
| **Git** | Latest | Version control |

**Recommended Tools:**
- Visual Studio Code with TypeScript extension
- Node Version Manager (nvm) for Node.js version management

### Installation

Follow these steps to set up your development environment:

#### 1. Clone the Repository

```bash
git clone https://github.com/JanSzewczyk/szumrak-gpt.git
cd szumrak-gpt
```

#### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

#### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your configuration. See [Environment Variables](#-environment-variables) section for details.

#### 4. Run Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

#### 5. Build for Production

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

#### 6. Start Production Server

```bash
# Using npm
npm start

# Using yarn
yarn start

# Using pnpm
pnpm start
```

---

## 🔐 Environment Variables

This project uses environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

```env
# ==============================================
# AI PROVIDER CONFIGURATION
# ==============================================
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview

# ==============================================
# AUTHENTICATION
# ==============================================
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# ==============================================
# DATABASE (if applicable)
# ==============================================
DATABASE_URL=your_database_connection_string

# ==============================================
# OPTIONAL
# ==============================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Getting API Keys

<details>
<summary><b>OpenAI API Key</b></summary>

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or log in
3. Navigate to API Keys section
4. Create a new secret key
5. Copy and paste into `.env.local`

</details>

<details>
<summary><b>Google OAuth Credentials</b></summary>

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
    - `http://localhost:3000/api/auth/callback/google` (development)
    - `https://your-domain.com/api/auth/callback/google` (production)
6. Copy Client ID and Client Secret

</details>

<details>
<summary><b>NextAuth Secret</b></summary>

Generate a secure random string:

```bash
# Using OpenSSL
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

</details>

### Environment Validation

Environment variables are validated on application startup. Missing or invalid variables will prevent the application from starting.

---

## 📃 Available Scripts

### Development

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm start` | Start production server |

### Code Quality

| Command | Description |
|---------|-------------|
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Auto-fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

### Testing

| Command | Description |
|---------|-------------|
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |

### Build & Deployment

| Command | Description |
|---------|-------------|
| `npm run build` | Create optimized production build |
| `npm run analyze` | Analyze bundle size |

---

## 📁 Project Structure

```
szumrak-gpt/
│
├── 📁 app/                         # Next.js App Router
│   ├── 📁 (auth)/                  # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── 📁 (chat)/                  # Chat interface
│   │   └── chat/
│   ├── 📁 api/                     # API routes
│   │   ├── auth/
│   │   └── chat/
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Global styles
│
├── 📁 components/                  # React components
│   ├── 📁 ui/                      # UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── 📁 chat/                    # Chat components
│   │   ├── ChatMessage.tsx
│   │   └── ChatInput.tsx
│   └── 📁 layout/                  # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
│
├── 📁 lib/                         # Utilities & configurations
│   ├── 📁 api/                     # API utilities
│   ├── 📁 auth/                    # Auth configuration
│   ├── utils.ts                    # Helper functions
│   └── types.ts                    # TypeScript types
│
├── 📁 hooks/                       # Custom React hooks
│   ├── useChat.ts
│   └── useAuth.ts
│
├── 📁 public/                      # Static assets
│   ├── images/
│   └── favicon.ico
│
├── 📁 styles/                      # Additional styles
│   └── custom.css
│
├── 📄 .env.example                 # Environment template
├── 📄 .env.local                   # Local environment (gitignored)
├── 📄 .eslintrc.json               # ESLint configuration
├── 📄 .gitignore                   # Git ignore rules
├── 📄 next.config.js               # Next.js configuration
├── 📄 package.json                 # Dependencies
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 tailwind.config.ts           # Tailwind configuration
├── 📄 tsconfig.json                # TypeScript configuration
└── 📄 README.md                    # Documentation
```

### Directory Descriptions

- **`app/`** — Next.js App Router with route groups and layouts
- **`components/`** — Reusable React components organized by feature
- **`lib/`** — Utility functions, API clients, and shared logic
- **`hooks/`** — Custom React hooks for stateful logic
- **`public/`** — Static assets served directly
- **`styles/`** — Additional CSS files

---

## 🛠️ Tech Stack

### Framework & Core
- **[Next.js 15](https://nextjs.org/)** — React framework with App Router
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** — Type-safe JavaScript

### Styling
- **[Tailwind CSS 3.2](https://tailwindcss.com/)** — Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** — CSS transformations
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** — Vendor prefixes

### Authentication
- **[NextAuth.js](https://next-auth.js.org/)** — Authentication for Next.js
- **[Google OAuth](https://developers.google.com/identity/protocols/oauth2)** — OAuth provider

### AI Integration
- **[OpenAI API](https://openai.com/)** — GPT model access
- **[Vercel AI SDK](https://sdk.vercel.ai/)** — AI utilities (if applicable)

### Code Quality
- **[ESLint](https://eslint.org/)** — Linting
- **[Prettier](https://prettier.io/)** — Code formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** — TypeScript linting

### Development Tools
- **[Turbopack](https://turbo.build/pack)** — Fast bundler
- **[Git](https://git-scm.com/)** — Version control

### Deployment
- **[Vercel](https://vercel.com/)** — Hosting platform
- **[Vercel Analytics](https://vercel.com/analytics)** — Performance monitoring

---

## 🎨 Styling & Design

### Tailwind CSS Configuration

This project uses Tailwind CSS v3.2. Customize the design system in `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Custom color palette
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
      },
    },
  },
  plugins: [],
}

export default config
```

### Design Principles

- **Responsive Design** — Mobile-first approach
- **Consistent Spacing** — Tailwind's spacing scale
- **Accessible Colors** — WCAG AA compliant
- **Performance** — Optimized CSS purging

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

#### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JanSzewczyk/szumrak-gpt)

#### Manual Deployment

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
    - Go to [Vercel Dashboard](https://vercel.com/dashboard)
    - Click "Add New Project"
    - Import your GitHub repository
    - Configure environment variables
    - Deploy

3. **Set Environment Variables**
    - Navigate to Settings → Environment Variables
    - Add all variables from `.env.local`
    - Redeploy if necessary

### Other Deployment Options

<details>
<summary><b>Deploy to Netlify</b></summary>

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

</details>

<details>
<summary><b>Deploy with Docker</b></summary>

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

</details>

### Health Checks

After deployment, verify:
- ✅ Application loads correctly
- ✅ Authentication works
- ✅ API endpoints respond
- ✅ Environment variables are set

---

## 🖼️ Screenshots

### Live Demo
🌐 **[View Live Demo](https://szumrak-gpt.vercel.app/)**

### Application Preview
> [TODO: Add screenshots of your application]

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit using conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style changes
- `refactor:` — Code refactoring
- `test:` — Adding tests
- `chore:` — Maintenance tasks

### Guidelines

- Follow TypeScript best practices
- Maintain existing code style
- Write meaningful commit messages
- Update documentation as needed
- Ensure all checks pass

---

## 📜 License

This project is licensed under the **MIT License**. This means you are free to use, modify, and distribute this software with proper attribution.

---

## 🙏 Acknowledgments

Special thanks to the tools and communities that made this project possible:

- **[Next.js](https://nextjs.org/)** — The React framework
- **[Vercel](https://vercel.com/)** — Deployment platform
- **[Tailwind CSS](https://tailwindcss.com/)** — Styling framework
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[OpenAI](https://openai.com/)** — AI capabilities
- **Open Source Community** — For inspiration and support

---

## 📧 Contact

**Jan Szewczyk** — Frontend Developer specializing in TypeScript, React, and Next.js

- 🐙 GitHub: [@JanSzewczyk](https://github.com/JanSzewczyk)
- 🌐 Repository: [github.com/JanSzewczyk/szumrak-gpt](https://github.com/JanSzewczyk/szumrak-gpt)
- 🚀 Live Demo: [szumrak-gpt.vercel.app](https://szumrak-gpt.vercel.app/)

For bugs and feature requests, please [open an issue](https://github.com/JanSzewczyk/szumrak-gpt/issues).

---

<div align="center">

**Made with ❤️ by [Jan Szewczyk](https://github.com/JanSzewczyk)**

If this project helped you, please consider giving it a ⭐ on GitHub!

[⬆ Back to Top](#-szumrak-gpt)

</div>