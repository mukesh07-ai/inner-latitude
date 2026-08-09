import React, { Suspense } from 'react';
import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { RetreatSection } from '@/components/sections/RetreatSection';
import { ConfluenceSection } from '@/components/sections/ConfluenceSection';
import { AudienceSection } from '@/components/sections/AudienceSection';
import { WhyInnerLatitude } from '@/components/sections/WhyInnerLatitude';
import { SponsorshipSection } from '@/components/sections/SponsorshipSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CultureSection } from '@/components/sections/CultureSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { ContactFormSection } from '@/components/sections/ContactFormSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <AboutSection />
      <RetreatSection />
      <ConfluenceSection />
      <AudienceSection />
      <WhyInnerLatitude />
      <SponsorshipSection />
      <CommunitySection />
      <PartnersSection />
      <CultureSection />
      <TimelineSection />
      <Suspense fallback={<div className="text-center py-12">Loading form...</div>}>
        <ContactFormSection />
      </Suspense>
    </div>
  );
}
