import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "Vollytics",
    status: "In Progress",
    description:
      "A computer vision analytics tool for volleyball — processes video footage to overlay pose estimation, ball tracking, action classification, and live match statistics.",
    tech: ["Python", "OpenCV", "YOLOv8", "FastAPI", "React", "TypeScript"],
    github: null,
  },
  {
    name: "Jump Height App",
    status: null,
    description:
      "A Python + OpenCV application that measures standing vertical jump height by analyzing video frames and tracking body movement with sub-centimeter precision.",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/jacobalegre/jump-height-app",
  },
  {
    name: "Filipino Culinary Platform",
    status: "In Progress",
    description:
      "A full-stack cultural recipe-sharing platform designed to preserve and share Filipino culinary traditions through community-driven content.",
    tech: ["Next.js", "Express", "Supabase"],
    github: null,
  },
];

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="font-body text-xs text-[#7B96B2] tracking-[0.2em] uppercase">
            03 / Projects
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0EDE8] mt-3 mb-16">
            What I&apos;ve Built
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group relative h-full border border-[#2A2A2E] bg-[#1A1A1E] p-8 flex flex-col transition-all duration-300 hover:border-[#7B96B2]/50 hover:bg-[#1E1E24]">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display font-semibold text-xl text-[#F0EDE8] group-hover:text-[#7B96B2] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {project.status && (
                      <span className="font-body text-xs text-[#7B96B2] border border-[#7B96B2]/30 px-2 py-0.5 tracking-wide">
                        {project.status}
                      </span>
                    )}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        className="text-[#8A8A90] hover:text-[#7B96B2] transition-colors"
                      >
                        <ArrowUpRight />
                      </a>
                    ) : (
                      <span className="text-[#2A2A2E]">
                        <ArrowUpRight />
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-[#8A8A90] text-sm leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-body text-xs text-[#8A8A90] bg-[#0C0C0D] border border-[#2A2A2E] px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
