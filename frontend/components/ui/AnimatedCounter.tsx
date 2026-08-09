'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isNumeric = typeof value === 'number';

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let start = 0;
    const end = value as number;
    const totalFrames = Math.min(60, duration * 60);
    const counterStep = end / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += counterStep;
      if (frame >= totalFrames) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration, isNumeric]);

  return (
    <span ref={ref} className={className}>
      {isNumeric ? displayValue : value}
      {suffix}
    </span>
  );
}
