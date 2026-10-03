import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus, Minus, ArrowRight } from "@phosphor-icons/react";

export const SERVICES_CONTENT = {
  sectionTag: "02 / WHAT WE ENGINEER",
  title: "Comprehensive technology services",
  subtitle:
    "Click each capability to explore technical specifications and how we execute for your business.",
  services: [
    {
      tag: "DEFENSE",
      title: "Cyber Security & Threat Defense",
      headline:
        "Enterprise threat mitigation, vulnerability research, and continuous data protection.",
      desc: "Safeguard your business from sophisticated online threats with our expert cyber security services. We deliver zero-day vulnerability audits, rigorous penetration testing, and enterprise data hardening.",
      capabilities: [
        "Vulnerability Assessment and Penetration Testing (VAPT)",
        "Zero-day threat intelligence and security operation protocols",
        "Public sector and government compliance alignment",
        "Cloud security posture management and code review",
      ],
    },
    {
      tag: "SOFTWARE",
      title: "Custom Software Development",
      headline:
        "Custom software engineering creating scalable, efficient enterprise applications.",
      desc: "Transform complex operational ideas into innovative software solutions. We architect resilient systems engineered for high concurrency, seamless API integrations, and low maintenance overhead.",
      capabilities: [
        "Distributed microservices and high-scale backend APIs",
        "Mission-critical workflow automation tools",
        "Legacy system modernization and cloud migration",
        "Strict CI/CD automated deployment pipelines",
      ],
    },
    {
      tag: "PLATFORMS",
      title: "Web Platform Development",
      headline:
        "Build a powerful, responsive online platform with expert web engineering.",
      desc: "Custom, scalable solutions for high-traffic web applications. We build ultra-fast, user-friendly digital portals with modern frameworks and robust database infrastructure.",
      capabilities: [
        "Modern Next.js, Vite, and Node.js enterprise architecture",
        "High-performance database structuring and caching",
        "Responsive, mobile-optimized digital portals",
        "Enterprise uptime monitoring and SLA guarantees",
      ],
    },
    {
      tag: "MOBILE",
      title: "Mobile App Development",
      headline:
        "Bring your vision to life with custom iOS and Android applications.",
      desc: "Deliver fluid, high-performance mobile experiences across devices. We design and develop cross-platform native applications tailored for customer engagement and operational speed.",
      capabilities: [
        "Cross-platform Flutter and React Native engineering",
        "Native iOS and Android performance optimization",
        "Offline-first synchronization and secure local storage",
        "App Store and Google Play deployment management",
      ],
    },
    {
      tag: "DESIGN",
      title: "Web Design & User Experience",
      headline:
        "Create a stunning online presence with custom human-centric design.",
      desc: "We don't just design; we craft a visual masterpiece that brings out the brightest colors and credibility of your brand. User-friendly, responsive, and visually appealing web interfaces.",
      capabilities: [
        "Design systems and comprehensive component libraries",
        "User flow architecture and wireframing in Figma",
        "WCAG 2.2 AA accessibility and cross-browser polish",
        "Conversion rate optimization and retention layouts",
      ],
    },
    {
      tag: "IDENTITY",
      title: "Graphics & Brand Identity",
      headline:
        "Elevate your brand with creative and impactful visual design.",
      desc: "Visually stunning designs for corporate logos, digital branding, marketing materials, and enterprise presentations that leave a lasting professional impression.",
      capabilities: [
        "Brand mark, typography, and visual language systems",
        "Corporate decks, collateral, and marketing assets",
        "Digital iconography and visual asset generation",
        "Consistent brand guidelines for scaling teams",
      ],
    },
    {
      tag: "GROWTH",
      title: "Performance Digital Marketing",
      headline:
        "Boost your online presence with results-driven digital growth strategies.",
      desc: "Data-driven organic search optimization, paid campaigns, and strategic digital reach engineered to turn prospective traffic into long-term commercial relationships.",
      capabilities: [
        "Technical SEO auditing and organic search dominance",
        "High-ROI PPC search and display campaign management",
        "Targeted B2B social outreach and email flows",
        "Conversion funnel tracking and analytics reporting",
      ],
    },
  ],
};

export function ServicesBento() {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E8E6DF] bg-white/40">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-4"
        >
          <div className="text-xs font-mono tracking-widest text-[#0D5C4D] uppercase font-semibold">
            {SERVICES_CONTENT.sectionTag}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#1A1918] tracking-tight leading-tight">
            {SERVICES_CONTENT.title}
          </h2>

          <p className="text-[#57534E] text-base sm:text-lg max-w-2xl font-normal">
            {SERVICES_CONTENT.subtitle}
          </p>
        </motion.div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {SERVICES_CONTENT.services.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="card-elevated rounded-2xl overflow-hidden transition-all duration-300 bg-white"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C4D]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-[11px] font-mono text-[#0D5C4D] bg-[#EBF5F3] px-2.5 py-0.5 rounded-full font-semibold uppercase shrink-0">
                      {item.tag}
                    </span>
                    <span className="text-lg sm:text-xl font-editorial text-[#1A1918] group-hover:text-[#0D5C4D] transition-colors">
                      {item.title}
                    </span>
                  </div>

                  <div className="text-[#78716C] group-hover:text-[#1A1918] transition-colors shrink-0 ml-4">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Expanded Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#F0EEE6] space-y-6">
                        <p className="text-base sm:text-lg text-[#1A1918] font-medium leading-relaxed">
                          {item.headline}
                        </p>

                        <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Capabilities Bullet List */}
                        <div className="space-y-2.5 pt-2">
                          <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                            Core Capabilities:
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#57534E]">
                            {item.capabilities.map((cap) => (
                              <li key={cap} className="flex items-start gap-2">
                                <span className="text-[#0D5C4D] font-bold mt-0.5">•</span>
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Bottom Pill Link */}
                        <div className="pt-3">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#0D5C4D] hover:text-[#094237] group transition-colors"
                          >
                            <span>Consult on this capability</span>
                            <ArrowRight size={13} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
