'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE_METADATA } from '@/lib/constants';
import { ThemeToggle } from '../theme/ThemeToggle';
import { GlassButton } from '../ui/GlassButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 bg-[var(--bg-primary)]/95 backdrop-blur-2xl border-b border-[var(--border-glass)] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full border border-[var(--accent-gold)] flex items-center justify-center text-[var(--accent-gold)] font-serif text-sm">
                ◎
              </span>
              <span className="font-serif text-xl tracking-wide text-[var(--text-primary)]">
                {SITE_METADATA.name}
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close mobile menu"
                className="p-2.5 rounded-full glass-panel text-[var(--text-primary)] hover:text-[var(--accent-gold)] focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="my-auto py-12 space-y-6">
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between py-2 text-2xl sm:text-3xl font-serif tracking-wide transition-colors ${
                      isActive
                        ? 'text-[var(--accent-gold)] font-normal'
                        : 'text-[var(--text-primary)] hover:text-[var(--accent-gold)]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[var(--accent-gold)]" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-[var(--border-subtle)] space-y-4">
            <p className="text-xs text-[var(--text-muted)] tracking-widest uppercase">
              {SITE_METADATA.tagline}
            </p>
            <GlassButton href="/apply" variant="primary" size="lg" className="w-full">
              Begin Your Journey
            </GlassButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
