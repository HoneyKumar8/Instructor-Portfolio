import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 rounded-btn select-none';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[40px] gap-2',
    md: 'px-6 py-3 text-base min-h-[48px] gap-2.5', // minimum 48px touch target
    lg: 'px-8 py-3.5 text-lg min-h-[54px] gap-3 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-primary text-white shadow-md hover:bg-primary-dark hover:shadow-hover dark:hover:shadow-hover-dark active:scale-[0.98]',
    secondary: 'bg-transparent border-2 border-slate-300 dark:border-slate-700 text-text-primary dark:text-text-darkPrimary hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary-light active:scale-[0.98]',
    ghost: 'bg-transparent text-text-secondary dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-text-primary dark:hover:text-white',
    accent: 'bg-accent text-white shadow-md hover:bg-accent-dark active:scale-[0.98]',
    whatsapp: 'bg-[#25D366] text-white shadow-md hover:bg-[#1DA851] active:scale-[0.98]',
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.03 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth ? 'w-full' : 'w-auto',
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0 flex items-center">{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && <span className="shrink-0 flex items-center">{icon}</span>}
    </motion.button>
  );
};
