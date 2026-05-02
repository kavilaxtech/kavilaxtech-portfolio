import { Mail, Linkedin, Github } from "lucide-react";
import { Reveal } from "./Reveal";

const links = [
  { icon: Github, label: "GitHub", value: "github.com/kavilaxtech", href: "https://github.com/kavilaxtech" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kavitha-vaishali-s", href: "https://linkedin.com/in/kavitha-vaishali-s" },
  { icon: Mail, label: "Email", value: "kavitha.aiml@gmail.com", href: "mailto:kavitha.aiml@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div
            className="glass-card rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
                 style={{ background: "var(--gradient-primary)" }} />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
                 style={{ background: "var(--gradient-primary)" }} />

            <div className="relative">
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">
                Contact
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-gradient mb-4">
                Let's build something great.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                Open to internships, full-time roles, and interesting collaborations across software,
                data, and AI.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group glass-card hover-lift rounded-2xl p-5 flex flex-col items-center text-center"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <l.icon size={18} className="text-primary-foreground" />
                    </div>
                    <div className="text-xs text-accent font-medium">{l.label}</div>
                    <div className="text-sm text-foreground mt-1 truncate max-w-full">{l.value}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="text-center text-sm text-muted-foreground mt-12">
          © {new Date().getFullYear()} Kavitha Vaishali S — Crafted with care.
        </footer>
      </div>
    </section>
  );
}
