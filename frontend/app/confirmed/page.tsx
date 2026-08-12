import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';

export default function ConfirmedPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-light)] text-[var(--text-primary)] font-sans relative overflow-hidden flex flex-col items-center justify-center">
      {/* Abstract Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Navigation / Logo */}
      <nav className="absolute top-0 w-full p-6 md:p-8 flex items-center justify-center z-50">
        <Link href="/" className="font-serif text-2xl tracking-wide font-light text-[var(--text-primary)] transition-opacity hover:opacity-80">
          Inner Latitude
        </Link>
      </nav>

      <main className="relative z-10 max-w-lg mx-auto px-4 w-full text-center space-y-8">
        <GlassCard className="p-10 md:p-14 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center mb-8 border border-[var(--accent-gold)]/20 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <CheckCircle className="w-8 h-8 text-[var(--accent-gold)]" />
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-4">
            Request Received
          </h1>
          
          <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-10 text-sm md:text-base">
            We have received your request. Our team will review it and reach out within 24 hours to schedule a quick conversation.
          </p>

          <GlassButton href="/" variant="outline" size="md">
            Return to Home
          </GlassButton>
        </GlassCard>
      </main>
    </div>
  );
}
