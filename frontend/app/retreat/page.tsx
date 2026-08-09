import React from 'react';
import { Metadata } from 'next';
import { RetreatSection } from '@/components/sections/RetreatSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { retreatData } from '@/data/retreat';

export const metadata: Metadata = {
  title: 'Stillness by the Sea — Immersive Retreat South Goa 2026',
  description: '5 Nights 6 Days in South Goa. Intimate 12-person retreat focused on nervous system reset, Vipassana, Kundalini, and applied neuroscience.',
};

export default function RetreatPage() {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MAY 2026 RETREAT · SOUTH GOA"
          title="Stillness by the Sea"
          highlightText="Immersive Retreat."
          description={retreatData.tagline}
        />
      </div>

      <RetreatSection />

      {/* Included Amenities & Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          eyebrow="SANCTUARY HIGHLIGHTS"
          title="What is"
          highlightText="Included."
          description="Everything is curated to foster complete rest, cellular renewal, and deep reflection."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {retreatData.highlights.map((item, idx) => (
            <GlassCard key={idx} glowColor="gold" className="p-6">
              <span className="text-xl text-[var(--accent-gold)] font-serif block mb-2">
                0{idx + 1}.
              </span>
              <p className="text-sm text-[var(--text-primary)] font-light leading-relaxed">
                {item}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Booking CTA Banner */}
      <div className="max-w-4xl mx-auto px-4">
        <GlassCard glowColor="terra" className="p-10 text-center border-2 border-[var(--accent-terra)]">
          <span className="text-xs uppercase tracking-widest text-[var(--accent-terra)] font-semibold block mb-2">
            Limited Availability
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mb-4">
            Only {retreatData.spotsTotal} Spots Reserved for May 2026
          </h3>
          <p className="text-base text-[var(--text-secondary)] font-light mb-8 max-w-xl mx-auto">
            Investment: {retreatData.price} per person (all-inclusive stay, food, coaching & workshops).
          </p>
          <GlassButton href="/apply?type=retreat" variant="primary" size="lg" showArrow>
            Reserve Your Spot Now
          </GlassButton>
        </GlassCard>
      </div>
    </div>
  );
}
