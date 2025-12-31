import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#030712] relative overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative bg-gradient-to-br from-white/5 to-transparent"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="size-24 bg-emerald-500/10 blur-3xl rounded-full" />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">The Visionary</p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  Architecting <br />
                  <span className="text-reveal">Resilient Systems.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-xl uppercase tracking-widest">Philosophy</h3>
                  <p className="text-white/40 leading-relaxed font-light">
                    I don&apos;t just &quot;write code&quot;. I engineer architectures that solve core business problems.
                    Every line of code is a brick in a scalable, high-performance ecosystem designed to evolve with the user.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-xl uppercase tracking-widest">Strategy</h3>
                  <p className="text-white/40 leading-relaxed font-light">
                    Leveraging <span className="text-emerald-300/80 font-medium whitespace-nowrap">Next.js</span> for precision frontends and
                    <span className="text-sky-400/80 font-medium whitespace-nowrap"> Node.js / Hono</span> for large-scale backends.
                    Containerized with <span className="text-white/80 font-medium">Docker</span> for absolute predictability.
                  </p>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                {['Next.js', 'Typescript', 'Node.js', 'Docker', 'Prisma', 'Hono'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-white/60 text-xs font-semibold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
