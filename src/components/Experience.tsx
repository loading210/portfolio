import ScrollReveal from "./ScrollReveal";
import { TracingBeam } from "@/components/ui/tracing-beam";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "LLU Information Systems",
    location: "Loma Linda, CA",
    dates: "Jun 2025 – Sep 2025",
    bullets: [
      "Built core frontend and backend modules for LLEARN, an LMS serving 20,000+ LLUH staff using Vue.js and Laravel.",
      "Implemented role-based dashboards, credential tracking, and dynamic modal interfaces — improved user workflow efficiency by 50%.",
      "Collaborated with a 7-person team in an Agile environment, delivering sprints on time.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "LLU Information Systems",
    location: "Loma Linda, CA",
    dates: "Jun 2024 – Aug 2024",
    bullets: [
      "Designed and built the frontend of a Room Reservation System (Vue.js, Bootstrap, HTML, JS) with real-time notifications — reduced manual scheduling time by 40%.",
      "Deployed system campus-wide across 5 buildings, 100+ rooms.",
      "Developed biomedical automation tools using LLMs to streamline clinical workflows, increasing utilization by 100%.",
    ],
  },
  {
    role: "FIP Project Dev Lead",
    company: "FUSION ICS — Filipino Culinary Platform",
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
    <section id="experience" className="py-32 px-6 bg-[#0D0D10]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="font-body text-xs text-[#60A5FA] tracking-[0.2em] uppercase">
            02 / Experience
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0EDE8] mt-3 mb-16">
            Where I&apos;ve Worked
          </h2>
        </ScrollReveal>

        <TracingBeam className="pl-6 md:pl-20">
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group relative border border-[#1F1F25] bg-[#111115] p-8 transition-all duration-300 hover:border-[#3B82F6]/30 hover:bg-[#111118]">
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#1F1F25] group-hover:bg-[#3B82F6] transition-colors duration-300" />

                  {/* Blue corner glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.04),transparent_60%)]" />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-[#F0EDE8]">
                        {exp.role}
                      </h3>
                      <p className="font-body text-[#60A5FA] text-sm mt-1">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="font-body text-xs text-[#8A8A90] tracking-wide whitespace-nowrap mt-1 font-mono">
                      {exp.dates}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-[#3B82F6]/60" />
                        <p className="font-body text-[#8A8A90] text-sm leading-relaxed">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
