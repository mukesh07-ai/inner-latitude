'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { retreatData } from '@/data/retreat';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function RetreatSection() {
  const [activeDay, setActiveDay] = useState(0);
  const currentArc = retreatData.schedule[activeDay];

  return (
    <section id="retreat" className="py-12 md:py-16 relative bg-grain overflow-hidden">
      {/* Background Glass Orbs */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[var(--accent-gold)]/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow={`${retreatData.dates} · ${retreatData.location}`}
              title={retreatData.title}
              highlightText={retreatData.subtitle}
              description={retreatData.description}
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <GlassCard glowColor="terra" className="inline-block text-left lg:text-right w-full">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium mb-1">
                Investment per person
              </div>
              <div className="font-serif text-4xl sm:text-5xl font-light text-[var(--accent-terra)]">
                {retreatData.price}
              </div>
              <div className="text-xs text-[var(--text-muted)] tracking-wider uppercase mt-1 mb-4">
                {retreatData.duration} · {retreatData.spotsTotal} spots only
              </div>
              <GlassButton href="/apply?type=retreat" variant="primary" size="md" className="w-full sm:w-auto">
                Reserve Your Spot
              </GlassButton>
            </GlassCard>
          </div>
        </div>

        {/* Quick Details 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          <GlassCard className="p-6">
            <MapPin className="w-5 h-5 text-[var(--accent-gold)] mb-3" />
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Location</div>
            <div className="font-serif text-lg text-[var(--text-primary)]">{retreatData.location}</div>
          </GlassCard>

          <GlassCard className="p-6">
            <Clock className="w-5 h-5 text-[var(--accent-gold)] mb-3" />
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Duration</div>
            <div className="font-serif text-lg text-[var(--text-primary)]">{retreatData.duration}</div>
          </GlassCard>

          <GlassCard className="p-6">
            <Calendar className="w-5 h-5 text-[var(--accent-gold)] mb-3" />
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Dates</div>
            <div className="font-serif text-lg text-[var(--text-primary)]">{retreatData.dates}</div>
          </GlassCard>

          <GlassCard className="p-6">
            <Sparkles className="w-5 h-5 text-[var(--accent-gold)] mb-3" />
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Core Theme</div>
            <div className="font-serif text-lg text-[var(--text-primary)]">{retreatData.theme}</div>
          </GlassCard>
        </div>

        {/* Interactive 6-Day Arc */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--accent-terra)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] shrink-0" />
                THE SIX-DAY ARC
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-[var(--text-primary)] mt-1">
                Day-by-Day Transformation
              </h3>
            </div>
          </div>

          {/* Day Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {retreatData.schedule.map((dayItem, idx) => {
              const isSelected = activeDay === idx;
              return (
                <button
                  key={dayItem.day}
                  type="button"
                  onClick={() => setActiveDay(idx)}
                  className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--accent-gold)] text-white dark:text-zinc-950 shadow-md scale-105'
                      : 'glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Day {dayItem.day}
                </button>
              );
            })}
          </div>

          {/* Active Day Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentArc.day}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="mt-6"
            >
              <GlassCard glowColor="gold" className="p-8 md:p-10 border-t-2 border-t-[var(--accent-gold)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[var(--border-subtle)]">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-medium">
                      Day {currentArc.day} · {currentArc.subtitle}
                    </span>
                    <h4 className="font-serif text-3xl md:text-4xl font-normal text-[var(--text-primary)] mt-1">
                      {currentArc.title}
                    </h4>
                  </div>
                  <span className="px-4 py-2 rounded-full glass-panel text-xs uppercase tracking-widest text-[var(--accent-sage)] font-medium self-start md:self-auto">
                    Focus: {currentArc.focus}
                  </span>
                </div>

                <p className="text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed mb-8">
                  {currentArc.description}
                </p>

                <div>
                  <h5 className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-4">
                    Daily Schedule Highlights
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentArc.activities.map((act) => (
                      <div
                        key={act}
                        className="flex items-center gap-3 p-3 rounded-lg glass-panel text-sm text-[var(--text-primary)]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {retreatData.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium glass-panel text-[var(--text-secondary)] border-[var(--border-glass)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
