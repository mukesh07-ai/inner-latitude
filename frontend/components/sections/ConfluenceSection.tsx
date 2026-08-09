'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { confluenceData } from '@/data/confluence';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function ConfluenceSection() {
  const [activeTrackId, setActiveTrackId] = useState(confluenceData.tracks[0].id);
  const activeTrack = confluenceData.tracks.find((t) => t.id === activeTrackId) || confluenceData.tracks[0];

  return (
    <section id="confluence" className="py-12 md:py-16 relative bg-grain overflow-hidden">
      {/* Background Glass Orbs */}
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-[var(--accent-terra)]/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={`${confluenceData.date} · ${confluenceData.location}`}
          title={confluenceData.title}
          highlightText={confluenceData.tagline}
          description={confluenceData.description}
        />

        {/* Expo Statistics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-16">
          <GlassCard className="p-6 text-center">
            <div className="font-serif text-3xl md:text-4xl text-[var(--accent-terra)] font-light">
              {confluenceData.duration}
            </div>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">Duration</div>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <div className="font-serif text-3xl md:text-4xl text-[var(--accent-gold)] font-light">
              {confluenceData.tracksCount} Tracks
            </div>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">Programme Streams</div>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <div className="font-serif text-3xl md:text-4xl text-[var(--accent-sage)] font-light">
              {confluenceData.delegatesCount}
            </div>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">Target Delegates</div>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <div className="font-serif text-3xl md:text-4xl text-[var(--accent-terra-light)] font-light">
              {confluenceData.exhibitorsCount}
            </div>
            <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">Curated Brands</div>
          </GlassCard>
        </div>

        {/* 5 Programme Tracks Showcase */}
        <div className="mt-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--accent-terra)] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] shrink-0" />
            PROGRAMME TRACKS
          </span>
          <h3 className="font-serif text-2xl md:text-4xl font-normal text-[var(--text-primary)] mb-8">
            Five Immersive Learning & Experience Stages
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Track Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {confluenceData.tracks.map((track) => {
                const isSelected = track.id === activeTrackId;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setActiveTrackId(track.id)}
                    className={`w-full p-5 rounded-xl text-left transition-all duration-300 cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? 'bg-[var(--accent-gold)]/15 border-[var(--accent-gold)] text-[var(--text-primary)] shadow-md translate-x-2'
                        : 'glass-panel text-[var(--text-secondary)] hover:border-[var(--accent-gold)]/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl text-[var(--accent-gold)]">{track.icon}</span>
                      <div>
                        <div className="font-serif text-lg font-normal">{track.title}</div>
                        <div className="text-xs text-[var(--text-muted)] tracking-wide line-clamp-1">
                          {track.summary}
                        </div>
                      </div>
                    </div>
                    <span className="text-lg text-[var(--accent-gold)]">{isSelected ? '→' : '+'}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Track Detail Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrack.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard glowColor="gold" className="p-8 md:p-10 border-l-4 border-l-[var(--accent-gold)]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl text-[var(--accent-gold)]">{activeTrack.icon}</span>
                      <h4 className="font-serif text-3xl font-normal text-[var(--text-primary)]">
                        {activeTrack.title}
                      </h4>
                    </div>

                    <p className="text-base text-[var(--text-secondary)] font-light leading-relaxed mb-8">
                      {activeTrack.description}
                    </p>

                    <div>
                      <h5 className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-4">
                        Track Highlights & Topics
                      </h5>
                      <div className="space-y-3">
                        {activeTrack.highlights.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
                            <span className="text-[var(--accent-gold)] font-bold mt-0.5">◎</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                      <span className="text-xs text-[var(--text-muted)] tracking-wider uppercase">
                        Goa July 2026
                      </span>
                      <GlassButton href="/apply?type=exhibitor" variant="outline" size="sm" showArrow>
                        Exhibit in this Track
                      </GlassButton>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
