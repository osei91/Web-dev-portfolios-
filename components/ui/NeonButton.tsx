import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyle = "relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1";
  
  const primaryStyle = `
    bg-cyan-500 text-white 
    shadow-[0_0_15px_rgba(6,182,212,0.5)] 
    hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]
    border border-cyan-400
  `;
  
  // Secondary: Dark mode uses transparent/cyan. Light mode needs to be visible.
  // We can keep the text cyan-600 for light mode for better contrast.
  const secondaryStyle = `
    bg-transparent 
    text-cyan-600 dark:text-cyan-400 
    border border-cyan-500/50
    hover:bg-cyan-500/10
    hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]
  `;

  return (
    <button 
      className={`${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
