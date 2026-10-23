"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type CollapsedHeight = number | { base: number; lg: number };

interface CollapsibleSectionProps {
  collapsedHeight: CollapsedHeight;
  children: React.ReactNode;
  moreLabel?: string;
  lessLabel?: string;
}

function getHeightValue(collapsedHeight: CollapsedHeight, isLargeScreen: boolean) {
  return typeof collapsedHeight === "number"
    ? collapsedHeight
    : isLargeScreen
      ? collapsedHeight.lg
      : collapsedHeight.base;
}

export function CollapsibleSection({
  collapsedHeight,
  children,
  moreLabel = "See more",
  lessLabel = "See less",
}: CollapsibleSectionProps) {
  const contentId = useId();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const currentCollapsedHeight = getHeightValue(collapsedHeight, isLargeScreen);
  const canExpand = contentHeight > currentCollapsedHeight;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateScreenSize = () => setIsLargeScreen(mediaQuery.matches);
    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);
    return () => mediaQuery.removeEventListener("change", updateScreenSize);
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const updateContentHeight = () => setContentHeight(content.scrollHeight);
    updateContentHeight();
    const observer = new ResizeObserver(updateContentHeight);
    observer.observe(content);
    return () => observer.disconnect();
  }, [children]);

  useEffect(() => {
    if (!canExpand) setExpanded(false);
  }, [canExpand]);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      const heading = contentRef.current
        ?.closest("section")
        ?.querySelector("h2");
      heading?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      return;
    }
    setExpanded(true);
  };

  return (
    <>
      <motion.div
        id={contentId}
        animate={{
          height: canExpand && expanded ? contentHeight : currentCollapsedHeight,
        }}
        initial={false}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeInOut" }}
        className="relative overflow-hidden"
      >
        <div ref={contentRef}>{children}</div>
        {canExpand && !expanded && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent"
          />
        )}
      </motion.div>

      {canExpand && (
        <div className="my-8 flex justify-center">
          <button
            type="button"
            aria-controls={contentId}
            aria-expanded={expanded}
            onClick={handleToggle}
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-neutral-300 transition-colors hover:border-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            {expanded ? lessLabel : moreLabel}
            {expanded ? (
              <ChevronUp className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      )}
    </>
  );
}