import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

export const HERO_CONTENT = {
  eyebrow: "SERVICES · DEHRADUN · DELHI · PAN-INDIA",
  headlineStart: "We are Bitcom,",
  headlineMiddle: "trusted by leaders to",
  headlineAccent: "make technology work.",
  subtext:
    "We know how to deliver on technology's promise of business efficiency. Put your systems management and custom tech infrastructure in the hands of seasoned professionals.",
  primaryCta: { text: "View services", href: "#services" },
  secondaryCta: { text: "Schedule audit", href: "#contact" },
  credibilityTags: [
    "200+ Enterprise Projects",
    "Government Verified",
    "Bug Bounty Recognized",
  ],
  capabilitiesHeader: "Core capabilities · 6",
  capabilitiesBadge: "ACTIVE",
  capabilities: [
    {
      title: "Cyber Security & Threat Defense",
      sub: "Security Ops · Zero-Day Auditing · VAPT",
      tag: "HALL OF FAME",
      href: "#services",
    },
    {
      title: "Custom Software Engineering",
      sub: "Enterprise Architecture · Scalable Solutions",
      arrow: true,
      href: "#services",
    },
    {
      title: "Web Development",
      sub: "Custom Scalable Platforms · High Uptime",
      arrow: true,
      href: "#services",
    },
    {
      title: "App Development",
      sub: "iOS · Android · Cross-Platform Native",
      arrow: true,
      href: "#services",
    },
    {
      title: "Web Design & UX",
      sub: "Custom Interfaces · Visual Masterpieces",
      arrow: true,
      href: "#services",
    },
    {
      title: "Digital Marketing & SEO",
      sub: "Results-Driven Growth · Organic Search",
      arrow: true,
      href: "#services",
    },
  ],
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column: Editorial Headline & Actions (col-span-7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Eyebrow Pill */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF5F3] border border-[#D1E7E2] text-[#0D5C4D] text-[11px] font-mono tracking-wider uppercase font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C4D]" />
            <span>{HERO_CONTENT.eyebrow}</span>
          </motion.div>

          {/* Editorial Display Headline */}
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-editorial text-[#1A1918] leading-[1.08] tracking-tight pb-1"
          >
            {HERO_CONTENT.headlineStart} <br />
            {HERO_CONTENT.headlineMiddle} <br />
            <span className="font-editorial-italic text-[#0D5C4D] pr-1">
              {HERO_CONTENT.headlineAccent}
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base text-[#57534E] leading-relaxed max-w-lg"
          >
            {HERO_CONTENT.subtext}
          </motion.p>

          {/* Pill Action Buttons */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#18181B] hover:bg-black active:bg-black rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
            >
              <span>{HERO_CONTENT.primaryCta.text}</span>
              <ArrowRight size={15} weight="bold" />
            </a>

            <a
              href={HERO_CONTENT.secondaryCta.href}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#1A1918] bg-transparent hover:bg-black/[0.04] border border-[#D6D3C9] rounded-full transition-all duration-200 cursor-pointer"
            >
              <span>{HERO_CONTENT.secondaryCta.text}</span>
            </a>
          </motion.div>

          {/* Credibility Micro-line */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="pt-4 text-xs font-mono text-[#78716C] flex flex-wrap items-center gap-2"
          >
            {HERO_CONTENT.credibilityTags.map((tag, idx) => (
              <span key={tag} className="flex items-center gap-2">
                <span>{tag}</span>
                {idx < HERO_CONTENT.credibilityTags.length - 1 && <span>·</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Floating Elevated White Card (col-span-5) */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="card-elevated rounded-2xl p-6 sm:p-7 shadow-[0_12px_36px_-8px_rgba(26,25,24,0.06)] bg-white">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EEE6]">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider">
                {HERO_CONTENT.capabilitiesHeader}
              </span>
              <span className="text-[10px] font-mono text-[#0D5C4D] bg-[#EBF5F3] px-2 py-0.5 rounded-full font-semibold">
                {HERO_CONTENT.capabilitiesBadge}
              </span>
            </div>

            {/* List Rows with Divider lines */}
            <div className="divide-y divide-[#F0EEE6]">
              {HERO_CONTENT.capabilities.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="py-3.5 flex items-center justify-between group transition-colors hover:bg-[#FAF9F5]/80 -mx-2 px-2 rounded-xl"
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-[#1A1918] group-hover:text-[#0D5C4D] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#78716C]">
                      {item.sub}
                    </div>
                  </div>

                  {item.tag ? (
                    <span className="shrink-0 text-[10px] font-mono font-semibold text-white bg-[#0D5C4D] px-2.5 py-1 rounded-full tracking-wide">
                      {item.tag}
                    </span>
                  ) : (
                    <span className="text-[#A8A29E] group-hover:text-[#0D5C4D] group-hover:translate-x-0.5 transition-all text-sm font-mono">
                      →
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
