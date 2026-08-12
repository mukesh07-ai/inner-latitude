'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { SITE_METADATA } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 bg-[var(--bg-primary)]">
      {/* Header Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent-sage)]/30 bg-[var(--accent-sage)]/10 text-[var(--accent-sage)] text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-sage)] animate-pulse" />
            Connect With Us
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-normal tracking-tight text-[var(--text-primary)]">
            We are here to <span className="italic text-[var(--accent-sage)]">Listen</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl mx-auto">
            Whether you have questions about our retreats, wish to collaborate, or simply want to share your journey—reach out.
          </p>
        </motion.div>
      </section>

      {/* Embedded Form Section */}
      <div className="mt-8">
        <ContactFormSection />
      </div>
    </div>
  );
}
