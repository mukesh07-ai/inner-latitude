'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'retreat';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    programme: initialType,
    dates: '',
    roomType: '',
    name: '',
    email: '',
    whatsapp: '',
    intent: ''
  });

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/confirmed');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden flex flex-col">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[var(--accent-gold)]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-[var(--accent-sage)]/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <main className="flex-grow flex flex-col items-center justify-start relative z-10 px-4 pt-32 pb-20 w-full max-w-4xl mx-auto">
        
        {/* Hero Section */}
        <div className="w-full text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-secondary)]">
              Begin Your Journey
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base md:text-lg">
              Reserve your space at our sanctuary. Please complete the details below to initiate your booking request.
            </p>
          </motion.div>
        </div>

        <div className="w-full max-w-3xl">
          {/* Progress Indicator */}
          <div className="mb-10 md:mb-16">
            <div className="flex items-center justify-between relative z-10">
              {[1, 2, 3, 4].map(num => {
                const isActive = step === num;
                const isCompleted = step > num;
                return (
                  <div key={num} className="flex flex-col items-center relative z-10">
                    <motion.div 
                      layout
                      animate={{
                        scale: isActive ? 1.1 : 1,
                      }}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-500 backdrop-blur-md ${
                        isActive 
                          ? 'border-[var(--accent-gold)] text-[var(--accent-gold)] bg-[var(--accent-gold)]/10 shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                          : isCompleted 
                            ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)] text-[var(--bg-primary)] shadow-md'
                            : 'border-white/10 text-white/30 bg-black/20'
                      }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} /> : num}
                    </motion.div>
                  </div>
                );
              })}
            </div>
            
            {/* Progress Line */}
            <div className="h-1 bg-white/10 rounded-full w-[calc(100%-2.5rem)] md:w-[calc(100%-3rem)] mx-auto relative -mt-5 md:-mt-6 z-0">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-sage)] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((step - 1) / 3) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
          </div>

          <motion.div 
            layout
            className="glass-panel-elevated rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-2xl border border-white/5 bg-black/20 backdrop-blur-xl"
          >
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="text-center mb-10">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">Choose Your Path</h2>
                    <p className="text-[var(--text-secondary)] md:text-lg">Select the experience that calls to you.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { id: 'retreat', title: 'The Retreat', desc: '6-Day immersive journey into wellness and connection.', price: 'From ₹12,500', icon: '✨' },
                      { id: 'residency', title: 'The Residency', desc: 'Extended stay for deep work and self-reflection.', price: '30+ Days', icon: '🌿' }
                    ].map(prog => (
                      <button
                        key={prog.id}
                        onClick={() => updateForm('programme', prog.id)}
                        className={`relative p-6 md:p-8 rounded-2xl border text-left transition-all duration-300 group ${
                          formData.programme === prog.id 
                            ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 shadow-[0_0_30px_rgba(212,175,55,0.15)] scale-[1.02]' 
                            : 'border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40'
                        }`}
                      >
                        <div className="text-4xl mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500">{prog.icon}</div>
                        <div className="font-serif text-2xl mb-2 text-[var(--text-primary)]">{prog.title}</div>
                        <div className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{prog.desc}</div>
                        <div className={`text-sm font-semibold tracking-wide ${formData.programme === prog.id ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>{prog.price}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8 md:space-y-10"
                >
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[var(--text-primary)]">Dates & Accommodation</h2>
                    <p className="text-[var(--text-secondary)]">Secure your space in the sanctuary.</p>
                  </div>
                  
                  <div className="space-y-8 md:space-y-10">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium mb-4 pl-2">Select Dates</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {['Nov 15 - Nov 21', 'Dec 05 - Dec 11', 'Jan 10 - Jan 16'].map(date => (
                          <button
                            key={date}
                            onClick={() => updateForm('dates', date)}
                            className={`p-4 rounded-xl border text-center transition-all duration-300 ${
                              formData.dates === date 
                                ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 shadow-[0_0_20px_rgba(212,175,55,0.15)]' 
                                : 'border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40'
                            }`}
                          >
                            <span className={`text-sm font-medium ${formData.dates === date ? 'text-[var(--accent-gold)]' : 'text-[var(--text-primary)]'}`}>{date}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium mb-4 pl-2">Room Type</label>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: 'shared', title: 'Shared Twin Room', price: '₹12,500', desc: 'Share a room with a fellow participant. Non-AC.' },
                          { id: 'private', title: 'Private Standard Room', price: '₹18,000', desc: 'A private sanctuary for yourself. Non-AC.' }
                        ].map(room => (
                          <button
                            key={room.id}
                            onClick={() => updateForm('roomType', room.id)}
                            className={`p-5 md:p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 text-left ${
                              formData.roomType === room.id 
                                ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 shadow-[0_0_20px_rgba(212,175,55,0.1)] scale-[1.01]' 
                                : 'border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40'
                            }`}
                          >
                            <div>
                              <div className="text-lg text-[var(--text-primary)] font-medium mb-1">{room.title}</div>
                              <div className="text-sm text-[var(--text-secondary)] leading-relaxed">{room.desc}</div>
                            </div>
                            <div className={`text-xl font-serif shrink-0 ${formData.roomType === room.id ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>{room.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[var(--text-primary)]">Your Details</h2>
                    <p className="text-[var(--text-secondary)]">Let us get to know you better.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group">
                      <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] group-focus-within:text-[var(--accent-gold)] transition-colors font-medium mb-2 pl-2">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={e => updateForm('name', e.target.value)}
                        className="w-full bg-black/20 border border-white/10 focus:border-[var(--accent-gold)] rounded-xl px-5 py-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] transition-all duration-300"
                        placeholder="e.g. Jane Doe"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] group-focus-within:text-[var(--accent-gold)] transition-colors font-medium mb-2 pl-2">Email Address</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={e => updateForm('email', e.target.value)}
                          className="w-full bg-black/20 border border-white/10 focus:border-[var(--accent-gold)] rounded-xl px-5 py-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] transition-all duration-300"
                          placeholder="hello@example.com"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] group-focus-within:text-[var(--accent-gold)] transition-colors font-medium mb-2 pl-2">WhatsApp Number</label>
                        <input 
                          type="tel" 
                          value={formData.whatsapp}
                          onChange={e => updateForm('whatsapp', e.target.value)}
                          className="w-full bg-black/20 border border-white/10 focus:border-[var(--accent-gold)] rounded-xl px-5 py-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] transition-all duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] group-focus-within:text-[var(--accent-gold)] transition-colors font-medium mb-2 pl-2">Intent for Joining</label>
                      <textarea 
                        value={formData.intent}
                        onChange={e => updateForm('intent', e.target.value)}
                        rows={4}
                        className="w-full bg-black/20 border border-white/10 focus:border-[var(--accent-gold)] rounded-xl px-5 py-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] transition-all duration-300 resize-none"
                        placeholder="What draws you to Inner Latitude? Share your intentions..."
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-10"
                >
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[var(--text-primary)]">Review & Confirm</h2>
                    <p className="text-[var(--text-secondary)]">Please verify your details before submitting.</p>
                  </div>
                  
                  <div className="bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center gap-4 border-b border-white/10 pb-6">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-medium mb-1">Programme</div>
                        <div className="font-serif text-xl text-[var(--text-primary)] capitalize">{formData.programme}</div>
                      </div>
                      <button onClick={() => setStep(1)} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors self-start sm:self-auto">Edit</button>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center gap-4 border-b border-white/10 pb-6">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-medium mb-1">Dates & Room</div>
                        <div className="text-base text-[var(--text-primary)] mb-1">{formData.dates || 'Not selected'}</div>
                        <div className="text-sm text-[var(--text-secondary)] capitalize">{formData.roomType ? formData.roomType + ' Room' : 'Not selected'}</div>
                      </div>
                      <button onClick={() => setStep(2)} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors self-start sm:self-auto">Edit</button>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-medium mb-1">Your Details</div>
                        <div className="text-base text-[var(--text-primary)] mb-1">{formData.name || 'Name not provided'}</div>
                        <div className="text-sm text-[var(--text-secondary)] mb-1">{formData.email || 'Email not provided'}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{formData.whatsapp || 'WhatsApp not provided'}</div>
                      </div>
                      <button onClick={() => setStep(3)} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors self-start sm:self-auto">Edit</button>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      onClick={handleSubmit}
                      className="group relative w-full bg-[var(--accent-gold)] text-[var(--bg-primary)] font-bold text-lg py-4 md:py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Submit Request <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    <p className="text-sm text-center text-[var(--text-muted)] mt-4 flex items-center justify-center gap-2">
                      No payment is required at this step. We will contact you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Navigation Buttons */}
            {step < 4 && (
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <button 
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                    step === 1 
                      ? 'opacity-0 pointer-events-none' 
                      : 'text-[var(--text-secondary)] hover:text-[var(--accent-gold)]'
                  }`}
                >
                  Back
                </button>
                
                <button 
                  onClick={nextStep}
                  className="group flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:bg-[var(--accent-gold)] hover:scale-105"
                >
                  Continue
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-[var(--accent-gold)]/20 border-t-[var(--accent-gold)] animate-spin" />
      </div>
    }>
      <BookingForm />
    </Suspense>
  );
}
