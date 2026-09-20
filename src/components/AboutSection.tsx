import { motion, useReducedMotion } from "motion/react";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  const metrics = [
    { value: "200+", label: "Satisfied Clients Worldwide" },
    { value: "200+", label: "Projects Completed (incl. Government)" },
    { value: "4+", label: "Bug Bounty Hall of Fame Awards" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Monospace Index (Matches Urumi 01 / THE PROBLEM) */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-4"
        >
          <div className="text-xs font-mono tracking-widest text-[#0D5C4D] uppercase font-semibold">
            01 / ABOUT BITCOM
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#1A1918] tracking-tight leading-tight">
            Grown with the internet revolution
          </h2>
        </motion.div>

        {/* Narrative Paragraphs (Matches Urumi typography structure) */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-[#57534E] text-base sm:text-lg leading-relaxed font-normal"
        >
          <p>
            We are Bitcom Informatics IT Solutions. We know how to deliver on technology's promise of improved business efficiency. We work throughout India, putting your systems management and custom tech infrastructure in the hands of seasoned professionals.
          </p>

          <p>
            With over 200 satisfied clients worldwide and 200+ projects completed including critical state and government initiatives, our team blends deep vulnerability research with modern application engineering. Built by researchers who have disclosed critical security flaws to Microsoft, IBM, Salesforce, and Google, Bitcom provides end-to-end technical resilience.
          </p>

          <p>
            From high-performance web and mobile platforms to mission-critical infrastructure hardening, we build systems designed to scale cleanly as your business grows.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#E8E6DF]"
        >
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-editorial text-[#1A1918]">
                {m.value}
              </div>
              <div className="text-xs text-[#78716C] font-mono leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
