"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Layout, MessageSquare, Smartphone, Terminal } from "lucide-react";

const techStack = [
  { name: "React Native & Expo", category: "Mobile Apps" },
  { name: "Telegram Mini Apps", category: "Ecosystem" },
  { name: "Next.js 14", category: "Frontend Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js & Express", category: "Backend Runtime" },
  { name: "Docker", category: "Containers" },
  { name: "PostgreSQL & Prisma", category: "Database & ORM" },
  { name: "Tailwind CSS", category: "Styling" },
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
    <section id="about" className="py-24 md:py-36 bg-[#030712] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md"
            >
              <Cpu className="size-3.5" />
              What I Do
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Building <span className="text-reveal">Reliable Software.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-white/50 text-base md:text-lg font-light leading-relaxed"
            >
              Focusing on clean code, practical user experiences, and web & mobile development.
            </motion.p>
          </div>

          {/* Pillars 4-Column Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 w-fit">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
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
                  <Terminal className="size-4" /> Core Stack
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Technologies & Tools</h3>
              </div>
              <span className="text-xs text-white/40 font-mono">Next.js • Node.js • Bun</span>
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


