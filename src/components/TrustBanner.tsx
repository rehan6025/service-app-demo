import { motion, useReducedMotion } from "motion/react";

export function TrustBanner() {
  const reduceMotion = useReducedMotion();

  const recognitionPartners = [
    {
      name: "Microsoft",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
          <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z" />
        </svg>
      ),
    },
    {
      name: "Google",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      ),
    },
    {
      name: "IBM",
      svg: (
        <svg className="h-5 w-auto fill-current" viewBox="0 0 24 24">
          <path d="M0 4h24v1.5H0zm0 3.2h24v1.5H0zm0 3.2h24v1.5H0zm0 3.2h24v1.5H0zm0 3.2h24v1.5H0zm0 3.2h24v1.5H0z" />
        </svg>
      ),
    },
    {
      name: "Salesforce",
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 24 24">
          <path d="M10.006 4.79a5.71 5.71 0 0 1 4.507 2.195 6.452 6.452 0 0 1 4.31-.027A5.952 5.952 0 0 1 24 12.637a5.95 5.95 0 0 1-5.69 5.946l-.504.004H4.728a4.728 4.728 0 0 1-.365-9.442 5.674 5.674 0 0 1 4.394-4.355c.404-.001.815.008 1.25.008z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="border-y border-[#E8E6DF] py-10 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <span className="text-[11px] font-mono tracking-widest text-[#0D5C4D] uppercase font-semibold block mb-1">
              SECURITY HONORS & BUG BOUNTY HALL OF FAME
            </span>
            <p className="text-xs text-[#78716C]">
              Acknowledged for vulnerability research by leading technology ecosystems
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 text-[#78716C]">
            {recognitionPartners.map((partner) => (
              <div
                key={partner.name}
                className="hover:text-[#0D5C4D] transition-colors"
                title={partner.name}
                aria-label={partner.name}
              >
                {partner.svg}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
