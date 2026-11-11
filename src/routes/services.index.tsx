import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, PageIntro, ServiceGroupCards } from "@/components/site/blocks";
import { Section } from "@/components/site/Section";
import { QuoteButton } from "@/components/site/QuoteButton";
import { BUSINESS } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: pageMeta(
      "Renovation & Repair Services",
      "Small jobs and repairs, home renovation, shop and commercial renovation, plus design, permits and project management — grouped by what you need.",
    ),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Every size of job, grouped by what you need"
        intro={`From a single repair to a full shop fit-out across ${BUSINESS.areaSummary}. Not sure where your job fits? Get a Quote and tell us in your own words.`}
      >
        <QuoteButton />
      </PageIntro>
      <Section>
        <ServiceGroupCards detailed />
      </Section>
      <ClosingCta />
    </>
  );
}
