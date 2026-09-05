"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  Globe,
  Code2,
  ArrowUpRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    description: "Interactive Telegram Mini App for national exam prep, timed quizzes, and instant scoring analytics.",
    longDescription: "Engineered a high-performing Telegram Mini App (@lehulum_exams_bot) tailored for students preparing for national exams. Built with seamless WebApp integration, instant quiz evaluation algorithms, streak tracking, and interactive study modules directly inside Telegram.",
    tags: ["Telegram Mini App", "Next.js", "TypeScript", "Node.js", "Bot API"],
    image: lehulumImage,
    link: "https://t.me/lehulum_exams_bot",
    location: "Ethiopia",
    highlights: ["Built-in Telegram WebApp UX", "Instant Quiz Evaluation", "@lehulum_exams_bot Integration"]
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
    <section id="projects" className="py-16 sm:py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Minimal Section Header */}
        <div className="space-y-4 mb-10">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Selected Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              A curated collection of production web applications, enterprise portals, and Telegram Mini Apps.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-visible-scrollbar pt-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-white text-slate-950 font-bold shadow-sm"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Responsive Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Banner */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
                      {project.location}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="size-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5 items-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
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
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#090d16] p-4 sm:p-7 shadow-2xl no-visible-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all z-30 border border-white/15 backdrop-blur-md cursor-pointer"
              >
                <X className="size-4" />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-40 sm:h-56 w-full rounded-xl overflow-hidden mb-3 bg-slate-900 shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
              </div>

              {/* Title & Category Header */}
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {selectedProject.location}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="space-y-4 text-slate-300 text-xs sm:text-sm">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                    Overview
                  </h4>
                  <p className="leading-relaxed text-slate-300 font-light">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Highlights (Stacked 1-column on mobile, 3-column on desktop) */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {selectedProject.highlights.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-emerald-300 font-medium">
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="emerald"
                        className="text-[10px] font-mono"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Links (Full-width touch button on mobile) */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Globe className="size-3.5 text-emerald-400 shrink-0" />
                    <span>Production Deployment</span>
                  </span>
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-300 transition-all shadow-[0_0_15px_rgba(52,211,153,0.3)] w-full sm:w-auto"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="size-3.5" />
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
