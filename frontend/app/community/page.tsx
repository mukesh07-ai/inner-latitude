import React from 'react';
import { Metadata } from 'next';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';

export const metadata: Metadata = {
  title: 'Professional Community — Inner Latitude Founding Circle',
  description: 'Join doctors, neuroscientists, psychologists, and facilitators co-creating conscious retreats and convention programming.',
};

export default function CommunityPage() {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FOUNDING PROFESSIONAL CIRCLE"
          title="Join the Inner Latitude"
          highlightText="Community."
          description="A peer network for integrative doctors, neuroscientists, therapists, and wisdom keepers sharing knowledge and shaping transformational experiences."
        />
      </div>

      <CommunitySection />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <GlassCard glowColor="sage" className="p-10 border-2 border-[var(--accent-sage)]">
          <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
            Co-Create With Inner Latitude in 2026
          </h3>
          <p className="text-base text-[var(--text-secondary)] font-light mb-8 max-w-lg mx-auto">
            Founding members enter at no fee and receive direct access to our retreat platform and expo stages.
          </p>
          <GlassButton href="/apply?type=member" variant="primary" size="lg" showArrow>
            Submit Member Application
          </GlassButton>
        </GlassCard>
      </div>
    </div>
  );
}
