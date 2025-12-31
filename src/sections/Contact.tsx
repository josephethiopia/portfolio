import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#030712]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border border-white/5 text-center space-y-8"
        >
          <div className="space-y-4">
            <p className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Get in Touch</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Let&apos;s Build Something <br />
              <span className="text-reveal">Exceptional.</span>
            </h2>
          </div>

          <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            My inbox is always open. Whether you have a question or just want to say
            hello, I&apos;ll try my best to get back to you!
          </p>

          <div className="pt-8">
            <a
              href="mailto:yosephashenafi.07@gmail.com"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105"
            >
              SEND AN EMAIL
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
