import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-3xl',
        className
      )}
    >
      {badge && (
        <div className={cn('inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-badge bg-primary/10 dark:bg-primary/20 border border-primary/20 text-primary dark:text-primary-light text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm')}>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary dark:text-white font-heading tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-secondary dark:text-slate-400 font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
