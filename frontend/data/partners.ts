import { PartnersDetails } from '@/types';

export const partnersData: PartnersDetails = {
  title: "We're looking for two key partners.",
  eyebrow: 'BUILD THIS WITH US',
  subtitle: 'The vision is clear, the community is forming, and the first retreat is near. Now we need the right partners to build this at speed.',
  positions: [
    {
      id: 'event-ops',
      title: 'Event Operations Partner',
      eyebrow: 'Goa-Based Event Company',
      description: 'A Goa-based event company with venue relationships, logistics capability, and convention experience. We have an existing Goa relationship and are looking for one additional operations partner for the July expo.',
      quote: 'You bring the infrastructure. We bring the community, curation, and content. Together we build Goa\'s defining wellness expo — and everything that follows.',
      colorAccent: 'var(--accent-sage)',
      youBring: [
        'Venue sourcing & negotiation',
        'AV & technical production management',
        'On-ground event operations & vendor management',
        'Delegate registration & ticketing logistics',
      ],
      youReceive: [
        'Named event partner credit on all branding',
        'Revenue share on Confluence ticket & stall sales',
        'First right of refusal on future national events',
        'Strategic brand association & co-founding positioning',
      ],
    },
    {
      id: 'execution-partner',
      title: 'Execution Partner',
      eyebrow: 'Individual Fast-Mover (Age 24–32)',
      description: 'A sharp individual (24–32) with a background in events, wellness, or a startup. AI-native, fast-moving, excellent communicator. Most importantly: mission-aligned and loyal to a fault.',
      quote: 'Retainer + performance bonus per event. Genuine mentorship. Proximity to an interesting network being built. For the right person at the right stage of life, this is a defining chapter — not just a job.',
      colorAccent: 'var(--accent-gold)',
      youBring: [
        'Relentless follow-ups & operational coordination',
        'Content scheduling, posting & community management',
        'Vendor communications & logistics tracking',
        'Research, proposals & sponsor communications',
      ],
      youReceive: [
        'Monthly retainer ₹12,000–18,000',
        'Performance bonus per successful event',
        'Direct 1:1 mentorship from the founder',
        'Defined equity path as the brand scales',
      ],
    },
  ],
  musicProgram: {
    title: 'Evening Culture & Music Program',
    subtitle: 'Our music director is already on board.',
    description: 'A professional DJ, music producer, and artist with deep connections in the Indian and international festival circuit — including Sunburn and major conscious music events. If you\'re an artist, performer, or traditional practitioner interested in the evening programme, we\'d love to hear from you.',
  },
};
