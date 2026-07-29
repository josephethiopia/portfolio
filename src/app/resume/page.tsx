"use client";

import React from "react";
import Link from "next/link";
import { resumeData } from "@/data/resumeData";
import { Download, ArrowLeft, Mail, Phone, MapPin, Github, Send } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const { personal, skills, experience, projects, education } = resumeData;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-emerald-500/30 print:bg-white print:text-slate-900 py-3 sm:py-10 px-2 sm:px-6 md:px-8">
      
      {/* Top Action Bar (Hidden when printing/exporting PDF) */}
      <div className="max-w-4xl mx-auto mb-3 sm:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 print:hidden">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-2xl sm:rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/10 active:scale-95"
        >
          <ArrowLeft className="size-4 text-emerald-400 shrink-0" />
          <span>Back to Portfolio</span>
        </Link>

        <button
          onClick={handlePrint}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-2xl sm:rounded-xl bg-emerald-400 text-black text-xs font-extrabold uppercase tracking-widest hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.35)] active:scale-95 cursor-pointer"
        >
          <Download className="size-4 shrink-0" />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet - Dual Layer (Screen Glass / Paper Print) */}
      <div className="w-full max-w-4xl mx-auto bg-slate-950 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl print:shadow-none print:border-none print:bg-white print:p-0 print:text-slate-900 space-y-6 sm:space-y-8">
        
        {/* Paper-First Resume Header */}
        <header className="border-b border-white/10 print:border-slate-900 pb-5 sm:pb-6 print:pb-4 space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-slate-950">
                {personal.name}
              </h1>
              <p className="text-emerald-400 print:text-slate-800 font-bold text-xs sm:text-base">
                {personal.title}
              </p>
            </div>

            {/* Formal Contact Information */}
            <div className="text-xs space-y-1.5 sm:space-y-1 text-slate-300 print:text-slate-800 font-medium break-all sm:break-normal">
              <div className="flex items-center gap-2">
                <Mail className="size-3.5 text-emerald-400 print:hidden shrink-0" />
                <span className="print:font-semibold text-slate-400 print:text-slate-800">Email:</span>
                <a href={`mailto:${personal.email}`} className="hover:underline text-emerald-300 sm:text-slate-300 print:text-slate-800 font-mono text-[11px] sm:text-xs">{personal.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-3.5 text-emerald-400 print:hidden shrink-0" />
                <span className="print:font-semibold text-slate-400 print:text-slate-800">Phone:</span>
                <span className="font-mono text-[11px] sm:text-xs">{personal.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-emerald-400 print:hidden shrink-0" />
                <span className="print:font-semibold text-slate-400 print:text-slate-800">Location:</span>
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="size-3.5 text-emerald-400 print:hidden shrink-0" />
                <span className="print:font-semibold text-slate-400 print:text-slate-800">GitHub:</span>
                <span className="font-mono text-[11px] sm:text-xs">github.com/josephethropia</span>
              </div>
              <div className="flex items-center gap-2">
                <Send className="size-3.5 text-emerald-400 print:hidden shrink-0" />
                <span className="print:font-semibold text-slate-400 print:text-slate-800">Telegram:</span>
                <a href={personal.telegram} target="_blank" rel="noreferrer" className="hover:underline text-emerald-400 print:text-slate-900 font-bold font-mono text-[11px] sm:text-xs">@joaccount</a>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 print:bg-transparent print:border-none print:p-0">
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-900 font-light print:font-normal leading-relaxed">
              {personal.summary}
            </p>
          </div>
        </header>

        {/* Formal Education Section */}
        <section className="pb-5 sm:pb-6 border-b border-white/10 print:border-slate-300 print:pb-4 space-y-3">
          <h2 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-emerald-400 print:text-slate-950 print:text-sm print:font-bold print:border-b print:border-slate-400 print:pb-1">
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4 text-xs sm:text-sm">
              <div>
                <h3 className="font-extrabold text-white print:text-slate-950 print:font-bold">
                  {edu.degree}
                </h3>
                <p className="text-xs text-emerald-400 print:text-slate-700 font-semibold">
                  {edu.institution}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 print:text-slate-800 print:font-semibold">
                {edu.period}
              </span>
            </div>
          ))}
        </section>

        {/* Technical Skills & Competencies */}
        <section className="pb-5 sm:pb-6 border-b border-white/10 print:border-slate-300 print:pb-4 space-y-3">
          <h2 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-emerald-400 print:text-slate-950 print:text-sm print:font-bold print:border-b print:border-slate-400 print:pb-1">
            Technical Skills & Architecture Matrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 print:grid-cols-3 print:gap-3">
            {skills.map((group) => (
              <div key={group.category} className="p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-white/5 print:bg-transparent print:border-none print:p-0 space-y-2">
                <h3 className="text-xs font-extrabold text-white print:text-slate-950 uppercase tracking-wide">
                  {group.category}
                </h3>
                <ul className="text-xs text-slate-300 print:text-slate-800 space-y-1 font-light print:font-normal">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="text-emerald-400 print:text-slate-900">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="pb-5 sm:pb-6 border-b border-white/10 print:border-slate-300 print:pb-4 space-y-3">
          <h2 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-emerald-400 print:text-slate-950 print:text-sm print:font-bold print:border-b print:border-slate-400 print:pb-1">
            Professional Experience
          </h2>
          <div className="space-y-4 sm:space-y-5 print:space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white print:text-slate-950">
                    {exp.role} — <span className="text-emerald-400 print:text-slate-800 font-bold">{exp.company}</span>
                  </h3>
                  <span className="text-[11px] sm:text-xs font-mono text-slate-400 print:text-slate-800 print:font-semibold">
                    {exp.period} | {exp.location}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300 print:text-slate-800 font-light print:font-normal leading-relaxed pl-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 print:text-slate-900">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-3">
          <h2 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-emerald-400 print:text-slate-950 print:text-sm print:font-bold print:border-b print:border-slate-400 print:pb-1">
            Key Engineering Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 print:grid-cols-2 print:gap-3">
            {projects.map((proj, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-white/5 print:bg-transparent print:border-none print:p-0 space-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4 items-start">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white print:text-slate-950">{proj.name}</h3>
                  <span className="text-[10px] font-mono text-emerald-400 print:text-slate-700 font-bold">{proj.subtitle}</span>
                </div>
                <p className="text-xs text-slate-300 print:text-slate-800 font-light print:font-normal leading-relaxed">
                  {proj.description}
                </p>
                <p className="text-[10px] text-slate-400 print:text-slate-600 font-mono pt-1">
                  Tech: {proj.tech.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
