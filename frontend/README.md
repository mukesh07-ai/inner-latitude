# INNER LATITUDE — Premium Wellness Platform

> **"Find Your True North."**  
> A Next.js 15 + App Router + TypeScript + Tailwind CSS + Dual-Theme Glassmorphic Web Platform.

---

## 🌟 Key Features

- **Dual-Theme Design System (Dark + Light Mode)**: Custom CSS design-token system with seamless transitions (300-500ms), `localStorage` persistence, and system theme auto-detection.
- **Glassmorphism Aesthetics**: Translucent frosted panels with custom `backdrop-blur`, gold/sage/terra accents, subtle borders, and atmospheric lighting.
- **Data-Driven Architecture**: Clean separation of content in `/data/` (`site.ts`, `retreat.ts`, `confluence.ts`, `community.ts`, `partners.ts`).
- **Typed Interfaces**: Scalable TypeScript structures in `/types/index.ts` ready for future backend/API integration.
- **Interactive Modality Explorer**: Tabbed exploration of Vipassana, Kundalini, Neuroscience, Epigenetics, Ayurveda, and Somatic Movement.
- **6-Day Arc Retreat Timeline**: Interactive day-by-day itinerary for the May 2026 South Goa retreat.
- **Confluence 5 Programme Tracks**: Interactive stages showcase for Goa's Conscious Living Expo (July 2026).
- **Interactive Application Form**: Client-side validation, category selector tabs, loading spinner, and success state.
- **Fully Responsive**: Mobile-first responsive layouts with a fullscreen animated mobile navigation menu.

---

## 🚀 Routes

- `/` — Homepage (All 18 integrated sections)
- `/about` — Founder journey & core modalities
- `/retreat` — Stillness by the Sea South Goa retreat (May 2026)
- `/confluence` — Inner Latitude Confluence Expo (July 2026)
- `/community` — Professional founding circle
- `/partners` — Event Operations & Execution partner invitations
- `/contact` — Contact page & inquiry form
- `/apply` — Application portal for retreats, stalls, membership, and partnerships

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Design Tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 💻 Getting Started

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Future Backend Integration

All form submissions in `ContactFormSection.tsx` and data models in `/data/` and `/types/index.ts` are typed and structured to connect directly with backend endpoints (e.g. Firebase, Next.js Server Actions, REST/GraphQL APIs) without needing UI redesign.
