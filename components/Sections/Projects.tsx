import React from 'react';
import { SectionProps } from '../../types';
import { PROJECTS } from '../../constants';
import GlassCard from '../ui/GlassCard';
import { Github, ExternalLink } from 'lucide-react';
import NeonButton from '../ui/NeonButton';

const Projects: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="w-8 h-[2px] bg-purple-500"></span>
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              A selection of my recent work in Web Development and AI.
            </p>
          </div>
          <NeonButton variant="secondary" className="hidden md:block">
            View All GitHub
          </NeonButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <GlassCard key={project.id} className="flex flex-col h-full group" hoverEffect>
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <NeonButton variant="secondary">
            View All GitHub
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;