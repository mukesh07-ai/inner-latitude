'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { confluenceData } from '@/data/confluence';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export function AudienceSection() {
  return (
    <section className="py-12 md:py-16 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TARGET AUDIENCE & DEMOGRAPHICS"
          title="Who will be"
          highlightText="in the room."
          description="High-intent delegates, wellness decision-makers, and industry practitioners seeking authentic solutions."
        />

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {confluenceData.audienceProfiles.map((persona, idx) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlassCard glowColor="terra" className="h-full flex flex-col justify-between border-t-4 border-t-[var(--accent-terra)]">
                <div>
                  <div className="text-3xl text-[var(--accent-terra)] mb-4">{persona.icon}</div>
                  <h4 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-1">
                    {persona.title}
                  </h4>
                  <div className="text-xs uppercase tracking-widest text-[var(--accent-terra)] font-semibold mb-4">
                    {persona.ageRange}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                    {persona.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-semibold block">
                    Demographic Highlights
                  </span>
                  {persona.keyStats.map((stat) => (
                    <div key={stat} className="text-xs text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Demographic Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel text-center">
          <div>
            <div className="font-serif text-3xl font-light text-[var(--accent-gold)]">200+</div>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">High-Intent Delegates</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-light text-[var(--accent-gold)]">₹8–50L</div>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">Annual HH Income</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-light text-[var(--accent-gold)]">72%</div>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">Active Wellness Spenders</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-light text-[var(--accent-gold)]">Zero</div>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">Accidental Foot Traffic</div>
          </div>
        </div>
      </div>
    </section>
  );
}
