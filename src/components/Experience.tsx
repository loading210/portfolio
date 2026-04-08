import ScrollReveal from "./ScrollReveal";

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
    <section id="experience" className="py-32 px-6 bg-[#111113]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="font-body text-xs text-[#7B96B2] tracking-[0.2em] uppercase">
            02 / Experience
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0EDE8] mt-3 mb-16">
            Where I&apos;ve Worked
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group relative border border-[#2A2A2E] bg-[#1A1A1E] p-8 transition-all duration-300 hover:border-[#7B96B2]/40 hover:bg-[#1E1E24]">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2A2A2E] group-hover:bg-[#7B96B2] transition-colors duration-300" />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-xl text-[#F0EDE8]">
                      {exp.role}
                    </h3>
                    <p className="font-body text-[#7B96B2] text-sm mt-1">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="font-body text-xs text-[#8A8A90] tracking-wide whitespace-nowrap mt-1">
                    {exp.dates}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-[#7B96B2]" />
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
      </div>
    </section>
  );
}
