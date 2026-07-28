"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send, Github, Phone, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "yosephashenafi.07@gmail.com";
  const phone = "+251969751194";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#030712] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card p-8 md:p-16 rounded-[2.5rem] text-center space-y-8 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <MessageSquare className="size-3.5" />
            Get in Touch
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Let&apos;s Work <br />
              <span className="text-reveal">Together.</span>
            </h2>

            <p className="text-white/60 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Available for web development, mobile apps, and Telegram Mini Apps. Feel free to contact me.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-300 transition-all duration-300 shadow-[0_0_25px_rgba(52,211,153,0.3)] active:scale-95"
            >
              <Send className="size-4" />
              SEND EMAIL
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 glass border border-white/10 text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-400" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-white/70" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Social Platforms Icons */}
          <div className="pt-8 border-t border-white/10 flex items-center justify-center gap-4">
            <a
              href="https://github.com/josephethropia"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110 active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github className="size-6 text-emerald-400" />
            </a>

            <a
              href="https://t.me/joaccount"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110 active:scale-95"
              aria-label="Telegram Profile"
            >
              <Send className="size-6 text-emerald-400" />
            </a>

            <a
              href={`mailto:${email}`}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110 active:scale-95"
              aria-label="Email Direct"
            >
              <Mail className="size-6 text-emerald-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


