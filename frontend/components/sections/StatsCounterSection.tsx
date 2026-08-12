'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const stats = [
  { label: "Global Projects", value: 120, suffix: "+" },
  { label: "Countries Reached", value: 45, suffix: "" },
  { label: "Strategic Partners", value: 300, suffix: "+" },
  { label: "Years of Excellence", value: 15, suffix: "" }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const end = value;
      // Simple easing animation over 2 seconds
      const duration = 2000;
      const startTime = performance.now();
      
      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--accent-gold)] mb-1 md:mb-2 flex items-baseline justify-center tracking-tight">
      <span>{count}</span>
      {suffix && <span className="text-3xl md:text-4xl lg:text-5xl ml-1 font-light opacity-80">{suffix}</span>}
    </div>
  );
}

export function StatsCounterSection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[var(--bg-primary)] border-y border-[var(--border-subtle)]">
      {/* Decorative background blobs to make glassmorphism pop */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[var(--accent-gold)]/15 rounded-full blur-[60px] md:blur-[100px] animate-pulse-glow" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[var(--accent-sage)]/15 rounded-full blur-[60px] md:blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl glass-panel glass-panel-hover group"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="h-px w-10 bg-[var(--accent-gold)] opacity-40 my-3 md:my-4 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
              <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-[var(--text-secondary)] font-medium transition-colors duration-300 group-hover:text-[var(--text-primary)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
