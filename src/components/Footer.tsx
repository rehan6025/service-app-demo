import { ShieldCheck, ArrowUp } from "@phosphor-icons/react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E8E6DF] bg-[#FAF9F5] text-[#78716C] text-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company Brand (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0D5C4D]/10 text-[#0D5C4D] flex items-center justify-center border border-[#0D5C4D]/20">
                <ShieldCheck size={18} weight="duotone" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-[#1A1918]">
                Bitcom Informatics
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#57534E] max-w-sm leading-relaxed">
              We know how to make technology work for your enterprise. Delivering elite cybersecurity defense, mission-critical infrastructure, and scalable custom applications throughout India.
            </p>

            <div className="text-xs font-mono text-[#0D5C4D]">
              ● Operations active across India
            </div>
          </div>

          {/* Capabilities (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1918] font-semibold">
              Capabilities
            </div>
            <ul className="space-y-2 text-xs text-[#57534E]">
              <li><a href="#services" className="hover:text-[#0D5C4D] transition-colors">Cybersecurity & Threat Defense</a></li>
              <li><a href="#services" className="hover:text-[#0D5C4D] transition-colors">Custom Software Development</a></li>
              <li><a href="#services" className="hover:text-[#0D5C4D] transition-colors">Web Platform Engineering</a></li>
              <li><a href="#services" className="hover:text-[#0D5C4D] transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-[#0D5C4D] transition-colors">Web Design & UX Architecture</a></li>
              <li><a href="#services" className="hover:text-[#0D5C4D] transition-colors">Performance Digital Marketing</a></li>
            </ul>
          </div>

          {/* Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1918] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#57534E]">
              <li><a href="#about" className="hover:text-[#0D5C4D] transition-colors">About Bitcom</a></li>
              <li><a href="#process" className="hover:text-[#0D5C4D] transition-colors">How We Work</a></li>
              <li><a href="#team" className="hover:text-[#0D5C4D] transition-colors">Leadership</a></li>
              <li><a href="#contact" className="hover:text-[#0D5C4D] transition-colors">Contact us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#E8E6DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>
            &copy; {new Date().getFullYear()} Bitcom Informatics IT Solutions. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8E6DF] bg-white hover:bg-[#FAF9F5] text-[#57534E] hover:text-[#1A1918] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={12} weight="bold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
