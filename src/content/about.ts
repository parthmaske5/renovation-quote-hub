import { BUSINESS } from "./site";

export const ABOUT = {
  eyebrow: "About us",
  headline: "Skilled trades, one team, one point of contact.",
  intro: `${BUSINESS.name} is a renovation and repair team based in ${BUSINESS.city}. We take on work of every size — from a single leaking pipe to a full shop fit-out — with our own skilled manpower instead of a chain of subcontractors.`,
  story: "[Your story — who started the business, why, and what you care about. 2–3 short paragraphs.]",
  values: [
    { title: "Our own people", body: "Electricians, plumbers, tilers, painters and carpenters who work together every week, so jobs don't fall between trades." },
    { title: "Straight answers", body: "A written quote before work starts and a clear explanation of what's needed — and what isn't." },
    { title: "Respect for your space", body: "Floors and furniture covered, debris removed, and the site left tidy at the end of each day." },
    { title: "Accountable after handover", body: "Warranty in writing and a team you can still reach when you need us." },
  ],
  team: [
    { name: "[Founder / owner name]", role: "[Role]" },
    { name: "[Project lead name]", role: "Project lead" },
    { name: "[Team member name]", role: "[Trade]" },
  ],
};
