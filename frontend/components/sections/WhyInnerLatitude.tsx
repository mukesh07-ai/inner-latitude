'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '@/data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export function WhyInnerLatitude() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    month: '',
    concern: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Panchakarma Enquiry:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0APreferred Month: ${formData.month}%0AConcern: ${formData.concern}`;
    const waNumber = content.site.whatsapp.replace(/\D/g, ''); // Extract only numbers
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', month: '', concern: '' });
  };

  return (
    <section className="pt-12 pb-8 md:pt-16 md:pb-12 relative bg-[var(--bg-light)] overflow-hidden border-t border-[var(--border-subtle)]" id="whats-included">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[var(--accent-terra)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={content.home.whatsIncluded.label}
          title={content.home.whatsIncluded.h2}
          className="mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-8 lg:mt-10">
          {content.home.whatsIncluded.cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col p-5 lg:p-6 border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 backdrop-blur-xl rounded-[1.5rem] overflow-hidden group hover:border-[var(--accent-gold)]/30 hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-500 relative">
                {/* Subtle Hover Glow */}
                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)]/10 blur-[40px] pointer-events-none transition-all duration-700 rounded-full translate-x-1/2 -translate-y-1/2" />
                
                <div className="flex items-center gap-3 mb-2.5 relative z-10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center group-hover:bg-[var(--accent-gold)]/20 transition-colors duration-500">
                    <span className="text-[var(--accent-gold)] text-xs">{card.icon}</span>
                  </div>
                  <h4 className="font-serif text-[17px] text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-500 leading-tight">
                    {card.title}
                  </h4>
                </div>
                
                <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed flex-grow pl-11 relative z-10">
                  {card.text}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Panchakarma Banner */}
        <motion.div 
          className="mt-10 lg:mt-12 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 lg:p-12 border border-[var(--accent-gold)]/30 bg-[var(--bg-primary)]/40 backdrop-blur-xl rounded-[2rem] lg:rounded-[3rem] relative overflow-hidden group hover:border-[var(--accent-gold)]/50 transition-colors duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[var(--accent-gold)]/10 to-[var(--accent-terra)]/10 blur-[80px] pointer-events-none rounded-full group-hover:from-[var(--accent-gold)]/15 group-hover:to-[var(--accent-terra)]/15 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              <div className="flex flex-col gap-3 max-w-3xl">
                <h4 className="font-serif text-3xl md:text-4xl text-[var(--accent-gold)] flex items-center justify-center md:justify-start gap-3">
                  <span className="text-xl">◎</span> Panchakarma
                </h4>
                <p className="text-[var(--text-primary)] font-medium text-base md:text-lg leading-relaxed max-w-2xl">
                  {content.home.whatsIncluded.panchakarma.title}
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <GlassButton 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto whitespace-nowrap px-10 py-5 text-lg shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-shadow duration-500"
                >
                  {content.home.whatsIncluded.panchakarma.cta}
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Panchakarma Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg z-10"
            >
              <GlassCard className="p-8 border border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-2xl">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-2">
                  Enquire About Panchakarma
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-8">
                  Please provide your details below. You will be redirected to WhatsApp to send your enquiry directly to our team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-[var(--border-subtle)] pb-2 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors placeholder-[var(--text-muted)]"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">WhatsApp *</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-[var(--border-subtle)] pb-2 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors placeholder-[var(--text-muted)]"
                        placeholder="+91..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">Preferred Month</label>
                    <select 
                      value={formData.month}
                      onChange={(e) => setFormData({...formData, month: e.target.value})}
                      className={`w-full bg-transparent border-b border-[var(--border-subtle)] pb-2 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors appearance-none cursor-pointer ${!formData.month ? 'text-[var(--text-muted)]' : 'text-[var(--text-primary)]'}`}
                    >
                      <option value="" disabled className="bg-[var(--bg-primary)] text-[var(--text-secondary)]">Select a month</option>
                      <option value="September" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">September</option>
                      <option value="October" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">October</option>
                      <option value="November" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">November</option>
                      <option value="December" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">December</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">Primary Health Concern</label>
                    <textarea 
                      value={formData.concern}
                      onChange={(e) => setFormData({...formData, concern: e.target.value})}
                      rows={1}
                      className="w-full bg-transparent border-b border-[var(--border-subtle)] pb-2 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none placeholder-[var(--text-muted)] min-h-[32px]"
                      placeholder="Briefly describe what you would like to address..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-transparent border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black font-semibold rounded-full px-6 py-4 mt-8 transition-colors flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest"
                  >
                    <span>Continue to WhatsApp</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
