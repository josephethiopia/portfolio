import Image from "next/image";
import memojiImage from "../../public/images/memoji-computer.png";
import grainImage from "../../public/images/grain.jpg";
import StarIcon from "../../public/icons/star.svg";
import SparkleIcon from "../../public/icons/sparkle.svg";
// import resume from "../../public/resume.pdf";

import { ArrowDown } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative z-0 overflow-hidden bg-[#030712] flex items-stretch">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90px, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Structural Elements */}
      <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-white/5 z-0" />
      <div className="absolute left-0 right-0 top-[30%] h-[1px] bg-white/5 z-0" />

      {/* Main Content Grid */}
      <div className="container relative z-10 flex flex-col md:flex-row items-stretch min-h-screen">
        {/* Left column: Vertical spacer (previously had text) */}
        <div className="hidden md:flex w-[15%] flex-col justify-end pb-24 border-r border-white/5" />

        {/* Right column: The Workspace */}
        <div className="flex-1 pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:pl-16 flex flex-col justify-between">
          <div className="space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 md:mb-8">
                <p className="text-emerald-400 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs whitespace-nowrap">Yoseph Ashenafi • SWE</p>
                <div className="flex items-center gap-2 px-3 py-1 glass rounded-full border border-white/10 w-fit">
                  <span className="size-1 w-1 md:size-1.5 md:w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] md:text-[10px] font-bold text-white/60 uppercase tracking-widest">Available for new projects</span>
                </div>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none md:leading-tight">
                <span className="text-white">Digital Software</span><br />
                <span className="text-reveal">Architect.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/40 text-base md:text-xl font-light max-w-2xl leading-relaxed"
            >
              Senior Software Engineer specializing in <span className="text-white/80">distributed systems</span> and <span className="text-white/80">large-scale backend architectures</span>.
              Engineering resilient SaaS ecosystems that bridge the gap between complex engineering and seamless user experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24">
            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 flex items-center gap-4 md:gap-6"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-emerald-500/20 blur-xl rounded-full opacity-50" />
                <Image
                  src={memojiImage}
                  alt="Yoseph"
                  className="relative size-14 md:size-20 rounded-full border border-white/10"
                />
              </div>
              <div>
                <p className="text-white font-bold text-base md:text-lg">Yoseph Ashenafi</p>
                <div className="flex items-center gap-2 mt-0.5 md:mt-1">
                  <span className="size-1 md:size-1.5 rounded-full bg-emerald-500" />
                  <p className="text-white/40 text-[10px] md:text-xs font-semibold uppercase tracking-widest">Senior Fullstack Developer</p>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="#projects" className="w-full sm:flex-1">
                <button className="w-full h-16 md:h-20 bg-white text-black font-bold rounded-[1.5rem] md:rounded-[2rem] hover:bg-emerald-400 transition-all active:scale-95 uppercase tracking-widest text-[10px] md:text-xs">
                  VIEW PROJECTS
                </button>
              </Link>
              <Link href="/resume.pdf" download className="w-full sm:flex-1">
                <button className="w-full h-16 md:h-20 glass border border-white/10 text-white font-bold rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center gap-2 md:gap-3 group hover:bg-white/5 transition-all uppercase tracking-widest text-[10px] md:text-xs">
                  RESUME
                  <ArrowDown className="size-3 md:size-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
