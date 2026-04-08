"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Vollytics",
    status: "In Progress",
    isWip: true,
    description:
      "A computer vision analytics tool for volleyball — processes video footage to overlay pose estimation, ball tracking, action classification, and live match statistics.",
    tech: ["Python", "OpenCV", "YOLOv8", "FastAPI", "React", "TypeScript"],
    link: null,
  },
  {
    num: "02",
    title: "Jump Height App",
    status: "Complete",
    isWip: false,
    description:
      "A Python + OpenCV application that measures standing vertical jump height by analyzing video frames and tracking body movement with sub-centimeter precision.",
    tech: ["Python", "OpenCV"],
    link: null,
  },
  {
    num: "03",
    title: "Filipino Culinary Platform",
    status: "In Progress",
    isWip: true,
    description:
      "A full-stack cultural recipe-sharing platform designed to preserve and share Filipino culinary traditions through community-driven content.",
    tech: ["Next.js", "Express", "Supabase"],
    link: null,
  },
];

const SCROLL_PER_PROJECT = 1200;
const TOTAL_SCROLL = SCROLL_PER_PROJECT * (projects.length - 1);

export default function ScrollProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      if (scrolled < 0) return;

      const clamped = Math.max(0, Math.min(TOTAL_SCROLL, scrolled));
      const newIndex = Math.round(clamped / SCROLL_PER_PROJECT);
      const clampedIndex = Math.max(0, Math.min(projects.length - 1, newIndex));

      if (clampedIndex !== activeIndex) {
        setDirection(clampedIndex > activeIndex ? 1 : -1);
        setActiveIndex(clampedIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <div
      ref={containerRef}
      id="projects"
      style={{ height: `calc(100vh + ${TOTAL_SCROLL}px)` }}
      className="relative"
    >
      {/* Sticky stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col bg-[#0C0C0D]">

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-white/5 flex-shrink-0">
          <p className="font-body text-xs tracking-[0.2em] text-[#7B96B2] uppercase">
            03 / Projects
          </p>
          <p className="font-body text-xs text-[#8A8A90] font-mono">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-px bg-white/5 flex-shrink-0 relative">
          <motion.div
            className="absolute left-0 top-0 h-full bg-[#7B96B2]/40"
            animate={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 relative flex items-center px-6 md:px-16">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex items-center gap-8 md:gap-16 w-full"
            >
              {/* Ghost number */}
              <span
                className="text-[120px] md:text-[160px] font-black leading-none select-none flex-shrink-0 hidden md:block font-display"
                style={{ color: "rgba(255,255,255,0.03)" }}
              >
                {projects[activeIndex].num}
              </span>

              {/* Project details */}
              <div className="flex flex-col gap-5 max-w-xl">
                <span
                  className={`font-body text-xs tracking-widest uppercase font-mono ${
                    projects[activeIndex].isWip
                      ? "text-amber-500/60"
                      : "text-[#8A8A90]"
                  }`}
                >
                  {projects[activeIndex].status}
                </span>

                <h2 className="font-display text-4xl md:text-6xl font-bold text-[#F0EDE8] leading-tight">
                  {projects[activeIndex].title}
                </h2>

                <p className="font-body text-[#8A8A90] text-base leading-relaxed">
                  {projects[activeIndex].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[activeIndex].tech.map((t) => (
                    <span
                      key={t}
                      className="font-body text-xs px-3 py-1 border border-[#2A2A2E] text-[#8A8A90] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {projects[activeIndex].link && (
                  <a
                    href={projects[activeIndex].link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm text-[#8A8A90] hover:text-[#F0EDE8] transition-colors w-fit"
                  >
                    View on GitHub
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Vertical dot nav */}
          <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {projects.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  background:
                    i === activeIndex
                      ? "rgba(123,150,178,0.8)"
                      : "rgba(255,255,255,0.1)",
                  height: i === activeIndex ? 20 : 4,
                }}
                transition={{ duration: 0.3 }}
                className="w-[3px] rounded-full"
              />
            ))}
          </div>

          {/* Scroll hint */}
          <motion.p
            animate={{ opacity: activeIndex === projects.length - 1 ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 left-6 md:left-16 font-body text-xs text-[#2A2A2E] font-mono tracking-widest"
          >
            scroll ↓
          </motion.p>

        </div>
      </div>
    </div>
  );
}
