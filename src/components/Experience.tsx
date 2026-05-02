import { Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    role: "Machine Learning Intern",
    company: "Intrusion Detection System Project",
    period: "2025",
    points: [
      "Designed and trained ML models to classify network traffic and detect anomalies.",
      "Improved detection accuracy through feature engineering and model comparison.",
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    role: "Data Science Intern",
    company: "Heart Disease Prediction",
    period: "2024",
    points: [
      "Built predictive models on medical datasets to estimate disease risk.",
      "Performed EDA, preprocessing, and evaluation across multiple algorithms.",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "ML"],
  },
  {
    role: "Web Development Intern",
    company: "E-commerce Platform",
    period: "2023",
    points: [
      "Developed responsive frontend pages and integrated backend data flows.",
      "Implemented cart, product, and checkout modules with clean UI.",
    ],
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Hands-on internships across AI, data, and the web."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent" />

          <div className="space-y-8">
            {items.map((it, i) => (
              <Reveal key={it.role} delay={i * 100}>
                <div className="relative pl-12 sm:pl-16">
                  <div
                    className="absolute left-0 sm:left-2 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                  >
                    <Briefcase size={14} className="text-primary-foreground" />
                  </div>
                  <div className="glass-card hover-lift rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold">{it.role}</h3>
                      <span className="text-xs text-accent font-medium">{it.period}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">{it.company}</div>
                    <ul className="space-y-2 mb-4">
                      {it.points.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {it.tools.map((t) => (
                        <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
