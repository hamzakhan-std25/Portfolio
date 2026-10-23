# Repo Audit

Date: 2026-09-30

## 1) File tree

```text
.
├── .github/
│   └── copilot-instructions.md
├── .next/
├── public/
│   └── (static assets and generated files)
├── src/
│   ├── app/
│   │   ├── fonts/
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ClientProviders.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── footer.tsx
│   │   ├── heroSection.tsx
│   │   ├── navbar.tsx
│   │   ├── PageLoader.tsx
│   │   ├── portfolio.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── SplineScrollOrb.tsx
│   │   ├── technoloies.tsx
│   │   ├── terminalLive.tsx
│   │   └── ui/
│   │       ├── floatingDock.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── terminal.tsx
│   └── utils/
│       └── cn.ts
├── .env.local
├── .envsample
├── .eslintrc.json
├── .gitignore
├── .hintrc
├── components.json
├── global.d.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── thunder-collection_Next Auth.json
└── change theme
```

Important repo observations:
- There is no `src/data/` or `/data/*` layer at all.
- Personal copy and section content are hardcoded directly inside components instead of a data source.
- The app is a single-page portfolio; no additional routes are introduced outside the App Router entry at `src/app/page.tsx`.

## 2) Keep / restyle / replace decisions

| Component | Decision | Reason |
| --- | --- | --- |
| `src/app/page.tsx` | Keep | Good composition entry point; lazy-loads large sections and orchestrates the loader and single-page sections clearly. |
| `src/app/layout.tsx` | Keep | Good metadata + global font setup. Minimal and correct for a Next App Router portfolio. |
| `src/components/PageLoader.tsx` | Keep | Strong visual treatment and motion timing; it is a polished hero sequence. |
| `src/components/navbar.tsx` | Keep | Works as a responsive nav with CTA, mobile menu, and active states. |
| `src/components/terminalLive.tsx` | Keep | Good storytelling section and terminal aesthetic; one of the strongest sections in the repo. |
| `src/components/ui/terminal.tsx` | Keep | Reusable terminal widget; good fit for the portfolio theme. |
| `src/components/heroSection.tsx` | Restyle | Strong layout, but the copy and branding feels more like a personal portfolio landing page with some generic / agency-style wording that could be tightened to a clearer personal brand. |
| `src/components/experience.tsx` | Restyle | Nice timeline treatment, but currently only one entry and commented future entries; it should be aligned to real career history and data source. |
| `src/components/portfolio.tsx` | Restyle | Visual card system is good, but project data is hardcoded, modal special-casing is brittle, and the list is sparse/placeholder-heavy. |
| `src/components/contact.tsx` | Restyle | Form logic is solid, but the copy and styling should be simplified and the env-variable requirement is high-risk for a production portfolio if not documented. |
| `src/components/footer.tsx` | Restyle | Layout is effective, but the content is heavily hardcoded and a bit inconsistent with the rest of the design language. |
| `src/components/technoloies.tsx` | Restyle | Visually nice; however the file name is misspelled (`technoloies.tsx`) and the stack data is mostly commented out, so it reads as “template skeleton” rather than a finished content model. |
| `src/components/SocialLinks.tsx` | Restyle | The floating dock pattern is usable, but the actual link list is mostly commented out, leaving it underpopulated. |
| `src/components/ClientProviders.tsx` | Keep | Minimal provider wrapper; okay for an app-wide motion/orb context. |
| `src/components/SplineScrollOrb.tsx` | Replace | Excellent concept, but it introduces a heavy remote 3D dependency and a complex scroll-to-slot tracking system; it is brittle for maintenance and not necessary for a small single-page site. |
| `src/components/ui/floatingDock.tsx` | Replace | Good concept, but overly generic and not tuned to the current portfolio brand; it feels like a copied interaction component rather than a chosen final design. |
| `src/components/ui/input.tsx` | Keep | The input styling is a good reusable component. |
| `src/components/ui/label.tsx` | Keep | Standard label primitive wrapper; fine. |

## 3) Hardcoded boilerplate / template-like strings

This repo does not contain much true stock Next.js boilerplate text (for example, default Vite/CRA starter content is absent), but it does contain a set of hardcoded literal strings and placeholder-style content that should likely move to a data layer or content model.

