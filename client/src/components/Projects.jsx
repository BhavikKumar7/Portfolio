import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiSocketdotio, SiSpringboot, SiCplusplus, SiMysql, SiArduino, SiTailwindcss } from "react-icons/si";
import { projectsData } from '@/data/projects';

const techIcons = {
  react: <FaReact size={20} />,
  node: <FaNodeJs size={20} />,
  express: <SiExpress size={20} />,
  mongodb: <SiMongodb size={20} />,
  socket: <SiSocketdotio size={20} />,
  spring: <SiSpringboot size={20} />,
  cpp: <SiCplusplus size={20} />,
  mysql: <SiMysql size={20} />,
  arduino: <SiArduino size={20} />,
  java: <FaJava size={20} />,
  tailwind: <SiTailwindcss size={20} />,
};

const Projects = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination],
      speed: 600,
      loop: true,
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: true,
      fadeEffect: { crossFade: true },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.projects-next',
        prevEl: '.projects-prev',
      },
      pagination: {
        el: '.projects-pagination',
        clickable: true,
        type: 'progressbar',
      },

      on: {
        init: function () {
          if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            document.querySelector('.projects-prev').style.display = 'none';
            document.querySelector('.projects-next').style.display = 'none';
          }
        },
      }
    });

    return () => swiper && swiper.destroy();
  }, []);

  return (
    <section id="projects" className="min-h-screen mb-40 relative bg-gradient-to-b from-black via-black to-black pt-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 space-y-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="text-center md:text-left w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className="inline-block"
        >
          <h1 className="text-4xl md:text-5xl text-stone-100 font-extrabold">
            Projects
          </h1>
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-teal-400 to-stone-400 mt-1"
          />
        </motion.div>
      </div>

      <div ref={swiperRef} className="projects-swiper w-full max-w-7xl mx-auto relative mt-40 overflow-visible">
        <div className="swiper-wrapper">
          {projectsData.map((project, index) => (
            <div key={project.id} className="swiper-slide">
              <motion.div
                className="relative bg-gradient-to-br from-black/80 to-stone-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-stone-700/50 hover:border-teal-400/70 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                style={{
                  background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(24,24,24,0.85) 100%)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-teal-300/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h2 className="text-2xl font-bold text-teal-400 mb-1">{project.title}</h2>
                <p className="text-stone-400 text-sm mb-2 italic">{project.subTitle}</p>
                <p className="text-stone-300 mt-2 leading-relaxed">{project.description}</p>

                {project.techStack && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.techStack.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-stone-900 to-stone-800 rounded-full flex items-center gap-2 text-teal-400 text-sm border border-stone-700 hover:border-teal-400/70 hover:shadow-lg hover:shadow-teal-400/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {techIcons[tech.icon]}
                        {tech.name}
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex gap-4 flex-wrap">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Source Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-stone-200 hover:bg-stone-100 text-black font-semibold rounded-full shadow-lg hover:shadow-stone-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.button
          className="projects-prev text-white text-3xl cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 backdrop-blur-md rounded-full p-3 hover:bg-teal-600/50 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❮
        </motion.button>

        <motion.button
          className="projects-next text-white text-3xl cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 backdrop-blur-md rounded-full p-3 hover:bg-teal-600/50 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❯
        </motion.button>

        <div className="projects-pagination"></div>

      </div>
    </section>
  );
};

export default Projects;