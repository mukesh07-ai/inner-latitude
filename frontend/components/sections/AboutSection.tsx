'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function AboutSection() {
  const [selectedModality, setSelectedModality] = useState(0);
  const activeModality = siteData.about.modalities[selectedModality];

  return (
    <section id="about" className="py-12 md:py-16 relative bg-grain overflow-hidden">
      {/* Background Glass Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-[var(--accent-sage)]/15 blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={siteData.about.eyebrow}
          title={siteData.about.title}
          description={siteData.about.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-8">
          {/* Left Column: Founder Quote & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glowColor="gold" className="border-l-4 border-l-[var(--accent-gold)]">
              <p className="font-serif text-xl md:text-2xl italic bg-clip-text text-transparent bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)] leading-relaxed mb-6">
                &quot;Silence is where transformation begins. Inner Latitude is the space where science meets ancient wisdom — and where people come to find themselves, together.&quot;
              </p>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-medium">
                — Inner Latitude Founder Mission
              </div>
            </GlassCard>

            <div className="pt-2">
              <GlassButton href="/contact?type=founder" variant="outline" size="md" showArrow>
                {siteData.about.founderCta}
              </GlassButton>
            </div>
          </div>

          {/* Right Column: Interactive Modality Explorer */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--accent-terra)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] shrink-0" />
              Core Modalities Explorer
            </h3>

            {/* Modality Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {siteData.about.modalities.map((item, idx) => {
                const isSelected = selectedModality === idx;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedModality(idx)}
                    className={`group p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border ${isSelected
                        ? 'bg-[var(--accent-gold)]/15 border-[var(--accent-gold)] text-[var(--text-primary)] shadow-md scale-105'
                        : 'glass-panel text-[var(--text-secondary)] hover:border-[var(--accent-gold)]/50 hover:scale-105 hover:shadow-lg active:scale-95'
                      }`}
                  >
                    <div className="font-serif text-base font-medium">{item.name}</div>
                    <div className="text-[11px] text-[var(--text-muted)] tracking-wider truncate mt-0.5">
                      {item.tag}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Modality Detail Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModality.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard glowColor="sage" className="border-t-2 border-t-[var(--accent-sage)]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-serif text-2xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-sage)] to-[var(--accent-gold)]">
                      {activeModality.name}
                    </h4>
                    <span className="px-3 py-1 text-xs uppercase tracking-widest rounded-full bg-[var(--accent-sage)]/20 text-[var(--accent-sage)] font-medium">
                      {activeModality.tag}
                    </span>
                  </div>
                  <p className="text-base text-[var(--text-secondary)] font-light leading-relaxed">
                    {activeModality.desc}
                  </p>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
