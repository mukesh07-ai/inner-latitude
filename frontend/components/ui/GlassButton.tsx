'use client';

import React from 'react';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  showArrow?: boolean;
  className?: string;
}

export function GlassButton({
  variant = 'primary',
  size = 'md',
  children,
  href,
  showArrow = false,
  className,
  ...props
}: GlassButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base font-medium',
  };

  const variantClasses = {
    primary:
      'bg-[var(--accent-gold)] text-white dark:text-zinc-950 font-medium shadow-md hover:bg-[var(--accent-gold-hover)] hover:shadow-lg',
    secondary:
      'bg-[var(--accent-sage)] text-white hover:bg-opacity-90 shadow-sm',
    outline:
      'glass-panel text-[var(--text-primary)] border-[var(--border-strong)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]',
    ghost:
      'bg-transparent text-[var(--text-primary)] hover:text-[var(--accent-gold)] hover:bg-black/5 dark:hover:bg-white/5',
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-full tracking-wide transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]/50 hover:scale-105 active:scale-95',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {content}
    </button>
  );
}
