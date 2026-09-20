import { motion, useReducedMotion } from "motion/react";

export function CyberBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Warm paper subtle grain / grid feel */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(26, 25, 24, 0.04) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top right gentle spruce / emerald ambient light bleed (matches Urumi reference) */}
      <motion.div
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-[#0D5C4D]/[0.07] blur-[120px]"
        initial={reduceMotion ? false : { scale: 0.9, opacity: 0.7 }}
        animate={reduceMotion ? false : {
          scale: [0.9, 1.1, 0.9],
          opacity: [0.6, 0.85, 0.6],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom left subtle warm sand ambient glow */}
      <motion.div
        className="absolute top-1/2 -left-40 w-[550px] h-[550px] rounded-full bg-[#E8DFCB]/[0.45] blur-[140px]"
        initial={reduceMotion ? false : { scale: 1 }}
        animate={reduceMotion ? false : {
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lower section subtle light beam */}
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[400px] rounded-full bg-[#0D5C4D]/[0.04] blur-[130px]" />
    </div>
  );
}
