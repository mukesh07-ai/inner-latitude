/* eslint-disable react-hooks/set-state-in-effect */
'use client';


import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { CheckCircle2, Loader2, MapPin, Mail, Phone } from 'lucide-react';
import { APPLY_CATEGORIES, SITE_METADATA } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

interface ContactFormSectionProps {
  defaultCategory?: string;
}

function ContactFormContent({ defaultCategory }: ContactFormSectionProps) {
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocusedField(e.target.name);
  };

  const handleBlur = () => {
    setFocusedField(null);
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
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const formContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-[var(--bg-primary)] overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-[20%] w-[800px] h-[800px] bg-[var(--accent-sage)]/20 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, -60, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -right-[10%] w-[700px] h-[700px] bg-[var(--accent-gold)]/20 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="CONNECT WITH US"
            title="One honest"
            highlightText="conversation."
            description="Whether you want to attend a retreat, explore partnerships, or join our professional community — our doors are always open."
            align="left"
            className="mb-12 md:mb-20"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Map & Details */}
          <div className="flex flex-col gap-8 lg:col-span-6 xl:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-64 lg:h-[400px] rounded-[2rem] overflow-hidden glass-panel border border-[var(--border-subtle)] relative shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-gold)]/30 to-transparent mix-blend-overlay pointer-events-none z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.047055740445!2d73.9781358!3d15.280145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb66782245b73%3A0xc3c94f0e6e788e0c!2sSouth%20Goa%2C%20Goa!5e0!3m2!1sen!2sin!4v1684000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale dark:invert opacity-80 group-hover:opacity-100 group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000"
              />
              
              {/* Map overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 backdrop-blur-md flex items-start gap-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 flex items-center justify-center text-[var(--accent-gold)] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-[var(--text-primary)] font-medium">Headquarters</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Sanctuary Lane, South Goa</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] mb-5 group-hover:bg-[var(--accent-gold)] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[var(--text-primary)] mb-2">Location</h4>
                <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  Sanctuary Lane, South Goa<br/>Goa, India 403001
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--accent-sage)]/50 hover:shadow-[0_8px_30px_rgba(163,177,138,0.1)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-sage)]/10 flex items-center justify-center text-[var(--accent-sage)] mb-5 group-hover:bg-[var(--accent-sage)] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[var(--text-primary)] mb-2">Direct Line</h4>
                <div className="text-sm text-[var(--text-secondary)] font-light space-y-2 mt-2">
                  <a href={`mailto:${SITE_METADATA.email}`} className="flex items-center gap-2 hover:text-[var(--accent-gold)] transition-colors">
                    <span>{SITE_METADATA.email}</span>
                  </a>
                  <a href={`tel:${SITE_METADATA.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-[var(--accent-gold)] transition-colors">
                    <span>{SITE_METADATA.phone}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full lg:col-span-6 xl:col-span-7"
          >
            <GlassCard glowColor="gold" className="p-8 sm:p-10 h-full flex flex-col border-t-4 border-t-[var(--accent-gold)] relative overflow-hidden rounded-[2rem]">
              {/* Decorative top corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--accent-gold)]/20 to-transparent blur-2xl pointer-events-none" />
              
              {/* Category Tabs */}
              <div className="mb-10 relative z-10">
                <label className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold flex items-center gap-4 mb-5">
                  <span>I am interested in</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
                </label>
                <div className="flex flex-wrap gap-3">
                  {APPLY_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
                          isSelected
                            ? 'text-white dark:text-zinc-950'
                            : 'glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-[var(--accent-gold)] rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
                            initial={false}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{cat.label}</span>
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
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="text-center py-16 space-y-6 m-auto flex flex-col items-center justify-center w-full h-full"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2, stiffness: 300, damping: 20 }}
                      className="w-24 h-24 rounded-full bg-[var(--accent-sage)]/10 text-[var(--accent-sage)] flex items-center justify-center shadow-[0_0_50px_rgba(163,177,138,0.2)]"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    <div className="space-y-3">
                      <h4 className="font-serif text-4xl font-normal text-[var(--text-primary)]">
                        Message Received
                      </h4>
                      <p className="text-lg text-[var(--text-secondary)] font-light max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Inner Latitude. Our team will review your message and connect with you shortly.
                      </p>
                    </div>
                    <div className="pt-8">
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
                    variants={formContainerVariants}
                    initial="hidden"
                    animate="show"
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <motion.div variants={itemVariants} className="relative group">
                        <label className={`text-xs uppercase tracking-widest font-semibold block mb-2 transition-colors duration-300 ${focusedField === 'fullName' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>
                          Full Name *
                        </label>
                        <div className="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'fullName' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Your full name"
                            className={`w-full pl-11 pr-4 py-3.5 rounded-xl glass-input focus:ring-2 focus:ring-[var(--accent-gold)]/40 focus:border-[var(--accent-gold)] transition-all duration-300 ${
                              errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : ''
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {errors.fullName && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs text-red-400 mt-2">{errors.fullName}</motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Email */}
                      <motion.div variants={itemVariants} className="relative group">
                        <label className={`text-xs uppercase tracking-widest font-semibold block mb-2 transition-colors duration-300 ${focusedField === 'email' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>
                          Email Address *
                        </label>
                        <div className="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'email' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="your@email.com"
                            className={`w-full pl-11 pr-4 py-3.5 rounded-xl glass-input focus:ring-2 focus:ring-[var(--accent-gold)]/40 focus:border-[var(--accent-gold)] transition-all duration-300 ${
                              errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : ''
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs text-red-400 mt-2">{errors.email}</motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Phone / WhatsApp */}
                      <motion.div variants={itemVariants} className="relative group">
                        <label className={`text-xs uppercase tracking-widest font-semibold block mb-2 transition-colors duration-300 ${focusedField === 'phone' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>
                          Phone / WhatsApp
                        </label>
                        <div className="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'phone' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input focus:ring-2 focus:ring-[var(--accent-gold)]/40 focus:border-[var(--accent-gold)] transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      {/* Organisation / Brand */}
                      <motion.div variants={itemVariants} className="relative group">
                        <label className={`text-xs uppercase tracking-widest font-semibold block mb-2 transition-colors duration-300 ${focusedField === 'organization' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>
                          Organisation / Brand
                        </label>
                        <div className="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'organization' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Company or personal initiative"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input focus:ring-2 focus:ring-[var(--accent-gold)]/40 focus:border-[var(--accent-gold)] transition-all duration-300"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Message */}
                    <motion.div variants={itemVariants} className="relative group">
                      <label className={`text-xs uppercase tracking-widest font-semibold block mb-2 transition-colors duration-300 ${focusedField === 'message' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>
                        Tell us about yourself & what draws you here *
                      </label>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute left-4 top-4 w-4 h-4 transition-colors duration-300 ${focusedField === 'message' ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="A few lines about your background, interest, or vision..."
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl glass-input resize-none focus:ring-2 focus:ring-[var(--accent-gold)]/40 focus:border-[var(--accent-gold)] transition-all duration-300 ${
                            errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : ''
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs text-red-400 mt-2">{errors.message}</motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants} className="pt-6">
                      <GlassButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto group overflow-hidden relative"
                      >
                        <motion.div 
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        <div className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span className="font-medium tracking-wide">Transmitting...</span>
                            </>
                          ) : (
                            <>
                              <span className="font-medium tracking-wide">Send Message</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                            </>
                          )}
                        </div>
                      </GlassButton>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ContactFormSection(props: ContactFormSectionProps) {
  return (
    <Suspense fallback={
      <div className="py-12 flex justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[var(--accent-gold)] border-t-transparent animate-spin" />
      </div>
    }>
      <ContactFormContent {...props} />
    </Suspense>
  );
}
