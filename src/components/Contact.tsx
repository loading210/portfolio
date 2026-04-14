import Globe from "@/components/Globe";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#A78BFA]/[0.04] blur-[100px] pointer-events-none" />

      {/* Watermark */}
      <div className="absolute top-8 right-0 watermark select-none pointer-events-none pr-4 opacity-60">
        04
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

        {/* Left column */}
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-8 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]" />
              <span className="font-body text-xs text-[#A78BFA] tracking-[0.2em] uppercase">
                Contact
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2
              className="font-display font-bold text-[#EEE8FF] leading-tight tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Let&apos;s
              <br />
              <span className="gradient-text">Connect.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="font-body text-[#6E6A96] text-base leading-relaxed max-w-sm">
              Currently open to Summer 2026 internship opportunities. Whether
              you have a role in mind, want to talk about a project, or just
              want to say hi — my inbox is open.
            </p>
          </ScrollReveal>

          {/* Email CTA */}
          <ScrollReveal delay={240}>
            <a
              href="mailto:jsalegre@uci.edu"
              className="group inline-flex items-center gap-3 w-fit"
            >
              <span
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-display font-semibold text-sm text-white transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.3)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                jsalegre@uci.edu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                </svg>
              </span>
            </a>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={320}>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/jacob-alegre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-[#6E6A96] hover:text-[#A78BFA] transition-colors border border-[#1A1728] hover:border-[#7C3AED]/40 rounded-full px-5 py-2.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/loading210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-[#6E6A96] hover:text-[#A78BFA] transition-colors border border-[#1A1728] hover:border-[#7C3AED]/40 rounded-full px-5 py-2.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="font-body text-xs text-[#35324A]">↗ drag the globe</p>
          </ScrollReveal>
        </div>

        {/* Globe */}
        <ScrollReveal delay={200} className="w-full">
          <div className="w-full aspect-square max-w-[420px] mx-auto md:mx-0 md:ml-auto opacity-80">
            <Globe />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
