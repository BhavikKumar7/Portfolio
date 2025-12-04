import React, { useEffect, useState } from "react";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TextType from "./TextType";
import { Link as ScrollLink } from "react-scroll";
import Galaxy from "./Galaxy";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="relative w-full h-[700px]">
        {mounted && (
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            transparent={true}
            glowIntensity={0.5}
            saturation={0}
            hueShift={140}
            density={0.35}
            twinkleIntensity={0.5}
            starSpeed={0.3}
            speed={0.8}
            rotationSpeed={0.03}
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col justify-center items-center gap-6 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 z-10 pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-teal-400 text-2xl font-medium tracking-wide"
        >
          👋 Hi, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-stone-100 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
        >
          Bhavik Kumar
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="max-w-4xl text-stone-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center"
        >
          <TextType
            text={[
              "Full Stack Developer | Problem Solver | Innovator.",
              "Blending MERN Stack with DSA to craft smarter solutions.",
              "Code, optimize, innovate — every single day.",
            ]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pointer-events-auto"
        >
          <motion.a
            href="/Bhavik_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, boxShadow: "0 0 25px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 border border-stone-200 text-stone-200 hover:bg-white hover:text-black transition-all duration-300 rounded-full py-3 px-8 font-semibold shadow-lg cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Resume
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(20,184,166,0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="flex items-center justify-center gap-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition-all duration-300 rounded-full py-3 px-8 font-semibold shadow-lg cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </ScrollLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;