import Globe from "@/components/Globe";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-24 px-6 md:px-16 bg-[#0D0D10] relative overflow-hidden"
    >
      {/* Ambient blue glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#3B82F6]/[0.05] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left column: contact content */}
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <p className="font-body text-xs tracking-[0.2em] text-[#60A5FA] uppercase">
              04 / Contact
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0EDE8] leading-tight">
              Let&apos;s Connect
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="font-body text-[#8A8A90] text-base leading-relaxed max-w-sm">
              Currently open to Summer 2026 internship opportunities. Whether
              you have a role in mind, want to talk about a project, or just
              want to say hi — my inbox is open.
            </p>
          </ScrollReveal>

          {/* Email block */}
          <ScrollReveal delay={240}>
            <a
              href="mailto:jsalegre@uci.edu"
              className="group inline-flex items-center gap-3 text-[#F0EDE8] text-lg font-medium border border-[#1F1F25] rounded-xl px-6 py-4 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/[0.06] transition-all duration-200 w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#60A5FA] group-hover:text-[#3B82F6] transition-colors"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              jsalegre@uci.edu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#1F1F25] group-hover:text-[#60A5FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={320}>
            <div className="flex items-center flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/jacob-alegre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-[#8A8A90] hover:text-[#F0EDE8] transition-colors px-4 py-2 border border-[#1F1F25] rounded-lg hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/[0.05]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
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
                className="flex items-center gap-2 font-body text-sm text-[#8A8A90] hover:text-[#F0EDE8] transition-colors px-4 py-2 border border-[#1F1F25] rounded-lg hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/[0.05]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
            </div>
          </ScrollReveal>

          {/* Globe drag hint */}
          <ScrollReveal delay={400}>
            <p className="font-body text-xs text-[#2E2E38]">
              ↗ drag the globe
            </p>
          </ScrollReveal>
        </div>

        {/* Right column: globe */}
        <ScrollReveal delay={200} className="w-full">
          <div className="w-full aspect-square max-w-[420px] mx-auto md:mx-0 md:ml-auto">
            <Globe />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
