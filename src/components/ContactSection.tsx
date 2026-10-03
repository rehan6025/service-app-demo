import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle, EnvelopeSimple, PhoneCall, MapPin } from "@phosphor-icons/react";

export const CONTACT_CONTENT = {
  sectionTag: "05 / GET IN TOUCH",
  title: "Start a project with Bitcom",
  subtitle:
    "Whether you need a full enterprise security assessment, custom software architecture, or ongoing systems management, our senior team is ready to consult.",
  email: "contact@bitcom.in",
  phone: "+91 (0) 120 456 7890",
  phoneDisplay: "+91 (0) 120 456 7890",
  address: "Pan-India Operations · Headquarters in India",
  ndaNote: "All inquiries protected under strict NDA protocols.",
  serviceOptions: [
    "Cyber Security & Threat Audit",
    "Custom Software Development",
    "Web Platform Development",
    "Mobile App Engineering",
    "Web Design & UX",
    "Graphics & Brand Design",
    "Digital Marketing & SEO",
  ],
};

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: CONTACT_CONTENT.serviceOptions[0],
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E8E6DF]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info (col-span-5) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="text-xs font-mono tracking-widest text-[#0D5C4D] uppercase font-semibold">
              {CONTACT_CONTENT.sectionTag}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#1A1918] tracking-tight leading-tight">
              {CONTACT_CONTENT.title}
            </h2>

            <p className="text-[#57534E] text-base leading-relaxed">
              {CONTACT_CONTENT.subtitle}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#E8E6DF] text-sm text-[#57534E]">
              <div className="flex items-center gap-3">
                <EnvelopeSimple size={18} className="text-[#0D5C4D]" />
                <a href={`mailto:${CONTACT_CONTENT.email}`} className="hover:text-[#0D5C4D] transition-colors">
                  {CONTACT_CONTENT.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall size={18} className="text-[#0D5C4D]" />
                <a href={`tel:${CONTACT_CONTENT.phone.replace(/[^+\d]/g, "")}`} className="hover:text-[#0D5C4D] transition-colors">
                  {CONTACT_CONTENT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#0D5C4D]" />
                <span>{CONTACT_CONTENT.address}</span>
              </div>
            </div>

            <div className="text-xs font-mono text-[#78716C] pt-2">
              {CONTACT_CONTENT.ndaNote}
            </div>
          </motion.div>

          {/* Right Column: Clean White Consultation Card (col-span-7) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 card-elevated rounded-2xl p-6 sm:p-8 bg-white"
          >
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EBF5F3] text-[#0D5C4D] flex items-center justify-center mx-auto">
                  <CheckCircle size={28} weight="fill" />
                </div>
                <h3 className="text-2xl font-editorial text-[#1A1918]">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Bitcom Informatics. Our technical team will review your specifications and reply within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", service: "Cyber Security & Threat Audit", message: "" });
                  }}
                  className="px-5 py-2 rounded-full border border-[#D6D3C9] text-xs font-mono text-[#1A1918] hover:bg-black/5 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-editorial text-[#1A1918]">
                    Consultation Request
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1">
                    Describe your requirements to receive an architectural estimate.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#78716C]">
                    Your Name / Company *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E6DF] bg-[#FAF9F5] text-sm text-[#1A1918] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#0D5C4D] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#78716C]">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@company.in"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E6DF] bg-[#FAF9F5] text-sm text-[#1A1918] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#0D5C4D] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-[#78716C]">
                    Primary Area of Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E6DF] bg-[#FAF9F5] text-sm text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#0D5C4D] focus:border-transparent transition-all"
                  >
                    {CONTACT_CONTENT.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#78716C]">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, timeline, or current technical challenges..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E6DF] bg-[#FAF9F5] text-sm text-[#1A1918] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#0D5C4D] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-[#18181B] hover:bg-black active:bg-black text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer"
                >
                  <span>Submit consultation request</span>
                  <ArrowRight size={15} weight="bold" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
