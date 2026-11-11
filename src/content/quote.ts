import { BUSINESS } from "./site";

export const QUOTE = {
  eyebrow: "Get a Quote",
  headline: "Tell us about your job",
  intro: `Three short steps, about 2 minutes. We reply within ${BUSINESS.quoteReplyTime}.`,
  steps: ["You", "The place", "The job"],
  jobTypes: [
    { value: "small_job", label: "Small job or repair", hint: "Electrical, plumbing, painting, fixes" },
    { value: "home_renovation", label: "Home renovation", hint: "Kitchen, bathroom, flooring, more" },
    { value: "shop_renovation", label: "Shop renovation", hint: "Fit-out, commercial space" },
    { value: "not_sure", label: "Not sure", hint: "We'll help you work it out" },
  ],
  propertyTypes: ["Landed house", "Condo / apartment", "Shop lot", "Office", "Mall unit", "Other"],
  timings: [
    "Urgent — within 48 hours",
    "Within 2 weeks",
    "Within 1–3 months",
    "Flexible / just planning",
  ],
  budgets: [
    "Not sure yet",
    "Below RM 5,000",
    "RM 5,000 – 20,000",
    "RM 20,000 – 50,000",
    "RM 50,000 – 100,000",
    "Above RM 100,000",
  ],
  confirmation: {
    title: "Thanks — your request is in.",
    steps: [
      { title: "We review your details", body: `A member of our team reads your request and photos within ${BUSINESS.quoteReplyTime}.` },
      { title: "We contact you", body: "By WhatsApp or phone, to ask any questions and arrange a photo assessment or site visit." },
      { title: "You get a written quote", body: "A clear, itemised price and timeline. No obligation." },
    ],
  },
} as const;

export type JobTypeValue = (typeof QUOTE.jobTypes)[number]["value"];
