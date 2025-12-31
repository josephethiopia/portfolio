"use client";

import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import tigatImage from "../../public/images/tigat-new.png";
import nileodeImage from "../../public/images/nileode-new.png";
import whalersImage from "../../public/images/whalers.png";
import LalibelaImage from "../../public/images/lalibela.png";
import calmifyImage from "../../public/images/calmify-home.png";
import servicenowImage from "../../public/service.png";
import HUHTImage from "../../public/images/huht-new.png";
import DidecoImage from "../../public/images/dideco.png";
import MojoImage from "../../public/images/mojo.png";

const projects = [
  {
    name: "Servicenow",
    description: "Servicenow is a platform for learning and teaching.",
    image: servicenowImage,
    link: "https://servicenow.com",
    location: "Canada",
  },
  {
    name: "Whalers",
    description: "Whalers is a platform for learning and teaching.",
    image: whalersImage,
    link: "https://whalerapp.com",
    location: "USA",
  },
  {
    name: "Lalibela",
    description: "Lalibela is a platform for learning and teaching.",
    image: LalibelaImage,
    link: "https://lalibelahoney.com",
    location: "Ethiopia",
  },

  {
    name: "The Mojo Effect",
    description: "Mojo is a platform for learning and teaching.",
    image: MojoImage,
    link: "https://themojoeffect.com/",
    location: "USA",
  },
  {
    name: "HUHT Orphanage",
    description: "HUHT Orphanage is a platform for learning and teaching.",
    image: HUHTImage,
    link: "https://huhtorphanage.com",
    location: "Canada",
  },
  {
    name: "Dideco North America",
    description: "Dideco North America is a platform for learning and teaching.",
    image: DidecoImage,
    link: "https://dideco.com",
    location: "North America",
  },
  {
    name: "Calmify",
    description: "Calmify is a platform for learning and teaching.",
    image: calmifyImage,
    link: "https://calmify.com",
    location: "Ethiopia",
  },
  {
    name: "Tigat.net",
    description: "Tigat.net is a platform for learning and teaching.",
    image: tigatImage,
    link: "https://tigat.net",
    location: "Ethiopia",
  },
  {
    name: "Nileode Technologies",
    description: "Nileode Technologies is a platform for learning and teaching.",
    image: nileodeImage,
    link: "https://nileode.com",
    location: "Ethiopia",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#030712]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            Featured <span className="text-reveal">Creations.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[700px] text-white/40 md:text-xl lg:text-lg font-light"
          >
            A collection of projects where engineering meets artistic vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[300px]">
          {projects.map((project, index) => {
            // Define bento-style spans based on index
            let spanClass = "md:col-span-2 lg:col-span-2";
            if (index === 0) spanClass = "md:col-span-2 lg:col-span-4 lg:row-span-2";
            if (index === 1) spanClass = "md:col-span-2 lg:col-span-2 lg:row-span-1";
            if (index === 2) spanClass = "md:col-span-2 lg:col-span-2 lg:row-span-2";

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${spanClass} relative group overflow-hidden rounded-3xl border border-white/10 glass`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase">{project.location}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors uppercase tracking-tighter">
                      {project.name}
                    </h3>
                    <p className="text-sm text-white/40 line-clamp-2 max-w-sm">
                      {project.description}
                    </p>

                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-emerald-400 transition-colors"
                      >
                        VIEW PROJECT
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

