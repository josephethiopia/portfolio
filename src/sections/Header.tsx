"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  FileText,
  Github,
  Send,
  Sparkles,
  ArrowUpRight,
  Code2,
  User,
  Briefcase,
  Mail,
  Home,
} from "lucide-react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about", icon: User },
    { name: "Projects", href: "#projects", id: "projects", icon: Code2 },
    { name: "Experience", href: "#experience", id: "experience", icon: Briefcase },
    { name: "Contact", href: "#contact", id: "contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Monogram / Name */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="size-8 rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/40 flex items-center justify-center text-xs font-bold text-white transition-all group-hover:text-emerald-400 group-hover:scale-105">
            YA
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              Yoseph Ashenafi
            </span>
            <span className="text-[10px] font-mono text-white/40 hidden sm:inline leading-none">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Lee Robinson style minimalist clean text) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-white font-semibold shadow-sm"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Quick GitHub link - Desktop Only */}
          <Link
            href="https://github.com/josephethropia"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hidden md:inline-flex size-9 rounded-xl items-center justify-center bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
          >
            <Github className="size-4" />
          </Link>

          {/* Direct Resume Link - Desktop Only */}
          <Link href="/resume" className="hidden md:inline-block">
            <Button
              variant="outline"
              size="sm"
              className="bg-emerald-400/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-400 hover:text-slate-950 font-bold text-xs gap-1.5 rounded-xl transition-all"
            >
              <FileText className="size-3.5" />
              <span>Resume</span>
            </Button>
          </Link>

          {/* Mobile Sheet Trigger (shadcn Sheet for mobile-first navigation) */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open Navigation Menu"
                  className="size-9 rounded-xl bg-white/5 border-white/15 text-white hover:bg-white/10"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#090d16] border-l border-white/10 text-white w-[280px] sm:w-[320px] p-6 flex flex-col justify-between"
              >
                <div className="space-y-6 pt-4">
                  <SheetHeader className="text-left">
                    <SheetTitle className="text-base font-bold text-white flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Navigation</span>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="space-y-1.5">
                    <Link
                      href="#home"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all ${
                        activeSection === "home"
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Home className="size-4" />
                      <span>Home</span>
                    </Link>

                    {navLinks.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="size-4" />
                            <span>{item.name}</span>
                          </div>
                          <ArrowUpRight className="size-3.5 text-white/30" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <Link
                    href="/resume"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button
                      variant="emerald"
                      className="w-full text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center gap-2"
                    >
                      <FileText className="size-4" />
                      <span>View Resume (PDF)</span>
                    </Button>
                  </Link>

                  <div className="flex items-center justify-center gap-4 pt-2 text-white/50 text-xs font-mono">
                    <Link
                      href="https://github.com/josephethropia"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1"
                    >
                      <Github className="size-3.5" />
                      <span>GitHub</span>
                    </Link>
                    <span>·</span>
                    <Link
                      href="https://t.me/joaccount"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1"
                    >
                      <Send className="size-3.5" />
                      <span>Telegram</span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
};
