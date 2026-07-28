"use client";

import React from "react";
import Link from "next/link";
import { resumeData } from "@/data/resumeData";
import { Download, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const { personal, skills, experience, projects, education } = resumeData;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-emerald-500/30 print:bg-white print:text-slate-900 py-6 sm:py-10 px-4 sm:px-6 md:px-8">
      
      {/* Action Bar (Hidden when printing/exporting PDF) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/10"
        >
          <ArrowLeft className="size-4 text-emerald-400" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-400 text-black text-xs font-extrabold uppercase tracking-widest hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] active:scale-95 cursor-pointer"
          >
            <Download className="size-4" /> Download PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet - Dual Layer (Screen Glass / Paper Print) */}
      <div className="max-w-4xl mx-auto bg-slate-950 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl print:shadow-none print:border-none print:bg-white print:p-0 print:text-slate-900">
        
        {/* Paper-First Resume Header */}
        <header className="border-b border-white/10 print:border-slate-900 pb-6 print:pb-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-slate-950 print:text-3xl">
                {personal.name}
              </h1>
              <p className="text-emerald-400 print:text-slate-800 font-bold text-sm sm:text-base">
                {personal.title}
              </p>
            </div>

            {/* Formal Contact Information */}
            <div className="text-xs space-y-1 text-slate-300 print:text-slate-800 font-medium">
              <div className="flex items-center gap-1.5">
                <Mail className="size-3.5 text-emerald-400 print:hidden" />
                <span className="print:font-semibold">Email:</span>
                <a href={`mailto:${personal.email}`} className="hover:underline">{personal.email}</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="size-3.5 text-emerald-400 print:hidden" />
                <span className="print:font-semibold">Phone:</span>
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-emerald-400 print:hidden" />
                <span className="print:font-semibold">Location:</span>
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="size-3.5 text-emerald-400 print:hidden" />
                <span className="print:font-semibold">GitHub:</span>
                <span>github.com/josephethropia</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/5 print:bg-transparent print:border-none print:p-0 print:mt-3">
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-900 font-light print:font-normal leading-relaxed">
              {personal.summary}
            </p>
          </div>
        </header>

        {/* Formal Education Section */}
        <section className="py-5 border-b border-white/10 print:border-slate-300 print:py-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 print:text-slate-950 print:text-sm print:font-bold mb-3 print:mb-2 print:border-b print:border-slate-400 print:pb-1">
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
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
        <section className="py-5 border-b border-white/10 print:border-slate-300 print:py-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 print:text-slate-950 print:text-sm print:font-bold mb-3 print:mb-2 print:border-b print:border-slate-400 print:pb-1">
            Technical Skills & Architecture Matrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:grid-cols-3 print:gap-3">
            {skills.map((group) => (
              <div key={group.category} className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 print:bg-transparent print:border-none print:p-0 space-y-2">
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
        <section className="py-5 border-b border-white/10 print:border-slate-300 print:py-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 print:text-slate-950 print:text-sm print:font-bold mb-3 print:mb-2 print:border-b print:border-slate-400 print:pb-1">
            Professional Experience
          </h2>
          <div className="space-y-5 print:space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-sm font-extrabold text-white print:text-slate-950 print:text-sm">
                    {exp.role} — <span className="text-emerald-400 print:text-slate-800 font-bold">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-800 print:font-semibold">
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
        <section className="pt-5 print:pt-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 print:text-slate-950 print:text-sm print:font-bold mb-3 print:mb-2 print:border-b print:border-slate-400 print:pb-1">
            Key Engineering Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            {projects.map((proj, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 print:bg-transparent print:border-none print:p-0 space-y-1">
                <div className="flex items-center justify-between">
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


