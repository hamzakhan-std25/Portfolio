"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/data";
import { CollapsibleSection } from "@/components/ui/collapsibleSection";

const MOBILE_COLLAPSED_HEIGHT = 480;
const DESKTOP_COLLAPSED_HEIGHT = 560;

const techColors = ["#61DAFB", "#68A063", "#A855F7", "#F59E0B", "#22D3EE", "#F472B6"];
const techBackgrounds = ["#0a1628", "#0d1a0d", "#120e1f", "#1f1605", "#071620", "#24101d"];

// 1. Updated the engine mapper to capture the dynamic icon from group.items
const TECH_STACK = skillGroups.flatMap((group, groupIndex) =>
  group.items.map((item) => ({
    name: item.name,
    icon: item.icon, // Keeps reference to the Lucide icon component
    color: techColors[groupIndex % techColors.length],
    bg: techBackgrounds[groupIndex % techBackgrounds.length],
    category: group.label,
  })),
);

function TechCard({ tech, index, isInView }: {
  tech: (typeof TECH_STACK)[number];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    setTilt({ x: y * -10, y: x * 10 });
  }, []);

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  // 2. Destructure the icon property into a Capitalized variable so JSX recognizes it as a React Component
  const IconComponent = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.05s linear" : "transform 0.4s ease",
        }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ border: `1px solid ${tech.color}40` }}
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* 3. Replaced text-slice layout with the dynamic Lucide Icon wrapper */}
          <div
            className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ background: tech.bg, color: tech.color, border: `1px solid ${tech.color}30` }}
          >
            {IconComponent ? (
              <IconComponent className="h-6 w-6 stroke-[1.75]" />
            ) : (
              <span className="text-sm font-bold">{tech.name.slice(0, 2).toUpperCase()}</span>
            )}
          </div>
          
          <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">{tech.category}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...skillGroups.map((group) => group.label)];
  const filteredTech = filter === "All" ? TECH_STACK : TECH_STACK.filter((t) => t.category === filter);

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="relative overflow-hidden bg-black mt-16 lg:mt-0"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Heading — centered */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400"
          >
            MY CORE ENGINE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
          >
            Tech Stack &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Strategy
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 mx-auto max-w-xl text-sm leading-relaxed text-neutral-500 md:text-base"
          >
            An engineered ecosystem of AI models, automation layers, and high-throughput backend systems designed to optimize business operations.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                filter === cat
                  ? "bg-violet-600 text-white"
                  : "border border-white/10 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <CollapsibleSection
          collapsedHeight={{ base: MOBILE_COLLAPSED_HEIGHT, lg: DESKTOP_COLLAPSED_HEIGHT }}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {filteredTech.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} isInView={isInView} />
            ))}
          </div>
        </CollapsibleSection>
      </div>
    </section>
  );
}
