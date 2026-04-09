import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  // Initialize state based on localStorage or system preference
  const [isLight, setIsLight] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'light';
    }
    // Optional: Default to dark if no preference is saved
    return false; 
  });

  const [isScrolled, setIsScrolled] = useState(false);

  // Sync the theme to the DOM
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    if (isLight) {
      root.classList.remove('dark');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-400 h-16 flex items-center
        ${isScrolled 
          ? 'bg-body/80 backdrop-blur-md border-b border-first/10 shadow-lg' 
          : 'bg-transparent'}`} 
      id="header"
    >
      <nav className="container mx-auto px-6 flex justify-between items-center w-full">
        {/* Logo - Updated to reflect your professional identity */}
        <a 
          href="#home" 
          className="text-first font-bold text-lg tracking-tight hover:text-first-alt transition-colors duration-400"
        >
          Boaz Kipchirchir
        </a>
        
        {/* Theme Toggle Container */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="group p-2.5 rounded-xl bg-container/80 border border-transparent hover:border-first/30 text-title hover:text-first transition-all duration-400 focus:outline-none shadow-sm"
            aria-label="Toggle Theme"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {isLight ? (
                <Sun 
                  size={20} 
                  className="transition-all duration-500 transform scale-100 rotate-0" 
                />
              ) : (
                <Moon 
                  size={20} 
                  className="transition-all duration-500 transform scale-100 rotate-0 text-first" 
                />
              )}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;