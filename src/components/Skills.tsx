import { Code, Globe, Brain, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    icon: Code,
    title: "Programming",
    items: ["Python", "Java", "SQL"],
  },
  {
    icon: Globe,
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: Brain,
    title: "Data & AI",
    items: ["Machine Learning", "Data Analysis", "NumPy / Pandas", "Scikit-learn"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Jupyter"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="A toolkit built for breadth and depth."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="glass-card hover-lift rounded-2xl p-6 h-full">
                <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-5 text-accent">
                  <g.icon size={20} />
                </div>
                <h3 className="font-semibold mb-4">{g.title}</h3>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
