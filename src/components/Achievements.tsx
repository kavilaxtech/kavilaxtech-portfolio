import { Trophy, Award, Code2, Brain, Mic } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: Trophy,
    title: "1st Place — QuantMaster Aptitude Challenge",
    note: "Demonstrated strong analytical and problem-solving skills in a competitive intercollege contest.",
  },
  {
    icon: Brain,
    title: "Hackathon Finalist — CloakAI",
    note: "Led development of an AI-based OCR and NLP solution for automated sensitive data redaction.",
  },
  {
    icon: Code2,
    title: "2nd Place — CodeRush 2.0 (Python)",
    note: "Showcased efficient algorithmic thinking and coding under time constraints.",
  },
  {
    icon: Award,
    title: "3rd Place — BrainBuzz Technical Quiz",
    note: "Proved strong foundational knowledge in computer science and AI concepts.",
  },
  {
    icon: Mic,
    title: "Best Speaker — SpeakSmart Debate",
    note: "Delivered impactful insights on “AI: Threat or Tool to Humanity?” with excellent communication skills.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Achievements"
          title="Recognition that reflects the work."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="glass-card hover-lift rounded-2xl p-5 flex items-start gap-4 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <it.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
