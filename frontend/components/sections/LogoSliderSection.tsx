'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

const partners = [
  "Acme Corp", "Globalia", "Stark Industries", "Wayne Enterprises", 
  "Umbrella Corp", "Cyberdyne Systems", "Massive Dynamic", "InGen"
];

// Duplicate the array to create a seamless infinite loop
const sliderItems = [...partners, ...partners];

export function LogoSliderSection() {
  return (
    <section className="py-20 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-medium mb-4 block">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[var(--text-primary)]">
            Our Channel Partners
          </h2>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex whitespace-nowrap items-center group-hover:pause">
          {sliderItems.map((partner, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-16 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {/* Replace with actual <img> tags when logos are available */}
              <span className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
