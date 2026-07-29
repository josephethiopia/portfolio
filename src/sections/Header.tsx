"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, FolderGit2, Mail, FileText, ArrowUpRight } from "lucide-react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home", id: "home", num: "01", icon: Home },
    { name: "About", href: "#about", id: "about", num: "02", icon: User },
    { name: "Experience", href: "#experience", id: "experience", num: "03", icon: Briefcase },
    { name: "Projects", href: "#projects", id: "projects", num: "04", icon: FolderGit2 },
    { name: "Contact", href: "#contact", id: "contact", num: "05", icon: Mail },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* DESKTOP FLOATING PILL NAVBAR (Hidden on mobile) */}
      <div className="hidden md:flex justify-center items-center fixed top-6 w-full z-[100] px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-1 p-1.5 border border-white/10 rounded-full glass bg-[#030712]/80 backdrop-blur-xl shadow-2xl">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full flex items-center gap-1.5 ${
                activeSection === item.id ? "text-white bg-white/10 shadow-sm" : "text-white/50 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full flex items-center gap-1.5 ${
              activeSection === "contact"
                ? "text-black bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                : "text-white/50 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* MOBILE APP NATIVE TOP HEADER (Hidden on desktop) */}
      <div className="md:hidden fixed top-3 left-3 right-3 z-[100] flex items-center justify-between pointer-events-none">
        {/* Left Brand Badge */}
        <Link
          href="#home"
          onClick={handleNavClick}
          className="pointer-events-auto flex items-center gap-2 p-1.5 pr-3 rounded-full bg-[#030712]/85 border border-white/15 backdrop-blur-xl shadow-xl active:scale-95 transition-transform"
        >
          <div className="size-7 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-400 flex items-center justify-center text-black text-xs font-black tracking-tighter">
            YA
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-tight text-white">Yoseph</span>
          </div>
        </Link>

        {/* Right Menu Trigger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
          className="pointer-events-auto size-10 rounded-full bg-[#030712]/85 border border-white/15 backdrop-blur-xl shadow-xl flex items-center justify-center text-white active:scale-90 transition-all hover:border-emerald-500/40"
        >
          {mobileMenuOpen ? <X className="size-5 text-emerald-400" /> : <Menu className="size-5 text-white" />}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN GLASS APP DRAWER OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-[95] bg-[#030712]/95 backdrop-blur-2xl px-5 pt-20 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Nav Menu Items List */}
            <div className="space-y-3 relative z-10 pt-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 px-2">
                Navigation Menu
              </p>

              <div className="space-y-2">
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleNavClick}
                        className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                          isActive
                            ? "bg-emerald-500/15 border-emerald-500/30 text-white shadow-[0_0_20px_rgba(52,211,153,0.15)]"
                            : "bg-white/5 border-white/5 text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${isActive ? "bg-emerald-400 text-black" : "bg-white/5 text-white/60"}`}>
                            <Icon className="size-4" />
                          </div>
                          <div>
                            <p className="text-sm font-extrabold tracking-tight text-white">{item.name}</p>
                            <p className="text-[10px] text-white/40 font-mono">Section {item.num}</p>
                          </div>
                        </div>
                        <ArrowUpRight className={`size-4 ${isActive ? "text-emerald-400" : "text-white/20"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Footer Action CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 relative z-10 pt-6 border-t border-white/10"
            >
              <Link href="/resume" onClick={handleNavClick} className="block">
                <button className="w-full py-3.5 px-6 rounded-2xl bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(52,211,153,0.3)] active:scale-95 transition-all">
                  <FileText className="size-4" />
                  VIEW RESUME (PDF)
                </button>
              </Link>
              <p className="text-center text-[10px] text-white/30 font-mono">
                Yoseph Ashenafi • Portfolio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
