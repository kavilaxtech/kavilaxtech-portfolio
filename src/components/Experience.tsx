import { useState } from "react";
import { Briefcase, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    role: "Web Development Intern",
    company: "E-commerce Platform",
    certificate: "/certificates/eagle.pdf",
    points: [
      "Developed responsive UI and integrated backend data.",
      "Implemented cart, product listing, and checkout modules.",
    ],
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    role: "Data Science Intern",
    company: "Heart Disease Prediction",
    certificate: "/certificates/ekhai.pdf",
    points: [
      "Developed predictive models on healthcare datasets.",
      "Performed EDA and model evaluation across multiple algorithms.",
    ],
    tools: ["Python", "Pandas", "Matplotlib"],
  },
  {
    role: "Machine Learning Intern",
    company: "Intrusion Detection System",
    certificate: "/certificates/vulture.pdf",
    points: [
      "Built ML models to detect anomalous network traffic patterns.",
      "Improved detection accuracy using feature engineering.",
    ],
    tools: ["Python", "Scikit-learn", "Pandas"],
  },
];

export function Experience() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          eyebrow="Experience"
          title="Internships & Real-World Work"
        />

        <div className="relative mt-12">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-accent" />

          <div className="space-y-10">
            {items.map((it, i) => (
              <Reveal key={it.role} delay={i * 100}>
                <div className="relative pl-12">

                  {/* Icon */}
                  <div className="absolute left-0 top-2 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white shadow-glow">
                    <Briefcase size={14} />
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 rounded-2xl hover-lift">

                    {/* 🔥 HEADER WITH RIGHT BUTTON */}
                    <div className="flex justify-between items-start mb-3 gap-4">

                      <div>
                        <h3 className="font-semibold">{it.role}</h3>
                        <p className="text-sm text-muted-foreground">
                          {it.company}
                        </p>
                      </div>

                      {/* BUTTON RIGHT SIDE */}
                      <button
                        onClick={() => setSelected(it.certificate)}
                        className="flex items-center gap-1 text-xs px-3 py-1.5 border border-primary/40 rounded-md hover:bg-primary/10 whitespace-nowrap"
                      >
                        View Certificate
                        <ExternalLink size={12} />
                      </button>

                    </div>

                    {/* POINTS */}
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      {it.points.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>

                    {/* TOOLS */}
                    <div className="flex flex-wrap gap-2">
                      {it.tools.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 bg-primary/10 rounded"
                        >
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

      {/* POPUP */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-xl w-full max-w-4xl relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-lg"
            >
              ✕
            </button>

            <iframe src={selected} className="w-full h-[75vh]" />

          </div>
        </div>
      )}
    </section>
  );
}