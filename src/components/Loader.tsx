"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      onComplete?.();
    }, 4500); // Shorter, punchier intro

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-[#030712] flex items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase italic"
              >
                Yoseph <span className="text-reveal">Ashenafi.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
              className="mt-6 h-[1px] bg-white/10 relative"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 shadow-[0_0_15px_rgba(52,211,153,0.5)]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="mt-4 text-white/20 text-xs font-bold tracking-[0.3em] uppercase"
            >
              Initializing Excellence
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
