'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ContactFormSection } from '@/components/sections/ContactFormSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col relative overflow-hidden">
      {/* Dynamic Background Elements for the top space */}
      <div className="absolute top-0 left-0 w-full h-[60vh] pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[var(--accent-sage)]/20 to-transparent rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-10 right-[10%] w-[400px] h-[400px] bg-gradient-to-bl from-[var(--accent-gold)]/20 to-transparent rounded-full blur-[100px]"
        />
      </div>

      {/* Main Content Container with properly managed top spacing */}
      <main className="flex-grow pt-20 md:pt-28 relative z-10 flex flex-col">
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-0 md:mb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-6 md:space-y-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--accent-sage)]/30 bg-[var(--accent-sage)]/5 text-[var(--accent-sage)] text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(163,177,138,0.1)] backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-sage)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-sage)]"></span>
              </span>
              Connect With Us
            </motion.div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[var(--text-primary)] leading-[1.1]">
              We are here to <br className="hidden sm:block"/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-sage)] to-[var(--accent-gold)]">Listen</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl mx-auto"
            >
              Whether you have questions about our retreats, wish to collaborate, or simply want to share your journey—reach out.
            </motion.p>
          </motion.div>
        </section>

        {/* Embedded Form Section - Margin managed to prevent excessive gaps */}
        <div className="w-full relative z-20">
          <ContactFormSection />
        </div>
      </main>
    </div>
  );
}
