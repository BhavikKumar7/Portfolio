import { Download, MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact me", to: "contact" },
  ];

  const ResumeButton = () => (
    <a
      href="/Bhavik_Kumar_Resume.pdf"
      target="_blank"
      className="flex items-center justify-center gap-2 border border-teal-400 bg-teal-400 text-black transition-all duration-300 rounded-full py-3 px-6 font-medium text-sm sm:text-base cursor-pointer"
    >
      <Download size={18} />
      <span>Resume</span>
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between my-5 mx-10 px-10 py-4 rounded-full bg-white/10 backdrop-blur-md shadow-lg border border-white/10 transition-all duration-300">
        <div>
          <ScrollLink
            to="hero"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer"
          >
            <h1 className="font-dancing font-bold text-3xl text-stone-100 hover:text-stone-200 transition-colors duration-300">
              Bhavik Kumar
            </h1>
          </ScrollLink>
        </div>

        <div className="hidden md:flex items-center lg:gap-10 md:gap-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="text-white font-semibold border-b-2 border-teal-400"
              className="cursor-pointer text-stone-100 hover:text-stone-200 transition-colors duration-200"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        <div className="hidden md:block">
          <ResumeButton />
        </div>

        <div className="md:hidden relative">
          <button
            className="flex items-center justify-center p-2 rounded-full bg-teal-400 text-black backdrop-blur-sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>

          {menuOpen && (
            <div className="absolute top-14 right-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg flex flex-col items-start space-y-4 p-6 animate-slide-down text-stone-100">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-stone-200 transition-colors duration-200"
                >
                  {item.name}
                </ScrollLink>
              ))}
              <ResumeButton />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;