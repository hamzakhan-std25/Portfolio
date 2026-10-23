# Hamza Khan Portfolio: Copilot Content Pack

Drop this file into `docs/COPILOT_CONTENT_PACK.md`. It has three parts:

- **Part A:** polished copy (the content bible), sourced only from the resume
- **Part B:** ready-to-paste typed data files for `src/data/`
- **Part C:** the ordered Copilot prompt sequence (one phase per prompt, commit after each)

Global rules for every prompt: no invented metrics, employers, links or repos; preserve classNames, Framer Motion variants and wrapper elements; run `npx tsc --noEmit` at the end; list every file touched.

---

# PART A: CONTENT BIBLE

## A1. Identity

| Field | Value |
|---|---|
| Name | Hamza Khan |
| Initials (loader/logo) | HK |
| Title | Full-Stack Software Developer |
| Rotating roles | Full-Stack Developer, AI Integrator, RAG Builder |
| Location | Islamabad, Pakistan |
| Email | hamzakhan.cs25@gmail.com |
| GitHub | https://github.com/hamzakhan-std25 |
| Phone | +923118688410 (store in data, **do not render publicly** by default; spam risk) |
| Resume | /Hamza_Khan_CV.pdf |
| LinkedIn | not provided, omit until supplied |

## A2. Metadata / SEO

- **Title:** `Hamza Khan | Full-Stack & AI Integration Developer`
- **Description:** `Full-stack developer building production web apps with React, Next.js, TypeScript and Node.js, plus AI features like RAG, semantic search and LLM integrations. Based in Islamabad, Pakistan.`
- **OG title:** `Hamza Khan: Full-Stack Developer & AI Integrator`
- **Keywords:** Full-Stack Developer, Next.js, React, TypeScript, Node.js, RAG, LLM integration, Islamabad

## A3. Loader (PageLoader)

- Status lines: `Booting workspace`, `Loading interfaces`, `Connecting services`, `Ready`
- Brand: `HK`
- Subtitle: `Full-Stack · AI Integration · Next.js`

## A4. Hero

