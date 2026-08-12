import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { LogoSliderSection } from '@/components/sections/LogoSliderSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsCounterSection } from '@/components/sections/StatsCounterSection';
import { MediaGallerySection } from '@/components/sections/MediaGallerySection';
import { RetreatSection } from '@/components/sections/RetreatSection';
import { ConfluenceSection } from '@/components/sections/ConfluenceSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { WhyInnerLatitude } from '@/components/sections/WhyInnerLatitude';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactFormSection } from '@/components/sections/ContactFormSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <LogoSliderSection />
      <AboutSection />
      <StatsCounterSection />
      <MediaGallerySection />
      <RetreatSection />
      <ConfluenceSection />
      <TestimonialSection />
      <WhyInnerLatitude />
      <FAQSection />
      <ContactFormSection />
    </div>
  );
}
