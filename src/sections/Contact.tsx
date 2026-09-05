"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Copy, Check, Send, Mail, Github, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "yosephashenafi.07@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="p-6 sm:p-10 md:p-12 rounded-2xl border border-white/10 bg-white/[0.02] space-y-8">
          
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              Get in Touch
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Let&apos;s build something together.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              I&apos;m available for freelance software engineering, full-stack consulting, and high-impact engineering roles.
            </p>
          </div>

          {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <Button
              onClick={handleCopyEmail}
              variant="emerald"
              size="default"
              className="rounded-xl font-bold text-xs uppercase tracking-wider gap-2 px-5 py-2.5 w-full sm:w-auto justify-center"
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  <span>Copy Email</span>
                </>
              )}
            </Button>

            <Link href="https://t.me/joaccount" target="_blank" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="default"
                className="rounded-xl border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs gap-2 px-5 py-2.5 w-full justify-center"
              >
                <Send className="size-4 text-emerald-400" />
                <span>Message on Telegram</span>
                <ArrowUpRight className="size-3 text-slate-500" />
              </Button>
            </Link>

            <a href={`mailto:${email}`} className="w-full sm:w-auto">
              <Button
                variant="ghost"
                size="default"
                className="rounded-xl text-slate-300 hover:text-white font-semibold text-xs gap-2 px-4 py-2.5 w-full justify-center"
              >
                <Mail className="size-4" />
                <span>Open Mail Client</span>
              </Button>
            </a>
          </div>

          {/* Direct Contact Details Grid */}
          <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 sm:border-none sm:bg-transparent sm:p-0">
              <span className="text-white font-semibold">Email:</span>
              <a href={`mailto:${email}`} className="text-slate-300 hover:text-emerald-400 transition-colors truncate">
                {email}
              </a>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 sm:border-none sm:bg-transparent sm:p-0">
              <span className="text-white font-semibold">Telegram:</span>
              <a href="https://t.me/joaccount" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                @joaccount
              </a>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 sm:border-none sm:bg-transparent sm:p-0">
              <span className="text-white font-semibold">Phone:</span>
              <a href="tel:+251969751194" className="text-slate-300 hover:text-emerald-400 transition-colors">
                +251 969 751 194
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
