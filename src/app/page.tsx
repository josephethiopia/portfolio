"use client";

import { useState } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500/30 font-sans antialiased overflow-x-hidden">
      <Loader onComplete={handleLoaderComplete} />
      {showContent && (
        <>
          <CustomCursor />
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <Experience />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
