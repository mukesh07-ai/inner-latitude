'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { NAV_LINKS, SITE_METADATA } from '@/lib/constants';
import { ThemeToggle } from '../theme/ThemeToggle';
import { GlassButton } from '../ui/GlassButton';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between px-5 md:px-7 py-3 rounded-full transition-all duration-500 glass-panel-elevated shadow-xl border-[var(--border-glass-strong)] bg-[var(--bg-surface-elevated)]/90 backdrop-blur-2xl"
          >
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 focus:outline-none">
              <div className="w-8 h-8 rounded-full border border-[var(--accent-gold)]/40 flex items-center justify-center text-[var(--accent-gold)] font-serif text-sm transition-transform duration-500 group-hover:rotate-180">
                ◎
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wide font-normal text-[var(--text-primary)]">
                  {SITE_METADATA.name}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-light -mt-1 hidden sm:block">
                  {SITE_METADATA.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 rounded-full ${
                      isActive
                        ? 'text-[var(--accent-gold)] font-medium'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <GlassButton
                href="/apply"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Begin Journey
              </GlassButton>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation"
                className="lg:hidden p-2 rounded-full glass-panel text-[var(--text-primary)] hover:text-[var(--accent-gold)] focus:outline-none"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
