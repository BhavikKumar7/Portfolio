import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const MagneticProfile = ({ src, alt = "Profile", className = "" }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15 });
  const springY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(springY, [-50, 50], [10, -10]);
  const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX / 3);
    y.set(offsetY / 3);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className="flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 85px rgba(20,184,166,0.9)"
        }}
        className={`relative rounded-full overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl cursor-pointer flex items-center justify-center ${className}`}
      >
        {/* Glow Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-[2px] border-teal-400/25"
        />

        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full brightness-95 hover:brightness-110 transition-all duration-300"
        />

        <div className="absolute inset-0 rounded-full bg-white/5 mix-blend-overlay"></div>
      </motion.div>
    </motion.div>
  );
};

export default MagneticProfile;
