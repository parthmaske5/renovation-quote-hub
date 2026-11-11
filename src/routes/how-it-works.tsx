import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, PageIntro, PricingSection } from "@/components/site/blocks";
import { ProcessTabs } from "@/components/site/ProcessTabs";
import { QuoteButton } from "@/components/site/QuoteButton";
import { Section } from "@/components/site/Section";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: pageMeta(
      "How It Works — From Enquiry to Handover",
      "Enquire, get a reply, site visit or photo assessment, written quote and timeline, a named project lead, cleanup, handover and warranty.",
    ),
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <PageIntro eyebrow="How it works" title="From first message to handover, step by step" intro="Small jobs and big projects follow the same honest process — the bigger the job, the more planning goes in.">
        <QuoteButton />
      </PageIntro>
      <Section>
        <ProcessTabs />
      </Section>
      <PricingSection />
      <ClosingCta />
    </>
  );
}
