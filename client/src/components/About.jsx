import { useEffect } from 'react';
import { motion, useAnimate } from "framer-motion";
import MagneticProfile from './MagneticProfile';

const About = () => {

  const textReveal = {
    hidden: { opacity: 0, x: -20, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, delay: i * 0.08, ease: "easeOut" }
    })
  };

  const aboutMePoints = [
    "👋 I’m Bhavik Kumar — a Computer Science and Engineering student passionate about building impactful digital solutions.",
    "💻 I craft modern full-stack web apps with React, Node.js, Express, and MongoDB — blending creativity with technical depth.",
    "⚙️ Strong in Core Java, OOP, and DSA, I write clean, scalable code that’s built to last.",
    "🚀 I love solving problems, exploring system design, and finding smarter ways to turn ideas into real-world products.",
    "☕ Outside tech, I’m drawn to travel, design, and conversations that spark innovation."
  ];

  return (
    <section id="about" className="min-h-screen relative overflow-hidden bg-transparent pt-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
      <div className='text-center md:text-left w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">
            About Me
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-teal-400 to-stone-400 mt-1"
          />
        </motion.div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-2/3 space-y-4">
          {aboutMePoints.map((item, index) => (
            <motion.p
              key={index}
              custom={index}
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                x: 6,
                scale: 1.04,
                color: "#14b8a6",
                textShadow: "0 0 15px rgba(20,184,166,0.8)",
                transition: {
                  duration: 0.25,
                  type: "spring"
                }
              }}
              transition={{ type: "spring", stiffness: 120, damping: 8 }}
              className="relative text-stone-200 text-lg leading-relaxed tracking-wide cursor-pointer group"
            >
              {item}
            </motion.p>
          ))}
        </div>
        <div className="flex justify-center md:justify-end lg:justify-end w-full md:w-auto">
            <MagneticProfile src="1.jpg" className="w-80 h-80 md:w-100 md:h-100" />
        </div>
      </div>
    </section>
  );
};

export default About;
