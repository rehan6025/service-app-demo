import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

interface HeroCursorBrushProps {
  children: React.ReactNode;
}

export function HeroCursorBrush({ children }: HeroCursorBrushProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Raw mouse coordinates relative to this zone
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const targetOpacity = useMotionValue(0);

  // Silky delayed spring physics for that floaty Urumi-style brush feel
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 18 });
  const smoothOpacity = useSpring(targetOpacity, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    targetOpacity.set(1);
  };

  const handleMouseEnter = () => {
    if (!reduceMotion) {
      targetOpacity.set(1);
    }
  };

  const handleMouseLeave = () => {
    targetOpacity.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden"
    >
      {/* Delayed cursor-following background brush (only active in this zone) */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          style={{
            x: smoothX,
            y: smoothY,
            opacity: smoothOpacity,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="pointer-events-none absolute w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(13,92,77,0.13)_0%,rgba(16,185,129,0.05)_40%,transparent_70%)] blur-[75px] z-0"
        />
      )}

      {/* Child sections (Hero + next section) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
