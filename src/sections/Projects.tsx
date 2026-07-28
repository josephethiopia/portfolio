"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Globe, Sparkles, Code2, ArrowUpRight, Layers } from "lucide-react";

import tigatImage from "../../public/images/tigat-new.png";
import nileodeImage from "../../public/images/nileode-new.png";
import whalersImage from "../../public/images/whalers.png";
import LalibelaImage from "../../public/images/lalibela.png";
import calmifyImage from "../../public/images/calmify-home.png";
import servicenowImage from "../../public/service.png";
import HUHTImage from "../../public/images/huht-new.png";
import DidecoImage from "../../public/images/dideco.png";
import MojoImage from "../../public/images/mojo.png";
import lehulumImage from "../../public/lehulum.png";

export interface Project {
  id: string;
  name: string;
  category: "SaaS & Enterprise" | "Web & E-Commerce" | "Social & NGO";
  description: string;
  longDescription: string;
  tags: string[];
  image: StaticImageData;
  link: string;
  location: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "lehulum",
    name: "Lehulum Exams",
    category: "Social & NGO",
    description: "Interactive Telegram Mini App for national exam prep, quizzes, and instant scoring analytics.",
    longDescription: "Engineered a high-performing Telegram Mini App (@lehulum_exams_bot) tailored for students preparing for national exams. Built with seamless WebApp integration, instant quiz evaluation algorithms, streak tracking, and interactive study modules directly inside Telegram.",
    tags: ["Telegram Mini App", "Next.js", "TypeScript", "Node.js", "Bot API"],
    image: lehulumImage,
    link: "https://t.me/lehulum_exams_bot",
    location: "Ethiopia",
    highlights: ["Built-in Telegram WebApp UX", "Instant Quiz Evaluation", "@lehulum_exams_bot Bot Integration"]
  },
  {
    id: "servicenow",
    name: "ServiceNow Platform",
    category: "SaaS & Enterprise",
    description: "Enterprise IT workflow automation & ITIL management portal for streamlined digital transformations.",
    longDescription: "Architected enterprise portal integrations and automated service request workflows. Enhanced operational productivity by centralizing cross-department incident tracking and system monitoring.",
    tags: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "Enterprise Integration"],
    image: servicenowImage,
    link: "https://servicenow.com",
    location: "Canada",
    highlights: ["Automated ITIL workflows", "Sub-second response times", "Enterprise RBAC security"]
  },
  {
    id: "whalers",
    name: "Whalers App",
    category: "SaaS & Enterprise",
    description: "Web3 ecosystem analytics and crypto liquidity tracking dashboard built for institutional traders.",
    longDescription: "High-throughput analytics platform aggregating real-time crypto transactions, smart contract events, and market sentiment metrics into clean visual dashboards.",
    tags: ["React", "TypeScript", "Ethers.js", "Tailwind CSS", "WebSockets"],
    image: whalersImage,
    link: "https://whalerapp.com",
    location: "USA",
    highlights: ["Live WebSocket streaming", "Dark-mode charts", "Smart contract integration"]
  },
  {
    id: "lalibela",
    name: "Lalibela Honey",
    category: "Web & E-Commerce",
    description: "Artisanal organic honey brand showcase featuring global shipping and interactive product stories.",
    longDescription: "Designed and implemented a high-conversion e-commerce brand presence spotlighting authentic Ethiopian honey production, sustainable harvesting, and direct buyer inquiries.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe API"],
    image: LalibelaImage,
    link: "https://lalibelahoney.com",
    location: "Ethiopia",
    highlights: ["Custom product story layout", "SEO score 98+", "Localized checkout flows"]
  },
  {
    id: "mojo",
    name: "The Mojo Effect",
    category: "SaaS & Enterprise",
    description: "Digital agency & creative product lab delivering high-impact brand strategies & tech solutions.",
    longDescription: "Built a sleek, motion-rich digital platform highlighting portfolio showcases, client case studies, and interactive service proposal calculators for prospective partners.",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    image: MojoImage,
    link: "https://themojoeffect.com/",
    location: "USA",
    highlights: ["60fps micro-animations", "Fluid page transitions", "Dynamic case study grid"]
  },
  {
    id: "huht",
    name: "HUHT Orphanage",
    category: "Social & NGO",
    description: "Non-profit humanitarian platform supporting vulnerable children with sponsorship management.",
    longDescription: "Engineered a transparent donor and sponsor portal empowering global donors to contribute directly, track child educational sponsorship, and view impact reports.",
    tags: ["React", "Node.js", "Express", "Stripe", "PostgreSQL"],
    image: HUHTImage,
    link: "https://huhtorphanage.com",
    location: "Canada",
    highlights: ["Child sponsorship manager", "Recurring donation engine", "Impact report portal"]
  },
  {
    id: "dideco",
    name: "Dideco North America",
    category: "SaaS & Enterprise",
    description: "B2B manufacturing directory and international industrial distribution network platform.",
    longDescription: "Full-scale corporate website and product inquiry engine facilitating industrial equipment distribution, quote generation, and regional distributor mapping.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    image: DidecoImage,
    link: "https://dideco.com",
    location: "North America",
    highlights: ["Multi-region product filtering", "Instant RFQ generator", "Responsive grid design"]
  },
  {
    id: "calmify",
    name: "Calmify AI",
    category: "Social & NGO",
    description: "Mental health wellness app featuring AI-assisted guided meditation and empathetic journaling.",
    longDescription: "Innovative wellness companion using AI sentiment analysis to deliver personalized stress-reduction exercises, mood tracking analytics, and supportive audio experiences.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Zustand"],
    image: calmifyImage,
    link: "https://calmify.com",
    location: "Ethiopia",
    highlights: ["AI conversation interface", "Daily mood tracker", "Audio wave visualization"]
  },
  {
    id: "tigat",
    name: "Tigat.net",
    category: "Web & E-Commerce",
    description: "Modern digital marketplace connecting tech talents with regional tech opportunities.",
    longDescription: "Regional tech career ecosystem featuring instant job matching, resume builders, verified skill badge badges, and real-time messaging between employers and engineers.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: tigatImage,
    link: "https://tigat.net",
    location: "Ethiopia",
    highlights: ["Talent match algorithm", "Instant chat notifications", "Verified developer profiles"]
  },
  {
    id: "nileode",
    name: "Nileode Technologies",
    category: "SaaS & Enterprise",
    description: "Software engineering foundry specializing in custom enterprise software & cloud solutions.",
    longDescription: "Corporate flagship website for Nileode, featuring interactive service offerings, engineering case studies, tech stack matrix, and instant project consultation scheduling.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    image: nileodeImage,
    link: "https://nileode.com",
    location: "Ethiopia",
    highlights: ["Interactive service matrix", "Custom quote calculator", "Optimized Core Web Vitals"]
  }
];

