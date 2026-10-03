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
      <ScrollProgress/>
      <ClickEffect />
      {/* Classy warm ambient lighting vibe */}
      <CyberBackground />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Editorial Content Flow */}
      <main className="relative z-10">
        <HeroCursorBrush>
          <HeroSection />
          <TrustBanner />
        </HeroCursorBrush>
        <AboutSection />
        <ServicesBento />
        <ProcessSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      {/* Warm Clean Footer */}
      <Footer />
    </div>
  );
}

export default App;