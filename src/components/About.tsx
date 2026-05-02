import { User, Code2, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const blocks = [
  {
    icon: User,
    title: "Who I am",
    text: "A passionate technology student with a strong foundation in programming, data, and intelligent systems — driven by curiosity and impact.",
  },
  {
    icon: Code2,
    title: "What I work on",
    text: "Real-world projects spanning AI assistants, predictive models, and full-stack web apps — turning ideas into shipping products.",
  },
  {
    icon: Target,
    title: "What I aim for",
    text: "Clean, scalable engineering and continuous learning — contributing to teams that value craft, speed, and meaningful problem solving.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About"
          title="Versatile by design, intentional in execution."
          description="I build across software, data, and AI — adapting tools to the problem rather than the other way around."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="glass-card hover-lift rounded-2xl p-7 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                >
                  <b.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
