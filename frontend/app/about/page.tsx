'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutSection } from '@/components/sections/AboutSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] animate-pulse" />
            Our Story
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-normal tracking-tight text-[var(--text-primary)]">
            Finding Your <span className="italic text-[var(--accent-gold)]">True North</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl mx-auto">
            Inner Latitude is a conscious living movement bringing together neuroscience, ancient wisdom, and lived experience to help you reconnect with what truly matters.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <AboutSection />

      {/* Philosophy / Values */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-sage)]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <SectionHeading 
          eyebrow="OUR PHILOSOPHY"
          title="The Pillars of"
          highlightText="Inner Latitude"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Disconnect to Reconnect",
              description: "We believe that stepping away from the noise is the first step towards finding clarity and purpose.",
              icon: "🔌"
            },
            {
              title: "Evidence-Based Wellness",
              description: "Our approach bridges ancient practices with modern neuroscience to ensure tangible, lasting benefits.",
              icon: "🧠"
            },
            {
              title: "Community & Silence",
              description: "We honor the power of both deep connection with others and profound solitude with oneself.",
              icon: "🤝"
            }
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard className="h-full p-8 text-center flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-3xl shadow-inner mb-2">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-2xl font-medium text-[var(--text-primary)]">{pillar.title}</h3>
                <p className="text-[var(--text-secondary)] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