- Eyebrow: `Hello, I'm`
- H1: `Hamza Khan`
- Rotating line: `Full-Stack Developer` → `AI Integrator` → `RAG Builder`
- Status pill: `Open to opportunities`
- Value prop: `I build fast, production-ready web apps with React, Next.js and Node.js, and I add the AI layer, from semantic search to RAG support bots, that makes them smarter.`
- CTAs: `View My Work` (→ #portfolio), `Download Resume` (→ resumeUrl), `Contact` (→ #contact)
- Hero pipeline strip labels: `Query → Embed → Vector Search → LLM → Response`
- Pipeline tooltips:
  - Query: `User intent in natural language`
  - Embed: `Text to vectors (Gemini / OpenAI)`
  - Vector Search: `Pinecone · MongoDB Vector Search`
  - LLM: `Gemini · Groq · OpenAI`
  - Response: `Grounded, context-aware answer`

## A5. About / Core Expertise

**Heading:** `About Me`

**Summary (paragraph):**
> I'm a full-stack software developer who enjoys owning a feature end to end, from the database schema and API design to the pixel-level interface. My core stack is React, Next.js, TypeScript and Node.js, with MongoDB, PostgreSQL and Supabase behind it. I also specialize in AI-integrated features such as RAG pipelines, semantic search and LLM-powered assistants. I care about performance, clean API architecture and Git-based team workflows, and I've shipped web apps, real-time systems and eCommerce platforms to production.

**Expertise cards (4):**

| Title | Body |
|---|---|
| Full-Stack Engineering | React, Next.js, TypeScript and Node.js applications with clean REST APIs, JWT/OAuth auth and role-based access control. |
| AI & RAG Integration | Semantic search, RAG support pipelines and LLM assistants using Gemini, OpenAI, Groq, Pinecone and MongoDB Vector Search. |
| eCommerce & Headless | Headless storefronts on Next.js with WordPress/WooCommerce over GraphQL, plus Shopify apps and custom storefronts. |
| Real-Time Systems | WebSocket-based messaging and session-aware services with persistent, offline-capable experiences. |

**Education:** BS Computer Science, University of Swabi (Khyber Pakhtunkhwa), 2022–2026, GPA 3.45 / 4.0

**Certifications:**
- Google IT Support Professional Certificate
- IBM DevOps & Software Engineering
- Google Project Management Professional Certificate
- HCCDA-AI (in progress)

## A6. Experience (timeline, newest first)

**1. Full-Stack Developer Intern, Mehdi Technologies**
Islamabad · Aug 2026 – Present
- Develop and customize Shopify storefronts and applications using React, Node.js, REST APIs and responsive UI patterns.
- Built a Shopify quiz application (React, Node.js, REST APIs, Supabase) with automated discount fulfillment.
- Developed real-time Node.js services with WebSockets, Redis, Prisma and Supabase for streaming and session-aware data handling.
- Collaborate through Git/GitHub code reviews while extending Shopify functionality through custom apps.

**2. React Developer Intern, Internee.pk**
Remote · Jul 2025 – Sep 2025
- Built reusable React/Next.js interfaces and integrated REST APIs for dynamic, responsive web applications.
- Improved frontend loading efficiency with code-splitting and lazy loading, reducing unnecessary initial asset delivery.
- Implemented responsive UI with Tailwind CSS; contributed through Git/GitHub, code reviews and Agile workflows.

**3. Web Developer Intern, TechCreator**
Swabi · Mar 2025 – Jun 2025 and Sep 2025 – Dec 2025
- Developed responsive websites using HTML, CSS, JavaScript, WordPress and WooCommerce across two project engagements.
- Delivered eCommerce functionality: product layouts, payment gateway configuration, forms, staging/testing, migrations and production launches.
- Improved performance through caching and image optimization, and supported SEO with Yoast SEO.

## A7. Projects (case-study copy)

### TaskConnect: Smart Services Marketplace (PWA)
- **Tagline:** A geospatial services marketplace with AI-powered semantic search.
- **Overview:** A MERN progressive web app that matches people with nearby service providers. Geospatial matching, JWT authentication and role-based access control sit on Dockerized REST APIs, while a Gemini-powered semantic search layer understands what users actually mean.
- **Challenge:** Keyword search misses intent ("fix leaking kitchen tap"), and location queries get slow as listings grow.
- **Solution:** Gemini embeddings with MongoDB Vector Search for intent matching, optimized geospatial queries for discovery, and an LLM listing assistant that helps providers write better tasks.
- **Metrics:**
  - `+30%` service-match precision (Gemini semantic search with MongoDB Vector Search)
  - `−40%` discovery latency (optimized MongoDB geospatial queries)
  - `−20%` task abandonment (LLM listing assistant)
- **Stack:** Node.js, Express.js, React.js, Tailwind CSS, MongoDB, Stripe, Firebase FCM, Google Maps, Docker, Jest, Cypress, Gemini
- **Demo:** https://tasker-app-hazel.vercel.app/
- **Architecture (layers):** Client PWA (React, Tailwind) → Express API (JWT, RBAC) → MongoDB (Geospatial + Vector Search) → Gemini. Side services: Stripe, Firebase FCM, Google Maps. Docker wraps the API.

### Part Plumbing: Headless E-Commerce Platform
- **Tagline:** A headless storefront with a RAG-powered support assistant.
- **Overview:** A headless eCommerce platform built with Next.js and React, with WordPress/WooCommerce as the content and commerce backend exposed through GraphQL, and a retrieval-augmented support pipeline on top.
- **Challenge:** Customers need fast product discovery and instant, accurate answers about plumbing parts.
- **Solution:** Decoupled Next.js frontend over GraphQL, debounced product filtering, a RAG support pipeline (Gemini, Pinecone, Groq) and WhatsApp lead-generation flows.
- **Metrics:** `+30%` automated inquiry resolution (RAG support pipeline)
- **Other highlights:** Debounced product filtering and WhatsApp lead flows improve product discovery and lead capture (no numeric claim).
- **Stack:** Next.js, React, Framer Motion, Headless WordPress, WooCommerce, GraphQL, Supabase, Pinecone, Gemini, Groq, Prompt Engineering
- **Demo:** https://parts-plumbing.vercel.app/
- **Architecture:** Next.js storefront → GraphQL → Headless WordPress/WooCommerce. RAG branch: Embed → Pinecone → Gemini/Groq. WhatsApp lead flow at the edge.

### AI Real-Time Chat Application (PWA)
- **Tagline:** Real-time messaging with an AI conversation layer.
- **Overview:** A real-time progressive web app using WebSockets for bidirectional messaging with persistent, offline-capable sessions, OAuth sign-in and OpenAI-powered conversational features.
- **Solution:** Firebase authentication with Google and GitHub OAuth, Supabase for persistent data and session management, Dockerized backend services.
- **Metrics:** none (do not invent)
- **Stack:** Node.js, Express.js, WebSockets, React.js, Supabase, Firebase, OAuth, Docker, OpenAI API
- **Demo:** https://chat-bot-beige-chi.vercel.app/
- **Architecture:** React PWA → WebSocket server (Express) → Supabase. Firebase Auth (Google/GitHub OAuth). OpenAI API. Docker.

## A8. Skills (groups)

| Group | Items |
|---|---|
| Frontend | React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, Shadcn UI, Redux Toolkit |
| Backend | Node.js, Express.js, REST APIs, WebSockets, GraphQL, API Integration |
| Data | MongoDB, PostgreSQL, MySQL, Supabase, Pinecone, Prisma, Redis |
| AI & Vector | RAG, LLM Integration (OpenAI, Gemini, Groq), Semantic Search, AI Chatbots, MongoDB Vector Search |
| Auth & Security | JWT, OAuth 2.0, Role-Based Access Control |
| DevOps & Cloud | Git, GitHub, Docker, Firebase, CI/CD, Vercel, Jest, Cypress, Postman, Linux |

**Constellation relations (hover-link):** RAG ↔ Pinecone, Gemini, Groq, OpenAI · Semantic Search ↔ MongoDB Vector Search, Gemini · Next.js ↔ React, TypeScript, Vercel · Node.js ↔ Express.js, WebSockets, REST APIs · Docker ↔ CI/CD, Linux.

## A9. Terminal section script (terminalLive)

```
$ about --engineer
Hamza Khan: Full-Stack Developer & AI Integrator
Building production web apps with React, Next.js, TypeScript and Node.js.

$ skills --stack
frontend : React · Next.js · TypeScript · Tailwind · Framer Motion
backend  : Node.js · Express · REST · WebSockets · GraphQL
data     : MongoDB · PostgreSQL · Supabase · Pinecone · Prisma
ai       : RAG · Gemini · OpenAI · Groq · Semantic Search

$ services --deployment
web apps · eCommerce · real-time systems · AI features · Docker · Vercel
```

## A10. Contact & footer

- Heading: `Let's Build Something Together`
- Sub: `Have a project, an internship or a role in mind? Send a message and I'll get back to you.`
- Fields: `First Name`, `Last Name`, `Email Address`, `Message`
- Success: `Message sent. Thanks for reaching out!`
- Error: `Couldn't send your message. Please try again.`
- Footer brand: `Hamza Khan`
- Footer tagline: `Full-Stack Developer · AI Integrator`
- Footer credit: `Built with Next.js & Tailwind CSS`
- Social links: GitHub, Email (LinkedIn only when supplied)

## A11. Flags to resolve before going live

- The three percentages are shown prominently; be ready to explain how each was measured.
- "Internee.pks" in the CV is a typo for "Internee.pk"; fix it in the CV too.
- The two projects' GitHub repo URLs were not provided, so no repo buttons render.
- Phone number is stored but hidden by default.

---

# PART B: TYPED DATA FILES

Phase 2 prompt asks Copilot to create these exactly. Text is final copy from Part A.

## B1. `src/data/types.ts`

```ts
export interface NavItem { label: string; href: string }

export interface Education {
  degree: string; institution: string; location: string;
  period: string; gpa: string;
}

export interface Profile {
  name: string; initials: string; title: string; roles: readonly string[];
  email: string; phone: string; github: string; location: string;
  summary: string; valueProp: string; resumeUrl: string;
  education: Education; certifications: readonly string[];
  seo: { title: string; description: string; ogTitle: string; keywords: readonly string[] };
}

export interface ExpertiseCard { title: string; body: string }

export interface Experience {
  id: string; role: string; company: string; location: string;
  period: string; current?: boolean; highlights: readonly string[];
}

export interface Metric { label: string; value: string; description: string }

export type ArchLayer = "client" | "api" | "data" | "ai" | "service" | "infra";

export interface ArchNode {
  id: string; label: string; layer: ArchLayer;
  description: string; tech: readonly string[]; linksTo?: readonly string[];
}

export interface Project {
  id: string; title: string; tagline: string; overview: string;
  challenge: string; solution: string; stack: readonly string[];
  highlights: readonly string[]; metrics: readonly Metric[];
  demoUrl: string; githubUrl?: string; architecture: readonly ArchNode[];
}

export interface SkillGroup {
  id: string; label: string; items: readonly string[];
}
export interface SkillRelation { skill: string; related: readonly string[] }
```

## B2. `src/data/profile.ts`

```ts
import type { NavItem, Profile, ExpertiseCard } from "./types";

export const profile: Profile = {
  name: "Hamza Khan",
  initials: "HK",
  title: "Full-Stack Software Developer",
  roles: ["Full-Stack Developer", "AI Integrator", "RAG Builder"],
  email: "hamzakhan.cs25@gmail.com",
  phone: "+923118688410",
  github: "https://github.com/hamzakhan-std25",
  location: "Islamabad, Pakistan",
  summary:
    "I'm a full-stack software developer who enjoys owning a feature end to end, from the database schema and API design to the pixel-level interface. My core stack is React, Next.js, TypeScript and Node.js, with MongoDB, PostgreSQL and Supabase behind it. I also specialize in AI-integrated features such as RAG pipelines, semantic search and LLM-powered assistants. I care about performance, clean API architecture and Git-based team workflows, and I've shipped web apps, real-time systems and eCommerce platforms to production.",
  valueProp:
    "I build fast, production-ready web apps with React, Next.js and Node.js, and I add the AI layer, from semantic search to RAG support bots, that makes them smarter.",
  resumeUrl: "/Hamza_Khan_CV.pdf",
  education: {
    degree: "BS Computer Science",
    institution: "University of Swabi",
    location: "Swabi, Khyber Pakhtunkhwa",
    period: "2022 – 2026",
    gpa: "3.45 / 4.0",
  },
  certifications: [
    "Google IT Support Professional Certificate",
    "IBM DevOps & Software Engineering",
    "Google Project Management Professional Certificate",
    "HCCDA-AI (in progress)",
  ],
  seo: {
    title: "Hamza Khan | Full-Stack & AI Integration Developer",
    description:
      "Full-stack developer building production web apps with React, Next.js, TypeScript and Node.js, plus AI features like RAG, semantic search and LLM integrations. Based in Islamabad, Pakistan.",
    ogTitle: "Hamza Khan: Full-Stack Developer & AI Integrator",
    keywords: ["Full-Stack Developer", "Next.js", "React", "TypeScript", "Node.js", "RAG", "LLM integration", "Islamabad"],
  },
};

export const navItems: readonly NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const expertise: readonly ExpertiseCard[] = [
  { title: "Full-Stack Engineering", body: "React, Next.js, TypeScript and Node.js applications with clean REST APIs, JWT/OAuth auth and role-based access control." },
  { title: "AI & RAG Integration", body: "Semantic search, RAG support pipelines and LLM assistants using Gemini, OpenAI, Groq, Pinecone and MongoDB Vector Search." },
  { title: "eCommerce & Headless", body: "Headless storefronts on Next.js with WordPress/WooCommerce over GraphQL, plus Shopify apps and custom storefronts." },
  { title: "Real-Time Systems", body: "WebSocket-based messaging and session-aware services with persistent, offline-capable experiences." },
];

export const pipelineSteps = [
  { id: "query", label: "Query", tooltip: "User intent in natural language" },
  { id: "embed", label: "Embed", tooltip: "Text to vectors (Gemini / OpenAI)" },
  { id: "search", label: "Vector Search", tooltip: "Pinecone · MongoDB Vector Search" },
  { id: "llm", label: "LLM", tooltip: "Gemini · Groq · OpenAI" },
  { id: "response", label: "Response", tooltip: "Grounded, context-aware answer" },
] as const;
```

## B3. `src/data/experience.ts`

```ts
import type { Experience } from "./types";

export const experience: readonly Experience[] = [
  {
    id: "mehdi",
    role: "Full-Stack Developer Intern",
    company: "Mehdi Technologies",
    location: "Islamabad",
    period: "Aug 2026 – Present",
    current: true,
    highlights: [
      "Develop and customize Shopify storefronts and applications using React, Node.js, REST APIs and responsive UI patterns.",
      "Built a Shopify quiz application (React, Node.js, REST APIs, Supabase) with automated discount fulfillment.",
      "Developed real-time Node.js services with WebSockets, Redis, Prisma and Supabase for streaming and session-aware data handling.",
      "Collaborate through Git/GitHub code reviews while extending Shopify functionality through custom apps.",
    ],
  },
  {
    id: "internee",
    role: "React Developer Intern",
    company: "Internee.pk",
    location: "Remote",
    period: "Jul 2025 – Sep 2025",
    highlights: [
      "Built reusable React/Next.js interfaces and integrated REST APIs for dynamic, responsive web applications.",
      "Improved frontend loading efficiency with code-splitting and lazy loading, reducing unnecessary initial asset delivery.",
      "Implemented responsive UI with Tailwind CSS; contributed through Git/GitHub, code reviews and Agile workflows.",
    ],
  },
  {
    id: "techcreator",
    role: "Web Developer Intern",
    company: "TechCreator",
    location: "Swabi",
    period: "Mar 2025 – Jun 2025 · Sep 2025 – Dec 2025",
    highlights: [
      "Developed responsive websites using HTML, CSS, JavaScript, WordPress and WooCommerce across two project engagements.",
      "Delivered eCommerce functionality: product layouts, payment gateway configuration, forms, staging/testing, migrations and production launches.",
      "Improved performance through caching and image optimization, and supported SEO with Yoast SEO.",
    ],
  },
];
```

## B4. `src/data/projects.ts`

```ts
import type { Project } from "./types";

export const projects: readonly Project[] = [
  {
    id: "taskconnect",
    title: "TaskConnect",
    tagline: "A geospatial services marketplace with AI-powered semantic search.",
    overview:
      "A MERN progressive web app that matches people with nearby service providers. Geospatial matching, JWT authentication and role-based access control sit on Dockerized REST APIs, while a Gemini-powered semantic search layer understands what users actually mean.",
    challenge:
      "Keyword search misses intent, and location queries get slow as listings grow.",
    solution:
      "Gemini embeddings with MongoDB Vector Search for intent matching, optimized geospatial queries for discovery, and an LLM listing assistant that helps providers write better tasks.",
    stack: ["Node.js", "Express.js", "React.js", "Tailwind CSS", "MongoDB", "Stripe", "Firebase FCM", "Google Maps", "Docker", "Jest", "Cypress", "Gemini"],
    highlights: [
      "Built a MERN marketplace with geospatial service matching, JWT authentication, RBAC and Dockerized REST APIs.",
      "Integrated Gemini semantic search with MongoDB Vector Search.",
      "Optimized MongoDB geospatial queries and added an LLM listing assistant.",
    ],
    metrics: [
      { label: "Match precision", value: "+30%", description: "Gemini semantic search with MongoDB Vector Search" },
      { label: "Discovery latency", value: "−40%", description: "Optimized MongoDB geospatial queries" },
      { label: "Task abandonment", value: "−20%", description: "LLM listing assistant" },
    ],
    demoUrl: "https://tasker-app-hazel.vercel.app/",
    architecture: [
      { id: "client", label: "Client PWA", layer: "client", description: "Installable React PWA with Tailwind UI.", tech: ["React.js", "Tailwind CSS"], linksTo: ["api"] },
      { id: "api", label: "Express API", layer: "api", description: "REST APIs secured with JWT and role-based access control.", tech: ["Node.js", "Express.js", "JWT", "RBAC"], linksTo: ["mongo"] },
      { id: "mongo", label: "MongoDB", layer: "data", description: "Geospatial queries and vector search in one database.", tech: ["MongoDB", "Geospatial", "Vector Search"], linksTo: ["gemini"] },
      { id: "gemini", label: "Gemini", layer: "ai", description: "Embeddings for semantic search and the LLM listing assistant.", tech: ["Gemini"] },
      { id: "stripe", label: "Stripe", layer: "service", description: "Payments.", tech: ["Stripe"] },
      { id: "fcm", label: "Firebase FCM", layer: "service", description: "Push notifications.", tech: ["Firebase FCM"] },
      { id: "maps", label: "Google Maps", layer: "service", description: "Maps and location display.", tech: ["Google Maps"] },
      { id: "docker", label: "Docker", layer: "infra", description: "Containerized API services.", tech: ["Docker", "Jest", "Cypress"] },
    ],
  },
  {
    id: "part-plumbing",
    title: "Part Plumbing",
    tagline: "A headless storefront with a RAG-powered support assistant.",
    overview:
      "A headless eCommerce platform built with Next.js and React, with WordPress/WooCommerce as the content and commerce backend exposed through GraphQL, and a retrieval-augmented support pipeline on top.",
    challenge:
      "Customers need fast product discovery and instant, accurate answers about plumbing parts.",
    solution:
      "Decoupled Next.js frontend over GraphQL, debounced product filtering, a RAG support pipeline (Gemini, Pinecone, Groq) and WhatsApp lead-generation flows.",
    stack: ["Next.js", "React", "Framer Motion", "Headless WordPress", "WooCommerce", "GraphQL", "Supabase", "Pinecone", "Gemini", "Groq", "Prompt Engineering"],
    highlights: [
      "Architected a headless eCommerce platform using Next.js/React with WordPress/WooCommerce exposed through GraphQL.",
      "Built a RAG-based customer-support pipeline using Gemini, Pinecone and Groq.",
      "Implemented debounced product filtering and WhatsApp lead-generation flows, improving product discovery and lead capture.",
    ],
    metrics: [
      { label: "Automated resolution", value: "+30%", description: "RAG-based customer-support pipeline" },
    ],
    demoUrl: "https://parts-plumbing.vercel.app/",
    architecture: [
      { id: "storefront", label: "Next.js Storefront", layer: "client", description: "Headless React frontend with Framer Motion.", tech: ["Next.js", "React", "Framer Motion"], linksTo: ["graphql"] },
      { id: "graphql", label: "GraphQL", layer: "api", description: "Typed data layer between storefront and commerce backend.", tech: ["GraphQL"], linksTo: ["wp"] },
      { id: "wp", label: "WordPress / WooCommerce", layer: "data", description: "Headless CMS and commerce backend.", tech: ["Headless WordPress", "WooCommerce"] },
      { id: "embed", label: "Embed", layer: "ai", description: "Turns support questions into vectors.", tech: ["Gemini"], linksTo: ["pinecone"] },
      { id: "pinecone", label: "Pinecone", layer: "ai", description: "Retrieves the most relevant knowledge-base chunks.", tech: ["Pinecone", "Knowledge Base"], linksTo: ["llm"] },
      { id: "llm", label: "Gemini / Groq", layer: "ai", description: "Generates grounded answers from retrieved context.", tech: ["Gemini", "Groq", "Prompt Engineering"] },
      { id: "whatsapp", label: "WhatsApp Leads", layer: "service", description: "Lead-generation flow for customer inquiries.", tech: ["WhatsApp"] },
    ],
  },
  {
    id: "ai-chat",
    title: "AI Real-Time Chat",
    tagline: "Real-time messaging with an AI conversation layer.",
    overview:
      "A real-time progressive web app using WebSockets for bidirectional messaging with persistent, offline-capable sessions, OAuth sign-in and OpenAI-powered conversational features.",
    challenge:
      "Keep conversations real-time, persistent and resilient offline.",
    solution:
      "WebSockets for bidirectional messaging, Supabase for persistence and sessions, Firebase auth with Google/GitHub OAuth, and Dockerized backend services.",
    stack: ["Node.js", "Express.js", "WebSockets", "React.js", "Supabase", "Firebase", "OAuth", "Docker", "OpenAI API"],
    highlights: [
      "Developed a real-time PWA using WebSockets with persistent, offline-capable sessions.",
      "Integrated Firebase authentication with Google/GitHub OAuth and OpenAI-powered conversational features.",
      "Containerized backend services with Docker; Supabase for persistent data and session management.",
    ],
    metrics: [],
    demoUrl: "https://chat-bot-beige-chi.vercel.app/",
    architecture: [
      { id: "pwa", label: "React PWA", layer: "client", description: "Offline-capable chat client.", tech: ["React.js"], linksTo: ["ws"] },
      { id: "ws", label: "WebSocket Server", layer: "api", description: "Bidirectional real-time messaging.", tech: ["Node.js", "Express.js", "WebSockets"], linksTo: ["supabase"] },
      { id: "supabase", label: "Supabase", layer: "data", description: "Persistent data and session management.", tech: ["Supabase"] },
      { id: "auth", label: "Firebase Auth", layer: "service", description: "Google and GitHub OAuth sign-in.", tech: ["Firebase", "OAuth"] },
      { id: "openai", label: "OpenAI API", layer: "ai", description: "Conversational AI features.", tech: ["OpenAI API"] },
      { id: "docker", label: "Docker", layer: "infra", description: "Containerized backend services.", tech: ["Docker"] },
    ],
  },
];
```

## B5. `src/data/skills.ts`

```ts
import type { SkillGroup, SkillRelation } from "./types";

export const skillGroups: readonly SkillGroup[] = [
  { id: "frontend", label: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Redux Toolkit"] },
  { id: "backend", label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "GraphQL", "API Integration"] },
  { id: "data", label: "Data", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Pinecone", "Prisma", "Redis"] },
  { id: "ai", label: "AI & Vector", items: ["RAG", "LLM Integration (OpenAI, Gemini, Groq)", "Semantic Search", "AI Chatbots", "MongoDB Vector Search"] },
  { id: "auth", label: "Auth & Security", items: ["JWT", "OAuth 2.0", "Role-Based Access Control"] },
  { id: "devops", label: "DevOps & Cloud", items: ["Git", "GitHub", "Docker", "Firebase", "CI/CD", "Vercel", "Jest", "Cypress", "Postman", "Linux"] },
];

export const skillRelations: readonly SkillRelation[] = [
  { skill: "RAG", related: ["Pinecone", "Gemini", "Groq", "OpenAI"] },
  { skill: "Semantic Search", related: ["MongoDB Vector Search", "Gemini"] },
  { skill: "Next.js", related: ["React.js", "TypeScript", "Vercel"] },
  { skill: "Node.js", related: ["Express.js", "WebSockets", "REST APIs"] },
  { skill: "Docker", related: ["CI/CD", "Linux"] },
];
```

## B6. `src/data/index.ts`

```ts
export * from "./types";
export * from "./profile";
export * from "./experience";
export * from "./projects";
export * from "./skills";
```

---

# PART C: COPILOT PROMPT SEQUENCE

Run these in order in Copilot Agent. After each: `npx tsc --noEmit && npm run lint && npm run build`, then `git add -A && git commit -m "phase N"`. If Copilot drifts, `git checkout .` and re-prompt with tighter scope.

## Prompt 0: Rules (update `.github/copilot-instructions.md`)

```markdown
# Project rules
- Next.js App Router, TypeScript strict, Tailwind, Framer Motion, Shadcn UI.
- Path alias @/* -> src/*. All personal content lives in src/data/*.ts.
- Flat components in src/components/; new effects go in src/components/fx/.
- Single-page site. No new routes except app/api/contact.
- Never hardcode names, copy, links or metrics in JSX. Import from @/data.
- Never invent metrics, employers, repos or links. Omit a field if it is not in src/data.
- Do not touch tailwind.config.ts, globals.css tokens or components.json unless told.
- Preserve every className, Framer Motion variant and wrapper element unless the task says otherwise.
- "use client" only where state, effects or motion are needed.
- No Redis, no external state libraries. React Context for shared UI state.
- Respect prefers-reduced-motion in every animation. No `any`.
- Finish by running `npx tsc --noEmit`, fix errors, and list every file touched.
```

## Prompt 1: Data layer

```markdown
## Task
Create the typed content layer in src/data/. Do NOT edit any component, layout, style or config file.

## Files to create
src/data/types.ts, profile.ts, experience.ts, projects.ts, skills.ts, index.ts

## Source
Use the exact contents of sections B1–B6 in docs/COPILOT_CONTENT_PACK.md.
Copy them verbatim. Do not rewrite, reorder or add claims.

## Verify
Run `npx tsc --noEmit` and list every file created.
```

## Prompt 2: Cleanup of previous-owner content + rename

```markdown
## Task
Remove all leftover content from the previous owner and fix the misspelled filename. Change no styling.

## Steps
1. `git mv src/components/technoloies.tsx src/components/technologies.tsx` and fix every import.
2. Delete the stray files `thunder-collection_Next Auth.json` and `change theme` from the repo root
   (first show me their contents in your summary).
3. In src/components/portfolio.tsx remove all Anonify and Eato data and their special-case modal branches.
   Leave the card/modal structure intact; it will be data-driven in the next prompt.
4. Search the whole repo for "Arham", "Saleem", "CodeWithPsych", "Anonify", "Eato", "HK developer", "HK Developer".
   Report every hit, then replace with profile.name / profile.initials from @/data.

## Verify
`npx tsc --noEmit`, `npm run build`. List files touched.
```

## Prompt 3: Content injection (part 1: shell)

```markdown
## Task
Replace hardcoded text with imports from @/data WITHOUT changing styling, classNames,
layout or animation variants.

## Files
- src/app/layout.tsx: metadata title, description, keywords, openGraph.title from profile.seo
- src/components/PageLoader.tsx: status lines ["Booting workspace","Loading interfaces","Connecting services","Ready"],
  brand profile.initials, subtitle "Full-Stack · AI Integration · Next.js"
- src/components/navbar.tsx: navItems and profile.resumeUrl; keep active-state logic
- src/components/heroSection.tsx: profile.roles for the rotating line, profile.name, profile.valueProp,
  status pill "Open to opportunities", CTAs "View My Work" (#portfolio), "Download Resume" (profile.resumeUrl)
- src/components/footer.tsx: profile.name, tagline "Full-Stack Developer · AI Integrator",
  credit "Built with Next.js & Tailwind CSS", GitHub + email links

## Rules
If a slot is missing, add an optional prop. Do not restructure markup.
Verify and list every file touched.
```

## Prompt 4: Content injection (part 2: sections)

```markdown
## Task
Make the section components data-driven. Preserve styling and animations.

## Files
- src/components/terminalLive.tsx: use the terminal script from section A9 of docs/COPILOT_CONTENT_PACK.md
  (commands about --engineer, skills --stack, services --deployment). Build the output lines from
  profile + skillGroups where possible; keep the typing/keyboard-sound logic untouched.
- src/components/experience.tsx: map over `experience` (3 entries). Remove the dead/commented entries.
  Show period, role, company, location and highlights. Mark `current` with the existing "active" style.
- src/components/portfolio.tsx: map over `projects`. Each card shows title, tagline, stack chips, metrics and
  a "Live Demo" link (demoUrl). Render a GitHub button only if githubUrl exists.
  Modal shows overview, challenge, solution, highlights, metrics, architecture nodes (simple list for now).
- src/components/technologies.tsx: map over skillGroups. Remove the commented-out skeleton data.
- src/components/SocialLinks.tsx: GitHub and Email only. Do not add LinkedIn.
- Add an "About" block (in an existing section if present, otherwise a new src/components/about.tsx placed in page.tsx
  between hero and tech): profile.summary, the 4 `expertise` cards, education, certifications.

## Verify
`npx tsc --noEmit` and `npm run build`. List files touched and any fields with no matching UI slot.
```

## Prompt 5: Contact

```markdown
## Task
Audit src/components/contact.tsx before changing it.

1. Report which mail service it uses (EmailJS / Resend / Nodemailer / other), which env vars it needs,
   and whether the build fails when they are missing.
2. Update copy only: heading "Let's Build Something Together", sub "Have a project, an internship or a role in mind?
   Send a message and I'll get back to you.", success "Message sent. Thanks for reaching out!",
   error "Couldn't send your message. Please try again."
3. Update .envsample with every required variable (no real values).
Do NOT change submit logic in this phase.
```

Then, if you want a native endpoint:

```markdown
## Task
Create app/api/contact/route.ts: POST only, zod validation (firstName, lastName, email, message),
hidden honeypot field, simple in-memory rate limit by IP, send through Resend using
RESEND_API_KEY and CONTACT_TO_EMAIL. Share the zod schema in src/utils/schemas.ts.
Update contact.tsx to call it with loading/success/error states. Keep all existing styling.
```

## Prompt 6: FX primitives (create only, don't wire)

```markdown
## Task
Create these in src/components/fx/. Do not wire them into any section yet.
- ParticleField.tsx: canvas, 80–120 nodes, neighbors linked within 120px, cursor repels nodes,
  rAF loop, pause on document.visibilitychange, DPR capped at 2, disabled on prefers-reduced-motion and on mobile.
- Spotlight.tsx: global cursor spotlight with useMotionValue + useMotionTemplate radial-gradient.
- SpotlightCard.tsx: wrapper setting --mx/--my CSS vars for a glow border.
- PipelineFlow.tsx: SVG flow Query → Embed → Vector Search → LLM → Response using `pipelineSteps` from @/data,
  pathLength edge animation, a glowing packet along each edge, hover tooltips.
- MagneticButton.tsx: useSpring offset within ~80px.
- SplitText.tsx: per-character stagger reveal.
Use theme colors from the existing Tailwind config. Strong typing, no `any`.
```

## Prompt 7: Wire the hero and replace the Spline orb

```markdown
## Task
1. In heroSection.tsx add ParticleField (behind content), Spotlight, SplitText on the name, and PipelineFlow
   below the value prop. Keep existing layout and classNames.
2. Remove SplineScrollOrb.tsx and all references in ClientProviders.tsx / page.tsx / any section using scroll slots.
   Uninstall the Spline packages from package.json and run `npm install`.
3. Lazy-load ParticleField with next/dynamic (ssr: false).
Verify the build and report bundle-size change if available.
```

## Prompt 8: Project showcase and modals

```markdown
## Task
Build src/context/ProjectModalContext.tsx (open/close, active project id) and upgrade portfolio.tsx to use it.
Modal renders in one portal, closes on Esc and backdrop, traps focus, never changes routes.

Create in src/components/projects/ (lazy-loaded inside the modal):
- ArchitectureDiagram.tsx: renders `project.architecture` by `layer`; nodes highlight in sequence; clicking a node shows
  its description and tech in a side panel. Works for all 3 projects from data alone.
- TaskConnectDemo.tsx: radar-style SVG grid with provider pins, a rotating sweep that pulses pins,
  a draggable radius ring that filters pins; semantic search demo that re-ranks result cards with Framer `layout`;
  animated counters for the project's three metrics (values come from data, triggered by useInView).
- PartPlumbingDemo.tsx: RAG replay stepper (Embed → Pinecone top-k → Context → Gemini/Groq → Answer) with
  play/pause/step; headless split-view with a GraphQL packet animation; debounce-300ms filter demo;
  metric +30% from data.
- Chat card for AI Real-Time Chat: typing indicator + message bubble loop + "connected" pulse.
All demo content is illustrative sample data, labelled "Interactive demo". Never display it as real user data.
```

## Prompt 9: Skill ecosystem

```markdown
## Task
Upgrade technologies.tsx into a filterable skill ecosystem using `skillGroups` and `skillRelations`.
Group filter tabs, SpotlightCard per group, and hover-linking: hovering a skill with a relation highlights its
related skills and dims the rest. Keyboard accessible. Preserve theme.
```

## Prompt 10: Polish and ship

```markdown
## Task
1. Convert heavy components to next/dynamic. Use next/font (already Geist). Add OG image and metadata.
2. Accessibility: focus states, aria labels, alt text, keyboard-closable modals, prefers-reduced-motion audit of every animation.
3. Move client logic out of src/app/page.tsx so page.tsx can be a server component composing sections.
4. Confirm `.env.local` is git-ignored (`git check-ignore .env.local`).
5. Run `npm run lint && npx tsc --noEmit && npm run build` and report results.
6. Produce docs/CHANGELOG.md summarizing each phase and every file changed.
```

## Final check before deploy

- Put `Hamza_Khan_CV.pdf` in `/public` (with the `Internee.pk` typo fixed).
- Test the resume link, all three Live Demo links, the contact form on the deployed URL, and mobile widths.
- Set env vars in Vercel, not in the repo.
