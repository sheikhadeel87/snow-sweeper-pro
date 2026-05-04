# Snow Sweeper Pro

A modern, responsive marketing site for snow removal and related services. Built as a single-page application with clear sections for hero messaging, services, company story, social proof, and quote requests.

## Features

- **Hero slider** — Rotating highlights with calls to action  
- **Services** — Service offerings and positioning  
- **About** — Company narrative  
- **Testimonials** — Customer quotes  
- **Quote form** — Lead capture  
- **404 handling** — Dedicated not-found page for unknown routes  

## Tech stack

| Layer | Technology |
|--------|------------|
| Runtime | [Node.js](https://nodejs.org/) (LTS recommended) |
| Framework | [React 18](https://react.dev/) |
| Build | [Vite 5](https://vitejs.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Routing | [React Router 6](https://reactrouter.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI primitives | [shadcn/ui](https://ui.shadcn.com/) (Radix-based components) |
| Data / async | [TanStack Query](https://tanstack.com/query) |
| Forms & validation | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Charts | [Recharts](https://recharts.org/) |

## Prerequisites

- **Node.js** 18.x or newer (20+ recommended)  
- **npm**, **pnpm**, or **yarn**  

Using [nvm](https://github.com/nvm-sh/nvm) is optional but useful for managing Node versions.

## Getting started

Clone the repository, install dependencies, and start the dev server:

```bash
git clone <repository-url>
cd snow-sweeper-pro
npm install
npm run dev
```

The dev server listens on **port 8080** by default (see `vite.config.ts`). Open the URL printed in the terminal (typically `http://localhost:8080`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite in development mode with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Build with development mode flags |
| `npm run preview` | Serve the production build locally for smoke testing |
| `npm run lint` | Run ESLint on the project |

## Production build

```bash
npm run build
```

Static output is written to **`dist/`**. Deploy that folder to any static host (Netlify, Vercel, S3 + CloudFront, nginx, etc.). Configure the host for **SPA fallback**: all non-file routes should serve `index.html` so client-side routing works.

## Project layout

```
src/
├── components/     # Page sections and shared UI
├── components/ui/  # shadcn-style primitives
├── hooks/          # Shared React hooks
├── lib/            # Utilities (e.g. `cn()` for class names)
├── pages/          # Route-level views (Index, NotFound)
├── App.tsx         # Router and app shell
└── main.tsx        # Entry point
```

Path alias **`@/`** maps to `src/` (configured in Vite and TypeScript).

## Browser support

Targets modern evergreen browsers. For older browsers, adjust Vite build targets and test accordingly.

---

**Snow Sweeper Pro** — internal or client delivery; adjust repository URL and deployment notes for your environment.
