'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { partnersData } from '@/data/partners';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function PartnersSection() {
  return (
    <section id="partners" className="py-12 md:py-16 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={partnersData.eyebrow}
          title={partnersData.title}
          description={partnersData.subtitle}
        />

        {/* 2 Partner Positions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {partnersData.positions.map((pos, idx) => (
            <motion.div
              key={pos.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlassCard
                glowColor={pos.id === 'event-ops' ? 'sage' : 'terra'}
                className={`h-full flex flex-col justify-between p-8 border-t-4 ${
                  pos.id === 'event-ops' ? 'border-t-[var(--accent-sage)]' : 'border-t-[var(--accent-terra)]'
                }`}
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-medium block mb-2">
                    {pos.eyebrow}
                  </span>
                  <h4 className="font-serif text-3xl font-normal text-[var(--text-primary)] mb-4">
                    {pos.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                    {pos.description}
                  </p>

                  <div className="p-4 rounded-xl glass-panel italic text-xs text-[var(--text-primary)] leading-relaxed mb-8 border-l-2 border-l-[var(--accent-gold)]">
                    "{pos.quote}"
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-4 border-t border-[var(--border-subtle)]">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-3">
                        You Bring
                      </span>
                      <ul className="space-y-2 text-xs text-[var(--text-primary)]">
                        {pos.youBring.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[var(--accent-gold)]">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-3">
                        You Receive
                      </span>
                      <ul className="space-y-2 text-xs text-[var(--text-primary)]">
                        {pos.youReceive.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[var(--accent-gold)]">◎</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <GlassButton
                    href={`/apply?type=${pos.id}`}
                    variant="primary"
                    size="md"
                    className="w-full"
                    showArrow
                  >
                    Express Interest in {pos.title}
                  </GlassButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
