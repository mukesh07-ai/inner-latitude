import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-sage)]/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-elevated p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)] space-y-6">
            <p>Last updated: August 2026</p>
            
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">1. Information We Collect</h2>
            <p>
              At Inner Latitude, we collect information that you provide directly to us when you register for a retreat, subscribe to our newsletter, or fill out a form on our website. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
            
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to communicate with you, process your bookings, send you updates about our retreats, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">3. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. Our website uses industry-standard encryption to protect your data.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">4. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@innerlatitude.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
