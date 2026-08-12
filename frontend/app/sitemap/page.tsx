import React from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function SiteMapPage() {
  const otherPages = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Site Map', href: '/sitemap' },
  ];

  const categories = [
    { label: 'Exhibitors', href: '/confluence' },
    { label: 'Wellness Community', href: '/community' },
    { label: 'Partners', href: '/partners' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
          Site Map
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Navigation */}
          <div className="glass-panel-elevated p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent-gold)]" />
              Main Pages
            </h2>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-1 inline-block transition-all">Home</Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-1 inline-block transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Pathways */}
          <div className="glass-panel-elevated p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-[var(--accent-sage)] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent-sage)]" />
              Pathways
            </h2>
            <ul className="space-y-4">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-1 inline-block transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="glass-panel-elevated p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-[var(--accent-terra)] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent-terra)]" />
              Legal
            </h2>
            <ul className="space-y-4">
              {otherPages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-1 inline-block transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
