import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'blue' | 'cyan' | 'gray' | 'gradient';
  size?: 'sm' | 'md';
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'sm',
  className = '',
  onClick,
}) => {
  const sizeClasses =
    size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-sm';

  const variantClasses = {
    purple:
      'bg-purple-950/60 text-purple-300 border border-purple-800/50 shadow-[0_0_12px_rgba(168,85,247,0.15)]',
    blue:
      'bg-blue-950/60 text-blue-300 border border-blue-800/50 shadow-[0_0_12px_rgba(59,130,246,0.15)]',
    cyan:
      'bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 shadow-[0_0_12px_rgba(6,182,212,0.15)]',
    gray:
      'bg-zinc-900/80 text-zinc-300 border border-zinc-700/50 hover:border-zinc-500',
    gradient:
      'bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-cyan-900/80 text-white border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
  };

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center font-medium rounded-full transition-all ${sizeClasses} ${variantClasses[variant]} ${
        onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
      } ${className}`}
    >
      {children}
    </span>
  );
};
