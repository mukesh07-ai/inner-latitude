'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, MapPin, Mail, Phone } from 'lucide-react';
import { APPLY_CATEGORIES, SITE_METADATA } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

interface ContactFormSectionProps {
  defaultCategory?: string;
}

export function ContactFormSection({ defaultCategory }: ContactFormSectionProps) {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams ? searchParams.get('type') : null;

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryQuery || defaultCategory || 'retreat'
  );

  useEffect(() => {
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    }
  }, [categoryQuery]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate backend API latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 md:py-16 relative bg-[var(--bg-primary)] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--accent-sage)]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CONNECT WITH US"
          title="One honest"
          highlightText="conversation."
          description="Whether you want to attend a retreat, explore partnerships, or join our professional community — reach out."
          align="left"
          className="mb-10 md:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Map & Details */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div className="w-full h-64 lg:h-[350px] rounded-3xl overflow-hidden glass-panel border border-[var(--border-subtle)] relative shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-gold)]/20 to-transparent mix-blend-overlay pointer-events-none z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.047055740445!2d73.9781358!3d15.280145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb66782245b73%3A0xc3c94f0e6e788e0c!2sSouth%20Goa%2C%20Goa!5e0!3m2!1sen!2sin!4v1684000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale dark:invert opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)]"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[var(--text-primary)] mb-1">Location</h4>
                <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  Sanctuary Lane, South Goa<br/>Goa, India 403001
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)]"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--accent-sage)]/10 flex items-center justify-center text-[var(--accent-sage)] mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[var(--text-primary)] mb-1">Direct Line</h4>
                <div className="text-sm text-[var(--text-secondary)] font-light space-y-1 mt-2">
                  <a href={`mailto:${SITE_METADATA.email}`} className="block hover:text-[var(--accent-gold)] transition-colors">{SITE_METADATA.email}</a>
                  <a href={`tel:${SITE_METADATA.phone.replace(/\D/g, '')}`} className="block hover:text-[var(--accent-gold)] transition-colors">{SITE_METADATA.phone}</a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="h-full lg:col-span-5">
            <GlassCard glowColor="gold" className="p-6 sm:p-8 h-full flex flex-col border-t-2 border-t-[var(--accent-gold)]">
          {/* Category Tabs */}
          <div className="mb-8">
            <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-3">
              I am interested in...
            </label>
            <div className="flex flex-wrap gap-2">
              {APPLY_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--accent-gold)] text-white dark:text-zinc-950 shadow-md'
                        : 'glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--accent-sage)]/20 text-[var(--accent-sage)] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-3xl font-normal text-[var(--text-primary)]">
                  Message Received
                </h4>
                <p className="text-base text-[var(--text-secondary)] font-light max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Inner Latitude. Our team will review your application and connect with you within 24 hours.
                </p>
                <div className="pt-4">
                  <GlassButton
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', organization: '', message: '' });
                    }}
                    variant="outline"
                    size="md"
                  >
                    Send Another Message
                  </GlassButton>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl glass-input ${
                        errors.fullName ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl glass-input ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium block mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl glass-input"
                    />
                  </div>

                  {/* Organisation / Brand */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium block mb-2">
                      Organisation / Brand
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Company or personal initiative"
                      className="w-full px-4 py-3 rounded-xl glass-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium block mb-2">
                    Tell us about yourself & what draws you here *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="A few lines about your background, interest, or vision..."
                    className={`w-full px-4 py-3 rounded-xl glass-input resize-none ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4 text-center sm:text-right">
                  <GlassButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </GlassButton>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
