import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import useMousePosition from "@/hooks/useMousePosition";

const LandingPage = () => {
  useMousePosition();

  return (
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );
}


export default LandingPage;
