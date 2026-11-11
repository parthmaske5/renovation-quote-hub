import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, PageIntro } from "@/components/site/blocks";
import { FaqList } from "@/components/site/FaqList";
import { Section } from "@/components/site/Section";
import { GENERAL_FAQS } from "@/content/faqs";
import { SHOP } from "@/content/shop";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: pageMeta(
      "FAQ — Cost, Timing, Permits, Warranty & Payment",
      "Answers to common questions about renovation cost, urgent jobs, permits for shops, 3D design, warranty, after-hours work, payment and service areas.",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: GENERAL_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="FAQ" title="Questions people ask before they call" intro="Can't find your answer? WhatsApp us — a real person replies." />
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">General</h2>
          <FaqList faqs={GENERAL_FAQS} idPrefix="general" />
          <h2 className="mb-4 mt-14 text-2xl font-bold">Shop renovation</h2>
          <FaqList faqs={SHOP.faqs} idPrefix="shop" />
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
