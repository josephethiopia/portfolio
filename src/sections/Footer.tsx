import Link from "next/link";
import ArrowUpRightIcon from "../../public/icons/arrow-up-right.svg";

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
    title: "Linkedin",
    href: "https://www.linkedin.com/in/yoseph-ashenafi-750346262",
  },
  {
    title: "Twitter",
    href: "https://x.com/YosephAshenafi3",
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#030712] border-t border-white/5">
      <div className="container">
        <div className="py-12 flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/20 text-xs font-medium tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Yoseph Ashenafi. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                target="_blank"
                href={link.href}
                key={link.title}
                className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors"
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
