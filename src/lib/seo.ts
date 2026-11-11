import { BUSINESS } from "@/content/site";

/** Per-page title/description + Open Graph tags. Root adds og:type and twitter:card. */
export function pageMeta(title: string, description: string) {
  const full = `${title} | ${BUSINESS.name}`;
  return [
    { title: full },
    { name: "description", content: description },
    { property: "og:title", content: full },
    { property: "og:description", content: description },
    { name: "twitter:title", content: full },
    { name: "twitter:description", content: description },
  ];
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS.name,
  description:
    "Home repairs, home renovation and shop / commercial renovation with an in-house skilled team.",
  telephone: BUSINESS.phoneE164,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressCountry: "MY",
  },
  areaServed: BUSINESS.serviceAreas.map((name) => ({ "@type": "City", name })),
  priceRange: "RM",
  openingHours: BUSINESS.hoursSummary,
};
