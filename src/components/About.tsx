import ScrollReveal from "./ScrollReveal";

const stats = [
  { label: "GPA", value: "3.71" },
  { label: "Intern", value: "2×" },
  { label: "Grad", value: "'28" },
];

const projects = [
  {
    name: "Vollytics",
    desc: "Computer vision analytics for volleyball — pose estimation, ball tracking, live match stats.",
    status: "WIP",
  },
  {
    name: "Filipino Culinary Platform",
    desc: "Cultural recipe-sharing platform built with Next.js, Express, and Supabase.",
    status: "WIP",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-8 right-0 watermark select-none pointer-events-none pr-4 opacity-60">
        01
      </div>

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]" />
            <span className="font-body text-xs text-[#A78BFA] tracking-[0.2em] uppercase">
              About
            </span>
          </div>
          <h2
            className="font-display font-bold text-[#EEE8FF] leading-tight tracking-tighter mb-16"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Who I Am
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Left: Bio (3 cols) */}
          <div className="md:col-span-3">
            <ScrollReveal delay={100}>
              <p className="font-body text-[#EEE8FF]/60 text-lg leading-relaxed mb-5">
                I&apos;m a Computer Science student at UC Irvine with a focus on
                full-stack engineering. Over two summers, I&apos;ve built internal
                tools at Loma Linda University Health — from learning management
                systems serving 20,000+ staff to room reservation platforms
                deployed campus-wide.
              </p>
              <p className="font-body text-[#EEE8FF]/60 text-lg leading-relaxed">
                I play volleyball competitively, which sparked my interest in
                applying computer vision to sports analytics. I&apos;m also leading
                development of a Filipino culinary platform to preserve and
                share cultural traditions through technology.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={200}>
              <div className="flex gap-12 mt-12 pt-12 border-t border-[#1A1728]">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="font-display font-bold gradient-text leading-none"
                      style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="font-body text-[10px] text-[#6E6A96] tracking-[0.25em] uppercase mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Currently building (2 cols) */}
          <ScrollReveal delay={150} className="md:col-span-2">
            <div className="space-y-px">
              <p className="font-body text-[10px] text-[#A78BFA] tracking-[0.25em] uppercase mb-6">
                Currently Building
              </p>
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="group relative pl-5 py-5 border-l border-[#1A1728] hover:border-[#7C3AED]/50 transition-colors duration-300"
                >
                  {/* Animated dot on border */}
                  <div className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1A1728] group-hover:bg-[#7C3AED] transition-colors duration-300" />

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-[#EEE8FF] text-base">
                      {p.name}
                    </h3>
                    <span className="flex-shrink-0 text-[9px] font-body tracking-widest uppercase text-[#7C3AED] border border-[#7C3AED]/30 px-2 py-0.5 rounded-full">
                      {p.status}
                    </span>
                  </div>
                  <p className="font-body text-[#6E6A96] text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
