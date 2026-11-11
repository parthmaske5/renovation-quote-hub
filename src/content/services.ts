import type { PhotoKey } from "./images";

export type Faq = { q: string; a: string };

export type ServiceLink =
  | { label: string; slug: ServiceSlug }
  | { label: string; href: "/shop-renovation" };

export type ServiceGroup = {
  id: "small-jobs" | "home-renovation" | "shop-renovation" | "design-pm";
  title: string;
  audience: string;
  situation: string;
  items: string[];
  links: ServiceLink[];
  photo: PhotoKey;
};

export const SERVICE_SLUGS = [
  "electrical",
  "plumbing-toilet-fitting",
  "kitchen",
  "bathroom",
  "flooring",
  "painting-ceilings",
  "carpentry-built-ins",
  "roofing-exterior",
  "design-project-management",
] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** /services hub, grouped by what the customer needs. */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "small-jobs",
    title: "Small jobs and repairs",
    audience: "For homeowners and tenants",
    situation:
      "A tripping breaker, a leaking toilet, a door that won't close. Send us a photo and get a skilled technician, not a guess.",
    items: [
      "Electrician",
      "Plumbing and toilet / fixture fitting",
      "Painting touch-ups",
      "Tiling repairs",
      "Doors and windows",
      "Ceiling repairs",
      "General handyman work",
    ],
    links: [
      { label: "Electrical", slug: "electrical" },
      { label: "Plumbing and toilet fitting", slug: "plumbing-toilet-fitting" },
      { label: "Painting and ceilings", slug: "painting-ceilings" },
    ],
    photo: "plumbing",
  },
  {
    id: "home-renovation",
    title: "Home renovation",
    audience: "For homeowners",
    situation:
      "Planning a new kitchen, a bathroom you're not embarrassed by, or a full refresh before moving in. One team handles every trade.",
    items: [
      "Kitchen",
      "Bathroom",
      "Flooring",
      "Painting and wall finishes",
      "Ceilings and drywall",
      "Custom carpentry and built-in storage",
      "Roofing and exterior",
      "Extensions and structural changes",
    ],
    links: [
      { label: "Kitchen", slug: "kitchen" },
      { label: "Bathroom", slug: "bathroom" },
      { label: "Flooring", slug: "flooring" },
      { label: "Carpentry and built-ins", slug: "carpentry-built-ins" },
      { label: "Roofing and exterior", slug: "roofing-exterior" },
    ],
    photo: "bathroomAfter",
  },
  {
    id: "shop-renovation",
    title: "Shop and commercial renovation",
    audience: "For shop owners and business operators",
    situation:
      "You have a lease start date, a budget and an opening day. We plan the fit-out around all three, with approvals handled.",
    items: [
      "Layout and fit-out",
      "Partitions",
      "Ceilings",
      "Flooring",
      "Electrical and lighting",
      "Plumbing",
      "Air-conditioning",
      "Painting",
      "Carpentry and counters",
      "[Confirm which shop services you offer]",
    ],
    links: [{ label: "Shop renovation", href: "/shop-renovation" }],
    photo: "shopCafeAfter",
  },
  {
    id: "design-pm",
    title: "Design, permits and project management",
    audience: "Why customers choose us",
    situation:
      "The part most contractors leave to you. We plan it, get it approved, run the site and clean up after ourselves.",
    items: [
      "Design consultation and 3D rendering",
      "Space planning",
      "Permit and approval handling",
      "A single point of contact",
      "Demolition and cleanup",
      "Warranty and maintenance",
    ],
    links: [{ label: "Design and project management", slug: "design-project-management" }],
    photo: "design",
  },
];

export type ServiceDetail = {
  slug: ServiceSlug;
  name: string;
  groupId: ServiceGroup["id"];
  summary: string;
  need: string;
  scope: string[];
  projectId: string;
  process: { title: string; body: string }[];
  faqs: Faq[];
  photo: PhotoKey;
};

const quickProcess = [
  { title: "Send photos or describe the job", body: "WhatsApp or the quote form is fastest." },
  { title: "Get a clear price", body: "A written quote before any work starts — no surprises." },
  { title: "A technician comes on the agreed day", body: "On time, with the right parts." },
  { title: "Tested, cleaned up, covered", body: "We test the work and leave the area tidy." },
];

