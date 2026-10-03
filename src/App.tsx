import { CyberBackground } from "./components/CyberBackground";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustBanner } from "./components/TrustBanner";
import { AboutSection } from "./components/AboutSection";
import { ServicesBento } from "./components/ServicesBento";
import { ProcessSection } from "./components/ProcessSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { ClickEffect } from "./components/ClickEffect";

import { HeroCursorBrush } from "./components/HeroCursorBrush";

function App() {
  return (
    <div className="min-h-[100dvh] bg-[#FAF9F5] text-[#1A1918] relative overflow-x-hidden selection:bg-[#0D5C4D]/20 selection:text-[#0D5C4D]">
      {/* Top scroll progress indicator bar (toggle here) */}
      <ScrollProgress />

      {/* Interactive mouse click radar ping effect (toggle here) */}
      <ClickEffect />

      {/* Ambient warm lighting & dot grid background */}
      <CyberBackground />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Page Sections Flow - Reorder or toggle sections here */}
      <main className="relative z-10">
        {/* Hero zone with subtle cursor follow glow (wrap or unwrap HeroCursorBrush) */}
        <HeroCursorBrush>
          <HeroSection />
          <TrustBanner />
        </HeroCursorBrush>

        {/* 01: About & company metrics */}
        <AboutSection />

        {/* 02: Expandable capabilities accordion */}
        <ServicesBento />

        {/* 03: 4-card process overview */}
        <ProcessSection />

        {/* 04: Leadership team profiles */}
        <LeadershipSection />

        {/* 05: Contact info and interactive consultation form */}
        <ContactSection />
      </main>

      {/* Site footer & back to top */}
      <Footer />
    </div>
  );
}

export default App;