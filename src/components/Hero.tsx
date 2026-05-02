import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import profileHero from "../assets/profile-hero.png";

const roles = [
  "Software Developer",
  "Data Science Enthusiast",
  "AI/ML Explorer",
  "Web Developer",
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW (IMPROVED) */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500 opacity-25 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[420px] h-[420px] bg-cyan-400 opacity-20 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center relative">

        {/* LEFT SIDE */}
        <div className="space-y-7">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* NAME */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="block">Kavitha</span>
              <span className="block text-gradient">Vaishali S</span>
            </h1>

            {/* ROLE */}
            <div className="h-7 text-lg sm:text-xl text-gray-400 font-medium">
              <span key={idx} className="inline-block animate-[fadeUp_0.5s_ease-out]">
                • {roles[idx]}
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Building efficient, scalable, and intelligent solutions to real-world problems —
            across software, data, and AI.
          </p>

          {/* LOCATION */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin size={14} className="text-cyan-400" />
            Chennai, India
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="btn-primary hover-lift flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition"
            >
              Get in touch
            </a>
          </div>

          {/* SOCIAL ICONS (EMAIL REMOVED ✅) */}
          <div className="flex items-center gap-4 pt-4">
            {[
              { icon: Github, href: "https://github.com/kavilaxtech" },
              { icon: Linkedin, href: "https://linkedin.com/in/kavitha-vaishali-s" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (3D IMAGE) */}
        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">

          {/* 🔥 GLOW RING */}
          <div className="absolute -inset-6 rounded-full opacity-50 blur-3xl animate-pulse"
               style={{ background: "var(--gradient-primary)" }} />

          {/* 🔥 ROTATING BORDER */}
          <div
            className="absolute inset-0 rounded-3xl border border-indigo-500/30"
            style={{
              background: "conic-gradient(from 0deg, transparent, #6366f1, transparent, #22d3ee, transparent)",
              animation: "spin 10s linear infinite",
            }}
          />

          {/* IMAGE (FLOATING + 3D FEEL) */}
          <div className="relative rounded-3xl overflow-hidden glass-card animate-[float_6s_ease-in-out_infinite] transform hover:scale-105 transition duration-500">
            <img
              src={profileHero}
              alt="Kavitha"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* FLOATING STATS */}
          <div className="absolute -left-6 top-12 glass-card rounded-2xl px-4 py-3 animate-[float_8s_ease-in-out_infinite]">
            <div className="text-xl font-bold text-gradient">10+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>

          <div className="absolute -right-4 bottom-16 glass-card rounded-2xl px-4 py-3 animate-[float_7s_ease-in-out_infinite]">
            <div className="text-xl font-bold text-gradient">3</div>
            <div className="text-xs text-gray-400">Internships</div>
          </div>

        </div>
      </div>
    </section>
  );
}