"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Layout, ShieldCheck, Layers, Terminal, Sparkles } from "lucide-react";

const techStack = [
  { name: "Telegram Bot & Mini Apps", category: "Specialized Ecosystem" },
  { name: "Next.js 14+", category: "Frontend Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js / Express", category: "Backend Runtime" },
  { name: "Docker", category: "DevOps & Containers" },
  { name: "PostgreSQL & Prisma", category: "Database & ORM" },
  { name: "Tailwind CSS & Motion", category: "Design System" },
  { name: "REST & WebSockets", category: "Protocols" },
];

const pillars = [
  {
    icon: <Server className="size-6 text-emerald-400" />,
    title: "Scalable Backends",
    description: "Designing high-concurrency microservices and decoupled REST/GraphQL APIs built to handle thousands of requests per second with sub-100ms latency."
  },
  {
    icon: <Layout className="size-6 text-sky-400" />,
    title: "Precision Frontends",
    description: "Crafting pixel-perfect, accessible user interfaces with Next.js, Framer Motion, and Tailwind CSS. Obsessed with 60fps micro-animations and zero layout shift."
  },
  {
    icon: <ShieldCheck className="size-6 text-emerald-400" />,
    title: "Production Resilience",
    description: "Enforcing strict static typing with TypeScript, automated CI/CD deployment pipelines, containerized Docker builds, and robust database indexing."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#030712] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md"
            >
              <Cpu className="size-3.5" />
              Engineering Philosophy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Architecting <span className="text-reveal">Resilient Systems.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-white/50 text-base md:text-lg font-light leading-relaxed"
            >
              Code is more than syntax — it is the digital foundation of modern business scalable ecosystems.
            </motion.p>
          </div>

          {/* Pillars 3-Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 w-fit">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Matrix Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="size-4" /> Core Technology Matrix
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Tech Stack & Tooling</h3>
              </div>
              <span className="text-xs text-white/40 font-mono">Next.js 14 • Node.js • Bun</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group"
                >
                  <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider font-mono mt-1">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

