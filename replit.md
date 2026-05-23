# RAZR Agency

A premium multi-page marketing website for RAZR Agency — a Meta Agency Ad Accounts provider. Dark luxury SaaS aesthetic with electric blue accents, glassmorphism, particle effects, and Framer Motion animations throughout.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/razr-agency run dev` — run the website (reads PORT from env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion, recharts v3 (React 19 compatible)
- Routing: Wouter
- Icons: lucide-react, react-icons/si
- API: Express 5 (api-server artifact, minimal — site is frontend-only)

## Where things live

- `artifacts/razr-agency/src/pages/` — 7 pages: Home, Features, HowItWorks, Plans, About, Faq, Contact
- `artifacts/razr-agency/src/components/layout/` — Navbar, Footer, PageWrapper
- `artifacts/razr-agency/src/components/ParticleBackground.tsx` — Canvas particle animation
- `artifacts/razr-agency/src/components/LoadingScreen.tsx` — Animated loading screen
- `artifacts/razr-agency/src/index.css` — Dark theme CSS variables + Space Grotesk/Inter fonts

## Architecture decisions

- Frontend-only site (no DB, no backend routes needed — all content is static)
- Always-dark mode: `dark` class forced on `<html>` via useEffect in App.tsx
- CSS variables use space-separated HSL values (no `hsl()` wrapper) per Tailwind v4 conventions
- Google Fonts imported at the very top of index.css (before @import "tailwindcss") to avoid PostCSS failure
- Particle background uses HTML Canvas API with requestAnimationFrame — no external library needed

## Product

7-page premium agency website:
1. **Home** — Hero with particle background, stats counters, Why RAZR, How It Works preview, testimonials slider, CTA banner, FAQ accordion
2. **Features** — 12 feature cards with hover glow effects
3. **How It Works** — Animated alternating timeline with 5 steps
4. **Plans** — Two glass pricing cards (Setup Access + Full Access)
5. **About** — Company story, mission/vision, animated counters, values grid
6. **FAQ** — Accordion with 6 questions
7. **Contact** — Premium form + sticky contact panel with Telegram/WhatsApp/Live support

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Google Fonts `@import url(...)` MUST be first line of index.css — PostCSS fails silently otherwise
- Loading screen auto-dismisses after 1.2 seconds — screenshot tools may catch it mid-animation
- Recharts must be v3+ for React 19 (v2 throws "Cannot read properties of null (reading 'useRef')")
- The shadcn `ui/chart.tsx` wrapper is NOT compatible with recharts v3 — do not reintroduce it
- Global effects (CustomCursor, MouseGlow, NoiseOverlay) mount once in App.tsx inside TooltipProvider
- The site has no backend API calls — do not add react-query hooks unless adding a real backend endpoint

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
