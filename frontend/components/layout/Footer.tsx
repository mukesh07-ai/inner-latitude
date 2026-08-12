'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_METADATA, NAV_LINKS } from '@/lib/constants';
import { MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] pt-10 md:pt-12 pb-8 transition-colors duration-400 overflow-hidden">
      {/* Background glow and pattern */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-gold)]/20 dark:bg-[var(--accent-gold)]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-sage)]/20 dark:bg-[var(--accent-sage)]/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Newsletter Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/10 via-[var(--accent-sage)]/5 to-[var(--accent-gold)]/10 dark:from-[var(--accent-gold)]/20 dark:via-[var(--accent-sage)]/10 dark:to-[var(--accent-gold)]/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative glass-panel-elevated rounded-2xl px-6 py-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl shadow-black/5 dark:shadow-none min-h-[140px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-50" />
            
            <AnimatePresence mode="wait">
              {isSubscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex flex-col md:flex-row items-center justify-center w-full gap-4 text-center py-2"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-sage)]/20 text-[var(--accent-sage)] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">Welcome to the Journey</h3>
                    <p className="text-[var(--text-secondary)] text-sm md:text-base mt-1">
                      Thank you for subscribing. Check your inbox for updates soon.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col md:flex-row items-center justify-between w-full gap-6"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">Stay Updated</h3>
                    <p className="text-[var(--text-secondary)] mt-1 text-sm md:text-base">Join our newsletter for the latest on our retreats and initiatives.</p>
                  </div>
                  
                  <form className="flex w-full md:w-auto relative" onSubmit={handleSubscribe}>
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input 
                      id="newsletter-email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address" 
                      required 
                      className="w-full md:w-[320px] bg-white/70 dark:bg-[var(--bg-surface)]/50 backdrop-blur-md border border-[var(--border-strong)] text-[var(--text-primary)] pl-5 pr-[110px] py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]/50 focus:border-[var(--accent-gold)]/50 transition placeholder:text-[var(--text-muted)] shadow-inner text-sm"
                    />
                    <button 
                      type="submit" 
                      className="absolute right-1.5 top-1.5 bottom-1.5 bg-[var(--accent-gold)] hover:bg-[var(--accent-gold-hover)] text-white dark:text-zinc-950 px-5 rounded-full font-semibold transition hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md text-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[var(--border-strong)]"
        >
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
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
          <div className="lg:col-span-2 space-y-4 lg:ml-auto">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-sage)] shadow-none dark:shadow-[0_0_8px_rgba(102,128,111,0.6)]"></span>
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
          <div className="lg:col-span-3 space-y-4 lg:ml-auto">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] shadow-none dark:shadow-[0_0_8px_rgba(184,92,56,0.6)]"></span>
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

          {/* Connect & Contact */}
          <div className="lg:col-span-3 space-y-6 lg:ml-auto">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-none dark:shadow-[0_0_8px_rgba(212,175,55,0.6)]"></span>
                Connect
              </h4>
              
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-[var(--accent-gold)] shrink-0" />
                  <span className="leading-relaxed">Sanctuary Lane, South Goa<br/>Goa, India 403001</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                  <a href={`mailto:${SITE_METADATA.email || 'hello@innerlatitude.org'}`} className="hover:text-[var(--text-primary)] transition-colors duration-300">
                    {SITE_METADATA.email || 'hello@innerlatitude.org'}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                  <a href={`tel:${SITE_METADATA.phone?.replace(/\D/g, '') || ''}`} className="hover:text-[var(--text-primary)] transition-colors duration-300">
                    {SITE_METADATA.phone || '+91 98765 43210'}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <p>© {SITE_METADATA.year} {SITE_METADATA.name} · All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[var(--text-secondary)]">
              <Link href="/privacy-policy" className="hover:text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors">Privacy Policy</Link>
              <span className="hidden md:inline text-[var(--border-strong)]">|</span>
              <Link href="/terms" className="hover:text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors">Terms & Conditions</Link>
              <span className="hidden md:inline text-[var(--border-strong)]">|</span>
              <Link href="/sitemap" className="hover:text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors">Site Map</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="italic font-serif text-sm bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-sage)] hidden md:block">
              &quot;Find Your True North.&quot;
            </p>
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
