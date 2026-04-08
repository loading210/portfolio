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
          <span className="font-body text-xs text-[#7B96B2] tracking-[0.2em] uppercase">
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
              <div className="flex gap-8 mt-10 pt-10 border-t border-[#2A2A2E]">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display font-bold text-2xl text-[#F0EDE8]">
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
            <div className="bg-[#1A1A1E] border border-[#2A2A2E] p-8">
              <p className="font-body text-xs text-[#7B96B2] tracking-[0.2em] uppercase mb-6">
                Currently Working On
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-[#F0EDE8] text-lg">
                    Vollytics
                  </h3>
                  <p className="font-body text-[#8A8A90] text-sm mt-1 leading-relaxed">
                    Volleyball analytics with pose estimation, ball tracking, and
                    live match statistics powered by computer vision.
                  </p>
                </div>
                <div className="border-t border-[#2A2A2E]" />
                <div>
                  <h3 className="font-display font-semibold text-[#F0EDE8] text-lg">
                    Filipino Culinary Platform
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
