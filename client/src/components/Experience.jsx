import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaJira } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJsonwebtokens, SiGithubactions } from "react-icons/si";
import MagneticProfile from "./MagneticProfile";

const Experience = () => {

  const experience = {
    title: "Software Development Intern (Remote SDE)",
    company: "Sangam ERP Solutions Pvt. Ltd.",
    duration: "May 2025 – Aug 2025",
    points: [
      "🧩 Designed and deployed scalable full-stack modules (MERN) with REST APIs aligned to microservice architecture.",
      "⚙️ Optimized ERP workflows improving performance and reliability by 15%, ensuring smooth data transactions.",
      "🔐 Implemented secure authentication and access control systems to protect sensitive enterprise data.",
      "🤝 Collaborated in a remote Agile environment (Scrum) using Git, GitHub, JIRA, and CI/CD for timely and high-quality releases.",
    ],
    tech: [
      { name: "React.js", icon: <FaReact className="text-cyan-400 text-2xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-stone-300 text-2xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-2xl" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-400 text-2xl" /> },
      { name: "REST API", icon: <span className="text-stone-300 text-xl font-semibold">API</span> },
      { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
      { name: "JIRA", icon: <FaJira className="text-blue-400 text-2xl" /> },
      { name: "CI/CD", icon: <SiGithubactions className="text-teal-400 text-2xl" /> },
    ],
  };


  return (
    <section id="experience" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
      <div className="text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">
            Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-teal-400 to-stone-400 mt-1"
          />
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-2/3 space-y-5">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold text-teal-400"
          >
            {experience.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-stone-400 text-lg"
          >
            {experience.company} <span className="text-stone-500">| {experience.duration}</span>
          </motion.p>
          <div className="space-y-4 mt-4">
            {experience.points.map((point, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  color: "#14b8a6",
                  x: 6,
                  textShadow: "0 0 12px rgba(20,184,166,0.8)"
                }}
                className="relative text-stone-300 text-lg leading-relaxed cursor-pointer group"
              >
                {point}
              </motion.p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8"
          >
            <h4 className="text-teal-400 text-xl font-semibold mb-3">
              🧩 Tech Toolbox:
            </h4>
            <div className="flex flex-wrap gap-4">
              {experience.tech.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ scale: 1.12, boxShadow: "0 0 22px rgba(20,184,166,0.6)" }}

                  className="px-3 py-2 bg-gray-900/50 rounded-lg border border-gray-700
                    flex items-center gap-2 hover:bg-gray-800/90 cursor-pointer">
                  {tech.icon}
                  <span className="text-stone-300 text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hidden md:flex justify-center md:justify-end lg:justify-end w-full md:w-auto">
          <MagneticProfile src="2.jpg" className="w-75 h-75 md:w-100 md:h-100" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
