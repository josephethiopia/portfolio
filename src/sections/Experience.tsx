"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "2025 – Present",
    role: "Software Engineer",
    company: "Independent Consultant",
    location: "Remote",
    description:
      "Architecting and shipping production web applications, backend APIs, and cross-platform mobile apps for international clients.",
    highlights: [
      "Engineered Telegram Mini Apps featuring seamless WebApp state sync, automated bot commands, and low-latency API handlers.",
      "Containerized microservices with Docker and configured Linux environments for reliable, zero-downtime client deployments.",
      "Consulted directly with founders to translate business requirements into clean, scalable software architectures."
    ],
    skills: ["Next.js", "TypeScript", "React Native / Expo", "Telegram Mini Apps", "Node.js", "Docker"]
  },
  {
    period: "2025 – 2026",
    role: "Web & Mobile Developer",
    company: "Lehulum Exams Ecosystem (@lehulum_exams_bot)",
    location: "Addis Ababa, Ethiopia",
    description:
      "Built and deployed the Lehulum Exams Telegram Mini App used by national exam students across Ethiopia.",
    highlights: [
      "Engineered instant quiz evaluation algorithms, timed exam simulators, and daily streak tracking directly inside Telegram.",
      "Optimized mobile frontend speed and asset delivery for smooth operation even on low-bandwidth 3G and 4G networks."
    ],
    skills: ["Telegram WebApp API", "React", "TypeScript", "Node.js", "Tailwind CSS"]
  },
  {
    period: "Summer 2024",
    role: "Backend & DB Lecturer / Mentor",
    company: "Google Developer Groups (GDG) on Campus — AAU",
    location: "Addis Ababa, Ethiopia",
    description:
      "Taught and mentored 120+ Computer Science and Software Development students at Addis Ababa University in backend architecture and database systems.",
    highlights: [
      "Delivered hands-on technical workshops covering Node.js, Express, PostgreSQL, Prisma ORM, and database normalization principles.",
      "Guided student engineering teams in building production-ready REST APIs, implementing secure authentication, and writing optimized SQL queries."
    ],
    skills: ["Node.js", "PostgreSQL", "Prisma ORM", "API Architecture", "Database Design"]
  },
  {
    period: "2022 – 2025",
    role: "Freelance Software Engineer",
    company: "DNT Services & Remote Companies",
    location: "Remote (US & Canada)",
    description:
      "Built responsive client portals, corporate dashboards, and enterprise integration tools for international businesses.",
    highlights: [
      "Engineered real-time data visualization platforms (Whalers App) handling live cryptocurrency transactions via WebSockets.",
      "Integrated third-party services including Stripe payment gateways, OAuth authentication, and external webhook pipelines."
    ],
    skills: ["React", "JavaScript", "TypeScript", "Node.js", "WebSockets"]
  },
  {
    period: "2023 – 2027 (Expected)",
    role: "B.Sc. in Infrastructure Management (CoTM)",
    company: "Addis Ababa University (AAU)",
    location: "Addis Ababa, Ethiopia",
    description:
      "Engineering degree specializing in Construction Technology & Management (CoTM), infrastructure systems, and digital modeling.",
    highlights: [
      "Rigorous engineering coursework covering engineering mathematics, systems modeling, structural concepts, and project scheduling.",
      "GDG on Campus student mentor and campus tech community contributor."
    ],
    skills: ["Infrastructure Systems", "Project Management", "Data Modeling", "Systems Engineering"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Career Timeline
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Work Experience & Mentorship
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              4+ years of building production software and mentoring engineers.
            </p>
          </div>
        </div>

        {/* Minimalist Editorial Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {exp.description}
              </p>

              <ul className="space-y-1 text-xs text-slate-400 leading-relaxed list-disc list-outside pl-4 pt-1">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="pl-0.5">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 rounded border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
