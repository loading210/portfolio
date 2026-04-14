"use client";

import { useEffect, useState } from "react";
import { MovingBorderButton } from "@/components/ui/moving-border";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Ambient violet glow — top left */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#7C3AED]/[0.08] blur-[140px] pointer-events-none" />
      {/* Ambient violet glow — bottom right */}
      <div className="absolute -bottom-20 right-0 w-[500px] h-[400px] rounded-full bg-[#A78BFA]/[0.05] blur-[120px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,transparent_30%,#06050E_75%)]" />

      <div
        className={`relative z-10 max-w-6xl transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
          <span className="font-body text-xs text-[#A78BFA] tracking-[0.15em] uppercase">
            Available · Summer 2026
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-bold leading-[0.9] tracking-tightest mb-6"
          style={{ fontSize: "clamp(4rem, 13vw, 10rem)" }}
        >
          <span className="block text-[#EEE8FF]">Jacob</span>
          <span className="block gradient-text">Alegre</span>
        </h1>

        {/* Role */}
        <p className="font-body text-[#6E6A96] text-sm md:text-base tracking-[0.25em] uppercase mb-6">
          Software Engineer · UCI &apos;28
        </p>

        {/* Hook */}
        <p
          className="font-body text-[#EEE8FF]/60 text-lg md:text-xl max-w-lg leading-relaxed mb-12"
          style={{ animationDelay: "200ms" }}
        >
          Building things at the intersection of software and the real world.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 font-display font-semibold text-sm text-white rounded-full"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
              boxShadow: "0 0 30px rgba(124,58,237,0.35)",
            }}
          >
            View My Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </a>

          <MovingBorderButton
            as="a"
            href="#contact"
            containerClassName="rounded-full h-auto"
            className="font-display font-semibold text-sm tracking-wide px-8 py-3.5"
            duration={3000}
          >
            Say Hello
          </MovingBorderButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-16 lg:left-24 flex items-center gap-3 opacity-25">
        <div className="w-12 h-px bg-gradient-to-r from-[#7C3AED]/60 to-transparent" />
        <span className="font-body text-[10px] text-[#6E6A96] tracking-[0.3em] uppercase">
          Scroll
        </span>
      </div>

      {/* Year stamp */}
      <div className="absolute bottom-10 right-6 md:right-16 opacity-20">
        <span className="font-display font-bold text-xs text-[#6E6A96] tracking-[0.3em] uppercase">
          2024 — Present
        </span>
      </div>
    </section>
  );
}
