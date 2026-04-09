import React from 'react';
// We import from the 'fa6' (Font Awesome 6) sub-library
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-first transition-colors duration-400 pt-16">
      <div className="container mx-auto px-6 pb-28 md:pb-12 text-center">
        {/* Name / Logo - Updated for professional consistency */}
        <h1 className="text-2xl md:text-3xl font-bold text-body mb-8 tracking-tighter">
          Boaz Kipchirchir
        </h1>

        {/* Quick Links - Optimized touch targets for phone */}
        <ul className="flex justify-center flex-wrap gap-x-6 gap-y-4 mb-12">
          {['About', 'Work', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-body font-semibold text-xs md:text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons - Using React Icons (Font Awesome 6) */}
        <div className="flex justify-center gap-x-5 mb-16">
          <a 
            href="https://www.linkedin.com/in/boaz-lim-307bkc/" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-body text-first p-3.5 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center group"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} className="group-hover:scale-110 transition-transform" />
          </a>

          <a 
            href="https://github.com/LimoB" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-body text-first p-3.5 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center group"
            aria-label="GitHub"
          >
            <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
          </a>

          <a 
            href="https://api.whatsapp.com/send?phone=+254754524629&text=Hello Boaz!" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-body text-first p-3.5 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center group"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-body/10">
          <p className="text-[9px] md:text-xs text-body/50 font-bold uppercase tracking-[0.25em] leading-loose">
            &#169; 2026 • Crafted with Passion by Boaz Kipchirchir
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;