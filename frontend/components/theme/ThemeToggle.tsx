'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center p-2.5 rounded-full glass-panel cursor-pointer text-amber-500 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark-icon"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex items-center justify-center gap-1.5"
          >
            <Moon className="w-4 h-4 fill-amber-300/20 text-amber-300" />
          </motion.div>
        ) : (
          <motion.div
            key="light-icon"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex items-center justify-center gap-1.5"
          >
            <Sun className="w-4 h-4 fill-amber-500/20 text-amber-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