| File | Line(s) | Hardcoded text |
| --- | --- | --- |
| `src/app/layout.tsx` | 18-19 | `"Portfolio — Arham Saleem"`, `"Full Stack Developer · MERN · Next.js"` |
| `src/components/PageLoader.tsx` | 11-14 | `"Initializing systems"`, `"Loading assets"`, `"Compiling shaders"`, `"Ready"` |
| `src/components/PageLoader.tsx` | 142 | `"HK developer"` |
| `src/components/PageLoader.tsx` | 204 | `"Full Stack Developer · MERN · Next.js"` |
| `src/components/heroSection.tsx` | 8-11 | `"AI Integration Specialist"`, `"Automation Engineer"`, `"Full-Stack Developer"`, `"Workflow Systems Architect"` |
| `src/components/heroSection.tsx` | 137 | `"Available for work"` |
| `src/components/heroSection.tsx` | 146-148 | `"Hello, I&apos;m"`, `"Hamza Khan"` |
| `src/components/heroSection.tsx` | 178-203 | `"View My Work"`, `"Download Resume"` |
| `src/components/navbar.tsx` | 8-13 | `"Home"`, `"About"`, `"Tech Stack"`, `"Experience"`, `"Portfolio"`, `"Contact"` |
| `src/components/navbar.tsx` | 113 | `"Resume"` |
| `src/components/navbar.tsx` | 222 | `"Download Resume"` |
| `src/components/portfolio.tsx` | 18-25 | `"Anonify"`, `"https://github.com/CodeWithPsych/anonify"`, `"https://anonify-one.vercel.app/"` |
| `src/components/portfolio.tsx` | 81 | `"Eato"` |
| `src/components/portfolio.tsx` | 106 | `"A Glimpse Into My"` |
| `src/components/portfolio.tsx` | 204 | `"📱Mobile App"` |
| `src/components/portfolio.tsx` | 208 | `"Eato is a mobile application. You can download it from the Play Store."` |
| `src/components/contact.tsx` | 61 | `"Message sent successfully!"` |
| `src/components/contact.tsx` | 68 | `"Failed to send message, try again later"` |
| `src/components/contact.tsx` | 87 | `"Drop a Message,"` |
| `src/components/contact.tsx` | 120 | `"First Name"`, `"Last Name"` |
| `src/components/contact.tsx` | 136 | `"Email Address"` |
| `src/components/contact.tsx` | 154 | `"Enter your message here"` |
| `src/components/footer.tsx` | 12 | `"HK Developer"` |
| `src/components/footer.tsx` | 30 | `"Contact"` |
| `src/components/footer.tsx` | 53 | `"Tech Stack"` |
| `src/components/footer.tsx` | 59 | `"React / Next.js"` |
| `src/components/footer.tsx` | 79 | `"Tailwind CSS"` |
| `src/components/footer.tsx` | 90 | `"Built with Next.js ⚡ & Tailwind CSS"` |
| `src/components/terminalLive.tsx` | 45 | `"about --engineer"`, `"skills --stack"`, `"services --deployment"` |
| `src/components/terminalLive.tsx` | 48 | `"Hamza Khan — AI Integration & Automation Specialist"` |
| `src/components/terminalLive.tsx` | 49 | `"Building intelligent web apps with modern technologies and frameworks."` |
| `src/components/terminalLive.tsx` | 52-58 | Terminal command output strings for AI/ML/backend tooling |
| `src/components/technoloies.tsx` | 116 | `"Tech Stack &"` |
| `src/components/ui/terminal.tsx` | 7-72 | Keyboard sound map and shell-token metadata; not user-facing copy, but still hardcoded logic. |

### Notes on the audit
- These literals are embedded directly in components and are not centralized under a content layer.
- There is no `/data/*.ts` or equivalent content dataset in the repo.
- This is the main structural gap relative to the repo rule in `.github/copilot-instructions.md`.

## 4) All `"use client"` boundaries

These are the exact client-component boundaries found in the repo:

| File | Line |
| --- | --- |
| `src/app/page.tsx` | 1 |
| `src/components/ClientProviders.tsx` | 1 |
| `src/components/contact.tsx` | 1 |
| `src/components/experience.tsx` | 1 |
| `src/components/footer.tsx` | 1 |
| `src/components/heroSection.tsx` | 1 |
| `src/components/navbar.tsx` | 1 |
| `src/components/PageLoader.tsx` | 1 |
| `src/components/portfolio.tsx` | 1 |
| `src/components/SplineScrollOrb.tsx` | 1 |
| `src/components/technoloies.tsx` | 1 |
| `src/components/terminalLive.tsx` | 1 |
| `src/components/ui/floatingDock.tsx` | 1 |
| `src/components/ui/input.tsx` | 1 |
| `src/components/ui/label.tsx` | 1 |
| `src/components/ui/terminal.tsx` | 1 |

### Interpretation
- The app shell and most section components are client-side by design because they rely on motion, animated loaders, DOM events, or forms.
- `src/app/layout.tsx` is not marked with `"use client"`; it remains a server component and is the proper boundary for metadata and global fonts.
- The `"use client"` usage is consistent with the theme and stateful UI, but the current implementation pushes most content into a client render path without any centralized content source.

## 5) Overall verdict

This repo is a polished single-page portfolio concept with a strong visual aesthetic and clear interactive motion patterns. The main technical debt is not architecture-breaking; it is content organization and maintainability:
- personal content is embedded in component files instead of a data layer,
- several sections feel like template-style content rather than final production copy,
- a few components are more generic stock UI interactions than brand-specific implementations,
- the `Spline`/orb system is over-engineered for the current portfolio size.

No source files were changed while producing this audit.
