import { useState, useEffect } from "react";
import { ShieldCheck, List, X } from "@phosphor-icons/react";

export const NAVBAR_CONTENT = {
  brandName: "Bitcom",
  ctaText: "Contact us",
  ctaHref: "#contact",
  navLinks: [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Leadership", href: "#team" },
  ],
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Floating Pill Bar */}
        <div
          className={`w-full pointer-events-auto rounded-full px-5 sm:px-7 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 border ${isScrolled
              ? "bg-[#E3E8E3]/80 backdrop-blur-md border-[#CFDAD1] shadow-[0_10px_30px_-10px_rgba(15,35,25,0.08)]"
              : "bg-[#E6EBE6]/80 backdrop-blur-sm border-[#D5DDD6]/80 shadow-[0_4px_20px_-2px_rgba(15,35,25,0.04)]"
            }`}
        >
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C4D] rounded-full"
          >
            <div className="w-7 h-7 rounded-full bg-[#0D5C4D]/10 text-[#0D5C4D] flex items-center justify-center border border-[#0D5C4D]/20 group-hover:bg-[#0D5C4D] group-hover:text-white transition-colors">
              <ShieldCheck size={16} weight="duotone" />
            </div>
            <span className="font-editorial text-[23px] leading-none tracking-tight text-[#1A1918]">
              {NAVBAR_CONTENT.brandName}
            </span>
          </a>

          {/* Right Group: Desktop Nav Links + Contact Button */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-6 lg:gap-7 text-[13.5px] font-normal text-[#4A554E]">
              {NAVBAR_CONTENT.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#1A1918] transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C4D] rounded-full px-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href={NAVBAR_CONTENT.ctaHref}
              className="inline-flex items-center justify-center px-5 py-2 text-[13.5px] font-medium text-white bg-[#0D5C4D] hover:bg-[#094237] active:bg-[#062e26] rounded-full transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C4D] cursor-pointer"
            >
              {NAVBAR_CONTENT.ctaText}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[#4A554E] hover:text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#0D5C4D]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 max-w-6xl mx-auto rounded-3xl p-5 space-y-3 bg-[#E6EBE6]/95 backdrop-blur-xl border border-[#D5DDD6] shadow-lg">
          <nav className="flex flex-col space-y-2">
            {NAVBAR_CONTENT.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-[#4A554E] hover:text-[#1A1918] hover:bg-white/60 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#D5DDD6]">
            <a
              href={NAVBAR_CONTENT.ctaHref}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 px-4 text-sm font-medium text-white bg-[#0D5C4D] hover:bg-[#094237] rounded-full"
            >
              {NAVBAR_CONTENT.ctaText}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
