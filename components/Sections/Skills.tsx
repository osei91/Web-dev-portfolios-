import React from 'react';
import { SectionProps } from '../../types';
import { SKILLS } from '../../constants';
import GlassCard from '../ui/GlassCard';
import { motion } from 'framer-motion';

const Skills: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400">
            Technical Arsenal
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            My toolkit for building digital products. I constantly learn new technologies to stay ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <GlassCard key={skill.name} className="p-6" hoverEffect>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4 text-cyan-600 dark:text-cyan-400">
                  <skill.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  />
                </div>
                <div className="w-full flex justify-between text-xs text-slate-500 mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
