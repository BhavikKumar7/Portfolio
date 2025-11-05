import React from 'react';
import { motion } from "framer-motion";

const About = () => {

  const aboutMePoints = [
    "👋 I’m Bhavik Kumar — a Computer Science and Engineering student passionate about building impactful digital solutions.",
    "💻 I craft modern full-stack web apps with React, Node.js, Express, and MongoDB — blending creativity with technical depth.",
    "⚙️ Strong in Core Java, OOP, and DSA, I write clean, scalable code that’s built to last.",
    "🚀 I love solving problems, exploring system design, and finding smarter ways to turn ideas into real-world products.",
    "☕ Outside tech, I’m drawn to travel, design, and conversations that spark innovation."
  ];

  return (
    <section id="about" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black pt-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
      <div className='text-center md:text-left w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          viewport={{ once: true }}
          className="inline-block mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
            About Me
          </h2>
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[3px] bg-teal-400 mt-1 rounded-full"
          />
        </motion.div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">

        {/* === Text Section (Takes More Space) === */}
        <div className="w-full md:w-2/3 space-y-4">
          {aboutMePoints.map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-stone-200 text-lg leading-relaxed tracking-wide"
            >
              {item}
            </motion.p>
          ))}
        </div>

        {/* === Image Section (Smaller Proportion) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 flex items-center justify-center"
        >
          <div className="relative w-60 h-60 md:w-100 md:h-100 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-950 to-black border border-none shadow-[0_0_35px_#14b8a6]/40 hover:shadow-[0_0_55px_#14b8a6]/70 transition-all duration-500">
            <img
              src="1.jpg"
              alt="Profile"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
            />

            {/* Optional teal glow overlay */}
            <div className="absolute inset-0 bg-teal-400/5 mix-blend-overlay"></div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
