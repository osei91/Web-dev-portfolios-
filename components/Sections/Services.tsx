import React from 'react';
import { SectionProps } from '../../types';
import { SERVICES } from '../../constants';
import GlassCard from '../ui/GlassCard';

const Services: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">What I Can Do For You</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I help businesses transform ideas into reality with cutting-edge technology and clean design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <GlassCard key={index} className="p-8 group" hoverEffect>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-cyan-100 dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-purple-500/20 border border-cyan-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-cyan-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;