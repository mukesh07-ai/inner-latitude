import React from 'react';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--accent-terra)]/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-elevated p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-6">
            <p>Last updated: August 2026</p>
            
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Inner Latitude website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">2. Booking and Cancellation</h2>
            <p>
              All retreat bookings are subject to availability and confirmation. A deposit is required to secure your spot. Cancellations made within 30 days of the retreat start date may be subject to a cancellation fee. Please review our detailed refund policy provided upon booking.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">3. Participant Responsibilities</h2>
            <p>
              Participants are expected to conduct themselves in a respectful manner towards staff and other guests. We reserve the right to ask any participant to leave the retreat if their behavior is deemed disruptive or inappropriate.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">4. Health and Safety</h2>
            <p>
              Our retreats involve physical activities and wellness practices. It is your responsibility to consult with a healthcare provider before participating if you have any medical conditions. By participating, you assume all risks associated with the activities.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Inner Latitude and protected by applicable copyright laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
