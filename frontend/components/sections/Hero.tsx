'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_METADATA } from '@/lib/constants';
import { siteData } from '@/data/site';
import { GlassButton } from '../ui/GlassButton';
import { HeroStats } from './HeroStats';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-grain">
      {/* Decorative Atmospheric Blobs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[var(--glow-hero)] blur-3xl pointer-events-none opacity-80 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-emerald-900/10 dark:bg-emerald-500/10 blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Decorative SVG Compass Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.08] dark:opacity-[0.14] pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--text-primary)] fill-none stroke-current stroke-[0.3]">
          <circle cx="50" cy="50" r="48" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="36" />
          <circle cx="50" cy="50" r="24" strokeDasharray="2 2" />
          <polygon points="50,4 53,47 50,44 47,47" fill="currentColor" />
          <polygon points="50,96 53,53 50,56 47,53" fill="currentColor" opacity="0.4" />
          <line x1="50" y1="50" x2="50" y2="4" />
          <line x1="50" y1="50" x2="96" y2="50" />
          <line x1="50" y1="50" x2="4" y2="50" />
          <line x1="50" y1="50" x2="84" y2="16" />
          <line x1="50" y1="50" x2="16" y2="84" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 my-auto pt-4">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-elevated text-xs tracking-[0.25em] uppercase text-[var(--accent-terra)] mb-6 animate-float"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-terra)] animate-pulse" />
          {siteData.hero.eyebrow}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[var(--text-primary)] mb-6"
        >
          Find Your <br className="hidden sm:inline" />
          <em className="not-italic text-[var(--accent-gold)] font-light italic">
            True North.
          </em>
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed mb-8"
        >
          {siteData.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <GlassButton href="/retreat" variant="primary" size="lg" showArrow>
            {siteData.hero.primaryCta}
          </GlassButton>
          <GlassButton href="/confluence" variant="outline" size="lg">
            {siteData.hero.secondaryCta}
          </GlassButton>
        </motion.div>
      </div>

      {/* Floating Statistics Grid */}
      <div className="relative z-10 mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <HeroStats />
      </div>
    </section>
  );
}
