import { motion, useReducedMotion } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react";

export function LeadershipSection() {
  const reduceMotion = useReducedMotion();

  const leaders = [
    {
      name: "Vaibhav Parashar",
      role: "CHIEF EXECUTIVE OFFICER & FOUNDER",
      image: "/images/vaibhav-parashar.jpg",
      focus: "Cybersecurity Architecture & Vulnerability Research",
      bio: "Pioneering cybersecurity research and enterprise system resilience. Globally recognized for vulnerability disclosures to Google, Microsoft, and IBM.",
      highlights: [
        "Bug Bounty Hall of Fame (Microsoft, Google)",
        "200+ Enterprise & Government Implementations",
        "Lead Security Researcher & Systems Architect",
      ],
    },
    {
      name: "Kaushal Jangid",
      role: "CHIEF OPERATING OFFICER & CO-FOUNDER",
      image: "/images/kaushal-jangid.jpg",
      focus: "Operations & Pan-India Technical Delivery",
      bio: "Directing operational efficiency, cross-functional engineering execution, and quality control from initial scoping to long-term client maintenance.",
      highlights: [
        "Head of Engineering & Operational Scalability",
        "Bug Bounty Acknowledged (IBM, Salesforce)",
        "Pan-India Enterprise Delivery Management",
      ],
    },
  ];

  return (
    <section id="team" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E8E6DF] bg-white/40">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-4"
        >
          <div className="text-xs font-mono tracking-widest text-[#0D5C4D] uppercase font-semibold">
            04 / LEADERSHIP
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#1A1918] tracking-tight leading-tight">
            The leadership team
          </h2>

          <p className="text-[#57534E] text-base sm:text-lg max-w-xl font-normal">
            Direct access to senior founders and verified security researchers on every deployment.
          </p>
        </motion.div>

        {/* 2-Column Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card-elevated rounded-2xl p-6 sm:p-8 space-y-6 bg-white flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-20 h-20 rounded-2xl object-cover border border-[#E8E6DF] shadow-sm shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-editorial text-[#1A1918] leading-tight">
                      {leader.name}
                    </h3>
                    <div className="text-[11px] font-mono font-medium text-[#0D5C4D] tracking-wider mt-0.5">
                      {leader.role}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {leader.bio}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#F0EEE6]">
                  {leader.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#78716C]">
                      <CheckCircle size={14} weight="fill" className="text-[#0D5C4D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
