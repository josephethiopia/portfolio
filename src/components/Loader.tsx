"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Quick, sleek 1.1s intro — respectful of user time
    const timer = setTimeout(() => {
      setShowLoader(false);
      onComplete?.();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setShowLoader(false);
    onComplete?.();
  };

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -12,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={handleSkip}
          className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center cursor-pointer select-none px-4"
        >
          {/* Subtle Ambient Radial Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            {/* Minimalist Monogram Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="size-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 font-mono font-black text-sm shadow-[0_0_25px_rgba(52,211,153,0.15)]"
            >
              YA
            </motion.div>

            {/* Name Reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2"
              >
                <span>Yoseph Ashenafi</span>
                <span className="inline-block size-1.5 rounded-full bg-emerald-400 animate-ping" />
              </motion.h1>
            </div>

            {/* Minimal Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="text-xs font-mono text-slate-400 tracking-wider"
            >
              Software Engineer · Addis Ababa
            </motion.p>

            {/* Fast Micro Loading Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
