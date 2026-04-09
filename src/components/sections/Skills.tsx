import React from 'react';
import { BadgeCheck } from 'lucide-react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React / Next.js', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'JavaScript (ES6+)', level: 'Advanced' },
    { name: 'HTML & CSS', level: 'Advanced' },
    { name: 'Figma (UI/UX)', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Advanced' },
  ];

  const backendSkills = [
    { name: 'Node.js / Express', level: 'Intermediate' },
    { name: 'Drizzle ORM', level: 'Intermediate' },
    { name: 'PostgreSQL / MySQL', level: 'Intermediate' },
    { name: 'Microsoft Azure', level: 'Intermediate' },
    { name: 'Java / Python', level: 'Intermediate' },
    { name: 'C++ / Bash', level: 'CP | DSA' },
    { name: 'Docker', level: 'Beginner' },
    { name: 'M-Pesa API / STK', level: 'Intermediate' },
  ];

  return (
    <section className="py-24 px-4 bg-body transition-colors duration-400" id="skills">
      <div className="text-center mb-16">
        <span className="block text-xs uppercase tracking-widest text-text-light mb-2">My Abilities</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-first">Technical Skills</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-[968px]">
        
        {/* Frontend Section */}
        <div className="bg-container p-8 md:px-12 md:py-10 rounded-[2rem] border border-transparent hover:border-first/20 shadow-sm transition-all duration-400">
          <h3 className="text-base font-medium text-first text-center mb-8">Frontend Development</h3>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {frontendSkills.map((skill, index) => (
              <div className="flex gap-x-2" key={index}>
                <BadgeCheck className="text-first w-4 h-4 mt-1 flex-shrink-0" strokeWidth={3} />
                <div>
                  <h3 className="text-sm font-medium text-title leading-tight">{skill.name}</h3>
                  <span className="text-[10px] text-text-light">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend & DevOps Section */}
        <div className="bg-container p-8 md:px-12 md:py-10 rounded-[2rem] border border-transparent hover:border-first/20 shadow-sm transition-all duration-400">
          <h3 className="text-base font-medium text-first text-center mb-8">Backend & Cloud</h3>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {backendSkills.map((skill, index) => (
              <div className="flex gap-x-2" key={index}>
                <BadgeCheck className="text-first w-4 h-4 mt-1 flex-shrink-0" strokeWidth={3} />
                <div>
                  <h3 className="text-sm font-medium text-title leading-tight">{skill.name}</h3>
                  <span className="text-[10px] text-text-light">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;