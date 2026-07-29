"use client";

import { Timeline } from "@/components/ui/timeline";
import {
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandDocker,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandPrisma,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const techSkills = [
    { name: "Next.js 14", logo: <IconBrandNextjs size={48} stroke={1.5} /> },
    { name: "TypeScript", logo: <IconBrandTypescript size={48} stroke={1.5} /> },
    { name: "React", logo: <IconBrandReact size={48} stroke={1.5} /> },
    { name: "Node.js", logo: <IconBrandNodejs size={48} stroke={1.5} /> },
    { name: "Docker", logo: <IconBrandDocker size={48} stroke={1.5} /> },
    { name: "Tailwind CSS", logo: <IconBrandTailwind size={48} stroke={1.5} /> },
  ];

  const timelineData = [
    {
      title: "2025 - Present",
      content: (
        <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-2xl glass-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Briefcase className="size-4 sm:size-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Software Engineer</h3>
              <p className="text-[11px] sm:text-xs text-emerald-400 font-mono">Independent Consultant</p>
            </div>
          </div>
          <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
            Building web applications, backend APIs, Expo Android apps, and Telegram Mini Apps for clients.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
            {["Next.js", "TypeScript", "React Native / Expo", "Telegram Mini Apps", "Node.js", "Docker"].map((skill) => (
              <span key={skill} className="px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-medium bg-white/5 border border-white/10 rounded-full text-white/70">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2025 - 2026",
      content: (
        <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-2xl glass-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Briefcase className="size-4 sm:size-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Web & Mobile Developer</h3>
              <p className="text-[11px] sm:text-xs text-sky-400 font-mono">Lehulum Exams Ecosystem (@lehulum_exams_bot)</p>
            </div>
          </div>
          <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
            Engineered the Lehulum Exams Telegram Mini App for national exam preparation with instant quiz evaluation and streak tracking.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
            {["Telegram WebApp API", "React", "Node.js", "Tailwind CSS"].map((skill) => (
              <span key={skill} className="px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-medium bg-white/5 border border-white/10 rounded-full text-white/70">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2025",
      content: (
        <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-2xl glass-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Briefcase className="size-4 sm:size-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Freelance Software Engineer</h3>
              <p className="text-[11px] sm:text-xs text-emerald-400 font-mono">DNT Services & Remote Companies</p>
            </div>
          </div>
          <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
            Worked remotely building custom web applications, client dashboards, and frontend interfaces for DNT Services and international companies.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
            {["React", "JavaScript", "TypeScript", "Node.js", "Web Apps"].map((skill) => (
              <span key={skill} className="px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-medium bg-white/5 border border-white/10 rounded-full text-white/70">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-36 bg-[#030712] relative overflow-hidden">
      <div className="container px-2 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <p className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">Career Timeline</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Professional <span className="text-reveal">Track Record.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Timeline data={timelineData} />
        </div>

        {/* Skill Badges */}
        <div className="mt-12 sm:mt-20 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {techSkills.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2 sm:gap-3 group hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300"
            >
              <div className="text-white/40 group-hover:text-emerald-400 transition-colors duration-300">
                {item.logo}
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

