import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import medibot from "../assets/project-medibot.jpg";
import learning from "../assets/project-learning.jpg";
import cosplay from "../assets/project-cosplay.jpg";
import dashboard from "../assets/project-dashboard.jpg";
import face from "../assets/project-face.jpg";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;
};

const projects: Project[] = [
  {
    title: "MediBot",
    tagline: "Intelligent Medical Assistant",
    description: "AI-based system for symptom-based disease prediction with computer vision wound severity detection and hospital recommendations.",
    image: medibot,
    stack: ["Python", "Scikit-learn", "OpenCV", "Streamlit"],
    problem: "Patients struggle to interpret symptoms, gauge wound severity, and quickly find appropriate medical care.",
    solution: "Built an AI-based system for symptom-based disease prediction, integrated computer vision for wound severity detection, and added hospital recommendation support.",
    outcome: "Delivered an end-to-end assistant that guides users from symptom check to nearest care option.",
  },
  {
    title: "AI Learning Assistant",
    tagline: "Personalised study companion",
    description: "Personalized AI assistant delivering contextual, adaptive responses to support self-paced learning.",
    image: learning,
    stack: ["Python", "Machine Learning", "Streamlit"],
    problem: "Static learning content rarely fits each student's pace, gaps, or learning style.",
    solution: "Developed a personalized learning assistant that delivers contextual and adaptive responses to support self-paced learning.",
    outcome: "Improved learner engagement through targeted explanations and adaptive feedback loops.",
  },
  {
    title: "Cosplay E-Commerce Website",
    tagline: "Themed online store",
    description: "Responsive e-commerce platform with product listing and cart functionality, focused on clean UI and usability.",
    image: cosplay,
    stack: ["HTML", "CSS", "JavaScript"],
    problem: "Niche cosplay shoppers had limited dedicated platforms with smooth UX.",
    solution: "Designed a responsive e-commerce platform, implemented product listing and cart functionality, and focused on clean UI and usability.",
    outcome: "Delivered a polished, themed shopping experience that's easy to browse and check out from.",
  },
  {
    title: "Intern Analytics Dashboard",
    tagline: "Performance monitoring dashboard",
    description: "Dashboard to monitor intern performance and activity with key metrics, data insights, and an intuitive progress-tracking interface.",
    image: dashboard,
    stack: ["Python", "React", "JavaScript", "Chart.js"],
    problem: "Mentors lacked a single view to track intern performance, activity, and progress over time.",
    solution: "Built a dashboard to monitor intern performance and activity, visualized key metrics and data insights, and designed an intuitive interface for tracking progress.",
    outcome: "Made intern performance transparent and decisions data-driven with clear, real-time visualizations.",
  },
  {
    title: "Real-Time Face Identification in Video Streams",
    tagline: "Computer vision · real-time recognition",
    description: "System that identifies individuals in video streams using face embeddings and frame sampling for optimized real-time performance.",
    image: face,
    stack: ["Python", "OpenCV", "Face Recognition", "Deep Learning"],
    problem: "Identifying people accurately in live video is computationally expensive and prone to lag.",
    solution: "Used face embeddings for accurate recognition and applied frame sampling to optimize performance, improving efficiency in real-time processing.",
    outcome: "Achieved reliable real-time identification with significantly reduced compute overhead.",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work — built to solve, not just to ship."
          description="A few projects that show how I approach problems across AI, data, and the web."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <button
                onClick={() => setActive(p)}
                className="group text-left w-full glass-card hover-lift rounded-2xl overflow-hidden h-full flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-accent font-medium mb-1">{p.tagline}</div>
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-foreground/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 animate-[fade-in_0.2s_ease-out]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center hover:bg-card"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-7 space-y-5">
              <div>
                <div className="text-xs text-accent font-medium mb-1">{active.tagline}</div>
                <h3 className="text-2xl font-bold">{active.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
              {[
                { label: "Problem", text: active.problem },
                { label: "Solution", text: active.solution },
                { label: "Outcome", text: active.outcome },
              ].map((b) => (
                <div key={b.label}>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                    {b.label}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
