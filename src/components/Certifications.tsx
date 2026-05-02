import { useState } from "react";
import { BadgeCheck, Cloud, Code2, Shield, Database } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Cert = {
  name: string;
  issuer: string;
  category: "Cloud & AI" | "Web Development" | "Security & Data";
  icon: typeof BadgeCheck;
};

const certs: Cert[] = [
  { name: "Oracle Cloud Infrastructure – Generative AI Certified", issuer: "Oracle", category: "Cloud & AI", icon: Cloud },
  { name: "Oracle Cloud Infrastructure – Data Science Professional", issuer: "Oracle", category: "Cloud & AI", icon: Cloud },
  { name: "HTML5, CSS3, JavaScript", issuer: "Infosys Springboard", category: "Web Development", icon: Code2 },
  { name: "Responsive Web Pages using Bootstrap", issuer: "Infosys Springboard", category: "Web Development", icon: Code2 },
  { name: "Fundamentals of Cybersecurity", issuer: "Zscaler", category: "Security & Data", icon: Shield },
  { name: "Acquiring Data for Data Science", issuer: "NASSCOM", category: "Security & Data", icon: Database },
];

const categories = ["All", "Cloud & AI", "Web Development", "Security & Data"] as const;

export function Certifications() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = filter === "All" ? certs : certs.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Certifications"
          title="Continuous learning, formally backed."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === cat
                  ? "bg-primary/20 border-primary/50 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="group glass-card rounded-2xl p-6 h-full flex flex-col gap-4 transition-all duration-300 hover:scale-[1.03] hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <c.icon size={22} className="text-primary-foreground" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-semibold px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                    {c.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold leading-snug mb-1">{c.name}</h3>
                  <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <BadgeCheck size={14} className="text-accent" />
                    {c.issuer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
