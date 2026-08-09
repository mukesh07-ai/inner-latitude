'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { confluenceData } from '@/data/confluence';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function SponsorshipSection() {
  return (
    <section id="sponsorship" className="py-12 md:py-16 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EXPO SPONSORSHIP TIERS"
          title="Choose your"
          highlightText="position."
          description="Position your brand in front of India's most conscious consumers and wellness practitioners."
        />

        {/* 4 Sponsorship Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {confluenceData.sponsorshipTiers.map((tier, idx) => {
            const isPopular = tier.isPopular;
            const isExclusive = tier.isExclusive;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex pt-4"
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute top-0.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent-gold)] text-white dark:text-zinc-950 text-[10px] uppercase tracking-[0.2em] font-semibold shadow-md z-10 whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}
                <GlassCard
                  glowColor={isPopular ? 'gold' : isExclusive ? 'terra' : 'sage'}
                  className={`w-full flex flex-col justify-between p-6 sm:p-8 relative ${
                    isPopular
                      ? 'border-2 border-[var(--accent-gold)] shadow-xl'
                      : isExclusive
                      ? 'border-2 border-[var(--accent-terra)] shadow-xl'
                      : ''
                  }`}
                >
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--accent-terra)] mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] shrink-0" />
                      {tier.name} Package
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-light text-[var(--text-primary)] mb-1">
                      {tier.price}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-6">
                      Stall: {tier.stallSize}
                    </div>

                    <div className="space-y-3 mb-8 pt-4 border-t border-[var(--border-subtle)]">
                      {tier.perks.map((perk) => (
                        <div key={perk} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <Check className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <GlassButton
                      href={`/apply?type=exhibitor&tier=${tier.id}`}
                      variant={isPopular || isExclusive ? 'primary' : 'outline'}
                      size="md"
                      className="w-full"
                    >
                      Apply for {tier.name}
                    </GlassButton>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Target Categories Banner */}
        <div className="p-8 rounded-2xl glass-panel text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-semibold block mb-3">
            Ideal Categories
          </span>
          <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed italic">
            Supplements · Ayurveda · Breathwork Tech · Functional Food & Beverage · Mental Wellness Apps · Conscious Apparel · Yoga Equipment · Natural Skincare
          </p>
        </div>
      </div>
    </section>
  );
}
