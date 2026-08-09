import React from 'react';
import { Metadata } from 'next';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CultureSection } from '@/components/sections/CultureSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';

export const metadata: Metadata = {
  title: 'Partner With Us — Inner Latitude Event & Execution Partners',
  description: 'Seeking a Goa-based Event Operations Partner and a fast-moving Execution Partner for Inner Latitude 2026.',
};

export default function PartnersPage() {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="STRATEGIC PARTNERSHIPS"
          title="Build This Movement"
          highlightText="With Us."
          description="We are actively inviting an Event Operations Partner (Goa) and an Execution Partner (Individual fast-mover) to join our core team."
        />
      </div>

      <PartnersSection />
      <CultureSection />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <GlassCard glowColor="gold" className="p-10 border-2 border-[var(--accent-gold)]">
          <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
            Have a Different Partnership Idea?
          </h3>
          <p className="text-base text-[var(--text-secondary)] font-light mb-8 max-w-lg mx-auto">
            We are open to media, venue, hospitality, and educational collaborations.
          </p>
          <GlassButton href="/contact" variant="outline" size="lg" showArrow>
            Start a Partnership Conversation
          </GlassButton>
        </GlassCard>
      </div>
    </div>
  );
}
