'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '@/data/site';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {siteData.stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
        >
          <GlassCard
            elevated
            glowColor="gold"
            className="p-5 md:p-6 text-center border-[var(--border-glass-strong)] hover:border-[var(--accent-gold)]"
          >
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[var(--accent-gold)] mb-1">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold">
              {stat.label}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
