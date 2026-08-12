'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const images = [
  { id: 1, color: 'from-[var(--accent-gold)]/40 to-[var(--accent-sage)]/40', height: 'h-64' },
  { id: 2, color: 'from-[var(--accent-sage)]/40 to-[var(--accent-terra)]/40', height: 'h-96' },
  { id: 3, color: 'from-[var(--accent-terra)]/40 to-[var(--accent-gold)]/40', height: 'h-72' },
  { id: 4, color: 'from-[var(--accent-gold)]/40 to-[var(--accent-terra)]/40', height: 'h-80' },
  { id: 5, color: 'from-[var(--accent-sage)]/40 to-[var(--accent-gold)]/40', height: 'h-64' },
  { id: 6, color: 'from-[var(--accent-terra)]/40 to-[var(--accent-sage)]/40', height: 'h-96' },
];

const videos = [
  { id: 1, title: 'Morning Flow', color: 'from-[var(--accent-gold)]/50 to-[var(--accent-terra)]/50', duration: '3:45' },
  { id: 2, title: 'Sound Healing', color: 'from-[var(--accent-sage)]/50 to-[var(--accent-gold)]/50', duration: '5:20' },
  { id: 3, title: 'Community Dinner', color: 'from-[var(--accent-terra)]/50 to-[var(--accent-sage)]/50', duration: '2:15' },
  { id: 4, title: 'Nature Walk', color: 'from-[var(--accent-gold)]/40 to-[var(--accent-sage)]/40', duration: '4:10' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-gold)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--accent-sage)]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-secondary)]">
            Our Gallery
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            A visual journey through the spaces, faces, and moments that make up the Inner Latitude experience. Discover our sanctuary.
          </p>
        </motion.div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1.5 glass-panel-elevated rounded-full backdrop-blur-xl border border-white/10 dark:border-white/5 relative">
            {['images', 'videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'images' | 'videos')}
                className={`relative px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-500 z-10 ${
                  activeTab === tab ? 'text-[var(--bg-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-sage)] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'images' ? (
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {images.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-3xl overflow-hidden glass-panel ${img.height} w-full break-inside-avoid group cursor-pointer shadow-lg`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${img.color} opacity-60 group-hover:opacity-90 transition-opacity duration-700`} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="px-6 py-2 rounded-full glass-panel-elevated backdrop-blur-md text-sm font-medium tracking-widest uppercase border border-white/20">
                      View Moment
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {videos.map((vid, i) => (
                <motion.div
                  key={vid.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden glass-panel shadow-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${vid.color} opacity-70 group-hover:opacity-90 transition-opacity duration-700 mix-blend-overlay`} />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full glass-panel-elevated flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 border border-white/20">
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-end">
                        <h3 className="text-xl font-medium text-white tracking-wide">{vid.title}</h3>
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs text-white font-medium">
                          {vid.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
