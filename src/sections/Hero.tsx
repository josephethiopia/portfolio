"use client";

import Image from "next/image";
import memojiImage from "../../public/images/memoji-computer.png";
import { ArrowDown, Code2, Sparkles, Terminal, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const metrics = [
  { label: "Years Experience", value: "5+" },
  { label: "Global Projects", value: "15+" },
  { label: "System Uptime", value: "99.9%" },
];

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative z-0 overflow-hidden bg-[#030712] flex items-center pt-24 pb-16 md:py-32">
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Available for Senior Roles & Consulting
              </span>
            </div>
            <span className="hidden sm:inline-block text-white/30 text-xs font-mono">
              • Yoseph Ashenafi
            </span>
          </motion.div>

          {/* Hero Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] text-white">
              Software Architect & <br className="hidden sm:inline" />
              <span className="text-reveal">Fullstack Engineer.</span>
            </h1>

            <p className="text-white/60 text-base md:text-xl font-light leading-relaxed max-w-2xl pt-2">
              Engineering resilient, cloud-native applications and scalable backend architectures. Transforming complex business logic into intuitive, high-performance web experiences.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 pt-4 border-y border-white/10 py-6 max-w-2xl"
          >
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl md:text-4xl font-extrabold text-emerald-400 tracking-tight">{m.value}</p>
                <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-semibold">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs & Profile Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Link href="#projects" className="flex-1 sm:flex-none">
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-400 text-black font-extrabold rounded-2xl hover:bg-emerald-300 transition-all duration-300 active:scale-95 uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(52,211,153,0.3)] flex items-center justify-center gap-2">
                <Code2 className="size-4" />
                EXPLORE PROJECTS
              </button>
            </Link>

            <Link href="/resume" className="flex-1 sm:flex-none">
              <button className="w-full sm:w-auto px-8 py-4 glass border border-white/10 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all duration-300 active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                <ArrowDown className="size-4 text-emerald-400" />
                VIEW RESUME
              </button>
            </Link>

            {/* Profile Avatar Card */}
            <div className="sm:ml-auto flex items-center gap-3.5 p-2 px-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="relative">
                <div className="absolute -inset-1 bg-emerald-500/30 blur-md rounded-full" />
                <Image
                  src={memojiImage}
                  alt="Yoseph Ashenafi"
                  className="relative size-11 rounded-full border border-white/20 object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white leading-tight">Yoseph Ashenafi</p>
                <p className="text-[10px] text-emerald-400 font-mono">SWE / Fullstack</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

