import { Github, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="h-40 bg-white/10 backdrop-blur-md shadow-lg border border-white/10 py-6">
      <div className="flex flex-col items-center justify-center space-y-3">
        <p className="text-stone-50 text-center">Make sure to check out and connect</p>
        <div className='flex items-center gap-3'>
          <a
            href="https://www.linkedin.com/in/bhavik-kumar-rajput/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhavik-kumar-rajput/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
      <p className="text-stone-300 text-center mt-2">bhavikrajputrr2004@gmail.com</p>
      <p className="text-stone-400 text-center">Made with ❤️ by Bhavik Kumar</p>
    </footer>
  );
};

export default Footer;
