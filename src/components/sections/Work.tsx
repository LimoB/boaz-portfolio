import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6'; // Import Github from react-icons

// Import project images
import landImg from '../../assets/img/land-ledger.png';
import canteenImg from '../../assets/img/canteen.png';
import housingImg from '../../assets/img/housing.png';
import bugImg from '../../assets/img/bug-tracker.png';
import cartImg from '../../assets/img/cart.png';
import jobsImg from '../../assets/img/jobs.png';

const Work: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'blockchain',
      img: landImg,
      title: 'Land Registry Kenya',
      description: 'Immutable digital registry for land titles using blockchain technology for secure transfers.',
      link: 'https://github.com/LimoB/LandRegistryKenya',
      type: 'Source Code'
    },
    {
      id: 2,
      category: 'fintech',
      img: canteenImg,
      title: 'Laikipia Canteen System',
      description: 'Cafeteria management platform featuring real-time ordering and Safaricom M-Pesa integration.',
      link: 'https://github.com/LimoB/cafeteria-management-system',
      type: 'Source Code'
    },
    {
      id: 3,
      category: 'backend',
      img: housingImg,
      title: 'Student Housing System',
      description: 'API-driven property management for unit booking and automated lease tracking.',
      link: 'https://github.com/LimoB/StudentHousingSystem',
      type: 'Source Code'
    },
    {
      id: 4,
      category: 'backend',
      img: bugImg,
      title: 'Bug Tracking System',
      description: 'Efficient issue tracking and management system for development teams.',
      link: 'https://github.com/LimoB/BugTrackingSystem',
      type: 'Source Code'
    },
    {
      id: 5,
      category: 'frontend',
      img: cartImg,
      title: 'Product List with Cart',
      description: 'Modern UI for e-commerce shopping experiences with real-time state management.',
      link: 'https://limob.github.io/limo-product-list-with-cart',
      type: 'Live Demo'
    },
    {
      id: 6,
      category: 'frontend',
      img: jobsImg,
      title: 'Static Job Listings',
      description: 'Filterable job board interface focusing on clean UI/UX and responsive design.',
      link: 'https://limob.github.io/limo-static-job-listings',
      type: 'Live Demo'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['all', 'blockchain', 'fintech', 'backend', 'frontend'];

  return (
    <section className="py-24 px-4 bg-body transition-colors duration-400" id="work">
      <div className="text-center mb-16">
        <span className="block text-xs uppercase tracking-[0.2em] text-text-light mb-2">My Portfolio</span>
        <h2 className="text-2xl md:text-3xl font-bold text-first">Recent Works</h2>
      </div>

      {/* Modern Filter Tabs */}
      <div className="flex overflow-x-auto md:justify-center items-center gap-3 mb-12 pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-400 border-2 flex-shrink-0
              ${filter === cat 
                ? 'bg-first border-first text-body shadow-lg shadow-first/20' 
                : 'border-container bg-container text-title hover:border-first/30'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center max-w-6xl">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-container rounded-[2rem] overflow-hidden border border-transparent hover:border-first/20 hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-video md:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-body/90 via-body/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Hover Overlay Button */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noreferrer"
                   className="bg-first text-body p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl hover:bg-first-alt"
                 >
                    {/* Updated to use FaGithub from react-icons */}
                    {project.type === 'Live Demo' ? <ExternalLink size={24} /> : <FaGithub size={24} />}
                 </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] uppercase tracking-widest text-first font-black">
                  {project.category}
                </span>
                <span className="text-[9px] bg-first/10 text-first px-2 py-1 rounded-md font-bold border border-first/10">
                  {project.type}
                </span>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-title mb-2 group-hover:text-first transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs md:text-sm text-text-light mb-6 leading-relaxed line-clamp-3 flex-grow">
                {project.description}
              </p>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-bold text-title hover:text-first transition-all group/link mt-auto"
              >
                {project.type === 'Live Demo' ? 'View Demo' : 'View Code'} 
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-light italic">More innovative solutions coming soon...</p>
        </div>
      )}
    </section>
  );
};

export default Work;