const categories = ["All", "SaaS & Enterprise", "Web & E-Commerce", "Social & NGO"] as const;

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#030712] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md"
          >
            <Sparkles className="size-3.5" />
            Curated Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Featured <span className="text-reveal">Engineering Work.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-white/50 text-base md:text-lg font-light leading-relaxed"
          >
            A curated showcase of production applications, enterprise portals, and cloud platforms engineered for real-world impact.
          </motion.p>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-6"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.4)] scale-105"
                      : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Projects Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-500 flex flex-col h-[420px]"
              >
                {/* Project Banner & Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 rounded-full">
                      {project.location}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-10 bg-slate-950/80">
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors tracking-tight flex items-center justify-between">
                      <span>{project.name}</span>
                      <ArrowUpRight className="size-5 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-white/60 font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 items-center">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] font-medium text-white/60 bg-white/5 rounded-md border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-white/40 font-mono">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#090d16] p-6 md:p-8 shadow-2xl shadow-emerald-500/10 no-visible-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all z-20"
              >
                <X className="size-5" />
              </button>

              {/* Modal Header */}
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                      {selectedProject.location} • {selectedProject.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 text-white/80">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-2">
                    <Layers className="size-4 text-emerald-400" /> Executive Overview
                  </h4>
                  <p className="text-sm md:text-base leading-relaxed text-white/70 font-light">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                    <Sparkles className="size-4 text-emerald-400" /> Key Architectural Highlights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedProject.highlights.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-emerald-200 font-medium">
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                    <Code2 className="size-4 text-emerald-400" /> Tech Stack & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 rounded-full border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40 flex items-center gap-1.5">
                    <Globe className="size-4 text-emerald-400" /> Live Deployment
                  </span>
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                  >
                    VISIT PROJECT WEBSITE
                    <ExternalLink className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


