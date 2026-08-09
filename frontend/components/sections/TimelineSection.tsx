'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '@/data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export function TimelineSection() {
  return (
    <section className="py-12 md:py-16 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ROADMAP TO 2026"
          title="Key"
          highlightText="Milestones."
          description="The journey from founding retreat to India's defining conscious living expo."
        />

        <div className="relative mt-12 max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-l-[var(--accent-gold)]/30 space-y-10">
          {siteData.keyDates.map((item, idx) => {
            const isActive = item.status === 'active';
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-6 sm:pl-8"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 border-[var(--bg-primary)] ${
                    isActive
                      ? 'bg-[var(--accent-gold)] ring-4 ring-[var(--accent-gold)]/20 animate-pulse'
                      : 'bg-[var(--accent-sage)]'
                  }`}
                />

                <GlassCard glowColor={isActive ? 'gold' : 'none'} className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--accent-terra)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] shrink-0" />
                      {item.date}
                    </span>
                    {isActive && (
                      <span className="px-3 py-1 rounded-full bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] text-[10px] uppercase tracking-widest font-semibold self-start sm:self-auto">
                        Currently Open
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
