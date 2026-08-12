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
      let start = 0;
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
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--accent-gold)] mb-2">
      {count}{suffix}
    </div>
  );
}

export function StatsCounterSection() {
  return (
    <section className="py-24 relative bg-grain border-y border-[var(--border-subtle)]">
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center justify-center p-6"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-sm tracking-[0.2em] uppercase text-[var(--text-muted)] font-medium mt-4">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
