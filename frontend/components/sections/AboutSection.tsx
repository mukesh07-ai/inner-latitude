'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { siteData } from '@/data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassButton } from '../ui/GlassButton';

export function AboutSection() {
  const [selectedModality, setSelectedModality] = useState(0);
  const activeModality = siteData.about.modalities[selectedModality];

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden bg-grain">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--accent-sage)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Description, Quote */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow={siteData.about.eyebrow}
              title={siteData.about.title}
              className="!mb-2"
            />

            <div className="relative flex flex-col gap-6 pl-6 md:pl-8">
              {/* Elegant Gradient Line */}
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[var(--accent-gold)] via-[var(--accent-gold)]/30 to-transparent rounded-full" />

              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                {siteData.about.description}
              </p>

              <div className="relative">
                <div className="absolute -left-4 -top-3 text-5xl text-[var(--accent-gold)]/20 font-serif leading-none pointer-events-none">
                  &quot;
                </div>
                <p className="font-serif text-xl md:text-2xl italic text-[var(--text-primary)] leading-relaxed mb-4 relative z-10">
                  Silence is where transformation begins. Inner Latitude is the space where science meets ancient wisdom — and where people come to find themselves, together.
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[var(--accent-gold)]/60" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-gold)] font-medium">
                    Founder Mission
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <GlassButton href="/contact?type=founder" variant="outline" size="md" showArrow>
                {siteData.about.founderCta}
              </GlassButton>
            </div>
          </div>

          {/* Right Column: Image & Modalities */}
          <div className="lg:col-span-7 flex flex-col gap-5 md:gap-6">
            
            {/* Substantial Image Banner */}
            <div className="relative w-full aspect-video md:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/5">
              <Image 
                src="/images/meditation.png" 
                alt="Inner Latitude meditation" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Modalities Explorer Pill Layout */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/10 rounded-full blur-[50px] pointer-events-none" />
              
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)]" />
                Core Modalities Explorer
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                {siteData.about.modalities.map((item, idx) => {
                  const isSelected = selectedModality === idx;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedModality(idx)}
                      className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                        isSelected 
                          ? 'bg-[var(--accent-gold)] text-black border-[var(--accent-gold)] shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                          : 'bg-transparent text-[var(--text-secondary)] border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[140px] sm:min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModality.name}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h4 className="font-serif text-2xl md:text-3xl font-medium text-[var(--text-primary)]">
                        {activeModality.name}
                      </h4>
                      <span className="px-3 py-1 rounded-full bg-[var(--accent-sage)]/10 text-[var(--accent-sage)] text-[10px] sm:text-xs tracking-widest uppercase border border-[var(--accent-sage)]/20">
                        {activeModality.tag}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] font-light leading-relaxed text-sm md:text-base max-w-2xl">
                      {activeModality.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
