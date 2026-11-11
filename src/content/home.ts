import { BUSINESS } from "./site";

export const HOME = {
  hero: {
    eyebrow: `Home & shop renovation · ${BUSINESS.city}, Malaysia`,
    headline: "From a leaking tap to a full shop fit-out, one trusted team.",
    subline: `${BUSINESS.name} handles home repairs, renovations and shop renovations across ${BUSINESS.areaSummary}, with our own skilled team and one point of contact from quote to handover.`,
    sellingPoints: [
      { icon: "ruler", title: "Jobs of every size", body: "One socket or a whole shop lot." },
      { icon: "users", title: "Our own skilled trades", body: "Electrical, plumbing, tiling, carpentry in one team." },
      { icon: "phone", title: "One point of contact", body: "From the first quote to handover." },
      { icon: "shield", title: "Permits, cleanup and warranty", body: "Handled for you. [confirm]" },
    ],
  },
  paths: [
    {
      id: "home",
      title: "For your home",
      promise: "Repairs done right the first time, and renovations without the stress of managing five contractors.",
      examples: ["Electrical & plumbing", "Kitchen & bathroom", "Flooring, painting, built-ins"],
      linkLabel: "Home services",
      to: "/services" as const,
      photo: "bathroomAfter" as const,
    },
    {
      id: "shop",
      title: "For your shop",
      promise: "A fit-out planned around your budget, your approvals and your opening date — with minimal downtime.",
      examples: ["Layout & fit-out", "Approvals & permits", "After-hours work"],
      linkLabel: "Shop renovation",
      to: "/shop-renovation" as const,
      photo: "shopRetailAfter" as const,
    },
  ],
  trust: {
    title: "Why people trust us with their homes and shops",
    reviews: [
      { name: "[Customer name]", context: "[Area] · [Job type]", quote: "[Replace with real review — what the job was, how it went and the result.]" },
      { name: "[Customer name]", context: "[Area] · [Job type]", quote: "[Replace with real review — ideally a shop owner who opened on time.]" },
      { name: "[Customer name]", context: "[Area] · [Job type]", quote: "[Replace with real review — ideally a small repair job.]" },
    ],
  },
  pricing: {
    title: "What affects the cost",
    intro: "Every space is different, so we price your job properly instead of guessing. These are the things that move the number:",
    factors: [
      { title: "Size of the space", body: "Square footage, number of rooms or units." },
      { title: "Materials", body: "Tiles, cabinets, fittings and finishes you choose." },
      { title: "Scope of work", body: "Repair, replace or rebuild — and how many trades." },
      { title: "Site access", body: "Floor level, parking, lift and working-hour rules." },
      { title: "Permits and approvals", body: "Council, landlord or management requirements." },
    ],
  },
  closing: {
    title: "One team, one point of contact, from quote to handover.",
    body: `Tell us what you need. We reply within ${BUSINESS.responseTime} with next steps.`,
  },
};
