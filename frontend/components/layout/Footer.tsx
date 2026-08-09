'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE_METADATA, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] pt-16 pb-8 transition-colors duration-400 overflow-hidden">
      {/* Background glow and pattern */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-gold)]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-sage)]/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,35,29,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,35,29,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(245,242,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,242,233,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Newsletter Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/20 via-[var(--accent-sage)]/10 to-[var(--accent-gold)]/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative glass-panel-elevated rounded-2xl px-6 py-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-50" />
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">Stay Updated</h3>
              <p className="text-[var(--text-secondary)] mt-1 text-sm md:text-base">Join our newsletter for the latest on our retreats and initiatives.</p>
            </div>
            
            <form className="flex w-full md:w-auto relative" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input 
                id="newsletter-email" 
                type="email" 
                placeholder="Enter your email address" 
                required 
                className="w-full md:w-[320px] bg-[var(--bg-surface)]/50 backdrop-blur-md border border-[var(--border-strong)] text-[var(--text-primary)] pl-5 pr-[110px] py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]/50 focus:border-[var(--accent-gold)]/50 transition placeholder:text-[var(--text-muted)] shadow-inner text-sm"
              />
              <button 
                type="submit" 
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[var(--accent-gold)] hover:bg-[var(--accent-gold-hover)] text-white dark:text-zinc-950 px-5 rounded-full font-semibold transition hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-[var(--border-strong)]"
        >
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 group">
              <span className="w-8 h-8 rounded-full border border-[var(--accent-gold)] flex items-center justify-center text-[var(--accent-gold)] font-serif text-base group-hover:shadow-[0_0_10px_rgba(177,140,74,0.5)] transition-shadow duration-300">
                ◎
              </span>
              <span className="font-serif text-2xl font-normal text-[var(--text-primary)] tracking-wide group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                {SITE_METADATA.name}
              </span>
            </div>
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent-gold)] font-medium">
              {SITE_METADATA.tagline}
            </p>
            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed max-w-md pt-2">
              A conscious living movement bringing together neuroscience, ancient wisdom, and lived experience. South Goa & Pan-India, 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-sage)] shadow-[0_0_8px_rgba(102,128,111,0.6)]"></span>
              Navigate
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 w-fit"
                  >
                    <span className="h-px w-0 bg-[var(--accent-gold)] transition-[width] duration-300 group-hover:w-3"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pathways / Audiences */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] shadow-[0_0_8px_rgba(184,92,56,0.6)]"></span>
              I am a...
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Retreat Participant', href: '/retreat' },
                { label: 'Expo Exhibitor', href: '/confluence' },
                { label: 'Wellness Professional', href: '/community' },
                { label: 'Event / Execution Partner', href: '/partners' },
                { label: 'Impact Investor', href: '/apply?type=investor' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 w-fit">
                    <span className="h-px w-0 bg-[var(--accent-gold)] transition-[width] duration-300 group-hover:w-3"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4"
        >
          <p>© {SITE_METADATA.year} {SITE_METADATA.name} · All rights reserved.</p>
          <p className="italic font-serif text-sm bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-sage)]">
            &quot;Find Your True North.&quot;
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