const renoProcess = [
  { title: "Site visit and measurement", body: "We look at the space and listen to how you use it." },
  { title: "Written quote and timeline", body: "Itemised scope, materials and stages in writing." },
  { title: "Work with a named project lead", body: "One person to call from start to handover." },
  { title: "Cleanup, handover and warranty", body: "A walk-through, a snag list closed, and follow-up." },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "electrical",
    name: "Electrical",
    groupId: "small-jobs",
    summary: "Safe, tidy electrical work — from a new socket to a full rewire.",
    need: "When the lights flicker, a breaker keeps tripping or you need more power points for a new aircon, you want someone qualified who explains the fix and leaves no loose wiring behind.",
    scope: [
      "Troubleshooting tripping and faulty circuits",
      "New power points, switches and lighting",
      "Distribution board upgrades and rewiring",
      "Aircon and water heater power points",
      "Ceiling fans and light fittings",
      "[Confirm: registered electrician / ST certification]",
    ],
    projectId: "home-rewire",
    process: quickProcess,
    faqs: [
      { q: "My breaker keeps tripping. Can you come quickly?", a: "Usually yes. Send us a WhatsApp with a photo of the board and we'll tell you how soon we can come — typically within [X]." },
      { q: "Is your electrician registered?", a: "[State your Suruhanjaya Tenaga registration or the qualification your electricians hold.]" },
      { q: "Can you add power points without hacking the wall?", a: "Often yes, using surface trunking. We'll show you both options and the difference in price before we start." },
    ],
    photo: "electrical",
  },
  {
    slug: "plumbing-toilet-fitting",
    name: "Plumbing and Toilet Fitting",
    groupId: "small-jobs",
    summary: "Leaks, blockages and new fittings, done properly the first time.",
    need: "A leaking pipe, a toilet that keeps running or a new sink you've bought and can't install. You want it sorted cleanly without the bathroom being out of action for days.",
    scope: [
      "Leak detection and pipe repairs",
      "Toilet bowl, cistern and bidet spray installation",
      "Sinks, taps, mixers and shower sets",
      "Water heater installation",
      "Blocked drains and floor traps",
      "Water pump and tank work [confirm]",
    ],
    projectId: "toilet-refit",
    process: quickProcess,
    faqs: [
      { q: "Can you install a toilet bowl I already bought?", a: "Yes. Send us the model and a photo of the current toilet so we can check the outlet type before we come." },
      { q: "How do you find a hidden leak?", a: "We start with a pressure and meter check, then open up only where needed. We'll explain before we hack anything." },
      { q: "Do you replace squat toilets with sitting ones?", a: "Yes, including the floor rework and re-tiling around it. This is quoted after we see the space." },
    ],
    photo: "plumbing",
  },
  {
    slug: "kitchen",
    name: "Kitchen Renovation",
    groupId: "home-renovation",
    summary: "A kitchen that works the way you cook — planned, built and installed by one team.",
    need: "Your kitchen cabinets are peeling, there's never enough counter space and the wiring can't handle today's appliances. You want a kitchen that's easy to clean and built to last in a Malaysian home.",
    scope: [
      "Layout planning and 3D design",
      "Kitchen cabinets: top, bottom and tall units",
      "Countertops: quartz, solid surface or [options you offer]",
      "Wall and floor tiling",
      "Electrical points for hob, hood, oven and fridge",
      "Sink, tap and water heater plumbing",
      "Wet and dry kitchen layouts",
    ],
    projectId: "terrace-kitchen",
    process: renoProcess,
    faqs: [
      { q: "How long does a kitchen renovation take?", a: "It depends on the scope and cabinet fabrication time. Your written quote includes a timeline — typically [X weeks] for a standard kitchen." },
      { q: "Can I still use the kitchen during works?", a: "Usually not during demolition and installation. We'll plan the stages so the kitchen is out of action for as short a time as possible." },
      { q: "Do you show a design before building?", a: "Yes. You'll see a layout and [3D render — confirm] before anything is fabricated." },
      { q: "Can I supply my own appliances?", a: "Yes. Give us the model numbers so we can size the cabinets and power points correctly." },
    ],
    photo: "kitchenAfter",
  },
  {
    slug: "bathroom",
    name: "Bathroom Renovation",
    groupId: "home-renovation",
    summary: "Waterproofed, well-drained bathrooms that stay looking new.",
    need: "Cracked tiles, water seeping into the next room, or an old squat toilet you want replaced. A bathroom has to be waterproofed and sloped properly, or problems come back.",
    scope: [
      "Hacking and removal of old tiles and fittings",
      "Waterproofing membrane and floor screed with correct falls",
      "Wall and floor tiling",
      "Toilet, basin, vanity and shower installation",
      "Glass shower screens",
      "Ventilation, lighting and water heater",
    ],
    projectId: "condo-bathroom",
    process: renoProcess,
    faqs: [
      { q: "Do you waterproof before tiling?", a: "Yes, always. [Describe your waterproofing method and any water test you do.]" },
      { q: "How long will we be without the bathroom?", a: "A full bathroom renovation usually takes [X days]. If it's your only bathroom, tell us — we'll plan around it." },
      { q: "Can you tile over existing tiles?", a: "Sometimes, if the old tiles are sound. We'll tell you honestly after checking whether it's safe to." },
    ],
    photo: "bathroomAfter",
  },
  {
    slug: "flooring",
    name: "Flooring",
    groupId: "home-renovation",
    summary: "Level, durable floors in tiles, vinyl or laminate.",
    need: "Hollow-sounding tiles, popping floors or a new home you want to make your own. You want a floor that's level, lasts and is laid with tidy joints.",
    scope: [
      "Porcelain and ceramic tiling",
      "Vinyl plank (SPC) and laminate",
      "Floor levelling and screeding",
      "Hacking of old tiles or overlay where suitable",
      "Skirting and transition strips",
    ],
    projectId: "living-floor",
    process: renoProcess,
    faqs: [
      { q: "Should I hack the old tiles or overlay?", a: "Overlay can save time and dust if the existing floor is sound and level. We'll check and advise." },
      { q: "Is vinyl flooring suitable for Malaysian homes?", a: "Good-quality SPC vinyl handles humidity well indoors. We'll recommend options for each room." },
      { q: "Do you supply the tiles?", a: "[We can supply, or you can — confirm your policy.]" },
    ],
    photo: "flooring",
  },
  {
    slug: "painting-ceilings",
    name: "Painting and Ceilings",
    groupId: "home-renovation",
    summary: "Clean paint finishes and plaster ceilings, without the mess.",
    need: "Stained ceilings after a roof leak, flaking walls or a home that just looks tired. You want a clean finish and furniture protected, not paint on your floor.",
    scope: [
      "Interior and exterior painting",
      "Wall preparation, crack and damp-patch repair",
      "Plaster ceiling and drywall installation",
      "Cove lighting and ceiling design",
      "Ceiling repairs after leaks",
    ],
    projectId: "ceiling-refresh",
    process: quickProcess,
    faqs: [
      { q: "Do you cover the furniture?", a: "Yes. We cover floors and furniture and clean up each day." },
      { q: "Can you fix a ceiling stained by a leak?", a: "Yes, but we'll find and fix the leak first so the stain doesn't come back." },
      { q: "Which paint brands do you use?", a: "[List the brands you use or let customers choose.]" },
    ],
    photo: "painting",
  },
  {
    slug: "carpentry-built-ins",
    name: "Carpentry and Built-ins",
    groupId: "home-renovation",
    summary: "Made-to-measure wardrobes, cabinets and storage.",
    need: "Not enough storage, awkward corners and furniture that doesn't fit. Built-ins use every centimetre and are made for your space.",
    scope: [
      "Wardrobes and walk-in wardrobes",
      "TV cabinets and feature walls",
      "Shoe cabinets, study desks and shelving",
      "Kitchen cabinets",
      "Shop counters and display fixtures",
    ],
    projectId: "condo-built-ins",
    process: renoProcess,
    faqs: [
      { q: "Is the carpentry made by your own team?", a: "[Confirm whether you fabricate in-house or with a partner workshop.]" },
      { q: "What materials do you use?", a: "[List board types and laminate options you offer.]" },
      { q: "How long does fabrication take?", a: "Usually [X weeks] after the design is confirmed." },
    ],
    photo: "carpentry",
  },
  {
    slug: "roofing-exterior",
    name: "Roofing and Exterior",
    groupId: "home-renovation",
    summary: "Leak-free roofs and exteriors that survive the monsoon.",
    need: "Water stains after every heavy rain, broken roof tiles or a faded exterior. Roof work has to be done safely and checked under real rain.",
    scope: [
      "Roof leak inspection and repair",
      "Roof tile replacement and re-roofing",
      "Gutters and downpipes",
      "Exterior painting and waterproof coating",
      "Porch, gate and fencing works [confirm]",
    ],
    projectId: "terrace-exterior",
    process: renoProcess,
    faqs: [
      { q: "Can you find where my roof is leaking?", a: "Yes. We inspect from inside and on the roof, then quote the repair with photos of what we found." },
      { q: "Do you guarantee leak repairs?", a: "[State your warranty on roof repairs.]" },
      { q: "Do I need council approval for re-roofing?", a: "It depends on the scope and your local council. We'll advise and [handle the application — confirm]." },
    ],
    photo: "roofing",
  },
  {
    slug: "design-project-management",
    name: "Design and Project Management",
    groupId: "design-pm",
    summary: "Plans, approvals and one person running your project.",
    need: "You don't have time to manage five contractors, chase permits and check the site every day. You want one accountable team that plans properly and keeps you updated.",
    scope: [
      "Design consultation and 3D rendering",
      "Space planning and layout",
      "Permit and approval handling",
      "A named project lead as your single point of contact",
      "Demolition, debris removal and final cleaning",
      "Warranty and maintenance after handover",
    ],
    projectId: "cafe-fitout",
    process: renoProcess,
    faqs: [
      { q: "Is design charged separately?", a: "[Explain your design fee policy — e.g. deducted from the renovation cost if you proceed.]" },
      { q: "Which approvals can you handle?", a: "[List the approvals you handle — e.g. council renovation permit, management office approval.]" },
      { q: "How will I get updates?", a: "Your project lead sends progress photos and updates on WhatsApp at agreed points." },
    ],
    photo: "design",
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}

export function getServiceName(slug: ServiceSlug) {
  return getServiceDetail(slug)?.name ?? slug;
}
