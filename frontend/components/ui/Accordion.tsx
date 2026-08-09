'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultExpandedId?: string;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultExpandedId,
  className,
}: AccordionProps) {
  const [expandedIds, setExpandedIds] = useState<string[]>(
    defaultExpandedId ? [defaultExpandedId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setExpandedIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setExpandedIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => {
        const isExpanded = expandedIds.includes(item.id);

        return (
          <div
            key={item.id}
            className="glass-panel rounded-xl overflow-hidden transition-all duration-300 border-[var(--border-glass)]"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isExpanded}
              className="w-full p-5 md:p-6 flex items-center justify-between text-left cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <span className="text-xl text-[var(--accent-gold)]">{item.icon}</span>
                )}
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-normal text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-[var(--text-muted)] tracking-wider uppercase mt-0.5">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[var(--accent-gold)] p-1"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-[var(--border-subtle)] text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
