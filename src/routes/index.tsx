import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  ClosingCta,
  PathCards,
  PricingSection,
  ProjectsBand,
  ServiceGroupCards,
  TrustSection,
} from "@/components/site/blocks";
import { FaqList } from "@/components/site/FaqList";
import { HomeHero } from "@/components/site/HomeHero";
import { ProcessTabs } from "@/components/site/ProcessTabs";
import { Section, SectionHeading } from "@/components/site/Section";
import { GENERAL_FAQS } from "@/content/faqs";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Home Repairs, Renovation & Shop Fit-outs",
      "From a leaking tap to a full shop fit-out: home repairs, home renovation and shop renovation in Malaysia by one skilled in-house team. Get a Quote.",
    ),
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHero />

      <Section labelledBy="paths-title">
        <SectionHeading
          id="paths-title"
          eyebrow="Who we help"
          title="Two kinds of customers, one team"
          intro="Whether it's the place you live or the place you trade, you get the same skilled people and one point of contact."
        />
        <div className="mt-10">
          <PathCards />
        </div>
      </Section>

      <Section tone="muted" labelledBy="services-title">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="What do you need done?"
            intro="Find your job by what's going on, not by trade name."
          />
          <Link to="/services" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-ink underline underline-offset-4">
            All services <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10">
          <ServiceGroupCards />
        </div>
      </Section>

      <ProjectsBand />

      <Section labelledBy="process-title">
        <SectionHeading
          id="process-title"
          eyebrow="How it works"
          title="Clear steps, no surprises"
          intro="You always know what happens next and who to call."
        />
        <ProcessTabs />
      </Section>

      <TrustSection />

      <PricingSection />

      <Section labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions people ask before they call" />
            <Link to="/faq" className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-ink underline underline-offset-4">
              All questions <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <FaqList faqs={GENERAL_FAQS} idPrefix="home-faq" />
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
