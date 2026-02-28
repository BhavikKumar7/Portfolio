import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSpringboot,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    glow: "from-purple-500/30 to-transparent",
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    glow: "from-blue-500/30 to-transparent",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    title: "Databases",
    glow: "from-green-500/30 to-transparent",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    glow: "from-orange-400/30 to-transparent",
    items: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
  {
    title: "Core CS",
    glow: "from-pink-500/30 to-transparent",
    items: [
      { name: "DSA", icon: <SiCplusplus /> },
      { name: "OOP", icon: <FaJava /> },
      { name: "System Design", icon: <FaNodeJs /> },
      { name: "DBMS & OS", icon: <SiMysql /> },
    ],
  },
];

const SkillSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Section title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 0.25,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${skills.length * 120}%`,
        scrub: true,
        pin: true,
      },
    });

    panelsRef.current.forEach((panel) => {
      const chips = panel.querySelectorAll(".skill-chip");

      tl.fromTo(
        panel,
        { opacity: 0, scale: 0.9, y: 120, filter: "blur(12px)" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }
      )
        .fromTo(
          chips,
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(panel, {
          opacity: 0,
          scale: 0.95,
          y: -80,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.in",
        });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const addToPanels = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-gradient-to-b from-[#9a74cf50] to-black overflow-hidden"
    >
      {/* Background Title */}
      <h1
        ref={titleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        text-[6rem] md:text-[10rem] font-extrabold text-white tracking-widest pointer-events-none opacity-0"
      >
        SKILLS
      </h1>

      {skills.map((skill, i) => (
        <div
          key={i}
          ref={addToPanels}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0"
        >
          {/* Glow */}
          <div
            className={`absolute w-[30rem] h-[30rem] rounded-full bg-gradient-to-b ${skill.glow} blur-[120px]`}
          />

          <h2 className="relative text-4xl md:text-6xl font-bold text-purple-300 mb-10">
            {skill.title}
          </h2>

          <div className="relative flex flex-wrap justify-center gap-4 max-w-4xl">
            {skill.items.map((item, idx) => (
              <div
                key={idx}
                className="skill-chip flex items-center gap-3 px-6 py-3 rounded-full
                bg-white/10 backdrop-blur-lg border border-white/10
                text-white hover:scale-105 transition-transform"
              >
                <span className="text-xl text-purple-400">{item.icon}</span>
                <span className="text-sm md:text-base">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillSection;