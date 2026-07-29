"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Layout, MessageSquare, Smartphone, Terminal, Code2, Database, Zap, ShieldCheck } from "lucide-react";

const techStack = [
  { name: "React Native & Expo", category: "Mobile Apps", tag: "Cross-Platform", icon: Smartphone, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "Telegram Mini Apps", category: "Ecosystem", tag: "Bot API", icon: MessageSquare, color: "text-sky-400 border-sky-500/20 bg-sky-500/10" },
  { name: "Next.js 14", category: "Frontend Framework", tag: "SSR & React", icon: Layout, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "TypeScript", category: "Language", tag: "Type-Safe", icon: Code2, color: "text-sky-400 border-sky-500/20 bg-sky-500/10" },
  { name: "Node.js & Express", category: "Backend Runtime", tag: "REST APIs", icon: Server, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "Docker", category: "Containers", tag: "DevOps", icon: Cpu, color: "text-sky-400 border-sky-500/20 bg-sky-500/10" },
  { name: "PostgreSQL & Prisma", category: "Database & ORM", tag: "SQL & Schema", icon: Database, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "Tailwind CSS", category: "Styling", tag: "UI Design", icon: Zap, color: "text-sky-400 border-sky-500/20 bg-sky-500/10" },
];

const pillars = [
  {
    icon: <Layout className="size-6 text-sky-400" />,
    title: "Web Development",
    description: "Building fast, responsive web applications with Next.js, React, TypeScript, and Tailwind CSS."
  },
  {
    icon: <Smartphone className="size-6 text-emerald-400" />,
    title: "Mobile App Development",
    description: "Developing Android and mobile apps using React Native and Expo."
  },
  {
    icon: <Server className="size-6 text-sky-400" />,
    title: "Backend & APIs",
    description: "Building REST APIs and database services with Node.js, Express, and PostgreSQL."
  },
  {
    icon: <MessageSquare className="size-6 text-emerald-400" />,
    title: "Telegram Mini Apps",
    description: "Developing interactive Telegram WebApps and bots, such as Lehulum Exams (@lehulum_exams_bot)."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-36 bg-[#030712] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-emerald-500/5 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md"
            >
              <Cpu className="size-3.5" />
              What I Do
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Building <span className="text-reveal">Reliable Software.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed"
            >
              Focusing on clean code, practical user experiences, and web & mobile development.
            </motion.p>
          </div>

          {/* Pillars 1-Column Mobile / 2-Column Tablet / 4-Column Desktop Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-row md:flex-col items-start justify-between gap-4 group hover:border-emerald-500/40"
              >
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  {pillar.icon}
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold md:hidden">0{idx + 1}</span>
                  </div>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Tech Stack Matrix Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl space-y-6"
          >
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5 sm:pb-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="size-4" /> Core Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Technologies & Tools</h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span className="text-[11px] font-mono text-white/60 font-medium">Production Stack</span>
              </div>
            </div>

            {/* Responsive Grid Layout (1 col mobile, 2 col tablet, 4 col desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group flex items-center sm:flex-col sm:items-start justify-between sm:justify-between gap-3 min-h-[72px] sm:min-h-[110px]"
                  >
                    <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-2">
                      <div className={`p-2 rounded-xl border shrink-0 ${tech.color}`}>
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                          {tech.name}
                        </p>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider font-mono mt-0.5">
                          {tech.category}
                        </p>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md bg-white/5 border border-white/10 text-white/60 shrink-0 self-center sm:self-start">
                      {tech.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
