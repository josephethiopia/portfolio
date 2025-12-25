import aiStartupLandingPage from "../../public/images/ai-startup-landing-page.png";
import AboutImage from "../../public/images/aboutme.png";
import AboutImageMobile from "../../public/images/aboutme (2).png";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const AboutSection = () => {
  return (
    <div className=" flex items-start justify-center -mt-32" id="about">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center md:gap-3 -mb-28 md:-mb-0">
            <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">About Me</h1>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              A glimpse into my world
            </p>
          </div>
        }
      >
        <div className="flex flex-col gap-6 max-w-4xl mx-auto p-4 md:p-8 h-full overflow-y-auto custom-scrollbar">
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            I am a <span className="text-white font-semibold">Senior Fullstack Developer</span> dedicated to architecting and scaling
            <span className="text-white font-semibold"> complex SaaS ecosystems</span>. My approach is centered on building systems
            that remain performant and maintainable even as they grow in complexity.
          </p>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            When it comes to the frontend, I leverage <span className="text-emerald-300">Next.js</span> to build high-performance,
            SEO-optimized interfaces that provide a seamless user experience while maintaining a secure server-side foundation.
            On the backend, I specialize in engineering high-throughput microservices using
            <span className="text-sky-400">Node.js, Bun, and Hono</span>. I choose these tools for their incredible efficiency and
            execution speed, ensuring that the services I build can handle heavy traffic with minimal latency.
          </p>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Data integrity is at the core of any successful application. I use <span className="text-emerald-300">Prisma</span> to
            maintain a type-safe, reliable connection to the database, ensuring that the application&apos;s data layer is as
            robust as its business logic. To ensure these systems run consistently across all environments, I implement
            <span className="text-sky-400">Docker</span> to containerize services, making deployments predictable and infrastructure
            management more streamlined.
          </p>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            My goal is never just to &quot;write code,&quot; but to engineer resilient architectures that solve core business
            problems and evolve with the user.
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
};
