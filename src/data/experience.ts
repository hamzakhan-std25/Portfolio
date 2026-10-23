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
