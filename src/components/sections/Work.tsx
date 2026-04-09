import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

// Import project images as modules
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
      <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-400 border-2
              ${filter === cat 
                ? 'bg-first border-first text-body shadow-lg shadow-first/20' 
                : 'border-container bg-container text-title hover:border-first/30'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-[1200px]">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-container rounded-3xl overflow-hidden border border-transparent hover:border-first/20 hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-body/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="bg-body/90 p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <ExternalLink className="text-first" size={24} />
                 </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase tracking-widest text-first font-bold italic">
                  {project.category}
                </span>
                <span className="text-[9px] bg-first/10 text-first px-2 py-0.5 rounded-full font-bold">
                  {project.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-title mb-2 group-hover:text-first transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-text-light mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-bold text-title hover:text-first transition-all group/link"
              >
                {project.type === 'Live Demo' ? 'Launch Site' : 'View Code'} 
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-light italic">Refining more projects... Check back soon!</p>
        </div>
      )}
    </section>
  );
};

export default Work;