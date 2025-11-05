import React from 'react';
import { Download, Mail } from 'lucide-react';
import TextType from './TextType';
import { Link as ScrollLink } from 'react-scroll';
import Galaxy from './Galaxy';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="relative w-full h-[700px]">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          transparent={false}
          glowIntensity={0.4}
          saturation={0}
          hueShift={140}
          density={0.25}
          twinkleIntensity={0.35}
          starSpeed={0.25}
          speed={0.8}
          rotationSpeed={0.02}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 space-y-4 z-10 pointer-events-none">
        <p className="text-teal-400 text-base sm:text-lg font-medium">Hi, my name is</p>

        <h1 className="text-stone-100 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Bhavik Kumar
        </h1>

        <div className="max-w-2xl">
          <TextType
            text={[
              'Developer | Problem Solver | Innovator.',
              'Combining Full Stack development with DSA mastery to craft intelligent solutions.',
              'Code, optimize, and innovate — one challenge at a time.',
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full sm:w-auto">
          <a
            href="/Bhavik_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center justify-center gap-2 border border-stone-200 text-stone-200 hover:bg-stone-200 hover:text-black transition-all duration-300 rounded-full py-3 px-6 font-medium text-sm sm:text-base"
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </a>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="pointer-events-auto flex items-center justify-center gap-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition-all duration-300 rounded-full py-3 px-6 font-medium text-sm sm:text-base cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span>Get In Touch</span>
          </ScrollLink>
        </div>
      </div>

    </section>
  );
};

export default Hero;
