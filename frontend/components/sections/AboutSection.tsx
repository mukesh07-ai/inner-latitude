'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { content } from '@/data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassButton } from '../ui/GlassButton';

export function AboutSection() {
  const [selectedModality, setSelectedModality] = useState(0);
  const activeModality = content.home.problem.cards[selectedModality];

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden bg-grain">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--accent-sage)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: Heading, Quote, & Modalities Explorer */}
          <div className="flex flex-col gap-8 md:gap-10">
            
            <div className="space-y-6">
              <SectionHeading
                eyebrow={content.home.problem.label}
                title={<span className="text-3xl md:text-4xl font-medium tracking-tight">{content.home.problem.h2}</span>}
                className="!mb-2"
              />

              <div className="relative flex flex-col gap-6 pl-6 md:pl-8">
                {/* Elegant Gradient Line */}
                <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[var(--accent-gold)] via-[var(--accent-gold)]/30 to-transparent rounded-full" />

                <div className="relative">
                  <div className="absolute -left-4 -top-3 text-4xl md:text-5xl text-[var(--accent-gold)]/20 font-serif leading-none pointer-events-none">
                    &quot;
                  </div>
                  <p className="font-serif text-lg md:text-xl italic text-[var(--text-primary)] leading-relaxed relative z-10">
                    {content.home.problem.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Original Pill Explorer (Moved to Left Side) */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 relative overflow-hidden mt-auto">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/10 rounded-full blur-[50px] pointer-events-none" />
              
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)]" />
                The Problem
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                {content.home.problem.cards.map((item, idx) => {
                  const isSelected = selectedModality === idx;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setSelectedModality(idx)}
                      className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                        isSelected 
                          ? 'bg-[var(--accent-gold)] text-black border-[var(--accent-gold)] shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                          : 'bg-transparent text-[var(--text-secondary)] border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[140px] sm:min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModality.title}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h4 className="font-serif text-2xl md:text-3xl font-medium text-[var(--text-primary)]">
                        {activeModality.title}
                      </h4>
                    </div>
                    <p className="text-[var(--text-secondary)] font-light leading-relaxed text-sm md:text-base max-w-2xl">
                      {activeModality.text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Right Column: Image & Sticker */}
          <div className="flex flex-col justify-end w-full h-full pb-4 md:pb-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-visible group"
            >
              {/* Image Container */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
                <Image 
                  src="/images/meditation.png" 
                  alt="Inner Latitude meditation" 
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5 pointer-events-none" />
                <div className="absolute inset-0 bg-[var(--accent-gold)]/5 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Funky Sticker Element */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-28 h-28 md:w-36 md:h-36 bg-[var(--accent-sage)] rounded-full flex items-center justify-center shadow-xl border-4 border-[var(--bg-primary)] z-20"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--text-primary)] opacity-80" style={{ transform: 'scale(0.8)' }}>
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[12px] font-medium tracking-[0.2em] uppercase" style={{ fill: 'currentColor' }}>
                    <textPath href="#circlePath" startOffset="0%">
                      • INNER LATITUDE • FIND YOURSELF
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
