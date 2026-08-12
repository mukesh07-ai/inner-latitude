'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightText,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('flex flex-col w-full max-w-5xl mb-6 md:mb-8', alignmentClasses[align], className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--accent-terra)] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)]" />
          {eyebrow}
        </span>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] tracking-tight text-[var(--text-primary)]">
        {title}{' '}
        {highlightText && (
          <em className="not-italic text-[var(--accent-gold)] font-light italic">
            {highlightText}
          </em>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light w-full">
          {description}
        </p>
      )}
    </motion.div>
  );
}
