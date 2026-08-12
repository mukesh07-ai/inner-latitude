'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassButton } from '../ui/GlassButton';
import { GlassCard } from '../ui/GlassCard';

export function RetreatSection() {
  const data = content.home.retreat;

  return (
    <section id="retreat" className="py-12 md:py-16 relative bg-[var(--bg-light)] overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--accent-terra)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={data.label}
          title={data.headline}
          highlightText={data.sub}
          description={data.body}
          className="mb-8 md:mb-12"
        />

        {/* 
          1. Horizontal Rectangular Timeline for Daily Schedule (Desktop)
        */}
        <div className="hidden md:block mb-6 lg:mb-8 w-full max-w-7xl mx-auto">
          <GlassCard className="relative px-6 py-10 lg:px-12 lg:py-12 border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 backdrop-blur-xl rounded-[3rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] overflow-hidden">
            {/* The "Lamp" / Top-Down Ambient Glow Effect */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[var(--accent-terra)]/20 to-transparent blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--accent-gold)]/10 blur-[60px] pointer-events-none rounded-full" />
            
            <div className="relative z-10">
              <div className="text-center mb-32 lg:mb-36">
                <h3 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rounded-sm bg-[var(--accent-terra)]" />
                  Daily Schedule
                  <div className="w-2 h-2 rounded-sm bg-[var(--accent-terra)]" />
                </h3>
              </div>

              <div className="relative w-full max-w-6xl mx-auto flex flex-row items-center justify-between pb-32 lg:pb-36">
                {data.schedule.map((item, idx) => {
                  const isTop = idx % 2 === 0;
                  const isLast = idx === data.schedule.length - 1;
                  
                  return (
                    <div key={idx} className="relative flex-1 h-[2px]">
                      {/* Connecting Line - Rectangular Square Wave Pattern */}
                      {!isLast && (
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-[40px] z-0 pointer-events-none flex">
                          {isTop ? (
                            <>
                              <div className="w-1/2 h-full border-t-2 border-r-2 border-[var(--border-subtle)]" />
                              <div className="w-1/2 h-full border-b-2 border-[var(--border-subtle)]" />
                            </>
                          ) : (
                            <>
                              <div className="w-1/2 h-full border-b-2 border-r-2 border-[var(--border-subtle)]" />
                              <div className="w-1/2 h-full border-t-2 border-[var(--border-subtle)]" />
                            </>
                          )}
                        </div>
                      )}
                      
                      {/* Node & Layered Card Content */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center group cursor-default">
                        <div className={`relative flex justify-center items-center ${isTop ? 'mt-[-20px]' : 'mt-[20px]'}`}>
                          
                          {/* Rectangular Node Dot */}
                          <div className="w-3.5 h-3.5 rounded-sm border-2 border-[var(--accent-terra)] bg-[var(--bg-primary)] group-hover:scale-[1.3] group-hover:bg-[var(--accent-terra)] transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0)] group-hover:shadow-[0_0_15px_rgba(193,101,60,0.4)] relative z-30" />
                          
                          {/* Layered Cards Effect */}
                          <div className={`absolute left-1/2 -translate-x-1/2 w-40 lg:w-44 transition-all duration-500 z-20 ${isTop ? 'bottom-full mb-4' : 'top-full mt-4'}`}>
                            <div className="relative w-full">
                              {/* Base Layer */}
                              <div className={`absolute inset-0 bg-[var(--border-glass)] border border-[var(--border-subtle)] rounded-xl transform transition-all duration-500 ${isTop ? 'group-hover:translate-x-2 group-hover:translate-y-2' : 'group-hover:-translate-x-2 group-hover:translate-y-2'}`} />
                              
                              {/* Middle Layer */}
                              <div className={`absolute inset-0 bg-[var(--accent-terra)]/5 backdrop-blur-md rounded-xl border border-[var(--accent-terra)]/20 transform transition-all duration-500 ${isTop ? 'group-hover:translate-x-1 group-hover:translate-y-1' : 'group-hover:-translate-x-1 group-hover:translate-y-1'}`} />
                              
                              {/* Front Content Layer */}
                              <div className="relative bg-[var(--bg-primary)] p-3 lg:p-4 rounded-xl border border-[var(--border-glass)] shadow-xl flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-1">
                                <div className="font-serif text-lg text-[var(--accent-terra)] mb-1">{item.time}</div>
                                <div className="text-xs font-medium text-[var(--text-primary)] leading-tight text-center">{item.text}</div>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 
          Mobile Layered List (Hidden on Desktop)
        */}
        <div className="md:hidden mb-6 max-w-md mx-auto">
          <GlassCard className="p-6 border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 backdrop-blur-xl rounded-[2rem] shadow-lg relative overflow-hidden">
            {/* Lamp Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-gradient-to-b from-[var(--accent-terra)]/20 to-transparent blur-[60px] pointer-events-none rounded-full" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl text-[var(--text-primary)] flex items-center justify-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-terra)]" />
                  Daily Schedule
                  <div className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-terra)]" />
                </h3>
              </div>
              
              <div className="space-y-6 relative border-l-2 border-[var(--border-subtle)] ml-3 pl-6 pt-1">
                {data.schedule.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[33px] top-4 w-3.5 h-3.5 rounded-sm border-2 border-[var(--accent-terra)] bg-[var(--bg-primary)] group-hover:bg-[var(--accent-terra)] transition-colors" />
                    
                    {/* Mobile Layered Card */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-[var(--border-glass)] border border-[var(--border-subtle)] rounded-xl translate-x-1.5 translate-y-1.5" />
                      <div className="absolute inset-0 bg-[var(--accent-terra)]/5 rounded-xl translate-x-0.5 translate-y-0.5" />
                      <div className="relative bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-glass)] shadow-sm">
                        <div className="font-serif text-lg text-[var(--accent-terra)] mb-0.5">{item.time}</div>
                        <div className="text-sm text-[var(--text-primary)]">{item.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 
          2. Matching Large GlassCard for Pricing Banner
        */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto"
        >
          <GlassCard className="relative px-6 py-8 lg:px-12 lg:py-10 border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] overflow-hidden group">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[var(--accent-gold)]/10 to-[var(--accent-terra)]/10 blur-[80px] pointer-events-none rounded-full" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              
              {/* Price Details */}
              <div className="text-center lg:text-left flex-shrink-0">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] font-semibold mb-2">
                  {data.pricing.label}
                </div>
                <div className="font-serif text-5xl lg:text-6xl font-light text-[var(--accent-gold)] mb-3 drop-shadow-sm">
                  {data.pricing.price}
                </div>
                <div className="text-sm text-[var(--text-secondary)] font-medium max-w-[220px] mx-auto lg:mx-0 leading-relaxed">
                  {data.pricing.sub.split(' · ').map((line, i) => (
                    <div key={i} className={i === 0 ? "mb-0.5 text-[var(--text-primary)]" : "opacity-80"}>{line}</div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] lg:w-[1px] lg:h-28 bg-[var(--border-subtle)] opacity-60" />

              {/* Includes Section */}
              <div className="flex-1 w-full px-0 lg:px-6 flex flex-col justify-center text-center lg:text-left">
                <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Everything you need for a deep immersion is provided. From nourishing meals to guided daily practices, your retreat is designed to support rest, reflection, and renewal.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-left">
                  {data.pricing.includes.replace('Includes: ', '').split(' · ').map((item, i) => (
                    <div key={i} className="text-sm text-[var(--text-primary)] flex items-center gap-3 font-medium group/item">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center transition-colors group-hover/item:bg-[var(--accent-gold)]/20">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-gold)]" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
                <GlassButton href="/book?type=retreat" variant="primary" size="lg" className="w-full lg:w-auto px-8 py-4 text-base shadow-lg">
                  {data.pricing.cta}
                </GlassButton>
              </div>

            </div>
          </GlassCard>
        </motion.div>

        {/* Availability Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 w-full max-w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-x-5 gap-y-3 px-6 py-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 backdrop-blur-md shadow-sm">
            
            {/* Status & Availability */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-sage)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-sage)]"></span>
              </div>
              <span className="text-[11px] tracking-[0.1em] uppercase font-semibold text-[var(--text-primary)]">
                {data.availability.text1.split(' · ')[0]}
              </span>
            </div>
            
            <div className="hidden sm:block w-[1px] h-4 bg-[var(--border-subtle)] opacity-50" />
            
            {/* Dates */}
            <div className="text-sm font-medium text-[var(--text-secondary)] flex items-center gap-2">
              <span className="text-[11px] tracking-wider uppercase opacity-50">Dates</span>
              <span>{data.availability.text1.split(' · ')[1]}</span>
            </div>

            <div className="hidden sm:block w-[1px] h-4 bg-[var(--border-subtle)] opacity-50" />
            
            {/* Minimum Stay */}
            <div className="text-sm font-medium text-[var(--accent-terra)] flex items-center gap-2">
              <span className="text-[11px] tracking-wider uppercase opacity-50 text-[var(--text-primary)]">Min</span>
              <span>{data.availability.text2.replace('Minimum stay: ', '')}</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
