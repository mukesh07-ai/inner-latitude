'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { communityData } from '@/data/community';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function CommunitySection() {
  return (
    <section id="community" className="py-12 md:py-16 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={communityData.eyebrow}
          title={communityData.title}
          description={communityData.description}
        />

        {/* 6 Professional Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {communityData.roles.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <GlassCard glowColor="sage" className="h-full border-t-2 border-t-[var(--accent-sage)]">
                <div className="text-3xl text-[var(--accent-sage)] mb-3">{role.icon}</div>
                <h4 className="font-serif text-xl font-normal text-[var(--text-primary)] mb-1">
                  {role.title}
                </h4>
                <div className="text-xs uppercase tracking-wider text-[var(--accent-sage)] font-medium mb-3">
                  {role.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  {role.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* What You Give / Receive Box */}
        <GlassCard glowColor="gold" className="p-8 md:p-12 max-w-5xl mx-auto border-l-4 border-l-[var(--accent-gold)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[var(--border-subtle)]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-semibold block mb-2">
                What You Give
              </span>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                {communityData.whatYouGive}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-semibold block mb-2">
                What You Receive
              </span>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                {communityData.whatYouReceive}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-semibold block mb-2">
                Membership Terms
              </span>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                {communityData.membershipTerms}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[var(--text-muted)] italic">
              Founding circle positions available for 2026 launch.
            </div>
            <GlassButton href="/apply?type=member" variant="primary" size="md" showArrow>
              Apply as a Founding Member
            </GlassButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
