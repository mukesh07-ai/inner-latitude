'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Play, X } from 'lucide-react'; // Wait, let me check if lucide-react is installed. I will use standard SVG instead to be safe if it isn't.

const PlayIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export function MediaGallerySection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-10 md:py-12 relative bg-background overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[var(--accent-terra)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[var(--accent-sage)]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Immersive Experience"
          title="See The Journey"
          description="A glimpse into the serene environments and transformative moments at Inner Latitude."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main Large Item (Video Placeholder) */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl aspect-video md:aspect-auto md:h-[624px] border border-white/5">
            <Image 
              src="/images/retreat.png" 
              alt="Serene nature retreat" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            
            {/* Video Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                aria-label="Play Video"
              >
                <PlayIcon className="w-8 h-8 ml-1 text-[var(--accent-gold)]" />
              </button>
              <span className="mt-6 text-sm uppercase tracking-widest text-white/90 font-medium">Watch The Experience</span>
            </div>
          </div>

          {/* Secondary Image 1 */}
          <div className="relative group overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[300px] border border-white/5">
            <Image 
              src="/images/meditation.png" 
              alt="Meditation circle" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="font-serif text-xl text-white">Inner Stillness</h3>
            </div>
          </div>

          {/* Secondary Image 2 */}
          <div className="relative group overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[300px] border border-white/5">
            <Image 
              src="/images/confluence.png" 
              alt="Wellness confluence" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="font-serif text-xl text-white">Community & Connection</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal (Simulated) */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-lg"
          >
            <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)} />
            
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center z-10"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors"
                aria-label="Close Video"
              >
                <CloseIcon />
              </button>
              
              {/* Simulated Video Placeholder */}
              <div className="absolute inset-0 bg-[url('/images/retreat.png')] bg-cover bg-center opacity-40 blur-sm" />
              <div className="relative z-10 text-center space-y-4 px-6">
                <p className="font-serif text-3xl md:text-5xl text-white/90">The Inner Latitude Film</p>
                <p className="text-white/60 tracking-widest text-sm uppercase">Coming Soon</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
