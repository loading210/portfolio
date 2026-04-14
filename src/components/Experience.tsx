import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    year: "2025",
    role: "Software Engineering Intern",
    company: "LLU Information Systems",
    location: "Loma Linda, CA",
    dates: "Jun – Sep 2025",
    bullets: [
      "Built core frontend and backend modules for LLEARN, an LMS serving 20,000+ LLUH staff using Vue.js and Laravel.",
      "Implemented role-based dashboards, credential tracking, and dynamic modal interfaces — improved user workflow efficiency by 50%.",
      "Collaborated with a 7-person team in an Agile environment, delivering sprints on time.",
    ],
  },
  {
    year: "2024",
    role: "Software Engineering Intern",
    company: "LLU Information Systems",
    location: "Loma Linda, CA",
    dates: "Jun – Aug 2024",
    bullets: [
      "Designed and built the frontend of a Room Reservation System (Vue.js, Bootstrap, HTML, JS) with real-time notifications — reduced manual scheduling time by 40%.",
      "Deployed system campus-wide across 5 buildings, 100+ rooms.",
      "Developed biomedical automation tools using LLMs to streamline clinical workflows, increasing utilization by 100%.",
    ],
  },
  {
    year: "2025",
    role: "FIP Project Dev Lead",
    company: "FUSION ICS",
    location: "Irvine, CA",
    dates: "Oct 2025 – Present",
    bullets: [
      "Leading full-stack development of a cultural recipe-sharing platform (Next.js, Express, Supabase).",
      "Facilitating technical workshops, defining API contracts, and managing sprint cycles.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden bg-[#08071A]/50">
      {/* Watermark */}
      <div className="absolute top-8 right-0 watermark select-none pointer-events-none pr-4 opacity-60">
        02
      </div>

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]" />
            <span className="font-body text-xs text-[#A78BFA] tracking-[0.2em] uppercase">
              Experience
            </span>
          </div>
          <h2
            className="font-display font-bold text-[#EEE8FF] leading-tight tracking-tighter mb-20"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Where I&apos;ve Worked
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="group grid grid-cols-[auto_1fr] gap-8 md:gap-16 py-10 border-t border-[#1A1728] hover:border-[#7C3AED]/20 transition-colors duration-300 last:border-b">

                {/* Year */}
                <div className="pt-1 w-16 flex-shrink-0">
                  <span className="font-display font-bold text-xs text-[#35324A] group-hover:text-[#7C3AED]/40 tracking-widest transition-colors duration-300">
                    {exp.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-6">
                    <div>
                      <h3 className="font-display font-semibold text-xl md:text-2xl text-[#EEE8FF] leading-snug group-hover:gradient-text transition-all duration-300">
                        {exp.role}
                      </h3>
                      <p className="font-body text-sm text-[#A78BFA] mt-1 tracking-wide">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="font-body text-xs text-[#6E6A96] tracking-wide whitespace-nowrap font-mono mt-1">
                      {exp.dates}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-4 items-start">
                        <span className="font-body text-[#7C3AED]/50 text-sm mt-0.5 flex-shrink-0 font-mono">→</span>
                        <p className="font-body text-[#6E6A96] text-sm leading-relaxed">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
