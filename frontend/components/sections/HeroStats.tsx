'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { GlassCard } from '../ui/GlassCard';

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="w-full max-w-4xl mx-auto"
    >
      <GlassCard
        elevated
        glowColor="terra"
        className="flex flex-col md:flex-row items-center justify-between overflow-hidden border-[var(--border-glass-strong)] p-1 md:p-2 rounded-2xl md:rounded-full"
      >
        {content.home.stats.map((stat, idx) => (
          <React.Fragment key={stat.bottom}>
            <div className="flex-1 w-full md:w-auto px-6 py-4 md:py-2 text-center group cursor-default hover:bg-white/5 dark:hover:bg-white/5 rounded-xl md:rounded-full transition-colors duration-300">
              <div className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-300 mb-1">
                {stat.top}
              </div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors duration-300">
                {stat.bottom}
              </div>
            </div>
            {/* Divider */}
            {idx < content.home.stats.length - 1 && (
              <div className="hidden md:block w-px h-10 bg-[var(--border-glass)]" />
            )}
            {idx < content.home.stats.length - 1 && (
              <div className="block md:hidden h-px w-full max-w-[200px] bg-[var(--border-glass)] mx-auto" />
            )}
          </React.Fragment>
        ))}
      </GlassCard>
    </motion.div>
  );
}
