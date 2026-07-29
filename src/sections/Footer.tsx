import Link from "next/link";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/josephethiopia",
  },
  {
    title: "Telegram",
    href: "https://t.me/joaccount",
  },
  {
    title: "Phone",
    href: "tel:+251969751194",
  },
  {
    title: "Email",
    href: "mailto:yosephashenafi.07@gmail.com",
  },
  {
    title: "Twitter",
    href: "https://x.com/YosephAshenafi3",
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#030712] border-t border-white/5 pb-8 sm:pb-12">
      <div className="container px-4 sm:px-6">
        <div className="py-8 sm:py-12 flex flex-col-reverse md:flex-row md:justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
          <div className="text-white/30 text-[11px] sm:text-xs font-medium tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Yoseph Ashenafi. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-5 sm:gap-x-8 gap-y-2.5 sm:gap-y-4">
            {footerLinks.map((link) => (
              <Link
                target="_blank"
                href={link.href}
                key={link.title}
                className="text-white/40 text-[11px] sm:text-xs font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
