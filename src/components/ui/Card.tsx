import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  glassmorphism?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  glassmorphism = false,
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={cn(
        'rounded-card border transition-all duration-300 overflow-hidden',
        glassmorphism
          ? 'glass-panel shadow-soft dark:shadow-soft-dark'
          : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 shadow-soft dark:shadow-soft-dark',
        hoverEffect && 'hover:shadow-hover dark:hover:shadow-hover-dark hover:border-primary/50 dark:hover:border-primary/50 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
