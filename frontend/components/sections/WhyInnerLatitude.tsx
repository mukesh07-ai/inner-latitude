'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '@/data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export function WhyInnerLatitude() {
  return (
    <section className="py-12 md:py-16 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteData.whyInnerLatitude.eyebrow}
          title="Why"
          highlightText="Inner Latitude?"
          description="A trusted ecosystem designed to deliver deep engagement, brand clarity, and long-term association."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {siteData.whyInnerLatitude.reasons.map((reason, idx) => (
            <motion.div
              key={reason.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard glowColor="gold" className="h-full border-l-4 border-l-[var(--accent-gold)] p-8">
                <div className="font-serif text-4xl text-[var(--accent-gold)]/40 font-light mb-4">
                  {reason.num}
                </div>
                <h4 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                  {reason.title}
                </h4>
                <p className="text-base text-[var(--text-secondary)] font-light leading-relaxed">
                  {reason.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
