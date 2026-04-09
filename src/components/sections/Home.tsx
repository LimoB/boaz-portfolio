import React from 'react';
import { MousePointer2, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import limoImg from '../../assets/img/limo.png';
import myCv from '../../assets/pdf/BoazLimoCv.pdf';

const Home: React.FC = () => {
  return (
    <section 
      className="pt-32 pb-12 min-h-screen flex items-center justify-center bg-body transition-colors duration-400 overflow-hidden relative" 
      id="home"
    >
      {/* Background Accent */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-first/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto relative px-6 grid grid-cols-1 lg:grid-cols-[1fr_max-content] gap-12 lg:gap-24 items-center max-w-6xl">
        
        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-2 mb-8">
            <span className="block text-sm font-bold uppercase tracking-[0.4em] text-first animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both">
              Hello, I'm
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-title tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both delay-150">
              Boaz Kipchirchir
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both delay-300">
              <span className="h-[1px] w-10 bg-text-light/40 hidden md:block"></span>
              <h3 className="text-base md:text-xl font-medium text-text-light">
                Software Engineer <span className="text-first mx-2">•</span> 
                <span className="font-semibold text-title">CyberSecurity Enthusiast</span>
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both delay-500">
            <a 
              href={myCv}
              download="Boaz_Kipchirchir_Resume.pdf"
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-3 border-2 border-first/20 text-first px-7 py-4 rounded-2xl font-bold hover:bg-first hover:text-body hover:border-first transition-all duration-400 shadow-lg shadow-first/5"
            >
              <Download size={19} className="group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
            <a 
              href="#about" 
              className="group flex items-center gap-2 bg-first text-body px-8 py-4 rounded-2xl font-bold hover:bg-first-alt hover:-translate-y-1 transition-all shadow-xl shadow-first/20"
            >
              About me 
              <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links Desktop */}
          <div className="hidden lg:flex items-center gap-6 mt-20 animate-in fade-in slide-in-from-left-5 duration-1000 fill-mode-both delay-700">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-light/50">Follow Me</span>
            <div className="h-[1px] w-12 bg-first/30"></div>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={22} />, link: "https://github.com/LimoB" },
                { icon: <FaLinkedinIn size={22} />, link: "https://www.linkedin.com/in/boaz-limo-30752b310/" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-title/70 hover:text-first hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content: Profile Image */}
        <div className="order-1 lg:order-2 justify-self-center relative animate-in fade-in zoom-in duration-1000 fill-mode-both delay-200">
          <div className="absolute -inset-10 bg-first/20 blur-[80px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
          
          <div className="relative group">
            <div className="w-[240px] h-[340px] md:w-[340px] md:h-[460px] bg-gradient-to-b from-first/90 via-first/40 to-transparent rounded-t-[14rem] rounded-b-[3rem] flex items-end justify-center overflow-hidden border-[6px] border-body shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={limoImg} 
                alt="Boaz Kipchirchir" 
                className="w-full h-full object-cover object-top drop-shadow-2xl brightness-110 group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-first/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Mobile Socials */}
        <div className="lg:hidden flex justify-center gap-10 py-4 opacity-70">
           <a href="https://github.com/LimoB" className="text-title hover:text-first"><FaGithub size={26} /></a>
           <a href="https://www.linkedin.com/in/boaz-limo-30752b310/" className="text-title hover:text-first"><FaLinkedinIn size={26} /></a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden lg:block absolute -right-4 bottom-12">
          <a href="#about" className="group flex flex-col items-center gap-10 text-first/60 hover:text-first transition-colors">
            <span className="rotate-90 text-[10px] font-bold uppercase tracking-[0.5em] whitespace-nowrap origin-center translate-y-8">
              Scroll Down
            </span>
            <div className="animate-bounce">
              <MousePointer2 size={22} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;