import { BUSINESS } from "./site";
import type { Faq } from "./services";

/** General FAQ, written from the visitor's point of view. */
export const GENERAL_FAQS: Faq[] = [
  {
    q: "How much does it cost?",
    a: "It depends on the size of the space, the materials you choose, the scope of work, access to the site and whether permits are needed. We don't guess prices — we give you a written, itemised quote after a photo assessment or site visit, so you know the cost before any work starts.",
  },
  {
    q: "How fast can you come for urgent jobs?",
    a: `For urgent repairs like leaks or electrical trips, WhatsApp us with a photo. We reply within ${BUSINESS.responseTime} and aim to attend [same day / next working day — confirm] in ${BUSINESS.areaSummary}.`,
  },
  {
    q: "Do you do small jobs as well as big projects?",
    a: "Yes. A single toilet replacement gets the same care as a full shop fit-out. Small jobs are handled by our own technicians; larger projects get a named project lead.",
  },
  {
    q: "Do you handle permits and approvals for shops?",
    a: "[Confirm which approvals you handle — e.g. council renovation permits and landlord or management approvals.] We'll tell you early what's needed so it doesn't delay your opening.",
  },
  {
    q: "Do you offer design and 3D rendering?",
    a: "[Confirm.] For renovations we can prepare a layout and 3D render so you can see the result before work begins.",
  },
  {
    q: "What warranty do you give?",
    a: `${BUSINESS.warranty}. We'll put the warranty terms in writing with your quote.`,
  },
  {
    q: "Can work be done outside shop opening hours?",
    a: "Yes, where the building allows it. We can schedule noisy work after hours or on weekends to keep your shop running. [Confirm any after-hours surcharge.]",
  },
  {
    q: "How does payment work?",
    a: "[Describe your payment stages — e.g. deposit on confirmation, progress payments at agreed stages, balance on handover.] Small jobs are usually paid on completion.",
  },
  {
    q: "Which areas do you cover?",
    a: `We cover ${BUSINESS.serviceAreas.join(", ")}. If you're nearby but not listed, ask — we may still be able to help.`,
  },
  {
    q: "Do I need to be present?",
    a: "For the site visit and handover, yes, or someone you trust. During the works you don't need to be — your project lead sends progress photos and updates on WhatsApp.",
  },
];
