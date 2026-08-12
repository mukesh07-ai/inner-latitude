'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    content: "Inner Latitude completely transformed our strategic approach. Their deep insights made our transition seamless.",
    author: "Sarah Jenkins",
    role: "CEO, Nexa Ventures",
  },
  {
    id: 2,
    content: "Meticulous attention to detail beyond our expectations. They don't just provide a service; they build a partnership.",
    author: "Marcus Thorne",
    role: "Operations, Global Sync",
  },
  {
    id: 3,
    content: "An absolute game-changer. The program helped us align our core values flawlessly with our new vision.",
    author: "Elena Rodriguez",
    role: "Founder, Zenith Core",
  }
];

const features = [
  {
    icon: Users,
    title: "Alignment",
    desc: "Values that resonate internally and externally."
  },
  {
    icon: Target,
    title: "Execution",
    desc: "High-level vision turned into actionable steps."
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Solid infrastructure for enduring success."
  }
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative bg-[var(--bg-primary)] overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Minimal Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pr-0 lg:pr-8"
          >
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] font-medium block mb-4">
                Client Success
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)] mb-6">
                Vision to Reality
              </h2>
              <p className="text-[var(--text-secondary)] font-light leading-relaxed max-w-md">
                We partner with visionaries to turn complex challenges into clear opportunities.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 text-[var(--accent-gold)] opacity-80">
                    <feature.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] font-medium text-base mb-1">{feature.title}</h4>
                    <p className="text-[var(--text-secondary)] font-light text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Minimal Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 dark:bg-black/20 border border-[var(--border-subtle)] rounded-2xl p-8 md:p-12 relative min-h-[320px] flex flex-col justify-between">
              
              <div className="relative h-[160px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center"
                  >
                    <p className="text-xl md:text-2xl font-light text-[var(--text-primary)] leading-relaxed">
                      "{testimonials[activeIndex].content}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-end justify-between mt-8 pt-8 border-t border-[var(--border-subtle)]/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`author-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="font-medium text-[var(--text-primary)]">{testimonials[activeIndex].author}</h4>
                    <p className="text-xs tracking-wider uppercase text-[var(--text-muted)] mt-1">{testimonials[activeIndex].role}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === i ? 'w-6 bg-[var(--text-primary)]' : 'w-1.5 bg-[var(--border-subtle)] hover:bg-[var(--text-muted)]'
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
