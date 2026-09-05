"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  Code2,
  FileText,
  Github,
  Send,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import memojiImage from "../../public/images/memoji-computer.png";

const metrics = [
  { label: "Years Experience", value: "4+" },
  { label: "Production Apps", value: "15+" },
  { label: "AAU ITM", value: "2027 GC" },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-24 sm:pt-36 pb-14 sm:pb-24 overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-12">

          {/* Main Editorial Intro */}
          <div className="space-y-4 sm:space-y-5 max-w-2xl w-full">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for projects & engineering roles</span>
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-1.5 sm:space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Yoseph Ashenafi
              </h1>
              <p className="text-sm sm:text-xl font-medium text-emerald-400 font-mono tracking-tight">
                Software Engineer · Web, Mobile & Backend Systems
              </p>
            </motion.div>

            {/* Editorial Bio Statement */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed"
            >
              Building scalable web applications, cross-platform mobile apps (React Native / Expo), and Telegram Mini Apps.
              Summer 2024 Backend & DB Lecturer for Google Developer Groups (GDG) at Addis Ababa University (CoTM, Graduating Class of 2027).
            </motion.p>

            {/* Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 w-full max-w-lg"
            >
              {metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <p className="text-base sm:text-2xl font-bold text-white tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Primary Action Buttons (Full-width on mobile for easy thumb reach) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto"
            >
              <Link href="#projects" className="w-full sm:w-auto">
                <Button
                  variant="emerald"
                  size="default"
                  className="rounded-xl font-extrabold text-xs uppercase tracking-wider gap-2 px-5 py-2.5 w-full sm:w-auto justify-center"
                >
                  <Code2 className="size-4" />
                  <span>View Projects</span>
                </Button>
              </Link>

              <Link href="/resume" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="default"
                  className="rounded-xl border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs gap-2 px-5 py-2.5 w-full sm:w-auto justify-center"
                >
                  <FileText className="size-4 text-emerald-400" />
                  <span>Resume (PDF)</span>
                </Button>
              </Link>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-2 text-slate-400 text-xs"
            >
              <Link
                href="https://github.com/josephethropia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Github className="size-4" />
                <span className="font-mono text-[11px]">GitHub</span>
              </Link>
              <span>·</span>
              <Link
                href="https://t.me/joaccount"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Send className="size-4 text-emerald-400" />
                <span className="font-mono text-[11px]">Telegram</span>
              </Link>
              <span>·</span>
              <a
                href="mailto:yosephashenafi.07@gmail.com"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Mail className="size-4" />
                <span className="font-mono text-[11px]">Email</span>
              </a>
            </motion.div>

          </div>

          {/* Right Compact Avatar / Headshot (Lee Robinson style) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="shrink-0 relative"
          >
            <div className="relative size-24 sm:size-32 md:size-40 rounded-full p-1 border border-white/15 bg-white/5 shadow-2xl backdrop-blur-md">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-lg" />
              <Image
                src={memojiImage}
                alt="Yoseph Ashenafi"
                priority
                className="relative size-full rounded-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
