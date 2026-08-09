import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Contact Us — Inner Latitude',
  description: 'Reach out to the Inner Latitude team regarding retreats, sponsorship, community membership, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Start a"
          highlightText="Conversation."
          description="We read every message and respond within 24 hours."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <GlassCard glowColor="gold" className="p-6">
            <span className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold block mb-1">
              General Enquiries
            </span>
            <div className="font-serif text-lg text-[var(--text-primary)]">hello@innerlatitude.com</div>
          </GlassCard>

          <GlassCard glowColor="sage" className="p-6">
            <span className="text-xs uppercase tracking-widest text-[var(--accent-sage)] font-semibold block mb-1">
              Location
            </span>
            <div className="font-serif text-lg text-[var(--text-primary)]">South Goa & Pan-India</div>
          </GlassCard>

          <GlassCard glowColor="terra" className="p-6">
            <span className="text-xs uppercase tracking-widest text-[var(--accent-terra)] font-semibold block mb-1">
              Sponsorship & Expo
            </span>
            <div className="font-serif text-lg text-[var(--text-primary)]">expo@innerlatitude.com</div>
          </GlassCard>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-12">Loading form...</div>}>
        <ContactFormSection />
      </Suspense>
    </div>
  );
}
