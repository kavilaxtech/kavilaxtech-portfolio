import { useState } from "react";
import { Cloud, Code2, Database, Shield } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

type CertItem = {
  name: string;
  file: string;
  type: "image" | "pdf";
};

type CertGroup = {
  title: string;
  icon: any;
  description: string;
  items: CertItem[];
};

const groups: CertGroup[] = [
  {
    title: "Cloud & AI",
    icon: Cloud,
    description: "AI and cloud certifications",
    items: [
      { name: "Oracle Generative AI", file: "/certificates/oracle-genai.pdf", type: "pdf" },
      { name: "Oracle Data Science", file: "/certificates/oracle-ds.pdf", type: "pdf" },
      { name: "IBM Applied AI", file: "/certificates/ibm.pdf", type: "pdf" },
    ],
  },
  {
    title: "Data & SQL",
    icon: Database,
    description: "SQL skill progression",
    items: [
      { name: "SQL Beginner", file: "/certificates/sql-basic.pdf", type: "pdf" },
      { name: "SQL Intermediate", file: "/certificates/sql-intermediate.pdf", type: "pdf" },
      { name: "SQL Advanced", file: "/certificates/sql-advanced.pdf", type: "pdf" },
    ],
  },
  {
    title: "Web Development",
    icon: Code2,
    description: "Frontend foundations",
    items: [
      { name: "HTML5", file: "/certificates/html.pdf", type: "pdf" },
      { name: "CSS3", file: "/certificates/css3.pdf", type: "pdf" },
      { name: "JavaScript", file: "/certificates/js.pdf", type: "pdf" },
      { name: "Bootstrap", file: "/certificates/bootstrap.pdf", type: "pdf" },
    ],
  },
  {
    title: "Security & Data",
    icon: Shield,
    description: "Security + data certifications",
    items: [
      { name: "Cybersecurity - Zscaler", file: "/certificates/zscaler.pdf", type: "pdf" },
      { name: "Acquiring Data - NASSCOM", file: "/certificates/nasscom.pdf", type: "pdf" },
    ],
  },
];

export function Certifications() {
  const [activeGroup, setActiveGroup] = useState<CertGroup | null>(null);
  const [selected, setSelected] = useState<CertItem | null>(null);

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          eyebrow="Certifications"
          title="Validated Skills & Technical Expertise"
        />

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition">

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <group.icon className="text-primary" />
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => setActiveGroup(group)}
                  className="mt-6 text-sm px-4 py-2 rounded-lg border border-primary/40 hover:bg-primary/10 transition"
                >
                  View Certificates
                </button>

              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* GROUP POPUP */}
      {activeGroup && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="bg-background p-6 rounded-xl max-w-3xl w-full relative">

            <button
              onClick={() => setActiveGroup(null)}
              className="absolute top-3 right-4"
            >
              ✕
            </button>

            <h2 className="mb-4 font-semibold">{activeGroup.title}</h2>

            <div className="flex flex-col gap-3">
              {activeGroup.items.map((cert) => (
                <button
                  key={cert.name}
                  onClick={() => setSelected(cert)}
                  className="flex justify-between p-3 border rounded-lg hover:bg-primary/10"
                >
                  {cert.name}
                  <span className="text-primary text-xs">View</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* CERT VIEW POPUP */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="bg-background p-4 rounded-xl max-w-4xl w-full relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4"
            >
              ✕
            </button>

            <h3 className="mb-4">{selected.name}</h3>

            {selected.type === "image" ? (
              <img src={selected.file} className="w-full rounded-lg" />
            ) : (
              <iframe src={selected.file} className="w-full h-[75vh]" />
            )}

          </div>
        </div>
      )}
    </section>
  );
}