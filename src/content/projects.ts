import type { PhotoKey } from "./images";
import type { ServiceSlug } from "./services";

export type ProjectCategory = "home" | "shop" | "small";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  /** Service filters this project appears under. "shop-renovation" points to the shop page. */
  services: (ServiceSlug | "shop-renovation")[];
  type: string;
  location: string;
  duration: string;
  scope: string;
  constraints: string;
  result: string;
  before?: PhotoKey;
  after: PhotoKey;
  featured?: boolean;
  /** True until the owner replaces this sample with a real project. */
  sample: boolean;
};

export const PROJECT_CATEGORIES: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "small", label: "Small jobs" },
];

export const PROJECT_CATEGORY_LABEL: Record<ProjectCategory, string> = {
  home: "Home renovation",
  shop: "Shop renovation",
  small: "Small job",
};

export const PROJECTS: Project[] = [
  {
    id: "cafe-fitout",
    title: "Shop lot café fit-out",
    category: "shop",
    services: ["shop-renovation", "design-project-management", "carpentry-built-ins", "electrical"],
    type: "Café, ground-floor shop lot",
    location: "[Area]",
    duration: "[X weeks]",
    scope: "Layout and design, ceiling, terrazzo flooring, electrical and track lighting, plumbing for bar counter, aircon, timber counter and shelving.",
    constraints: "[e.g. Fixed opening date, landlord's renovation rules, work allowed only on weekdays]",
    result: "[Outcome — e.g. handed over on the agreed date, ready for opening]",
    before: "shopBefore",
    after: "shopCafeAfter",
    featured: true,
    sample: true,
  },
  {
    id: "terrace-kitchen",
    title: "Terrace house kitchen renovation",
    category: "home",
    services: ["kitchen", "electrical", "plumbing-toilet-fitting"],
    type: "Kitchen, double-storey terrace",
    location: "[Area]",
    duration: "[X weeks]",
    scope: "Hacking of old cabinets and tiles, new top and bottom cabinets, quartz island, wall tiles, new power points, sink and tap plumbing.",
    constraints: "[e.g. Family still living in the house during works]",
    result: "[Outcome — e.g. more storage, easier to clean, finished in X weeks]",
    before: "kitchenBefore",
    after: "kitchenAfter",
    featured: true,
    sample: true,
  },
  {
    id: "condo-bathroom",
    title: "Bathroom renovation and toilet replacement",
    category: "home",
    services: ["bathroom", "plumbing-toilet-fitting"],
    type: "Bathroom, terrace house",
    location: "[Area]",
    duration: "[X days]",
    scope: "Full hacking, waterproofing, re-tiling, squat toilet replaced with wall-hung toilet, vanity, glass shower screen and lighting.",
    constraints: "[e.g. Only bathroom in the home — had to be usable within X days]",
    result: "[Outcome — e.g. no more seepage into the next room]",
    before: "bathroomBefore",
    after: "bathroomAfter",
    featured: true,
    sample: true,
  },
  {
    id: "retail-fitout",
    title: "Retail boutique fit-out",
    category: "shop",
    services: ["shop-renovation", "carpentry-built-ins", "flooring", "electrical"],
    type: "Retail shop, shop lot",
    location: "[Area]",
    duration: "[X weeks]",
    scope: "Plywood display shelving and cashier counter, polished concrete floor, linear LED lighting, painting and signage power points.",
    constraints: "[e.g. Mall/landlord after-hours work rules]",
    result: "[Outcome — e.g. opened on schedule]",
    before: "shopBefore",
    after: "shopRetailAfter",
    featured: true,
    sample: true,
  },
  {
    id: "clinic-fitout",
    title: "Clinic reception and partitions",
    category: "shop",
    services: ["shop-renovation", "painting-ceilings", "flooring", "carpentry-built-ins"],
    type: "Clinic, shop lot",
    location: "[Area]",
    duration: "[X weeks]",
    scope: "Glass partitions, plaster ceiling with cove lighting, vinyl plank flooring, reception counter, aircon points.",
    constraints: "[e.g. Licensing inspection date to meet]",
    result: "[Outcome]",
    after: "shopClinicAfter",
    sample: true,
  },
  {
    id: "home-rewire",
    title: "Distribution board upgrade",
    category: "small",
    services: ["electrical"],
    type: "Electrical, landed house",
    location: "[Area]",
    duration: "[X hours]",
    scope: "Faulty breakers replaced, board rewired and labelled, new earth leakage protection.",
    constraints: "[e.g. Breaker tripping daily; urgent visit]",
    result: "[Outcome — e.g. no more tripping]",
    after: "electrical",
    sample: true,
  },
  {
    id: "toilet-refit",
    title: "Toilet and bidet spray replacement",
    category: "small",
    services: ["plumbing-toilet-fitting"],
    type: "Plumbing, condominium",
    location: "[Area]",
    duration: "[X hours]",
    scope: "Old toilet removed, new one-piece toilet and bidet spray installed, leak tested.",
    constraints: "[e.g. Management office working hours only]",
    result: "[Outcome]",
    after: "plumbing",
    sample: true,
  },
  {
    id: "living-floor",
    title: "Living room tile flooring",
    category: "home",
    services: ["flooring"],
    type: "Flooring, landed house",
    location: "[Area]",
    duration: "[X days]",
    scope: "Old floor removed, screed levelled, large-format porcelain tiles laid with levelling clips, new skirting.",
    constraints: "[e.g. Before moving in]",
    result: "[Outcome]",
    after: "flooring",
    sample: true,
  },
  {
    id: "ceiling-refresh",
    title: "Plaster ceiling and repaint",
    category: "home",
    services: ["painting-ceilings"],
    type: "Painting and ceiling, condominium",
    location: "[Area]",
    duration: "[X days]",
    scope: "New plaster ceiling with cove lighting, wall crack repair and full interior repaint.",
    constraints: "[e.g. Furniture stayed in place]",
    result: "[Outcome]",
    after: "painting",
    sample: true,
  },
  {
    id: "condo-built-ins",
    title: "Built-in wardrobe and TV cabinet",
    category: "home",
    services: ["carpentry-built-ins"],
    type: "Carpentry, condominium",
    location: "[Area]",
    duration: "[X weeks]",
    scope: "Floor-to-ceiling wardrobe and matching TV cabinet, measured, fabricated and installed.",
    constraints: "[e.g. Lift size and delivery rules]",
    result: "[Outcome]",
    after: "carpentry",
    sample: true,
  },
  {
    id: "terrace-exterior",
    title: "Roof repair and exterior repaint",
    category: "home",
    services: ["roofing-exterior", "painting-ceilings"],
    type: "Roofing and exterior, single-storey terrace",
    location: "[Area]",
    duration: "[X days]",
    scope: "Leak inspection, broken roof tiles replaced, gutters cleaned, exterior walls repainted with weather coat.",
    constraints: "[e.g. Monsoon season scheduling]",
    result: "[Outcome — e.g. dry through the next heavy rain]",
    after: "roofing",
    sample: true,
  },
];

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const SHOP_PROJECTS = PROJECTS.filter((p) => p.category === "shop");
