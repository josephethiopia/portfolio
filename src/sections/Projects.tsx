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
    name: "Tigat.net",
    description: "Tigat.net is a platform for learning and teaching.",
    image: tigatImage,
    link: "https://tigat.net",
    location: "Ethiopia",
  },
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
    name: "Nileode Technologies",
    description: "Nileode Technologies is a platform for learning and teaching.",
    image: nileodeImage,
    link: "https://nileode.com",
    location: "Ethiopia",
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
];

export function ProjectsSection() {
  return (
    <div className=" h-full my-40">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center backdrop-blur-sm">
            Real-world Results
          </p>
        </div>
        <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">Featured Projects</h1>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>

        {/* main projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10 font-poppins w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-4 ${index % 2 !== 0 ? "mt-8" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="flex flex-row gap-4 p-2 bg-gradient-to-br from-emerald-300 to-sky-500 backdrop-blur-sm rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={project.image} alt={project.name} className="rounded-lg" />
              </motion.div>
              <motion.div
                className="flex flex-row gap-1 items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-2xl font-cursive">{project.name}</h3> -
                <p className="text-white/60">{project.location}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link href={project.link} className="w-1/3" target="_blank">
                  <button className="bg-white text-gray-950 h-12 w-1/3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300 capitalize ">
                    <span> check it out </span>
                    <ArrowRightIcon className="size-4 " />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

