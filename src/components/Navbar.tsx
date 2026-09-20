import { useState, useEffect } from "react";
import { ShieldCheck, List, X } from "@phosphor-icons/react";

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

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Leadership", href: "#team" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Floating Pill Bar */}
        <div
          className={`w-full pointer-events-auto rounded-full pill-nav px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "shadow-md bg-white/95" : "bg-white/85"
          }`}
        >
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C4D] rounded-full"
          >
            <div className="w-8 h-8 rounded-full bg-[#0D5C4D]/10 text-[#0D5C4D] flex items-center justify-center border border-[#0D5C4D]/20 group-hover:bg-[#0D5C4D] group-hover:text-white transition-colors">
              <ShieldCheck size={18} weight="duotone" />
            </div>
            <span className="text-base font-semibold tracking-tight text-[#1A1918]">
              Bitcom
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-normal text-[#57534E]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1A1918] transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C4D] rounded-full px-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Pill CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-[#0D5C4D] hover:bg-[#084539] active:bg-[#06332a] rounded-full transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C4D] cursor-pointer"
            >
              Contact us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[#57534E] hover:text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#0D5C4D]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 max-w-5xl mx-auto rounded-2xl card-elevated p-4 space-y-3 bg-white/95 backdrop-blur-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-[#57534E] hover:text-[#1A1918] hover:bg-[#FAF9F5] text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#E8E6DF]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 px-4 text-sm font-medium text-white bg-[#0D5C4D] rounded-full"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
