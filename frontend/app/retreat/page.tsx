'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { Check, MapPin, Calendar, Sun, Moon, Coffee, Activity, Heart, Info, Clock } from 'lucide-react';

// Timeline Icon mapping helper
const getTimelineIcon = (time: string) => {
  if (time.includes('AM')) {
    if (time.includes('6:') || time.includes('7:')) return <Sun className="w-5 h-5 text-[var(--accent-gold)]" />;
    if (time.includes('10:00')) return <Coffee className="w-5 h-5 text-[var(--accent-terra)]" />;
    return <Activity className="w-5 h-5 text-[var(--accent-sage)]" />;
  } else {
    if (time.includes('6:') || time.includes('Dinner')) return <Coffee className="w-5 h-5 text-[var(--accent-terra)]" />;
    return <Moon className="w-5 h-5 text-indigo-400" />;
  }
};

export default function RetreatPage() {
  const data = content.home.retreat;
  const whatsIncluded = content.home.whatsIncluded;
  const venue = content.venue;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[var(--accent-gold)]/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--accent-terra)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[var(--accent-sage)]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <main className="relative z-10 pt-32 pb-24 space-y-32">
        
        {/* 1. HERO SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent-terra)]/30 bg-[var(--accent-terra)]/5 text-[var(--accent-terra)] text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] animate-pulse" />
            {data.label}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
          >
            {data.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-3xl text-[var(--accent-gold)] font-light mb-8 italic"
          >
            {data.sub}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed mb-12"
          >
            {data.body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link href="/book?type=retreat">
              <GlassButton variant="primary" size="lg" className="px-12 text-lg">
                {data.pricing.cta}
              </GlassButton>
            </Link>
          </motion.div>
        </section>

        {/* 2. VENUE SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <GlassCard className="relative overflow-hidden p-0 border border-[var(--border-subtle)] rounded-[2.5rem]">
             <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[400px]">
                  {/* Map / Image Placeholder */}
                  <div className="absolute inset-0 bg-[var(--bg-secondary)] border-r border-[var(--border-subtle)] flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-[var(--accent-terra)]/5 opacity-50 mix-blend-overlay group-hover:opacity-100 transition-opacity duration-700" />
                    <MapPin className="w-24 h-24 text-[var(--accent-terra)]/20 transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-4">
                    <MapPin className="w-4 h-4 text-[var(--accent-gold)]" />
                    The Venue
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
                    {venue.name}
                  </h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                    Set in the serene landscape of {venue.city}, {venue.state}, our retreat grounds offer the perfect environment to disconnect from the modern world. Surrounded by nature, it provides a quiet sanctuary for your nervous system to reset.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                       <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">City</h4>
                       <p className="text-[var(--text-primary)] font-medium">{venue.city}</p>
                    </div>
                    <div>
                       <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">State</h4>
                       <p className="text-[var(--text-primary)] font-medium">{venue.state}, {venue.country}</p>
                    </div>
                  </div>
                </div>
             </div>
           </GlassCard>
        </section>

        {/* 3. WHAT'S INCLUDED SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow={whatsIncluded.label}
            title={whatsIncluded.h2.split('.')[0] + '.'}
            highlightText={whatsIncluded.h2.split('.')[1] ? whatsIncluded.h2.split('.')[1] + '.' : ''}
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-y-12 lg:gap-x-10">
            {whatsIncluded.cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full p-6 hover:-translate-y-1 hover:border-[var(--accent-gold)]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-gold)] mb-4 group-hover:scale-110 group-hover:bg-[var(--accent-gold)]/10 transition-all duration-300">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[var(--text-primary)] mb-2">{card.title}</h3>
                  <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed">{card.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4 & 5. DAILY SCHEDULE & PRICING (Premium Aesthetic Redesign) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Aesthetic Background Glows */}
          <div className="absolute top-1/4 -left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[var(--accent-sage)]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 relative z-10">
            
            {/* Left Column: Premium Animated Daily Schedule */}
            <div className="flex-1 lg:w-1/2 flex flex-col">
              <SectionHeading 
                eyebrow="RHYTHM OF THE DAY"
                title="Daily"
                highlightText="Schedule"
                align="left"
                className="mb-8"
              />
              
              <div className="relative ml-3 md:ml-4 pl-8 md:pl-12 flex flex-col gap-6 py-2 mt-2">
                {/* Gradient Timeline Line */}
                <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[var(--accent-gold)]/40 to-transparent" />
                
                {data.schedule.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: idx * 0.1, type: "spring", stiffness: 90 }}
                    className="relative group w-full"
                  >
                    {/* Glowing Timeline Node with Icon */}
                    <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--bg-primary)] z-10 group-hover:border-[var(--accent-gold)]/80 transition-all duration-500 shadow-[0_0_10px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center justify-center group-hover:scale-110">
                       <div className="text-[var(--accent-gold)]/70 group-hover:text-[var(--accent-gold)] transition-colors duration-500 z-10 relative">
                          {getTimelineIcon(item.time)}
                       </div>
                       <div className="absolute inset-0 rounded-full border border-[var(--accent-gold)] animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '2.5s' }} />
                    </div>
                    
                    {/* Sleek Premium GlassCard */}
                    <GlassCard className="p-5 md:px-6 w-full border border-[var(--border-subtle)]/40 group-hover:border-[var(--accent-gold)]/50 group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 relative overflow-hidden transform group-hover:-translate-y-1 bg-[var(--bg-primary)]/40 backdrop-blur-md cursor-default">
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                       
                       <div className="flex items-center gap-4 relative z-10 sm:w-1/4 shrink-0">
                           <span className="font-mono text-[14px] tracking-widest text-[var(--accent-gold)]/90 group-hover:text-[var(--accent-gold)] transition-colors uppercase">{item.time}</span>
                       </div>
                       <div className="font-serif text-lg md:text-xl text-[var(--text-primary)]/90 relative z-10 sm:text-right flex-1 group-hover:text-white transition-colors duration-300">{item.text}</div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing & Logistics */}
            <div className="flex-1 lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-between h-full">
                
                {/* Ultra-Premium Pricing Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="mb-8"
                >
                  <GlassCard glowColor="gold" className="p-8 sm:p-10 border border-[var(--accent-gold)]/30 border-t-4 border-t-[var(--accent-gold)] relative overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.5)] group hover:-translate-y-1 transition-transform duration-500 bg-[var(--bg-primary)]/60 backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--accent-gold)]/20 via-transparent to-transparent opacity-50" />
                    
                    <Heart className="absolute -right-8 -bottom-8 w-48 h-48 text-[var(--accent-gold)]/5 pointer-events-none group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-1000" />

                    <div className="relative z-10 text-[var(--accent-gold)] text-sm uppercase tracking-widest mb-4 font-semibold text-center">{data.pricing.label}</div>
                    <div className="relative z-10 font-serif text-5xl lg:text-6xl text-[var(--text-primary)] mb-3 flex items-baseline justify-center gap-1 text-center group-hover:text-white transition-colors duration-300 drop-shadow-md">
                      {data.pricing.price}
                    </div>
                    <div className="relative z-10 text-[var(--text-secondary)] text-sm font-medium mb-8 leading-relaxed text-center mx-auto">{data.pricing.sub}</div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent mb-8 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-300" />
                    </div>
                    
                    <ul className="space-y-3 text-sm text-[var(--text-secondary)] mb-10 relative z-10">
                        {["2 meals", "Yoga", "Satsang", "Ayurveda & Ashram access"].map((point, i) => (
                          <li key={i} className="flex items-center gap-3 bg-[var(--bg-primary)]/40 p-3.5 rounded-lg border border-[var(--border-subtle)]/40 group-hover:border-[var(--accent-gold)]/20 transition-colors">
                            <Check className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                            <span className="font-medium text-[var(--text-primary)]/90">{point}</span>
                          </li>
                        ))}
                    </ul>
                    
                    <Link href="/book?type=retreat" className="block w-full relative z-10">
                      <GlassButton variant="primary" className="w-full py-4.5 text-center justify-center font-semibold shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300 text-lg uppercase tracking-wider overflow-hidden group/btn">
                        <span className="relative z-10">{data.pricing.cta}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      </GlassButton>
                    </Link>
                  </GlassCard>
                </motion.div>

                {/* Logistics Section (Bento Box layout) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                   <div className="flex items-center justify-between mb-6">
                       <h3 className="font-serif text-2xl text-[var(--text-primary)]">Logistics</h3>
                       <div className="h-px bg-gradient-to-r from-[var(--border-subtle)] to-transparent flex-1 ml-6" />
                   </div>
                   
                   <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 pl-2">
                     Our retreats are designed for deep immersion. We keep the groups intimate and the environment strictly conducive to the practice.
                   </p>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {/* Availability Card */}
                     <GlassCard className="p-5 hover:border-[var(--accent-sage)]/40 hover:bg-[var(--accent-sage)]/5 transition-all duration-500 group flex flex-col h-full bg-[var(--bg-primary)]/40 backdrop-blur-sm">
                       <div className="flex items-center gap-3 mb-4">
                         <div className="w-10 h-10 rounded-full bg-[var(--accent-sage)]/10 border border-[var(--accent-sage)]/20 flex items-center justify-center text-[var(--accent-sage)] shrink-0 group-hover:scale-110 group-hover:bg-[var(--accent-sage)]/20 transition-all duration-300">
                           <Calendar className="w-4 h-4" />
                         </div>
                         <h4 className="text-[var(--text-primary)] font-medium tracking-wide">Availability</h4>
                       </div>
                       <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-grow">{data.availability.text1}</p>
                     </GlassCard>
                     
                     {/* Requirements Card */}
                     <GlassCard className="p-5 hover:border-[var(--accent-terra)]/40 hover:bg-[var(--accent-terra)]/5 transition-all duration-500 group flex flex-col h-full bg-[var(--bg-primary)]/40 backdrop-blur-sm">
                       <div className="flex items-center gap-3 mb-4">
                         <div className="w-10 h-10 rounded-full bg-[var(--accent-terra)]/10 border border-[var(--accent-terra)]/20 flex items-center justify-center text-[var(--accent-terra)] shrink-0 group-hover:scale-110 group-hover:bg-[var(--accent-terra)]/20 transition-all duration-300">
                           <Info className="w-4 h-4" />
                         </div>
                         <h4 className="text-[var(--text-primary)] font-medium tracking-wide">Requirements</h4>
                       </div>
                       <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-grow">{data.availability.text2}</p>
                     </GlassCard>
                   </div>
                </motion.div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
