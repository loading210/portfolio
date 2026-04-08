"use client";

import { useEffect, useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MovingBorderButton } from "@/components/ui/moving-border";

export default function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showHook, setShowHook] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);

  // Stagger reveal after name animation (~0.5s per word × 2 words = ~1s)
  useEffect(() => {
    const t1 = setTimeout(() => setShowSubtitle(true), 1200);
    const t2 = setTimeout(() => setShowHook(true), 1500);
    const t3 = setTimeout(() => setShowCTAs(true), 1800);
    return () => {
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
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial fade at edges */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0C0C0D_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Name — Text Generate Effect */}
        <TextGenerateEffect
          words="Jacob Alegre"
          className="font-display text-[clamp(3rem,9vw,7rem)]"
          duration={0.6}
        />

        {/* Subtitle */}
        <p
          className={`font-body text-[#7B96B2] text-lg md:text-xl tracking-widest uppercase mt-4 transition-all duration-500 ${
            showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software Engineer · UCI &apos;28
        </p>

        {/* Hook */}
        <p
          className={`font-body text-[#8A8A90] text-base md:text-lg mt-4 max-w-xl mx-auto transition-all duration-500 ${
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
            className="px-8 py-3 border border-[#2A2A2E] text-[#F0EDE8] font-body text-sm tracking-wide hover:bg-[#7B96B2] hover:border-[#7B96B2] hover:text-[#0C0C0D] transition-all duration-200"
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-xs text-[#8A8A90] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8A8A90] to-transparent" />
      </div>
    </section>
  );
}
