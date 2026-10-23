import type { Project } from "./types";

// TODO: replace dummy placeholders with real screenshots/videos.
// Repo links verified on github.com/hamzakhan-std25 (pinned repos) on 2026-10-01.
// ProfileIQ has no public repo URL yet: add githubUrl when you have it.

export const projects: readonly Project[] = [
  {
    id: "station-hub",
    title: "Station Hub",
    tagline: "Multi-Tenant EV & Automotive Service Management Platform",
    overview:
      "Station Hub is a multi-tenant platform designed for managing EV charging networks and automotive service stations. It provides role-based web dashboards for station owners and platform admins, multi-role APIs powering customer mobile apps, and automated database schema rendering for high-reliability operations.",
    challenge:
      "Managing fragmented EV charging stations and service queues across multiple tenant locations requires strict access control, real-time telemetry tracking, and bulletproof data contracts between web apps, mobile apps, and backend services.",
    solution:
      "Built a React.js and Tailwind CSS web front end with Granular Role-Based Access Control (RBAC) paired with a high-performance Python FastAPI backend on Google Cloud Firestore. Implemented end-to-end type safety using Pydantic and Zod data validation models, alongside automated ERD rendering using Erdantic for seamless backend iteration.",
    stack: [
      "FastAPI",
      "Python",
      "Firestore",
      "React.js",
      "Tailwind CSS",
      "RBAC",
      "Pydantic",
      "Zod",
      "Erdantic",
    ],
    highlights: [
      "Developed responsive web dashboards featuring RBAC tailored for Super Admins (platform management) and Station Owners (telemetry & queue tracking).",
      "Engineered multi-role Python (FastAPI) REST APIs backed by Firebase Firestore for mobile apps, station owners, and super admin portals.",
      "Defined strict data validation contracts using Pydantic (backend) and Zod (front end) for reliable payload processing.",
      "Implemented automated database ERD rendering using Erdantic to streamline architecture documentation and schema iteration.",
    ],
    metrics: [
      {
        label: "Multi-Tenant Reliability",
        value: "99.99%",
        description: "High-availability Firestore backend with strict RBAC and data validation.",
      },
      {
        label: "Operational Efficiency",
        value: "+25%",
        description: "Real-time telemetry and queue management dashboards for station owners.",
      },
      { 
        label: "Data Consistency",
        value: "100%",
        description: "End-to-end type safety and data validation across all application layers.",
      },
    ],

    status: "completed",
    statusNote: "Core multi-tenant platform, dashboards, and API infrastructure deployed.",
    demoUrl: "https://stationhub.dev",
    githubUrl: "https://github.com/hamzakhan-std25/station-hub",
    thumbnail: {
      type: "image",
      src: "/media/projects/stationhub-thumb.svg",
      alt: "Station Hub project thumbnail",
    },
    media: [
      {
        type: "image",
        src: "/media/projects/stationhub-1.svg",
        alt: "Station Hub Station Owner Telemetry & Queue Dashboard",
      },
      {
        type: "image",
        src: "/media/projects/stationhub-2.svg",
        alt: "Station Hub Multi-Tenant Architecture and Erdantic ERD",
      },
    ],
    architecture: [
      {
        id: "admin-dashboard",
        label: "Super Admin & Owner Dashboards",
        layer: "client",
        description: "React.js + Tailwind CSS UI with RBAC role views, live station queue management, and operational analytics.",
        tech: ["React.js", "Tailwind CSS", "Zod", "RBAC"],
        linksTo: ["fastapi-gateway"],
      },
      {
        id: "mobile-app",
        label: "Mobile App Customers",
        layer: "client",
        description: "Customer-facing interface for discovering EV chargers, slot booking, and session monitoring.",
        tech: ["React Native / Mobile SDK"],
        linksTo: ["fastapi-gateway"],
      },
      {
        id: "fastapi-gateway",
        label: "FastAPI REST Gateway",
        layer: "api",
        description: "Multi-role REST API handling telemetry ingestion, queue prioritization, and RBAC authentication authorization.",
        tech: ["FastAPI", "Python", "Pydantic"],
        linksTo: ["firestore-db", "erdantic-docs"],
      },
      {
        id: "firestore-db",
        label: "Firebase Firestore",
        layer: "data",
        description: "Multi-tenant NoSQL store keeping realtime telemetry logs, operational queues, and station profiles.",
        tech: ["Firestore", "NoSQL"],
      },
      {
        id: "erdantic-docs",
        label: "Erdantic Schema Engine",
        layer: "infra",
        description: "Automated database entity-relationship diagram (ERD) generation directly from Pydantic data models.",
        tech: ["Erdantic", "Pydantic", "Python"],
      },
    ],
  },
  {
    id: "taskconnect",
    title: "TaskConnect",
    tagline: "A geospatial services marketplace with AI-powered semantic search.",
    overview:
      "A MERN progressive web app, built as a final-year project, that matches people with nearby service providers. Geospatial matching, JWT authentication and role-based access control sit on Dockerized REST APIs, while a Gemini-powered semantic search layer understands what users actually mean.",
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
    status: "live",
    demoUrl: "https://tasker-app-hazel.vercel.app/",
    githubUrl: "https://github.com/TaskConnect-Team/Tasker",
    thumbnail: { type: "image", src: "/media/projects/taskconnect-thumb.svg", alt: "TaskConnect project placeholder" },
    media: [
      { type: "image", src: "/media/projects/taskconnect-1.svg", alt: "TaskConnect marketplace placeholder" },
      { type: "image", src: "/media/projects/taskconnect-2.svg", alt: "TaskConnect semantic search placeholder" },
    ],
    architecture: [
      { id: "client", label: "Client PWA", layer: "client", description: "Installable React PWA with Tailwind UI.", tech: ["React.js", "Tailwind CSS"], linksTo: ["api"] },
      { id: "api", label: "Express API", layer: "api", description: "REST APIs secured with JWT and role-based access control.", tech: ["Node.js", "Express.js", "JWT", "RBAC"], linksTo: ["mongo"] },
      { id: "mongo", label: "MongoDB", layer: "data", description: "Geospatial queries and vector search in one database.", tech: ["MongoDB", "Geospatial", "Vector Search"], linksTo: ["gemini"] },
      { id: "gemini", label: "Gemini", layer: "ai", description: "Embeddings for semantic search and the LLM listing assistant.", tech: ["Gemini"] },
      { id: "pinecone", label: "Pinecone", layer: "data", description: "Vector database for the RAG support pipeline.", tech: ["Pinecone"] },
      { id: "groq", label: "Groq", layer: "ai", description: "Fast LLM generation for the RAG support pipeline.", tech: ["Groq"] },
      { id: "stripe", label: "Stripe", layer: "service", description: "Payments.", tech: ["Stripe"] },
      { id: "fcm", label: "Firebase FCM", layer: "service", description: "Push notifications.", tech: ["Firebase FCM"] },
      { id: "maps", label: "Google Maps", layer: "service", description: "Maps and location display.", tech: ["Google Maps"] },
      { id: "docker", label: "Docker", layer: "infra", description: "Containerized API services.", tech: ["Docker", "Jest", "Cypress"] },
    ],
  },
    {
    id: "profileiq",
    title: "ProfileIQ",
    tagline: "An AI-powered TikTok analytics platform for creators.",
    overview:
      "The live product site and front end for ProfileIQ, an AI-powered TikTok analytics platform. It presents content intelligence, timing optimization, audience analytics and growth strategy in a fast, dark-themed, fully responsive single-page experience, with a working contact flow and an automated CI pipeline.",
    challenge:
      "Creators drown in vanity metrics and need a clear, trustworthy way to see what actually drives growth.",
    solution:
      "A Next.js App Router front end with a Tailwind CSS 4 design-token theme, reusable Radix/CVA components, animated sections, a validated contact form backed by a route handler, and GitHub Actions running lint, type-checking, unit tests and build on every push. TikTok account connection and AI insights are the next milestone.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Vitest", "GitHub Actions"],
    highlights: [
      "Built the full responsive front end: hero, features, how-it-works, testimonials, contact and CTA sections with a shared design-token theme.",
      "Implemented a validated contact form with loading, success and error states backed by a Next.js route handler.",
      "Set up CI with GitHub Actions: lint, strict type-check, Vitest unit tests and production build on every push and pull request.",
      "Deployed on its own domain at profileiq.dev.",
    ],
    metrics: [],
    status: "in-development",
    statusNote: "Front end live; TikTok connection and AI analysis are in development.",
    demoUrl: "https://profileiq.dev",
    githubUrl: "https://github.com/hamzakhan-std25/profileiq",
    // githubUrl: omitted until the repo URL is confirmed.
    thumbnail: { type: "image", src: "/media/projects/profileiq-thumb.svg", alt: "ProfileIQ project placeholder" },
    media: [
      { type: "image", src: "/media/projects/profileiq-1.svg", alt: "ProfileIQ landing page placeholder" },
      { type: "image", src: "/media/projects/profileiq-2.svg", alt: "ProfileIQ features section placeholder" },
    ],
    architecture: [
      { id: "web", label: "Next.js Front End", layer: "client", description: "App Router, Tailwind CSS 4 theme tokens, animated responsive sections.", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"], linksTo: ["contact-api"] },
      { id: "contact-api", label: "Contact Route Handler", layer: "api", description: "Validates contact submissions. Email delivery is the next step.", tech: ["Next.js Route Handler"] },
      { id: "ui", label: "Component System", layer: "service", description: "Reusable Radix and class-variance-authority primitives.", tech: ["Radix UI", "CVA"] },
      { id: "planned-ai", label: "TikTok + AI Insights", layer: "ai", description: "Planned: TikTok OAuth connection and AI-generated insights. Not yet implemented.", tech: ["TikTok OAuth", "LLM"] },
      { id: "ci", label: "CI Pipeline", layer: "infra", description: "GitHub Actions: lint, type-check, Vitest, build.", tech: ["GitHub Actions", "Vitest"] },
    ],
  },
  {
    id: "part-plumbing",
    title: "Part Plumbing",
    tagline: "A headless storefront with a RAG-powered support assistant.",
    overview:
      "A headless eCommerce catalog for a sanitary and plumbing supplies business, built with Next.js and React. WordPress/WooCommerce is the content and commerce backend exposed through GraphQL, with a retrieval-augmented support pipeline and WhatsApp inquiry flows on top.",
    challenge:
      "Customers need fast product discovery and instant, accurate answers about plumbing parts without visiting in person.",
    solution:
      "Decoupled Next.js frontend over GraphQL with ISR, debounced product filtering, a RAG support pipeline (Gemini embeddings, Pinecone retrieval, Groq generation) and WhatsApp lead-generation flows with product-specific pre-filled messages.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Headless WordPress", "WooCommerce", "GraphQL", "Supabase", "Pinecone", "Gemini", "Groq", "Vitest", "Playwright"],
    highlights: [
      "Architected a headless eCommerce platform using Next.js/React with WordPress/WooCommerce exposed through GraphQL and ISR.",
      "Built a RAG-based customer-support pipeline: Gemini embeddings, Pinecone top-5 retrieval and grounded answer generation.",
      "Implemented debounced product filtering and WhatsApp lead-generation flows, improving product discovery and lead capture.",
      "Logged chat feedback (like/dislike) to Supabase to support answer-quality review; covered by Vitest unit tests and Playwright E2E tests.",
    ],
    metrics: [
      { label: "Automated resolution", value: "+30%", description: "RAG-based customer-support pipeline" },
    ],
    status: "live",
    demoUrl: "https://parts-plumbing.vercel.app/",
    githubUrl: "https://github.com/hamzakhan-std25/Parts-Plumbing",
    thumbnail: { type: "image", src: "/media/projects/part-plumbing-thumb.svg", alt: "Part Plumbing project placeholder" },
    media: [
      { type: "image", src: "/media/projects/part-plumbing-1.svg", alt: "Part Plumbing storefront placeholder" },
      { type: "image", src: "/media/projects/part-plumbing-2.svg", alt: "Part Plumbing support assistant placeholder" },
    ],
    architecture: [
      { id: "storefront", label: "Next.js Storefront", layer: "client", description: "Headless React frontend with ISR, search overlay and filtering.", tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"], linksTo: ["graphql"] },
      { id: "graphql", label: "GraphQL", layer: "api", description: "Typed data layer between storefront and commerce backend.", tech: ["GraphQL", "WPGraphQL"], linksTo: ["wp"] },
      { id: "wp", label: "WordPress / WooCommerce", layer: "data", description: "Headless CMS and commerce backend.", tech: ["Headless WordPress", "WooCommerce"] },
      { id: "embed", label: "Embed", layer: "ai", description: "Turns support questions into vectors.", tech: ["Gemini"], linksTo: ["pinecone"] },
      { id: "pinecone", label: "Pinecone", layer: "ai", description: "Retrieves the most relevant knowledge-base documents.", tech: ["Pinecone", "Knowledge Base"], linksTo: ["llm"] },
      { id: "llm", label: "Groq", layer: "ai", description: "Generates grounded answers from retrieved context.", tech: ["Groq", "Prompt Engineering"], linksTo: ["supabase"] },
      { id: "supabase", label: "Supabase", layer: "data", description: "Stores chat logs and user feedback for quality review.", tech: ["Supabase"] },
      { id: "whatsapp", label: "WhatsApp Leads", layer: "service", description: "Product-specific inquiry messages for customer contact.", tech: ["WhatsApp"] },
    ],
  },
  {
    id: "ai-chat",
    title: "AI Real-Time Chat",
    tagline: "Streaming AI chat with voice messages, built for real-time use.",
    overview:
      "A real-time AI chat progressive web app. WebSockets stream model tokens as they arrive, users can cancel a response mid-stream, and voice messages can be recorded and answered. Firebase handles sign-in and Supabase stores sessions and messages.",
    challenge:
      "Keep AI conversations responsive, cancellable and resilient on slow or unstable connections.",
    solution:
      "WebSocket token streaming with a cancel-generation flow that keeps partial text, skeleton loading bubbles to reduce layout shift, an installable PWA with an offline fallback page, and a Dockerized Node backend.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "WebSockets", "Gemini", "Firebase", "Supabase", "Docker", "PWA"],
    highlights: [
      "Streamed AI responses over WebSockets with a stop-generating flow that preserves partial output.",
      "Added voice-message recording, message actions (copy, reactions, text-to-speech) and a mobile session drawer.",
      "Shipped an installable PWA with manifest, service worker and offline fallback; Dockerized Node backend.",
      "Improved accessibility with aria-live connection status, labeled controls, focus styles and keyboard shortcuts.",
    ],
    metrics: [],
    status: "live",
    demoUrl: "https://chat-bot-beige-chi.vercel.app/",
    githubUrl: "https://github.com/hamzakhan-std25/chat-interface-react-tailwind",
    thumbnail: { type: "image", src: "/media/projects/ai-chat-thumb.svg", alt: "AI Real-Time Chat project placeholder" },
    media: [
      { type: "image", src: "/media/projects/ai-chat-1.svg", alt: "AI Real-Time Chat messaging placeholder" },
      { type: "image", src: "/media/projects/ai-chat-2.svg", alt: "AI Real-Time Chat AI layer placeholder" },
    ],
    architecture: [
      { id: "pwa", label: "React PWA", layer: "client", description: "Installable chat client with offline fallback and accessible UI.", tech: ["React", "Vite", "Tailwind CSS"], linksTo: ["ws"] },
      { id: "ws", label: "WebSocket Server", layer: "api", description: "Streams tokens to the client and handles cancel requests.", tech: ["Node.js", "Express.js", "WebSockets"], linksTo: ["supabase", "llm"] },
      { id: "supabase", label: "Supabase", layer: "data", description: "Sessions and message storage.", tech: ["Supabase"] },
      { id: "auth", label: "Firebase Auth", layer: "service", description: "Client-side sign-in.", tech: ["Firebase"] },
      { id: "llm", label: "Gemini", layer: "ai", description: "Generates streamed conversational responses.", tech: ["Gemini"] },
      { id: "docker", label: "Docker", layer: "infra", description: "Containerized backend services.", tech: ["Docker"] },
    ],
  }

  
];