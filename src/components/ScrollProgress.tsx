import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Spring physics gives it that silky smooth momentum
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D5C4D] via-[#10B981] to-[#34D399] origin-left z-[100] pointer-events-none shadow-[0_0_8px_rgba(16,185,129,0.6)]"
    />
  );
}
