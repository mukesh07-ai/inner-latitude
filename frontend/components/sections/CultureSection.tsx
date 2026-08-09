'use client';

import React from 'react';
import { partnersData } from '@/data/partners';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function CultureSection() {
  const { musicProgram } = partnersData;

  return (
    <section className="py-10 md:py-12 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard glowColor="gold" className="p-8 md:p-12 border-t-2 border-t-[var(--accent-gold)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--accent-terra)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] shrink-0" />
                {musicProgram.title}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-normal text-[var(--text-primary)]">
                {musicProgram.subtitle}
              </h3>
              <p className="text-base text-[var(--text-secondary)] font-light leading-relaxed">
                {musicProgram.description}
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <GlassButton href="/apply?type=artist" variant="primary" size="lg" showArrow>
                Join the Program
              </GlassButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
