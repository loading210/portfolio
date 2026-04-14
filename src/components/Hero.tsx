"use client";

import { useEffect, useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MovingBorderButton } from "@/components/ui/moving-border";

export default function Hero() {
  const [showBadge, setShowBadge] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showHook, setShowHook] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);

  useEffect(() => {
    const t0 = setTimeout(() => setShowBadge(true), 600);
    const t1 = setTimeout(() => setShowSubtitle(true), 1200);
    const t2 = setTimeout(() => setShowHook(true), 1500);
    const t3 = setTimeout(() => setShowCTAs(true), 1800);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Spotlight */}
      <Spotlight />

      {/* Dot grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial fade at edges */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0A0A0B_100%)]" />

      {/* Subtle blue ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] -z-10 rounded-full bg-[#3B82F6]/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Availability badge */}
        <div
          className={`mb-8 transition-all duration-500 ${
            showBadge ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/[0.07] text-[#60A5FA] font-body text-xs tracking-wide animate-badge-glow">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            Available · Summer 2026 Internships
          </span>
        </div>

        {/* Name — Text Generate Effect */}
        <TextGenerateEffect
          words="Jacob Alegre"
          className="font-display text-[clamp(3rem,9vw,7rem)]"
          duration={0.6}
        />

        {/* Subtitle */}
        <p
          className={`font-body text-[#60A5FA] text-lg md:text-xl tracking-widest uppercase mt-4 transition-all duration-500 ${
            showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software Engineer · UCI &apos;28
        </p>

        {/* Hook */}
        <p
          className={`font-body text-[#8A8A90] text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed transition-all duration-500 ${
            showHook ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Building things at the intersection of software and the real world.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 transition-all duration-500 ${
            showCTAs ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[#3B82F6] text-white font-body text-sm tracking-wide hover:bg-[#2563EB] transition-all duration-200"
          >
            View My Work
          </a>
          <MovingBorderButton
            as="a"
            href="#contact"
            containerClassName="rounded-full h-auto"
            className="font-body text-sm tracking-wide px-8 py-3"
            duration={2500}
          >
            Get In Touch
          </MovingBorderButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-body text-xs text-[#8A8A90] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#3B82F6]/60 to-transparent" />
      </div>
    </section>
  );
}
