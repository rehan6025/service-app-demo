import { motion, useReducedMotion } from "motion/react";
import { Globe, ShieldCheck, Lightning, UsersThree } from "@phosphor-icons/react";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  const cards = [
    {
      icon: <Globe size={20} weight="regular" className="text-[#0D5C4D]" />,
      title: "Pan-India reach, unified delivery.",
      desc: "Serving commercial enterprises and government institutions throughout India with seamless technical communication, on-schedule milestones, and reliable ongoing support.",
    },
    {
      icon: <ShieldCheck size={20} weight="regular" className="text-[#0D5C4D]" />,
      title: "Security research at the foundation.",
      desc: "Bug Bounty honored by Microsoft, IBM, Salesforce, and Google. We do not bolt on security as an afterthought; we engineer threat defense into every layer of code.",
    },
    {
      icon: <Lightning size={20} weight="regular" className="text-[#0D5C4D]" />,
      title: "Ship hardened code, on schedule.",
      desc: "Over 200 projects completed. Automated testing, clean modular architectures, and rigorous code audits ensure systems remain stable under intense operational load.",
    },
    {
      icon: <UsersThree size={20} weight="regular" className="text-[#0D5C4D]" />,
      title: "Direct executive leadership.",
      desc: "Direct architectural oversight by founders Vaibhav Parashar and Kaushal Jangid. No disconnected handoffs; senior expertise guides your project at every stage.",
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header (Exact Urumi 04 / HOW WE WORK format) */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-4"
        >
          <div className="text-xs font-mono tracking-widest text-[#0D5C4D] uppercase font-semibold">
            03 / HOW WE WORK
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#1A1918] tracking-tight leading-tight">
            How we work
          </h2>
        </motion.div>

        {/* 4-Card Horizontal Grid (Exact match to Urumi Screenshot 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card-elevated card-elevated-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-white min-h-[300px]"
            >
              <div className="space-y-4">
                {/* Icon in soft teal circle (matches Urumi icon chip) */}
                <div className="w-10 h-10 rounded-xl bg-[#EBF5F3] flex items-center justify-center border border-[#D1E7E2]">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-editorial text-[#1A1918] leading-snug">
                  {card.title}
                </h3>

                {/* Card Body */}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
