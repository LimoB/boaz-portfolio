import React from 'react';
// We import from the 'fa6' (Font Awesome 6) sub-library
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-first transition-colors duration-400 pt-12">
      <div className="container mx-auto px-4 pb-28 md:pb-12 text-center">
        {/* Name / Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-body mb-6 tracking-tight">
          Boaz Limo
        </h1>

        {/* Quick Links */}
        <ul className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-10">
          {['About', 'Work', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-body font-medium text-sm hover:underline underline-offset-8 decoration-2 transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons - Using React Icons (Font Awesome 6) */}
        <div className="flex justify-center gap-x-6 mb-12">
          <a 
            href="https://www.linkedin.com/in/boaz-lim-307bkc/" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-body text-first p-3 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center group"
          >
            <FaLinkedinIn size={22} className="group-hover:scale-110 transition-transform" />
          </a>

          <a 
            href="https://github.com/LimoB" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-body text-first p-3 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center group"
          >
            <FaGithub size={22} className="group-hover:scale-110 transition-transform" />
          </a>

          <a 
            href="https://api.whatsapp.com/send?phone=+254754524629&text=Hello Limo!" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-body text-first p-3 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center group"
          >
            <FaWhatsapp size={22} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-body/10">
          <span className="text-[10px] md:text-xs text-body/60 font-semibold uppercase tracking-[0.2em]">
            &#169; 2026 • Designed & Built by Boaz Limo
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;