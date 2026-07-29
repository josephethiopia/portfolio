import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 sm:top-6 w-full z-[100] px-2 sm:px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-0.5 sm:gap-1 p-1 border border-white/10 rounded-full glass bg-[#030712]/80 backdrop-blur-xl shadow-xl max-w-full overflow-x-auto no-visible-scrollbar">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-all rounded-full whitespace-nowrap flex items-center ${
              activeSection === item.id ? "text-white bg-white/10 shadow-sm" : "text-white/50 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="#contact"
          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-all rounded-full whitespace-nowrap flex items-center ${
            activeSection === "contact"
              ? "text-black bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)]"
              : "text-white/50 hover:text-white"
          }`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
