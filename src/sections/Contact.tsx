"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send, Github, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "yosephashenafi.07@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-24 md:py-36 bg-[#030712] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[250px] sm:h-[500px] bg-emerald-500/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />

      <div className="container px-2 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full glass-card p-5 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl text-center space-y-5 sm:space-y-8 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <MessageSquare className="size-3.5" />
            Get in Touch
          </div>

          <div className="space-y-2.5 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Let&apos;s Work <br />
              <span className="text-reveal">Together.</span>
            </h2>

            <p className="text-white/60 text-xs sm:text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Available for web development, mobile apps, and Telegram Mini Apps. Feel free to contact me.
            </p>
          </div>

          {/* Single Primary Action Button: COPY EMAIL ADDRESS */}
          <div className="flex justify-center w-full max-w-xs mx-auto pt-2 sm:pt-4">
            <button
              onClick={handleCopyEmail}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-300 transition-all duration-300 shadow-[0_0_25px_rgba(52,211,153,0.35)] active:scale-95 whitespace-nowrap cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-4 shrink-0" />
                  <span>COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 shrink-0" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Social Platforms Icons */}
          <div className="pt-5 sm:pt-8 border-t border-white/10 flex items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://github.com/josephethropia"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110 active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github className="size-5 sm:size-6 text-emerald-400" />
            </a>

            <a
              href="https://t.me/joaccount"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110 active:scale-95"
              aria-label="Telegram Profile"
            >
              <Send className="size-5 sm:size-6 text-emerald-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
