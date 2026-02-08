"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DoorIntro({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("doorSeen");
    if (seen) {
      onFinish();
    } else {
      setVisible(true);
      sessionStorage.setItem("doorSeen", "true");
    }
  }, [onFinish]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#6f7f5a] perspective backdrop-blur-sm"
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Door container */}
      <div className="relative h-[380px] w-[240px]">
        
        {/* Interior light / white reveal */}
        <div className="absolute inset-0 bg-white shadow-[0_0_60px_rgba(255,255,255,0.85)]" />

        {/* Door frame (thickness) */}
        <div className="absolute inset-0 border-[10px] border-[#4f5d3b] bg-white shadow-xl" />

        {/* Door */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -115 }}
          transition={{
            duration: 2.8,
            ease: [0.4, 0, 0.2, 1], // cinematic easing
          }}
          className="absolute inset-0 origin-left bg-gradient-to-br from-[#7a8b63] to-[#5f6f4b]"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "inset -10px 0 20px rgba(0,0,0,0.35)",
          }}
          onAnimationComplete={() => {
            setFadeOut(true);
            setTimeout(onFinish, 800);
          }}
        >
          {/* Door handle */}
          <div className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#e6dfc8]" />

          {/* Door edge depth */}
          <div className="absolute left-0 top-0 h-full w-[6px] bg-[#3e4a2e]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
