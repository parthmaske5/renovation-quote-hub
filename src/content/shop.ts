import type { Faq } from "./services";
import type { Step } from "./process";

export const SHOP = {
  hero: {
    eyebrow: "Shop & commercial renovation",
    headline: "Your shop, ready for opening day.",
    subline: "We plan your fit-out around the three things that matter to a business: minimal downtime, a clear budget and the opening date you've promised.",
  },
  promises: [
    { title: "Minimal downtime", body: "Staged works and after-hours scheduling so an existing shop can keep trading where possible." },
    { title: "A clear budget", body: "An itemised quote with payment stages agreed up front. Changes are priced in writing before we do them." },
    { title: "Your opening date", body: "A written timeline built backwards from your opening day, with a project lead tracking it." },
  ],
  handles: [
    { title: "Design and layout", body: "Space planning, customer flow and 3D render [confirm]." },
    { title: "Approvals and permits", body: "[Confirm: council permits, landlord / mall approval drawings.]" },
    { title: "Build", body: "Demolition, partitions, walls and structural changes." },
    { title: "Electrical and lighting", body: "Power planning for equipment, signage and feature lighting." },
    { title: "Air-conditioning", body: "Sizing, piping and installation for your floor area." },
    { title: "Flooring", body: "Tiles, vinyl, epoxy or polished concrete [confirm]." },
    { title: "Ceilings", body: "Plaster, drywall or exposed ceilings with access panels." },
    { title: "Carpentry and counters", body: "Service counters, display shelving and back-of-house storage." },
  ],
  timeline: [
    { title: "Week 0 · Brief and site visit", body: "Your concept, budget, lease dates and landlord rules." },
    { title: "Week [X] · Design and quote", body: "Layout, render and an itemised quote with a timeline." },
    { title: "Week [X] · Approvals", body: "Drawings submitted to the council / landlord where needed." },
    { title: "Week [X] · Build", body: "All trades coordinated by your project lead, with weekly updates." },
    { title: "Week [X] · Handover", body: "Cleaning, snag list closed, ready for stock and staff." },
  ] satisfies Step[],
  faqs: [
    { q: "How long will my shop be closed?", a: "For new shops, there's no downtime to lose — we work to your opening date. For existing shops we can stage the works so parts of the shop keep operating. Your quote states expected closure days." },
    { q: "Can you work after hours?", a: "Yes, where the building and landlord allow. Noisy works can be scheduled at night or on weekends. [Confirm any after-hours surcharge.]" },
    { q: "Do you handle approvals?", a: "[Confirm which approvals you handle.] We tell you at the start what's needed and build it into the timeline." },
    { q: "How are payments staged?", a: "[Describe your payment stages — e.g. deposit on confirmation, progress payments, balance on handover.]" },
  ] satisfies Faq[],
};
