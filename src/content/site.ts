/**
 * Business details. Every value in [square brackets] is a placeholder the owner
 * still has to provide — it renders highlighted on the site until replaced.
 * All page copy lives in src/content/* so a Bahasa Malaysia / Chinese version
 * can be added later as parallel content files.
 */
export const BUSINESS = {
  name: "[BUSINESS NAME]",
  legalName: "[Registered company name]",
  city: "[CITY/STATE]",
  country: "Malaysia",
  /** Shown in hero, footer, quote page and structured data. */
  areaSummary: "[AREA]",
  serviceAreas: ["[Area / city 1]", "[Area / city 2]", "[Area / city 3]", "[Area / city 4]"],
  phoneDisplay: "[+60 phone number]",
  /** Digits only, international format, used for tel: links. Replace with the real number. */
  phoneE164: "+60000000000",
  whatsappDisplay: "[+60 WhatsApp number]",
  /** Digits only, no "+", used for wa.me links. Replace with the real number. */
  whatsappNumber: "60000000000",
  email: "[email address]",
  address: "[Street address, postcode, city, state]",
  hours: [
    { days: "Mon – Fri", time: "[opening hours]" },
    { days: "Saturday", time: "[opening hours]" },
    { days: "Sunday & public holidays", time: "[opening hours]" },
  ],
  hoursSummary: "[Mon–Sat, opening hours]",
  /** How fast you reply to a new enquiry, e.g. "2 working hours". */
  responseTime: "[X working hours]",
  /** When a quote requester hears back, e.g. "1 working day". */
  quoteReplyTime: "[X working day(s)]",
  /** Set to e.g. "12 years" to show it. Leave null to hide it everywhere. */
  yearsInBusiness: null as string | null,
  /** Set to e.g. "RM 150" to show "Small jobs from RM 150". Leave null to hide. */
  smallJobsFrom: null as string | null,
  registrations: [
    { label: "SSM business registration", value: "[SSM registration no.]" },
    { label: "CIDB registration", value: "[CIDB grade & no. — only if held]" },
    {
      label: "Suruhanjaya Tenaga electrical registration",
      value: "[ST registration no. — only if applicable]",
    },
  ],
  insurance: "[Insurance cover you actually hold — e.g. public liability]",
  warranty: "[Your warranty terms — e.g. X months on workmanship]",
} as const;

export const CTA = {
  label: "Get a Quote",
  to: "/get-a-quote",
} as const;

export const NAV = [
  { label: "Services", to: "/services" },
  { label: "Shop Renovation", to: "/shop-renovation" },
  { label: "Projects", to: "/projects" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
] as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I found you on your website and would like a quote. My job is: ";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:${BUSINESS.phoneE164}`;
export const mailUrl = `mailto:${BUSINESS.email}`;

export const UI = {
  whatsapp: "WhatsApp us",
  call: "Call us",
  replaceReview: "Replace with real review",
  samplePhoto: "Replace with real project photo",
  sampleProject: "Sample project — replace with real details",
  before: "Before",
  after: "After",
  viewProject: "View project",
} as const;
