"use client";

import { useEffect, useState } from "react";

const NAME = "Jacob Alegre";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showHook, setShowHook] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < NAME.length) {
        setDisplayed(NAME.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTyping(false);

        // Hide cursor after 2s
        setTimeout(() => setShowCursor(false), 2000);

        // Stagger reveal of subtitle, hook, CTAs
        setTimeout(() => setShowSubtitle(true), 300);
        setTimeout(() => setShowHook(true), 600);
        setTimeout(() => setShowCTAs(true), 900);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Faint grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(42,42,46,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42,42,46,0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="font-display font-bold text-[clamp(3rem,9vw,7rem)] leading-none tracking-tight text-[#F0EDE8] mb-4">
          {displayed}
          {(typing || showCursor) && <span className="cursor" />}
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-[#7B96B2] text-lg md:text-xl tracking-widest uppercase transition-all duration-500 ${
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
          <a
            href="#contact"
            className="px-8 py-3 border border-[#2A2A2E] text-[#8A8A90] font-body text-sm tracking-wide hover:bg-[#7B96B2] hover:border-[#7B96B2] hover:text-[#0C0C0D] transition-all duration-200"
          >
            Get In Touch
          </a>
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
