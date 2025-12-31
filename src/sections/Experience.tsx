import { EvervaultCard } from "@/components/ui/evervault-card";
import { Timeline } from "@/components/ui/timeline";
import {
  IconBrandFramerMotion,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandDocker,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconGitPullRequest,
  IconGrain,
  IconSql,
  IconBrandVite,
  IconBolt,
} from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";

import tigat from "../../public/images/tigat.png";
import nileode from "../../public/images/nileode-home.png";
import dideco from "../../public/images/dideco.png";
import mojo from "../../public/images/mojo.png";

import calmify from "../../public/images/calmify-home.png";
import calmifyChat from "../../public/images/ai-chat.png";
import feature from "../../public/images/feature.png";
import calmifyFaq from "../../public/images/calmify-faq.png";

export const Experience = () => {
  // ... (experience data kept as is for now)
  const experience = [
    { name: "Next.Js", logo: <IconBrandNextjs size={100} stroke={1.25} /> },
    { name: "Typescript", logo: <IconBrandTypescript size={100} stroke={1.25} /> },
    { name: "Javascript", logo: <IconBrandJavascript size={100} stroke={1.25} /> },
    { name: "React", logo: <IconBrandReact size={100} stroke={1.25} /> },
    { name: "Node.Js", logo: <IconBrandNodejs size={100} stroke={1.25} /> },
    { name: "Docker", logo: <IconBrandDocker size={100} stroke={1.25} /> },
  ];

  const data = [
    {
      title: "2025",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Remote Contractual Worker</h3>
          <p className="text-white/40 font-light leading-relaxed max-w-xl">
            Architecting scalable solutions and ensuring high-performance system delivery for multiple independent companies globally.
          </p>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Moti Engineering</h3>
          <p className="text-white/40 font-light leading-relaxed max-w-xl">
            Software Engineer focusing on internal tool optimization, ATM network management, and robust inventory systems.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#030712]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <p className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">The Journey</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            Professional <span className="text-reveal">Timeline.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Timeline data={data} />
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {experience.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center gap-4 group"
            >
              <div className="text-white/20 group-hover:text-emerald-400 transition-colors duration-500 scale-75 md:scale-100">
                {item.logo}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
