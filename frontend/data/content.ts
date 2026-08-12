export const content = {
  // ── SITE META ──────────────────────────────
  site: {
    name: "Inner Latitude",
    tagline: "Find Your True North",
    email: "hello@innerlatitude.org",
    phone: "+91 XXXXXXXXXX",
    whatsapp: "+91 XXXXXXXXXX",
    instagram: "https://instagram.com/innerlatitude",
    linkedin: "https://linkedin.com/company/innerlatitude",
  },
  // ── PAYMENT LINKS (REPLACE WITH REAL RAZORPAY URLS) ──
  payment: {
    retreatLink: "#razorpay-retreat",
    residencyLink: "#razorpay-residency",
    webhookUrl: "#webhook-url",
  },
  // ── CURRENCY CONVERSION (update periodically) ──
  currency: {
    usdRate: 96,
    eurRate: 110.11,
  },
  // ── PROGRAMME DATES ────────────────────────
  dates: {
    startDate: "2026-09-15",
    endDate: "2026-12-15",
    displayStart: "15 September 2026",
    displayEnd: "15 December 2026",
    residency: {
      30: { end: "2026-10-15", display: "15 Sep – 15 Oct 2026" },
      60: { end: "2026-11-14", display: "15 Sep – 14 Nov 2026" },
      90: { end: "2026-12-14", display: "15 Sep – 14 Dec 2026" },
    }
  },
  // ── PRICING (per night, INR) ────────────────
  pricing: {
    singleAC: 4500,
    singleNonAC: 3000,
    twinAC: 3500,
    twinNonAC: 2500,
    retreatMinNights: 5,
    retreatMaxNights: 7,
  },
  // ── VENUE ──────────────────────────────────
  venue: {
    name: "Sivananda Ashram",
    city: "Madurai",
    state: "Tamil Nadu",
    country: "India",
    partnerCredit: "Venue Partner — Sivananda Ashram, Madurai",
  },
  // ── HOME PAGE COPY ─────────────────────────
  home: {
    hero: {
      eyebrow: "◎ Madurai, Tamil Nadu · Sep–Dec 2026",
      headline1: "Find Your",
      headline2: "True North.",
      body: "A values-filtered conscious living experience at Sivananda Ashram, Madurai. Two programmes. One purpose. Come as you are. Leave transformed.",
      cta1: "Join the Retreat",
      cta2: "Explore Residency",
    },
    stats: [
      { top: "15 Sep", bottom: "Start Date" },
      { top: "12 Dec", bottom: "Last Day" },
      { top: "2 Programmes", bottom: "Retreat & Residency" },
      { top: "Madurai", bottom: "Tamil Nadu, India" }
    ],
    problem: {
      label: "Why people come",
      h2: "Modern life was not designed for human beings.",
      cards: [
        { title: "Loneliness", text: "Constantly connected, rarely seen. The paradox of the digital age." },
        { title: "Disconnection", text: "From your body, your purpose, and the people around you. A quiet background hum." },
        { title: "Exhaustion", text: "Not just tiredness. The kind that sleep does not fix. Nervous system overload." }
      ],
      quote: "The environment is the medicine. You cannot think your way out of an environment problem."
    },
    whatsIncluded: {
      label: "Both programmes include",
      h2: "Everything you need. Nothing you don't.",
      cards: [
        { icon: "◎", title: "Accommodation", text: "Private or shared rooms. Clean, comfortable, conducive to rest and practice." },
        { icon: "◎", title: "Two Meals Daily", text: "Sattvic breakfast at 10am and dinner at 6pm. Prepared fresh, eaten in community." },
        { icon: "◎", title: "Morning Yoga (8–10am)", text: "Daily asana, pranayama, and meditation. The non-negotiable anchor of every day." },
        { icon: "◎", title: "Evening Satsang (8–9:30pm)", text: "Chanting, scripture, silence, and community. The day closes as it began — with intention." },
        { icon: "◎", title: "Ayurveda Consultation", text: "One complimentary health check-up and consultation with an Ayurvedic physician." },
        { icon: "◎", title: "Ashram Grounds", text: "Gardens, meditation spaces, and natural surroundings. Space to breathe." },
        { icon: "◎", title: "Nature Trek (optional)", text: "Guided weekly nature treks for those who want to take practice outdoors. On request." },
        { icon: "◎", title: "Inner Latitude Community", text: "Access to the Inner Latitude community — people on the same path, globally." },
      ],
      panchakarma: {
        title: "Panchakarma 14-Day Programme available on request. A deep Ayurvedic cleanse and restoration programme.",
        cta: "Enquire About Panchakarma",
        emailSubject: "Panchakarma Enquiry"
      }
    },
    retreat: {
      label: "Programme 01 · Short Stay",
      headline: "The Retreat.",
      sub: "5 to 7 days.",
      body: "Come for a week. Arrive frayed. Leave still. The retreat is a complete immersion — morning practice, shared meals, evening Satsang, and the unhurried rhythm of ashram life.",
      schedule: [
        { time: "6:30 AM", text: "Personal practice & morning walk" },
        { time: "8:00 AM", text: "Yoga session begins" },
        { time: "10:00 AM", text: "Sattvic breakfast" },
        { time: "10:30 AM", text: "Free time / Ayurveda / rest" },
        { time: "6:00 PM", text: "Dinner" },
        { time: "8:00 PM", text: "Evening Satsang" },
        { time: "9:30 PM", text: "Quiet time" }
      ],
      pricing: {
        label: "Starting from",
        price: "₹12,500",
        sub: "for 5 nights · Twin Sharing Non-AC",
        includes: "Includes: 2 meals · Yoga · Satsang · Ayurveda & Ashram access",
        cta: "Select Your Dates →"
      },
      availability: {
        text1: "Available any dates · 15 September – 15 December 2026",
        text2: "Minimum stay: 5 nights"
      }
    },
    residency: {
      label: "Programme 02 · Long Stay",
      headline: "The Residency.",
      sub: "30, 60, or 90 days.",
      body: "Not a retreat you visit. A life you inhabit, for a defined period, with people who are choosing it deliberately. Work, practise, eat, rest, and build — together.",
      philosophy: [
        { icon: "◎", text: "High Filtration to Proximity" },
        { icon: "◇", text: "Promote the Best" },
        { icon: "⬡", text: "Organic Emergence" },
        { icon: "○", text: "Public Virtue" }
      ],
      durations: [
        {
          days: 30,
          dates: "15 Sep – 15 Oct 2026",
          startingFrom: "₹75,000",
          idealFor: "first-timers testing the model, professionals on sabbatical, solo travellers.",
          cta: "Book 30 Days →"
        },
        {
          days: 60,
          featured: true,
          badge: "Most Chosen",
          dates: "15 Sep – 14 Nov 2026",
          startingFrom: "₹150,000",
          idealFor: "remote workers, those in transition, people ready for real change.",
          cta: "Book 60 Days →"
        },
        {
          days: 90,
          dates: "15 Sep – 14 Dec 2026",
          startingFrom: "₹2,25,000",
          idealFor: "founders, artists, those ready to fully surrender to the process.",
          cta: "Book 90 Days →"
        }
      ],
      additionalInclusions: [
        "Dedicated workstation",
        "Weekly nature trek included",
        "Values-filtered community",
        "Evening programmes",
        "Personalised diet plan",
        "Inner Latitude membership"
      ]
    },
    quote2: "Surrender to the process. This is not a holiday. It is a homecoming.",
    finalCta: {
      symbol: "◎",
      headline: "15 September 2026.",
      sub: "Madurai, Tamil Nadu.",
      body: "Two programmes. One ashram. A defined window of time to step out of the life that is wearing you down and into one that is building you up.",
      cta1: "Join the Retreat",
      cta2: "Apply for Residency"
    }
  },
  book: {
    steps: ["Programme", "Dates & Room", "Your Details", "Payment"],
    programme: {
      retreat: {
        title: "Retreat",
        duration: "5–7 days",
      },
      residency: {
        title: "Residency",
        duration: "30 / 60 / 90 days",
      }
    },
    rooms: [
      { id: "singleAC", name: "Single Room AC", price: 4500 },
      { id: "singleNonAC", name: "Single Room Non-AC", price: 3000 },
      { id: "twinAC", name: "Twin Sharing AC", price: 3500 },
      { id: "twinNonAC", name: "Twin Sharing Non-AC", price: 2500 }
    ],
    form: {
      residencyQuestions: [
        "Why are you choosing a residency at this time?",
        "What do you do for work / what is your current focus?",
        "Any dietary requirements or health conditions we should know about?"
      ],
      checkboxText: "I understand this is a values-filtered community and I am committed to the daily practice structure including morning yoga and evening Satsang."
    },
    summary: {
      includes: "Includes 2 meals · Yoga · Satsang · Ayurveda check-up",
      note: "Payment processed in INR via Razorpay. Currency conversion is approximate.",
      policy: "◎ 7-day cancellation policy — full refund if cancelled 14 days before arrival"
    }
  },
  confirmed: {
    symbol: "◎",
    h2: "Your place is confirmed.",
    sub: "We will see you in Madurai.",
    body: "A confirmation has been sent to your email and WhatsApp. If you do not receive it within 30 minutes, contact hello@innerlatitude.org",
    calendarBtn: "Add to Calendar",
    whatsappBtn: "Share on WhatsApp"
  }
};
