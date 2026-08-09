import React from 'react';
import { Metadata } from 'next';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyInnerLatitude } from '@/components/sections/WhyInnerLatitude';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';

export const metadata: Metadata = {
  title: 'About Inner Latitude — Science Meets Ancient Wisdom',
  description: 'Learn about the 20-year journey behind Inner Latitude, our core modalities, and our philosophy bridging neuroscience, Vipassana, Kundalini, and Ayurveda.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR PHILOSOPHY & ORIGIN"
          title="Bridging Science &"
          highlightText="Ancient Wisdom."
          description="Inner Latitude exists to help individuals regulate their nervous system, reclaim mental clarity, and discover their true north in an increasingly noisy world."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <GlassCard glowColor="gold" className="p-8">
            <h3 className="font-serif text-2xl font-normal text-[var(--accent-gold)] mb-3">
              01. Neuroscience
            </h3>
            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              Applying polyvagal theory, neuroplasticity, and brainwave entrainment to measure and optimize human nervous system regulation.
            </p>
          </GlassCard>

          <GlassCard glowColor="sage" className="p-8">
            <h3 className="font-serif text-2xl font-normal text-[var(--accent-sage)] mb-3">
              02. Ancient Wisdom
            </h3>
            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              Honoring Vipassana meditation, Kundalini bio-energy practices, and Ayurvedic constitution mapping honed over millennia.
            </p>
          </GlassCard>

          <GlassCard glowColor="terra" className="p-8">
            <h3 className="font-serif text-2xl font-normal text-[var(--accent-terra)] mb-3">
              03. Lived Experience
            </h3>
            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              Rooted in 20+ years of real-world leadership across finance, real estate, hospitality, crafts, and high-performance living.
            </p>
          </GlassCard>
        </div>
      </div>

      <AboutSection />
      <WhyInnerLatitude />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <GlassCard glowColor="gold" className="p-10">
          <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-base text-[var(--text-secondary)] font-light mb-8">
            Join our founding May retreat in South Goa or connect with our professional circle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlassButton href="/retreat" variant="primary" size="lg" showArrow>
              Explore May Retreat
            </GlassButton>
            <GlassButton href="/contact" variant="outline" size="lg">
              Contact Founder
            </GlassButton>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
