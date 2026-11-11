import { BUSINESS } from "./site";

export type Step = { title: string; body: string };

export const PROCESS_TABS: { id: "small" | "project"; label: string; intro: string; steps: Step[] }[] = [
  {
    id: "small",
    label: "Small jobs",
    intro: "Repairs and technician jobs, usually finished in a single visit.",
    steps: [
      { title: "Enquire", body: "Send a WhatsApp, call, or fill in the quote form. A photo or short video helps a lot." },
      { title: `We reply within ${BUSINESS.responseTime}`, body: "A real person from our team gets back to you, not an automated message." },
      { title: "Photo assessment or quick visit", body: "For simple jobs a photo is often enough. Otherwise we come and look." },
      { title: "Written quote", body: "A clear price in writing before we start. You decide, no pressure." },
      { title: "Technician on the agreed day", body: "Our own skilled technician arrives with the right tools and parts." },
      { title: "Cleanup and handover", body: "We test the work, show you what was done and leave the area tidy." },
      { title: "Warranty and follow-up", body: `${BUSINESS.warranty}. We check in afterwards to make sure all is well.` },
    ],
  },
  {
    id: "project",
    label: "Renovation and shop projects",
    intro: "Home renovations and shop fit-outs, planned and run by one team.",
    steps: [
      { title: "Enquire", body: "Tell us about the space, what you want and any deadline — like a lease start or opening date." },
      { title: `We reply within ${BUSINESS.responseTime}`, body: "We ask a few questions and arrange a site visit at a time that suits you." },
      { title: "Site visit and measurement", body: "We measure, check services and access, and talk through ideas, budget and approvals." },
      { title: "Written quote and timeline", body: "An itemised quote with materials, stages, payment schedule and a realistic timeline." },
      { title: "Work with a named project lead", body: "One person coordinates every trade and keeps you updated with progress photos." },
      { title: "Cleanup and handover", body: "Debris removed, space cleaned, and a walk-through to close any snags together." },
      { title: "Warranty and follow-up", body: `${BUSINESS.warranty}. Maintenance support is available after handover.` },
    ],
  },
];
