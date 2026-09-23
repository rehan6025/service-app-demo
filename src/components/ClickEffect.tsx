import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ClickPing {
  x: number;
  y: number;
  id: number;
}

export function ClickEffect() {
  const [pings, setPings] = useState<ClickPing[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't trigger when clicking form fields
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }

      const id = Date.now() + Math.random();
      const newPing: ClickPing = {
        x: e.clientX,
        y: e.clientY,
        id,
      };

      // Keep max 5 pings in state
      setPings((prev) => [...prev.slice(-4), newPing]);

      // Bulletproof cleanup: guarantee removal after 500ms even if tab loses focus
      setTimeout(() => {
        setPings((prev) => prev.filter((p) => p.id !== id));
      }, 500);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const removePing = (id: number) => {
    setPings((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {pings.map((ping) => (
          <div
            key={ping.id}
            style={{
              left: `${ping.x}px`,
              top: `${ping.y}px`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            {/* Outer expanding radar ring - single shot */}
            <motion.span
              initial={{ scale: 0.2, opacity: 0.8 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => removePing(ping.id)}
              className="block w-6 h-6 rounded-full border border-[#0D5C4D]/70 bg-[#0D5C4D]/15 shadow-[0_0_12px_rgba(13,92,77,0.3)]"
            />
            {/* Center spark point */}
            <motion.span
              initial={{ scale: 1, opacity: 0.9 }}
              animate={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-[#0D5C4D]"
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
