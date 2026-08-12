'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function ConfluenceSection() {
  const data = content.home.residency;

  return (
    <section id="residency" className="py-12 md:py-16 relative bg-[var(--bg-card)] overflow-hidden border-y border-[var(--border-subtle)]">
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-[var(--accent-terra)]/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={data.label}
          title={data.headline}
          highlightText={data.sub}
          description={data.body}
          className="mb-12"
        />

        {/* Philosophy Strip */}
        <div className="w-full max-w-5xl mx-auto mb-16 lg:mb-24">
          <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-12 gap-y-6 px-6 py-6 rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 backdrop-blur-md shadow-sm">
            {data.philosophy.map((item, idx) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center">
                  <span className="text-[12px] text-[var(--accent-gold)]">{item.icon}</span>
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)] tracking-wide">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Duration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24 max-w-6xl mx-auto">
          {data.durations.map((duration, idx) => (
            <motion.div
              key={duration.days}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={duration.featured ? "md:-mt-6 md:mb-[-1.5rem] relative z-20" : "relative z-10 mt-4"}
            >
              {duration.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent-gold)] text-[var(--bg-primary)] text-[10px] font-bold tracking-widest uppercase px-5 py-2 rounded-full shadow-lg z-50 whitespace-nowrap">
                  {duration.badge}
                </div>
              )}
              <GlassCard 
                className={`h-full flex flex-col p-8 lg:p-10 border bg-[var(--bg-primary)]/40 backdrop-blur-xl rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] ${duration.featured ? 'border-[var(--accent-gold)]/40 shadow-2xl' : 'border-[var(--border-subtle)] opacity-90 hover:opacity-100 hover:border-[var(--accent-gold)]/30'}`}
              >
                {duration.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[var(--accent-gold)]/15 blur-[60px] pointer-events-none rounded-full" />
                )}
                
                <div className="text-center mb-8 relative z-10">
                  <h4 className="font-serif text-5xl lg:text-6xl text-[var(--text-primary)] mb-3 drop-shadow-sm">
                    {duration.days} <span className="text-2xl text-[var(--text-secondary)]">Days</span>
                  </h4>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent-terra)] font-semibold">
                    {duration.dates}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[var(--border-subtle)] opacity-60 mb-8" />

                <div className="text-center flex-grow mb-8 relative z-10 flex flex-col justify-center">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium mb-3">
                    Starting from
                  </div>
                  <div className="font-serif text-4xl text-[var(--accent-gold)] mb-5">
                    {duration.startingFrom}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[220px] mx-auto opacity-90">
                    "{duration.idealFor}"
                  </p>
                </div>

                <div className="relative z-10 w-full mt-auto">
                  <GlassButton href={`/book?type=residency&duration=${duration.days}`} variant={duration.featured ? "primary" : "outline"} size="lg" className="w-full text-center justify-center py-4">
                    {duration.cta}
                  </GlassButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Inclusions */}
        <div className="max-w-5xl mx-auto">
          <GlassCard className="p-8 lg:p-12 border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 backdrop-blur-xl rounded-[2rem] lg:rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[var(--accent-sage)]/5 to-[var(--accent-gold)]/5 blur-[80px] pointer-events-none rounded-full" />
            
            <div className="relative z-10">
              <h4 className="text-center font-serif text-2xl lg:text-3xl text-[var(--text-primary)] mb-10 flex items-center justify-center gap-4">
                <div className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-sage)] opacity-70" />
                Included in all Residencies
                <div className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-sage)] opacity-70" />
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 max-w-4xl mx-auto px-4">
                {data.additionalInclusions.map((inclusion, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 group/inc"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-sage)]/10 border border-[var(--accent-sage)]/20 flex items-center justify-center transition-colors group-hover/inc:bg-[var(--accent-sage)]/20">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-sage)]" />
                    </div>
                    <span className="text-sm md:text-base text-[var(--text-primary)] font-medium leading-tight">{inclusion}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
}
