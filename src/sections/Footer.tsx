import Link from "next/link";
import { Github, Send, Mail, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 sm:py-10 bg-[#030712] text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="text-slate-400 font-mono text-[11px]">
          © {new Date().getFullYear()} Yoseph Ashenafi · Addis Ababa, Ethiopia
        </div>

        <nav className="flex items-center gap-5 text-slate-400 font-medium">
          <Link
            href="https://github.com/josephethropia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="size-3.5" />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://t.me/joaccount"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            <Send className="size-3.5" />
            <span>Telegram</span>
          </Link>

          <Link
            href="/resume"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <FileText className="size-3.5" />
            <span>Resume</span>
          </Link>

          <a
            href="mailto:yosephashenafi.07@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Mail className="size-3.5" />
            <span>Email</span>
          </a>
        </nav>
      </div>
    </footer>
  );
};
