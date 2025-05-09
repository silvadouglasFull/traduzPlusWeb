# Translation Agency Website

A modern and responsive website for a translation agency built with **React**, **TypeScript**, and **Vite**.

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/) (optional)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/translation-agency-site.git
cd translation-agency-site
```

### 2. Install dependencies

```bash
npm install
# ou
yarn
```

### 3. Start development server

```bash
npm run dev
# ou
yarn dev
```

The application will be available at http://localhost:5173.

🛠️ Scripts available

```bash
| Comando   | Descrição                                     |
| --------- | --------------------------------------------- |
| `dev`     | Inicia o servidor de desenvolvimento          |
| `build`   | Gera a versão de produção do projeto          |
| `preview` | Executa o preview local da versão de produção |
| `lint`    | Executa o linter (ESLint) no código           |
| `format`  | Formata o código com Prettier                 |
```

## 📁 Project Structure

```bash
src/
├── assets/              # Imagens, ícones, fontes, etc.
├── components/          # Componentes compartilháveis e reutilizáveis
├── features/            # Funcionalidades isoladas (cada uma com seus próprios componentes, serviços, hooks)
│   └── feature-name/
│       ├── components/  # Componentes específicos dessa feature
│       ├── hooks/       # Hooks específicos
│       ├── services/    # Lógica de acesso a dados (API, etc)
│       ├── types/       # Tipagens locais
│       └── index.ts     # Ponto de entrada da feature
├── shared/              # Utilitários, helpers, constantes, configurações
│   ├── utils/
│   ├── constants/
│   ├── config/
│   └── types/
├── pages/               # Páginas da aplicação (usadas por rotas)
├── layouts/             # Layouts que envolvem as páginas (ex: admin, público)
├── routes/              # Definição e configuração das rotas
├── store/               # Estado global (Redux, Zustand, etc)
├── hooks/               # Hooks reutilizáveis e genéricos
├── services/            # Serviços compartilhados (API, auth, etc)
├── providers/           # Contexts e Providers globais
├── styles/              # Estilos globais (CSS, Tailwind config, etc)
└── main.tsx             # Entry point da aplicação
```

## ✅ Requisitos

- Node.js (versão 18+ recomendada)
- npm ou yarn

Copyright (c) 2025 Douglas Silva

Permission is granted to use, copy, and modify this software for personal and educational purposes only.

Commercial use, resale, or distribution as part of a commercial offering is strictly prohibited without explicit written permission from the author.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

## 📝 License

```text
Copyright (c) 2025 Douglas Silva

Permission is granted to use, copy, and modify this software for personal and educational purposes only.

Commercial use, resale, or distribution as part of a commercial offering is strictly prohibited without explicit written permission from the author.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```
