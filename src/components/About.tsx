import ScrollReveal from "./ScrollReveal";

const stats = [
  { label: "GPA", value: "3.71" },
  { label: "Intern", value: "2× LLUH" },
  { label: "Grad", value: "Jun 2028" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="font-body text-xs text-[#60A5FA] tracking-[0.2em] uppercase">
            01 / About
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F0EDE8] mt-3 mb-12">
            Who I Am
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Stats */}
          <div>
            <ScrollReveal delay={100}>
              <p className="font-body text-[#8A8A90] text-base leading-relaxed mb-4">
                I&apos;m a Computer Science student at UC Irvine with a focus on
                full-stack engineering. Over two summers, I&apos;ve built internal
                tools at Loma Linda University Health — from learning management
                systems serving 20,000+ staff to room reservation platforms
                deployed campus-wide.
              </p>
              <p className="font-body text-[#8A8A90] text-base leading-relaxed">
                I play volleyball competitively, which sparked my interest in
                applying computer vision to sports analytics — the driving force
                behind Vollytics. I&apos;m also leading full-stack development of a
                Filipino culinary platform to preserve and share cultural
                traditions through technology.
              </p>
            </ScrollReveal>

            {/* Stat strip */}
            <ScrollReveal delay={200}>
              <div className="flex gap-8 mt-10 pt-10 border-t border-[#1F1F25]">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display font-bold text-2xl text-[#3B82F6]">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-[#8A8A90] tracking-widest uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Currently working on */}
          <ScrollReveal delay={200}>
            <div className="bg-[#111115] border border-[#1F1F25] p-8 relative overflow-hidden group hover:border-[#3B82F6]/30 transition-colors duration-300">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/[0.04] rounded-bl-full pointer-events-none" />

              <p className="font-body text-xs text-[#60A5FA] tracking-[0.2em] uppercase mb-6">
                Currently Working On
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-[#F0EDE8] text-lg flex items-center gap-2">
                    Vollytics
                    <span className="text-[10px] font-body font-normal text-[#3B82F6]/70 tracking-widest uppercase border border-[#3B82F6]/20 px-2 py-0.5 rounded-full">
                      WIP
                    </span>
                  </h3>
                  <p className="font-body text-[#8A8A90] text-sm mt-1 leading-relaxed">
                    Volleyball analytics with pose estimation, ball tracking, and
                    live match statistics powered by computer vision.
                  </p>
                </div>
                <div className="border-t border-[#1F1F25]" />
                <div>
                  <h3 className="font-display font-semibold text-[#F0EDE8] text-lg flex items-center gap-2">
                    Filipino Culinary Platform
                    <span className="text-[10px] font-body font-normal text-[#3B82F6]/70 tracking-widest uppercase border border-[#3B82F6]/20 px-2 py-0.5 rounded-full">
                      WIP
                    </span>
                  </h3>
                  <p className="font-body text-[#8A8A90] text-sm mt-1 leading-relaxed">
                    A cultural recipe-sharing platform designed to preserve and
                    share Filipino culinary traditions through community.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
