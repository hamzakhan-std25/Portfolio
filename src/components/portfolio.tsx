"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  X,
} from "lucide-react";

import { motion, useInView } from "framer-motion";
import { projects } from "@/data";

const projectGradients = [
  "from-cyan-500 to-blue-600",
  "from-purple-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [loadedThumbnails, setLoadedThumbnails] = useState<Record<string, boolean>>({});
  const [loadedMediaSrc, setLoadedMediaSrc] = useState<string | null>(null);

  const activeMedia = selectedProject?.media[activeMediaIndex];

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      } else if (event.key === "ArrowLeft") {
        setActiveMediaIndex((current) =>
          current === 0 ? selectedProject.media.length - 1 : current - 1,
        );
      } else if (event.key === "ArrowRight") {
        setActiveMediaIndex((current) => (current + 1) % selectedProject.media.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    setLoadedMediaSrc(null);
  }, [activeMedia?.src]);

  const openProject = (project: (typeof projects)[number]) => {
    setActiveMediaIndex(0);
    setSelectedProject(project);
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_70%)]" />

      <div ref={ref} className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            A Glimpse Into My
 <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Recent Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-400 md:text-lg">
            Crafting immersive digital experiences using modern web technologies
            and scalable architectures.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const gradient = projectGradients[index % projectGradients.length];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative z-10">
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                    {!loadedThumbnails[project.id] && (
                      <div className="absolute inset-0 bg-white/[0.08]" aria-hidden="true" />
                    )}
                    <Image
                      src={project.thumbnail.src}
                      alt={project.thumbnail.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className={`object-cover transition-opacity duration-300 ${loadedThumbnails[project.id] ? "opacity-100" : "opacity-0"}`}
                      onLoad={() => setLoadedThumbnails((current) => ({ ...current, [project.id]: true }))}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-neutral-400">
                    {project.tagline}
                  </p>

                  {/* Tags */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-all hover:border-cyan-400 hover:bg-cyan-500/10"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 ${gradient}`}
                    >
                      <ExternalLink className="h-4 w-4 flex-shrink-0" />
                      Live Demo
                    </a>
                    <button
                      onClick={() => openProject(project)}
                      className="rounded-xl border border-white/10 px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <div className="relative z-10">
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
                className="absolute right-0 top-0 rounded-full p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <h2 id="project-modal-title" className="pr-10 text-2xl font-bold text-white">{selectedProject.title}</h2>
              {activeMedia && (
                <div className="mt-6">
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                    {!loadedMediaSrc && (
                      <div className="absolute inset-0 bg-white/[0.08]" aria-hidden="true" />
                    )}
                    {activeMedia.type === "video" ? (
                      <video
                        key={activeMedia.src}
                        src={activeMedia.src}
                        poster={activeMedia.poster}
                        controls
                        className="h-full w-full object-cover"
                        onLoadedData={() => setLoadedMediaSrc(activeMedia.src)}
                      />
                    ) : (
                      <Image
                        key={activeMedia.src}
                        src={activeMedia.src}
                        alt={activeMedia.alt}
                        fill
                        sizes="(min-width: 768px) 720px, 90vw"
                        className={`object-cover transition-opacity duration-300 ${loadedMediaSrc === activeMedia.src ? "opacity-100" : "opacity-0"}`}
                        onLoad={() => setLoadedMediaSrc(activeMedia.src)}
                      />
                    )}
                    {selectedProject.media.length > 1 && (
                      <>
                        <button
                          type="button"
                          aria-label="Previous project media"
                          onClick={() => setActiveMediaIndex((current) => current === 0 ? selectedProject.media.length - 1 : current - 1)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          aria-label="Next project media"
                          onClick={() => setActiveMediaIndex((current) => (current + 1) % selectedProject.media.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                          <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {selectedProject.media.map((media, index) => (
                      <button
                        key={media.src}
                        type="button"
                        aria-label={`View media ${index + 1}`}
                        aria-pressed={index === activeMediaIndex}
                        onClick={() => setActiveMediaIndex(index)}
                        className={`relative aspect-video overflow-hidden rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${index === activeMediaIndex ? "border-cyan-400" : "border-white/10"}`}
                      >
                        {media.type === "video" ? (
                          <video src={media.src} poster={media.poster} muted className="h-full w-full object-cover" aria-hidden="true" />
                        ) : (
                          <Image src={media.src} alt="" fill sizes="120px" className="object-cover" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <p className="mt-4 text-sm text-neutral-300">{selectedProject.overview}</p>
              <div className="mt-6 grid gap-5 text-left md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-cyan-300">Challenge</h3>
                  <p className="mt-2 text-sm text-neutral-400">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-300">Solution</h3>
                  <p className="mt-2 text-sm text-neutral-400">{selectedProject.solution}</p>
                </div>
              </div>
              <h3 className="mt-6 text-left font-semibold text-cyan-300">Highlights</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-left text-sm text-neutral-400">
                {selectedProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              {selectedProject.metrics.length > 0 && (
                <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
                  {selectedProject.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-xl font-bold text-white">{metric.value}</p>
                      <p className="text-xs text-cyan-300">{metric.label}</p>
                      <p className="mt-1 text-xs text-neutral-500">{metric.description}</p>
                    </div>
                  ))}
                </div>
              )}
              <h3 className="mt-6 text-left font-semibold text-cyan-300">Architecture</h3>
              <ul className="mt-2 space-y-2 text-left text-sm text-neutral-400">
                {selectedProject.architecture.map((node) => (
                  <li key={node.id}><span className="text-white">{node.label}:</span> {node.description}</li>
                ))}
              </ul>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;