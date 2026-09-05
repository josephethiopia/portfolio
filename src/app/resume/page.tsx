"use client";

import React, { useState } from "react";
import Link from "next/link";
import { resumeData } from "@/data/resumeData";
import {
  Download,
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Github,
  Send,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Terminal,
  Award,
  Languages,
  Check,
  Copy,
  Sparkles,
  Sun,
  Moon,
  Layers
} from "lucide-react";

export default function ResumePage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const copyEmail = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(resumeData.personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const { personal, skills, experience, projects, education, leadership, languages } = resumeData;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-emerald-500/30 py-4 sm:py-8 md:py-12 px-2 sm:px-4 md:px-8 print:p-0 print:bg-white print:text-slate-900">
      
      {/* Top Action Bar (Screen Only - Hidden when printing or exporting PDF) */}
      <div className="max-w-4xl mx-auto mb-4 sm:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wide transition-all border border-white/10 active:scale-95"
        >
          <ArrowLeft className="size-4 text-emerald-400 shrink-0" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {/* Real Dark Mode / Paper Preview Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? "Switch to Paper View (Print Preview)" : "Switch to Real Dark Mode View"}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-all active:scale-95 cursor-pointer"
          >
            {isDarkMode ? (
              <>
                <Sun className="size-4 text-amber-400" />
                <span className="hidden sm:inline">Paper View</span>
              </>
            ) : (
              <>
                <Moon className="size-4 text-sky-400" />
                <span className="hidden sm:inline">Dark View</span>
              </>
            )}
          </button>

          {/* Quick Copy Email */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-all active:scale-95 cursor-pointer"
          >
            {copiedEmail ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
            <span className="hidden sm:inline">{copiedEmail ? "Copied!" : "Copy Email"}</span>
          </button>

          {/* Separate Print Button */}
          <button
            onClick={handlePrint}
            title="Open browser print dialog"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/15 active:scale-95 cursor-pointer"
          >
            <Printer className="size-4 text-emerald-400 shrink-0" />
            <span>Print CV</span>
          </button>

          {/* Separate Download PDF Button (Direct file download named Yoseph_Ashenafi_Resume.pdf) */}
          <a
            href="/Yoseph_Ashenafi_Resume.pdf"
            download="Yoseph_Ashenafi_Resume.pdf"
            title="Download Yoseph_Ashenafi_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.35)] active:scale-95 cursor-pointer"
          >
            <Download className="size-4 shrink-0" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Screen Helper Note */}
      <div className="max-w-4xl mx-auto mb-4 text-center print:hidden">
        <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 font-light">
          <Sparkles className="size-3 text-emerald-400" />
          <span>Click <strong>Download PDF</strong> to instantly download <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded font-mono">Yoseph_Ashenafi_Resume.pdf</code> or click <strong>Print CV</strong> to print.</span>
        </p>
      </div>

      {/* The Printable Minimalist CV Sheet */}
      <div
        className={`w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 transition-all duration-300 print:max-w-none print:w-full print:p-0 print:border-none print:shadow-none print:rounded-none ${
          isDarkMode
            ? "bg-[#090d16] text-slate-100 border border-slate-800 shadow-[0_0_50px_rgba(16,185,129,0.08)]"
            : "bg-white text-slate-900 border border-slate-200/90 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
        } print:!bg-white print:!text-slate-900`}
      >
        
        {/* ======================= HEADER ======================= */}
        <header
          className={`border-b pb-5 sm:pb-6 print:pb-4 space-y-3 print:space-y-2.5 ${
            isDarkMode ? "border-slate-800" : "border-slate-200"
          } print:!border-slate-300`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
                  isDarkMode ? "text-white drop-shadow-sm" : "text-slate-950"
                } print:!text-slate-950`}
              >
                {personal.name}
              </h1>
              <p
                className={`text-xs sm:text-sm font-semibold tracking-wide mt-1 ${
                  isDarkMode ? "text-emerald-400" : "text-emerald-700"
                } print:!text-slate-800`}
              >
                {personal.title}
              </p>
            </div>

            {/* Quick Location / Availability pill */}
            <div
              className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md w-fit ${
                isDarkMode
                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              } print:!bg-transparent print:!text-slate-700 print:!border-none`}
            >
              <MapPin className={`size-3 shrink-0 ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-700`} />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Contact Bar with Active Clickable Links for PDF */}
          <div
            className={`pt-2 border-t flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs ${
              isDarkMode ? "border-slate-800/80 text-slate-300" : "border-slate-100 text-slate-600"
            } print:!border-slate-200 print:!text-slate-800`}
          >
            <a
              href={`mailto:${personal.email}`}
              className={`inline-flex items-center gap-1.5 transition-colors ${
                isDarkMode ? "hover:text-emerald-400" : "hover:text-emerald-700"
              }`}
            >
              <Mail className={`size-3.5 shrink-0 ${isDarkMode ? "text-emerald-400" : "text-slate-400"} print:!text-slate-600`} />
              <span>{personal.email}</span>
            </a>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              className={`inline-flex items-center gap-1.5 transition-colors font-mono text-[11px] ${
                isDarkMode ? "hover:text-emerald-400" : "hover:text-emerald-700"
              }`}
            >
              <Phone className={`size-3.5 shrink-0 ${isDarkMode ? "text-emerald-400" : "text-slate-400"} print:!text-slate-600`} />
              <span>{personal.phone}</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 transition-colors ${
                isDarkMode ? "hover:text-emerald-400" : "hover:text-emerald-700"
              }`}
            >
              <Github className={`size-3.5 shrink-0 ${isDarkMode ? "text-emerald-400" : "text-slate-400"} print:!text-slate-600`} />
              <span className="font-mono text-[11px]">github.com/josephethropia</span>
            </a>

            <a
              href={personal.telegram}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 transition-colors ${
                isDarkMode ? "hover:text-emerald-400" : "hover:text-emerald-700"
              }`}
            >
              <Send className={`size-3.5 shrink-0 ${isDarkMode ? "text-emerald-400" : "text-slate-400"} print:!text-slate-600`} />
              <span className="font-mono text-[11px]">@joaccount</span>
            </a>
          </div>

          {/* Executive Summary Block */}
          <div
            className={`p-3 sm:p-3.5 rounded-lg border-l-4 leading-relaxed font-normal ${
              isDarkMode
                ? "bg-slate-900/80 border-emerald-400 border border-slate-800 text-slate-200"
                : "bg-slate-50 border-emerald-600 border border-slate-200/60 text-slate-800"
            } print:!bg-slate-50/70 print:!border-l-4 print:!border-slate-800 print:!border-t-0 print:!border-r-0 print:!border-b-0 print:!text-slate-900`}
          >
            <p className="text-xs sm:text-[13px] leading-relaxed">
              {personal.summary}
            </p>
          </div>
        </header>

        {/* ======================= TWO-COLUMN ASYMMETRICAL BODY (PAGE 1) ======================= */}
        <div className="pt-5 sm:pt-6 print:pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 print:grid-cols-12 print:gap-6 items-start">
          
          {/* ==================== LEFT COLUMN (MAIN - 60-65% WIDTH) ==================== */}
          <div className="md:col-span-7 print:col-span-7 space-y-6 print:space-y-4">
            
            {/* Professional Experience Section */}
            <section className="space-y-3.5 print:space-y-3">
              <div
                className={`flex items-center gap-2 border-b pb-1 ${
                  isDarkMode ? "border-slate-800" : "border-slate-300"
                } print:!border-slate-400`}
              >
                <Briefcase className={`size-4 ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-900`} />
                <h2
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  } print:!text-slate-950`}
                >
                  Professional Experience & Mentorship
                </h2>
              </div>

              <div className="space-y-4 print:space-y-3.5">
                {experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5 print-break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                      <h3
                        className={`text-xs sm:text-[13px] font-bold ${
                          isDarkMode ? "text-white" : "text-slate-950"
                        } print:!text-slate-950`}
                      >
                        {exp.role}
                      </h3>
                      <span
                        className={`text-[11px] font-mono shrink-0 ${
                          isDarkMode ? "text-emerald-400/90 font-medium" : "text-slate-500"
                        } print:!text-slate-700`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <div
                      className={`flex items-center justify-between text-xs font-medium ${
                        isDarkMode ? "text-emerald-400" : "text-emerald-800"
                      } print:!text-slate-800`}
                    >
                      <span>{exp.company}</span>
                      <span className={isDarkMode ? "text-slate-400 text-[11px]" : "text-slate-500 text-[11px] print:!text-slate-600"}>
                        {exp.location}
                      </span>
                    </div>

                    <ul
                      className={`space-y-1 text-xs leading-relaxed list-disc list-outside pl-3.5 ${
                        isDarkMode ? "text-slate-300" : "text-slate-700"
                      } print:!text-slate-800`}
                    >
                      {exp.highlights.map((bullet, i) => (
                        <li key={i} className="pl-0.5">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ==================== RIGHT COLUMN (SIDEBAR - 35-40% WIDTH) ==================== */}
          <div className="md:col-span-5 print:col-span-5 space-y-5 print:space-y-4">
            
            {/* Education Section */}
            <section className="space-y-2.5 print-break-inside-avoid">
              <div
                className={`flex items-center gap-2 border-b pb-1 ${
                  isDarkMode ? "border-slate-800" : "border-slate-300"
                } print:!border-slate-400`}
              >
                <GraduationCap className={`size-4 ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-900`} />
                <h2
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  } print:!text-slate-950`}
                >
                  Education
                </h2>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className={`text-xs sm:text-[13px] font-bold ${isDarkMode ? "text-white" : "text-slate-950"} print:!text-slate-950`}>
                    {edu.institution}
                  </h3>
                  <p className={`text-xs font-medium ${isDarkMode ? "text-emerald-300" : "text-emerald-800"} print:!text-slate-800`}>
                    {edu.degree}
                  </p>
                  <div
                    className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold font-mono ${
                      isDarkMode
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        : "bg-slate-100 text-slate-800 border border-slate-200"
                    } print:!bg-slate-100 print:!text-slate-900 print:!border-slate-300`}
                  >
                    {edu.period}
                  </div>
                  {edu.details && (
                    <ul className={`text-[11px] space-y-0.5 pt-1 ${isDarkMode ? "text-slate-400" : "text-slate-600"} print:!text-slate-700`}>
                      {edu.details.map((detail, i) => (
                        <li key={i} className="leading-snug">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>

            {/* Technical Skills Matrix */}
            <section className="space-y-2.5 print-break-inside-avoid">
              <div
                className={`flex items-center gap-2 border-b pb-1 ${
                  isDarkMode ? "border-slate-800" : "border-slate-300"
                } print:!border-slate-400`}
              >
                <Code2 className={`size-4 ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-900`} />
                <h2
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  } print:!text-slate-950`}
                >
                  Technical Skills
                </h2>
              </div>

              <div className="space-y-2">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-0.5">
                    <h3
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isDarkMode ? "text-emerald-400" : "text-slate-900"
                      } print:!text-slate-900`}
                    >
                      {skillGroup.category}
                    </h3>
                    <p className={`text-xs leading-snug ${isDarkMode ? "text-slate-300" : "text-slate-700"} print:!text-slate-800`}>
                      {skillGroup.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Leadership & Campus Impact */}
            {leadership && leadership.length > 0 && (
              <section className="space-y-2.5 print-break-inside-avoid">
                <div
                  className={`flex items-center gap-2 border-b pb-1 ${
                    isDarkMode ? "border-slate-800" : "border-slate-300"
                  } print:!border-slate-400`}
                >
                  <Award className={`size-4 ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-900`} />
                  <h2
                    className={`text-xs font-bold uppercase tracking-widest ${
                      isDarkMode ? "text-white" : "text-slate-950"
                    } print:!text-slate-950`}
                  >
                    Leadership & Community
                  </h2>
                </div>

                {leadership.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h3 className={`text-xs font-bold ${isDarkMode ? "text-white" : "text-slate-950"} print:!text-slate-950`}>
                      {item.role}
                    </h3>
                    <p className={`text-[11px] font-medium ${isDarkMode ? "text-emerald-400" : "text-emerald-800"} print:!text-slate-800`}>
                      {item.organization} · {item.period}
                    </p>
                    <p className={`text-xs leading-snug ${isDarkMode ? "text-slate-300" : "text-slate-700"} print:!text-slate-700`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* Core Competencies / Strengths */}
            <section className="space-y-2 print-break-inside-avoid">
              <div
                className={`flex items-center gap-2 border-b pb-1 ${
                  isDarkMode ? "border-slate-800" : "border-slate-300"
                } print:!border-slate-400`}
              >
                <Sparkles className={`size-4 ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-900`} />
                <h2
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  } print:!text-slate-950`}
                >
                  Core Specializations
                </h2>
              </div>
              <ul className={`text-xs space-y-1 leading-snug ${isDarkMode ? "text-slate-300" : "text-slate-700"} print:!text-slate-800`}>
                <li className="flex items-start gap-1.5">
                  <span className={`font-bold ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-800`}>•</span>
                  <span>Telegram Mini Apps & WebApp APIs</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className={`font-bold ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-800`}>•</span>
                  <span>High-Throughput REST & WebSockets APIs</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className={`font-bold ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-800`}>•</span>
                  <span>Relational Schema Modeling & SQL Optimization</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className={`font-bold ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-800`}>•</span>
                  <span>Cross-Platform Mobile Apps (Expo / React Native)</span>
                </li>
              </ul>
            </section>

            {/* Spoken Languages */}
            <section className="space-y-2 print-break-inside-avoid">
              <div
                className={`flex items-center gap-2 border-b pb-1 ${
                  isDarkMode ? "border-slate-800" : "border-slate-300"
                } print:!border-slate-400`}
              >
                <Languages className={`size-4 ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-900`} />
                <h2
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  } print:!text-slate-950`}
                >
                  Languages
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`p-2 rounded border ${
                      isDarkMode
                        ? "bg-slate-900/80 border-slate-800 text-white"
                        : "bg-slate-50 border-slate-200 text-slate-900"
                    } print:!bg-slate-50 print:!border-slate-200 print:!text-slate-900`}
                  >
                    <p className="font-bold">{lang.name}</p>
                    <p className={`text-[10px] font-medium ${isDarkMode ? "text-emerald-400" : "text-slate-500"} print:!text-slate-600`}>
                      {lang.proficiency}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

        {/* ======================= DEDICATED FULL-WIDTH PRODUCTION PROJECTS (PAGE 2) ======================= */}
        <div className="pt-8 sm:pt-10 print:pt-8 print:break-before-page border-t mt-8 print:mt-6 border-slate-200 dark:border-slate-800 print:!border-slate-300">
          <div className="space-y-4">
            <div
              className={`flex items-center justify-between border-b pb-1.5 ${
                isDarkMode ? "border-slate-800" : "border-slate-300"
              } print:!border-slate-400`}
            >
              <div className="flex items-center gap-2">
                <Terminal className={`size-4 ${isDarkMode ? "text-emerald-400" : "text-emerald-700"} print:!text-slate-900`} />
                <h2
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  } print:!text-slate-950`}
                >
                  Key Production Projects & Architectures
                </h2>
              </div>
              <span className={`text-[11px] font-mono hidden sm:inline ${isDarkMode ? "text-slate-400" : "text-slate-500"} print:!text-slate-600`}>
                Case Studies & Deployed Systems
              </span>
            </div>

            {/* 2-Column Responsive Grid across Full Width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 print:grid-cols-2 print:gap-3">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all print-break-inside-avoid ${
                    isDarkMode
                      ? "bg-slate-900/60 border-slate-800/90 hover:border-emerald-500/30"
                      : "bg-slate-50/80 border-slate-200/80 hover:border-slate-300"
                  } print:!p-2.5 print:!bg-transparent print:!border print:!border-slate-200 print:!rounded-md`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <h3
                        className={`text-xs sm:text-[13px] font-bold ${
                          isDarkMode ? "text-white" : "text-slate-950"
                        } print:!text-slate-950`}
                      >
                        {proj.name}
                      </h3>
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`transition-colors ${
                            isDarkMode ? "text-emerald-400 hover:text-emerald-300" : "text-emerald-700 hover:text-emerald-900"
                          } print:!text-slate-700`}
                          title="Open project"
                        >
                          <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p
                    className={`text-[10px] font-mono font-medium mt-0.5 ${
                      isDarkMode ? "text-emerald-400/90" : "text-emerald-800"
                    } print:!text-slate-600`}
                  >
                    {proj.subtitle}
                  </p>

                  <p
                    className={`text-xs leading-relaxed mt-1.5 ${
                      isDarkMode ? "text-slate-300 font-light" : "text-slate-700"
                    } print:!text-slate-800`}
                  >
                    {proj.description}
                  </p>

                  <p
                    className={`text-[10px] font-mono pt-2 border-t mt-2 ${
                      isDarkMode ? "border-slate-800/80 text-slate-400" : "border-slate-200 text-slate-500"
                    } print:!border-slate-200 print:!text-slate-600`}
                  >
                    <strong className={isDarkMode ? "text-emerald-400 font-semibold" : "text-slate-800 font-semibold"}>
                      Tech:
                    </strong>{" "}
                    {proj.tech.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
