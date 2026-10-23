import type { NavItem, Profile, ExpertiseCard } from "./types";

export const profile: Profile = {
    name: "Hamza Khan",
    initials: "HK",
    title: "Full-Stack Software Developer",
    roles: ["Full-Stack Developer", "AI Integrator", "RAG Builder"],
    email: "hamzakhan.cs25@gmail.com",
    phone: "+923118688410",
    github: "https://github.com/hamzakhan-std25",
    linkedin: "https://www.linkedin.com/in/hamzakhan-std25",
    youtube: "https://www.youtube.com/@hamzakhan-std25",
    facebook: "https://www.facebook.com/hamzakhan-std25",
    twitter: "https://twitter.com/hamzakhan-std25",
    instagram: "https://www.instagram.com/hamzakhan-std25",
    tiktok: "https://www.tiktok.com/@hamzakhan-std25",
    location: "Islamabad, Pakistan",
    summary:
        "I'm a full-stack software developer who enjoys owning a feature end to end, from the database schema and API design to the pixel-level interface. My core stack is React, Next.js, TypeScript and Node.js, with MongoDB, PostgreSQL and Supabase behind it. I also specialize in AI-integrated features such as RAG pipelines, semantic search and LLM-powered assistants. I care about performance, clean API architecture and Git-based team workflows, and I've shipped web apps, real-time systems and eCommerce platforms to production.",
    valueProp:
        "I build fast, production-ready web apps with React, Next.js and Node.js, and I add the AI layer, from semantic search to RAG support bots, that makes them smarter.",
    resumeUrl: "/files/Hamza_Khan_CV.pdf",
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
    { label: "Tech Stack", href: "#technologies" },
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

export const contactContent = {
    heading: "Let's Build Something Together",
    subheading:
        "Have a project, an internship or a role in mind? Send a message and I'll get back to you.",
    availability: "Open to opportunities",
} as const;

export const heroStats = [
    { value: "3", label: "Live Projects" },
    { value: "3", label: "Internships" },
    { value: "3.45", label: "CS GPA" },
] as const;

export const pipelineSteps = [
    { id: "query", label: "Query", tooltip: "User intent in natural language" },
    { id: "embed", label: "Embed", tooltip: "Text to vectors (Gemini / OpenAI)" },
    { id: "search", label: "Vector Search", tooltip: "Pinecone · MongoDB Vector Search" },
    { id: "llm", label: "LLM", tooltip: "Gemini · Groq · OpenAI" },
    { id: "response", label: "Response", tooltip: "Grounded, context-aware answer" },
] as const;
