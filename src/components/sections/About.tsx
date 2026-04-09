import React from 'react';
import { Award, Briefcase, GraduationCap, ArrowRight, ExternalLink } from 'lucide-react';
import boazImg from '../../assets/img/boazImage.jpg'; 

// Import both for maximum impact
import t2gCertPdf from '../../assets/pdf/Teach2GiveCert.pdf';
import t2gCertImg from '../../assets/img/t2g-cert.jpg';

const About: React.FC = () => {
  const infoCards = [
    { 
      icon: <Award size={24} />, 
      title: 'Experience', 
      subtitle: 'Software Dev Attache' 
    },
    { 
      icon: <Briefcase size={24} />, 
      title: 'Completed', 
      subtitle: '20+ Industry Projects' 
    },
    { 
      icon: <GraduationCap size={24} />, 
      title: 'Certificates', 
      subtitle: 'Teach2Give Graduate',
      link: t2gCertPdf, // Official PDF for viewing
      preview: t2gCertImg // Image for visual proof
    },
  ];

  return (
    <section className="py-20 px-4 md:py-24 bg-body transition-colors duration-400" id="about">
      <div className="text-center mb-12 md:mb-16">
        <span className="block text-xs uppercase tracking-[0.2em] text-text-light mb-2">My Intro</span>
        <h2 className="text-2xl md:text-3xl font-bold text-first">About Me</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-24 items-center max-w-6xl">
        
        {/* Profile Image Container */}
        <div className="relative justify-self-center group">
          <div className="absolute -inset-2 bg-gradient-to-tr from-first/20 to-transparent rounded-[2.5rem] blur-sm group-hover:blur-md transition-all duration-500"></div>
          <img 
            src={boazImg} 
            alt="Boaz Kipchirchir" 
            className="relative w-56 sm:w-64 md:w-[320px] lg:w-[380px] rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover border-4 border-transparent hover:border-first/20"
          />
        </div>

        <div className="text-center lg:text-left">
          {/* Info Boxes - Optimized for Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 md:mb-10">
            {infoCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-container p-5 md:p-6 rounded-2xl text-center border border-transparent hover:border-first/20 shadow-sm hover:shadow-md transition-all duration-400 group relative overflow-hidden backdrop-blur-sm"
              >
                {/* Visual Image Preview on Hover */}
                {card.preview && (
                  <img 
                    src={card.preview} 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                    alt="Certificate Preview"
                  />
                )}

                <div className="text-first mb-3 flex justify-center group-hover:scale-110 transition-transform relative z-10">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-title relative z-10">{card.title}</h3>
                <span className="text-xs text-text-light block mb-2 relative z-10">{card.subtitle}</span>
                
                {card.link && (
                  <a 
                    href={card.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-first opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 border-t border-first/10 pt-2"
                  >
                    View PDF <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Description Text */}
          <div className="space-y-4 text-text text-sm md:text-base mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            <p className="px-2 md:px-0">
              I am a <span className="text-first font-bold">Software Engineer and Full-Stack Developer</span> focused 
              on building secure, scalable digital solutions. With experience as a 
              <span className="text-title font-semibold"> Software Development Attache at Teach2Give</span>, 
              I have a proven track record of deploying applications to 
              <span className="text-title font-semibold"> Microsoft Azure</span> and collaborating on 
              complex TypeScript projects.
            </p>
            <p className="px-2 md:px-0">
              Currently a <span className="text-first font-bold">BSc. ICT finalist</span> at 
              Laikipia University, I specialize in full-stack architectures using 
              <span className="text-title font-semibold"> React, Node.js, and Drizzle ORM</span>. 
              My expertise extends to <span className="text-title font-semibold">Cybersecurity</span> and seamless fintech integrations like M-Pesa.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 bg-first text-body px-8 py-4 rounded-2xl font-bold hover:bg-first-alt hover:-translate-y-1 transition-all shadow-lg shadow-first/20"
            >
              Contact Me 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;