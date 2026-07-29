"use client";

import Image from "next/image";
import memojiImage from "../../public/images/memoji-computer.png";
import { ArrowDown, Code2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const metrics = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Main Stack", value: "Next.js / Node" },
];

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative z-0 overflow-hidden bg-[#030712] flex items-center pt-20 sm:pt-28 pb-12 sm:pb-16 md:py-32">
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-emerald-500/10 blur-[90px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-sky-500/10 blur-[80px] sm:blur-[130px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="container relative z-10 px-2 sm:px-6">
        <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-10">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Available for projects & roles
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
            className="space-y-2.5 sm:space-y-4"
          >
            <h1 className="text-3xl xs:text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.08] text-white">
              Software <span className="text-reveal">Engineer.</span>
            </h1>

            <p className="text-white/60 text-xs sm:text-base md:text-xl font-light leading-relaxed max-w-2xl pt-1 sm:pt-2">
              I build web and mobile applications using Next.js, React Native (Expo), Node.js, and Telegram Mini Apps.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-1.5 sm:gap-4 border-y border-white/10 py-3.5 sm:py-6 max-w-2xl"
          >
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5 sm:space-y-1">
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-emerald-400 tracking-tight">{m.value}</p>
                <p className="text-[8.5px] sm:text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-semibold">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs & Profile Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-4 w-full"
          >
            <Link href="#projects" className="w-full sm:w-auto block">
              <button className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-emerald-400 text-black font-extrabold rounded-2xl hover:bg-emerald-300 transition-all duration-300 active:scale-95 uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(52,211,153,0.3)] flex items-center justify-center gap-2">
                <Code2 className="size-4 shrink-0" />
                <span>VIEW PROJECTS</span>
              </button>
            </Link>

            <Link href="/resume" className="w-full sm:w-auto block">
              <button className="w-full sm:w-auto px-6 py-3.5 sm:py-4 glass border border-white/10 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all duration-300 active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                <ArrowDown className="size-4 text-emerald-400 shrink-0" />
                <span>RESUME</span>
              </button>
            </Link>

            {/* Profile Avatar Card (Hidden on Mobile/Tablet - Only Visible on Large Desktop) */}
            <div className="hidden lg:flex lg:ml-auto items-center justify-start gap-3.5 p-2 px-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shrink-0">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-emerald-500/30 blur-md rounded-full" />
                <Image
                  src={memojiImage}
                  alt="Yoseph Ashenafi"
                  className="relative size-11 rounded-full border border-white/20 object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white leading-tight">Yoseph Ashenafi</p>
                <p className="text-[10px] text-emerald-400 font-mono">Software Engineer</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
