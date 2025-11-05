import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaJira } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJsonwebtokens, SiGithubactions } from "react-icons/si";

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
      {/* === Header === */}
      <div className="text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          viewport={{ once: true }}
          className="inline-block mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
            Experience
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

      {/* === Experience Block === */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">

        {/* === Text Section (Primary) === */}
        <div className="w-full md:w-2/3 space-y-5">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-teal-400"
          >
            {experience.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-stone-400 text-lg"
          >
            {experience.company} <span className="text-stone-500">| {experience.duration}</span>
          </motion.p>

          <div className="space-y-3 mt-4">
            {experience.points.map((point, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-stone-200 text-lg leading-relaxed tracking-wide"
              >
                {point}
              </motion.p>
            ))}
          </div>

          {/* === Tech Toolbox === */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h4 className="text-teal-400 text-xl font-semibold mb-3 flex items-center gap-2">
              🧩 Tech Toolbox:
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              {experience.tech.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 transition duration-300"
                >
                  {tech.icon}
                  <span className="text-stone-300 text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* === Visual Section (Smaller) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 md:flex hidden items-center justify-center"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-teal-400 shadow-[0_0_25px_#14b8a6] overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
            <span className="text-stone-500">Company Logo / Visual</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
