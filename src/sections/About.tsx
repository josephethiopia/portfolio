"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Layout,
  MessageSquare,
  Server,
  Smartphone,
  Terminal,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5 & CSS3"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["Next.js (App Router)", "React", "React Native & Expo", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js & Express", "Hono.js", "RESTful APIs", "WebSockets", "Telegram Bot API"],
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis", "Schema Design & Optimization"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Linux Administration", "Git & GitHub Actions", "Vercel", "Supabase"],
  },
];

const pillars = [
  {
    icon: <Layout className="size-5 text-emerald-400" />,
    title: "Web Engineering",
    description: "Building fast, SEO-optimized, accessible web applications with Next.js, React, and Tailwind CSS.",
  },
  {
    icon: <Smartphone className="size-5 text-sky-400" />,
    title: "Mobile Development",
    description: "Developing cross-platform Android and iOS applications with React Native and Expo.",
  },
  {
    icon: <Server className="size-5 text-emerald-400" />,
    title: "Backend & Systems",
    description: "Designing reliable REST APIs, database schemas, and persistent WebSocket connections with Node.js and PostgreSQL.",
  },
  {
    icon: <MessageSquare className="size-5 text-sky-400" />,
    title: "Telegram Mini Apps",
    description: "Architecting interactive bots and high-throughput Mini Apps, notably Lehulum Exams (@lehulum_exams_bot).",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            About & Architecture
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Engineering Focus & Core Stack
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Pragmatic software engineering built around performance, reliability, and real user value.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid (Mobile-First: 1 col mobile, 2 col tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 transition-all flex items-start gap-3.5 sm:gap-4"
            >
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                {pillar.icon}
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight break-words">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Stack Matrix */}
        <div className="p-4 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="size-4 text-emerald-400" />
              <span>Production Technologies & Frameworks</span>
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              Battle-tested tools
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {techCategories.map((group) => (
              <div key={group.category} className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
