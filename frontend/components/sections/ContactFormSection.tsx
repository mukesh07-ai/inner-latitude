'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { APPLY_CATEGORIES } from '@/lib/constants';
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
    <section id="contact" className="py-12 md:py-16 relative bg-grain">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="START HERE"
          title="One honest"
          highlightText="conversation."
          description="Whether you want to attend the May retreat, exhibit at the Goa Expo, join the professional community, partner with us operationally, or explore investment — reach out."
          align="center"
        />

        <GlassCard glowColor="gold" className="p-8 sm:p-12 border-t-2 border-t-[var(--accent-gold)]">
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
    </section>
  );
}
