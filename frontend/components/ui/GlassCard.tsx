'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'gold' | 'sage' | 'terra' | 'none';
  elevated?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  glowColor = 'none',
  elevated = false,
  ...props
}: GlassCardProps) {
  const glowClasses = {
    none: '',
    gold: 'hover:border-[var(--accent-gold)] hover:shadow-[0_15px_35px_rgba(199,168,107,0.22)] dark:hover:shadow-[0_15px_35px_rgba(199,168,107,0.18)]',
    sage: 'hover:border-[var(--accent-sage)] hover:shadow-[0_15px_35px_rgba(124,153,135,0.22)] dark:hover:shadow-[0_15px_35px_rgba(124,153,135,0.18)]',
    terra: 'hover:border-[var(--accent-terra)] hover:shadow-[0_15px_35px_rgba(212,120,79,0.22)] dark:hover:shadow-[0_15px_35px_rgba(212,120,79,0.18)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { y: -6, scale: 1.01, transition: { duration: 0.25 } } : undefined}
      className={cn(
        elevated ? 'glass-panel-elevated' : 'glass-panel',
        'rounded-2xl p-6 md:p-8 relative overflow-hidden group',
        hoverEffect && 'glass-panel-hover',
        glowClasses[glowColor],
        className
      )}
      {...props}
    >
      {/* Top Gloss Reflection Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
