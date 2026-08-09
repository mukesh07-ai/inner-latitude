import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Application Portal — Inner Latitude',
  description: 'Apply for the May South Goa Retreat, Confluence Expo stall, Founding Community Circle, or Partnership roles.',
};

export default function ApplyPage() {
  return (
    <div className="pt-32 pb-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="APPLICATION PORTAL"
          title="Begin Your"
          highlightText="Journey."
          description="Select your application pathway below to get started."
          align="center"
        />
      </div>

      <Suspense fallback={<div className="text-center py-12">Loading application portal...</div>}>
        <ContactFormSection defaultCategory="retreat" />
      </Suspense>
    </div>
  );
}
