import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Blob 1 - Cyan */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-300/30 dark:bg-cyan-500/20 rounded-full blur-[100px]"
      />

      {/* Blob 2 - Purple */}
      <motion.div
        animate={{
          x: [0, -150, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[120px]"
      />

      {/* Blob 3 - Blue */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-[40%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[90px]"
      />
      
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;
