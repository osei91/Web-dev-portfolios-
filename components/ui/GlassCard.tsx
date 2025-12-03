import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? { scale: 1.02, boxShadow: "0 0 25px rgba(56, 189, 248, 0.15)" } : {}}
      className={`
        relative overflow-hidden
        bg-white/60 dark:bg-white/5 
        backdrop-blur-xl 
        border border-slate-200/50 dark:border-white/10 
        shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
        rounded-2xl 
        transition-colors duration-300
        ${className}
      `}
    >
      {/* Subtle shine effect layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
