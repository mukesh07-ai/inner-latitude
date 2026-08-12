'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function ResidencyPage() {
  const data = content.home.residency;

  return (
    <div className="min-h-screen bg-[var(--bg-light)] text-[var(--text-primary)] font-sans relative overflow-hidden">
      {/* Abstract Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[var(--bg-card)] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[var(--accent-terra)]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <main className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 mt-12 md:mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/5 text-[var(--accent-gold)] text-xs font-semibold tracking-widest uppercase mb-8"
          >
            {data.label}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
          >
            {data.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-3xl text-[var(--accent-terra)] font-light mb-8"
          >
            {data.sub}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed mb-12"
          >
            {data.body}
          </motion.p>
        </section>

        {/* Philosophy */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <GlassCard className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent-terra)]/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Core Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.philosophy.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-2xl text-[var(--accent-gold)] shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium tracking-wide">{item.text}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Durations & Pricing */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <h2 className="font-serif text-3xl md:text-5xl text-center mb-4">Choose Your Duration</h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto">Select the timeframe that aligns with your current focus and intentions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {data.durations.map((duration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative flex"
              >
                <GlassCard className={`w-full p-8 flex flex-col justify-between ${
                  duration.featured 
                    ? 'border-[var(--accent-gold)]/50 shadow-[0_0_30px_rgba(212,175,55,0.1)] md:-translate-y-4 relative z-10' 
                    : 'border-[var(--border-subtle)]'
                }`}>
                  {duration.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-gold)] text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                      {duration.badge}
                    </div>
                  )}
                  
                  <div className="space-y-6 flex-grow">
                    <div className="text-center">
                      <div className="font-serif text-6xl text-[var(--text-primary)] mb-2">{duration.days}</div>
                      <div className="text-[var(--text-secondary)] uppercase tracking-widest text-sm">Days</div>
                    </div>
                    
                    <div className="h-px w-full bg-[var(--border-subtle)]" />
                    
                    <div>
                      <div className="text-[var(--text-muted)] text-sm mb-1">Starting from</div>
                      <div className="text-3xl text-[var(--accent-gold)]">{duration.startingFrom}</div>
                    </div>
                    
                    <div>
                      <div className="text-[var(--text-muted)] text-sm mb-2">Ideal for</div>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{duration.idealFor}</p>
                    </div>
                    
                    <div>
                      <div className="text-[var(--text-muted)] text-sm mb-2">Dates</div>
                      <p className="text-[var(--text-primary)] font-medium text-sm">{duration.dates}</p>
                    </div>
                  </div>
                  
                  <div className="pt-8 mt-auto">
                    <Link href="/book?type=residency" className="block w-full">
                      <GlassButton variant={duration.featured ? 'primary' : 'secondary'} className="w-full justify-center">
                        {duration.cta}
                      </GlassButton>
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Inclusions */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-subtle)] p-8 md:p-12 shadow-sm">
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">Also Included in Residency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.additionalInclusions.map((inclusion, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent-gold)] shrink-0" />
                  <span className="text-[var(--text-secondary)]">{inclusion}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
