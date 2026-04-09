import React, { useState, useEffect } from 'react';
import { Home, User, Book, Briefcase, MessageSquare } from 'lucide-react';

const Nav: React.FC = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: '#home', Icon: Home },
    { href: '#about', Icon: User },
    { href: '#skills', Icon: Book },
    { href: '#work', Icon: Briefcase },
    { href: '#contact', Icon: MessageSquare },
  ];

  // Optional: Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'contact'];
      const scrollY = window.pageYOffset;

      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 150;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveLink(`#${id}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-0 right-0 mx-auto w-max bg-[hsla(var(--second-hue),32%,12%,0.6)] backdrop-blur-lg border border-white/5 rounded-[4rem] px-8 py-3 transition-all duration-400 z-fixed shadow-2xl">
      <ul className="flex items-center gap-x-6">
        {navLinks.map(({ href, Icon }) => (
          <li key={href}>
            <a 
              href={href} 
              className={`flex p-3 rounded-full transition-all duration-300 relative group
                ${activeLink === href 
                  ? 'text-title scale-110' 
                  : 'text-text-light hover:text-first'}`}
              onClick={() => setActiveLink(href)}
            >
              {/* Background Glow for Active Item */}
              {activeLink === href && (
                <span className="absolute inset-0 bg-gradient-to-b from-first/80 to-first/20 rounded-full blur-[2px] -z-10 shadow-[0_0_12px_hsla(var(--first-hue),var(--sat),var(--lig),0.3)]" />
              )}
              
              <Icon size={20} strokeWidth={activeLink === href ? 2.5 : 2} />
              
              {/* Tooltip for desktop hover */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-container text-first text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none capitalize border border-first/20">
                {href.replace('#', '')}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;