'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const faqs = [
  {
    question: "What industries do you primarily work with?",
    answer: "We partner with organizations across various sectors, including technology, sustainable energy, and global finance, focusing on those looking to expand their global footprint with a conscious, culturally-aligned approach."
  },
  {
    question: "How long does a typical consulting engagement last?",
    answer: "Our engagements vary depending on the scope and goals. Strategic advisory might last 3-6 months, while full-scale transformation and integration projects often span 12-18 months to ensure sustainable results."
  },
  {
    question: "Are your retreat programs available internationally?",
    answer: "Yes, our retreat programs are hosted globally. We carefully select locations that offer the ideal environment for deep focus, strategic alignment, and cultural immersion."
  },
  {
    question: "How do you ensure cultural alignment during global expansion?",
    answer: "We employ a proprietary framework that integrates local cultural intelligence with your core brand values, ensuring that your expansion is respectful, relevant, and resonant in the new market."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 relative bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Inquiries"
          title="Frequently Asked Questions"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Questions */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setOpenIndex(index)}
                className={`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 border flex items-center justify-between ${
                  openIndex === index
                    ? 'bg-[var(--accent)] text-[var(--accent-foreground)] border-transparent'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--accent)]'
                }`}
              >
                <span className="font-serif text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? '-rotate-90 text-[var(--accent-foreground)]' : '-rotate-90 opacity-0 group-hover:opacity-100'
                  }`} 
                />
              </motion.button>
            ))}
          </div>

          {/* Right Column: Answers */}
          <div className="relative min-h-[200px] flex items-center bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={openIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-6">
                  {faqs[openIndex].question}
                </h3>
                <p className="text-[var(--text-secondary)] font-light leading-relaxed text-lg">
                  {faqs[openIndex].answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
