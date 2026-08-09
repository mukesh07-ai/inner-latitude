import React from 'react';
import { Metadata } from 'next';
import { ConfluenceSection } from '@/components/sections/ConfluenceSection';
import { AudienceSection } from '@/components/sections/AudienceSection';
import { SponsorshipSection } from '@/components/sections/SponsorshipSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { confluenceData } from '@/data/confluence';

export const metadata: Metadata = {
  title: 'Inner Latitude Confluence — Goa Conscious Living Expo July 2026',
  description: 'India’s premier science-meets-wisdom expo. 2 Days, 5 Tracks, 200+ Delegates, 15+ Brands. Goa, July 2026.',
};

export default function ConfluencePage() {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="JULY 2026 · GOA, INDIA"
          title="Inner Latitude"
          highlightText="Confluence."
          description={confluenceData.description}
        />
      </div>

      <ConfluenceSection />
      <AudienceSection />
      <SponsorshipSection />

      {/* Target Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          eyebrow="CURATED CATEGORIES"
          title="Brands We Are"
          highlightText="Inviting."
          description="We partner exclusively with authentic, transparent, and high-impact conscious living initiatives."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {confluenceData.targetCategories.map((cat) => (
            <GlassCard key={cat.category} glowColor="sage" className="p-6">
              <h4 className="font-serif text-xl font-normal text-[var(--accent-gold)] mb-3">
                {cat.category}
              </h4>
              <div className="space-y-1.5 text-xs text-[var(--text-secondary)] font-light">
                {cat.brands.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="text-[var(--accent-gold)]">→</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Apply to Exhibit Banner */}
      <div className="max-w-4xl mx-auto px-4">
        <GlassCard glowColor="gold" className="p-10 text-center border-2 border-[var(--accent-gold)]">
          <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
            Become an Exhibitor or Partner Brand
          </h3>
          <p className="text-base text-[var(--text-secondary)] font-light mb-8">
            Reserve your stall in the Wellness Market or present a workshop on stage.
          </p>
          <GlassButton href="/apply?type=exhibitor" variant="primary" size="lg" showArrow>
            Apply for Stall Space
          </GlassButton>
        </GlassCard>
      </div>
    </div>
  );
}
