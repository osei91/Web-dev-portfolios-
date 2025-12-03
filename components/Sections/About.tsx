import React from 'react';
import { SectionProps } from '../../types';
import { PERSONAL_INFO } from '../../constants';
import GlassCard from '../ui/GlassCard';
import { Terminal, Cpu, Globe } from 'lucide-react';

const About: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="w-8 h-[2px] bg-cyan-500"></span>
              About Me
            </h2>
            <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
              <p>{PERSONAL_INFO.bio}</p>
              <p>
                My philosophy is simple: clean code, scalable architecture, and user-centric design. 
                Whether I'm fine-tuning a database query or crafting a pixel-perfect CSS transition, I bring attention to detail to every layer of the stack.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <h3 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">5+</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase mt-1">Years Exp.</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase mt-1">Projects</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400">20+</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase mt-1">Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="grid grid-cols-1 gap-6">
            <GlassCard className="p-6 flex items-start gap-4" hoverEffect>
              <div className="p-3 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                <Terminal size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Clean Code Enthusiast</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Writing maintainable, modular, and self-documenting code is my standard, not an option.</p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 flex items-start gap-4" hoverEffect>
              <div className="p-3 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">AI-First Approach</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Integrating the latest in Generative AI to solve complex problems and automate workflows.</p>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex items-start gap-4" hoverEffect>
              <div className="p-3 rounded-lg bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Global Perspective</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Experience working with diverse teams and clients across multiple time zones.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
